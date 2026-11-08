// Website leads, public catalogue, messaging providers and weekly parent reports.
import { test, before, after, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { freshDb } from './helpers.ts';

let S: any;
const realFetch = globalThis.fetch;
const ENV_KEYS = ['EMAIL_PROVIDER', 'BREVO_API_KEY', 'RESEND_API_KEY', 'EMAIL_FROM', 'WHATSAPP_PROVIDER', 'CHATDADDY_API_TOKEN', 'CHATDADDY_ACCOUNT_ID', 'CHATDADDY_BOT_WEEKLY_REPORT', 'CHATDADDY_BOT_LEAD_TRIAL', 'LEAD_ALERT_EMAIL'];

before(async () => {
  await freshDb();
  const { seed } = await import('../../scripts/seed.ts');
  await seed({ quiet: true });
  S = {
    db: await import('../../src/lib/db/index.ts'),
    N: await import('../../src/lib/services/notify.ts'),
    LD: await import('../../src/lib/services/leads.ts'),
    R: await import('../../src/lib/services/reports.ts'),
  };
});
after(async () => {
  await S?.db.closeDb();
});
afterEach(() => {
  globalThis.fetch = realFetch;
  for (const k of ENV_KEYS) delete process.env[k];
});

/** Records outgoing HTTP calls instead of making them. */
function mockFetch(status = 200) {
  const calls: { url: string; headers: any; body: any }[] = [];
  globalThis.fetch = (async (url: any, init: any) => {
    calls.push({ url: String(url), headers: init.headers, body: JSON.parse(init.body) });
    return new Response('{"ok":true}', { status });
  }) as typeof fetch;
  return calls;
}

test('greetings keep titles with the surname', () => {
  assert.equal(S.N.greetName('Priya Sharma'), 'Priya');
  assert.equal(S.N.greetName('Mrs Rao'), 'Mrs Rao');
  assert.equal(S.N.greetName('Dr. Anil Mehta'), 'Dr. Anil Mehta');
  assert.equal(S.N.greetName('Asha'), 'Asha');
});

test('phone numbers are normalised to digits with a country code', () => {
  assert.equal(S.N.normalisePhone('+91 98765 43210'), '919876543210');
  assert.equal(S.N.normalisePhone('098765 43210'), '919876543210');
  assert.equal(S.N.normalisePhone('9876543210'), '919876543210');
  assert.equal(S.N.normalisePhone('+1 (415) 555-0100'), '14155550100');
  assert.equal(S.N.normalisePhone('12345'), '');
});

test('ISO weeks and the Sunday-evening schedule', () => {
  assert.equal(S.R.isoWeek(new Date('2026-11-03T00:00:00Z')), '2026-W45');
  assert.equal(S.R.isoWeek(new Date('2027-01-01T00:00:00Z')), '2026-W53');
  assert.equal(S.R.weeklyRunDue(new Date('2026-11-08T13:00:00Z')), true); // Sunday 18:30 IST
  assert.equal(S.R.weeklyRunDue(new Date('2026-11-08T11:00:00Z')), false); // Sunday 16:30 IST
  assert.equal(S.R.weeklyRunDue(new Date('2026-11-09T13:00:00Z')), false); // Monday
});

test('without a provider: email is skipped and logged; WhatsApp waits in the one-tap queue', async () => {
  const calls = mockFetch();
  const e = await S.N.sendEmail({ kind: 'test' }, 'parent@example.com', 'Hi', 'Hello');
  const w = await S.N.sendWhatsApp({ kind: 'test', leadId: null, userId: null }, '9876543210', { a: 'b' }, 'Hello from Kitabash');
  assert.equal(e.status, 'skipped');
  assert.equal(w.status, 'queued');
  assert.equal(calls.length, 0, 'nothing leaves the server');
  assert.equal((await S.db.all("SELECT status FROM notifications WHERE kind='test'")).length, 1);
  const q = await S.N.whatsappQueue();
  const item = q.find((m: any) => m.kind === 'test');
  assert.equal(item.phone, '919876543210');
  assert.equal(item.link, 'https://wa.me/919876543210?text=Hello%20from%20Kitabash');
  // WHATSAPP_PROVIDER=off really is off.
  process.env.WHATSAPP_PROVIDER = 'off';
  assert.equal((await S.N.sendWhatsApp({ kind: 'test' }, '9876543210', {}, 'x')).status, 'skipped');
});

test('one-tap queue: mark sent (logged), dismiss, move back; newer message replaces an unsent one', async () => {
  const admin = (await S.db.get("SELECT id FROM users WHERE role='admin'")).id;
  const lead = await S.LD.createLead({ kind: 'school', name: 'Mrs Rao', phone: '9876522222', interest: 'Coding', consent_whatsapp: true });
  let q = (await S.N.whatsappQueue()).filter((m: any) => m.lead_id === lead.id);
  assert.equal(q.length, 1);
  assert.match(q[0].body, /^Hi Mrs Rao, thank you for your interest in Kitabash for your school/);
  await S.LD.createLead({ kind: 'school', name: 'Mrs Rao', phone: '9876522222', interest: 'Coding and AI', consent_whatsapp: true });
  q = (await S.N.whatsappQueue()).filter((m: any) => m.lead_id === lead.id);
  assert.equal(q.length, 1, 'still one pending message');
  assert.match(q[0].body, /Coding and AI/);
  await S.N.setQueueStatus(q[0].id, 'sent', admin);
  assert.equal((await S.N.whatsappQueue()).filter((m: any) => m.lead_id === lead.id).length, 0);
  assert.equal((await S.N.whatsappQueue('sent')).filter((m: any) => m.lead_id === lead.id).length, 1);
  assert.ok(await S.db.get("SELECT 1 FROM notifications WHERE lead_id=? AND status='sent' AND channel='whatsapp'", lead.id));
  await S.N.setQueueStatus(q[0].id, 'pending', admin);
  await S.N.setQueueStatus(q[0].id, 'dismissed', admin);
  assert.equal(await S.N.pendingWhatsAppCount() >= 0, true);
  await assert.rejects(() => S.N.setQueueStatus('nope', 'sent', admin), /not found/);
});

test('ChatDaddy: fires the configured flow with the contact and parameters', async () => {
  process.env.WHATSAPP_PROVIDER = 'chatdaddy';
  process.env.CHATDADDY_API_TOKEN = 'tok';
  process.env.CHATDADDY_ACCOUNT_ID = 'acc_1';
  process.env.CHATDADDY_BOT_WEEKLY_REPORT = 'bot_abc123';
  const calls = mockFetch();
  const r = await S.N.sendWhatsApp({ kind: 'weekly_report' }, '+91 98765 43210', { parentName: 'Asha' }, 'Hi Asha');
  assert.equal(r.status, 'sent');
  assert.equal(calls[0].url, 'https://api-bots.chatdaddy.tech/bots/bot_abc123/fire');
  assert.equal(calls[0].headers.authorization, 'Bearer tok');
  assert.deepEqual(calls[0].body, { toContact: '919876543210', parameters: { parentName: 'Asha' }, accountId: 'acc_1' });
  // A message kind with no ChatDaddy flow falls back to the one-tap queue.
  const s = await S.N.sendWhatsApp({ kind: 'class_reminder' }, '9876543210', {}, 'Reminder');
  assert.equal(s.status, 'queued');
  assert.equal(calls.length, 1);
});

test('email providers: Brevo and Resend request shapes; failures are recorded', async () => {
  process.env.EMAIL_PROVIDER = 'brevo';
  process.env.BREVO_API_KEY = 'k';
  process.env.EMAIL_FROM = 'Kitabash <hello@example.com>';
  let calls = mockFetch();
  assert.equal((await S.N.sendEmail({ kind: 'test2' }, 'p@example.com', 'S', 'T')).status, 'sent');
  assert.equal(calls[0].url, 'https://api.brevo.com/v3/smtp/email');
  assert.deepEqual(calls[0].body.sender, { name: 'Kitabash', email: 'hello@example.com' });
  process.env.EMAIL_PROVIDER = 'resend';
  process.env.RESEND_API_KEY = 'r';
  calls = mockFetch(422);
  const r = await S.N.sendEmail({ kind: 'test2' }, 'p@example.com', 'S', 'T');
  assert.equal(calls[0].url, 'https://api.resend.com/emails');
  assert.equal(r.status, 'failed');
});

test('public catalogue lists published courses only and carries no answer keys', async () => {
  S.LD.clearCatalogCache();
  const cat = await S.LD.publicCatalog();
  const published = (await S.db.get("SELECT COUNT(*) n FROM courses WHERE status='published'")).n;
  assert.equal(cat.courses.length, Number(published));
  const draft = await S.db.get("SELECT title FROM courses WHERE status<>'published' LIMIT 1");
  if (draft) assert.ok(!cat.courses.some((c: any) => c.t === draft.title));
  const json = JSON.stringify(cat);
  for (const secret of ['answer', 'rubric', 'teacher', 'password']) assert.ok(!json.toLowerCase().includes(`"${secret}`), `no ${secret} field`);
});

test('leads: saved, de-duplicated by phone within a day, WhatsApp only with consent', async () => {
  process.env.WHATSAPP_PROVIDER = 'chatdaddy';
  process.env.CHATDADDY_API_TOKEN = 'tok';
  process.env.CHATDADDY_BOT_LEAD_TRIAL = 'bot_trial1';
  const calls = mockFetch();
  await assert.rejects(() => S.LD.createLead({ kind: 'trial', name: 'No Contact' }), /WhatsApp number or an email/);
  const a = await S.LD.createLead({ kind: 'trial', name: 'Priya Sharma', phone: '98765 11111', child_age: '9', interest: 'Scratch', consent_whatsapp: false });
  assert.equal(calls.length, 0, 'no consent → no WhatsApp');
  const b = await S.LD.createLead({ kind: 'trial', name: 'Priya Sharma', phone: '+91 98765 11111', child_age: '10', interest: 'Python', consent_whatsapp: true });
  assert.equal(b.id, a.id);
  assert.equal(b.updated, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].body.parameters.name, 'Priya');
  const { leads, counts } = await S.LD.listLeads();
  const row = leads.find((l: any) => l.id === a.id);
  assert.equal(row.interest, 'Python');
  assert.ok(counts.new >= 1);
  await S.LD.updateLead(a.id, { status: 'trial_booked', notes: 'Sat 10am' }, (await S.db.get("SELECT id FROM users WHERE role='admin'")).id);
  assert.equal((await S.db.get('SELECT status, notes FROM leads WHERE id=?', a.id)).status, 'trial_booked');
});

