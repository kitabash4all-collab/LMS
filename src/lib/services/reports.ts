// Weekly progress reports for parents.
//
// Every week (Sunday evening, India time, by default) each linked parent gets one report per child,
// covering the 7 days before. Reports are saved, so parents can always read them in their account,
// and are also sent by email and/or WhatsApp when those are set up and the parent has opted in.
// Generating twice for the same week does nothing new: one report per parent, child and week.
import { all, get, run, id, j } from '../db/index.ts';
import { sendEmail, sendWhatsApp, greetName, type SendResult } from './notify.ts';

/** ISO-8601 week label, e.g. "2026-W45", for the given date (UTC). */
export function isoWeek(d: Date): string {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const year = t.getUTCFullYear();
  const week = Math.ceil(((t.getTime() - Date.UTC(year, 0, 1)) / 864e5 + 1) / 7);
  return `${year}-W${String(week).padStart(2, '0')}`;
}

export interface ChildReport {
  childName: string;
  week: string;
  from: string; // ISO
  to: string; // ISO
  lessonsCompleted: { course: string; lesson: string }[];
  activities: number;
  scorePct: number | null; // across activities attempted this week
  classes: { attended: number; scheduled: number };
  feedback: { activity: string; comment: string }[];
  courses: { title: string; done: number; total: number }[];
  nextClass: { title: string; starts_at: string } | null;
}

const toDb = (d: Date) => d.toISOString().replace('T', ' ').slice(0, 19); // matches datetime('now') text in SQLite

export async function buildChildReport(studentId: string, until: Date): Promise<ChildReport> {
  const from = new Date(until.getTime() - 7 * 864e5);
  const a = toDb(from);
  const b = toDb(until);
  const child = await get<{ name: string }>('SELECT name FROM users WHERE id=?', studentId);
  const lessonsCompleted = await all<{ course: string; lesson: string }>(
    `SELECT c.title course, l.title lesson FROM lesson_progress p JOIN lessons l ON l.id=p.lesson_id JOIN courses c ON c.id=p.course_id
     WHERE p.user_id=? AND p.status='completed' AND p.completed_at >= ? AND p.completed_at < ? ORDER BY p.completed_at`,
    studentId, from.toISOString(), until.toISOString(), // completed_at is written as an ISO timestamp
  );
  const att = await get<{ n: number; s: number; m: number }>(
    'SELECT COUNT(*) n, COALESCE(SUM(score),0) s, COALESCE(SUM(max_score),0) m FROM attempts WHERE user_id=? AND created_at >= ? AND created_at < ?',
    studentId, a, b,
  );
  const scheduled = await get<{ n: number }>(
    `SELECT COUNT(*) n FROM live_sessions s JOIN batch_members m ON m.batch_id=s.batch_id
     WHERE m.user_id=? AND s.status<>'cancelled' AND s.starts_at >= ? AND s.starts_at < ?`,
    studentId, from.toISOString(), until.toISOString(),
  );
  const attended = await get<{ n: number }>(
    `SELECT COUNT(*) n FROM live_attendance x JOIN live_sessions s ON s.id=x.session_id
     WHERE x.user_id=? AND s.starts_at >= ? AND s.starts_at < ?`,
    studentId, from.toISOString(), until.toISOString(),
  );
  const feedback = await all<{ activity: string; comment: string }>(
    `SELECT x.title activity, f.comment FROM instructor_feedback f JOIN attempts t ON t.id=f.attempt_id JOIN activities x ON x.id=t.activity_id
     WHERE t.user_id=? AND f.created_at >= ? AND f.created_at < ? ORDER BY f.created_at DESC LIMIT 5`,
    studentId, a, b,
  );
  const courses = await all<{ title: string; done: number; total: number }>(
    `SELECT c.title, (SELECT COUNT(*) FROM lessons l WHERE l.course_id=c.id AND l.status='approved') total,
       (SELECT COUNT(*) FROM lesson_progress p WHERE p.user_id=? AND p.course_id=c.id AND p.status='completed') done
     FROM enrolments e JOIN courses c ON c.id=e.course_id WHERE e.user_id=? ORDER BY c.title`,
    studentId, studentId,
  );
  const next = await get<{ title: string; starts_at: string }>(
    `SELECT s.title, s.starts_at FROM live_sessions s JOIN batch_members m ON m.batch_id=s.batch_id
     WHERE m.user_id=? AND s.status='scheduled' AND s.starts_at >= ? ORDER BY s.starts_at LIMIT 1`,
    studentId, until.toISOString(),
  );
  return {
    childName: child?.name || 'Your child',
    week: isoWeek(new Date(until.getTime() - 864e5)),
    from: from.toISOString(),
    to: until.toISOString(),
    lessonsCompleted,
    activities: Number(att?.n || 0),
    scorePct: att && Number(att.m) > 0 ? Math.round((Number(att.s) / Number(att.m)) * 100) : null,
    classes: { attended: Number(attended?.n || 0), scheduled: Number(scheduled?.n || 0) },
    feedback,
    courses: courses.map((c) => ({ title: c.title, done: Number(c.done), total: Number(c.total) })),
    nextClass: next ? { title: next.title, starts_at: String(next.starts_at) } : null,
  };
}

