// Flagship course: Web Creators (Grades 6–11, Beginner) — Level 1.
import type { FlagshipCourse } from '../types.ts';
import { W1, W2, W3, W4 } from './m1.ts';
import { W5, W6, W7, W8 } from './m2.ts';

export const WEB_6_8_BEGINNER: FlagshipCourse = {
  key: 'web-development--6-8--beginner@2',
  replaces: 'web-development--6-8--beginner',
  subject: 'Web Development',
  band: '6-8',
  level: 'Beginner',
  title: 'Web Creators · Level 1',
  tagline: 'Type real HTML, CSS and JavaScript and build a new web page in every class.',
  description:
    'A first course in real web development for ages 11–16. In eight live classes learners go from their first <h1> tag to a complete one-page website for a local cause or mini business. Every class builds a real page in the Kitabash Web Lab with a live preview: an “All about me” page of favourite things, a cricket team or recipe page with lists, links and pictures, a styled school event poster, a three-section fan or club page, a Top 5 card gallery with flexbox, an accessible feedback form, a cricket score counter or click-the-mango game in JavaScript, and a capstone website with a gallery, a form and an interactive button. Each lesson has a short video that shows the code and what it does, a build-along, auto-checked Web Lab challenges, a predict-the-page puzzle, a spot-the-bug challenge, games, a worksheet and a full teacher lesson plan. Safe web habits are built in: alt text, crediting images and never sharing personal details.',
  intro: 'Type real code, watch your page appear, and build a new website every class.',
  theme: 'meadow',
  ages: [11, 16],
  grade: 'Grades 6–11',
  tutor: ['Byte', 'A friendly web design coach who helps learners read their code tag by tag, spot missing brackets and mismatched ids, and make pages that are clear, accessible and safe. Byte asks guiding questions and gives one hint at a time instead of writing the page for them.'],
  tools: [
    'Laptop or Chromebook with a modern browser (Chrome, Edge, Firefox or Safari) and a keyboard',
    'The built-in Kitabash Web Lab (HTML, CSS and JavaScript editor with a live preview that runs your page, no install or account needed)',
    'Optional: a plain text editor (Notepad, or TextEdit in plain-text mode) to save pages as .html files and play them at home in any browser',
    'Paper and pencil for sketching wireframes',
  ],
  outcomes: [
    'Explain how a browser reads an HTML file and draws a page',
    'Write headings, paragraphs, lists, links and images with helpful alt text',
    'Style pages with CSS: colours, fonts, padding, borders and margins',
    'Use class selectors and flexbox to build card layouts',
    'Build accessible forms with labels, inputs and buttons that respect privacy',
    'Write JavaScript that responds to clicks, changes text and colour, and keeps score',
    'Plan, build, test and launch a one-page website with navigation, a gallery, a form and an interactive button',
    'Practise safe web habits: alt text, crediting images, honest content and no personal details',
  ],
  prereq: ['None. Learners should be able to type on a keyboard and read simple English instructions.'],
  style: 'Build-first, like a web studio: a 3-second hook, a short video that shows the code and what it does, a teacher demo, a build-along, then auto-checked Web Lab challenges that grow into a page the learner keeps. Every class has a game, a quick competition, pair programming in breakout rooms and a show-and-tell.',
  notes: 'Eight 60-minute live classes in two modules. Lessons 4 (fan or club page) and 8 (one-page website) are module projects with a rubric. Web Lab challenges are checked automatically on the server (tags, visible text, CSS properties and code contents); projects arrive in your review queue with the learner’s page, the checklist and their reflection. The Web Lab live preview runs HTML, CSS and JavaScript in a locked-down sandbox, so from lesson 7 learners click their buttons right in the preview. Saving a page as an .html file to play at home is an optional extra. Pictures use free placeholder images (placehold.co) or emoji only.',
  safety: 'Pages never include real personal information: use nicknames or club names only, and never put a full name, school, address, phone number, password, ID number or photo of a person on a page or in the chat. Forms in this course are practice forms that send nothing and must not ask for personal details. Pictures must be the learner’s own, free placeholders or free-to-share images, always credited and always with alt text. Content must be honest and kind. Breakout rooms are supervised by the teacher. Learners under 18 use the AI tutor only with guardian consent.',
  nextCourse: 'Web Creators · Level 2 (responsive layouts, JavaScript games, publishing)',
  modules: [
    { title: 'Module 1 · HTML and CSS', summary: 'Tags, headings, paragraphs, lists, links, images with alt text, and CSS colours, fonts and boxes. Project: a three-section fan or club page.', bigQuestion: 'How does a browser turn plain text into a page that looks great?', lessons: [W1, W2, W3, W4] },
    { title: 'Module 2 · Layout and interaction', summary: 'Classes, flexbox card layouts, accessible forms and first JavaScript. Capstone: a one-page website for a local cause or mini business.', bigQuestion: 'How do we lay out a page and make it respond to people?', lessons: [W5, W6, W7, W8] },
  ],
};
