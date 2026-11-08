// Turns a flagship course into the structures the app stores (lessons, activities, teacher panel).
import type { LearnCard, TeacherContent } from '../../lessonTypes.ts';
import { expandActivity, expandHook } from '../expand.ts';
import type { LessonSpec } from '../types.ts';
import { validateActivity } from '../../activities/registry.ts';
import { programToBlocks } from '../../scratch/puzzle.ts';
import type { FAct, FlagshipCourse, FlagshipLesson } from './types.ts';

const OPT = 'abcdefgh';
export const SHORT_BAND: Record<string, string> = { 'K-2': 'K–2', '3-5': 'Gr 3–5', '6-8': 'Gr 6–8', '9-12': 'Gr 9–12', Adult: 'Professional' };
export const flagshipTitle = (c: FlagshipCourse) => `${c.subject} (${SHORT_BAND[c.band]}) ${c.level}: ${c.title}`;
export const lessonsOf = (c: FlagshipCourse) => c.modules.flatMap((m) => m.lessons);
export const lessonNumber = (c: FlagshipCourse, l: FlagshipLesson) => lessonsOf(c).indexOf(l) + 1;

const phaseOf = (a: FAct): 'perform' | 'probe' => ((a as any).phase as any) || ('write' in a || 'projectAct' in a ? 'probe' : 'perform');

