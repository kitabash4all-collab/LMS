// Web Creators · Level 1 (Gr 6–8) · Module 1 — HTML and CSS. Project: a 3-section fan or club page.
import { lesson } from '../kit.ts';
import type { ProjectFile } from '../types.ts';

/** Teacher demo script as a downloadable Markdown file. */
export const demoFile = (n: number, title: string, demo: string, say: [string, string][]): ProjectFile => ({
  name: `l0${n}-teacher-demo.md`,
  title: `Teacher demo script: ${title}`,
  audience: 'teacher',
  content: [
    `# Lesson ${n} · ${title} — live demo script`,
    '',
    'Share your screen with the Kitabash Web Lab open. Type slowly and say each tag name out loud.',
    '',
    '## Steps',
    ...demo
      .split(/\s*\d\)\s+/)
      .filter(Boolean)
      .map((s, i) => `${i + 1}. ${s.trim()}`),
    '',
    '## If something goes wrong',
    ...say.map(([q, a]) => `- **${q}** ${a}`),
    '',
  ].join('\n'),
});

// ─────────────────────────────────────────────────────────────
// Lesson 1 · Hello, web!
// ─────────────────────────────────────────────────────────────
const L1_BUILD = `<!-- My first web page -->
<h1>Hello, web!</h1>
<h2>About this page</h2>
<p>This is my very first web page. I typed every tag myself.</p>
<p>I made it in the Kitabash Web Lab.</p>
<h2>Coming soon</h2>
<p>Lists, links, pictures and colours!</p>`;

const L1_ABOUT = `<!-- All about me (favourite things only!) -->
<h1>All About Me: Star Coder</h1>
<p>Hi! I am a coder in Class 7. On this page you will find my favourite things.</p>

<h2>My favourite food</h2>
<p>Mango lassi on a hot summer day. Masala dosa for Sunday breakfast.</p>

<h2>My favourite sport</h2>
<p>Cricket! I like bowling more than batting, and I can bowl a slow leg spin.</p>

<h2>My favourite book</h2>
<p>Any mystery story where the clues are hidden in plain sight.</p>

<h2>One fun fact</h2>
<p>I can say hello in four languages: hello, namaste, vanakkam and hola.</p>`;

const L1_DEMO =
  '1) Open the Web Lab and clear the editor. Point out the two halves: code on the left, live preview on the right. 2) Type <h1>Hello, web!</h1> slowly, naming the opening tag, the content and the closing tag with its slash. Watch the preview show a big heading. 3) Delete the slash in the closing tag. Ask: why did the whole page turn into a heading? Put the slash back. 4) Add <p>I love mangoes.</p> under the heading and show it appear as normal text. 5) Type a paragraph with lots of extra spaces and Enter presses inside it. Show that the browser squashes them into single spaces. 6) Add an <h2> and a second paragraph, then press Check to show the goal ticks.';

