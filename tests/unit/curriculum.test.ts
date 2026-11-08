// Round 1 curriculum: Prompt Lab grading, the new track courses (lint, Python solutions,
// Prompt Lab examples), project-file downloads, learning tracks in the public catalogue,
// and automatic install of new track levels.
import fs from 'node:fs';
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { freshDb } from './helpers.ts';
import { FLAGSHIPS } from '../../src/lib/library/flagship/all.ts';
import { lintFlagship, lessonsOf, expandFlagLesson } from '../../src/lib/library/flagship/expand.ts';
import { gradeActivity, validateActivity } from '../../src/lib/activities/registry.ts';
import { runChecks } from '../../src/lib/python/checks.ts';
import { TRACKS } from '../../src/lib/library/tracks.ts';

const NEW = [
  'python--6-8--beginner@2', 'generative-ai--6-8--beginner@2', 'ai-at-work--adult--beginner@2',
  'python--6-8--intermediate@2', 'web-development--6-8--beginner@2', 'generative-ai--6-8--intermediate@2',
  'ai-at-work--adult--intermediate@2', 'spoken-english--3-5--beginner@2', 'financial-literacy--3-5--beginner@2',
];
// Ages 8–11 classes are 45 minutes; older learners' classes are 60.
const minutesFor = (k: string) => (/--3-5--/.test(k) ? 45 : 60);
const course = (k: string) => FLAGSHIPS.find((f) => f.key === k)!;

let db: any;
before(async () => {
  await freshDb();
  const { seed } = await import('../../scripts/seed.ts');
  await seed({ quiet: true });
  db = await import('../../src/lib/db/index.ts');
});
after(async () => {
  await db?.closeDb();
});

test('Prompt Lab grading: checklist feedback, length rule, example passes', () => {
  const config = { task: 'Write a prompt', checks: ['Give the AI a role', 'Say the format'], minWords: 6 };
  const key = { checks: [['you are', 'act as'], ['table', 'bullet']], exemplar: 'You are a coach. Make a table of drills for me.' };
  validateActivity('ai_lab', config, key);
  assert.throws(() => validateActivity('ai_lab', config, { checks: [['x']], exemplar: '' }));
  const full = gradeActivity('ai_lab', 20, config, key, { text: key.exemplar });
  assert.equal(full.correct, true);
  assert.equal(full.score, 20);
  const half = gradeActivity('ai_lab', 20, config, key, { text: 'Act as a coach and help me practise cricket today' });
  assert.equal(half.correct, false);
  assert.match(half.feedback, /Say the format/);
  assert.equal(gradeActivity('ai_lab', 20, config, key, { text: 'you are table' }).score, 0); // too short
});

test('every flagship course passes its checks, including the new track levels', () => {
  for (const k of NEW) assert.ok(course(k), `${k} is registered`);
  for (const c of FLAGSHIPS) assert.deepEqual(lintFlagship(c), [], c.key);
  for (const k of NEW) {
    const c = course(k);
    assert.equal(lessonsOf(c).length, 8);
    for (const l of lessonsOf(c)) {
      assert.equal(l.minutes, minutesFor(k));
      assert.ok((l.files || []).length || l.acts.some((a) => 'py' in a && a.mode === 'project'), `${l.title} has project files`);
      for (const a of l.acts) if ('py' in a) assert.ok(runChecks(a.solution, a.goals.map((g) => g[1]), a.inputs || []).passed, `${l.title} / ${a.title}`);
      for (const x of expandFlagLesson(c, l).activities as any[])
        if (x.type === 'ai_lab') assert.ok(gradeActivity('ai_lab', 10, x.config, x.answer_key, { text: x.answer_key.exemplar }).correct, `${l.title} / ${x.title}`);
    }
  }
  // AI courses never send under-18s to Claude.
  const kids = JSON.stringify(course('generative-ai--6-8--beginner@2'));
  assert.ok(!/"tools":\[[^\]]*"Claude"/.test(kids), 'no Prompt Lab for kids lists Claude');
});

test('every track level is a real course', () => {
  const keys = new Set(FLAGSHIPS.map((f) => f.key));
  for (const t of TRACKS) for (const l of t.levels) assert.ok(keys.has(l.key), `${t.id}: ${l.key}`);
});