export function expandFlagAct(a: FAct, i: number, l: FlagshipLesson) {
  const phase = phaseOf(a);
  if ('puzzle' in a)
    return {
      phase,
      type: 'block_code',
      title: a.puzzle,
      instructions: a.world.jr ? 'Tap the picture blocks to build your script. Press Run to watch, then press Check.' : 'Tap or drag blocks into the script, press Run to watch Pip, then press Check.',
      config: { world: a.world, palette: a.palette, conds: a.conds, hats: a.hats, start: a.start, goalText: a.goalText, lock: a.lock },
      answer_key: { ...a.goals, solution: a.solution, explanation: a.explain },
      hints: a.hints,
      points: a.points ?? 15,
    };
  if ('lab' in a)
    return {
      phase,
      type: 'code_lab',
      title: a.title,
      instructions: a.mode === 'project' ? 'Build your project in the Code Lab, test it with the green flag, write your reflection, then submit.' : 'Build the code in the Code Lab, test it with the green flag, then press Check.',
      config: {
        mode: a.mode || 'challenge',
        project: a.start,
        palette: a.palette,
        hats: a.hats,
        allowSprites: a.allowSprites,
        challenge: a.lab,
        goals: a.goals.map((g) => g[0]),
        ...(a.mode === 'project' ? { reflection: a.reflection, requirements: a.requirements, minWords: a.minWords ?? 15 } : {}),
      },
      answer_key: { checks: a.goals.map((g) => g[1]), test: a.test, solution: a.solution, explanation: a.explain },
      hints: a.hints,
      points: a.points ?? (a.mode === 'project' ? 40 : 20),
    };
  if ('py' in a)
    return {
      phase,
      type: 'python_lab',
      title: a.title,
      instructions: a.mode === 'project' ? 'Write your program in the Python Lab, run it to test, write your reflection, then submit.' : 'Write the code in the Python Lab, press Run to test it, then press Check.',
      config: {
        mode: a.mode || 'challenge',
        starter: a.starter,
        task: a.py,
        goals: a.goals.map((g) => g[0]),
        sampleInputs: a.inputs || [],
        ...(a.mode === 'project' ? { reflection: a.reflection, requirements: a.requirements, minWords: a.minWords ?? 15 } : {}),
      },
      answer_key: { checks: a.goals.map((g) => g[1]), inputs: a.inputs || [], solution: a.solution, explanation: a.explain },
      hints: a.hints,
      points: a.points ?? (a.mode === 'project' ? 40 : 20),
    };
  if ('web' in a)
    return {
      phase,
      type: 'web_lab',
      title: a.title,
      instructions: a.mode === 'project' ? 'Build your page in the Web Lab, check the live preview, write your reflection, then submit.' : 'Write the code in the Web Lab, watch the live preview, then press Check.',
      config: { mode: a.mode || 'challenge', starter: a.starter, task: a.web, goals: a.goals.map((g) => g[0]), ...(a.mode === 'project' ? { reflection: a.reflection, requirements: a.requirements, minWords: a.minWords ?? 15 } : {}) },
      answer_key: { checks: a.goals.map((g) => g[1]), solution: a.solution, explanation: a.explain },
      hints: a.hints,
      points: a.points ?? (a.mode === 'project' ? 40 : 20),
    };
  if ('budget' in a)
    return {
      phase,
      type: 'budget_sim',
      title: a.title,
      instructions: 'Tap items to put them in your basket. Watch your balance, then press Check.',
      config: { budget: a.budget, currency: a.currency ?? '₹', scenario: a.prompt, items: a.items.map(([name, cost], j) => ({ id: `i${j}`, name, cost })) },
      answer_key: { required: a.required.map((j) => `i${j}`), minSavings: a.minSavings || 0, explanation: a.why },
      hints: ['Buy the things you really need first, then see what is left.'],
      points: 15,
    };
  if ('ai' in a)
    return {
      phase,
      type: 'ai_lab',
      title: a.title,
      instructions: 'Write your prompt, press Check for instant feedback, improve it, then copy it into a real AI tool and look at what you get.',
      config: { task: a.ai, starter: a.starter || '', checks: a.checks.map((c) => c[0]), tools: a.tools, minWords: a.minWords ?? 12 },
      answer_key: { checks: a.checks.map((c) => c[1]), exemplar: a.exemplar },
      hints: ['Look at the checklist: which part is missing from your prompt?'],
      points: a.points ?? 15,
    };
  if ('bmcq' in a) {
    const options = a.options.map((o, j) => (typeof o === 'string' ? { id: OPT[j], text: o } : { id: OPT[j], text: o.text, blocks: o.blocks }));
    const feedbackByOption = a.wrong ? Object.fromEntries(Object.entries(a.wrong).map(([k, v]) => [OPT[Number(k)], v])) : undefined;
    return {
      phase,
      type: 'multiple_choice',
      title: a.title || (phase === 'probe' ? 'New situation' : 'Quick check'),
      instructions: a.blocks ? 'Read the blocks carefully, then choose the best answer.' : 'Choose the best answer.',
      config: { question: a.bmcq, ...(a.blocks ? { blocks: a.blocks } : {}), options },
      answer_key: { correct: [OPT[a.answer]], explanation: a.why, ...(feedbackByOption ? { feedbackByOption } : {}) },
      hints: [a.hint || 'Read the blocks from top to bottom, one at a time, and imagine what the sprite does.'],
      points: 10,
    };
  }
  if ('border' in a) {
    const items = a.steps.map((s, j) => ({ id: `s${j}`, text: s.text, blocks: s.blocks }));
    return {
      phase,
      type: 'ordering',
      title: a.title || 'Put the blocks in order',
      instructions: 'Put the blocks in the right order. Use the arrow buttons or drag.',
      config: { prompt: a.border, items: [...items].reverse() },
      answer_key: { order: items.map((x) => x.id), explanation: a.why },
      hints: [a.hint || 'Which block has to come first? Hat blocks always go on top.'],
      points: 8,
    };
  }
  if ('projectAct' in a)
    return {
      phase,
      type: 'project',
      title: a.title,
      instructions: 'Build your project, tick the checklist, add your link (or show your teacher) and write a reflection.',
      config: { brief: a.brief, requirements: a.requirements, reflection: a.reflection, tips: a.tips, minWords: a.minWords ?? 15 },
      answer_key: {},
      hints: ['Look at the checklist: which item is not done yet?'],
      points: 30,
    };
  return expandActivity(a, i, { t: l.title } as LessonSpec);
}

const DEFAULT_RUBRIC = [
  { criterion: 'Understanding', levels: ['Not yet: needs the key idea retaught', 'Developing: uses the idea with help', 'Secure: uses it correctly in the challenges', 'Extending: explains it and uses it in a new way'] },
  { criterion: 'Debugging & reasoning', levels: ['Gives up when stuck', 'Fixes bugs with help', 'Finds and fixes bugs by testing', 'Explains why the bug happened and how the fix works'] },
];

/** The outside tool a follow-along can also be done in (only where one fits). */
const BUILD_TOOL = (c: FlagshipCourse): { name: string; url: string } | null =>
  c.subject === 'Scratch' ? { name: 'Scratch (optional)', url: 'https://scratch.mit.edu/projects/editor/' } : c.subject === 'Scratch Junior' ? { name: 'ScratchJr app (optional)', url: 'https://www.scratchjr.org/' } : null;

