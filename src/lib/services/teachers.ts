// Teacher portal: schedule, punctuality, earnings and leave.
//
// Everything is worked out from the live-class records the portal already keeps
// (scheduled start, actual start and end, who attended), using the pay rules in
// "Kitabash Fees, Teacher Pay and Policies":
//   • class rate by level: Certified ₹400, Senior ₹500, Specialist ₹600 (or a per-teacher rate)
//   • full-batch bonus: +₹20 per student present above 5 (up to +₹100 at 10)
//   • late-night / early-morning class (starts 10 pm–7 am IST): +₹50
//   • started more than 10 minutes late: unpaid · ended more than 10 minutes early: half pay
//   • not started at all: missed, unpaid · on approved leave: not counted as missed
// Renewal, trial and certification bonuses are not tracked here; add them to the payout by hand.
import { all, get, run, id, audit } from '../db/index.ts';
import { HttpError } from '../validate.ts';

export const LEVEL_RATE = { certified: 400, senior: 500, specialist: 600 } as const;
export type Level = keyof typeof LEVEL_RATE;
const IST = 330 * 60_000;

/** Timestamps arrive as ISO strings, SQLite "YYYY-MM-DD HH:MM:SS" (UTC) strings, or Date objects. */
export function toDate(v: unknown): Date | null {
  if (!v) return null;
  if (v instanceof Date) return v;
  const s = String(v);
  return new Date(/[T]/.test(s) ? s : s.replace(' ', 'T') + 'Z');
}
const istDay = (d: Date) => new Date(d.getTime() + IST).toISOString().slice(0, 10);
const istHour = (d: Date) => new Date(d.getTime() + IST).getUTCHours();

/** UTC instants for the start and end of an IST calendar month "YYYY-MM". */
export function monthRange(month: string): { from: Date; to: Date } {
  const m = /^(\d{4})-(\d{2})$/.exec(month);
  if (!m) throw new HttpError(400, 'Month must look like 2026-11.');
  const y = Number(m[1]);
  const mo = Number(m[2]) - 1;
  return { from: new Date(Date.UTC(y, mo, 1) - IST), to: new Date(Date.UTC(y, mo + 1, 1) - IST) };
}
export const currentMonth = (now = new Date()) => istDay(now).slice(0, 7);

export type SessionStatus = 'upcoming' | 'live' | 'on_time' | 'late' | 'very_late' | 'missed' | 'cancelled' | 'on_leave';

export interface SessionRecord {
  id: string;
  title: string;
  batch: string;
  course: string;
  startsAt: string;
  day: string; // IST date
  durationMin: number;
  status: SessionStatus;
  lateMin: number | null;
  endedEarly: boolean;
  present: number;
  enrolled: number;
  pay: number;
  payNote: string;
}

/** Pay for one class, following the policy above. */
export function classPay(o: { rate: number; status: SessionStatus; present: number; startsAt: Date; endedEarly: boolean }): { pay: number; note: string } {
  if (o.status === 'missed') return { pay: 0, note: 'Missed: not started' };
  if (o.status === 'very_late') return { pay: 0, note: 'Started more than 10 min late' };
  if (!['on_time', 'late'].includes(o.status)) return { pay: 0, note: '' };
  const bonus = 20 * Math.max(0, Math.min(o.present, 10) - 5);
  const h = istHour(o.startsAt);
  const night = h >= 22 || h < 7 ? 50 : 0;
  let pay = o.rate + bonus + night;
  const parts = [`₹${o.rate}`];
  if (bonus) parts.push(`+₹${bonus} full batch`);
  if (night) parts.push('+₹50 night');
  if (o.endedEarly) (pay = Math.round(pay / 2)), parts.push('half: ended early');
  return { pay, note: parts.length === 1 ? 'Class rate' : parts.join(' ') };
}

