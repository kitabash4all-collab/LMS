// Export every track course as its own self-contained package, for moving to another LMS.
// Usage: npx tsx scripts/export-courses.ts <out-dir>
// Each package: <slug>/ with course.json (full content, activities with answer keys), README.md,
// course-guide.pdf, and lessons/lNN/ { video.mp4, captions.vtt, student/…, teacher/… }.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { FLAGSHIPS } from '../src/lib/library/flagship/all.ts';
import { TRACKS } from '../src/lib/library/tracks.ts';
import { expandFlagLesson, flagshipGuideMarkdown, lessonsOf } from '../src/lib/library/flagship/expand.ts';
import { mediaDir, mediaSlug } from '../src/lib/library/flagship/install.ts';

const out = path.resolve(process.argv[2] || 'course-export');
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
const copy = (from: string, to: string) => { if (fs.existsSync(from)) { fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); return true; } return false; };
const write = (to: string, s: string) => { fs.mkdirSync(path.dirname(to), { recursive: true }); fs.writeFileSync(to, s); };

const trackOf = (key: string) => { for (const t of TRACKS) { const lv = t.levels.find((l) => l.key === key); if (lv) return { track: t.name, stage: lv.stage }; } return null; };
fs.mkdirSync(out, { recursive: true });

for (const c of FLAGSHIPS) {
  const slug = mediaSlug(c);
  const dir = path.join(out, slug);
  fs.rmSync(dir, { recursive: true, force: true });
  const src = mediaDir(c);
  const tr = trackOf(c.key);
  const lessons = lessonsOf(c);
  const manifest: any = {
    format: 'kitabash-course/1',
    key: c.key, title: c.title, subject: c.subject, band: c.band, level: c.level, ages: c.ages,
    track: tr, description: c.description, outcomes: c.outcomes,
    modules: c.modules.map((m) => ({ title: m.title, lessons: m.lessons.map((l) => lessons.indexOf(l) + 1) })),
    lessons: [] as any[],
    source: c, // the original course data, including teacher notes, scenes and projects
  };
  copy(path.join(src, 'course-guide.pdf'), path.join(dir, 'course-guide.pdf'));
  const readme = [`# ${c.title}`, '', tr ? `**${tr.track} · ${tr.stage}** · ages ${c.ages[0]}–${c.ages[1]} · ${lessons.length} lessons` : '', '', c.description, '', '## Lessons', ''];
  lessons.forEach((l, i) => {
    const n = i + 1, nn = String(n).padStart(2, '0');
    const ld = path.join(dir, 'lessons', `l${nn}`);
    const files: Record<string, string[]> = { student: [], teacher: [] };
    const hasVideo = copy(path.join(src, `l${nn}.mp4`), path.join(ld, 'video.mp4'));
    copy(path.join(src, `l${nn}.vtt`), path.join(ld, 'captions.vtt'));
    if (copy(path.join(src, `l${nn}-worksheet.pdf`), path.join(ld, 'student', 'worksheet.pdf'))) files.student.push('worksheet.pdf');
    if (copy(path.join(src, `l${nn}-project.pdf`), path.join(ld, 'student', 'project-brief.pdf'))) files.student.push('project-brief.pdf');
    if (copy(path.join(src, `l${nn}-plan.pdf`), path.join(ld, 'teacher', 'lesson-plan.pdf'))) files.teacher.push('lesson-plan.pdf');
    const extra = [
      ...(l.files || []),
      ...l.acts.flatMap((a) => ('py' in a && a.mode === 'project' ? [{ name: `${slugify(a.title)}-starter.py`, content: a.starter, audience: 'student' }, { name: `${slugify(a.title)}-solution.py`, content: a.solution, audience: 'teacher' }] : [])),
      ...l.acts.flatMap((a) => ('web' in a && a.mode === 'project' ? [{ name: `${slugify(a.title)}-starter.html`, content: a.starter, audience: 'student' }, { name: `${slugify(a.title)}-solution.html`, content: a.solution, audience: 'teacher' }] : [])),
    ];
    for (const f of extra) { write(path.join(ld, f.audience, f.name), f.content); files[f.audience].push(f.name); }
    const L = expandFlagLesson(c, l);
    manifest.lessons.push({ number: n, title: l.title, minutes: l.minutes, objective: l.objective, video: hasVideo ? `lessons/l${nn}/video.mp4` : null, captions: hasVideo ? `lessons/l${nn}/captions.vtt` : null, files, lesson: L });
    readme.push(`${n}. **${l.title}** (${l.minutes} min): ${l.objective}`);
  });
  readme.push('', '## What is in this folder', '', '- `course.json`: everything in machine-readable form: lessons, learn cards, video scripts, activities with answer keys, teacher notes, plans, projects and rubrics.', '- `course-guide.pdf`: the teacher guide for the whole course.', '- `lessons/lNN/`: `video.mp4` and `captions.vtt`, `student/` (worksheet, project brief, starter files), `teacher/` (lesson plan with answers, model solutions, demo scripts).', '- `guide.md`: the course guide as text.', '', 'Teacher files contain answers and model solutions: keep them away from students.');
  write(path.join(dir, 'README.md'), readme.filter((x, i, a) => !(x === '' && a[i - 1] === '')).join('\n') + '\n');
  write(path.join(dir, 'guide.md'), flagshipGuideMarkdown(c));
  write(path.join(dir, 'course.json'), JSON.stringify(manifest, null, 1));
  const zip = path.join(out, `${slug}.zip`);
  fs.rmSync(zip, { force: true });
  execFileSync('zip', ['-q', '-r', zip, slug], { cwd: out });
  console.log(`✓ ${slug}.zip (${(fs.statSync(zip).size / 1e6).toFixed(0)} MB, ${lessons.length} lessons)`);
}
