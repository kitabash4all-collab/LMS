// Teacher portal (punctuality, pay, leave) and the class recorder (consent gate, storage, retention).
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { freshDb } from './helpers.ts';

let db: any, TE: any, REC: any;
let courseId = '';
let ADMIN = '';
const T = 'u_teacher_t';
const BATCH = 'b_portal';

async function user(id: string, role: string, birth_year: number | null = null) {
  await db.run('INSERT INTO users (id,email,name,role,birth_year,password_hash) VALUES (?,?,?,?,?,?)', id, `${id}@test.local`, id.replace(/^u_/, '').replace(/_/g, ' '), role, birth_year, 'x');
}
async function session(sid: string, starts: string, o: { status?: string; startedAfterMin?: number | null; lengthMin?: number | null; present?: number; dur?: number; batch?: string } = {}) {
  const s = new Date(starts);
  const sql = (d: Date) => d.toISOString().replace('T', ' ').slice(0, 19); // how SQLite stores datetime('now')
  const started = o.startedAfterMin == null ? null : new Date(s.getTime() + o.startedAfterMin * 60_000);
  const ended = started && o.lengthMin != null ? new Date(started.getTime() + o.lengthMin * 60_000) : null;
  await db.run(
    'INSERT INTO live_sessions (id,batch_id,course_id,title,starts_at,duration_min,status,started_at,ended_at) VALUES (?,?,?,?,?,?,?,?,?)',
    sid, o.batch || BATCH, courseId, `Class ${sid}`, s.toISOString(), o.dur || 60, o.status || (started ? 'ended' : 'scheduled'), started && sql(started), ended && sql(ended),
  );
  for (let i = 0; i < (o.present || 0); i++) await db.run('INSERT INTO live_attendance (session_id,user_id,seconds) VALUES (?,?,?)', sid, `u_kid_${i}`, 1800);
}

before(async () => {
  await freshDb();
  const { seed } = await import('../../scripts/seed.ts');
  await seed({ quiet: true });
  db = await import('../../src/lib/db/index.ts');
  TE = await import('../../src/lib/services/teachers.ts');
  REC = await import('../../src/lib/services/recordings.ts');
  courseId = (await db.get('SELECT id FROM courses LIMIT 1')).id;
  ADMIN = (await db.get("SELECT id FROM users WHERE role='admin' LIMIT 1")).id;
  await user(T, 'instructor');
  await db.run('INSERT INTO batches (id,course_id,name,instructor_id) VALUES (?,?,?,?)', BATCH, courseId, 'Portal batch', T);
  for (let i = 0; i < 12; i++) {
    await user(`u_kid_${i}`, 'student', 2015);
    await db.run('INSERT INTO batch_members (batch_id,user_id) VALUES (?,?)', BATCH, `u_kid_${i}`);
  }
  // October 2026 (all in the past). Times in UTC; IST = UTC + 5:30.
  await session('s1', '2026-10-05T12:30:00Z', { startedAfterMin: 1, lengthMin: 60, present: 7 }); // 6 pm IST, on time, 7 kids → 400 + 40
  await session('s2', '2026-10-06T12:30:00Z', { startedAfterMin: 5, lengthMin: 40, present: 3 }); // late 5 min, ended 15 min early → half of 400
  await session('s3', '2026-10-07T12:30:00Z', { startedAfterMin: 15, lengthMin: 50, present: 6 }); // very late → unpaid
  await session('s4', '2026-10-08T12:30:00Z'); // never started → missed
  await session('s5', '2026-10-09T17:00:00Z', { startedAfterMin: 0, lengthMin: 60, present: 12 }); // 10:30 pm IST, 12 kids → 400 + 100 + 50
  await session('s6', '2026-10-10T12:30:00Z', { status: 'cancelled' });
  await session('s7', '2026-10-20T04:00:00Z'); // 9:30 am IST on an approved leave day
  await session('s8', '2026-09-30T19:00:00Z', { startedAfterMin: 0, lengthMin: 60, present: 5 }); // 1 Oct 00:30 IST → counts in October, night bonus
});
after(async () => {
  await db?.closeDb();
});

test('timestamps from either database format are read the same way', () => {
  assert.equal(TE.toDate('2026-10-05 12:31:00')!.toISOString(), '2026-10-05T12:31:00.000Z');
  assert.equal(TE.toDate('2026-10-05T12:31:00.000Z')!.toISOString(), '2026-10-05T12:31:00.000Z');
  assert.equal(TE.toDate(null), null);
  const { from, to } = TE.monthRange('2026-10');
  assert.equal(from.toISOString(), '2026-09-30T18:30:00.000Z');
  assert.equal(to.toISOString(), '2026-10-31T18:30:00.000Z');
  assert.throws(() => TE.monthRange('Oct 2026'));
});

