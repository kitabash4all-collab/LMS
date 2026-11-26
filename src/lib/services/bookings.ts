// Website bookings: parents pick an exact class group (batch) and class time for a free first class.
// Only class groups an admin has opened for booking (batches.public_booking = 1) are offered.
// A place is held while a booking is pending or confirmed, so a class can never be overbooked:
// places left = class-group capacity − enrolled students − held bookings for that class.
import { all, get, run, id, tx, audit, currentDialect } from '../db/index.ts';
import { HttpError } from '../validate.ts';
import { sendEmail, sendWhatsApp, normalisePhone, greetName } from './notify.ts';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'attended' | 'enrolled';
const HELD = "('pending','confirmed')";

/** Bookings close this long before a class starts, so the team has time to send joining details. */
export const BOOKING_CUTOFF_MS = 2 * 3600_000;
/** How far ahead the website shows class times. */
export const BOOKING_WINDOW_DAYS = 60;
/** Class times shown per class group. */
const TIMES_PER_GROUP = 8;

const DEFAULT_TZ = 'Asia/Kolkata';
export function safeTimeZone(tz: string | undefined): string {
  if (!tz) return DEFAULT_TZ;
  try {
    new Intl.DateTimeFormat('en-GB', { timeZone: tz });
    return tz;
  } catch {
    return DEFAULT_TZ;
  }
}

/** "Sat 6 Dec, 5:00 pm IST" in the parent's own time zone. */
export function formatClassTime(iso: string, tz?: string): string {
  return new Date(iso).toLocaleString('en-GB', {
    timeZone: safeTimeZone(tz),
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  });
}

const iso = (v: unknown) => new Date(v as string).toISOString();

// ── Public: open class times ───────────────────────────────
export interface OpenSession {
  id: string;
  starts_at: string;
  duration_min: number;
  seats_left: number;
}
export interface OpenGroup {
  id: string;
  name: string;
  schedule_note: string;
  course: { slug: string; title: string; band: string; level: string; subject: string };
  sessions: OpenSession[];
}

/** Upcoming class times in every class group open for booking, with places left. */
export async function openSlots(now = Date.now()): Promise<{ groups: OpenGroup[] }> {
  const rows = await all(
    `SELECT s.id, s.batch_id, s.starts_at, s.duration_min, b.name batch_name, b.schedule_note, b.capacity,
       c.slug course_slug, c.title course_title, c.grade_band, c.level, sub.name subject,
       (SELECT COUNT(*) FROM batch_members m WHERE m.batch_id=b.id) members,
       (SELECT COUNT(*) FROM bookings k WHERE k.session_id=s.id AND k.status IN ${HELD}) held
     FROM live_sessions s
     JOIN batches b ON b.id=s.batch_id
     JOIN courses c ON c.id=b.course_id
     JOIN subjects sub ON sub.id=c.subject_id
     WHERE b.public_booking=1 AND b.status='active' AND c.status='published' AND s.status='scheduled'
       AND s.starts_at >= ? AND s.starts_at <= ?
     ORDER BY s.starts_at
     LIMIT 1000`,
    new Date(now + BOOKING_CUTOFF_MS).toISOString(),
    new Date(now + BOOKING_WINDOW_DAYS * 86_400_000).toISOString(),
  );
  const groups = new Map<string, OpenGroup>();
  for (const r of rows) {
    let g = groups.get(r.batch_id);
    if (!g) {
      g = {
        id: r.batch_id,
        name: r.batch_name,
        schedule_note: r.schedule_note || '',
        course: { slug: r.course_slug, title: r.course_title, band: r.grade_band || '', level: r.level ? r.level[0].toUpperCase() + r.level.slice(1) : '', subject: r.subject },
        sessions: [],
      };
      groups.set(r.batch_id, g);
    }
    if (g.sessions.length >= TIMES_PER_GROUP) continue;
    g.sessions.push({ id: r.id, starts_at: iso(r.starts_at), duration_min: Number(r.duration_min), seats_left: Math.max(0, Number(r.capacity) - Number(r.members) - Number(r.held)) });
  }
  return { groups: [...groups.values()].sort((a, b) => a.course.title.localeCompare(b.course.title) || a.sessions[0].starts_at.localeCompare(b.sessions[0].starts_at)) };
}

