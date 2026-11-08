// Flagship course: Generative AI (Grades 7–11, Intermediate) — Gen-AI Creators · Level 2.
import type { FlagshipCourse } from '../types.ts';
import { B1, B2, B3, B4 } from './m1.ts';
import { B5, B6, B7, B8 } from './m2.ts';

export const GENAI_6_8_INTERMEDIATE: FlagshipCourse = {
  key: 'generative-ai--6-8--intermediate@2',
  subject: 'Generative AI',
  band: '6-8',
  level: 'Intermediate',
  title: 'Gen-AI Creators · Level 2',
  tagline: 'Code with an AI partner, check AI data, make responsible media and build tested AI apps.',
  description:
    'The second Gen-AI Creators course for ages 12–16. Learners who can already prompt well and catch AI mistakes now put AI to work as a coding coach and a building tool. In Module 1 they ask AI to explain code line by line, debug with clear bug reports, plan programs in pseudocode and build an AI-assisted mini game with an honest “what AI did” log. In Module 2 they summarise and chart a class survey (checking every number), plan a 30-second explainer video with consent and copyright rules, design and test a no-code AI app with attack test cases, and pitch an AI-powered solution for their school. Every lesson has a video, a follow-along, Prompt Lab challenges, games, a worksheet, a student project kit and a teacher demo script.',
  intro: 'Level up: you code, AI coaches — then build media and apps that are tested, honest and safe.',
  theme: 'grape',
  ages: [12, 16],
  grade: 'Grades 7–11',
  tutor: [
    'Spark',
    'A friendly AI coach for ages 12–16 who helps learners understand and debug their own code, check AI data and design safe AI apps — by asking questions and giving hints, never by writing their code or homework for them.',
  ],
  tools: [
    'Laptop or Chromebook with a modern browser',
    'The Kitabash Python Lab, Prompt Lab and Kitabash AI helper inside the lesson (learners under 13 use only the AI helper, with parent consent, and watch the teacher’s screen for other AI tools)',
    'Ages 13–17, with a parent’s permission: ChatGPT, Gemini, Microsoft Copilot or Perplexity (free plans)',
    'Scratch (scratch.mit.edu) — projects can be made without an account and saved to the device',
    'A spreadsheet (Google Sheets or Excel) through a school or family account, or the teacher’s shared screen',
    'Canva: teacher-led on the shared screen, or the learner’s school or family account',
  ],
  outcomes: [
    'Ask AI to explain code line by line, and run code to catch AI explanation mistakes',
    'Write clear bug reports (expected, actual, error, tried), test every AI fix and explain why bugs happen',
    'Turn an idea into pseudocode, get an AI plan review and build a quiz game yourself',
    'Build a mini game with AI as a coach and keep an honest “what AI did” log',
    'Run an anonymous survey, summarise it with AI, chart it in a spreadsheet and check every number',
    'Plan a 30-second explainer with a checked script and storyboard, following consent, no-deepfake and music copyright rules',
    'Design a no-code AI app with a spec, safety rules and a test log including attack tests',
    'Prototype, test, ethics-check and pitch an AI-powered solution for your school',
  ],
  prereq: ['Gen-AI Creators Level 1 (or equivalent: can write prompts with Role, Task, Context, Format and fact-check AI answers)', 'Basic typing; no coding experience required, though some Python or Scratch helps'],
  style:
    'Build-first and game-like: every class mixes a warm-up game, a live teacher demo with a caught AI mistake, a Prompt Lab or Python Lab with instant feedback, sort/order/quiz races, breakout build time and a show-and-tell. The rule all course long: you write the code and the words; AI explains, reviews and checks — and you check the AI.',
  notes:
    'Lessons are 60 minutes. Learners under 13 never create AI accounts: they watch the teacher’s shared screen and use the Kitabash AI helper inside the lesson (with parent consent). Learners aged 13–17 may use ChatGPT, Gemini, Copilot or Perplexity with a parent’s permission (Lesson 7: custom instructions or a Gemini Gem only where their account allows). Claude is for adults only (18+) — never ask learners to use it. Coding happens in the Kitabash Python Lab or Scratch. Spreadsheets and Canva are teacher-led or through a school or family account. Project lessons (4 and 8) arrive in your review queue with rubrics; reward honest “what AI did” logs and caught AI mistakes. Each lesson has a student project kit and a teacher demo script with what to do if the AI answers correctly or wrongly. Tool menus change often — describe steps generally and demonstrate live.',
  safety:
    'Privacy rule, every lesson: never type or paste real names, phone numbers, addresses, passwords, Aadhaar or PAN numbers, school details or private documents and photos into any AI tool — including inside code or survey data (use counts and codes, not names). Age rules: under 13 use only the Kitabash AI helper (with parent consent) and watch the teacher demonstrate other tools; 13–17 may use ChatGPT, Gemini, Copilot or Perplexity only with a parent’s permission; Claude is 18+ only and is never used by learners. AI makes mistakes in code, maths and facts, so every output is run, tested or checked. Honest use: learners write their own code, keep a log of AI help and label AI-assisted work. Media: consent before filming or recording anyone, no deepfakes or voice copies of real people, and only properly licensed music.',
  nextCourse: 'Gen-AI Creators · Level 3 (AI apps with code)',
  modules: [
    {
      title: 'Module 1 · Code with an AI partner',
      summary: 'AI as a coding buddy, debugging with bug reports, planning programs in pseudocode, and an AI-assisted mini game with an honest “what AI did” log.',
      bigQuestion: 'How can AI make me a better programmer without doing the programming for me?',
      lessons: [B1, B2, B3, B4],
    },
    {
      title: 'Module 2 · Make media and apps responsibly',
      summary: 'AI for data and charts, audio and video with consent and copyright, a tested no-code AI app, and a capstone AI solution for your school.',
      bigQuestion: 'How do we build AI-powered things that are useful, tested and fair?',
      lessons: [B5, B6, B7, B8],
    },
  ],
};