export function expandFlagLesson(c: FlagshipCourse, l: FlagshipLesson) {
  const hook = expandHook(l.hook, l.objective);
  const t = l.teacher;
  const timing = t.plan.map((p) => `${p.stage} ${p.minutes} min`).join(' · ');
  const teacher: TeacherContent = {
    teach: { explanation: t.explain, analogies: [t.analogy], vocabulary: t.vocab.map(([term, definition]) => ({ term, definition })) },
    show: {
      items: [
        { title: 'Lesson video', kind: 'demo', description: `“${l.video.title}” — play it at the start of the Learn phase with captions on. Pause at each heading and ask a question.` },
        { title: 'Unplugged warm-up', kind: 'demo', description: t.unplugged },
        { title: 'Live demonstration', kind: 'demo', description: t.demo },
        { title: '3-second hook', kind: 'hook', description: `${hook.caption}. Ask: “What do you notice?”` },
      ],
    },
    facilitate: {
      prompts: t.prompts.map(([prompt, expected]) => ({ prompt, expected })),
      discussion: [`Big question: ${c.modules.find((m) => m.lessons.includes(l))?.bigQuestion || ''}`],
      differentiation: { support: t.support, stretch: t.stretch },
      timing,
    },
    resources: {
      items: [
        { title: 'Success criteria', kind: 'note', body: t.successCriteria.map((s) => `• ${s}`).join('\n') },
        { title: 'Exit ticket', kind: 'template', body: t.exit },
        { title: 'Homework', kind: 'note', body: t.homework },
      ],
    },
    assess: {
      questions: t.prompts.slice(0, 2).map(([q]) => q),
      rubric: l.project ? l.project.rubric.map((r) => ({ criterion: r.criterion, levels: [...r.levels] })) : DEFAULT_RUBRIC,
      misconceptions: t.mis.map(([misconception, fix]) => ({ misconception, fix })),
    },
    extension: [t.stretch, ...(l.project?.extensions || [])],
    plan: t.plan,
  };
  return {
    title: l.title,
    objective: l.objective,
    duration: l.minutes,
    hook,
    cards: l.cards.map((x) => ({ emoji: x.emoji, title: x.title, body: x.body, ...(x.blocks ? { blocks: x.blocks } : {}) })) as LearnCard[],
    build: l.build ? { ...l.build, ...(BUILD_TOOL(c) ? { tool: BUILD_TOOL(c) } : {}) } : undefined,
    activities: l.acts.map((a, i) => expandFlagAct(a, i, l)),
    teacher,
    rubric: teacher.assess!.rubric!,
  };
}

/** Structural checks + every activity validated (puzzle and Code Lab solutions must pass their own checks). */
export function lintFlagship(c: FlagshipCourse): string[] {
  const issues: string[] = [];
  for (const l of lessonsOf(c)) {
    const w = `${c.title} / ${l.title}`;
    if (l.cards.length < 2) issues.push(`${w}: needs at least 2 Learn cards`);
    if (!l.video.scenes.length) issues.push(`${w}: video has no scenes`);
    const phases = l.acts.map(phaseOf);
    if (!phases.includes('perform')) issues.push(`${w}: needs a Perform activity`);
    if (!phases.includes('probe')) issues.push(`${w}: needs a Probe activity`);
    if (!l.acts.some((a) => 'lab' in a || 'puzzle' in a || 'py' in a || 'ai' in a || 'web' in a || 'speak' in a || 'budget' in a || 'projectAct' in a)) issues.push(`${w}: needs a hands-on activity (coding, Web Lab, Prompt Lab, speaking, budget or project)`);
    for (const a of l.acts) if ('budget' in a && a.required.some((j) => j < 0 || j >= a.items.length)) issues.push(`${w}: budget "${a.title}" requires an item that doesn't exist`);
    for (const a of l.acts) if ('ai' in a && (!a.checks.length || a.checks.some((c) => !c[1].length))) issues.push(`${w}: Prompt Lab "${a.title}" needs checks with phrases`);
    if (l.teacher.plan.reduce((n, p) => n + p.minutes, 0) !== l.minutes) issues.push(`${w}: lesson plan adds up to ${l.teacher.plan.reduce((n, p) => n + p.minutes, 0)} min, not ${l.minutes}`);
    if (!l.teacher.vocab.length || !l.teacher.mis.length) issues.push(`${w}: vocabulary and misconceptions are required`);
    if (l.worksheet.tasks.length < 3) issues.push(`${w}: worksheet needs 3+ tasks`);
    for (const [i, a] of l.acts.entries()) {
      try {
        const x = expandFlagAct(a, i, l);
        validateActivity(x.type, x.config, x.answer_key);
        if ('bmcq' in a && (a.answer < 0 || a.answer >= a.options.length)) issues.push(`${w}: answer index out of range`);
        if ('sort' in a && a.buckets.some((_, b) => !a.items.some(([, x2]) => x2 === b))) issues.push(`${w}: a sort bucket is empty`);
        if ('match' in a && new Set(a.pairs.map((p) => p[1])).size !== a.pairs.length) issues.push(`${w}: duplicate match targets`);
        if ('blanks' in a && [...a.blanks.matchAll(/\[\[(\w+)\]\]/g)].length !== a.answers.length) issues.push(`${w}: blanks/answers mismatch`);
      } catch (e) {
        issues.push(`${w} / activity ${i + 1}: ${(e as Error).message}`);
      }
    }
  }
  return issues;
}