test('weekly report: built from real activity, saved once per week, shown to the parent', async () => {
  const parent = await S.db.get("SELECT id FROM users WHERE email='parent@kitabash.local'");
  const kid = await S.db.get("SELECT id FROM users WHERE email='aarav@kitabash.local'");
  const lesson = await S.db.get("SELECT l.id, l.course_id FROM lessons l JOIN courses c ON c.id=l.course_id WHERE c.status='published' LIMIT 1");
  const now = new Date();
  await S.db.run(
    `INSERT INTO lesson_progress (user_id,lesson_id,course_id,status,score,max_score,completed_at) VALUES (?,?,?,'completed',8,10,?)
     ON CONFLICT(user_id,lesson_id) DO UPDATE SET status='completed', completed_at=excluded.completed_at`,
    kid.id, lesson.id, lesson.course_id, new Date(now.getTime() - 2 * 864e5).toISOString(),
  );
  const rep = await S.R.buildChildReport(kid.id, now);
  assert.ok(rep.lessonsCompleted.length >= 1);
  assert.match(S.R.summaryLine(rep), /lesson/);
  const text = S.R.reportText(rep, 'Asha', 'https://example.com/');
  assert.match(text, /Hi Asha/);

  process.env.WHATSAPP_PROVIDER = 'chatdaddy';
  process.env.CHATDADDY_API_TOKEN = 'tok';
  process.env.CHATDADDY_BOT_WEEKLY_REPORT = 'bot_week1';
  await S.db.run("UPDATE users SET phone='919876500000', whatsapp_opt_in=1, email_reports=0 WHERE id=?", parent.id);
  const calls = mockFetch();
  const first = await S.R.runWeeklyReports({ now, send: true });
  assert.ok(first.created >= 1);
  assert.ok(calls.some((c) => c.url.includes('bot_week1') && c.body.toContact === '919876500000'));
  const again = await S.R.runWeeklyReports({ now, send: true });
  assert.equal(again.created, 0, 'running twice in a week creates nothing new');
  const saved = await S.R.guardianReports(parent.id);
  assert.ok(saved.some((r: any) => r.studentId === kid.id && r.report.lessonsCompleted.length >= 1));
});
