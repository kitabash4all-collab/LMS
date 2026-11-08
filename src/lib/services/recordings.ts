// Class recordings for quality and safety audits.
//
// Rules (also stated on the website and in the policies):
//   • Only the portal's recorder, started by the teacher or an admin. Everyone in the class sees a "Recording" banner.
//   • Every child under 18 in the class group needs a parent's permission (switched on in the parent's portal).
//     If any child is missing it, recording is refused and the teacher is told which children.
//   • Only admins can watch a recording, and every viewing is written to the audit log.
//   • Recordings are deleted automatically after RECORDING_RETENTION_DAYS (default 30).
// The browser sends the recording in numbered pieces as the class runs, so a dropped
// connection loses at most a few seconds. Pieces are kept in the same private storage as uploads.
import { all, get, run, id, audit } from '../db/index.ts';
import { storage } from '../storage.ts';
import { HttpError } from '../validate.ts';

export const RETENTION_DAYS = () => Math.max(1, Number(process.env.RECORDING_RETENTION_DAYS || 30));
export const MAX_CHUNK_BYTES = 8 * 1024 * 1024;
export const MAX_RECORDING_BYTES = () => Number(process.env.RECORDING_MAX_MB || 1500) * 1024 * 1024;
const key = (recId: string, seq: number) => `rec/${recId}/${String(seq).padStart(5, '0')}.webm`;

/** Children in this class group whose parents have not allowed recording. Adults (18+) don't need it. */
export async function missingRecordingConsent(batchId: string): Promise<string[]> {
  const rows = await all<{ id: string; name: string; birth_year: number | null; ok: number }>(
    `SELECT u.id, u.name, u.birth_year,
       (SELECT COUNT(*) FROM guardian_links g WHERE g.student_id=u.id AND g.consent_recording=1) ok
     FROM batch_members m JOIN users u ON u.id=m.user_id WHERE m.batch_id=? AND u.role='student' ORDER BY u.name`,
    batchId,
  );
  const year = new Date().getFullYear();
  return rows.filter((r) => !(r.birth_year && year - r.birth_year >= 18) && !Number(r.ok)).map((r) => r.name);
}

export async function startRecording(session: { id: string; batch_id: string; status: string }, userId: string) {
  if (session.status !== 'live') throw new HttpError(409, 'Start the class before recording.');
  const missing = await missingRecordingConsent(session.batch_id);
  if (missing.length)
    throw new HttpError(403, `Recording needs a parent's permission for every child in the class. Still waiting for: ${missing.join(', ')}. Parents can switch it on in their Kitabash portal.`);
  const open = await get<{ id: string }>("SELECT id FROM class_recordings WHERE session_id=? AND status='recording'", session.id);
  if (open) await finishRecording(open.id);
  const recId = id('rec_');
  const expires = new Date(Date.now() + RETENTION_DAYS() * 864e5).toISOString();
  await run('INSERT INTO class_recordings (id, session_id, teacher_id, expires_at) VALUES (?,?,?,?)', recId, session.id, userId, expires);
  await audit(userId, 'start', 'recording', recId, session.id);
  return { id: recId, expiresAt: expires };
}

export async function addChunk(recId: string, sessionId: string, userId: string, seq: number, data: Buffer) {
  const r = await get<{ session_id: string; teacher_id: string; status: string; chunks: number; bytes: number }>('SELECT session_id, teacher_id, status, chunks, bytes FROM class_recordings WHERE id=?', recId);
  if (!r || r.session_id !== sessionId) throw new HttpError(404, 'Recording not found');
  if (r.teacher_id !== userId) throw new HttpError(403, 'Only the person who started this recording can add to it.');
  if (r.status !== 'recording') throw new HttpError(409, 'This recording has stopped.');
  if (!data.length) return;
  if (data.length > MAX_CHUNK_BYTES) throw new HttpError(413, 'Recording piece too large');
  if (seq !== Number(r.chunks)) throw new HttpError(409, `Expected piece ${r.chunks}`);
  // A parent can withdraw permission at any time; stop straight away if that happens.
  const batch = await get<{ batch_id: string }>('SELECT batch_id FROM live_sessions WHERE id=?', sessionId);
  if (batch && (await missingRecordingConsent(batch.batch_id)).length) {
    await finishRecording(recId);
    throw new HttpError(403, 'Recording stopped: a parent has withdrawn permission.');
  }
  if (Number(r.bytes) + data.length > MAX_RECORDING_BYTES()) {
    await finishRecording(recId);
    throw new HttpError(413, 'This recording reached its size limit and was stopped.');
  }
  await storage().put(key(recId, seq), data, 'video/webm');
  await run('UPDATE class_recordings SET chunks=chunks+1, bytes=bytes+? WHERE id=?', data.length, recId);
}

