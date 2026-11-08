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
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_leads_status ON leads(status, created_at);

-- One saved report per child per week; parents see it in their account.
CREATE TABLE weekly_reports (
  id          TEXT PRIMARY KEY,
  guardian_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  student_id  TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  week        TEXT NOT NULL,
  report      TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (guardian_id, student_id, week)
);

-- Every email / WhatsApp message the portal tried to send, with its result.
CREATE TABLE notifications (
  id         TEXT PRIMARY KEY,
  user_id    TEXT REFERENCES users(id) ON DELETE CASCADE,
  lead_id    TEXT REFERENCES leads(id) ON DELETE CASCADE,
  channel    TEXT NOT NULL CHECK (channel IN ('email','whatsapp')),
  kind       TEXT NOT NULL,
  recipient  TEXT NOT NULL DEFAULT '',
  status     TEXT NOT NULL CHECK (status IN ('sent','failed','skipped')),
  detail     TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_notifications_created ON notifications(created_at);

-- Lock out Supabase's public API roles (same model as 001)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN EXECUTE 'REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon'; END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN EXECUTE 'REVOKE ALL ON ALL TABLES IN SCHEMA public FROM authenticated'; END IF;
END $$;
