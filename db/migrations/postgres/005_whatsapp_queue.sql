-- WhatsApp messages waiting to be sent by hand from a normal WhatsApp account.
-- The portal writes the message; an admin taps "Open in WhatsApp" and presses Send.
CREATE TABLE whatsapp_queue (
  id         TEXT PRIMARY KEY,
  user_id    TEXT REFERENCES users(id) ON DELETE CASCADE,
  lead_id    TEXT REFERENCES leads(id) ON DELETE CASCADE,
  kind       TEXT NOT NULL,
  phone      TEXT NOT NULL,
  body       TEXT NOT NULL,
  status     TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','sent','dismissed')),
  done_by    TEXT REFERENCES users(id) ON DELETE SET NULL,
  done_at    TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_wa_queue_status ON whatsapp_queue(status, created_at);

-- Lock out Supabase's public API roles (same model as 001)
ALTER TABLE whatsapp_queue ENABLE ROW LEVEL SECURITY;
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN EXECUTE 'REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon'; END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN EXECUTE 'REVOKE ALL ON ALL TABLES IN SCHEMA public FROM authenticated'; END IF;
END $$;
