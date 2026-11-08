// Student administration: create logins in bulk, assign courses from the course library
// (self-paced or live in a class group with a teacher), reset passwords, and one tracker
// showing every student's courses, progress, teacher, attendance and next class.
import crypto from 'node:crypto';
import { all, get, run, id, tx, audit } from '../db/index.ts';
import { createUser, hashPassword } from '../auth.ts';
import { HttpError } from '../validate.ts';

export type Mode = 'self_paced' | 'live';

// Easy to read aloud and type on a phone: word-word-1234 (about 38 bits).
const WORDS = ['tiger', 'mango', 'river', 'rocket', 'lotus', 'cricket', 'monsoon', 'peacock', 'comet', 'pixel', 'banyan', 'kite', 'lantern', 'falcon', 'meadow', 'coral', 'thunder', 'saffron', 'galaxy', 'pebble', 'harbor', 'maple', 'orbit', 'jasmine', 'bamboo', 'canyon', 'dolphin', 'ember', 'glacier', 'island', 'jungle', 'koala'];
export function newPassword() {
  const w = () => WORDS[crypto.randomInt(WORDS.length)];
  return `${w()}-${w()}-${String(crypto.randomInt(1000, 10000))}`;
}

/** A login is either an email address or a username (letters, digits, dot, dash, underscore). */
export function normalLogin(s: string) {
  const v = s.trim().toLowerCase();
  if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) || /^[a-z0-9][a-z0-9._-]{2,39}$/.test(v)) return v;
  throw new HttpError(400, `"${s}" is not a valid email or username (3–40 letters, numbers, dots, dashes).`);
}

async function suggestLogin(name: string) {
  const base = name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '.').replace(/^\.+|\.+$/g, '').slice(0, 24) || 'student';
  for (let i = 0; i < 50; i++) {
    const cand = i === 0 ? base : `${base}${crypto.randomInt(10, 1000)}`;
    if (cand.length >= 3 && !(await get('SELECT 1 FROM users WHERE email=?', cand))) return cand;
  }
  throw new HttpError(500, 'Could not find a free username.');
}

async function checkCourse(courseId: string) {
  const c = await get<{ id: string; title: string }>("SELECT id, title FROM courses WHERE id=? AND status='published'", courseId);
  if (!c) throw new HttpError(400, 'Pick a published course from the course library.');
  return c;
}

/** Enrol a student in a course as self-paced, or live in a class group (which sets their teacher). */
export async function assignCourse(adminId: string, userId: string, courseId: string, mode: Mode, batchId?: string | null) {
  if (!(await get("SELECT 1 FROM users WHERE id=? AND role='student'", userId))) throw new HttpError(400, 'Courses can only be assigned to student accounts.');
  await checkCourse(courseId);
  let batch: any = null;
  if (mode === 'live') {
    if (!batchId) throw new HttpError(400, 'Live learning needs a class group (batch). Create one on the Classes page first.');
    batch = await get("SELECT id, course_id, capacity, name FROM batches WHERE id=? AND status='active'", batchId);
    if (!batch || batch.course_id !== courseId) throw new HttpError(400, 'That class group is not for this course.');
    const n = Number((await get<{ n: number }>('SELECT COUNT(*) n FROM batch_members WHERE batch_id=? AND user_id<>?', batchId, userId))!.n);
    if (n >= Number(batch.capacity)) throw new HttpError(400, `${batch.name} is full (${batch.capacity} students). Pick another group or raise its capacity.`);
  }
  await tx(async () => {
    await run('INSERT OR IGNORE INTO enrolments (id,user_id,course_id) VALUES (?,?,?)', id('e_'), userId, courseId);
    await run('UPDATE enrolments SET mode=?, assigned_by=? WHERE user_id=? AND course_id=?', mode, adminId, userId, courseId);
    // One class group per course: leave any other group for this course (self-paced leaves them all).
    await run('DELETE FROM batch_members WHERE user_id=? AND batch_id IN (SELECT id FROM batches WHERE course_id=?)' + (batch ? ' AND batch_id<>?' : ''), userId, courseId, ...(batch ? [batch.id] : []));
    if (batch) await run('INSERT OR IGNORE INTO batch_members (batch_id,user_id) VALUES (?,?)', batch.id, userId);
  });
  await audit(adminId, 'assign', 'enrolment', userId, `${courseId} ${mode}${batch ? ' ' + batch.id : ''}`);
}

