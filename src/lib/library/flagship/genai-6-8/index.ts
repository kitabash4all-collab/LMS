// Flagship course: Generative AI (Grades 6–11, Beginner) — Gen-AI Creators.
import type { FlagshipCourse } from '../types.ts';
import { A1, A2, A3, A4 } from './m1.ts';
import { A5, A6, A7, A8 } from './m2.ts';

export const GENAI_6_8_BEGINNER: FlagshipCourse = {
  key: 'generative-ai--6-8--beginner@2',
  subject: 'Generative AI',
  band: '6-8',
  level: 'Beginner',
  title: 'Gen-AI Creators',
  tagline: 'Talk to AI like a pro, check what it says, and create real things with it — safely and honestly.',
  description:
    'A hands-on first course in generative AI for ages 11–16. Learners find out how chatbots predict the next word, master a prompt formula (Role, Task, Context, Format, plus examples and tone), use AI as an honest study buddy, and learn to catch AI mistakes. Every class makes something real: an “AI or human?” family quiz, an exam-week study planner, a fact-checked practice quiz, an illustrated AI storybook, a club event poster, a Teachable Machine image model, a no-code chatbot instruction sheet, and an AI for Good campaign capstone. Each lesson has a video, a follow-along, Prompt Lab challenges with instant feedback, games, a worksheet, a student project kit and a teacher lesson plan.',
  intro: 'Become a Gen-AI Creator: write great prompts, catch AI mistakes, and make things you are proud to show.',
  theme: 'grape',
  ages: [11, 16],
  grade: 'Grades 6–11',
  tutor: [
    'Spark',
    'A friendly AI-literacy coach for ages 11–16 who helps learners improve their own prompts, check AI answers against trusted sources and use AI honestly — by asking questions and giving hints, never by doing their homework for them.',
  ],
  tools: [
    'Laptop, Chromebook or tablet with a modern browser',
    'The Kitabash Prompt Lab and Kitabash AI helper inside the lesson (learners under 13 use only this, with parent consent, and watch the teacher’s screen for other AI tools)',
    'Ages 13–17, with a parent’s permission: ChatGPT, Gemini, Microsoft Copilot or Perplexity (free plans)',
    'Canva: teacher-led on the shared screen, or the learner’s own school or family account',
    'Google Teachable Machine (teachablemachine.withgoogle.com) — no account needed',
    'A webcam (optional) for Lesson 6, plus the learner’s school textbook for fact-checking',
  ],
  outcomes: [
    'Explain in plain words how a chatbot predicts the next word, and what AI can and cannot do',
    'Write strong prompts using Role, Task, Context, Format, examples and tone, and improve them with follow-ups',
    'Use AI as a study buddy (explain, quiz me, Socratic mode) without cheating',
    'Spot hallucinations and fact-check AI answers against a textbook and trusted sources',
    'Keep personal information private and label AI-made work honestly',
    'Write image prompts (subject, style, lighting, colours, composition) and check images for bias',
    'Train, test and improve an image model in Teachable Machine, and explain why it fails',
    'Design and test a chatbot’s instructions: purpose, personality, rules and refusals',
    'Plan, create and present an AI for Good campaign with a responsible-AI checklist',
  ],
  prereq: ['Can read and type simple English sentences', 'No coding or AI experience needed'],
  style:
    'Make-first and playful: every class is a mix of games (autocomplete race, safe-or-unsafe sort, spot the hallucination, better prompt A or B), a Prompt Lab with instant checklist feedback, a follow-along in a real tool and a creation the learner keeps. Checking AI output is part of every single lesson.',
  notes:
    'Lessons are 60 minutes. How tools are used: learners under 13 never create AI accounts — they watch the teacher’s shared screen and use the Kitabash AI helper inside the lesson (with parent consent). Learners aged 13–17 may use ChatGPT, Gemini, Copilot or Perplexity with a parent’s permission. Everyone can use Canva (teacher-led, or the learner’s school or family account) and Teachable Machine (no account). Claude is for adults only (18+), so never ask learners to use it. Prompt Lab answers are checked instantly against a checklist; project lessons (4 and 8) arrive in your review queue with the rubric. Each lesson has a student project kit and a teacher demo script to download. Menus in AI tools change often — describe steps generally and demonstrate live.',
  safety:
    'Privacy rule, every lesson: never type real names, phone numbers, addresses, passwords, Aadhaar or PAN numbers, school details or private documents and photos into any AI tool. Age rules: learners under 13 use only the Kitabash AI helper in the lesson (with parent consent) and watch the teacher demonstrate other tools; learners 13–17 may use ChatGPT, Gemini, Copilot or Perplexity only with a parent’s permission; Claude is 18+ only and is never used by learners. Teachable Machine needs no account; Canva is teacher-led or through a school or family account. AI makes mistakes, so every answer is checked against a trusted source. Honest use: label AI-made work, no cheating on homework, no fake reviews, and no deepfakes or edited images of real people.',
  nextCourse: 'Gen-AI Creators · Level 2 (AI-assisted coding, building AI apps, AI video and music)',
  modules: [
    {
      title: 'Module 1 · Talk to AI like a pro',
      summary: 'How chatbots work, the prompt formula, AI as an honest study buddy, and catching hallucinations. Project: My AI Storybook.',
      bigQuestion: 'How do we get AI to help us — and know when it is wrong?',
      lessons: [A1, A2, A3, A4],
    },
    {
      title: 'Module 2 · Create and build with AI',
      summary: 'Image prompts and bias, teaching a machine with Teachable Machine, designing a chatbot’s instructions, and an AI for Good campaign capstone.',
      bigQuestion: 'How can we build and create with AI responsibly — for ourselves and our community?',
      lessons: [A5, A6, A7, A8],
    },
  ],
};
