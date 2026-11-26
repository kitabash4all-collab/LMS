-- PostgreSQL / Supabase version of sqlite/008_bookings.sql.
-- Website bookings: parents pick an exact class group (batch) and class time.

ALTER TABLE batches ADD COLUMN public_booking INTEGER NOT NULL DEFAULT 0;

CREATE TABLE bookings (
  id               TEXT PRIMARY KEY,
  batch_id         TEXT NOT NULL REFERENCES batches(id) ON DELETE CASCADE,
  session_id       TEXT REFERENCES live_sessions(id) ON DELETE SET NULL,
  lead_id          TEXT REFERENCES leads(id) ON DELETE SET NULL,
  parent_name      TEXT NOT NULL,
  child_name       TEXT NOT NULL DEFAULT '',
  child_age        TEXT NOT NULL DEFAULT '',
  phone            TEXT NOT NULL DEFAULT '',
  email            TEXT NOT NULL DEFAULT '',
  country          TEXT NOT NULL DEFAULT '',
  timezone         TEXT NOT NULL DEFAULT '',
  consent_whatsapp INTEGER NOT NULL DEFAULT 0,
  source           TEXT NOT NULL DEFAULT '',
  status           TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','confirmed','cancelled','attended','enrolled')),
  notes            TEXT NOT NULL DEFAULT '',
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_bookings_session ON bookings(session_id, status);
CREATE INDEX idx_bookings_status ON bookings(status, created_at);

-- Lock out Supabase's public API roles (same model as 001)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN EXECUTE 'REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon'; END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN EXECUTE 'REVOKE ALL ON ALL TABLES IN SCHEMA public FROM authenticated'; END IF;
END $$;