/** A short, honest summary line. Only states what the data shows. */
export function summaryLine(r: ChildReport): string {
  const parts: string[] = [];
  parts.push(`${r.lessonsCompleted.length} lesson${r.lessonsCompleted.length === 1 ? '' : 's'} completed`);
  if (r.classes.scheduled) parts.push(`${r.classes.attended} of ${r.classes.scheduled} live classes attended`);
  if (r.scorePct !== null) parts.push(`${r.scorePct}% on ${r.activities} activit${r.activities === 1 ? 'y' : 'ies'}`);
  return parts.join(' · ');
}

export function reportText(r: ChildReport, parentName: string, portalUrl: string): string {
  const day = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', timeZone: 'Asia/Kolkata' });
  const lines = [
    `Hi ${parentName},`,
    '',
    `Here is ${r.childName}'s week on Kitabash (${day(r.from)} – ${day(r.to)}):`,
    summaryLine(r) + '.',
  ];
  if (r.lessonsCompleted.length) lines.push('', 'Lessons completed:', ...r.lessonsCompleted.slice(0, 8).map((l) => `• ${l.lesson} (${l.course})`));
  if (r.feedback.length) lines.push('', 'Teacher feedback:', ...r.feedback.map((f) => `• ${f.activity}: ${f.comment}`));
  if (r.courses.length) lines.push('', 'Course progress:', ...r.courses.map((c) => `• ${c.title}: ${c.done} of ${c.total} lessons`));
  if (r.nextClass) lines.push('', `Next live class: ${r.nextClass.title}, ${new Date(r.nextClass.starts_at).toLocaleString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' })} IST`);
  if (!r.lessonsCompleted.length && !r.classes.attended) lines.push('', `No lessons were completed this week. A short lesson together this week can help ${r.childName} keep going.`);
  if (portalUrl) lines.push('', `See the full report: ${portalUrl}`);
  lines.push('', 'Kitabash');
  return lines.join('\n');
}

