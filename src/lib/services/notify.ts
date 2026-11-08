// Outgoing messages: email and WhatsApp.
//
// Providers are plain HTTPS APIs (no extra npm packages), chosen by environment variables:
//   Email     EMAIL_PROVIDER = brevo | resend      (+ BREVO_API_KEY or RESEND_API_KEY, EMAIL_FROM)
//   WhatsApp  WHATSAPP_PROVIDER = manual (default) | chatdaddy | off
//             manual: messages are written and queued; an admin sends each one from a normal
//                     WhatsApp account with one tap (Admin → Messages & reports). Nothing is sent
//                     automatically, so the number is never at risk.
//             chatdaddy: CHATDADDY_API_TOKEN, optional CHATDADDY_ACCOUNT_ID, and one ChatDaddy
//                     message flow per message kind: CHATDADDY_BOT_<KIND>. A kind with no flow
//                     falls back to the manual queue.
//
// Email is skipped (and logged) until a provider is configured. Every email and every automatic
// WhatsApp attempt is written to the notifications table; queued WhatsApp messages live in
// whatsapp_queue until someone sends or dismisses them.
import { all, get, run, id } from '../db/index.ts';
import { HttpError } from '../validate.ts';

const env = (k: string) => (process.env[k] || '').trim();

export type Channel = 'email' | 'whatsapp';
export interface SendResult {
  channel: Channel;
  status: 'sent' | 'failed' | 'skipped' | 'queued';
  detail: string;
}

interface Target {
  userId?: string | null;
  leadId?: string | null;
  kind: string; // weekly_report, lead_welcome, lead_alert, …
}

async function log(t: Target, channel: Channel, recipient: string, r: SendResult) {
  await run(
    'INSERT INTO notifications (id,user_id,lead_id,channel,kind,recipient,status,detail) VALUES (?,?,?,?,?,?,?,?)',
    id('n_'), t.userId || null, t.leadId || null, channel, t.kind, recipient, r.status, r.detail.slice(0, 500),
  );
  return r;
}

async function post(url: string, headers: Record<string, string>, body: unknown): Promise<{ ok: boolean; status: number; text: string }> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json', ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15_000),
  });
  return { ok: res.ok, status: res.status, text: (await res.text()).slice(0, 300) };
}

// ── Email ──────────────────────────────────────────────────
export function emailProvider(): 'brevo' | 'resend' | null {
  const p = env('EMAIL_PROVIDER').toLowerCase();
  if (p === 'brevo' && env('BREVO_API_KEY') && env('EMAIL_FROM')) return 'brevo';
  if (p === 'resend' && env('RESEND_API_KEY') && env('EMAIL_FROM')) return 'resend';
  return null;
}

/** "Kitabash <hello@example.com>" → { name, email } */
function parseFrom(from: string) {
  const m = from.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  return m ? { name: m[1] || 'Kitabash', email: m[2] } : { name: 'Kitabash', email: from };
}

export async function sendEmail(t: Target, to: string, subject: string, text: string, html?: string): Promise<SendResult> {
  const provider = emailProvider();
  if (!to) return log(t, 'email', to, { channel: 'email', status: 'skipped', detail: 'No email address.' });
  if (!provider) return log(t, 'email', to, { channel: 'email', status: 'skipped', detail: 'Email is not set up (EMAIL_PROVIDER).' });
  const from = env('EMAIL_FROM');
  try {
    const r =
      provider === 'brevo'
        ? await post('https://api.brevo.com/v3/smtp/email', { 'api-key': env('BREVO_API_KEY') }, { sender: parseFrom(from), to: [{ email: to }], subject, textContent: text, htmlContent: html || undefined })
        : await post('https://api.resend.com/emails', { authorization: `Bearer ${env('RESEND_API_KEY')}` }, { from, to: [to], subject, text, html: html || undefined });
    return log(t, 'email', to, r.ok ? { channel: 'email', status: 'sent', detail: `${provider} ${r.status}` } : { channel: 'email', status: 'failed', detail: `${provider} ${r.status}: ${r.text}` });
  } catch (e) {
    return log(t, 'email', to, { channel: 'email', status: 'failed', detail: `${provider}: ${(e as Error).message}` });
  }
}

// ── WhatsApp ───────────────────────────────────────────────
export function whatsappProvider(): 'chatdaddy' | 'manual' | null {
  const p = env('WHATSAPP_PROVIDER').toLowerCase();
  if (p === 'off') return null;
  if (p === 'chatdaddy' && env('CHATDADDY_API_TOKEN')) return 'chatdaddy';
  return 'manual';
}

/** Digits only, with country code. A bare 10-digit number gets DEFAULT_COUNTRY_CODE (91 = India). */
export function normalisePhone(raw: string): string {
  let d = (raw || '').replace(/[^\d]/g, '');
  if (d.startsWith('00')) d = d.slice(2);
  if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  if (d.length === 10) d = (env('DEFAULT_COUNTRY_CODE') || '91') + d;
  return d.length >= 11 && d.length <= 15 ? d : '';
}

