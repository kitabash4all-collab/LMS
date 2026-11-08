-- Teacher portal (pay level, leave) and class recordings for audit.

CREATE TABLE teacher_profiles (
  user_id    TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  level      TEXT NOT NULL DEFAULT 'certified' CHECK (level IN ('certified','senior','specialist')),
  rate       INTEGER,
  notes      TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE teacher_leave (
  id          TEXT PRIMARY KEY,
  teacher_id  TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  start_date  TEXT NOT NULL,
  end_date    TEXT NOT NULL,
  kind        TEXT NOT NULL DEFAULT 'planned' CHECK (kind IN ('planned','sick','emergency')),
  reason      TEXT NOT NULL DEFAULT '',
  status      TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','declined','cancelled')),
  decided_by  TEXT REFERENCES users(id) ON DELETE SET NULL,
  decided_at  TIMESTAMPTZ,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_leave_teacher ON teacher_leave(teacher_id, start_date);

ALTER TABLE guardian_links ADD COLUMN consent_recording INTEGER NOT NULL DEFAULT 0;

CREATE TABLE class_recordings (
  id           TEXT PRIMARY KEY,
  session_id   TEXT NOT NULL REFERENCES live_sessions(id) ON DELETE CASCADE,
  teacher_id   TEXT REFERENCES users(id) ON DELETE SET NULL,
  status       TEXT NOT NULL DEFAULT 'recording' CHECK (status IN ('recording','ready','deleted')),
  mime         TEXT NOT NULL DEFAULT 'video/webm',
  chunks       INTEGER NOT NULL DEFAULT 0,
  bytes        INTEGER NOT NULL DEFAULT 0,
  started_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  ended_at     TIMESTAMPTZ,
  expires_at   TIMESTAMPTZ NOT NULL
);
CREATE INDEX idx_recordings_session ON class_recordings(session_id);

-- Lock out Supabase's public API roles (same model as 001)
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_leave ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_recordings ENABLE ROW LEVEL SECURITY;
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN EXECUTE 'REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon'; END IF;
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN EXECUTE 'REVOKE ALL ON ALL TABLES IN SCHEMA public FROM authenticated'; END IF;
END $$;