test('class pay follows the policy', () => {
  const at = (iso: string) => new Date(iso);
  const day = at('2026-10-05T12:30:00Z');
  assert.equal(TE.classPay({ rate: 400, status: 'on_time', present: 4, startsAt: day, endedEarly: false }).pay, 400);
  assert.equal(TE.classPay({ rate: 400, status: 'on_time', present: 8, startsAt: day, endedEarly: false }).pay, 460);
  assert.equal(TE.classPay({ rate: 400, status: 'late', present: 15, startsAt: day, endedEarly: false }).pay, 500); // bonus capped at +100
  assert.equal(TE.classPay({ rate: 500, status: 'on_time', present: 5, startsAt: at('2026-10-05T01:00:00Z'), endedEarly: false }).pay, 550); // 6:30 am IST
  assert.equal(TE.classPay({ rate: 500, status: 'on_time', present: 5, startsAt: at('2026-10-05T01:30:00Z'), endedEarly: false }).pay, 500); // 7:00 am IST: no bonus
  assert.equal(TE.classPay({ rate: 400, status: 'on_time', present: 5, startsAt: day, endedEarly: true }).pay, 200);
  assert.equal(TE.classPay({ rate: 400, status: 'very_late', present: 9, startsAt: day, endedEarly: false }).pay, 0);
  assert.equal(TE.classPay({ rate: 400, status: 'missed', present: 0, startsAt: day, endedEarly: false }).pay, 0);
});

test('leave requests: validation, approval and cancelling', async () => {
  await assert.rejects(() => TE.requestLeave(T, { start_date: '2026-10-21', end_date: '2026-10-20', kind: 'planned', reason: '' }), /on or after/);
  await assert.rejects(() => TE.requestLeave(T, { start_date: '20-10-2026', end_date: '2026-10-20', kind: 'planned', reason: '' }), /valid dates/);
  const lid = await TE.requestLeave(T, { start_date: '2026-10-20', end_date: '2026-10-20', kind: 'sick', reason: 'Fever' });
  let [l] = await TE.listLeave({ teacherId: T });
  assert.equal(l.status, 'pending');
  assert.equal(l.days, 1);
  assert.equal(l.classes_affected, 1); // s7
  await TE.decideLeave(lid, 'approved', ADMIN);
  [l] = await TE.listLeave({ teacherId: T });
  assert.equal(l.status, 'approved');
  // Approved leave that has already started can't be cancelled by the teacher.
  await assert.rejects(() => TE.cancelLeave(T, lid), /admin/);
  const future = await TE.requestLeave(T, { start_date: '2099-01-01', end_date: '2099-01-03', kind: 'planned', reason: '' });
  await TE.cancelLeave(T, future);
  await assert.rejects(() => TE.decideLeave(future, 'approved', ADMIN), /cancelled/);
  await assert.rejects(() => TE.cancelLeave('u_kid_0', lid), /not found/);
});

test('month summary: classes taken, punctuality and earnings', async () => {
  const m = await TE.teacherMonth(T, '2026-10');
  const by = Object.fromEntries(m.sessions.map((s: any) => [s.id, s]));
  assert.equal(by.s1.status, 'on_time');
  assert.equal(by.s1.pay, 440);
  assert.equal(by.s2.status, 'late');
  assert.equal(by.s2.lateMin, 5);
  assert.equal(by.s2.endedEarly, true);
  assert.equal(by.s2.pay, 200);
  assert.equal(by.s3.status, 'very_late');
  assert.equal(by.s3.pay, 0);
  assert.equal(by.s4.status, 'missed');
  assert.equal(by.s5.pay, 550);
  assert.equal(by.s6.status, 'cancelled');
  assert.equal(by.s7.status, 'on_leave');
  assert.equal(by.s8.day, '2026-10-01');
  assert.equal(by.s8.pay, 450);
  const s = m.summary;
  assert.equal(s.held, 5);
  assert.equal(s.onTime, 3);
  assert.equal(s.late, 1);
  assert.equal(s.veryLate, 1);
  assert.equal(s.missed, 1);
  assert.equal(s.onLeave, 1);
  assert.equal(s.cancelled, 1);
  assert.equal(s.onTimePct, 60);
  assert.equal(s.earnings, 440 + 200 + 550 + 450);
  assert.equal(s.studentsTaught, 7 + 3 + 6 + 12 + 5);
});