export async function finishRecording(recId: string, userId?: string) {
  const r = await get<{ status: string; chunks: number; session_id: string }>('SELECT status, chunks, session_id FROM class_recordings WHERE id=?', recId);
  if (!r || r.status !== 'recording') return;
  if (!Number(r.chunks)) await run('DELETE FROM class_recordings WHERE id=?', recId);
  else await run("UPDATE class_recordings SET status='ready', ended_at=datetime('now') WHERE id=?", recId);
  if (userId) await audit(userId, 'stop', 'recording', recId, r.session_id);
}

export async function listRecordings(f: { teacherId?: string } = {}) {
  return all(
    `SELECT r.id, r.session_id, r.status, r.chunks, r.bytes, r.started_at, r.ended_at, r.expires_at,
       s.title, s.starts_at, b.name batch, u.name teacher
     FROM class_recordings r JOIN live_sessions s ON s.id=r.session_id JOIN batches b ON b.id=s.batch_id LEFT JOIN users u ON u.id=r.teacher_id
     WHERE r.status<>'deleted' ${f.teacherId ? 'AND r.teacher_id=?' : ''} ORDER BY r.started_at DESC LIMIT 200`,
    ...(f.teacherId ? [f.teacherId] : []),
  );
}

/** Streams the recording's pieces one after another (they join into one playable WebM file). */
export async function* recordingPieces(recId: string, viewerId: string) {
  const r = await get<{ status: string; chunks: number; session_id: string }>('SELECT status, chunks, session_id FROM class_recordings WHERE id=?', recId);
  if (!r || r.status === 'deleted') throw new HttpError(404, 'Recording not found');
  await audit(viewerId, 'view', 'recording', recId, r.session_id);
  for (let i = 0; i < Number(r.chunks); i++) {
    const buf = await storage().read(key(recId, i));
    if (buf) yield buf;
  }
}

async function removeFiles(recId: string, chunks: number) {
  const s = storage();
  for (let i = 0; i < chunks; i++) await s.remove(key(recId, i)).catch(() => {});
}

export async function deleteRecording(recId: string, adminId: string) {
  const r = await get<{ chunks: number }>('SELECT chunks FROM class_recordings WHERE id=?', recId);
  if (!r) throw new HttpError(404, 'Recording not found');
  await removeFiles(recId, Number(r.chunks));
  await run('DELETE FROM class_recordings WHERE id=?', recId);
  await audit(adminId, 'delete', 'recording', recId);
}

/** Removes the stored files for every recording of these class sessions (call before deleting the sessions). */
export async function removeRecordingsForBatch(batchId: string) {
  const rows = await all<{ id: string; chunks: number }>('SELECT r.id, r.chunks FROM class_recordings r JOIN live_sessions s ON s.id=r.session_id WHERE s.batch_id=?', batchId);
  for (const r of rows) await removeFiles(r.id, Number(r.chunks));
}

/** Daily: delete expired recordings, and close any left "recording" for more than 6 hours (browser closed). */
export async function purgeRecordings(now = new Date()) {
  const stale = await all<{ id: string }>("SELECT id FROM class_recordings WHERE status='recording' AND started_at < ?", sqlTime(new Date(now.getTime() - 6 * 3600_000)));
  for (const r of stale) await finishRecording(r.id);
  const expired = await all<{ id: string; chunks: number }>('SELECT id, chunks FROM class_recordings WHERE expires_at < ?', now.toISOString());
  for (const r of expired) {
    await removeFiles(r.id, Number(r.chunks));
    await run('DELETE FROM class_recordings WHERE id=?', r.id);
  }
  return expired.length;
}
// started_at is stored by the database clock ("YYYY-MM-DD HH:MM:SS" in SQLite); this string compares correctly in both databases.
const sqlTime = (d: Date) => d.toISOString().replace('T', ' ').slice(0, 19);
