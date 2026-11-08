// Flagship course: Spoken English (Grades 3–6, Beginner) — Confident English · Level 1.
import type { FlagshipCourse } from '../types.ts';
import { E1, E2, E3, E4 } from './m1.ts';
import { E5, E6, E7, E8 } from './m2.ts';

export const ENGLISH_3_5_BEGINNER: FlagshipCourse = {
  key: 'spoken-english--3-5--beginner@2',
  replaces: 'spoken-english--3-5--beginner',
  subject: 'Spoken English',
  band: '3-5',
  level: 'Beginner',
  title: 'Confident English · Level 1',
  tagline: 'Speak up, speak clearly, and give your very first speech — one fun class at a time.',
  description:
    'A lively first spoken-English and public-speaking course for ages 8–11. Every 45-minute class ends with the child speaking something they prepared: a 30-second self-introduction, a partner interview, a five-sentence picture talk, a one-minute show and tell, a tongue-twister challenge and paragraph read-aloud, a real-life role play, a story retelling and, finally, a 1–2 minute speech. Learners master greetings and polite phrases, question words, describing words, clear pronunciation of tricky sounds (v and w, th, -ed endings), polite requests, sequencing and simple past tense. Each lesson has a short video with model dialogues, games (match, sort, order, fill the gaps, quizzes), speaking practice with a self-check list, a practice sheet with sentence frames and a word bank, and a teacher script.',
  intro: 'Speak with confidence! Learn to introduce yourself, ask great questions, describe, tell stories and give your first speech.',
  theme: 'sunrise',
  ages: [8, 11],
  grade: 'Grades 3–6',
  tutor: [
    'Sunny',
    'A cheerful speaking coach for ages 8–11 who helps learners plan what to say with sentence frames, practise sounds and give kind, specific feedback — always encouraging, never mocking an accent, and never asking for personal details beyond a first name.',
  ],
  tools: [
    'Laptop, tablet or phone with a camera and microphone for live class',
    'The Kitabash speaking activities in each lesson (listen to the model, optional recording that stays on the device)',
    'A printed or on-screen practice sheet for each lesson (sentence frames and word bank)',
    'A mirror or front camera for pronunciation practice (Lesson 5)',
    'A favourite object for show and tell (Lesson 4), chosen with a grown-up',
  ],
  outcomes: [
    'Greet people and give a clear 30-second self-introduction using polite phrases',
    'Ask and answer questions with what, where, when, who, why and how, and add follow-up questions',
    'Describe pictures, people and places with describing words and place words',
    'Plan and give a one-minute show-and-tell talk with an opening, three details and a closing',
    'Say tricky sounds clearly (v and w, th, -ed endings) and use pauses and stress when reading aloud',
    'Use polite requests in real situations: restaurants, shops, phone calls and asking for help',
    'Retell a story with a beginning, middle and end, sequencing words and simple past tense',
    'Plan, practise and deliver a 1–2 minute speech, and give kind, specific feedback',
  ],
  prereq: ['Can read simple English sentences', 'Understands basic everyday English (no speaking experience needed)'],
  style:
    'Speak-first and playful, in the style of a public-speaking club: every class opens with a speaking warm-up game, models the language in a short video, practises it through quick games and pair or breakout role plays, and ends with every child speaking on camera. Mistakes are fixed by kindly repeating the correct form, never by interrupting a speaker. Accents are respected — the goal is clear, confident English.',
  notes:
    'Lessons are 45 minutes, for small live groups. Every class ends with a speaking round, so keep an eye on time and call each learner. Correct grammar after the speaking round with a group tip, not during a child’s turn. Speaking activities use a self-check list the learner ticks; the teacher listens live. Lessons 4 (Show and tell) and 8 (My first speech) are projects scored with a rubric, with peer feedback (two stars and a wish). Each lesson has a student practice sheet and a teacher script to download. Ask families before Lesson 4 to help choose a safe object, and before Lesson 8 to hear one practice speech.',
  safety:
    'Learners share only their first name, class and likes — never surnames, home addresses, phone numbers, school names or passwords, in class or in recordings. Speaking recordings are optional and stay on the learner’s own device; they are never uploaded. If a family member is the topic of a speech, use “my grandmother” or “my uncle”, not full names. Role plays teach asking a trusted grown-up (a parent, teacher, police officer or staff at a counter) for help, and never giving personal details on the phone to someone you do not know. Show-and-tell objects are chosen with a grown-up: nothing valuable or fragile.',
  nextCourse: 'Confident English · Level 2 (storytelling and presentations)',
  modules: [
    {
      title: 'Module 1 · Everyday English',
      summary: 'Introductions and polite phrases, asking and answering questions, describing pictures and places. Project: Show and tell.',
      bigQuestion: 'How can I talk about myself and the world around me clearly and confidently?',
      lessons: [E1, E2, E3, E4],
    },
    {
      title: 'Module 2 · Speak with confidence',
      summary: 'Clear sounds and pauses, polite requests in real situations, storytelling with the past tense. Capstone: My first speech.',
      bigQuestion: 'How can I speak so that people understand me, enjoy listening and remember what I said?',
      lessons: [E5, E6, E7, E8],
    },
  ],
};
