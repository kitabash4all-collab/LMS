-- WhatsApp messages waiting to be sent by hand from a normal WhatsApp account.
-- The portal writes the message; an admin taps "Open in WhatsApp" and presses Send.
CREATE TABLE whatsapp_queue (
  id         TEXT PRIMARY KEY,
  user_id    TEXT REFERENCES users(id) ON DELETE CASCADE,
  lead_id    TEXT REFERENCES leads(id) ON DELETE CASCADE,
  kind       TEXT NOT NULL,              -- weekly_report, lead_trial, ...
  phone      TEXT NOT NULL,              -- digits with country code
  body       TEXT NOT NULL,              -- the ready-written message
  status     TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','sent','dismissed')),
  done_by    TEXT REFERENCES users(id) ON DELETE SET NULL,
  done_at    TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX idx_wa_queue_status ON whatsapp_queue(status, created_at);
