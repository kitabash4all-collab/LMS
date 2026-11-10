# Plan: run Kitabash on GitHub + Supabase only (no Render)

Status: **proposal — nothing has been changed yet.** Read it, then say which phases to start.

## The idea in one picture

```
 Browser ──► GitHub Pages            (the app's pages: HTML, JS, pictures)
    │
    ├──────► Supabase Edge Function "api"   (all of today's /api/... routes)
    │              │
    │              └──► Supabase Postgres + Storage   (data and uploaded files)
    │
    └──────► Supabase Realtime        (live-class signalling instead of the server's SSE hub)

 GitHub Actions: on every push to main → test → deploy pages + deploy function + apply DB migrations
```

Everything is triggered from GitHub. The only accounts are GitHub and Supabase.

### Why this is smaller than a full rewrite

Supabase Edge Functions run TypeScript (Deno, with Node compatibility). Most of
Kitabash's server is already plain TypeScript, so the server code **moves** into one
Edge Function instead of being rewritten. That includes the services in
`src/lib/services`, the AI agent, the Python interpreter and the Scratch VM. What has
to be rewritten is the plumbing around it.

## What the codebase looks like today

| Part | Where | Size |
|---|---|---|
| API routes (each with its own permission check) | `server/routes.ts` | ~147 routes (89 admin, 16 live, 8 teach, …) |
| Tiny HTTP framework (Node `req/res`, cookies) | `server/http.ts` | small |
| Business logic | `src/lib/services/*.ts` | 14 files, ~2,900 lines |
| Logins: scrypt passwords, session cookie, role permissions | `src/lib/auth.ts` | 137 lines |
| Database: SQLite **or** Postgres (already Supabase-ready, with RLS lock-down) | `src/lib/db`, `db/migrations/postgres` | 7 migrations, ~40 tables |
| Server-side code checking | `src/lib/python/interp.ts`, `src/lib/scratch/vm.ts`, `src/lib/web/checks.ts` | ~3,300 lines |
| Live classes: in-memory hub + Server-Sent Events | `src/lib/live/hub.ts` | single-instance by design |
| Timers: AI-log purge (daily), recording clean-up (6-hourly), parent reports | `server/index.ts`, `services/reports.ts` | `setInterval` |
| Course library (408 courses) + media | `src/lib/library` (6.4 MB), `library-media` (60 MB) | installed into the DB |
| Front end (React) | `src/client` | uses `fetch('/api/...')` with same-origin cookies and `pushState` routing |

## Phases

Each phase ends with something you can check. The existing tests (`npm test`,
`npm run test:e2e`) keep running on every push, so we know nothing broke along the way.

### Phase 0 — Set-up (you, ~10 minutes, one time)
- In Supabase: create an **access token** (Account → Access Tokens).
- In GitHub → repo **Settings → Secrets and variables → Actions**, add:
  `SUPABASE_ACCESS_TOKEN`, `SUPABASE_PROJECT_REF` (`lddciunpnkxbehxnfesh`), `SUPABASE_DB_URL`.
- In Supabase → Edge Functions → Secrets: your AI key (`ANTHROPIC_API_KEY` or `OPENAI_API_KEY`),
  `SETUP_CODE`, and optionally the email/WhatsApp keys.
- In GitHub → **Settings → Pages**: Source = **GitHub Actions**. (The repo is public, so Pages is free.)

### Phase 1 — Database on Supabase
- Apply the 7 existing Postgres migrations to your Supabase project. They already exist and
  already pass the full test suite on Postgres 16, so this is low risk.
- Add a GitHub Action that applies new migrations on every push to `main`.
- **Check:** the ~40 Kitabash tables appear in Supabase → Table Editor.

### Phase 2 — The API as one Edge Function
- Write a small adapter so the existing routes take a web `Request` and return a `Response`,
  instead of Node's `req/res`. Route definitions and permission checks stay the same.