export const W1 = lesson(1, {
  title: 'Hello, web!',
  objective: 'Write your first web page in HTML with headings and paragraphs, and explain how a browser reads tags.',
  concept: 'tags, headings, paragraphs',
  minutes: 60,
  hook: ['code', '<h1>Hello, web!</h1>', 'Hello, web!  (a big, bold heading)'],
  intro: 'Today you will type your first real web page and watch the browser bring it to life.',
  cards: [
    { emoji: '🌐', title: 'A web page is a text file', body: 'Every web page is a text file written in a language called HTML. Your browser reads that file and draws the page on your screen. Every website you have ever visited started as text like this.' },
    { emoji: '🏷️', title: 'Tags wrap your content', body: 'Tags are short words inside angle brackets that tell the browser what each part of the page is. Most tags come in pairs, an opening tag and a closing tag with a slash. The words in between the two tags are the content.' },
    { emoji: '🔠', title: 'Headings h1 to h6', body: 'Heading tags make titles, from h1, the biggest, down to h6, the smallest. Use just one h1 heading for the title of your page. Then use h2 headings for each section of your page.' },
    { emoji: '📝', title: 'Paragraphs', body: 'The p tag makes a paragraph of normal text. The browser ignores extra spaces and new lines inside your code. So every new paragraph needs its own p tag.' },
    { emoji: '🛡️', title: 'Safe web habit: share favourites, not facts about you', body: 'Anyone in the world can read a public web page. Share your favourite things, but never your full name, school, address, phone number or photo. A nickname is all a web page needs.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Meet the Kitabash Web Lab',
      tool: 'Kitabash Web Lab',
      steps: ['Type HTML in the dark editor on the left', 'Watch the live preview on the right update as you type', 'Read the goal list under the editor', 'Press Check to see which goals pass', 'Use “Reset to the starting page” if you get lost'],
      say: ['The Web Lab has two halves, your code on the left and the live preview on the right.', 'Every time you type, the preview redraws your page a moment later.', 'When you think you are done, press Check to see which goals you have reached.'],
    },
    {
      kind: 'code',
      heading: 'Your first tag pair',
      lang: 'html',
      code: '<h1>Hello, web!</h1>',
      output: 'Preview: a big, bold heading that says “Hello, web!”',
      say: ['Here is an opening h1 tag, the words Hello web, and a closing h1 tag.', 'The closing tag has a forward slash, which tells the browser the heading ends here.'],
    },
    {
      kind: 'code',
      heading: 'Headings and paragraphs together',
      lang: 'html',
      code: '<h1>Mango Fan Club</h1>\n<h2>Why mangoes?</h2>\n<p>They are sweet and juicy.</p>\n<p>Alphonso is my favourite.</p>',
      output: 'Preview: a big title, a smaller section heading, then two separate lines of normal text.',
      say: ['The browser reads the file from top to bottom, one tag at a time.', 'The h1 is biggest, the h2 is a little smaller, and each paragraph sits on its own line.'],
    },
    {
      kind: 'code',
      heading: 'Extra spaces disappear',
      lang: 'html',
      code: '<p>I    love\n      cricket\n   and kabaddi.</p>',
      output: 'Preview: one line — “I love cricket and kabaddi.”',
      say: ['Look at all those spaces and new lines inside one paragraph.', 'The browser squashes them into single spaces, so it all shows on one neat line.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'html',
      code: '<h1>My Page<h1>\n<p>Welcome to my page.</p>',
      output: 'Preview: the paragraph ALSO shows as a giant heading!',
      say: ['Can you see the mistake? The closing tag is missing its slash.', 'The browser thinks the heading never ends, so everything after it becomes huge.', 'Add the slash, and the paragraph goes back to normal size.'],
    },
  ],
  build: {
    title: 'Build along: my first web page',
    intro: 'Open the Web Lab and type along with your teacher. Say each tag name out loud as you type it.',
    steps: [
      { title: 'Add a comment', text: 'Type <!-- My first web page --> on line 1. Nothing shows in the preview, because comments are notes for humans only.' },
      { title: 'Type the main heading', text: 'Type <h1>Hello, web!</h1>. Watch the big heading appear in the preview.', tip: 'Type the opening and closing tag first, then put the words in between. You will never forget the closing tag.' },
      { title: 'Add a section heading', text: 'Under it, type <h2>About this page</h2>.' },
      { title: 'Write two paragraphs', text: 'Add two <p> … </p> lines that say what your page is about.' },
      { title: 'Break it, then fix it', text: 'Delete one slash from a closing tag and watch what happens. Then put it back.', tip: 'Breaking code on purpose is a great way to learn what each part does.' },
    ],
  },
  acts: [
    {
      web: 'Turn this one-line page into a real page. Keep the h1 heading, add an h2 section heading, and add at least two paragraphs about what your page is for.',
      title: 'Web Lab: heading and paragraphs',
      starter: '<!-- Add an h2 and two paragraphs below -->\n<h1>Hello, web!</h1>\n',
      goals: [
        ['Has an h1 page title', { t: 'tag', tags: ['h1'], msg: 'Keep your <h1> … </h1> page title.' }],
        ['Has an h2 section heading', { t: 'tag', tags: ['h2'], msg: 'Add a section heading with <h2> … </h2>.' }],
        ['Has at least two paragraphs', { t: 'tag', tags: ['p'], min: 2, msg: 'Add two paragraphs, each inside its own <p> … </p>.' }],
        ['Has enough words to read', { t: 'text', min: 60, msg: 'Write a little more so your page has something to read.' }],
      ],
      solution: L1_BUILD,
      explain: 'Headings give your page a shape, and paragraphs fill it with words. Every web page you visit is built from these same pieces.',
      hints: ['Copy the h1 line, then change both h1 tags to h2.', 'Each paragraph starts with <p> and ends with </p>.'],
    },
    {
      code: '<h1>Cricket Corner</h1>\n<p>India   won\n     the match!</p>',
      lang: 'html',
      ask: 'What will the browser show?',
      options: ['A big heading, then one line: “India won the match!”', 'A big heading, then the paragraph on two lines with all the spaces', 'Everything as one big heading', 'The tags themselves, like <h1> and <p>'],
      answer: 0,
      why: 'The browser ignores extra spaces and new lines, so the paragraph shows on one tidy line. Tags are instructions, so they are never shown.',
      title: 'Predict the page',
    },
    {
      match: 'Match each piece of HTML to its job',
      pairs: [
        ['<h1>', 'The biggest heading: the page title'],
        ['<h2>', 'A section heading, a bit smaller'],
        ['<p>', 'A paragraph of normal text'],
        ['</p>', 'A closing tag: the paragraph ends here'],
        ['<!-- note -->', 'A comment the browser does not show'],
      ],
      why: 'Opening tags start a part, closing tags with a slash end it, and comments are notes for people reading the code.',
    },
    {
      order: 'Put the steps in order: how does a web page reach your screen?',
      steps: ['You open a web address or an HTML file', 'The browser gets the HTML text file', 'The browser reads the tags from top to bottom', 'The browser draws headings and paragraphs on the screen'],
      why: 'The browser always gets the text first, then reads it top to bottom, then draws what the tags describe.',
      title: 'Order it: from file to screen',
    },
    {
      web: 'Project: build an “All about me” page about your FAVOURITE THINGS. Use a nickname, not your full name. Add a page title, at least three sections with h2 headings, and a paragraph in each section.',
      title: 'Project: All about me (favourites only)',
      mode: 'project',
      starter: '<!-- All about me (favourite things only!) -->\n<h1>All About Me: (your nickname)</h1>\n<p>Hi! On this page you will find my favourite things.</p>\n\n<h2>My favourite food</h2>\n<p>(write here)</p>\n',
      goals: [
        ['Has one h1 page title', { t: 'tag', tags: ['h1'], msg: 'Start with an <h1> page title.' }],
        ['Has at least three h2 sections', { t: 'tag', tags: ['h2'], min: 3, msg: 'Add three sections, each with an <h2> heading.' }],
        ['Has at least four paragraphs', { t: 'tag', tags: ['p'], min: 4, msg: 'Write a paragraph under each heading.' }],
        ['Has plenty to read', { t: 'text', min: 200, msg: 'Write a bit more about each favourite thing.' }],
      ],
      solution: L1_ABOUT,
      requirements: ['An h1 title with your nickname, not your full name', 'At least three sections, each with an h2 heading', 'A paragraph in every section', 'Favourite things only: no school, address, phone number or photo of you', 'A comment at the top that says what the page is'],
      reflection: 'Which tag did you use the most, and what is one thing you chose NOT to put on your page to stay safe?',
      explain: 'You built a real web page from nothing but text and tags. Show it at home and explain what h1, h2 and p do.',
      hints: ['Copy one h2 and p pair, paste it, then change the words.', 'Ideas for sections: favourite food, sport, book, game, place, festival.'],
    },
    {
      sort: 'Safe or not? Sort what can go on a public web page',
      buckets: ['OK to share', 'Keep private'],
      items: [
        ['My favourite food', 0],
        ['My favourite cricket team', 0],
        ['A nickname like “Star Coder”', 0],
        ['My favourite book', 0],
        ['My home address', 1],
        ['My phone number', 1],
        ['The name of my school', 1],
        ['My password', 1],
      ],
      why: 'Favourite things are fun and safe to share. Anything that helps a stranger find or contact you stays private.',
      phase: 'probe',
      hint: 'Ask yourself: could a stranger use this to find me or get into my accounts?',
    },
  ],
  teacher: {
    explain: 'A web page is just a text file written in HTML. The browser reads the file from top to bottom and draws what the tags describe. Tags sit inside angle brackets; most come in pairs, and the closing tag has a slash. h1 to h6 make headings from biggest to smallest, and p makes a paragraph. The browser squashes extra spaces and new lines, so layout comes from tags, not from pressing Enter.',
    analogy: 'Tags are like labels on lunch boxes: the label says what is inside (heading, paragraph), and the lid (closing tag) shows where the box ends.',
    vocab: [
      ['HTML', 'The language web pages are written in.'],
      ['browser', 'The app that reads HTML and draws the page, like Chrome or Edge.'],
      ['tag', 'A word in angle brackets that tells the browser what something is.'],
      ['closing tag', 'The tag with a slash that ends a part, like </p>.'],
      ['heading', 'A title made with h1 to h6.'],
      ['paragraph', 'A block of normal text made with the p tag.'],
    ],
    demo: L1_DEMO,
    unplugged: 'Human Browser (5 min game): write tags on cards such as <h1>, <p>, </h1>, </p>. Volunteers hold up a card and the “browser” (another learner) must act it out: stand tall and shout for h1, talk normally for p, freeze for a closing tag. Then show a card sequence with a missing closing tag — the browser keeps shouting forever! First to spot the missing slash wins.',
    prompts: [
      ['What is a web page made of?', 'A text file of HTML tags and content that the browser reads and draws.'],
      ['How is a closing tag different from an opening tag?', 'It has a slash before the tag name.'],
      ['Which heading is biggest?', 'h1. The numbers go down in size to h6.'],
      ['Why did my extra spaces disappear?', 'The browser squashes spaces and new lines; use a new p tag for a new paragraph.'],
      ['What should never go on a public page?', 'Full name, address, school, phone number, passwords or a photo of you.'],
    ],
    support: 'Give learners the starter and ask them to change only the words first. A “tag buddy” card on screen: open tag, content, close tag with slash. Pair a confident typist with a learner who is new to keyboards.',
    stretch: 'Use h3 headings inside a section, add <strong> and <em> to make words bold and slanted, and add an <hr> line between sections.',
    mis: [
      ['Pressing Enter in the code makes a new line on the page', 'The browser ignores new lines in the code. Start a new <p> for a new paragraph.'],
      ['Tags show on the page', 'Tags are instructions; only the content between them appears.'],
      ['h6 is the biggest heading', 'h1 is the biggest and most important; h6 is the smallest.'],
      ['It is fine to put my full name and school online', 'Use a nickname and favourite things only. Personal details stay private.'],
    ],
    successCriteria: ['I can explain how a browser reads an HTML file.', 'I can write headings with h1 and h2.', 'I can write paragraphs and close every tag.', 'I can choose safe things to share on a page.'],
    homework: 'Add two more sections to your “All about me” page: a favourite festival and a favourite place. Show your page to someone at home and teach them what a closing tag is.',
    exit: 'Write the HTML for a heading that says “My Page” and one paragraph under it.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human Browser', doing: 'Play Human Browser with tag cards. The learner who spots the missing closing tag picks the next browser.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook <h1>Hello, web!</h1>. Thumbs poll: “Who has seen the code behind a web page?” Play the video with captions; pause at “Spot the bug” and let learners shout the fix.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo exactly as written, then everyone builds “my first web page” with you. Thumbs check after each step.' },
      { minutes: 8, stage: 'Challenge and games', doing: 'Web Lab: heading and paragraphs, then Predict the page, the match game and Order it. Quick competition: first three correct predictions type “h1!” in the chat.' },
      { minutes: 17, stage: 'Project in pairs', doing: 'Breakout rooms in pairs: one types (driver), one checks every closing tag (navigator); swap every 5 minutes. Build the “All about me” page with favourites only.' },
      { minutes: 5, stage: 'Probe: safe or not?', doing: 'Everyone does the Safe or not sort. Discuss one tricky item together (the school name).' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Three volunteers share their preview. Class gives two stars and a wish in the chat.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five poll on the success criteria. Exit ticket: write a heading and a paragraph.' },
    ],
  },
  files: [
    { name: 'l01-my-first-page.html', title: 'Build-along: my first web page', audience: 'student', content: L1_BUILD },
    demoFile(1, 'Hello, web!', L1_DEMO, [
      ['The whole page turned into a heading.', 'A closing tag is missing its slash. Read the tags in order and find the one that never closes.'],
      ['The preview shows the tags as text.', 'A < is missing or a space sneaked in, like < h1>. Retype the tag with no spaces.'],
      ['Nothing appears.', 'The words may be inside a comment. Check that the comment ends with -->.'],
    ]),
  ],
});