export async function teacherProfile(teacherId: string) {
  const p = await get<{ level: Level; rate: number | null; notes: string }>('SELECT level, rate, notes FROM teacher_profiles WHERE user_id=?', teacherId);
  const level: Level = p?.level || 'certified';
  return { level, rate: p?.rate || LEVEL_RATE[level], customRate: !!p?.rate, notes: p?.notes || '' };
}

export async function setTeacherProfile(teacherId: string, patch: { level?: Level; rate?: number | null; notes?: string }, adminId: string) {
  if (!(await get("SELECT 1 FROM users WHERE id=? AND role IN ('instructor','admin')", teacherId))) throw new HttpError(404, 'Teacher not found');
  const cur = await teacherProfile(teacherId);
  const level = patch.level || cur.level;
  const rate = patch.rate === undefined ? (cur.customRate ? cur.rate : null) : patch.rate;
  const notes = patch.notes ?? cur.notes;
  if (await get('SELECT 1 FROM teacher_profiles WHERE user_id=?', teacherId))
    await run("UPDATE teacher_profiles SET level=?, rate=?, notes=?, updated_at=datetime('now') WHERE user_id=?", level, rate, notes, teacherId);
  else await run('INSERT INTO teacher_profiles (user_id, level, rate, notes) VALUES (?,?,?,?)', teacherId, level, rate, notes);
  await audit(adminId, 'update', 'teacher_profile', teacherId, `${level}${rate ? ` ₹${rate}` : ''}`);
}

async function approvedLeaveDays(teacherId: string, fromDay: string, toDay: string): Promise<Set<string>> {
  const rows = await all<{ start_date: string; end_date: string }>(
    "SELECT start_date, end_date FROM teacher_leave WHERE teacher_id=? AND status='approved' AND end_date >= ? AND start_date <= ?",
    teacherId, fromDay, toDay,
  );
  const days = new Set<string>();
  for (const r of rows) for (let d = new Date(r.start_date + 'T00:00:00Z'); istDayUTC(d) <= r.end_date; d = new Date(d.getTime() + 864e5)) days.add(istDayUTC(d));
  return days;
}
const istDayUTC = (d: Date) => d.toISOString().slice(0, 10);

/** Every class this teacher was scheduled to teach in the range, with punctuality and pay. */
export async function sessionRecords(teacherId: string, from: Date, to: Date, now = new Date()): Promise<SessionRecord[]> {
  const { rate } = await teacherProfile(teacherId);
  const rows = await all<any>(
    `SELECT s.id, s.title, s.starts_at, s.duration_min, s.status, s.started_at, s.ended_at, b.name batch, c.title course,
       (SELECT COUNT(*) FROM batch_members m WHERE m.batch_id=b.id) enrolled,
       (SELECT COUNT(*) FROM live_attendance a JOIN batch_members m ON m.user_id=a.user_id AND m.batch_id=b.id WHERE a.session_id=s.id) present
     FROM live_sessions s JOIN batches b ON b.id=s.batch_id JOIN courses c ON c.id=b.course_id
     WHERE b.instructor_id=? AND s.starts_at >= ? AND s.starts_at < ? ORDER BY s.starts_at`,
    teacherId, from.toISOString(), to.toISOString(),
  );
  const leave = await approvedLeaveDays(teacherId, istDay(from), istDay(new Date(to.getTime() - 1)));
  return rows.map((r) => {
    const starts = toDate(r.starts_at)!;
    const started = toDate(r.started_at);
    const ended = toDate(r.ended_at);
    const dur = Number(r.duration_min) || 60;
    const end = new Date(starts.getTime() + dur * 60_000);
    let status: SessionStatus;
    let lateMin: number | null = null;
    if (r.status === 'cancelled') status = 'cancelled';
    else if (started) {
      lateMin = Math.max(0, Math.round((started.getTime() - starts.getTime()) / 60_000));
      status = r.status === 'live' && !ended ? 'live' : lateMin <= 2 ? 'on_time' : lateMin <= 10 ? 'late' : 'very_late';
    } else if (leave.has(istDay(starts))) status = 'on_leave';
    else status = now < end ? 'upcoming' : 'missed';
    const endedEarly = !!(started && ended && ended.getTime() < end.getTime() - 10 * 60_000);
    const present = Number(r.present) || 0;
    const scored: SessionStatus = status === 'live' ? (lateMin! <= 2 ? 'on_time' : lateMin! <= 10 ? 'late' : 'very_late') : status;
    const { pay, note } = status === 'live' ? { pay: 0, note: 'In progress' } : classPay({ rate, status: scored, present, startsAt: starts, endedEarly });
    return {
      id: r.id, title: r.title, batch: r.batch, course: r.course, startsAt: starts.toISOString(), day: istDay(starts), durationMin: dur,
      status, lateMin, endedEarly, present, enrolled: Number(r.enrolled) || 0, pay, payNote: note,
    };
  });
}