// ── Public: make a booking ─────────────────────────────────
export interface BookingInput {
  session_id: string;
  parent_name: string;
  child_name?: string;
  child_age?: string;
  phone?: string;
  email?: string;
  country?: string;
  timezone?: string;
  consent_whatsapp?: boolean;
  source?: string;
}

export async function createBooking(input: BookingInput, now = Date.now()) {
  if (!input.phone && !input.email) throw new HttpError(400, 'Please add a WhatsApp number or an email address so we can send the joining details.');
  const phone = input.phone ? normalisePhone(input.phone) : '';
  if (input.phone && !phone) throw new HttpError(400, 'Please check the phone number, including the country code.');
  const email = (input.email || '').trim().toLowerCase();
  const tz = safeTimeZone(input.timezone);

  const result = await tx(async () => {
    // One booking at a time per class group, so two parents can't take the last place together.
    if (currentDialect() === 'postgres') await get('SELECT b.id FROM batches b JOIN live_sessions s ON s.batch_id=b.id WHERE s.id=? FOR UPDATE OF b', input.session_id);
    const s = await get(
      `SELECT s.id, s.starts_at, s.duration_min, s.status, b.id batch_id, b.name batch_name, b.capacity, b.public_booking, b.status batch_status,
         c.title course_title, c.status course_status
       FROM live_sessions s JOIN batches b ON b.id=s.batch_id JOIN courses c ON c.id=b.course_id WHERE s.id=?`,
      input.session_id,
    );
    if (!s || !Number(s.public_booking) || s.batch_status !== 'active' || s.course_status !== 'published' || s.status !== 'scheduled')
      throw new HttpError(404, 'That class is no longer open for booking. Please pick another time.');
    const startsAt = iso(s.starts_at);
    if (new Date(startsAt).getTime() < now + BOOKING_CUTOFF_MS) throw new HttpError(409, 'That class starts too soon to book online. Please pick a later time.');

    // The same parent pressing Book twice gets the same booking back.
    const dup = await get<{ id: string }>(
      `SELECT id FROM bookings WHERE session_id=? AND status IN ${HELD} AND ((?<>'' AND phone=?) OR (?<>'' AND email=?))`,
      s.id, phone, phone, email, email,
    );
    if (dup) return { id: dup.id, duplicate: true, s, startsAt };

    const members = Number((await get<{ n: number }>('SELECT COUNT(*) n FROM batch_members WHERE batch_id=?', s.batch_id))?.n || 0);
    const held = Number((await get<{ n: number }>(`SELECT COUNT(*) n FROM bookings WHERE session_id=? AND status IN ${HELD}`, s.id))?.n || 0);
    if (Number(s.capacity) - members - held <= 0) throw new HttpError(409, 'Sorry, that class has just filled up. Please pick another time.');

    const when = formatClassTime(startsAt, tz);
    const lid = id('ld_');
    await run(
      "INSERT INTO leads (id,kind,name,phone,email,country,child_age,interest,preferred_time,source,consent_whatsapp,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,'trial_booked')",
      lid, 'trial', input.parent_name, phone, email, input.country || '', input.child_age || '', s.course_title, when.slice(0, 60), input.source || '', !!input.consent_whatsapp,
    );
    const bid = id('bk_');
    await run(
      `INSERT INTO bookings (id,batch_id,session_id,lead_id,parent_name,child_name,child_age,phone,email,country,timezone,consent_whatsapp,source)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      bid, s.batch_id, s.id, lid, input.parent_name, input.child_name || '', input.child_age || '', phone, email, input.country || '', tz, !!input.consent_whatsapp, input.source || '',
    );
    return { id: bid, duplicate: false, s, startsAt, leadId: lid };
  });

  const when = formatClassTime(result.startsAt, tz);
  if (!result.duplicate) {
    const first = greetName(input.parent_name);
    const child = (input.child_name || '').trim();
    if (phone && input.consent_whatsapp)
      await sendWhatsApp(
        { leadId: result.leadId!, kind: 'booking_trial' },
        phone,
        { name: first, course: result.s.course_title, time: when, child },
        `Hi ${first}, ${child ? `${child}'s` : 'your'} free Kitabash class is booked: ${result.s.course_title}, ${when}. We will send the joining details here before the class. If you need a different time, just reply to this message.`,
      );
    const alertTo = (process.env.LEAD_ALERT_EMAIL || '').trim();
    if (alertTo) {
      const lines = [
        'New class booking on the Kitabash website',
        '',
        `Class: ${result.s.course_title} (${result.s.batch_name})`,
        `Time: ${formatClassTime(result.startsAt, 'Asia/Kolkata')}`,
        `Parent: ${input.parent_name}`,
        `Child: ${child || '—'}${input.child_age ? `, age ${input.child_age}` : ''}`,
        `WhatsApp: ${phone || '—'}`,
        `Email: ${email || '—'}`,
        `Country: ${input.country || '—'}`,
        `WhatsApp consent: ${input.consent_whatsapp ? 'yes' : 'no'}`,
        '',
        'Confirm it under Platform → Bookings.',
      ];
      await sendEmail({ leadId: result.leadId!, kind: 'booking_alert' }, alertTo, `New booking: ${result.s.course_title}, ${input.parent_name}`, lines.join('\n'));
    }
  }
  return { id: result.id, duplicate: result.duplicate, course: result.s.course_title, group: result.s.batch_name, starts_at: result.startsAt, when };
}

// ── Admin ──────────────────────────────────────────────────
export async function listBookings(filter: { status?: string; upcoming?: boolean } = {}, now = Date.now()) {
  const where: string[] = [];
  const args: unknown[] = [];
  if (filter.status) (where.push('k.status=?'), args.push(filter.status));
  if (filter.upcoming) (where.push('s.starts_at >= ?'), args.push(new Date(now - 3 * 3600_000).toISOString()));
  const rows = await all(
    `SELECT k.*, s.starts_at, s.duration_min, s.status session_status, b.name batch_name, c.title course_title
     FROM bookings k JOIN batches b ON b.id=k.batch_id JOIN courses c ON c.id=b.course_id LEFT JOIN live_sessions s ON s.id=k.session_id
     ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
     ORDER BY s.starts_at, k.created_at LIMIT 500`,
    ...args,
  );
  const counts = await all<{ status: string; n: number }>('SELECT status, COUNT(*) n FROM bookings GROUP BY status');
  return {
    bookings: rows.map((r) => ({ ...r, starts_at: r.starts_at ? iso(r.starts_at) : null, consent_whatsapp: !!Number(r.consent_whatsapp) })),
    counts: Object.fromEntries(counts.map((c) => [c.status, Number(c.n)])),
  };
}

const LEAD_STATUS: Partial<Record<BookingStatus, string>> = { confirmed: 'trial_booked', attended: 'trial_booked', enrolled: 'enrolled' };

export async function updateBooking(bookingId: string, patch: { status?: BookingStatus; notes?: string }, adminId: string) {
  const b = await get<{ id: string; lead_id: string | null; status: string; session_id: string | null }>('SELECT id, lead_id, status, session_id FROM bookings WHERE id=?', bookingId);
  if (!b) throw new HttpError(404, 'Booking not found');
  await run("UPDATE bookings SET status=COALESCE(?,status), notes=COALESCE(?,notes), updated_at=datetime('now') WHERE id=?", patch.status || null, patch.notes ?? null, bookingId);
  const leadStatus = patch.status && LEAD_STATUS[patch.status];
  if (leadStatus && b.lead_id) await run("UPDATE leads SET status=?, updated_at=datetime('now') WHERE id=?", leadStatus, b.lead_id);
  await audit(adminId, 'update', 'booking', bookingId, patch.status || 'notes');
}

export async function deleteBooking(bookingId: string, adminId: string) {
  await run('DELETE FROM bookings WHERE id=?', bookingId);
  await audit(adminId, 'delete', 'booking', bookingId);
}
