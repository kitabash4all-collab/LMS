// Recorded narration for flagship lesson videos.
//   npx tsx scripts/narration.ts export            → narration/<slug>/lNN.txt (the text to synthesise, one caption per paragraph)
//   npx tsx scripts/narration.ts align <wav...>    → library-media/<slug>/lNN.voice.m4a + lNN.timing.json
// A voice file is named <slug>__lNN.wav. Alignment: each caption's share of the characters gives
// its rough start; each boundary then snaps to the nearest pause in the audio (ffmpeg silencedetect).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { lessonsOf, lessonNumber } from '../src/lib/library/flagship/expand.ts';
import { mediaDir, mediaSlug } from '../src/lib/library/flagship/install.ts';
import type { FlagshipCourse, FlagshipLesson } from '../src/lib/library/flagship/types.ts';

// FLAGSHIP_DIR=<folder> loads just that course (e.g. while other courses are being edited).
const FLAGSHIPS: FlagshipCourse[] = process.env.FLAGSHIP_DIR
  ? (Object.values(await import(`../src/lib/library/flagship/${process.env.FLAGSHIP_DIR}/index.ts`)) as FlagshipCourse[])
  : (await import('../src/lib/library/flagship/all.ts')).FLAGSHIPS;

/** What the narrator says: captions may show emoji, but the voice should hear words. */
const SPOKEN: [RegExp, string][] = [
  [/🔁\s*repeat/gi, 'repeat'], [/🔁/g, 'the repeat block'], [/🏁/g, 'green flag'], [/⭐/g, 'star'], [/➡️|→/g, 'then'],
];
/** Hand-written spoken versions for lines where symbols carry meaning. */
const SPOKEN_LINES: Record<string, string> = {
  'Storyboard: 🐰💬“Hungry!” → ➡️➡️➡️ → 🥕 pick up → 🔼 grow.': 'Storyboard: the rabbit says “Hungry!”, walks right three times, picks up the carrot, then grows.',
  'Final runner (👆 start on tap = gets the message): run right 4, say “We win!”, hop 2 times.': 'Final runner, which starts when it gets the message: run right 4, say “We win!”, hop 2 times.',
  'Shift every letter a fixed number of places along the alphabet: with a shift of 3, a → d, b → e, h → k.': 'Shift every letter a fixed number of places along the alphabet: with a shift of 3, a becomes d, b becomes e, and h becomes k.',
  'set → =, repeat (n) → for i in range(n), if-else → if/else, forever → while True, My Block → def, list → [ ].': 'set becomes an equals sign, repeat n becomes for i in range n, if-else becomes if and else, forever becomes while True, My Block becomes def, and a list becomes square brackets.',
};
export function speakable(text: string) {
  if (SPOKEN_LINES[text]) return SPOKEN_LINES[text];
  let t = text;
  for (const [re, w] of SPOKEN) t = t.replace(re, w);
  return t.replace(/\p{Extended_Pictographic}\uFE0F?/gu, '').replace(/ {2,}/g, ' ').replace(/ ([,!?])(?=\s|$)/g, '$1').trim();
}

export const linesOf = (l: FlagshipLesson) => l.video.scenes.flatMap((s, si) => s.say.map((text) => ({ scene: si, text })));

function silences(file: string): { start: number; end: number }[] {
  const out = String(spawnSync('ffmpeg', ['-hide_banner', '-i', file, '-af', 'silencedetect=noise=-40dB:d=0.15', '-f', 'null', '-'], { encoding: 'utf8' }).stderr || '');
  const res: { start: number; end: number }[] = [];
  let s = 0;
  for (const line of out.split('\n')) {
    const a = /silence_start: ([\d.]+)/.exec(line);
    const b = /silence_end: ([\d.]+)/.exec(line);
    if (a) s = Number(a[1]);
    if (b) res.push({ start: s, end: Number(b[1]) });
  }
  return res;
}
const durationOf = (f: string) => Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim());

export function align(lines: { text: string }[], dur: number, sil: { start: number; end: number }[]) {
  const lead = sil.length && sil[0].start < 0.05 ? sil[0].end : 0;
  const tail = sil.length && Math.abs(sil[sil.length - 1].end - dur) < 0.1 ? sil[sil.length - 1].start : dur;
  const weight = (t: string) => t.length + 12;
  const total = lines.reduce((n, l) => n + weight(l.text), 0);
  const guesses: number[] = [];
  let acc = 0;
  for (let i = 0; i < lines.length - 1; i++) guesses.push(lead + ((tail - lead) * (acc += weight(lines[i].text))) / total);
  // Ordered best fit: give each caption boundary one pause (in order), preferring long pauses near the guess.
  const cand = sil.filter((x) => x.start > lead + 0.3 && x.end < tail - 0.3).map((x) => ({ mid: (x.start + x.end) / 2, d: x.end - x.start }));
  const N = guesses.length, M = cand.length;
  const cost = (i: number, j: number) => Math.abs(cand[j].mid - guesses[i]) - 4 * Math.min(cand[j].d, 1.2);
  const INF = 1e9;
  const dp = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(INF));
  const pick = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(false));
  for (let j = 0; j <= M; j++) dp[0][j] = 0;
  for (let i = 1; i <= N; i++)
    for (let j = 1; j <= M; j++) {
      const skip = dp[i][j - 1];
      const take = dp[i - 1][j - 1] + cost(i - 1, j - 1);
      if (take < skip) (dp[i][j] = take), (pick[i][j] = true);
      else dp[i][j] = skip;
    }
  let bounds: number[];
  if (M >= N) {
    bounds = new Array(N);
    for (let i = N, j = M; i > 0; j--) if (pick[i][j]) bounds[--i] = cand[j - 1].mid;
  } else bounds = guesses;
  const starts = [lead, ...bounds];
  return lines.map((l, i) => ({ start: +starts[i].toFixed(2), end: +(i + 1 < starts.length ? starts[i + 1] : tail).toFixed(2), text: l.text }));
}

if (/narration\.ts$/.test(process.argv[1] || '')) {
  const cmd = process.argv[2];
  if (cmd === 'export') {
    for (const c of FLAGSHIPS)
      for (const l of lessonsOf(c)) {
        const dir = path.resolve('narration', mediaSlug(c));
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, `l${String(lessonNumber(c, l)).padStart(2, '0')}.txt`), linesOf(l).map((x) => speakable(x.text)).join('\n\n'));
      }
    console.log('exported');
  } else if (cmd === 'align') {
    for (const wav of process.argv.slice(3)) {
      const m = /([^/]+)__(l\d\d)\.wav$/.exec(wav);
      if (!m) throw new Error('name files <slug>__lNN.wav');
      const c = FLAGSHIPS.find((f) => mediaSlug(f) === m[1])!;
      const l = lessonsOf(c)[Number(m[2].slice(1)) - 1];
      const lines = linesOf(l);
      const dur = durationOf(wav);
      const timing = align(lines, dur, silences(wav));
      const dir = mediaDir(c);
      execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', wav, '-ac', '1', '-c:a', 'aac', '-b:a', '64k', path.join(dir, `${m[2]}.voice.m4a`)]);
      fs.writeFileSync(path.join(dir, `${m[2]}.timing.json`), JSON.stringify({ duration: +dur.toFixed(2), lines: timing.map((t, i) => ({ ...t, scene: lines[i].scene })) }, null, 1));
      console.log(`✓ ${m[1]} ${m[2]}: ${dur.toFixed(1)}s, ${lines.length} captions`);
    }
  }
}