// ─────────────────────────────────────────────────────────────
// Lesson 2 · Lists, links and images
// ─────────────────────────────────────────────────────────────
const IMG = (text: string) => `https://placehold.co/300x180?text=${text}`;

const L2_BUILD = `<h1>Mango Lassi</h1>
<p>A cool drink for a hot afternoon. Ask an adult to help with the blender.</p>

<h2>You will need</h2>
<ul>
  <li>1 ripe mango</li>
  <li>1 cup of curd</li>
  <li>Half a cup of cold milk</li>
  <li>A pinch of cardamom</li>
</ul>

<h2>Steps</h2>
<ol>
  <li>Peel and chop the mango.</li>
  <li>Blend everything until smooth.</li>
  <li>Pour into a glass and enjoy!</li>
</ol>

<img src="${IMG('Mango+Lassi')}" alt="A tall glass of yellow mango lassi">
<p>Picture: placeholder image from placehold.co</p>
<p>Learn more about <a href="https://en.wikipedia.org/wiki/Lassi">lassi on Wikipedia</a>.</p>`;

const L2_TEAM = `<!-- My favourite team page -->
<h1>Go, Mumbai Waves!</h1>
<img src="${IMG('Mumbai+Waves')}" alt="Placeholder banner with the words Mumbai Waves">
<p>Picture credit: placeholder image from placehold.co</p>

<h2>Why I love this team</h2>
<ul>
  <li>They never give up, even when they need 30 runs in 2 overs.</li>
  <li>Their spin bowlers are magic.</li>
  <li>The fans sing all match long.</li>
  <li>Blue is my favourite colour.</li>
</ul>

<h2>My top 3 matches</h2>
<ol>
  <li>The final with the last-ball six</li>
  <li>The rain match that went to a super over</li>
  <li>The day the spinners took 8 wickets</li>
</ol>

<h2>Find out more</h2>
<p>Read about the history of <a href="https://en.wikipedia.org/wiki/Cricket">cricket on Wikipedia</a>.</p>`;

const L2_DEMO =
  '1) Type <ul> and </ul>, then three <li> lines inside with fruits. Point out the bullets. 2) Change ul to ol in both tags and show the numbers appear. 3) Type <a href="https://en.wikipedia.org/wiki/Mango">Mangoes</a> and explain href is the address and the words between are what you click. Note that links in the preview open in a new tab. 4) Type <img src="https://placehold.co/300x180?text=Mango" alt="A ripe yellow mango"> and point out there is no closing tag. 5) Break the src address on purpose and show the alt text appear where the picture should be. Explain that screen readers read the alt text aloud to blind users. 6) Add a credit line under the picture and talk about only using your own pictures or free ones you can credit.';