/** Markdown knowledge for the course tutor (so it answers from the course itself). */
export function flagshipGuideMarkdown(c: FlagshipCourse): string {
  const out = [`# ${flagshipTitle(c)} — Course guide (Kitabash original)`, '', c.description, ''];
  for (const m of c.modules) {
    out.push(`# ${m.title}`, '', m.summary, '');
    for (const l of m.lessons) {
      out.push(`## Lesson ${lessonNumber(c, l)}: ${l.title}`, '', `Goal: ${l.objective}`, '');
      for (const x of l.cards) out.push(`### ${x.title}`, x.body, ...(x.blocks ? ['```', x.blocks, '```'] : []), '');
      if (l.build) {
        out.push(`### Build along: ${l.build.title}`);
        l.build.steps.forEach((s, i) => out.push(`${i + 1}. ${s.title}: ${s.text}`, ...(s.blocks ? ['```', s.blocks, '```'] : [])));
        out.push('');
      }
      out.push('### Key words', ...l.teacher.vocab.map(([t2, d]) => `- **${t2}**: ${d}`), '');
      out.push('### Common mistakes', ...l.teacher.mis.map(([m2, f]) => `- Mistake: ${m2}. Better: ${f}`), '');
    }
  }
  return out.join('\n');
}

/** Captions (WebVTT) for a lesson video: one cue per narration line, timed by reading speed. */
export function sceneTimings(l: FlagshipLesson) {
  const lines: { scene: number; text: string; start: number; end: number }[] = [];
  let t = 0.6;
  l.video.scenes.forEach((s, si) => {
    for (const text of s.say) {
      const words = text.split(/\s+/).length;
      const d = Math.max(2.4, words / 2.3 + 0.8);
      lines.push({ scene: si, text, start: t, end: t + d });
      t += d;
    }
    t += 0.6; // pause between scenes
  });
  return { lines, duration: Math.ceil(t + 0.6) };
}
const ts = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = (s % 60).toFixed(3).padStart(6, '0');
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${sec}`;
};
/** Timing from a recorded narration (lNN.timing.json): captions follow the real voice, shifted by the video's lead-in. */
export type VoiceTiming = { duration: number; lines: { start: number; end: number; text: string; scene: number }[] };
export const VOICE_LEAD = 0.6;
export function voicedTimings(t: VoiceTiming) {
  const lines = t.lines.map((x) => ({ scene: x.scene, text: x.text, start: +(x.start + VOICE_LEAD).toFixed(2), end: +(x.end + VOICE_LEAD).toFixed(2) }));
  return { lines, duration: Math.ceil(t.duration + VOICE_LEAD + 1.2) };
}
export function captionsVtt(l: FlagshipLesson, voice?: VoiceTiming | null) {
  const { lines } = voice ? voicedTimings(voice) : sceneTimings(l);
  return 'WEBVTT\n\n' + lines.map((x, i) => `${i + 1}\n${ts(x.start)} --> ${ts(x.end)}\n${x.text}`).join('\n\n') + '\n';
}

export { programToBlocks };
