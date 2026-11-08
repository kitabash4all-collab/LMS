// Flagship course: AI at Work, Made Simple (Adults, Beginner · Level 1).
// Plain-words, hands-on AI for everyday work in real, free tools: ChatGPT, Claude, Gemini,
// Microsoft Copilot, NotebookLM, Perplexity and Canva. Every lesson ends with a real work output.
import type { FlagshipCourse } from '../types.ts';
import { W1, W2, W3, W4 } from './m1.ts';
import { W5, W6, W7, W8 } from './m2.ts';

export const AI_AT_WORK_BEGINNER: FlagshipCourse = {
  key: 'ai-at-work--adult--beginner@2',
  subject: 'AI at Work',
  band: 'Adult',
  level: 'Beginner',
  title: 'AI at Work, Made Simple',
  tagline: 'No jargon, no coding: use ChatGPT, Claude, Gemini, Copilot, NotebookLM, Perplexity and Canva for real work, safely.',
  description:
    'A hands-on first course in AI for working adults: shop owners, teachers, office executives, sales reps, accountants’ assistants and anyone who writes, reads, calculates or presents at work. Every term is explained in everyday words with Indian workplace examples, and every lesson is done live in real, free AI tools, with the same task tried in two or three tools so you are never tied to one. Module 1 makes AI your everyday assistant: polite emails and WhatsApp replies, the 4-part prompt, summaries of long documents, meeting action items, and spreadsheets with formulas and checked totals. Module 2 is about creating, researching and automating: slide decks and posters, research with sources you check yourself, your own FAQ assistant, and a capstone where you turn one weekly task into a faster AI routine and measure the time saved. Each lesson has a short video, a follow-along, Prompt Lab practice with instant feedback, workplace games, a project kit and a teacher demo script.',
  intro: 'Learn AI in plain words, and leave every class with something useful for your work.',
  theme: 'sunrise',
  ages: [18, 65],
  grade: 'Adults (18+)',
  tutor: ['Sahayak', 'A patient, practical AI-at-work coach for adults who are new to AI. Explains every term in everyday words with Indian workplace examples, suggests which free tool to try, helps improve prompts by asking about role, task, context and format, and always reminds learners to keep private data out and to check facts, numbers and promises before using an AI answer.'],
  tools: [
    'A laptop or smartphone with a modern browser (a laptop is easier for lessons 3–5)',
    'Free accounts (learners are adults): ChatGPT, Claude (18+), Gemini, Microsoft Copilot, NotebookLM, Perplexity and Canva — at least two chatbots ready for every class',
    'Excel or Google Sheets (free with a Google account) for lesson 4',
    'PowerPoint or Google Slides, or Canva, for lesson 5',
    'The Kitabash Prompt Lab (built into each lesson) and the downloadable project kits and practice files',
  ],
  outcomes: [
    'Explain in plain words what an AI chatbot is, what it is good at, and why it can be wrong',
    'Use ChatGPT, Claude, Gemini and Copilot safely, without pasting passwords, ID numbers or client data',
    'Write clear prompts with Role, Task, Context and Format, and improve answers with follow-ups',
    'Draft emails, WhatsApp replies and notices in English and Hindi, and check their meaning',
    'Summarise long documents and ask questions of them in Claude, ChatGPT and NotebookLM, checking against the original',
    'Turn meeting notes into action items with owners and deadlines',
    'Clean a spreadsheet, get formulas like SUMIF, XLOOKUP and IF from plain words, and verify totals',
    'Build a 6-slide deck and a social post with AI, on-brand and honestly labelled',
    'Research with Perplexity, Gemini and ChatGPT search, open every source, and spot made-up or old information',
    'Set up and test a custom FAQ assistant (Claude Projects, ChatGPT GPTs/Projects or Gemini Gems)',
    'Redesign one weekly task as an AI routine with human checks, and measure the time saved',
    'Write a responsible-use checklist for your own workplace',
  ],
  prereq: ['None. If you can send an email or a WhatsApp message, you are ready.', 'Learners must be 18 or older (Claude requires 18+).'],
  style: 'Plain words first, then hands-on: a short video showing the real tool, a live teacher demo with a planned “caught mistake”, a follow-along, Prompt Lab practice with instant feedback, workplace games (safe to paste or not, spot the hallucination, better prompt A or B), and a real work output to keep every lesson.',
  notes: 'Lessons are 60 minutes, live, for adults. Teachers demonstrate on a shared screen using the exact prompts in each teacher demo script, and should check that morning which features their free accounts show, since menus and free-plan features change. Learners use their own free accounts; nobody is asked to pay for a tool, and prices are never quoted. Practice files (a fictional policy document and sales sheet) are safe to upload anywhere. Projects (lessons 4 and 8) arrive in the review queue with the rubric. Next: AI at Work · Level 2.',
  safety: 'Privacy rule in every lesson: never paste passwords, OTPs, Aadhaar, PAN, bank or card details, or anyone’s personal details into an AI tool, and never put confidential company or client data into a personal AI account; use placeholders like [Client name] and company-approved tools for confidential work. AI can make mistakes (hallucinations), so every lesson includes checking facts, numbers, dates and promises against the original. Honest use: label AI-made images and documents, no fake reviews, no fake endorsements, and no deepfakes of real people. Learners are adults (18+).',
  nextCourse: 'AI at Work · Level 2 (automations, AI agents, role tracks for business owners, teachers, sales, HR and office teams)',
  modules: [
    {
      title: 'Module 1 · Your AI assistant for everyday work',
      summary: 'What AI is in plain words, safe setup, the 4-part prompt, documents and meetings, and spreadsheets with checked totals. Project: analyse a monthly sales sheet.',
      bigQuestion: 'How can an AI assistant save me time every day without putting my work or my customers at risk?',
      lessons: [W1, W2, W3, W4],
    },
    {
      title: 'Module 2 · Create, research and automate',
      summary: 'Slides and visuals, research with sources you check, your own FAQ assistant, and a capstone that turns one weekly task into a faster AI routine.',
      bigQuestion: 'How do I use AI to create, find out and repeat my work faster, while I stay in charge of quality and honesty?',
      lessons: [W5, W6, W7, W8],
    },
  ],
};