export const W2 = lesson(2, {
  title: 'Lists, links and images',
  objective: 'Add bulleted and numbered lists, links and images with alt text to a web page, and credit the pictures you use.',
  concept: 'lists, links, images',
  minutes: 60,
  hook: ['code', '<ul>\n  <li>Mango</li>\n  <li>Litchi</li>\n</ul>', '• Mango\n• Litchi'],
  intro: 'Today your pages get lists, links to other pages and pictures, the way real websites do.',
  cards: [
    { emoji: '📋', title: 'Two kinds of list', body: 'The ul tag makes a bulleted list, and the ol tag makes a numbered list. Each item goes inside its own li tag. Use numbers when the order matters, like recipe steps.' },
    { emoji: '🔗', title: 'Links take you places', body: 'The a tag turns words into a link you can click. Its href part holds the web address to visit. The words between the tags are what people click.' },
    { emoji: '🖼️', title: 'Images need a source', body: 'The img tag shows a picture, and its src part says where the picture lives. An img tag is special, because it has no closing tag. It just sits in the page like a stamp.' },
    { emoji: '🦯', title: 'Alt text describes the picture', body: 'Alt text is a short description of the image. Screen readers read it aloud for people who cannot see the picture. It also shows up if the picture fails to load.' },
    { emoji: '©️', title: 'Credit every picture', body: 'Pictures belong to the people who made them. Use your own drawings, free placeholder images or free pictures that allow sharing. Always write who made it under the picture.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A bulleted list',
      lang: 'html',
      code: '<h2>Monsoon must-haves</h2>\n<ul>\n  <li>Umbrella</li>\n  <li>Raincoat</li>\n  <li>Hot pakoras</li>\n</ul>',
      output: 'Preview: a heading, then three lines, each with a round bullet in front.',
      say: ['The ul tag wraps the whole list, and each li tag holds one item.', 'The browser adds a round bullet in front of every item for us.'],
    },
    {
      kind: 'code',
      heading: 'A numbered list',
      lang: 'html',
      code: '<ol>\n  <li>Wash the rice</li>\n  <li>Add water</li>\n  <li>Cook for 15 minutes</li>\n</ol>',
      output: 'Preview: 1. Wash the rice  2. Add water  3. Cook for 15 minutes',
      say: ['Swap ul for ol and the bullets become numbers.', 'If you add a new step in the middle, the browser renumbers everything for you.'],
    },
    {
      kind: 'code',
      heading: 'A link',
      lang: 'html',
      code: '<p>Read about <a href="https://en.wikipedia.org/wiki/Mango">mangoes</a> here.</p>',
      output: 'Preview: the word “mangoes” is blue and underlined. Clicking it opens the mango page.',
      say: ['The href holds the address, and the word mangoes is what you click.', 'Links are what join millions of pages into one giant web.'],
    },
    {
      kind: 'code',
      heading: 'An image with alt text',
      lang: 'html',
      code: '<img src="https://placehold.co/300x180?text=Mango"\n     alt="A ripe yellow mango">\n<p>Picture: placeholder from placehold.co</p>',
      output: 'Preview: a grey box with the word Mango, and a credit line under it. If it cannot load, “A ripe yellow mango” shows instead.',
      say: ['The src says where the picture lives, and the alt describes it in words.', 'If the picture cannot load, or someone uses a screen reader, the alt text tells them what it shows.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'html',
      code: '<ul>\n  <li>Bat\n  <li>Ball\n</ul>\n<img src="stumps.png">',
      output: 'Preview: the list still works, but the picture is broken and has no alt text, so nobody knows what it was.',
      say: ['Two problems here. The list items never close, and the picture has no alt text.', 'Close every li tag, and always describe your picture with alt text.'],
    },
  ],
  build: {
    title: 'Build along: a mango lassi recipe page',
    intro: 'Type along to build a recipe page with a list of things you need, numbered steps, a picture and a link.',
    steps: [
      { title: 'Title and intro', text: 'Type an h1 with the recipe name and a short paragraph under it.' },
      { title: 'Bulleted list of things you need', text: 'Add an h2 “You will need”, then a <ul> with four <li> items.' },
      { title: 'Numbered steps', text: 'Add an h2 “Steps”, then an <ol> with three <li> steps.', tip: 'Steps have an order, so they get numbers. Things you need do not, so they get bullets.' },
      { title: 'A picture with alt text', text: 'Add <img src="https://placehold.co/300x180?text=Mango+Lassi" alt="A tall glass of mango lassi"> and a credit line under it.' },
      { title: 'A link to learn more', text: 'Add a paragraph with an <a href="…"> link to a page about lassi.' },
    ],
  },
  acts: [
    {
      web: 'This snack list is just one long paragraph. Turn it into a bulleted list with at least three items, then add a link to a page about one of the snacks.',
      title: 'Web Lab: make a list and a link',
      starter: '<h1>Best monsoon snacks</h1>\n<p>Pakoras, samosas, corn on the cob, hot chai</p>\n',
      goals: [
        ['Has a bulleted list', { t: 'tag', tags: ['ul'], msg: 'Wrap your list in <ul> … </ul>.' }],
        ['Has at least three list items', { t: 'tag', tags: ['li'], min: 3, msg: 'Put each snack in its own <li> … </li>.' }],
        ['Has a link', { t: 'tag', tags: ['a'], msg: 'Add a link with <a href="…"> … </a>.' }],
        ['The link has an address', { t: 'source', has: ['href="http'], msg: 'Give your link a web address in href, starting with https.' }],
      ],
      solution: '<h1>Best monsoon snacks</h1>\n<ul>\n  <li>Pakoras</li>\n  <li>Samosas</li>\n  <li>Corn on the cob</li>\n  <li>Hot chai</li>\n</ul>\n<p>Read about <a href="https://en.wikipedia.org/wiki/Pakora">pakoras</a>.</p>',
      explain: 'Lists make information easy to scan, and links connect your page to the rest of the web.',
      hints: ['Start with <ul>, then put <li>Pakoras</li> on the next line.', 'A link looks like <a href="https://en.wikipedia.org/wiki/Samosa">samosas</a>.'],
    },
    {
      code: '<ol>\n  <li>Toss the coin</li>\n  <li>Choose to bat</li>\n  <li>Hit a six</li>\n</ol>',
      lang: 'html',
      ask: 'What will this list look like?',
      options: ['Three lines numbered 1, 2 and 3', 'Three lines with round bullets', 'One line: Toss the coin Choose to bat Hit a six', 'Three lines with no bullets or numbers'],
      answer: 0,
      why: 'ol means ordered list, so the browser numbers each li item.',
      title: 'Predict the list',
    },
    {
      match: 'Match each tag or part to its job',
      pairs: [
        ['<ul>', 'A bulleted list'],
        ['<ol>', 'A numbered list'],
        ['<li>', 'One item in a list'],
        ['href="…"', 'The address a link goes to'],
        ['src="…"', 'Where a picture lives'],
        ['alt="…"', 'Words that describe a picture'],
      ],
      why: 'Lists use ul or ol with li items. Links use href, and images use src and alt.',
    },
    {
      order: 'Put the steps in order to add a picture the right way',
      steps: ['Find a picture you made or one that is free to share', 'Copy the picture’s web address', 'Write an img tag with the address in src', 'Add alt text that describes the picture', 'Write a credit line under the picture'],
      why: 'Choose a picture you are allowed to use, add it with src, describe it with alt, and credit whoever made it.',
      title: 'Order it: add a picture safely',
    },
    {
      web: 'Project: make a page about your favourite cricket team OR a favourite recipe. Include a bulleted list, a numbered list, at least one picture with alt text and a credit line, and a link to learn more.',
      title: 'Project: favourite team or recipe page',
      mode: 'project',
      starter: `<!-- My favourite team or recipe page -->\n<h1>(Your title)</h1>\n<img src="${IMG('My+Page')}" alt="(describe the picture)">\n<p>Picture credit: placeholder image from placehold.co</p>\n\n<h2>(A heading)</h2>\n<ul>\n  <li>(item)</li>\n</ul>\n`,
      goals: [
        ['Has a page title', { t: 'tag', tags: ['h1'], msg: 'Start with an <h1> title.' }],
        ['Has two lists', { t: 'tag', tags: ['ul', 'ol'], min: 2, msg: 'Use two lists: one <ul> and one <ol>.' }],
        ['Has at least five list items', { t: 'tag', tags: ['li'], min: 5, msg: 'Add more <li> items to your lists.' }],
        ['Has a picture with alt text', { t: 'source', has: ['<img', 'alt="'], msg: 'Add an <img> with alt="…" describing it.' }],
        ['Has a link', { t: 'tag', tags: ['a'], msg: 'Add a link with <a href="…">.' }],
        ['Has enough to read', { t: 'text', min: 150, msg: 'Write a bit more on your page.' }],
      ],
      solution: L2_TEAM,
      requirements: ['An h1 title and at least two h2 sections', 'One bulleted list and one numbered list', 'At least one picture with helpful alt text', 'A credit line under every picture', 'A link to a page where people can learn more'],
      reflection: 'Read your alt text with your eyes closed. Would someone who cannot see the picture know what it shows? What would you improve?',
      explain: 'Your page now has lists, a picture with alt text and a link: the same building blocks real sites use every day.',
      hints: ['To change the placeholder text, edit the words after text= in the address. Use + for spaces.', 'Good alt text says what is in the picture, like “Blue team flag with a wave”.'],
    },
    {
      web: 'Spot the bugs! This picture has no alt text and the list items never close. Fix both so the page is tidy and the picture is described for everyone.',
      title: 'Debug it: the silent picture',
      phase: 'probe',
      starter: `<h1>My cricket kit</h1>\n<img src="${IMG('Cricket+Bat')}">\n<ul>\n  <li>Bat\n  <li>Ball\n  <li>Pads\n</ul>\n`,
      goals: [
        ['The picture has alt text', { t: 'source', has: ['alt="'], msg: 'Add alt="…" inside the img tag to describe the picture.' }],
        ['Every list item closes', { t: 'source', has: ['bat</li>', 'ball</li>', 'pads</li>'], msg: 'End each item with </li>.' }],
      ],
      solution: `<h1>My cricket kit</h1>\n<img src="${IMG('Cricket+Bat')}" alt="A wooden cricket bat">\n<ul>\n  <li>Bat</li>\n  <li>Ball</li>\n  <li>Pads</li>\n</ul>\n`,
      explain: 'Browsers forgive some missing tags, but tidy code is easier to fix later. Alt text makes sure everyone knows what your picture shows.',
      hints: ['alt goes inside the img tag, before the >.', 'Type </li> straight after each word.'],
    },
  ],
  teacher: {
    explain: 'Lists come in two kinds: ul for bullets and ol for numbers, and every item sits inside li. The a tag makes a link, and href holds the address. The img tag shows a picture from the address in src; it has no closing tag. Alt text describes the picture for screen-reader users and appears if the image fails. We only use pictures we made or are allowed to share, and we credit them.',
    analogy: 'A link is like a door with an address painted on it: href is the address, and the words are the door handle you click.',
    vocab: [
      ['ul', 'An unordered (bulleted) list.'],
      ['ol', 'An ordered (numbered) list.'],
      ['li', 'One item inside a list.'],
      ['link', 'Clickable words made with the a tag that take you to another page.'],
      ['alt text', 'Words that describe a picture for people who cannot see it.'],
      ['credit', 'A line saying who made a picture or where it came from.'],
    ],
    demo: L2_DEMO,
    unplugged: 'List Relay (5 min game): call out a topic such as “recipe steps”, “my favourite fruits” or “how to wash hands”. Learners shout “bullets!” (ul) or “numbers!” (ol) depending on whether the order matters. Then describe a mystery picture in one sentence of alt text — others guess what it shows. Best describer wins.',
    prompts: [
      ['When should you use ol instead of ul?', 'When the order matters, like steps or rankings.'],
      ['What does href hold?', 'The address the link takes you to.'],
      ['Why does img not have a closing tag?', 'It has no content inside it; it just places a picture.'],
      ['Who does alt text help?', 'People using screen readers, and everyone if the picture does not load.'],
      ['Can you use any picture you find online?', 'No. Use your own, a placeholder, or a picture that is free to share, and credit it.'],
    ],
    support: 'Give a printed list template (ul, three li, /ul) to copy. Let learners keep the placeholder image and only change the text= part of its address.',
    stretch: 'Make a list inside a list (a nested ul), add a title="…" tooltip to a link, and add width="200" to an image.',
    mis: [
      ['A list is just lines with dashes typed in', 'Use ul or ol with li so the browser and screen readers know it is a list.'],
      ['The img tag needs </img>', 'img has no closing tag. All its information goes inside the one tag.'],
      ['Alt text is a title for the picture, like “image1”', 'Alt text should describe what the picture shows in words.'],
      ['Any picture on the internet is free to use', 'Pictures belong to their makers. Use your own or free-to-share ones and credit them.'],
    ],
    successCriteria: ['I can make bulleted and numbered lists.', 'I can add a link with href.', 'I can add a picture with helpful alt text.', 'I can credit the pictures I use.'],
    homework: 'Add a “Top 3” numbered list and one more link to your team or recipe page. Ask someone at home to close their eyes while you read your alt text aloud: could they picture it?',
    exit: 'Write the HTML for a picture of a kite with good alt text.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: List Relay', doing: 'Play List Relay: bullets or numbers? Then the alt-text guessing round.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook list. Poll: “Bullets or numbers for a recipe’s steps?” Play the video and pause at the image scene to ask who alt text helps.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the demo as written (break the image address on purpose), then build the mango lassi page together.' },
      { minutes: 8, stage: 'Challenge and games', doing: 'Web Lab: make a list and a link, then Predict the list, the match game and Order it. Quick competition: fastest correct match wins a shout-out.' },
      { minutes: 17, stage: 'Project in pairs', doing: 'Breakout rooms: pairs build a team or recipe page. Navigator checks every picture has alt text and a credit. Swap roles every 5 minutes.' },
      { minutes: 5, stage: 'Probe: debug race', doing: 'Race to fix “the silent picture”. First learner to explain both bugs wins.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Three learners share their page and read their alt text aloud. Class votes on the most helpful alt text with emoji reactions.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Thumbs check on each success criterion. Exit ticket: picture of a kite with good alt text.' },
    ],
  },
  files: [
    { name: 'l02-mango-lassi.html', title: 'Build-along: mango lassi recipe page', audience: 'student', content: L2_BUILD },
    demoFile(2, 'Lists, links and images', L2_DEMO, [
      ['The picture does not show.', 'Check the src address letter by letter, and that it is inside quotes. The alt text shows instead — that is alt text doing its job!'],
      ['The link is not clickable.', 'Check that href has an = sign, quotes, and that the </a> closing tag is there.'],
      ['The numbers start again at 1.', 'There are two separate ol lists. Keep all the steps inside one ol.'],
    ]),
  ],
});

