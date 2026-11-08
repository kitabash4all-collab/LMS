-- Teacher portal (pay level, leave) and class recordings for audit.

-- Pay level per teacher (see "Kitabash Fees, Teacher Pay and Policies").
CREATE TABLE teacher_profiles (
  user_id    TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  level      TEXT NOT NULL DEFAULT 'certified' CHECK (level IN ('certified','senior','specialist')),
  rate       INTEGER,                    -- optional override of the class rate in rupees
  notes      TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Leave requests and their outcome.
CREATE TABLE teacher_leave (
  id          TEXT PRIMARY KEY,
  teacher_id  TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  start_date  TEXT NOT NULL,             -- YYYY-MM-DD
  end_date    TEXT NOT NULL,             -- YYYY-MM-DD, inclusive
  kind        TEXT NOT NULL DEFAULT 'planned' CHECK (kind IN ('planned','sick','emergency')),
  reason      TEXT NOT NULL DEFAULT '',
  status      TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','declined','cancelled')),
  decided_by  TEXT REFERENCES users(id) ON DELETE SET NULL,
  decided_at  TEXT,
  created_at  TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX idx_leave_teacher ON teacher_leave(teacher_id, start_date);

-- Parents may allow class recordings (for quality checks). Off unless they switch it on.
ALTER TABLE guardian_links ADD COLUMN consent_recording INTEGER NOT NULL DEFAULT 0;

-- Recordings of live classes, kept in private storage as numbered chunks, deleted after the retention period.
CREATE TABLE class_recordings (
  id           TEXT PRIMARY KEY,
  session_id   TEXT NOT NULL REFERENCES live_sessions(id) ON DELETE CASCADE,
  teacher_id   TEXT REFERENCES users(id) ON DELETE SET NULL,
  status       TEXT NOT NULL DEFAULT 'recording' CHECK (status IN ('recording','ready','deleted')),
  mime         TEXT NOT NULL DEFAULT 'video/webm',
  chunks       INTEGER NOT NULL DEFAULT 0,
  bytes        INTEGER NOT NULL DEFAULT 0,
  started_at   TEXT NOT NULL DEFAULT (datetime('now')),
  ended_at     TEXT,
  expires_at   TEXT NOT NULL
);
CREATE INDEX idx_recordings_session ON class_recordings(session_id);
