-- Two ways to learn a course: self-paced (videos and activities on their own) or live (in a batch with a teacher).
ALTER TABLE enrolments ADD COLUMN mode TEXT NOT NULL DEFAULT 'self_paced' CHECK (mode IN ('self_paced','live'));
ALTER TABLE enrolments ADD COLUMN assigned_by TEXT REFERENCES users(id) ON DELETE SET NULL;
-- Students already in a class group for a course are learning it live.
UPDATE enrolments SET mode='live' WHERE EXISTS (SELECT 1 FROM batch_members m JOIN batches b ON b.id=m.batch_id WHERE m.user_id=enrolments.user_id AND b.course_id=enrolments.course_id);