export function summarise(records: SessionRecord[]) {
  const n = (s: SessionStatus) => records.filter((r) => r.status === s).length;
  const held = records.filter((r) => ['on_time', 'late', 'very_late'].includes(r.status));
  const lates = held.map((r) => r.lateMin || 0);
  return {
    scheduled: records.filter((r) => r.status !== 'cancelled').length,
    held: held.length,
    onTime: n('on_time'),
    late: n('late'),
    veryLate: n('very_late'),
    missed: n('missed'),
    cancelled: n('cancelled'),
    onLeave: n('on_leave'),
    upcoming: n('upcoming') + n('live'),
    endedEarly: held.filter((r) => r.endedEarly).length,
    onTimePct: held.length ? Math.round((n('on_time') / held.length) * 100) : null,
    avgLateMin: lates.length ? Math.round((lates.reduce((a, b) => a + b, 0) / lates.length) * 10) / 10 : null,
    studentsTaught: held.reduce((a, r) => a + r.present, 0),
    earnings: records.reduce((a, r) => a + r.pay, 0),
  };
}

export async function teacherMonth(teacherId: string, month: string) {
  const { from, to } = monthRange(month);
  const records = await sessionRecords(teacherId, from, to);
  const user = await get<{ name: string; email: string }>('SELECT name, email FROM users WHERE id=?', teacherId);
  return { teacher: { id: teacherId, name: user?.name || '', email: user?.email || '' }, month, profile: await teacherProfile(teacherId), summary: summarise(records), sessions: records, leave: await listLeave({ teacherId }) };
}

export async function allTeachersMonth(month: string) {
  const { from, to } = monthRange(month);
  const teachers = await all<{ id: string; name: string; email: string }>(
    "SELECT DISTINCT u.id, u.name, u.email FROM users u WHERE (u.role='instructor' AND u.disabled=0) OR u.id IN (SELECT instructor_id FROM batches WHERE instructor_id IS NOT NULL) ORDER BY u.name",
  );
  const out = [];
  for (const t of teachers) out.push({ ...t, profile: await teacherProfile(t.id), summary: summarise(await sessionRecords(t.id, from, to)) });
  return { month, teachers: out, pendingLeave: await listLeave({ status: 'pending' }) };
}

export async function payoutCsv(month: string): Promise<string> {
  const { teachers } = await allTeachersMonth(month);
  const q = (s: unknown) => `"${String(s ?? '').replace(/"/g, '""')}"`;
  const lines = [['Teacher', 'Email', 'Level', 'Rate', 'Classes held', 'On time', 'Late (2–10 min)', 'Very late (unpaid)', 'Missed', 'Ended early (half pay)', 'Students taught', 'Earnings (₹)'].map(q).join(',')];
  for (const t of teachers) {
    const s = t.summary;
    lines.push([t.name, t.email, t.profile.level, t.profile.rate, s.held, s.onTime, s.late, s.veryLate, s.missed, s.endedEarly, s.studentsTaught, s.earnings].map(q).join(','));
  }
  return '﻿' + lines.join('\r\n') + '\r\n';
}

