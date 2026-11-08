// Public website: the course catalogue (no answer keys, no drafts) and enquiries (leads).
import { all, get, run, id, j, audit } from '../db/index.ts';
import { TRACKS, trackLevels, isTrackSubject } from '../library/tracks.ts';
import { HttpError } from '../validate.ts';
import { sendEmail, sendWhatsApp, normalisePhone, greetName } from './notify.ts';

// ── Public catalogue ───────────────────────────────────────
let cache: { at: number; data: unknown } | null = null;

/** Published courses only, with marketing fields. Cached for 5 minutes. */
export async function publicCatalog() {
  if (cache && Date.now() - cache.at < 5 * 60_000) return cache.data;
  const rows = await all(
    `SELECT c.id, c.slug, c.title, c.description, c.outcomes, c.grade_band, c.level, s.name subject, k.name category,
       (SELECT COUNT(*) FROM lessons l WHERE l.course_id=c.id AND l.status='approved') lessons
     FROM courses c JOIN subjects s ON s.id=c.subject_id JOIN categories k ON k.id=s.category_id
     WHERE c.status='published' ORDER BY k.sort, s.name, c.grade_band, c.level, c.title`,
  );
  // Which installed course is each track level?
  const installed = new Map<string, string>();
  for (const r of await all<{ key: string; value: string }>("SELECT key, value FROM settings WHERE key LIKE 'library:%'")) installed.set(r.key.slice(8), r.value);
  const flagshipIds = new Set(TRACKS.flatMap((t) => t.levels.map((l) => installed.get(l.key)).filter(Boolean) as string[]));
  const byId = new Map(rows.map((r) => [r.id, r]));
  const tracks = TRACKS.map((t) => ({
    id: t.id,
    name: t.name,
    ages: t.ages,
    summary: t.summary,
    tools: t.tools,
    next: t.next || '',
    levels: trackLevels(t).map((lv) => {
      const row = byId.get(installed.get(lv.key) || '');
      return { ...lv, slug: row?.slug || '', live: !!row };
    }),
  }));
  // Older short courses in subjects a track now covers are hidden from the website (still in the portal).
  const courses = rows
    .filter((r) => flagshipIds.has(r.id) || !isTrackSubject(r.subject, r.category))
    .map((r) => ({
      slug: r.slug,
      t: r.title,
      d: r.description,
      o: j<string[]>(r.outcomes, []).slice(0, 3),
      b: r.grade_band || '',
      l: r.level ? r.level[0].toUpperCase() + r.level.slice(1) : '',
      s: r.subject,
      c: r.category,
      n: Number(r.lessons),
    }));
  const data = { courses, tracks, subjects: new Set(courses.map((c) => c.s)).size };
  cache = { at: Date.now(), data };
  return data;
}
export function clearCatalogCache() {
  cache = null;
}

// ── Leads ──────────────────────────────────────────────────
export type LeadKind = 'trial' | 'teacher' | 'school';
export type LeadStatus = 'new' | 'contacted' | 'trial_booked' | 'enrolled' | 'lost';
export interface LeadInput {
  kind: LeadKind;
  name: string;
  phone?: string;
  email?: string;
  country?: string;
  child_age?: string;
  interest?: string;
  preferred_time?: string;
  source?: string;
  consent_whatsapp?: boolean;
}