// ─────────────────────────────────────────────────────────────
// Lesson 3 · CSS colours, fonts and boxes
// ─────────────────────────────────────────────────────────────
const L3_BUILD = `<style>
  body {
    background-color: lightyellow;
    font-family: Arial, sans-serif;
  }
  h1 {
    color: darkorange;
  }
  p {
    color: #333333;
    font-size: 18px;
  }
  .box {
    padding: 16px;
    border: 3px solid darkorange;
    margin: 20px;
  }
</style>

<h1>Diwali Mela</h1>
<p class="box">Food stalls, rangoli and a lamp-making corner. See you there!</p>`;

const L3_POSTER = `<style>
  body {
    background-color: #fff4e0;
    font-family: Verdana, sans-serif;
    text-align: center;
  }
  h1 {
    color: #d35400;
    font-size: 44px;
    margin: 10px;
  }
  h2 {
    color: #1a5276;
  }
  p {
    color: #333333;
    font-size: 18px;
  }
  .details {
    background-color: white;
    border: 4px dashed #d35400;
    padding: 20px;
    margin: 20px auto;
    width: 70%;
  }
</style>

<h1>Science Fair 2026</h1>
<h2>Build it. Test it. Show it!</h2>
<div class="details">
  <p>Come and see robots, volcanoes and solar cookers made by our students.</p>
  <p>Saturday morning in the school hall. Entry is free for everyone.</p>
</div>
<p>Poster designed by the Class 7 Coding Club</p>`;

const L3_DEMO =
  '1) Start with an h1 and a p from last lesson. Type an empty <style> </style> block at the top and explain: HTML says what things are, CSS says how they look. 2) Inside it type h1 { color: orange; } and watch the heading change. Name the selector, the property and the value. 3) Add body { background-color: lightyellow; } and show the whole page change. 4) Add font-family: Arial, sans-serif; to body. Explain the second font is a backup. 5) Make a p with a border: 3px solid orange; then add padding: 16px; and margin: 20px; one at a time. Point to the space INSIDE the border (padding) and OUTSIDE it (margin). 6) Delete the colon in color: orange and show the rule stops working. Put it back.';