test('levels change the class rate, and the payout sheet matches', async () => {
  await TE.setTeacherProfile(T, { level: 'senior' }, ADMIN);
  let m = await TE.teacherMonth(T, '2026-10');
  assert.equal(m.profile.rate, 500);
  assert.equal(m.summary.earnings, 540 + 250 + 650 + 550);
  await TE.setTeacherProfile(T, { rate: 450 }, ADMIN);
  m = await TE.teacherMonth(T, '2026-10');
  assert.equal(m.profile.rate, 450);
  assert.equal(m.profile.customRate, true);
  await TE.setTeacherProfile(T, { level: 'certified', rate: null }, ADMIN);
  m = await TE.teacherMonth(T, '2026-10');
  assert.equal(m.profile.rate, 400);
  const all = await TE.allTeachersMonth('2026-10');
  assert.ok(all.teachers.some((t: any) => t.id === T && t.summary.earnings === 1640));
  const csv = await TE.payoutCsv('2026-10');
  assert.match(csv, /"teacher t","u_teacher_t@test.local","certified","400","5","3","1","1","1","1","33","1640"/);
  await assert.rejects(() => TE.setTeacherProfile('u_kid_0', { level: 'senior' }, ADMIN), /not found/);
});

test('recording needs every child’s parent permission', async () => {
  await db.run("UPDATE live_sessions SET status='live', ended_at=NULL WHERE id='s1'");
  const s1 = await db.get('SELECT id, batch_id, status FROM live_sessions WHERE id=?', 's1');
  await assert.rejects(() => REC.startRecording(s1, T), (e: any) => e.status === 403 && /kid 0/.test(e.message));
  await user('u_parent', 'guardian');
  for (let i = 0; i < 12; i++) await db.run('INSERT INTO guardian_links (guardian_id, student_id) VALUES (?,?)', 'u_parent', `u_kid_${i}`);
  const L = await import('../../src/lib/services/learning.ts');
  for (let i = 0; i < 11; i++) await L.setConsent('u_parent', `u_kid_${i}`, { ai: false, audio: true, recording: true });
  assert.deepEqual(await REC.missingRecordingConsent(BATCH), ['kid 11']);
  // An adult learner doesn't need a parent's permission.
  await db.run("UPDATE users SET birth_year=1990 WHERE id='u_kid_11'");
  assert.deepEqual(await REC.missingRecordingConsent(BATCH), []);
  await assert.rejects(() => REC.startRecording({ ...s1, status: 'scheduled' }, T), /Start the class/);
});

test('recording pieces are stored in order, played back joined, and stop if permission is withdrawn', async () => {
  const s1 = await db.get('SELECT id, batch_id, status FROM live_sessions WHERE id=?', 's1');
  const { id } = await REC.startRecording(s1, T);
  await REC.addChunk(id, 's1', T, 0, Buffer.from('AAA'));
  await REC.addChunk(id, 's1', T, 1, Buffer.from('BBB'));
  await assert.rejects(() => REC.addChunk(id, 's1', T, 5, Buffer.from('X')), (e: any) => e.status === 409);
  await assert.rejects(() => REC.addChunk(id, 's1', 'u_kid_0', 2, Buffer.from('X')), (e: any) => e.status === 403);
  await assert.rejects(() => REC.addChunk(id, 's2', T, 2, Buffer.from('X')), (e: any) => e.status === 404);
  const L = await import('../../src/lib/services/learning.ts');
  await L.setConsent('u_parent', 'u_kid_3', { ai: false, audio: true, recording: false });
  await assert.rejects(() => REC.addChunk(id, 's1', T, 2, Buffer.from('CCC')), /withdrawn/);
  const row = await db.get('SELECT status, chunks, bytes FROM class_recordings WHERE id=?', id);
  assert.deepEqual({ ...row, chunks: Number(row.chunks), bytes: Number(row.bytes) }, { status: 'ready', chunks: 2, bytes: 6 });
  const parts: Buffer[] = [];
  for await (const b of REC.recordingPieces(id, ADMIN)) parts.push(b);
  assert.equal(Buffer.concat(parts).toString(), 'AAABBB');
  assert.ok(await db.get("SELECT 1 FROM audit_log WHERE action='view' AND entity='recording' AND entity_id=?", id));
  const list = await REC.listRecordings({ teacherId: T });
  assert.equal(list.length, 1);
  await L.setConsent('u_parent', 'u_kid_3', { ai: false, audio: true, recording: true });
});

test('expired recordings and their files are deleted', async () => {
  const { storage } = await import('../../src/lib/storage.ts');
  const [r] = await REC.listRecordings();
  assert.ok(await storage().read(`rec/${r.id}/00000.webm`));
  assert.equal(await REC.purgeRecordings(new Date()), 0);
  assert.equal(await REC.purgeRecordings(new Date(Date.now() + 31 * 864e5)), 1);
  assert.equal(await storage().read(`rec/${r.id}/00000.webm`), null);
  assert.equal((await REC.listRecordings()).length, 0);
  // An empty recording (nothing uploaded) leaves no row behind.
  const s1 = await db.get('SELECT id, batch_id, status FROM live_sessions WHERE id=?', 's1');
  const { id } = await REC.startRecording(s1, T);
  await REC.finishRecording(id, T);
  assert.equal(await db.get('SELECT 1 FROM class_recordings WHERE id=?', id), undefined);
});
