// Learning tracks: a few long paths made of levels (each level is one flagship course),
// like the big coding academies. The website shows these first; older short courses in the
// subjects a track now covers are hidden from the website (not deleted).
import { FLAGSHIPS } from './flagship/all.ts';
import { lessonsOf } from './flagship/expand.ts';
import type { FlagshipCourse } from './flagship/types.ts';

export interface Track {
  id: string;
  name: string;
  ages: string;
  summary: string;
  tools: string[];
  levels: { key: string; stage: string }[]; // in order
  next?: string; // what is being built next (shown as "coming")
}

export const TRACKS: Track[] = [
  {
    id: 'coding',
    name: 'Kitabash Coding',
    ages: '5–16',
    summary: 'From picture blocks to real Python. A playable game or app in every class, with project files to keep.',
    tools: ['ScratchJr', 'Scratch', 'Python'],
    levels: [
      { key: 'scratch-junior--K-2--beginner@2', stage: 'ScratchJr 1' },
      { key: 'scratch-junior--K-2--intermediate@2', stage: 'ScratchJr 2' },
      { key: 'scratch-junior--K-2--advanced@2', stage: 'ScratchJr 3' },
      { key: 'scratch--3-5--beginner@2', stage: 'Scratch 1' },
      { key: 'scratch--3-5--intermediate@2', stage: 'Scratch 2' },
      { key: 'scratch--3-5--advanced@2', stage: 'Scratch 3' },
      { key: 'scratch--6-8--beginner@2', stage: 'Scratch Pro 1' },
      { key: 'scratch--6-8--intermediate@2', stage: 'Scratch Pro 2' },
      { key: 'scratch--6-8--advanced@2', stage: 'Scratch Pro 3' },
      { key: 'python--6-8--beginner@2', stage: 'Python 1' },
      { key: 'python--6-8--intermediate@2', stage: 'Python 2' },
      { key: 'web-development--6-8--beginner@2', stage: 'Web 1' },
    ],
    next: 'Python 3, Web 2 and app building',
  },
  {
    id: 'genai',
    name: 'Gen-AI Creators',
    ages: '11–16',
    summary: 'Use real AI tools the right way: prompting, AI art, training a model, building a chatbot, and an AI-for-good campaign.',
    tools: ['ChatGPT', 'Gemini', 'Canva', 'Teachable Machine', 'Kitabash AI helper'],
    levels: [
      { key: 'generative-ai--6-8--beginner@2', stage: 'Level 1' },
      { key: 'generative-ai--6-8--intermediate@2', stage: 'Level 2' },
    ],
    next: 'Level 3: AI apps with code',
  },
  {
    id: 'ai-at-work',
    name: 'AI at Work',
    ages: 'Adults',
    summary: 'Plain-language, hands-on AI for everyday work: emails, documents, spreadsheets, slides, research and your own AI assistant.',
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'NotebookLM', 'Perplexity', 'Canva'],
    levels: [
      { key: 'ai-at-work--adult--beginner@2', stage: 'Level 1' },
      { key: 'ai-at-work--adult--intermediate@2', stage: 'Level 2' },
    ],
    next: 'Level 3: role specialisations',
  },
  {
    id: 'english',
    name: 'Confident English',
    ages: '8–11',
    summary: 'Speak up in clear, confident English: everyday conversations, describing, asking questions, telling stories and a first speech.',
    tools: ['Speaking practice', 'Role plays', 'Story maps'],
    levels: [{ key: 'spoken-english--3-5--beginner@2', stage: 'Level 1' }],
    next: 'Level 2: storytelling and presentations',
  },
  {
    id: 'money',
    name: 'Money Smart',
    ages: '8–11',
    summary: 'Real-life money skills: needs and wants, budgets, saving goals, smart shopping, UPI safety and a mini market stall.',
    tools: ['Budget simulations', 'Shop games', 'Savings planner'],
    levels: [{ key: 'financial-literacy--3-5--beginner@2', stage: 'Level 1' }],
    next: 'Level 2: banks, interest and a mini business',
  },
];

/** Subjects whose older short courses are replaced by a track (hidden from the public website). */
export const TRACK_SUBJECTS = new Set(['Scratch Junior', 'Scratch', 'Python', 'Artificial Intelligence', 'Generative AI', 'Prompt Engineering', 'AI at Work']);
export const isTrackSubject = (subject: string, category?: string) => TRACK_SUBJECTS.has(subject) || category === 'AI for Professionals';

const byKey = new Map<string, FlagshipCourse>(FLAGSHIPS.map((f) => [f.key, f]));

/** Static facts about each level, from the course itself. */
export function trackLevels(t: Track) {
  return t.levels.map((lv) => {
    const c = byKey.get(lv.key);
    const ls = c ? lessonsOf(c) : [];
    return {
      key: lv.key,
      stage: lv.stage,
      title: c?.title || '',
      ages: c ? `${c.ages[0]}–${c.ages[1]}` : '',
      lessons: ls.length,
      builds: ls.map((l) => (l.project?.title || l.build?.title || '').replace(/^(Project|Build along|Build-along|Capstone|Follow along)\s*[:·—-]\s*/i, '')).filter(Boolean).slice(0, 6),
    };
  });
}
