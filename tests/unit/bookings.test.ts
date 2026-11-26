// Website bookings: parents pick an exact class group and class time; places can't be overbooked.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { freshDb } from './helpers.ts';

let db: any, CL: any, BK: any;
let admin: any, courseId: string, batch: string, sessions: string[];

const DAY = 86_400_000;

before(async () => {
  await freshDb();
  const { seed } = await import('../../scripts/seed.ts');
  await seed({ quiet: true });
  db = await import('../../src/lib/db/index.ts');
  CL = await import('../../src/lib/services/classes.ts');
  BK = await import('../../src/lib/services/bookings.ts');
  admin = await db.get("SELECT * FROM users WHERE role='admin'");
  courseId = (await db.get("SELECT id FROM courses WHERE status='published' ORDER BY title LIMIT 1")).id;
  // Capacity 2, one enrolled student: one place left in each class.
  batch = await CL.createBatch({ course_id: courseId, name: 'Sat 10 am', capacity: 2 }, admin.id);
  const student = (await db.get("SELECT id FROM users WHERE role='student'")).id;
  await CL.setMembers(batch, [student], admin.id);
  const start = new Date(Date.now() + 3 * DAY);
  start.setUTCHours(10, 0, 0, 0);
  sessions = await CL.scheduleSessions(admin, batch, { title: 'Week', starts_at: start.toISOString(), repeat_weeks: 3 });
});
after(async () => {
  await db?.closeDb();
});

const parent = (over: any = {}) => ({ session_id: sessions[0], parent_name: 'Priya Sharma', child_name: 'Asha', child_age: '9', phone: '+91 98765 43210', consent_whatsapp: true, timezone: 'Asia/Kolkata', ...over });

test('class groups are hidden from the website until an admin opens them', async () => {
  assert.equal((await BK.openSlots()).groups.length, 0);
  await assert.rejects(BK.createBooking(parent()), /no longer open/);
  await CL.updateBatch(batch, { public_booking: true });
  const { groups } = await BK.openSlots();
  assert.equal(groups.length, 1);
  assert.equal(groups[0].sessions.length, 3);
  assert.deepEqual(groups[0].sessions.map((s: any) => s.seats_left), [1, 1, 1]);
});

test('a booking holds the last place; the next parent is turned away', async () => {
  const r = await BK.createBooking(parent());
  assert.equal(r.duplicate, false);
  assert.match(r.when, /IST|GMT\+5:30/);
  const again = await BK.createBooking(parent({ phone: '98765 43210' }));
  assert.equal(again.duplicate, true, 'the same parent booking twice gets the same booking');
  assert.equal(again.id, r.id);
  await assert.rejects(BK.createBooking(parent({ parent_name: 'Ravi', phone: '+91 91234 56789' })), /filled up/);
  const { groups } = await BK.openSlots();
  assert.deepEqual(groups[0].sessions.map((s: any) => s.seats_left), [0, 1, 1]);
  const lead = await db.get('SELECT * FROM leads WHERE id=(SELECT lead_id FROM bookings WHERE id=?)', r.id);
  assert.equal(lead.status, 'trial_booked');
  assert.equal(lead.phone, '919876543210');
});

test('cancelling frees the place, and the admin list shows the booking', async () => {
  const { bookings, counts } = await BK.listBookings();
  assert.equal(bookings.length, 1);
  assert.equal(bookings[0].child_name, 'Asha');
  assert.equal(counts.pending, 1);
  await BK.updateBooking(bookings[0].id, { status: 'cancelled' }, admin.id);
  assert.equal((await BK.openSlots()).groups[0].sessions[0].seats_left, 1);
  await BK.updateBooking(bookings[0].id, { status: 'enrolled' }, admin.id);
  assert.equal((await db.get('SELECT status FROM leads WHERE id=?', bookings[0].lead_id)).status, 'enrolled');
});

test('two parents booking the last place at the same moment: exactly one gets it', async () => {
  const results = await Promise.allSettled([
    BK.createBooking(parent({ session_id: sessions[1], parent_name: 'A', phone: '+91 90000 00011' })),
    BK.createBooking(parent({ session_id: sessions[1], parent_name: 'B', phone: '+91 90000 00012' })),
  ]);
  assert.equal(results.filter((r) => r.status === 'fulfilled').length, 1);
  assert.match(String((results.find((r) => r.status === 'rejected') as PromiseRejectedResult).reason), /filled up/);
});

test('bookings need contact details and close before the class starts', async () => {
  await assert.rejects(BK.createBooking(parent({ session_id: sessions[1], phone: '', email: '' })), /WhatsApp number or an email/);
  await assert.rejects(BK.createBooking(parent({ session_id: sessions[1], phone: '12345' })), /check the phone number/);
  const soon = Date.parse((await db.get('SELECT starts_at FROM live_sessions WHERE id=?', sessions[1])).starts_at) - 60 * 60_000;
  await assert.rejects(BK.createBooking(parent({ session_id: sessions[1], phone: '+91 90000 00001' }), soon), /too soon/);
  assert.equal((await BK.openSlots(soon)).groups[0].sessions[0].id, sessions[2], 'classes inside the cut-off are not offered');
});

test('cancelled classes and closed groups disappear from the website', async () => {
  await CL.updateSession(admin, sessions[2], { status: 'cancelled' });
  assert.deepEqual((await BK.openSlots()).groups[0].sessions.map((s: any) => s.id), sessions.slice(0, 2));
  await CL.updateBatch(batch, { name: 'Renamed' });
  assert.equal((await BK.openSlots()).groups.length, 1, 'other edits leave booking open');
  await CL.updateBatch(batch, { public_booking: false });
  assert.equal((await BK.openSlots()).groups.length, 0);
});

test('times are shown in the parent’s time zone; bad zones fall back to India', () => {
  const t = '2026-12-05T11:30:00.000Z';
  assert.match(BK.formatClassTime(t, 'Asia/Kolkata'), /5:00\s?pm/);
  assert.match(BK.formatClassTime(t, 'Europe/London'), /11:30\s?am/);
  assert.equal(BK.safeTimeZone('Not/AZone'), 'Asia/Kolkata');
});
