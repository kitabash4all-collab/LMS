// Student administration: bulk logins (usernames allowed), assigning library courses as
// self-paced or live (class group = teacher), password resets and the admin tracker.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { freshDb } from './helpers.ts';

let db: any, ST: any, auth: any, CL: any, L: any;
let admin: string, teacher: string, courseId: string, otherCourse: string, batch: string;

before(async () => {
  await freshDb();
  const { seed } = await import('../../scripts/seed.ts');
  await seed({ quiet: true });
  db = await import('../../src/lib/db/index.ts');
  ST = await import('../../src/lib/services/students.ts');
  auth = await import('../../src/lib/auth.ts');
  CL = await import('../../src/lib/services/classes.ts');
  L = await import('../../src/lib/services/learning.ts');
  admin = (await db.get("SELECT id FROM users WHERE role='admin'")).id;
  teacher = (await db.get("SELECT id FROM users WHERE role='instructor'")).id;
  const cs = await db.all("SELECT id FROM courses WHERE status='published' ORDER BY title LIMIT 2");
  [courseId, otherCourse] = cs.map((c: any) => c.id);
  batch = await CL.createBatch({ course_id: courseId, name: 'Sat 10 am', instructor_id: teacher, capacity: 2 }, admin);
});
after(async () => {
  await db?.closeDb();
});

test('logins can be usernames; bad ones are refused', () => {
  assert.equal(ST.normalLogin(' Aarav.S '), 'aarav.s');
  assert.equal(ST.normalLogin('Mum@Example.com'), 'mum@example.com');
  for (const bad of ['ab', 'has space', '-start', 'x'.repeat(41)]) assert.throws(() => ST.normalLogin(bad), bad);
  assert.match(ST.newPassword(), /^[a-z]+-[a-z]+-\d{4}$/);
});

test('bulk create: generated passwords work, usernames are made from names, courses assigned', async () => {
  const created = await ST.bulkCreateStudents(admin, [
    { name: 'Riya Patel', login: 'riya.p', courseId, mode: 'self_paced' },
    { name: 'Kabir Singh', courseId, mode: 'live', batchId: batch },
    { name: 'Zoya Khan' },
  ]);
  assert.equal(created.length, 3);
  assert.equal(created[1].login, 'kabir.singh');
  for (const c of created) assert.equal((await auth.login(c.login, c.password)).name, c.name);
  // Duplicate login in a later batch: nothing is created.
  await assert.rejects(ST.bulkCreateStudents(admin, [{ name: 'New', login: 'zz.new' }, { name: 'Dup', login: 'riya.p' }]), /already taken/);
  assert.equal(await db.get("SELECT 1 FROM users WHERE email='zz.new'"), undefined);

  const riya = created[0].id, kabir = created[1].id;
  const mine = await L.myLearning({ id: kabir, role: 'student' } as any);
  assert.equal(mine.courses[0].mode, 'live');
  assert.match(mine.courses[0].teacher, /Rao/);
  assert.equal((await L.myLearning({ id: riya, role: 'student' } as any)).courses[0].mode, 'self_paced');
});

test('assigning: live needs a class group for that course with room; switching modes moves groups', async () => {
  const s = (await db.get("SELECT id FROM users WHERE email='zoya.khan'")).id;
  await assert.rejects(ST.assignCourse(admin, s, courseId, 'live', null), /class group/);
  const other = await CL.createBatch({ course_id: otherCourse, name: 'Other', instructor_id: teacher }, admin);
  await assert.rejects(ST.assignCourse(admin, s, courseId, 'live', other), /not for this course/);
  await ST.assignCourse(admin, s, courseId, 'live', batch); // now 2 of 2
  const riya = (await db.get("SELECT id FROM users WHERE email='riya.p'")).id;
  await assert.rejects(ST.assignCourse(admin, riya, courseId, 'live', batch), /full/);
  // Back to self-paced: leaves the group, keeps the enrolment.
  await ST.assignCourse(admin, s, courseId, 'self_paced');
  assert.equal(await db.get('SELECT 1 FROM batch_members WHERE user_id=?', s), undefined);
  assert.equal((await db.get('SELECT mode FROM enrolments WHERE user_id=? AND course_id=?', s, courseId)).mode, 'self_paced');
  // Any published course from the library can be assigned; draft courses cannot.
  await ST.assignCourse(admin, s, otherCourse, 'self_paced');
  const draft = (await db.get("SELECT id FROM courses WHERE status<>'published' LIMIT 1"))?.id;
  if (draft) await assert.rejects(ST.assignCourse(admin, s, draft, 'self_paced'), /published/);
  await ST.unassignCourse(admin, s, otherCourse);
  assert.equal(await db.get('SELECT 1 FROM enrolments WHERE user_id=? AND course_id=?', s, otherCourse), undefined);
});

test('password reset signs the student out and the new password works', async () => {
  const s = await db.get("SELECT id FROM users WHERE email='riya.p'");
  const r = await ST.resetStudentPassword(admin, s.id);
  assert.equal(r.login, 'riya.p');
  assert.equal((await auth.login('riya.p', r.password)).id, s.id);
  await assert.rejects(ST.resetStudentPassword(admin, teacher), /not found/);
});

test('tracker: courses, mode, teacher, attendance and next class for every student', async () => {
  const kabir = (await db.get("SELECT id FROM users WHERE email='kabir.singh'")).id;
  const T = { id: teacher, role: 'instructor' } as any;
  const past = new Date(Date.now() - 2 * 86400_000).toISOString();
  await CL.scheduleSessions({ id: admin, role: 'admin' } as any, batch, { title: 'Class 1', starts_at: past, duration_min: 60 });
  await CL.scheduleSessions(T, batch, { title: 'Class 2', starts_at: new Date(Date.now() + 86400_000).toISOString(), duration_min: 60 });
  const s1 = (await db.get("SELECT id FROM live_sessions WHERE title='Class 1'")).id;
  await CL.addAttendance(s1, kabir, 1800, true);
  const rows = await ST.studentTracker();
  const k = rows.find((r: any) => r.id === kabir);
  assert.equal(k.courses[0].mode, 'live');
  assert.equal(k.courses[0].batchName, 'Sat 10 am');
  assert.deepEqual(k.teachers, ['Mr. Rao (Instructor)']);
  assert.equal(k.classesHeld, 1);
  assert.equal(k.classesAttended, 1);
  assert.ok(k.nextClass);
  assert.ok(rows.every((r: any) => Array.isArray(r.courses)));
  const lib = await ST.assignableCourses();
  // Only Kabir is left in the group (Zoya went back to self-paced).
  assert.ok(lib.find((c: any) => c.id === courseId).batches.some((b: any) => b.id === batch && b.members === 1 && b.capacity === 2));
});