/** A short WhatsApp version of the weekly report. */
export function reportWhatsApp(r: ChildReport, parentName: string, portalUrl: string): string {
  const lines = [`Hi ${parentName}, here is ${r.childName}'s week on Kitabash: ${summaryLine(r)}.`];
  if (r.feedback.length) lines.push(`Teacher's note: ${r.feedback[0].comment}`);
  if (r.nextClass) lines.push(`Next live class: ${new Date(r.nextClass.starts_at).toLocaleString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' })} IST.`);
  if (!r.lessonsCompleted.length && !r.classes.attended) lines.push(`No lessons this week. A short lesson together can help ${r.childName} keep going.`);
  if (portalUrl) lines.push(`Full report: ${portalUrl}`);
  return lines.join('\n');
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
export function reportHtml(text: string): string {
  return `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.55;color:#1d2230;max-width:560px">${text
    .split('\n')
    .map((l) => (l ? `<p style="margin:0 0 6px">${esc(l)}</p>` : '<div style="height:8px"></div>'))
    .join('')}</div>`;
}

export interface RunResult {
  week: string;
  reports: number;
  created: number;
  sent: SendResult[];
}

/**
 * Builds (and, when `send` is true, delivers) this week's reports for every linked parent.
 * Reports that already exist for the week are left alone and not re-sent.
 */
export async function runWeeklyReports(opts: { now?: Date; send?: boolean } = {}): Promise<RunResult> {
  const now = opts.now || new Date();
  const base = (process.env.PUBLIC_URL || '').trim().replace(/\/$/, '');
  const portal = base ? base + '/' : ''; // no link at all until PUBLIC_URL is set
  const links = await all<{ guardian_id: string; student_id: string; gname: string; email: string; phone: string; whatsapp_opt_in: number; email_reports: number }>(
    `SELECT g.guardian_id, g.student_id, u.name gname, u.email, u.phone, u.whatsapp_opt_in, u.email_reports
     FROM guardian_links g JOIN users u ON u.id=g.guardian_id JOIN users s ON s.id=g.student_id
     WHERE u.disabled=0 AND s.disabled=0 ORDER BY g.guardian_id`,
  );
  const result: RunResult = { week: isoWeek(new Date(now.getTime() - 864e5)), reports: links.length, created: 0, sent: [] };
  for (const l of links) {
    const report = await buildChildReport(l.student_id, now);
    const exists = await get('SELECT 1 FROM weekly_reports WHERE guardian_id=? AND student_id=? AND week=?', l.guardian_id, l.student_id, report.week);
    if (exists) continue;
    await run('INSERT INTO weekly_reports (id,guardian_id,student_id,week,report) VALUES (?,?,?,?,?)', id('wr_'), l.guardian_id, l.student_id, report.week, JSON.stringify(report));
    result.created++;
    if (!opts.send) continue;
    const parent = greetName(l.gname);
    const text = reportText(report, parent, portal);
    const target = { userId: l.guardian_id, kind: 'weekly_report' };
    if (l.email_reports) result.sent.push(await sendEmail(target, l.email, `${report.childName}'s week on Kitabash`, text, reportHtml(text)));
    if (l.whatsapp_opt_in && l.phone)
      result.sent.push(await sendWhatsApp(target, l.phone, { parentName: parent, childName: report.childName, summary: summaryLine(report), link: portal }, reportWhatsApp(report, parent, portal)));
  }
  return result;
}

/** Saved reports for a parent, newest first. */
export async function guardianReports(guardianId: string, limit = 12) {
  const rows = await all<{ id: string; student_id: string; week: string; report: string; created_at: string }>(
    'SELECT id, student_id, week, report, created_at FROM weekly_reports WHERE guardian_id=? ORDER BY week DESC, created_at DESC LIMIT ?',
    guardianId, limit,
  );
  return rows.map((r) => {
    const rep = j<ChildReport>(r.report, {} as ChildReport);
    return { id: r.id, studentId: r.student_id, week: r.week, summary: rep.lessonsCompleted ? summaryLine(rep) : '', report: rep };
  });
}

/** True when the weekly run is due: Sunday, at or after REPORT_HOUR (default 18) in India time. */
export function weeklyRunDue(now: Date): boolean {
  const ist = new Date(now.getTime() + 330 * 60_000); // UTC+5:30
  const hour = Number(process.env.REPORT_HOUR_IST || 18);
  return ist.getUTCDay() === 0 && ist.getUTCHours() >= hour;
}
