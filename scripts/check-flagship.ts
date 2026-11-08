// Checks flagship courses before media is generated or they are installed:
//   npx tsx scripts/check-flagship.ts [courseKeyPrefix]
// • the lint rules (cards, Perform + Probe, hands-on activity, timed plan adds up, worksheet…)
// • every Python Lab model solution passes its own checks (and the starter does not)
// • every Prompt Lab example passes its own checklist
// • video length per lesson
import { FLAGSHIPS } from '../src/lib/library/flagship/all.ts';
import { lintFlagship, lessonsOf, lessonNumber, sceneTimings, expandFlagLesson } from '../src/lib/library/flagship/expand.ts';
import { runChecks } from '../src/lib/python/checks.ts';
import { runWebChecks } from '../src/lib/web/checks.ts';
import { gradeActivity } from '../src/lib/activities/registry.ts';

const prefix = process.argv[2] || '';
let bad = 0;
for (const c of FLAGSHIPS.filter((f) => f.key.startsWith(prefix))) {
  const issues = lintFlagship(c);
  for (const l of lessonsOf(c)) {
    const n = lessonNumber(c, l);
    const L = expandFlagLesson(c, l);
    for (const a of l.acts) {
      if ('py' in a) {
        const r = runChecks(a.solution, a.goals.map((g) => g[1]), a.inputs || []);
        if (!r.passed) issues.push(`L${n} "${a.title}": model solution fails: ${r.results.filter((o) => !o.ok).map((o) => o.msg + (o.detail ? ' [' + o.detail + ']' : '')).join(' | ')}`);
        if (a.mode !== 'project') {
          const s = runChecks(a.starter, a.goals.map((g) => g[1]), a.inputs || []);
          if (s.passed) issues.push(`L${n} "${a.title}": the starter code already passes every check`);
        }
      }
    }
    for (const a of l.acts) {
      if (!('web' in a)) continue;
      const r = runWebChecks(a.solution, a.goals.map((g) => g[1]));
      if (!r.passed) issues.push(`L${n} "${a.title}": model page fails: ${r.results.filter((o) => !o.ok).map((o) => o.msg + (o.detail ? ' [' + o.detail + ']' : '')).join(' | ')}`);
      if (a.mode !== 'project' && runWebChecks(a.starter, a.goals.map((g) => g[1])).passed) issues.push(`L${n} "${a.title}": the starter page already passes every check`);
    }
    for (const x of L.activities as any[]) {
      if (x.type !== 'ai_lab') continue;
      const g = gradeActivity('ai_lab', x.points, x.config, x.answer_key, { text: x.answer_key.exemplar });
      if (!g.correct) issues.push(`L${n} "${x.title}": the example prompt fails its own checklist: ${g.feedback}`);
      const s = gradeActivity('ai_lab', x.points, x.config, x.answer_key, { text: x.config.starter || '' });
      if (s.correct) issues.push(`L${n} "${x.title}": the starter already passes the checklist`);
    }
    const d = sceneTimings(l).duration;
    if (d < 45 || d > 420) issues.push(`L${n}: video is ${d}s (aim for 1–6 minutes)`);
  }
  const secs = lessonsOf(c).map((l) => sceneTimings(l).duration);
  console.log(`${issues.length ? '✗' : '✓'} ${c.key} — ${lessonsOf(c).length} lessons, videos ${secs.map((s) => Math.round(s / 6) / 10 + 'm').join(' ')}`);
  for (const i of issues) console.log('   - ' + i);
  bad += issues.length;
}
process.exit(bad ? 1 : 0);