export const W3 = lesson(3, {
  title: 'CSS colours, fonts and boxes',
  objective: 'Style a web page with CSS rules for colours, fonts, padding, borders and margins.',
  concept: 'CSS rules, box model',
  minutes: 60,
  hook: ['code', 'h1 { color: orange; }', 'Your heading turns orange!'],
  intro: 'HTML builds the page. Today CSS makes it beautiful, with colours, fonts and boxes.',
  cards: [
    { emoji: '🎨', title: 'CSS is the style', body: 'HTML says what each part of the page is. CSS says how it looks, like its colour, size and spacing. We write CSS inside a style tag at the top of the page.' },
    { emoji: '📏', title: 'A CSS rule has three parts', body: 'A rule starts with a selector, like h1, that picks what to style. Inside curly brackets you write a property, a colon and a value. Every property and value line ends with a semicolon.' },
    { emoji: '🌈', title: 'Colours and backgrounds', body: 'The color property changes text colour, and background-color paints behind it. You can use names like orange, or hex codes like ff9933 for saffron. Pick colours that are easy to read together.' },
    { emoji: '🔤', title: 'Fonts', body: 'The font-family property picks the typeface, and font-size sets how big it is. Always add a backup font, like sans-serif, in case the first one is missing.' },
    { emoji: '📦', title: 'Every element is a box', body: 'Padding is the space inside a box, between the words and the border. The border is the line around the box. Margin is the space outside, pushing other boxes away.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Your first CSS rule',
      lang: 'html',
      code: '<style>\n  h1 { color: orange; }\n</style>\n<h1>Diwali Mela</h1>',
      output: 'Preview: the heading “Diwali Mela” is now orange.',
      say: ['The style tag holds our CSS, and this rule picks every h1 on the page.', 'The property is color, the value is orange, and a semicolon ends the line.'],
    },
    {
      kind: 'code',
      heading: 'Paint the whole page',
      lang: 'css',
      code: 'body {\n  background-color: lightyellow;\n  font-family: Arial, sans-serif;\n}',
      output: 'Preview: a soft yellow page, and all the text switches to a clean Arial font.',
      say: ['The body selector styles the whole page at once.', 'Arial is our first choice of font, and sans serif is the backup.'],
    },
    {
      kind: 'code',
      heading: 'Padding, border, margin',
      lang: 'css',
      code: 'p {\n  border: 3px solid orange;\n  padding: 16px;\n  margin: 20px;\n}',
      output: 'Preview: the paragraph sits in an orange frame, with breathing space inside the frame and outside it.',
      say: ['The border draws an orange line three pixels thick around the paragraph.', 'Padding pushes the words away from the border, and margin pushes other things away from the box.'],
    },
    {
      kind: 'code',
      heading: 'Easy to read, or hard to read?',
      lang: 'css',
      code: '/* Hard to read */\np.bad { color: yellow; background-color: white; }\n\n/* Easy to read */\np.good { color: #333333; background-color: #fff4e0; }',
      output: 'Preview: the yellow-on-white line almost disappears. The dark-on-cream line is crisp and clear.',
      say: ['Yellow on white looks bright, but it is very hard to read.', 'Dark text on a light background is clear for everyone, including people with weak eyesight.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'css',
      code: 'h1 { color orange; }\np { font-size: 18px }',
      output: 'Preview: the heading stays black! The paragraph works.',
      say: ['The first rule is missing its colon, so the browser skips it.', 'The second rule still works, but a semicolon at the end is a good habit.'],
    },
  ],
  build: {
    title: 'Build along: a Diwali mela notice',
    intro: 'Type along to style a small event notice with colours, a font and a framed box.',
    steps: [
      { title: 'Add the HTML', text: 'Type an h1 “Diwali Mela” and a paragraph with class="box" describing the event.' },
      { title: 'Open a style tag', text: 'At the very top, type <style> and </style> with a blank line between them.' },
      { title: 'Colour the heading', text: 'Inside style, type h1 { color: darkorange; }.' },
      { title: 'Style the page', text: 'Add a body rule with background-color and font-family.', tip: 'Choose a light background with dark text so it is easy to read.' },
      { title: 'Frame the box', text: 'Add .box { padding: 16px; border: 3px solid darkorange; margin: 20px; } and watch the frame appear.' },
      { title: 'Try three colours', text: 'Change the colours three times and keep your favourite. Save the file to keep your notice.' },
    ],
  },
  acts: [
    {
      web: 'This page is plain black and white. Add a style tag that changes the text colour, the background colour and the font.',
      title: 'Web Lab: paint the page',
      starter: '<h1>Sports Day</h1>\n<p>Races, relays and a tug of war. Wear your house colours!</p>\n',
      goals: [
        ['Has a style tag', { t: 'tag', tags: ['style'], msg: 'Add <style> … </style> at the top.' }],
        ['Changes colours', { t: 'css', props: ['color', 'background-color'], msg: 'Use color and background-color in your CSS.' }],
        ['Changes the font', { t: 'css', props: ['font-family'], msg: 'Pick a font with font-family.' }],
      ],
      solution: '<style>\n  body {\n    background-color: #e8f8f5;\n    font-family: Verdana, sans-serif;\n  }\n  h1 { color: darkgreen; }\n</style>\n<h1>Sports Day</h1>\n<p>Races, relays and a tug of war. Wear your house colours!</p>\n',
      explain: 'Three small rules, and the whole page feels different. That is the power of CSS.',
      hints: ['Start with body { background-color: lightblue; } inside the style tag.', 'Every property needs a colon after it and a semicolon at the end.'],
    },
    {
      code: '<style>\n  p { color: blue; }\n</style>\n<h1>Holi Party</h1>\n<p>Bring your colours!</p>',
      lang: 'html',
      ask: 'Which text turns blue?',
      options: ['Only “Bring your colours!”', 'Only “Holi Party”', 'Both lines', 'Neither line, because the rule is inside a style tag'],
      answer: 0,
      why: 'The selector p picks paragraphs only. The h1 heading keeps its normal colour.',
      title: 'Predict the colours',
    },
    {
      match: 'Match each CSS property to what it changes',
      pairs: [
        ['color', 'The colour of the text'],
        ['background-color', 'The colour behind the text'],
        ['font-family', 'The typeface, like Arial'],
        ['padding', 'Space inside the box, around the words'],
        ['border', 'The line around the box'],
        ['margin', 'Space outside the box'],
      ],
      why: 'Text, background, font, then the three layers of the box: padding inside, border around, margin outside.',
    },
    {
      order: 'Build this CSS rule in the right order: h1 { color: orange; }',
      steps: ['h1 (the selector)', '{ (open the curly bracket)', 'color (the property)', ': (a colon)', 'orange (the value)', '; (a semicolon)', '} (close the curly bracket)'],
      why: 'Selector, open bracket, property, colon, value, semicolon, close bracket. Every CSS rule follows this pattern.',
      title: 'Order it: build a CSS rule',
    },
    {
      web: 'Project: design a poster for a school event, such as Sports Day, a Science Fair or a Diwali Mela. Give it a big title, at least two lines of details, readable colours, a font, and a framed box with padding, a border and a margin.',
      title: 'Project: school event poster',
      mode: 'project',
      starter: '<style>\n  body {\n    /* background colour and font here */\n  }\n  h1 {\n    /* title colour here */\n  }\n</style>\n\n<h1>(Event name)</h1>\n<p>(What, when and where)</p>\n',
      goals: [
        ['Has a big title', { t: 'tag', tags: ['h1'], msg: 'Add an <h1> event title.' }],
        ['Has at least two paragraphs', { t: 'tag', tags: ['p'], min: 2, msg: 'Add two lines of event details in <p> tags.' }],
        ['Uses colour and a font', { t: 'css', props: ['color', 'background-color', 'font-family'], msg: 'Use color, background-color and font-family.' }],
        ['Frames a box', { t: 'css', props: ['padding', 'border', 'margin'], msg: 'Give a box padding, a border and a margin.' }],
        ['Has enough details', { t: 'text', min: 120, msg: 'Add more details: what, when and where.' }],
      ],
      solution: L3_POSTER,
      requirements: ['A big title for the event', 'At least two lines of details: what, when and where (no real addresses or phone numbers)', 'Colours that are easy to read together', 'A font with a backup, like Arial, sans-serif', 'A framed box using padding, border and margin', 'A line saying who designed the poster (a club or class, not your full name)'],
      reflection: 'How did you choose your colours? Ask a partner if your poster is easy to read from far away, and write what they said.',
      explain: 'You designed a real poster with code. Designers use these exact same properties every day.',
      hints: ['Wrap your details in <div class="details"> … </div> and style .details with padding, border and margin.', 'Try border: 4px dashed orange; for a fun dashed frame.'],
    },
    {
      mcq: 'Zoya’s boxes have a border, but the words are squashed right against the border line. Which property gives the words more room INSIDE the box?',
      options: ['padding', 'margin', 'border', 'font-size'],
      answer: 0,
      why: 'Padding is the space inside the box, between the content and the border. Margin is outside the border.',
      wrong: { 1: 'Margin adds space outside the border, pushing other boxes away. The words would still be squashed.' },
      phase: 'probe',
      title: 'New situation: squashed words',
      hint: 'Inside the box or outside the box?',
    },
  ],
  teacher: {
    explain: 'CSS controls how HTML looks. We put rules in a style tag. Each rule has a selector (what to style) and declarations inside curly brackets: property, colon, value, semicolon. color is text colour and background-color paints behind it. font-family picks a font, with a backup. Every element is a box: padding is inside the border, border is the line, and margin is outside.',
    analogy: 'HTML is the house’s bricks and rooms; CSS is the paint, curtains and furniture. A box is a framed photo: padding is the mount around the photo, the border is the frame, and margin is the wall space between frames.',
    vocab: [
      ['CSS', 'The language that styles a web page: colours, fonts, spacing.'],
      ['selector', 'The part of a rule that picks what to style, like h1.'],
      ['property', 'What you want to change, like color.'],
      ['value', 'What you change it to, like orange.'],
      ['padding', 'Space inside a box, between content and border.'],
      ['margin', 'Space outside a box.'],
    ],
    demo: L3_DEMO,
    unplugged: 'Human CSS (5 min game): the teacher is the browser. Learners call out rules in the right shape — “h1, color, red!” — and the teacher holds up the matching coloured paper. Then three learners stand as a box: the middle one is the content, an arm’s-length gap is the padding, a skipping rope held around them is the border, and the space to the next group is the margin.',
    prompts: [
      ['What is the difference between HTML and CSS?', 'HTML says what things are; CSS says how they look.'],
      ['Name the three parts of a CSS rule.', 'Selector, property, value.'],
      ['What happens if you forget the colon?', 'The browser cannot read that line and skips it.'],
      ['Padding or margin: which is inside the border?', 'Padding is inside; margin is outside.'],
      ['Why add sans-serif after Arial?', 'It is a backup if Arial is not on the computer.'],
    ],
    support: 'Show a colour-name cheat sheet (orange, teal, navy, gold, lightyellow). Let learners copy the build-along CSS and change only the values.',
    stretch: 'Use border-radius for rounded corners, text-align: center for the whole poster, and try a Google-style colour picker to find hex codes.',
    mis: [
      ['color with a u (colour) works', 'CSS uses American spelling: color. “colour” is ignored.'],
      ['background changes the text colour', 'background-color is behind the text; color is the text itself.'],
      ['Padding and margin are the same', 'Padding is inside the border; margin is outside it.'],
      ['CSS goes anywhere in the page as plain text', 'CSS goes inside a style tag (or a style attribute), or it shows up as words on the page.'],
    ],
    successCriteria: ['I can write a CSS rule with a selector and property.', 'I can change text and background colours.', 'I can change the font and its size.', 'I can use padding, border and margin on a box.'],
    homework: 'Restyle your “All about me” page from lesson 1 with a style tag: a background colour, a font and one framed box. Ask someone at home to pick their favourite colour scheme.',
    exit: 'Write a CSS rule that makes every paragraph dark blue with 10px of padding.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human CSS', doing: 'Play Human CSS: call out rules for colours, then build a human box with a skipping-rope border.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook rule. Poll: “What colour should our heading be?” Play the video; pause at “Easy to read, or hard to read?” for a thumbs vote.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the demo as written, then build the Diwali mela notice together. Thumbs check after the box step.' },
      { minutes: 8, stage: 'Challenge and games', doing: 'Web Lab: paint the page, then Predict the colours, the property match and Order it: build a CSS rule. Quick race: first to finish the order game wins.' },
      { minutes: 17, stage: 'Project in pairs', doing: 'Breakout rooms: pairs design a school event poster. Navigator checks every rule has a colon and semicolon; swap every 5 minutes.' },
      { minutes: 5, stage: 'Probe', doing: 'New situation: squashed words. Discuss padding vs margin with a quick drawing on the whiteboard.' },
      { minutes: 6, stage: 'Show-and-tell: poster gallery', doing: 'Gallery walk: learners share posters one after another; class votes “easiest to read from far away” with reactions.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: the dark-blue paragraph rule.' },
    ],
  },
  files: [
    { name: 'l03-diwali-mela-notice.html', title: 'Build-along: Diwali mela notice', audience: 'student', content: L3_BUILD },
    demoFile(3, 'CSS colours, fonts and boxes', L3_DEMO, [
      ['My CSS shows as text on the page.', 'It is outside the style tag. Move it between <style> and </style>.'],
      ['One rule does nothing.', 'Look for a missing colon, a missing semicolon on the line before, or a spelling like colour.'],
      ['Everything changed, not just one box.', 'The selector is too wide (like p or body). Use a class like .box for one element.'],
    ]),
  ],
});

// ─────────────────────────────────────────────────────────────
// Lesson 4 · Module project: fan page or school club page
// ─────────────────────────────────────────────────────────────
const L4_SKELETON = `<style>
  body { font-family: Arial, sans-serif; background-color: #f4f9ff; }
  h1 { color: navy; }
  section { padding: 12px; margin: 12px 0; border: 2px solid lightsteelblue; }
</style>

<h1>Our Club Page</h1>

<section>
  <h2>About us</h2>
  <p>(Who we are and what we do)</p>
</section>

<section>
  <h2>What we do</h2>
  <ul>
    <li>(activity)</li>
  </ul>
</section>

<section>
  <h2>Join us</h2>
  <p>(How to find out more — ask a teacher, not a phone number!)</p>
</section>`;