- Database driver: use `npm:pg` (Deno supports it) against Supabase's connection pooler.
- **Sessions:** cookies won't work across `github.io` → `supabase.co` (browsers block
  third-party cookies). Switch to a session token sent in the `Authorization` header and
  kept in the browser. Same scrypt passwords and role permissions, so logins work as designed.
- Add CORS for your Pages address only.
- Files: switch storage to the Supabase Storage driver (already supported via
  `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`).
- **Check:** the unit tests and e2e tests pass against the function.

### Phase 3 — The front end on GitHub Pages
- Build the client as static files with a configurable API address.
- Routing: Pages has no server to send every address to `index.html`, so add a `404.html`
  fallback (or switch to `#/` addresses). The site lives under `/LMS/`, so set that base path.
- Library media (60 MB): serve from Pages, or move it to Supabase Storage.
- **Check:** open `https://kitabash4all-collab.github.io/LMS/`, run the setup page and
  create your admin account.

### Phase 4 — Course library and demo data
- One-click GitHub Action ("Run workflow") that installs the 408-course library and
  optionally the demo data into Supabase. This is too heavy for a single Edge Function call.
- **Check:** courses appear in the admin Curriculum page and on the public site.

### Phase 5 — Live classes on Supabase Realtime
- Today's hub keeps class state in server memory and pushes it with Server-Sent Events.
  Edge Functions don't keep memory between requests, so this part is **rewritten**:
  signalling (offers, answers, ICE), presence, chat, raised hands and mute-all move to
  Realtime *broadcast* and *presence* channels. Attendance and permissions stay in the
  database and the API.
- Video and audio stay browser-to-browser (WebRTC), as today. A TURN relay is still
  recommended for strict school or office networks.
- **Check:** `npm run test:live` and a real two-browser class.

### Phase 6 — Scheduled jobs
- Replace the `setInterval` timers with Supabase **pg_cron** schedules that call the function:
  AI-log purge, recording clean-up and weekly parent reports.
- **Check:** the jobs appear in Supabase → Integrations → Cron and run on time.

### Phase 7 — Turn off the old path
- Update the README "Put it online" guide to GitHub + Supabase.
- Keep `render.yaml` / `Dockerfile` (harmless) or remove them. Your choice.

## Effort and order

| Phase | Kind of work | Rough size |
|---|---|---|
| 0 Set-up | you, in two dashboards | 10 minutes |
| 1 Database | apply what exists | small |
| 2 API → Edge Function | adapter + token sessions | **large** (the core of the move) |
| 3 Front end → Pages | build config + routing | medium |
| 4 Library install | one GitHub Action | small |
| 5 Live classes → Realtime | real rewrite | **large** |
| 6 Scheduled jobs | pg_cron | small |
| 7 Docs | — | small |

Phases 1–4 give you a working site (logins, courses, lessons, AI, code labs, admin and
teacher portals) **without live video classes**. Phase 5 brings live classes back.
Expect several working sessions in total.

## Risks to know about up front

1. **Edge Function CPU limit (about 2 seconds of CPU per request).** Most routes are far
   below this. The ones to watch are checking large student programs (Python/Scratch) and
   reading big uploaded PDFs for the AI knowledge base. If any hit the limit, those checks
   move into the student's browser for practice mode and stay on the server only for
   graded work.
2. **Function size.** The 6.4 MB course library is only needed for installing, so it stays
   out of the function (Phase 4).
3. **Free-plan limits.** Supabase free projects pause after about a week with no use, and
   they have Edge Function, Realtime and storage quotas. For a school in daily use,
   the Supabase Pro plan is the safe choice.
4. **Live classes depend on Phase 5.** Until then, that menu should be hidden.
5. **Public repository.** GitHub Pages is free here because the repo is public. That's fine:
   no secrets live in the code, only in GitHub/Supabase secrets.

## Questions for you before starting

1. Is it OK to launch without live classes first (Phases 1–4), then add them (Phase 5)?
2. Which AI provider will you use: Anthropic, OpenAI, or none for now (offline mode)?
3. Site address: `kitabash4all-collab.github.io/LMS`, or your own domain?
