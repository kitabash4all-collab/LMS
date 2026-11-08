// Kitabash server entry: static client + JSON API.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { dispatch, securityHeaders, sendJSON, parseCookies, COOKIE } from './http.ts';
import { userFromToken } from '../src/lib/auth.ts';
import { get, run } from '../src/lib/db/index.ts';
import { runWeeklyReports, weeklyRunDue, isoWeek } from '../src/lib/services/reports.ts';
import './routes.ts';
import { initDb, currentDialect } from '../src/lib/db/index.ts';
import { explainDbError } from '../src/lib/db/pg.ts';
import { purgeOldLogs } from '../src/lib/services/admin.ts';
import { purgeRecordings } from '../src/lib/services/recordings.ts';
import { activeProvider } from '../src/lib/agent/providers/index.ts';
import { loadEnv } from './env.ts';
import { upgradeLibraryPlatforms } from '../src/lib/library/platform-upgrade.ts';
import { installNewFlagships, refreshLibraryVideos } from '../src/lib/library/install.ts';
import { clearCatalogCache } from '../src/lib/services/leads.ts';

loadEnv();
if (process.env.NODE_ENV === 'production' && (!process.env.SESSION_SECRET || process.env.SESSION_SECRET.length < 24 || /change-me/.test(process.env.SESSION_SECRET))) {
  console.error('SESSION_SECRET must be set to a long random value in production.');
  process.exit(1);
}

try {
  await initDb();
} catch (e) {
  console.error('\nCould not open the database:\n  ' + explainDbError(e) + '\n');
  process.exit(1);
}
await purgeOldLogs();
await purgeRecordings().catch((e) => console.error('Recording clean-up failed:', e));
// Give courses installed before platform activities existed their "Do it in <platform>" activities.
void upgradeLibraryPlatforms()
  .then((r) => r.lessons && console.log(`Course library: added platform activities to ${r.lessons} lessons in ${r.courses} courses.`))
  .catch((e) => console.error('Course library platform upgrade failed:', e))
  .then(() => installNewFlagships())
  .then(async (n) => (n || 0) + (await refreshLibraryVideos()))
  .then((n) => n && clearCatalogCache())
  .catch((e) => console.error('Installing new library courses failed:', e));
setInterval(() => void purgeOldLogs().catch(() => {}), 24 * 3600_000).unref();
setInterval(() => void purgeRecordings().catch((e) => console.error('Recording clean-up failed:', e)), 6 * 3600_000).unref();

const PUBLIC = [path.resolve('dist/public'), path.resolve(path.dirname(new URL(import.meta.url).pathname), 'public')].find((p) => fs.existsSync(p)) || path.resolve('dist/public');
const MIME: Record<string, string> = { '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.ico': 'image/x-icon', '.json': 'application/json', '.map': 'application/json', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml' };

// The public website: shown at "/" to visitors who are not signed in (and once setup is done).
// It loads Google Fonts, so it gets its own, slightly wider content security policy.
const SITE_CSP =
  "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; media-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'";
async function wantsSite(req: http.IncomingMessage): Promise<boolean> {
  const url = new URL(req.url || '/', 'http://local');
  if (url.pathname !== '/' && url.pathname !== '/welcome') return false;
  if (!fs.existsSync(path.join(PUBLIC, 'site.html'))) return false;
  if (url.pathname === '/welcome') return true;
  if (await userFromToken(parseCookies(req.headers.cookie)[COOKIE])) return false;
  return !!(await get('SELECT 1 FROM users LIMIT 1')); // before setup, "/" opens the setup page
}

function serveStatic(req: http.IncomingMessage, res: http.ServerResponse) {
  const url = new URL(req.url || '/', 'http://local');
  const rel = path.normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
  let file = path.join(PUBLIC, rel);
  if (!file.startsWith(PUBLIC)) return sendJSON(res, 400, { error: 'Bad path' });
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(PUBLIC, 'index.html'); // SPA fallback
  if (!fs.existsSync(file)) {
    res.writeHead(503, { 'content-type': 'text/plain' });
    return res.end('Client not built. Run: npm run build');
  }
  const ext = path.extname(file);
  const size = fs.statSync(file).size;
  // Byte ranges, so phones (Safari especially) can stream the promo video.
  const range = /^bytes=(\d*)-(\d*)$/.exec(String(req.headers.range || ''));
  if (ext === '.mp4' && range && (range[1] || range[2])) {
    let start = range[1] ? Number(range[1]) : size - Number(range[2]);
    let end = range[1] && range[2] ? Number(range[2]) : size - 1;
    start = Math.max(0, start);
    end = Math.min(end, size - 1);
    if (start > end) {
      res.writeHead(416, { 'content-range': `bytes */${size}` });
      return res.end();
    }
    res.writeHead(206, { 'content-type': MIME[ext], 'content-range': `bytes ${start}-${end}/${size}`, 'accept-ranges': 'bytes', 'content-length': end - start + 1, 'cache-control': 'public, max-age=86400' });
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(200, {
    ...(ext === '.mp4' ? { 'accept-ranges': 'bytes', 'content-length': size } : {}),
    'content-type': MIME[ext] || 'application/octet-stream',
    'cache-control': ext === '.html' ? 'no-cache' : /\.[0-9a-f]{8}\./.test(file) ? 'public, max-age=31536000, immutable' : 'public, max-age=300',
  });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer(async (req, res) => {
  securityHeaders(res);
  try {
    if (req.url?.startsWith('/api/')) {
      if (!(await dispatch(req, res))) sendJSON(res, 404, { error: 'Not found' });
    } else if (req.url === '/healthz') sendJSON(res, 200, { ok: true, db: currentDialect() });
    else if (await wantsSite(req)) {
      res.setHeader('content-security-policy', SITE_CSP);
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache' });
      fs.createReadStream(path.join(PUBLIC, 'site.html')).pipe(res);
    } else serveStatic(req, res);
  } catch (e) {
    console.error(e);
    if (!res.headersSent) sendJSON(res, 500, { error: 'Server error' });
  }
});

const port = Number(process.env.PORT || 3000);
const localUrl = `http://localhost:${port}`;
function openBrowser() {
  if (!process.env.OPEN_BROWSER) return;
  const cmd = process.platform === 'win32' ? ['cmd', ['/c', 'start', '', localUrl]] : process.platform === 'darwin' ? ['open', [localUrl]] : ['xdg-open', [localUrl]];
  import('node:child_process').then(({ spawn }) => spawn(cmd[0] as string, cmd[1] as string[], { stdio: 'ignore', detached: true }).on('error', () => {}).unref());
}
server.on('error', (e: NodeJS.ErrnoException) => {
  if (e.code === 'EADDRINUSE') {
    console.error(`\nPort ${port} is already in use — Kitabash may already be running. Open ${localUrl} in your browser.\n`);
    openBrowser();
  } else console.error(e);
  process.exit(1);
});
server.listen(port, () => {
  openBrowser();
  const p = activeProvider();
  console.log(`Kitabash running on http://localhost:${port}  ·  DB: ${currentDialect() === 'postgres' ? 'PostgreSQL (DATABASE_URL)' : 'SQLite (local file)'}  ·  AI: ${p.label}`);
});