const L4_FANPAGE = `<!-- Fan page: Kitabash Astronomy Club -->
<style>
  body {
    background-color: #0b1a33;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
    margin: 20px;
  }
  h1 {
    color: gold;
    text-align: center;
  }
  h2 {
    color: #8ecae6;
  }
  section {
    background-color: #13284d;
    border: 2px solid #8ecae6;
    padding: 16px;
    margin: 16px 0;
  }
  a {
    color: gold;
  }
</style>

<h1>Stargazers Astronomy Club</h1>
<p>We look up! A club for anyone who loves planets, stars and space missions.</p>

<section>
  <h2>About us</h2>
  <p>We meet after school every Friday to learn about the night sky. No telescope needed, just curiosity.</p>
  <img src="https://placehold.co/300x180?text=Night+Sky" alt="Placeholder picture of a dark blue night sky">
  <p>Picture credit: placeholder image from placehold.co</p>
</section>

<section>
  <h2>What we do</h2>
  <ul>
    <li>Spot planets and constellations</li>
    <li>Build paper model rockets</li>
    <li>Follow space missions like Chandrayaan</li>
  </ul>
</section>

<section>
  <h2>Our top 3 space facts</h2>
  <ol>
    <li>A day on Venus is longer than its year.</li>
    <li>The Sun is a star.</li>
    <li>India landed near the Moon’s south pole in 2023.</li>
  </ol>
  <p>Learn more about <a href="https://en.wikipedia.org/wiki/Chandrayaan-3">Chandrayaan-3</a>.</p>
</section>

<p>Made by the Stargazers Club. Ask your teacher to join.</p>`;

const L4_DEMO =
  '1) Show a hand-drawn sketch (wireframe) of a page with a title and three boxes labelled About, What we do, Join us. 2) Type the three <section> blocks with an h2 each and point out how sections group a heading with its content. 3) Add one CSS rule for section with padding, border and margin, and show all three boxes change at once. 4) Fill one section with a list and one with a picture, alt text and a credit line. 5) Run the “ready to share” checklist out loud: alt text on every picture, credits, a link that works, no personal details. 6) Press Check and celebrate each goal that turns green.';