test('new levels install with project files, show as tracks, and older courses in those subjects leave the website', { timeout: 300_000 }, async () => {
  const I = await import('../../src/lib/library/install.ts');
  const LD = await import('../../src/lib/services/leads.ts');
  const admin = (await db.get("SELECT id FROM users WHERE role='admin'")).id;
  const subj = await I.subjectIds(admin);
  // An older short AI course and a non-track course, as if installed from the library earlier.
  const oldAi = I.ACTIVE.find((c) => c.subject === 'Artificial Intelligence')!;
  const science = I.ACTIVE.find((c) => c.subject === 'Science')!;
  const oldId = await I.installCourse(oldAi, admin, subj);
  await I.installCourse(science, admin, subj);
  await db.run("INSERT INTO settings (key,value) VALUES ('library:test-marker', ?)", oldId);
  // Boot-time upgrade installs every flagship the site doesn't have yet.
  const n = await I.installNewFlagships(() => {});
  assert.equal(n, FLAGSHIPS.length);
  assert.equal(await I.installNewFlagships(() => {}), 0, 'idempotent');

  const pyId = (await db.get("SELECT value FROM settings WHERE key='library:python--6-8--beginner@2'")).value;
  const files = await db.all('SELECT source AS filename, audience FROM resources WHERE course_id=? AND source LIKE ?', pyId, '%.py');
  assert.ok(files.some((f: any) => /starter\.py$/.test(f.filename) && f.audience === 'student'));
  assert.ok(files.some((f: any) => /solution\.py$/.test(f.filename) && f.audience === 'teacher'), 'solutions are teacher-only');
  const aiId = (await db.get("SELECT value FROM settings WHERE key='library:ai-at-work--adult--beginner@2'")).value;
  assert.ok(Number((await db.get("SELECT COUNT(*) n FROM activities a JOIN lessons l ON l.id=a.lesson_id WHERE l.course_id=? AND a.type='ai_lab'", aiId)).n) >= 8);
  assert.ok((await db.get("SELECT 1 FROM resources WHERE course_id=? AND source LIKE '%monthly_sales.csv'", aiId)), 'sample data file');

  LD.clearCatalogCache();
  const cat: any = await LD.publicCatalog();
  const coding = cat.tracks.find((t: any) => t.id === 'coding');
  assert.equal(coding.levels.length, 12);
  for (const id of ['genai', 'ai-at-work', 'english', 'money']) assert.ok(cat.tracks.find((t: any) => t.id === id)?.levels.every((l: any) => l.live), `${id} track is live`);
  assert.ok(coding.levels.every((l: any) => l.live && l.lessons >= 8));
  assert.ok(cat.tracks.find((t: any) => t.id === 'ai-at-work').levels[0].builds.length > 0);
  const titles = cat.courses.map((c: any) => c.t);
  assert.ok(!titles.some((t: string) => t.includes(oldAi.title)), 'older short AI course hidden from the website');
  assert.ok(titles.some((t: string) => t.includes(science.title)), 'other subjects stay');
  assert.ok(titles.some((t: string) => t.includes('Python Game Coders')));
  assert.equal((await db.get('SELECT status FROM courses WHERE id=?', oldId)).status, 'published', 'hidden, not deleted');
});

test('narration alignment: each caption change lands in a pause between sentences, in order', async () => {
  const { align } = await import('../../scripts/narration.ts');
  const lines = [{ text: 'Hello there, coders. Today we build a game.' }, { text: 'First, open the editor.' }, { text: 'Then add a sprite and make it move.' }];
  // 10 s of speech: short pauses inside sentences, long pauses between captions at ~4.6 s and ~6.9 s
  const sil = [{ start: 0, end: 0.3 }, { start: 2.1, end: 2.35 }, { start: 4.4, end: 4.9 }, { start: 5.6, end: 5.75 }, { start: 6.7, end: 7.2 }, { start: 9.8, end: 10 }];
  const t = align(lines, 10, sil);
  assert.equal(t.length, 3);
  assert.equal(t[0].start, 0.3);
  assert.ok(t[1].start > 4.4 && t[1].start < 4.9, `second caption at ${t[1].start}`);
  assert.ok(t[2].start > 6.7 && t[2].start < 7.2, `third caption at ${t[2].start}`);
  assert.equal(t[2].end, 9.8);
});

// Lesson videos live in file storage, not git: this check runs only where they are present.
const HAS_VIDEOS = fs.existsSync('library-media/python-6-8-beginner/l01.mp4');
test('voiced videos: installed lessons are voiced, and an old silent video is swapped on start-up', { timeout: 300_000, skip: !HAS_VIDEOS && 'lesson videos are not in this copy' }, async () => {
  const { refreshFlagshipVideos } = await import('../../src/lib/library/flagship/install.ts');
  const c = course('python--6-8--beginner@2');
  const cid = (await db.get("SELECT value FROM settings WHERE key='library:python--6-8--beginner@2'")).value;
  const first = await db.get('SELECT l.id, l.learn FROM lessons l JOIN modules m ON m.id=l.module_id WHERE l.course_id=? ORDER BY m.position, l.position LIMIT 1', cid);
  const learn = typeof first.learn === 'string' ? JSON.parse(first.learn) : first.learn;
  assert.equal(learn.video.voiced, true, 'installs with the recorded voice');
  assert.equal(await refreshFlagshipVideos([c], () => {}), 0, 'nothing to do when up to date');
  // Pretend this site installed the lesson before voice-over existed.
  await db.run('UPDATE assets SET size_bytes=1 WHERE id=?', learn.video.assetId);
  await db.run('UPDATE lessons SET learn=? WHERE id=?', { ...learn, video: { ...learn.video, voiced: undefined } }, first.id);
  assert.equal(await refreshFlagshipVideos([c], () => {}), 1);
  const after = await db.get('SELECT learn FROM lessons WHERE id=?', first.id);
  const v = (typeof after.learn === 'string' ? JSON.parse(after.learn) : after.learn).video;
  assert.equal(v.voiced, true);
  assert.equal(v.assetId, learn.video.assetId, 'same asset, new file');
  assert.match((await db.get('SELECT captions FROM assets WHERE id=?', v.assetId)).captions, /^WEBVTT/);
});