// ── Leave ──────────────────────────────────────────────────
const DAY = /^\d{4}-\d{2}-\d{2}$/;

export async function requestLeave(teacherId: string, b: { start_date: string; end_date: string; kind: 'planned' | 'sick' | 'emergency'; reason: string }) {
  if (!DAY.test(b.start_date) || !DAY.test(b.end_date) || isNaN(Date.parse(b.start_date)) || isNaN(Date.parse(b.end_date))) throw new HttpError(400, 'Choose valid dates.');
  if (b.end_date < b.start_date) throw new HttpError(400, 'The last day must be on or after the first day.');
  if ((Date.parse(b.end_date) - Date.parse(b.start_date)) / 864e5 > 60) throw new HttpError(400, 'Leave can be at most 60 days at a time.');
  const lid = id('lv_');
  await run('INSERT INTO teacher_leave (id, teacher_id, start_date, end_date, kind, reason) VALUES (?,?,?,?,?,?)', lid, teacherId, b.start_date, b.end_date, b.kind, b.reason);
  await audit(teacherId, 'request', 'leave', lid, `${b.start_date}…${b.end_date} ${b.kind}`);
  return lid;
}

export async function listLeave(f: { teacherId?: string; status?: string } = {}) {
  const where: string[] = [];
  const args: string[] = [];
  if (f.teacherId) (where.push('l.teacher_id=?'), args.push(f.teacherId));
  if (f.status) (where.push('l.status=?'), args.push(f.status));
  const rows = await all<any>(
    `SELECT l.*, u.name teacher, d.name decided_by_name
     FROM teacher_leave l JOIN users u ON u.id=l.teacher_id LEFT JOIN users d ON d.id=l.decided_by
     ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY l.start_date DESC LIMIT 200`,
    ...args,
  );
  const out = [];
  for (const r of rows) {
    // Leave dates are Indian calendar days.
    const from = new Date(Date.parse(r.start_date + 'T00:00:00Z') - IST).toISOString();
    const to = new Date(Date.parse(r.end_date + 'T00:00:00Z') + 864e5 - IST).toISOString();
    const n = await get<{ n: number }>(
      "SELECT COUNT(*) n FROM live_sessions s JOIN batches b ON b.id=s.batch_id WHERE b.instructor_id=? AND s.status<>'cancelled' AND s.starts_at >= ? AND s.starts_at < ?",
      r.teacher_id, from, to,
    );
    out.push({ ...r, days: Math.round((Date.parse(r.end_date) - Date.parse(r.start_date)) / 864e5) + 1, classes_affected: Number(n?.n || 0) });
  }
  return out;
}

export async function decideLeave(leaveId: string, status: 'approved' | 'declined', adminId: string) {
  const l = await get<{ status: string }>('SELECT status FROM teacher_leave WHERE id=?', leaveId);
  if (!l) throw new HttpError(404, 'Leave request not found');
  if (l.status === 'cancelled') throw new HttpError(409, 'The teacher cancelled this request.');
  await run("UPDATE teacher_leave SET status=?, decided_by=?, decided_at=datetime('now') WHERE id=?", status, adminId, leaveId);
  await audit(adminId, status, 'leave', leaveId);
}

export async function cancelLeave(teacherId: string, leaveId: string) {
  const l = await get<{ teacher_id: string; status: string; start_date: string }>('SELECT teacher_id, status, start_date FROM teacher_leave WHERE id=?', leaveId);
  if (!l || l.teacher_id !== teacherId) throw new HttpError(404, 'Leave request not found');
  if (l.status === 'cancelled' || l.status === 'declined') throw new HttpError(409, 'This request is already closed.');
  if (l.status === 'approved' && l.start_date <= istDay(new Date())) throw new HttpError(409, 'Leave that has started can only be changed by an admin.');
  await run("UPDATE teacher_leave SET status='cancelled' WHERE id=?", leaveId);
  await audit(teacherId, 'cancel', 'leave', leaveId);
}
