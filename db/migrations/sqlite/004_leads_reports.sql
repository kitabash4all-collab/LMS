-- Marketing site leads, weekly parent reports, and a log of every message sent.

-- Parents can receive WhatsApp messages only when they have opted in with a phone number.
ALTER TABLE users ADD COLUMN phone TEXT NOT NULL DEFAULT '';
ALTER TABLE users ADD COLUMN whatsapp_opt_in INTEGER NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN email_reports INTEGER NOT NULL DEFAULT 1;

-- Enquiries from the public website (free trial, teacher applications, schools).
CREATE TABLE leads (
  id               TEXT PRIMARY KEY,
  kind             TEXT NOT NULL DEFAULT 'trial' CHECK (kind IN ('trial','teacher','school')),
  name             TEXT NOT NULL,
  phone            TEXT NOT NULL DEFAULT '',
  email            TEXT NOT NULL DEFAULT '',
  country          TEXT NOT NULL DEFAULT '',
  child_age        TEXT NOT NULL DEFAULT '',
  interest         TEXT NOT NULL DEFAULT '',
  preferred_time   TEXT NOT NULL DEFAULT '',
  source           TEXT NOT NULL DEFAULT '',
  consent_whatsapp INTEGER NOT NULL DEFAULT 0,
  status           TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','trial_booked','enrolled','lost')),
  notes            TEXT NOT NULL DEFAULT '',
  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX idx_leads_status ON leads(status, created_at);

-- One saved report per child per week; parents see it in their account.
CREATE TABLE weekly_reports (
  id          TEXT PRIMARY KEY,
  guardian_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  student_id  TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  week        TEXT NOT NULL,              -- ISO week, e.g. 2026-W45
  report      TEXT NOT NULL,              -- JSON summary
  created_at  TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (guardian_id, student_id, week)
);

-- Every email / WhatsApp message the portal tried to send, with its result.
CREATE TABLE notifications (
  id         TEXT PRIMARY KEY,
  user_id    TEXT REFERENCES users(id) ON DELETE CASCADE,
  lead_id    TEXT REFERENCES leads(id) ON DELETE CASCADE,
  channel    TEXT NOT NULL CHECK (channel IN ('email','whatsapp')),
  kind       TEXT NOT NULL,              -- weekly_report, lead_welcome, ...
  recipient  TEXT NOT NULL DEFAULT '',
  status     TEXT NOT NULL CHECK (status IN ('sent','failed','skipped')),
  detail     TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX idx_notifications_created ON notifications(created_at);
