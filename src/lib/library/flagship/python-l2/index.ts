// Flagship course: Python Game Coders · Level 2 (Grades 7–11, Intermediate).
import type { FlagshipCourse } from '../types.ts';
import { P1, P2, P3, P4 } from './m1.ts';
import { P5, P6, P7, P8 } from './m2.ts';

export const PYTHON_6_8_INTERMEDIATE: FlagshipCourse = {
  key: 'python--6-8--intermediate@2',
  replaces: 'python--6-8--intermediate',
  subject: 'Python',
  band: '6-8',
  level: 'Intermediate',
  title: 'Python Game Coders · Level 2',
  tagline: 'Functions, turtle art, dictionaries and classes: build bigger games in real Python.',
  description:
    'The second course in real, typed Python for ages 12–16, picking up where Level 1 ended. In eight live classes learners write functions that return answers, draw with turtle graphics, organise data in dictionaries, lists of records and simple classes, and finish with their own turn-based battle game. Every class ends with a program they can play and show at home: a cricket score calculator, a Diwali rangoli generator, a Ludo dice duel, a Turtle Art Studio, a class quiz bank, Hangman, a virtual pet and a Battle Arena text RPG. Each lesson has a short video that shows the code and its output, a build-along, auto-checked Python Lab challenges, a predict-the-output puzzle, a debugging challenge, a worksheet and a full teacher lesson plan.',
  intro: 'Level up your Python: write your own functions, draw with code and build bigger games every class.',
  theme: 'ocean',
  ages: [12, 16],
  grade: 'Grades 7–11',
  tutor: ['Pixel', 'A cheerful Python coding coach who helps learners plan functions, read error messages and test their programs one piece at a time. Pixel asks guiding questions and gives one hint at a time instead of writing the code for them.'],
  tools: ['Laptop or Chromebook with a modern browser and a keyboard', 'The built-in Kitabash Python Lab (runs in the browser with turtle drawing, no install or account needed)', 'Paper and pencil for planning shapes, quiz questions and game designs', 'A real or online dice for two warm-up games'],
  outcomes: [
    'Write functions with several parameters, default values and return values',
    'Explain the difference between print and return, and fix “None” bugs',
    'Draw shapes and patterns with the turtle module using loops and functions',
    'Combine random numbers with functions to simulate dice and run game turns',
    'Build an interactive menu with input, while loops and if / elif / else',
    'Store, look up, add, update and loop over data in dictionaries',
    'Take strings apart with indexes, slicing, methods, in and loops over letters',
    'Store records in a list of dictionaries and find totals and top values',
    'Write a simple class with __init__, attributes and methods, and create objects',
    'Test functions with fixed inputs, even in games that use random numbers',
    'Design, build, playtest and balance an original turn-based battle game',
  ],
  prereq: ['Python Game Coders Level 1 (or equivalent): print, variables, input, f-strings, if / elif / else, for and while loops, random, lists and a first simple function with def.'],
  style: 'Build-first, like a game studio: a 3-second hook, a short video that shows the code and its output, a teacher demo, a build-along, then auto-checked Python Lab challenges that grow into a project. Every class has an unplugged game, a quick competition, pair programming in breakout rooms, a debug race and a show-and-tell.',
  notes: 'Eight 60-minute live classes in two modules. Lessons 4 (Turtle Art Studio) and 8 (Battle Arena) are module projects with a rubric. Python Lab challenges are checked automatically on the server; projects arrive in your review queue with the learner’s program, the checklist and their reflection. The Python Lab is a teaching subset of Python 3 that runs in the browser, including turtle drawing (forward, left/right, penup/pendown, goto, color, circle, dot) and simple classes. Turtle colour names the Lab knows include red, orange, yellow, green, blue, purple, pink, gold, cyan, magenta, teal, navy and violet. When it checks programs it uses fixed test answers and a fixed random seed, so game projects are checked through deterministic helper functions (for example move(28, 5) must return 28) and through tests that work whatever the dice shows. Code written here also runs in standard Python 3; turtle programs open a drawing window there.',
  safety: 'Programs never ask for real personal information: use first names, nicknames or made-up names only, and never type phone numbers, addresses, school names or passwords into a program or the chat. Battle games use cartoon fantasy creatures only. Breakout rooms are supervised by the teacher. Learners under 18 use the AI tutor only with guardian consent.',
  nextCourse: 'Python Game Coders · Level 3 (files, APIs and a first app)',
  modules: [
    { title: 'Module 1 · Functions and graphics', summary: 'Parameters and return values, turtle graphics, random functions and game turns. Project: Turtle Art Studio.', bigQuestion: 'How do functions let us build bigger programs out of small, testable pieces?', lessons: [P1, P2, P3, P4] },
    { title: 'Module 2 · Data and bigger games', summary: 'Dictionaries, strings in depth, lists of records and simple classes. Capstone: Battle Arena text RPG.', bigQuestion: 'How do we organise data so that a program can grow into a real game?', lessons: [P5, P6, P7, P8] },
  ],
};
