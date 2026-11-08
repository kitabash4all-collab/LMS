// Flagship course: Python Game Coders (Grades 6–10, Beginner) — Level 1.
import type { FlagshipCourse } from '../types.ts';
import { P1, P2, P3, P4 } from './m1.ts';
import { P5, P6, P7, P8 } from './m2.ts';

export const PYTHON_6_8_BEGINNER: FlagshipCourse = {
  key: 'python--6-8--beginner@2',
  replaces: 'python--6-8--beginner',
  subject: 'Python',
  band: '6-8',
  level: 'Beginner',
  title: 'Python Game Coders',
  tagline: 'Type real Python from day one and build a playable program in every class.',
  description:
    'A first course in real, typed Python for ages 11–15. In eight live classes learners go from print("Hello") to a full text adventure game. Every class ends with a program they can play and show at home: a name badge or cricket scoreboard poster, a Mad Libs story generator, a UPI shop calculator, a Quiz Show, a rocket launch and times-table trainer, Guess the Number, Rock-Paper-Scissors and a Treasure Hunt adventure. Each lesson has a short video that shows the code being typed, a build-along, auto-checked Python Lab challenges, a predict-the-output puzzle, a debugging challenge, a worksheet and a full teacher lesson plan.',
  intro: 'Type real Python, make the computer talk back, and build a new game every class.',
  theme: 'ocean',
  ages: [11, 15],
  grade: 'Grades 6–10',
  tutor: ['Pixel', 'A cheerful Python coding coach who helps learners read error messages, test their programs and fix their own bugs. Pixel asks guiding questions and gives one hint at a time instead of writing the code for them.'],
  tools: ['Laptop or Chromebook with a modern browser and a keyboard', 'The built-in Kitabash Python Lab (runs in the browser, no install or account needed)', 'Paper and pencil for planning maps and quizzes'],
  outcomes: [
    'Write, run and fix Python programs using print, strings and comments',
    'Store information in variables and ask the user questions with input()',
    'Build sentences with f-strings',
    'Do maths with int() and the operators + - * / // %',
    'Make decisions with if, elif and else and comparison operators',
    'Keep score in a game with a counter variable',
    'Repeat code with for loops, range() and while loops, and fix infinite loops',
    'Use the random module to make games with surprises',
    'Store and use many values in a list with index, append, len and in',
    'Define and call a simple function with def',
    'Read error messages and debug programs step by step',
    'Plan, build, playtest and present an original text adventure game',
  ],
  prereq: ['None. Learners should be able to type on a keyboard and read simple English instructions.'],
  style: 'Build-first, like a game studio: a 3-second hook, a short video that types the code live, a teacher demo, a build-along, then auto-checked Python Lab challenges that grow into a project. Every class has a game, a quick competition, pair programming and a show-and-tell.',
  notes: 'Eight 60-minute live classes in two modules. Lessons 4 (Quiz Show) and 8 (Treasure Hunt) are module projects with a rubric. Python Lab challenges are checked automatically on the server; projects arrive in your review queue with the learner’s program, the checklist and their reflection. The Python Lab is a teaching subset of Python 3 that runs in the browser: when it checks programs it uses fixed test answers and a fixed random seed, so projects are checked with tests that work whatever number the computer picks (for example, guesses of 0 must always get “Too low!”). Code written here also runs in standard Python 3.',
  safety: 'Programs never ask for real personal information: use first names or made-up names only, and never type phone numbers, addresses, school names or passwords into a program or the chat. Breakout rooms are supervised by the teacher. Learners under 18 use the AI tutor only with guardian consent.',
  nextCourse: 'Python Game Coders · Level 2 (functions, dictionaries, turtle graphics, bigger games)',
  modules: [
    { title: 'Module 1 · Talk to the computer', summary: 'print, strings, variables, input, f-strings, numbers and decisions. Project: Quiz Show.', bigQuestion: 'How do we give a computer instructions, and how can it answer back?', lessons: [P1, P2, P3, P4] },
    { title: 'Module 2 · Loops and games', summary: 'for and while loops, random numbers, lists and a first taste of functions. Capstone: Treasure Hunt text adventure.', bigQuestion: 'How do loops, chance and lists turn a program into a game?', lessons: [P5, P6, P7, P8] },
  ],
};