export async function unassignCourse(adminId: string, userId: string, courseId: string) {
  await tx(async () => {
    await run('DELETE FROM batch_members WHERE user_id=? AND batch_id IN (SELECT id FROM batches WHERE course_id=?)', userId, courseId);
    await run('DELETE FROM enrolments WHERE user_id=? AND course_id=?', userId, courseId); // progress is kept in case they return
  });
  await audit(adminId, 'unassign', 'enrolment', userId, courseId);
}

export interface NewStudent { name: string; login?: string; birth_year?: number | null; courseId?: string; mode?: Mode; batchId?: string | null }

/** Create many student logins at once. Passwords are generated and returned ONCE so the admin can share them. */
export async function bulkCreateStudents(adminId: string, rows: NewStudent[]) {
  if (!rows.length) throw new HttpError(400, 'Add at least one student.');
  if (rows.length > 200) throw new HttpError(400, 'Add up to 200 students at a time.');
  const seen = new Set<string>();
  const logins: string[] = [];
  for (const r of rows) {
    if (!r.name?.trim()) throw new HttpError(400, 'Every student needs a name.');
    const login = r.login?.trim() ? normalLogin(r.login) : await suggestLogin(r.name);
    if (seen.has(login) || (await get('SELECT 1 FROM users WHERE email=?', login))) throw new HttpError(409, `The login "${login}" is already taken.`);
    seen.add(login);
    logins.push(login);
    if (r.courseId) await checkCourse(r.courseId);
  }
  const created: { id: string; name: string; login: string; password: string; course?: string; mode?: Mode }[] = [];
  await tx(async () => {
    for (const [i, r] of rows.entries()) {
      const password = newPassword();
      const uid = await createUser({ email: logins[i], name: r.name.trim(), role: 'student', password, birth_year: r.birth_year ?? null });
      await audit(adminId, 'create', 'user', uid, 'student (bulk)');
      if (r.courseId) await assignCourse(adminId, uid, r.courseId, r.mode || 'self_paced', r.batchId);
      created.push({ id: uid, name: r.name.trim(), login: logins[i], password, course: r.courseId ? (await checkCourse(r.courseId)).title : undefined, mode: r.courseId ? r.mode || 'self_paced' : undefined });
    }
  });
  return created;
}

/** New password for a student (signs them out everywhere). Returned once. */
export async function resetStudentPassword(adminId: string, userId: string) {
  const u = await get<{ email: string; name: string }>("SELECT email, name FROM users WHERE id=? AND role='student'", userId);
  if (!u) throw new HttpError(404, 'Student not found');
  const password = newPassword();
  await run('UPDATE users SET password_hash=? WHERE id=?', hashPassword(password), userId);
  await run('DELETE FROM sessions WHERE user_id=?', userId);
  await audit(adminId, 'password.reset', 'user', userId, '');
  return { name: u.name, login: u.email, password };
}