export const W4 = lesson(4, {
  title: 'Project: fan page or club page',
  objective: 'Plan, build and check a three-section fan page or school club page that uses headings, lists, a picture, a link and CSS.',
  concept: 'plan, build, check, share',
  minutes: 60,
  hook: ['word', 'FAN PAGE', 'Three sections. Your style. Your page.'],
  intro: 'It’s project time! Today you will plan, build and check your own fan page or club page.',
  cards: [
    { emoji: '✏️', title: 'Sketch before you code', body: 'Real web designers draw a quick sketch called a wireframe first. Draw boxes for the title and each section, and write what goes in them. Coding is much faster when you know what you are building.' },
    { emoji: '🧱', title: 'Sections group your page', body: 'The section tag wraps a heading and everything that belongs with it. Three sections make three clear parts, like About, What we do and Join us. One CSS rule can style every section at once.' },
    { emoji: '🎯', title: 'One style for the whole page', body: 'Pick two or three colours and one font, and use them everywhere. Matching colours and fonts make a page look calm and professional. Using too many different colours makes a page feel messy.' },
    { emoji: '✅', title: 'Check before you share', body: 'Before anyone sees your page, check that every picture has alt text and a credit. Click every link to make sure it works. Make sure there are no personal details anywhere.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Three sections, one page',
      lang: 'html',
      code: '<h1>Stargazers Club</h1>\n<section>\n  <h2>About us</h2>\n  <p>We love the night sky.</p>\n</section>\n<section>\n  <h2>What we do</h2>\n  <ul><li>Spot planets</li></ul>\n</section>\n<section>\n  <h2>Join us</h2>\n  <p>Ask your teacher!</p>\n</section>',
      output: 'Preview: a title and three clear parts, each with its own heading.',
      say: ['Each section tag holds one heading and the content that belongs with it.', 'Three sections give your page three clear parts that are easy to read.'],
    },
    {
      kind: 'code',
      heading: 'One rule styles every section',
      lang: 'css',
      code: 'section {\n  padding: 16px;\n  border: 2px solid skyblue;\n  margin: 16px 0;\n}',
      output: 'Preview: all three sections become neat framed boxes with space between them.',
      say: ['This one rule picks every section on the page.', 'Change the border colour here, and all three boxes change together.'],
    },
    {
      kind: 'steps',
      heading: 'Plan, build, check, share',
      tool: 'Kitabash Web Lab',
      steps: ['Sketch the page: title plus three sections', 'Build the HTML first, with no styles', 'Add one style tag with your colours and font', 'Check: alt text, credits, links, no personal details', 'Press Check, then submit with your reflection'],
      say: ['First sketch your page, then build the HTML without any styles.', 'Next add your colours and font in one style tag.', 'Finally run the safety checklist, press Check, and submit with your reflection.'],
    },
    {
      kind: 'recap',
      heading: 'Ready-to-share checklist',
      points: ['Every picture has alt text', 'Every picture has a credit', 'Every link works', 'No full name, school, address or phone', 'Colours are easy to read'],
      say: ['Here is the checklist real web teams use before a page goes live.', 'If any line is not ticked, fix it before you share.'],
    },
  ],
  build: {
    title: 'Build along: the three-section skeleton',
    intro: 'Start from a skeleton so your project has a strong shape, then make it your own.',
    steps: [
      { title: 'Sketch it', text: 'On paper, draw your title and three boxes. Write the heading for each section.' },
      { title: 'Type the skeleton', text: 'Type an h1 and three <section> blocks, each with an h2 and a paragraph.' },
      { title: 'Fill each section', text: 'Add a list to one section, a picture with alt text and credit to another, and a link to the third.' },
      { title: 'Style it once', text: 'Add a style tag with body, h1 and section rules. Use two or three colours and one font.', tip: 'Dark text on a light background, or light text on a dark background. Never yellow on white!' },
      { title: 'Run the checklist', text: 'Go through the ready-to-share checklist, then press Check.' },
    ],
  },
  acts: [
    {
      web: 'Warm-up: this page has only one section. Add two more <section> blocks so the page has three, each with its own h2 heading.',
      title: 'Web Lab: three-section skeleton',
      starter: '<h1>Our Club Page</h1>\n\n<section>\n  <h2>About us</h2>\n  <p>We are the Green Thumbs gardening club.</p>\n</section>\n',
      goals: [
        ['Has three sections', { t: 'tag', tags: ['section'], min: 3, msg: 'Add sections until there are three <section> blocks.' }],
        ['Each section has a heading', { t: 'tag', tags: ['h2'], min: 3, msg: 'Give every section an <h2> heading.' }],
        ['Has words in the sections', { t: 'text', min: 100, msg: 'Write a sentence or two in each section.' }],
      ],
      solution: '<h1>Our Club Page</h1>\n\n<section>\n  <h2>About us</h2>\n  <p>We are the Green Thumbs gardening club.</p>\n</section>\n\n<section>\n  <h2>What we do</h2>\n  <p>We grow tulsi, tomatoes and marigolds in the school garden.</p>\n</section>\n\n<section>\n  <h2>Join us</h2>\n  <p>Ask your class teacher how to join.</p>\n</section>\n',
      explain: 'A strong skeleton makes the rest of the project easy: you just fill in each box.',
      hints: ['Copy the whole section block from <section> to </section>, then paste it twice.', 'Change the h2 words in each copy.'],
    },
    {
      code: '<style>\n  section { border: 2px solid green; }\n</style>\n<section><h2>About</h2></section>\n<section><h2>Events</h2></section>\n<section><h2>Join</h2></section>',
      lang: 'html',
      ask: 'How many green boxes will you see?',
      options: ['Three: every section gets a border', 'One: only the first section', 'None: borders need padding first', 'Six: one per tag'],
      answer: 0,
      why: 'The selector section picks every section on the page, so one rule draws three borders.',
      title: 'Predict the boxes',
    },
    {
      order: 'Put the project steps in the order a web designer would follow',
      steps: ['Sketch a wireframe on paper', 'Build the HTML sections', 'Add colours and fonts with CSS', 'Check alt text, credits, links and privacy', 'Ask a friend to test it and improve one thing'],
      why: 'Plan first, then structure, then style, then check, then test with a real person.',
      title: 'Order it: the designer’s workflow',
    },
    {
      web: 'Module project: build a fan page (a team, a hobby, a book series, a festival) OR a page for a school club. It needs a title, three sections, a list, a picture with alt text and a credit, a link, and one style tag with your colours and font.',
      title: 'Project: my fan or club page',
      mode: 'project',
      starter: L4_SKELETON,
      goals: [
        ['Has a page title', { t: 'tag', tags: ['h1'], msg: 'Add an <h1> title.' }],
        ['Has three section headings', { t: 'tag', tags: ['h2'], min: 3, msg: 'Use three <h2> section headings.' }],
        ['Has a list', { t: 'tag', tags: ['ul', 'ol'], msg: 'Add a bulleted or numbered list.' }],
        ['Has a picture with alt text', { t: 'source', has: ['<img', 'alt="'], msg: 'Add an <img> with alt="…".' }],
        ['Has a link', { t: 'tag', tags: ['a'], msg: 'Add a link with <a href="…">.' }],
        ['Is styled with CSS', { t: 'css', props: ['color', 'background-color', 'font-family', 'padding'], msg: 'Use color, background-color, font-family and padding.' }],
        ['Has plenty to read', { t: 'text', min: 300, msg: 'Write more in your sections.' }],
      ],
      solution: L4_FANPAGE,
      requirements: ['An h1 title and three sections, each with an h2', 'At least one list', 'At least one picture with alt text and a credit line', 'At least one working link', 'One style tag with two or three colours and one font', 'No personal details: use a club name or nickname'],
      reflection: 'What did you change after testing your page with the checklist or a friend? What would you add with one more hour?',
      minWords: 25,
      explain: 'You planned, built, styled and checked a full web page. That is exactly how real web designers work.',
      hints: ['Fill one section at a time and look at the preview after each one.', 'If a section looks empty, add a list or a picture.'],
    },
    {
      sort: 'Ready to share, or fix it first?',
      buckets: ['Ready to share', 'Fix it first'],
      items: [
        ['A picture with alt text and a credit line', 0],
        ['A link that opens the right page', 0],
        ['“Made by the Stargazers Club”', 0],
        ['Dark text on a light background', 0],
        ['A picture with no alt text', 1],
        ['“Call me on 98xxxxxxxx to join”', 1],
        ['Yellow text on a white background', 1],
        ['A photo copied from a website with no credit', 1],
      ],
      why: 'Pages are ready when everyone can read them, every picture is described and credited, and nothing personal is shared.',
      phase: 'probe',
      hint: 'Think about readers who cannot see pictures, and about strangers reading the page.',
    },
  ],
  teacher: {
    explain: 'Today learners pull together everything from Module 1 into one page. They plan with a wireframe, build the HTML in three sections, style the page once with a style tag, and run a ready-to-share checklist. The section tag groups a heading with its content, and one CSS rule can style all sections. Coach them to finish a working version first, then improve.',
    analogy: 'Building a web page is like making a school magazine: sketch the layout, write the articles, choose the colours, then proofread before printing.',
    vocab: [
      ['wireframe', 'A quick sketch of a page’s layout made before coding.'],
      ['section', 'A tag that groups a heading with its content.'],
      ['consistent', 'Using the same colours and fonts everywhere.'],
      ['credit', 'A line saying who made a picture.'],
      ['feedback', 'Kind, specific comments that help improve work.'],
    ],
    demo: L4_DEMO,
    unplugged: 'Wireframe Race (5 min game): in 3 minutes, everyone sketches a fan page on paper with a title and three labelled boxes. Hold sketches up to the camera. The teacher picks three to praise for clear labels, then learners swap one idea with a partner.',
    prompts: [
      ['Why sketch first?', 'You know what to build, so coding is faster and the page has a clear shape.'],
      ['What does the section tag do?', 'It groups a heading with the content that belongs to it.'],
      ['How can one rule style three boxes?', 'The selector section picks every section on the page.'],
      ['What must every picture have?', 'Alt text and a credit line.'],
      ['What should never be on the page?', 'Full names, school, address, phone number or private photos.'],
    ],
    support: 'Give learners the skeleton starter and a list of ideas for each section. Accept a page with two complete sections and a third started, then help them finish after class.',
    stretch: 'Add a nav bar at the top with three links, rounded corners with border-radius, and a footer. Try hover colours with a:hover.',
    mis: [
      ['Styling first, content later', 'Build the content first, then style it, or you spend the lesson choosing colours.'],
      ['More colours make a better page', 'Two or three colours used consistently look more professional.'],
      ['If it passes Check, it is perfect', 'Check finds the basics. A real person testing it finds what is confusing.'],
      ['A phone number is fine for “Join us”', 'Never share contact details. Say “ask your teacher” instead.'],
    ],
    successCriteria: ['I can plan a page with a wireframe.', 'I can build a page with three sections.', 'I can style a whole page with one style tag.', 'I can check a page is safe and ready to share.'],
    homework: 'Show your fan or club page to someone at home. Ask them for two stars and a wish, and make one improvement before next class.',
    exit: 'Name two things you must check before you share a web page.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Wireframe Race', doing: 'Everyone sketches a fan or club page in 3 minutes; share sketches to camera and praise clear labels.' },
      { minutes: 5, stage: 'Hook, video and brief', doing: 'Show the FAN PAGE hook and play the project video. Read the rubric together; thumbs poll on which topic each learner picks.' },
      { minutes: 5, stage: 'Demo and skeleton', doing: 'Run the demo, then learners do “three-section skeleton” and Predict the boxes. Quick quiz on the designer’s workflow order.' },
      { minutes: 25, stage: 'Build in breakout rooms', doing: 'Learners build their fan or club page. Halfway check-in (minute 12): everyone has three sections in the preview. Teacher visits each room.' },
      { minutes: 8, stage: 'Peer test: two stars and a wish', doing: 'Pairs swap screens and test with the ready-to-share checklist, then type two stars and a wish in the chat. Everyone fixes one thing.' },
      { minutes: 5, stage: 'Probe and submit', doing: 'Ready to share, or fix it first? sort. Write the reflection and submit.' },
      { minutes: 7, stage: 'Show-and-tell and wrap-up', doing: 'Three learners present their page in one minute each. Exit ticket: two things to check before sharing.' },
    ],
  },
  project: {
    title: 'My fan or club page',
    brief: 'Build a three-section web page about something you are a fan of, or for a school club, styled with your own colours and font and checked so it is safe to share.',
    requirements: ['An h1 title and three sections with h2 headings', 'At least one list', 'A picture with alt text and a credit line', 'A working link', 'One style tag with colours, a font and padding', 'No personal details anywhere on the page'],
    milestones: ['Wireframe sketched with a title and three labelled sections', 'HTML for all three sections typed and showing in the preview', 'Style tag added with colours, a font and framed sections', 'Ready-to-share checklist passed and a partner has tested it'],
    rubric: [
      { criterion: 'Structure (HTML)', levels: ['Fewer than two sections; tags left open', 'Two or three sections; some headings missing', 'Three sections with h2 headings, a list, a picture and a link', 'Clear, well-organised sections with extra elements used well'] },
      { criterion: 'Style (CSS)', levels: ['No CSS or hard to read', 'Some colours, but not consistent', 'Consistent colours and font, framed sections, easy to read', 'A polished design with a clear colour scheme and good spacing'] },
      { criterion: 'Content', levels: ['Very little text', 'Some text, mostly short', 'Interesting text in every section about the topic', 'Engaging, accurate writing that makes visitors want to read more'] },
      { criterion: 'Safe and responsible', levels: ['Personal details shared or pictures uncredited', 'Some alt text or credits missing', 'All pictures have alt text and credits; no personal details', 'Helpful alt text, credits and links that all work; explains their choices'] },
    ],
    extensions: ['Add a nav bar of links at the top of the page', 'Use border-radius and a:hover to give the page a modern feel', 'Add a footer with “Made by” and the date'],
  },
  files: [
    { name: 'l04-three-section-skeleton.html', title: 'Build-along: three-section skeleton', audience: 'student', content: L4_SKELETON },
    demoFile(4, 'Fan or club page project', L4_DEMO, [
      ['A learner spent 20 minutes choosing colours.', 'Ask them to write the content first with no styles, then give them 5 minutes for colours.'],
      ['Sections look stuck together.', 'Add margin to the section rule, like margin: 16px 0;.'],
      ['The page has a phone number to “join”.', 'Replace it with “Ask your teacher to join” and explain why.'],
    ]),
  ],
});
