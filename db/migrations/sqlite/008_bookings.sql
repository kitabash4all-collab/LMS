-- Website bookings: parents pick an exact class group (batch) and class time.

-- Only class groups an admin opens for booking appear on the public website.
ALTER TABLE batches ADD COLUMN public_booking INTEGER NOT NULL DEFAULT 0;

-- One booking = one child's place in one scheduled class (their first, free class).
-- A place is held while the booking is pending or confirmed.
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
  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX idx_bookings_session ON bookings(session_id, status);
CREATE INDEX idx_bookings_status ON bookings(status, created_at);