/** Everything the admin needs on one screen. */
export async function studentTracker() {
  const students = await all(`SELECT id, email login, name, birth_year, disabled, created_at FROM users WHERE role='student' ORDER BY name`);
  const enrol = await all(
    `SELECT e.user_id, e.course_id, e.mode, e.created_at, c.title, c.slug,
       (SELECT COUNT(*) FROM lessons l WHERE l.course_id=c.id AND l.status='approved') total,
       (SELECT COUNT(*) FROM lesson_progress p WHERE p.course_id=c.id AND p.user_id=e.user_id AND p.status='completed') done
     FROM enrolments e JOIN courses c ON c.id=e.course_id ORDER BY e.created_at`,
  );
  const groups = await all(
    `SELECT m.user_id, b.id batch_id, b.name batch_name, b.course_id, b.instructor_id, u.name teacher FROM batch_members m JOIN batches b ON b.id=m.batch_id LEFT JOIN users u ON u.id=b.instructor_id WHERE b.status='active'`,
  );
  const lastLesson = await all(`SELECT user_id, MAX(started_at) a, MAX(completed_at) b FROM lesson_progress GROUP BY user_id`);
  const lastAttempt = await all(`SELECT user_id, MAX(created_at) a FROM attempts GROUP BY user_id`);
  const now = new Date().toISOString();
  const held = await all(
    `SELECT m.user_id, COUNT(*) n FROM live_sessions s JOIN batch_members m ON m.batch_id=s.batch_id WHERE s.status<>'cancelled' AND s.starts_at < ? GROUP BY m.user_id`,
    now,
  );
  const attended = await all(
    `SELECT a.user_id, COUNT(*) n FROM live_attendance a JOIN live_sessions s ON s.id=a.session_id JOIN batch_members m ON m.batch_id=s.batch_id AND m.user_id=a.user_id GROUP BY a.user_id`,
  );
  const next = await all(
    `SELECT m.user_id, MIN(s.starts_at) starts_at FROM live_sessions s JOIN batch_members m ON m.batch_id=s.batch_id WHERE s.status IN ('scheduled','live') AND s.starts_at >= ? GROUP BY m.user_id`,
    new Date(Date.now() - 3600_000).toISOString(),
  );
  const by = <T extends Record<string, any>>(rows: T[]) => rows.reduce((m, r) => m.set(r.user_id, [...(m.get(r.user_id) || []), r]), new Map<string, T[]>());
  const E = by(enrol), G = by(groups);
  const one = (rows: any[]) => new Map(rows.map((r) => [r.user_id, r]));
  const LL = one(lastLesson), LA = one(lastAttempt), H = one(held), A = one(attended), N = one(next);
  const iso = (x: any) => (x ? new Date(String(x).includes('T') || String(x).includes('Z') ? x : String(x).replace(' ', 'T') + 'Z').toISOString() : null);
  return students.map((s) => {
    const courses = (E.get(s.id) || []).map((e) => {
      const g = (G.get(s.id) || []).find((x) => x.course_id === e.course_id);
      return { courseId: e.course_id, title: e.title, slug: e.slug, mode: e.mode as Mode, done: Number(e.done), total: Number(e.total), batchId: g?.batch_id || null, batchName: g?.batch_name || null, teacher: g?.teacher || null };
    });
    const last = [LL.get(s.id)?.a, LL.get(s.id)?.b, LA.get(s.id)?.a].map(iso).filter(Boolean).sort().pop() || null;
    return {
      id: s.id, name: s.name, login: s.login, birth_year: s.birth_year, disabled: !!Number(s.disabled), created_at: s.created_at,
      courses,
      teachers: [...new Set(courses.map((c) => c.teacher).filter(Boolean))],
      lastActive: last,
      classesHeld: Number(H.get(s.id)?.n || 0),
      classesAttended: Number(A.get(s.id)?.n || 0),
      nextClass: N.get(s.id)?.starts_at || null,
    };
  });
}

/** The course library for the "assign a course" picker: every published course, with its live class groups. */
export async function assignableCourses() {
  const courses = await all(
    `SELECT c.id, c.title, c.level, c.grade_band, s.name subject, (SELECT COUNT(*) FROM lessons l WHERE l.course_id=c.id AND l.status='approved') lessons
     FROM courses c LEFT JOIN subjects s ON s.id=c.subject_id WHERE c.status='published' ORDER BY s.name, c.title`,
  );
  const batches = await all(
    `SELECT b.id, b.course_id, b.name, b.capacity, b.schedule_note, u.name teacher, (SELECT COUNT(*) FROM batch_members m WHERE m.batch_id=b.id) members
     FROM batches b LEFT JOIN users u ON u.id=b.instructor_id WHERE b.status='active' ORDER BY b.name`,
  );
  return courses.map((c) => ({ ...c, lessons: Number(c.lessons), batches: batches.filter((b) => b.course_id === c.id).map((b) => ({ ...b, members: Number(b.members), capacity: Number(b.capacity) })) }));
}
