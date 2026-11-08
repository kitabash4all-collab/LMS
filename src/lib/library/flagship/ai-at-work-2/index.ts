// Flagship course: AI at Work · Level 2: Automate and Specialise (Adults, Intermediate).
// Builds on Level 1 (AI at Work, Made Simple). Module 1 automates repetitive work with templates, mail merge,
// self-updating spreadsheets, forms and small AI-written Apps Scripts (always checked before running).
// Module 2 applies AI to the learner's own role (sales, teaching and training, HR/office/small business),
// ending in a personal AI work playbook. No n8n; Zapier and Power Automate are optional extras only.
import type { FlagshipCourse } from '../types.ts';
import { A1, A2, A3, A4 } from './m1.ts';
import { A5, A6, A7, A8 } from './m2.ts';

export const AI_AT_WORK_INTERMEDIATE: FlagshipCourse = {
  key: 'ai-at-work--adult--intermediate@2',
  subject: 'AI at Work',
  band: 'Adult',
  level: 'Intermediate',
  title: 'AI at Work · Level 2: Automate and Specialise',
  tagline: 'Templates, mail merge, self-updating dashboards, forms and small checked scripts, then AI for your own role, all in plain words.',
  description:
    'The second course in AI at Work, for adults who have finished Level 1 or already use a chatbot at work. Level 1 taught good prompts, documents, one-off spreadsheets and one AI routine; Level 2 makes the repetitive work run with less typing, and then specialises in your job. Module 1 automates the repetitive work: reusable prompt templates and mail merge where the AI never sees your real list, spreadsheet formulas with several conditions (SUMIFS, COUNTIFS, IF, XLOOKUP, TEXT) and conditional formatting for a weekly dashboard that updates itself, Google Forms or Microsoft Forms into a sheet with AI summaries you verify, and a small Apps Script written with AI help and explained line by line, under a strict “check before you run” rule. The module project automates one recurring report end to end, with human checkpoints and a time-saved log. Module 2 is AI for your role: you choose a path inside each lesson for sales and customer messages, teaching and training, or HR, office and small business work, and build a kit with honesty, accuracy and bias checks. The capstone is your own AI work playbook: map your week, automate three tasks, measure the time saved, write your responsible-use rules and present. Everything is done hands-on in real tools (ChatGPT, Claude, Gemini, Microsoft Copilot, NotebookLM, Perplexity, Canva, Google Sheets or Excel, Gmail or Outlook, Google Forms) with invented practice data.',
  intro: 'Stop doing the same work twice: automate the repetitive parts, specialise AI for your job, and stay in charge of every check.',
  theme: 'sunrise',
  ages: [18, 65],
  grade: 'Adults (18+)',
  tutor: ['Sahayak', 'A patient, practical AI-at-work coach for adults in Level 2. Explains formulas, templates, forms and Apps Script in everyday words with Indian workplace examples, helps learners write prompts with placeholders and clear checks, explains any script line by line and insists on the check-before-you-run rule, and always reminds learners to keep personal and confidential data out, to verify numbers and counts, to keep a human checkpoint before anything is sent, and never to let AI decide about people.'],
  tools: [
    'A laptop with a modern browser (a phone is not enough for the spreadsheet and script lessons)',
    'Free accounts (learners are adults): at least two of ChatGPT, Claude (18+), Gemini and Microsoft Copilot; plus NotebookLM, Perplexity and Canva',
    'A Google account (Google Sheets, Google Forms, Gmail and Apps Script) or a Microsoft account (Excel, Microsoft Forms, Outlook)',
    'Optional: Zapier or Microsoft Power Automate (free plans exist; check the current free plan and your company’s IT rules)',
    'The Kitabash Prompt Lab (built into each lesson) and the downloadable practice files, scripts, project kits and teacher demo scripts',
  ],
  outcomes: [
    'Turn repeated messages into prompt templates with placeholders and build a template library',
    'Build personal messages with a sheet formula or mail merge without the AI seeing your real list',
    'Get formulas with several conditions (SUMIFS, COUNTIFS, IF, XLOOKUP, TEXT) and conditional formatting rules from plain words',
    'Clean a messy sheet and build a weekly dashboard that updates itself, then verify it by hand',
    'Collect data with Google Forms or Microsoft Forms and get AI themes with counts and exact quotes, checked with COUNTIF',
    'Use a small AI-written Apps Script safely: explain every line, run on a copy, email only yourself',
    'Automate one recurring report end to end with three human checkpoints and an honest time-saved log',
    'Write honest follow-ups, objection replies and CRM notes for your sales path',
    'Make a checked lesson pack with three levels, a rubric and feedback for your teaching path',
    'Write fair job posts, plain-words policies, minutes and quotation wording, with bias and number checks',
    'Build, measure and present your own AI work playbook with responsible-use rules',
  ],
  prereq: ['AI at Work, Made Simple (Level 1), or equivalent: you can write a clear prompt, check an AI answer, and use basic spreadsheet formulas like SUM and SUMIF.', 'Learners must be 18 or older (Claude requires 18+).'],
  style: 'Plain words, then hands-on in real tools: a short video that shows the real screens and one caught AI mistake, a live teacher demo with exact prompts, a follow-along build with invented practice data, Prompt Labs with instant checklist feedback, workplace games (sort, match, order, speed questions), a new-situation Probe, and a project kit to keep every lesson. Lessons 5–7 let learners choose their role path inside the lesson.',
  notes: 'Lessons are 60 minutes, live, for adults. Teachers use the exact prompts in each teacher demo script and should check that morning which menus their accounts show, since menus and free-plan features change. Practice data (Example Foods orders, a workshop feedback form, a fee-reminder list) is invented and safe to upload. Apps Script appears only in short, read-only scripts that email the learner; every script is explained line by line and run on a copy first. Zapier and Power Automate are optional and described generally; never quote prices. No n8n. Projects (lessons 4 and 8) arrive in the review queue with the rubric. Next: AI at Work · Level 3 (role specialisations and AI agents).',
  safety: 'Privacy rule in every lesson: never paste passwords, OTPs, Aadhaar, PAN, bank or card details, or anyone’s personal details into an AI tool, and never put confidential company or client data into a personal AI account; use placeholders and company-approved tools. The AI writes templates while the sheet fills in real names. Automations send drafts only to the learner, and a person checks before anything goes to others. Scripts follow the check-before-you-run rule (explain every line, read-only, email only me and once, run on a copy, read the permission screen, know how to switch it off). AI makes mistakes, so every lesson checks numbers, counts, answer keys and claims. Honest use: no fake urgency, fake reviews or invented offers; message only people who agreed; bots say they are bots; label AI-made work; AI never decides about people (hiring, pay, discipline, credit). Learners are adults (18+).',
  nextCourse: 'AI at Work · Level 3 (role specialisations and AI agents)',
  modules: [
    {
      title: 'Module 1 · Automate the repetitive work',
      summary: 'Templates and mail merge, multi-condition formulas and a self-updating dashboard, forms to sheet to AI summary with a small checked Apps Script. Project: automate one recurring report end to end.',
      bigQuestion: 'Which parts of my weekly work can run by themselves, and where must a person still check?',
      lessons: [A1, A2, A3, A4],
    },
    {
      title: 'Module 2 · AI for your role',
      summary: 'Choose your path: sales and customer messages, teaching and training, or HR, office and small business. Build a kit with honesty, accuracy and bias checks. Capstone: your AI work playbook.',
      bigQuestion: 'How do I use AI to do my own job better, more fairly and more honestly, while I stay responsible for every result?',
      lessons: [A5, A6, A7, A8],
    },
  ],
};