export async function createLead(input: LeadInput) {
  if (!input.phone && !input.email) throw new HttpError(400, 'Please add a WhatsApp number or an email address so we can reply.');
  const phone = input.phone ? normalisePhone(input.phone) : '';
  if (input.phone && !phone) throw new HttpError(400, 'Please check the phone number, including the country code.');
  // The same person submitting twice within a day updates their enquiry instead of adding a duplicate.
  const dup = phone
    ? await get<{ id: string }>("SELECT id FROM leads WHERE phone=? AND kind=? AND created_at >= datetime('now', ?)", phone, input.kind, '-1 days')
    : null;
  const lid = dup?.id || id('ld_');
  if (dup) {
    await run(
      "UPDATE leads SET name=?, email=?, country=?, child_age=?, interest=?, preferred_time=?, consent_whatsapp=?, updated_at=datetime('now') WHERE id=?",
      input.name, input.email || '', input.country || '', input.child_age || '', input.interest || '', input.preferred_time || '', !!input.consent_whatsapp, lid,
    );
  } else {
    await run(
      'INSERT INTO leads (id,kind,name,phone,email,country,child_age,interest,preferred_time,source,consent_whatsapp) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
      lid, input.kind, input.name, phone, input.email || '', input.country || '', input.child_age || '', input.interest || '', input.preferred_time || '', input.source || '', !!input.consent_whatsapp,
    );
  }
  // Automatic follow-up: a WhatsApp welcome (only with consent) and an alert to the team.
  const first = greetName(input.name);
  if (phone && input.consent_whatsapp) await sendWhatsApp({ leadId: lid, kind: `lead_${input.kind}` }, phone, { name: first, interest: input.interest || '', childAge: input.child_age || '' }, leadWelcome(input.kind, first, input));
  const alertTo = (process.env.LEAD_ALERT_EMAIL || '').trim();
  if (alertTo) {
    const lines = [`New ${input.kind} enquiry on the Kitabash website`, '', `Name: ${input.name}`, `WhatsApp: ${phone || '—'}`, `Email: ${input.email || '—'}`, `Country: ${input.country || '—'}`];
    if (input.kind === 'trial') lines.push(`Child's age: ${input.child_age || '—'}`);
    lines.push(`Interested in: ${input.interest || '—'}`, `Preferred time: ${input.preferred_time || '—'}`, `WhatsApp consent: ${input.consent_whatsapp ? 'yes' : 'no'}`, `Source: ${input.source || '—'}`);
    await sendEmail({ leadId: lid, kind: 'lead_alert' }, alertTo, `New ${input.kind} enquiry: ${input.name}`, lines.join('\n'));
  }
  return { id: lid, updated: !!dup };
}

/** The first WhatsApp reply to a new enquiry, written as a person would. */
export function leadWelcome(kind: LeadKind, first: string, input: Pick<LeadInput, 'interest' | 'child_age'>): string {
  const interest = (input.interest || '').trim();
  if (kind === 'teacher')
    return `Hi ${first}, thank you for applying to teach with Kitabash${interest ? ` (${interest})` : ''}. Could you share a few lines about your teaching experience and the times you are free each week? We will then book a short demo class with you.`;
  if (kind === 'school')
    return `Hi ${first}, thank you for your interest in Kitabash for your school or centre${interest ? ` (${interest})` : ''}. Could we set up a 15-minute call to understand your students and timetable? Which day suits you?`;
  const age = /^\d+$/.test(input.child_age || '') ? ` for your ${input.child_age}-year-old` : '';
  return `Hi ${first}, thank you for asking about a free trial class at Kitabash${age}${interest ? ` in ${interest}` : ''}. We run small live batches on weekday evenings and at weekends, and the first class is free. Which days and times suit you best?`;
}

export async function listLeads(filter: { status?: string; kind?: string } = {}) {
  const where: string[] = [];
  const args: string[] = [];
  if (filter.status) (where.push('status=?'), args.push(filter.status));
  if (filter.kind) (where.push('kind=?'), args.push(filter.kind));
  const rows = await all(`SELECT * FROM leads ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY created_at DESC LIMIT 500`, ...args);
  const counts = await all<{ status: string; n: number }>('SELECT status, COUNT(*) n FROM leads GROUP BY status');
  return { leads: rows.map((r) => ({ ...r, consent_whatsapp: !!r.consent_whatsapp })), counts: Object.fromEntries(counts.map((c) => [c.status, Number(c.n)])) };
}

export async function updateLead(leadId: string, patch: { status?: LeadStatus; notes?: string }, adminId: string) {
  if (!(await get('SELECT 1 FROM leads WHERE id=?', leadId))) throw new HttpError(404, 'Lead not found');
  await run("UPDATE leads SET status=COALESCE(?,status), notes=COALESCE(?,notes), updated_at=datetime('now') WHERE id=?", patch.status || null, patch.notes ?? null, leadId);
  await audit(adminId, 'update', 'lead', leadId, patch.status || 'notes');
}

export async function deleteLead(leadId: string, adminId: string) {
  await run('DELETE FROM leads WHERE id=?', leadId);
  await audit(adminId, 'delete', 'lead', leadId);
}

export async function recentNotifications(limit = 100) {
  return all(
    `SELECT n.*, u.name user_name, l.name lead_name FROM notifications n LEFT JOIN users u ON u.id=n.user_id LEFT JOIN leads l ON l.id=n.lead_id
     ORDER BY n.created_at DESC LIMIT ?`,
    limit,
  );
}