/** How to greet someone: their first name, or the full name when it starts with a title ("Mrs Rao"). */
export function greetName(full: string): string {
  const name = (full || '').trim().replace(/\s+/g, ' ');
  const [first, second] = name.split(' ');
  return /^(mr|mrs|ms|miss|dr|prof|sri|smt|shri)\.?$/i.test(first || '') && second ? name : first || name;
}

/** A click-to-chat link that opens WhatsApp (app or web) with the message ready to send. */
export function waLink(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

async function enqueue(t: Target, to: string, text: string): Promise<SendResult> {
  // One pending message per person and kind: a newer one replaces the older, unsent one.
  const who = t.userId ? 'user_id=?' : 'lead_id=?';
  await run(`DELETE FROM whatsapp_queue WHERE ${who} AND kind=? AND status='pending'`, t.userId || t.leadId || '', t.kind);
  await run('INSERT INTO whatsapp_queue (id,user_id,lead_id,kind,phone,body) VALUES (?,?,?,?,?,?)', id('wq_'), t.userId || null, t.leadId || null, t.kind, to, text);
  return { channel: 'whatsapp', status: 'queued', detail: 'Ready to send with one tap.' };
}

/**
 * Sends (ChatDaddy) or queues (manual) a WhatsApp message. `text` is the full message, used for the
 * manual queue; `params` fill a ChatDaddy flow's {{placeholders}}. Callers must only call this for
 * people who opted in to WhatsApp.
 */
export async function sendWhatsApp(t: Target, phone: string, params: Record<string, string>, text: string): Promise<SendResult> {
  const to = normalisePhone(phone);
  const provider = whatsappProvider();
  if (!to) return log(t, 'whatsapp', phone, { channel: 'whatsapp', status: 'skipped', detail: 'No valid phone number.' });
  if (!provider) return log(t, 'whatsapp', to, { channel: 'whatsapp', status: 'skipped', detail: 'WhatsApp is switched off (WHATSAPP_PROVIDER=off).' });
  const bot = env(`CHATDADDY_BOT_${t.kind.toUpperCase()}`);
  if (provider === 'manual' || !bot) return enqueue(t, to, text);
  if (!/^[A-Za-z0-9_-]{3,80}$/.test(bot)) return log(t, 'whatsapp', to, { channel: 'whatsapp', status: 'failed', detail: 'Invalid ChatDaddy flow id.' });
  try {
    const body: Record<string, unknown> = { toContact: to, parameters: params };
    if (env('CHATDADDY_ACCOUNT_ID')) body.accountId = env('CHATDADDY_ACCOUNT_ID');
    const r = await post(`https://api-bots.chatdaddy.tech/bots/${bot}/fire`, { authorization: `Bearer ${env('CHATDADDY_API_TOKEN')}` }, body);
    return log(t, 'whatsapp', to, r.ok ? { channel: 'whatsapp', status: 'sent', detail: `chatdaddy ${r.status}` } : { channel: 'whatsapp', status: 'failed', detail: `chatdaddy ${r.status}: ${r.text}` });
  } catch (e) {
    return log(t, 'whatsapp', to, { channel: 'whatsapp', status: 'failed', detail: `chatdaddy: ${(e as Error).message}` });
  }
}

// ── Manual WhatsApp queue ──────────────────────────────────
export async function whatsappQueue(status: 'pending' | 'sent' | 'dismissed' = 'pending', limit = 200) {
  const rows = await all(
    `SELECT q.*, u.name user_name, l.name lead_name FROM whatsapp_queue q LEFT JOIN users u ON u.id=q.user_id LEFT JOIN leads l ON l.id=q.lead_id
     WHERE q.status=? ORDER BY q.created_at ${status === 'pending' ? 'ASC' : 'DESC'} LIMIT ?`,
    status, limit,
  );
  return rows.map((r) => ({ ...r, name: r.user_name || r.lead_name || '', link: waLink(r.phone, r.body) }));
}

export async function setQueueStatus(itemId: string, status: 'sent' | 'dismissed' | 'pending', byUserId: string) {
  const item = await get<{ id: string; user_id: string | null; lead_id: string | null; kind: string; phone: string }>('SELECT id,user_id,lead_id,kind,phone FROM whatsapp_queue WHERE id=?', itemId);
  if (!item) throw new HttpError(404, 'Message not found');
  await run(status === 'pending' ? "UPDATE whatsapp_queue SET status=?, done_by=NULL, done_at=NULL WHERE id=?" : "UPDATE whatsapp_queue SET status=?, done_by=?, done_at=datetime('now') WHERE id=?", ...(status === 'pending' ? [status, itemId] : [status, byUserId, itemId]));
  if (status === 'sent') await log({ userId: item.user_id, leadId: item.lead_id, kind: item.kind }, 'whatsapp', item.phone, { channel: 'whatsapp', status: 'sent', detail: 'Sent by hand from WhatsApp' });
}

export async function pendingWhatsAppCount(): Promise<number> {
  return Number((await get<{ n: number }>("SELECT COUNT(*) n FROM whatsapp_queue WHERE status='pending'"))?.n || 0);
}

export function messagingStatus() {
  return { email: emailProvider(), whatsapp: whatsappProvider() };
}
