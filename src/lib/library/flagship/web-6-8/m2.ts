// Web Creators · Level 1 (Gr 6–8) · Module 2 — Layout and interaction. Capstone: a one-page website.
import { lesson } from '../kit.ts';
import { demoFile } from './m1.ts';

const IMG = (text: string) => `https://placehold.co/240x150?text=${text}`;

// ─────────────────────────────────────────────────────────────
// Lesson 5 · Classes, flexbox and cards
// ─────────────────────────────────────────────────────────────
const L5_BUILD = `<style>
  body { font-family: Arial, sans-serif; background-color: #fdf6ec; }
  .row {
    display: flex;
    gap: 16px;
  }
  .card {
    background-color: white;
    border: 2px solid #f39c12;
    border-radius: 12px;
    padding: 16px;
  }
</style>

<h1>Fruits of summer</h1>
<div class="row">
  <div class="card">🥭 Mango</div>
  <div class="card">🍉 Watermelon</div>
  <div class="card">🍈 Jackfruit</div>
</div>`;

const L5_GALLERY = `<!-- My top 5 Indian festivals -->
<style>
  body {
    font-family: Verdana, sans-serif;
    background-color: #fff8f0;
    color: #2c3e50;
  }
  h1 {
    text-align: center;
    color: #c0392b;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  .card {
    width: 180px;
    background-color: white;
    border: 2px solid #e67e22;
    border-radius: 12px;
    padding: 14px;
    text-align: center;
  }
  .rank {
    font-size: 28px;
    color: #e67e22;
  }
</style>

<h1>My Top 5 Festivals</h1>
<div class="gallery">
  <div class="card">
    <p class="rank">#1</p>
    <h3>🪔 Diwali</h3>
    <p>Lamps, rangoli and sweets with the whole family.</p>
  </div>
  <div class="card">
    <p class="rank">#2</p>
    <h3>🎨 Holi</h3>
    <p>Colours everywhere and gujiya to eat.</p>
  </div>
  <div class="card">
    <p class="rank">#3</p>
    <h3>🪁 Makar Sankranti</h3>
    <p>Flying kites from the rooftop all day.</p>
  </div>
  <div class="card">
    <p class="rank">#4</p>
    <h3>🌙 Eid</h3>
    <p>New clothes, sheer khurma and visiting friends.</p>
  </div>
  <div class="card">
    <p class="rank">#5</p>
    <h3>🎄 Christmas</h3>
    <p>Plum cake, carols and a star on the door.</p>
  </div>
</div>`;

const L5_DEMO =
  '1) Type three <div> boxes with emoji fruits and show they stack on top of each other. 2) Add class="card" to each div and write a .card rule with padding, a border and border-radius. Stress the dot in front of card in CSS, and no dot in the HTML. 3) Wrap the three cards in <div class="row">. Add .row { display: flex; } and watch them jump into a line. 4) Add gap: 16px; to .row and show the space appear between the cards. 5) Add two more cards and flex-wrap: wrap; then shrink the preview to show cards moving to a new line. 6) Move display: flex onto .card by mistake and show it does not line up the cards — flex goes on the parent.';

export const W5 = lesson(5, {
  title: 'Classes, flexbox and cards',
  objective: 'Use class selectors and flexbox to lay out a row of styled cards with gaps between them.',
  concept: 'classes, flexbox, cards',
  minutes: 60,
  hook: ['code', '.row { display: flex; gap: 16px; }', '🥭  🍉  🍈   side by side!'],
  intro: 'Today you will make boxes line up side by side, like the cards on your favourite apps.',
  cards: [
    { emoji: '🏷️', title: 'Classes name a group', body: 'A class is a name you give to some elements, like class equals card. In CSS, a dot in front of the name picks every element with that class. Now you can style some paragraphs without changing all of them.' },
    { emoji: '📦', title: 'A div is an empty box', body: 'The div tag is a plain box with no special meaning. We use it to group things together so we can style or move them as one. Cards and rows are usually divs with a class.' },
    { emoji: '↔️', title: 'Flexbox lines things up', body: 'Put display flex on a parent box, and its children line up in a row. The gap property adds equal space between the boxes. Flex-wrap lets cards move to a new line when the screen is narrow.' },
    { emoji: '🃏', title: 'Make it look like a card', body: 'A card is a box with padding, a border and rounded corners from border-radius. A white card on a coloured background really stands out. Apps like video and shopping sites use cards everywhere.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A class picks a group',
      lang: 'html',
      code: '<style>\n  .big { font-size: 32px; }\n</style>\n<p class="big">Cricket</p>\n<p>Football</p>\n<p class="big">Kabaddi</p>',
      output: 'Preview: Cricket and Kabaddi are large. Football stays normal size.',
      say: ['Only the paragraphs with class big get the large font.', 'In CSS we write a dot before the class name, but in HTML there is no dot.'],
    },
    {
      kind: 'code',
      heading: 'Boxes stack by default',
      lang: 'html',
      code: '<div class="card">🥭 Mango</div>\n<div class="card">🍉 Watermelon</div>\n<div class="card">🍈 Jackfruit</div>',
      output: 'Preview: three boxes, one on top of the other.',
      say: ['Normally every div starts on a new line, so the boxes stack like plates.', 'To put them side by side, we need flexbox.'],
    },
    {
      kind: 'code',
      heading: 'display: flex on the parent',
      lang: 'css',
      code: '.row {\n  display: flex;\n  gap: 16px;\n}',
      output: 'Preview: the three fruit cards jump into one row with equal space between them.',
      say: ['We wrap the cards in a row div, then give the row display flex.', 'The children line up side by side, and gap adds the space between them.'],
    },
    {
      kind: 'code',
      heading: 'Style each card',
      lang: 'css',
      code: '.card {\n  background-color: white;\n  border: 2px solid orange;\n  border-radius: 12px;\n  padding: 16px;\n}',
      output: 'Preview: neat white cards with orange rounded borders.',
      say: ['Border radius rounds the corners, and padding gives the words room to breathe.', 'Now it looks like a real app.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'html',
      code: '<style>\n  card { border: 2px solid red; }\n</style>\n<div class=".card">Mango</div>',
      output: 'Preview: no border at all!',
      say: ['Two small mistakes are hiding in this code. Can you find them?', 'The CSS needs a dot before card, and the HTML class should not have a dot.'],
    },
  ],
  build: {
    title: 'Build along: a row of fruit cards',
    intro: 'Type along to turn three plain boxes into a row of app-style cards.',
    steps: [
      { title: 'Three boxes', text: 'Type three <div class="card"> lines with an emoji and a fruit name in each.' },
      { title: 'Style the cards', text: 'In a style tag, add .card with background-color, border, border-radius and padding.', tip: 'Dot in the CSS, no dot in the HTML.' },
      { title: 'Wrap them in a row', text: 'Put <div class="row"> before the cards and </div> after them.' },
      { title: 'Turn on flexbox', text: 'Add .row { display: flex; gap: 16px; } and watch the cards line up.' },
      { title: 'Make it yours', text: 'Swap the fruits for your own favourites and choose new colours. Save your file.' },
    ],
  },
  acts: [
    {
      web: 'These three cards are stacked on top of each other. Make them line up side by side with a gap between them by using flexbox on the row.',
      title: 'Web Lab: line up the cards',
      starter: '<style>\n  .card {\n    border: 2px solid teal;\n    padding: 12px;\n  }\n</style>\n\n<div class="row">\n  <div class="card">🏏 Cricket</div>\n  <div class="card">🏸 Badminton</div>\n  <div class="card">♟️ Chess</div>\n</div>\n',
      goals: [
        ['Uses flexbox', { t: 'css', props: ['display'], msg: 'Add display: flex; to the .row rule.' }],
        ['Adds a gap', { t: 'css', props: ['gap'], msg: 'Add gap to put space between the cards.' }],
        ['Styles the row with a class selector', { t: 'source', has: ['.row'], msg: 'Write a CSS rule that starts with .row' }],
      ],
      solution: '<style>\n  .row {\n    display: flex;\n    gap: 16px;\n  }\n  .card {\n    border: 2px solid teal;\n    padding: 12px;\n  }\n</style>\n\n<div class="row">\n  <div class="card">🏏 Cricket</div>\n  <div class="card">🏸 Badminton</div>\n  <div class="card">♟️ Chess</div>\n</div>\n',
      explain: 'display: flex goes on the parent, and every child lines up. That one line powers most layouts on the web.',
      hints: ['Add a new rule: .row { }', 'Inside it: display: flex; and gap: 16px;'],
    },
    {
      code: '<style>\n  .star { color: gold; }\n</style>\n<p class="star">Riya</p>\n<p>Kabir</p>\n<p class="star">Meera</p>',
      lang: 'html',
      ask: 'Which names turn gold?',
      options: ['Riya and Meera', 'Only Kabir', 'All three names', 'None, because .star has a dot'],
      answer: 0,
      why: 'The .star selector picks only elements with class="star". Kabir has no class, so he stays the normal colour.',
      title: 'Predict the class',
    },
    {
      match: 'Match each piece of code to what it does',
      pairs: [
        ['class="card"', 'Gives an element a group name in HTML'],
        ['.card { }', 'Styles every element with that class'],
        ['<div>', 'A plain box for grouping things'],
        ['display: flex;', 'Lines up the children side by side'],
        ['gap: 16px;', 'Adds space between flex items'],
        ['border-radius: 12px;', 'Rounds the corners of a box'],
      ],
      why: 'Classes name groups, dots select them, divs hold things, and flex, gap and border-radius do the layout and looks.',
    },
    {
      order: 'Put the steps in order to build a card gallery',
      steps: ['Type a div for each card with class="card"', 'Style .card with padding, border and border-radius', 'Wrap all the cards in a div with class="gallery"', 'Give .gallery display: flex and a gap', 'Add flex-wrap: wrap so cards move down on small screens'],
      why: 'Make the cards, style them, wrap them in a parent, then turn on flex on the parent.',
      title: 'Order it: build a gallery',
    },
    {
      web: 'Project: make a “Top 5” card gallery. Pick a topic: top 5 festivals, snacks, cricketers you admire, games, animals or places in India. Each card needs a heading and a short description. Lay the cards out with flexbox.',
      title: 'Project: my Top 5 card gallery',
      mode: 'project',
      starter: '<style>\n  .gallery {\n    /* flexbox here */\n  }\n  .card {\n    /* padding, border, border-radius here */\n  }\n</style>\n\n<h1>My Top 5 (topic)</h1>\n<div class="gallery">\n  <div class="card">\n    <h3>#1 (name)</h3>\n    <p>(why it is great)</p>\n  </div>\n</div>\n',
      goals: [
        ['Has five cards with headings', { t: 'tag', tags: ['h2', 'h3'], min: 5, msg: 'Give each of your five cards a heading (h3).' }],
        ['Uses classes', { t: 'source', has: ['class="', '.card'], msg: 'Give your cards class="card" and style .card in CSS.' }],
        ['Uses flexbox with a gap', { t: 'css', props: ['display', 'gap'], msg: 'Give the gallery display: flex; and a gap.' }],
        ['Styles the cards as boxes', { t: 'css', props: ['padding', 'border'], msg: 'Give the cards padding and a border.' }],
        ['Has a description on each card', { t: 'text', min: 200, msg: 'Write a short description on every card.' }],
      ],
      solution: L5_GALLERY,
      requirements: ['A title that says what your Top 5 is about', 'Five cards, each with a heading and a short description', 'Cards styled with a .card class: padding, border and rounded corners', 'A gallery that uses display: flex and gap', 'Emoji or credited placeholder pictures only'],
      reflection: 'How did you decide the order of your Top 5? What happens to your gallery when you add flex-wrap: wrap?',
      explain: 'Card galleries are everywhere: shops, video sites and news apps. You just built one from scratch.',
      hints: ['Finish one card, then copy and paste it four times and change the words.', 'If the cards squash together, add flex-wrap: wrap; and give .card a width like 180px.'],
    },
    {
      mcq: 'Arjun wrote .card { display: flex; } but his five cards still stack on top of each other. What should he change?',
      options: ['Put display: flex on the parent box that holds the cards', 'Add more padding to each card', 'Change the cards from div to p', 'Write display: flex twice'],
      answer: 0,
      why: 'Flexbox lines up the CHILDREN of the box you put it on. It must go on the parent, like .gallery, not on each card.',
      phase: 'probe',
      title: 'New situation: cards still stacking',
      hint: 'Which box holds all the cards?',
    },
  ],
  teacher: {
    explain: 'A class is a group name we add in HTML with class="…" and select in CSS with a dot. A div is a plain box for grouping. Boxes normally stack, but display: flex on a parent puts its children in a row, and gap adds space between them. flex-wrap: wrap moves items to a new line when space runs out. Cards are just divs with padding, a border and rounded corners.',
    analogy: 'Flexbox is like a cricket team lining up for the national anthem: the captain (parent) says “line up!” and the players (children) stand side by side with a gap between each.',
    vocab: [
      ['class', 'A group name given to elements, like class="card".'],
      ['class selector', 'A CSS selector with a dot, like .card.'],
      ['div', 'A plain box used to group elements.'],
      ['flexbox', 'A CSS layout that lines up children in a row or column.'],
      ['gap', 'The space between flex items.'],
      ['parent / child', 'A box that holds other boxes / a box inside another.'],
    ],
    demo: L5_DEMO,
    unplugged: 'Flex Line-up (5 min game): five volunteers are “cards” and the teacher is the parent box. Call “display: flex!” and they stand in a row; “gap: big!” and they spread out; “flex-wrap!” and the row splits onto two lines when it hits the wall. Then call “.red!” and only learners wearing red (the class) wave.',
    prompts: [
      ['How do you select class="card" in CSS?', 'With a dot: .card'],
      ['Where does display: flex go?', 'On the parent box that holds the items.'],
      ['What does gap do?', 'Adds space between the flex items.'],
      ['Why use a class instead of styling all divs?', 'So you can style only some elements, not every div on the page.'],
      ['What makes a box look like a card?', 'Padding, a border, rounded corners and a background colour.'],
    ],
    support: 'Give the build-along code to start the project and ask learners to change only the words and colours. A dot-or-no-dot card: HTML no dot, CSS dot.',
    stretch: 'Use justify-content: center, give cards a hover effect with .card:hover { transform: scale(1.05); }, and add box-shadow.',
    mis: [
      ['Writing class=".card" in HTML', 'No dot in HTML. The dot is only in CSS.'],
      ['Putting display: flex on every card', 'Flex goes on the parent; its children line up.'],
      ['Using margin on every card instead of gap', 'gap on the parent adds even spacing in one line.'],
      ['A class can only be used once', 'Many elements can share a class; that is the point of it.'],
    ],
    successCriteria: ['I can add a class and style it with a dot.', 'I can group elements in a div.', 'I can line up cards with display: flex and gap.', 'I can style a box to look like a card.'],
    homework: 'Make a second Top 5 gallery on a new topic, or add flex-wrap and a hover effect to today’s gallery. Show it to someone at home and ask which card they would put first.',
    exit: 'Write the CSS that puts the children of .row side by side with 20px between them.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Flex Line-up', doing: 'Play Flex Line-up with five volunteer “cards”. Finish with the “.red!” class round.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Poll: “Name an app that uses cards.” Play the video; pause at “Spot the bug” and let learners find both dots.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the demo as written, including the deliberate mistake. Everyone builds the row of fruit cards.' },
      { minutes: 8, stage: 'Challenge and games', doing: 'Web Lab: line up the cards, then Predict the class, the match game and Order it. Quick competition: first correct gallery order wins.' },
      { minutes: 17, stage: 'Project in pairs', doing: 'Breakout rooms: pairs agree on a Top 5 topic and build the gallery. Driver types, navigator checks dots and brackets; swap every 5 minutes.' },
      { minutes: 5, stage: 'Probe', doing: 'New situation: cards still stacking. Ask two learners to explain parent and child in their own words.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Gallery tour: four learners share their Top 5; class reacts with emoji for their own number 1 pick.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Thumbs check on each success criterion. Exit ticket: the .row flex rule.' },
    ],
  },
  files: [
    { name: 'l05-fruit-cards.html', title: 'Build-along: a row of fruit cards', audience: 'student', content: L5_BUILD },
    demoFile(5, 'Classes, flexbox and cards', L5_DEMO, [
      ['The class style does nothing.', 'Check for the dot in CSS (.card) and no dot in HTML (class="card"). Check the spelling matches exactly.'],
      ['Cards still stack.', 'display: flex must be on the parent that holds the cards, and the cards must be inside it.'],
      ['Cards are squashed thin.', 'Add flex-wrap: wrap; to the parent and a width to .card.'],
    ]),
  ],
});

// ─────────────────────────────────────────────────────────────
// Lesson 6 · Forms and buttons
// ─────────────────────────────────────────────────────────────
const L6_BUILD = `<style>
  body { font-family: Arial, sans-serif; }
  label { display: block; margin-top: 12px; }
  input, select { padding: 6px; }
  button { margin-top: 12px; padding: 8px 16px; }
</style>

<h1>Book Club Poll</h1>
<form>
  <label for="book">Which book should we read next?</label>
  <select id="book">
    <option>A mystery story</option>
    <option>A space adventure</option>
    <option>A funny comic</option>
  </select>

  <label for="pages">How many pages can you read in a week?</label>
  <input type="number" id="pages" min="0">

  <button type="button">Vote</button>
</form>`;

const L6_FORM = `<!-- Canteen feedback form (practice only: nothing is sent) -->
<style>
  body {
    font-family: Verdana, sans-serif;
    background-color: #eef7f1;
  }
  form {
    background-color: white;
    border: 2px solid #27ae60;
    border-radius: 12px;
    padding: 20px;
    width: 320px;
  }
  label {
    display: block;
    margin-top: 14px;
    font-weight: bold;
  }
  input, select, textarea {
    padding: 8px;
    border: 1px solid #999999;
    border-radius: 6px;
  }
  button {
    margin-top: 16px;
    padding: 10px 20px;
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 8px;
  }
</style>

<h1>Canteen Feedback</h1>
<p>Help us make lunch better! This is a practice form, so nothing is sent anywhere.</p>
<form>
  <label for="dish">Favourite dish this week</label>
  <select id="dish">
    <option>Rajma chawal</option>
    <option>Idli sambar</option>
    <option>Veg pulao</option>
  </select>

  <label for="stars">Rating out of 5</label>
  <input type="number" id="stars" min="1" max="5">

  <label for="idea">One idea to make lunch better</label>
  <textarea id="idea" placeholder="More fruit on Fridays?"></textarea>

  <label><input type="checkbox" id="more"> I would like more healthy snacks</label>

  <button type="button">Send feedback</button>
</form>`;

const L6_DEMO =
  '1) Type <input type="text"> on its own and show the empty box: ask how a screen-reader user would know what to type. 2) Add <label for="snack">Favourite snack</label> above it and give the input id="snack". Click the label text in the preview and show the cursor jump into the box. 3) Change the type to number, then checkbox, then show radio buttons with the same name. 4) Add a <textarea> and a <select> with three options. 5) Add <button type="button">Send</button> and explain this practice form does not send anything. 6) Change the input id to "snak" so it no longer matches the label, click the label, and show it stops working. Fix it.';

export const W6 = lesson(6, {
  title: 'Forms and buttons',
  objective: 'Build an accessible form with labels, different input types and a button, without collecting personal information.',
  concept: 'forms, labels, inputs',
  minutes: 60,
  hook: ['code', '<button>Send feedback</button>', '[ Send feedback ]  a real button appears'],
  intro: 'Today you will build forms with boxes to type in, menus to choose from and buttons to press.',
  cards: [
    { emoji: '📝', title: 'Forms collect answers', body: 'A form is a group of boxes, menus and buttons that ask the visitor questions. The form tag wraps all of them together. Sign-up pages, quizzes and search bars are all forms.' },
    { emoji: '🔢', title: 'Many kinds of input', body: 'The input tag makes a box, and its type decides what kind. Type text is for words, number is for numbers, and checkbox is a tick box. A textarea is a big box for longer answers, and select makes a drop-down menu.' },
    { emoji: '🏷️', title: 'Every input needs a label', body: 'A label tells people what to type in a box. Its for part must match the input’s id. Then screen readers read the label aloud, and clicking the label jumps into the box.' },
    { emoji: '🔘', title: 'Buttons', body: 'The button tag makes something on the page you can press. Write clear words on it, like Send feedback, not just Click. Next lesson, JavaScript will make our buttons actually do things.' },
    { emoji: '🔒', title: 'Ask only what you need', body: 'Our practice forms in this course send nothing anywhere. Even so, never build a form that asks for phone numbers, addresses, passwords or ID numbers. Real websites need a parent’s and the school’s permission to collect personal details.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A label and an input',
      lang: 'html',
      code: '<label for="snack">Favourite snack</label>\n<input type="text" id="snack">',
      output: 'Preview: the words “Favourite snack” next to a box. Clicking the words puts the cursor in the box.',
      say: ['The label’s for matches the input’s id, so they are joined together.', 'Click the words and the cursor jumps into the box, which helps everyone.'],
    },
    {
      kind: 'code',
      heading: 'Different input types',
      lang: 'html',
      code: '<input type="number" id="age-of-pet">\n<input type="checkbox" id="veg">\n<textarea id="idea"></textarea>\n<select id="day">\n  <option>Monday</option>\n  <option>Friday</option>\n</select>',
      output: 'Preview: a number box with up and down arrows, a tick box, a big text box and a drop-down menu.',
      say: ['Changing the type changes the kind of box the browser draws.', 'A textarea is for long answers, and select makes a drop-down menu of options.'],
    },
    {
      kind: 'code',
      heading: 'A button',
      lang: 'html',
      code: '<button type="button">Send feedback</button>',
      output: 'Preview: a grey button that says “Send feedback”. It can be pressed, but nothing happens yet.',
      say: ['The button tag makes something you can press.', 'For now it does nothing, and next lesson JavaScript will bring it to life.'],
    },
    {
      kind: 'code',
      heading: 'Style the form',
      lang: 'css',
      code: 'label { display: block; margin-top: 12px; }\ninput { padding: 8px; border-radius: 6px; }\nbutton { background-color: green; color: white; padding: 10px; }',
      output: 'Preview: each label sits on its own line, boxes are roomy and the button is bright green.',
      say: ['Display block puts each label on its own line, so the form is easy to follow.', 'Padding makes boxes bigger and easier to tap on a phone.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'html',
      code: '<label for="colour">Favourite colour</label>\n<input type="text" id="color">',
      output: 'Preview: it looks fine, but clicking the label does nothing and screen readers do not link them.',
      say: ['Look closely at the spelling of for and id.', 'One says colour and the other says color, so they do not match and are not joined.'],
    },
  ],
  build: {
    title: 'Build along: a book club poll',
    intro: 'Type along to build a small poll with a drop-down menu, a number box and a button.',
    steps: [
      { title: 'Start the form', text: 'Type an h1 “Book Club Poll”, then <form> and </form>.' },
      { title: 'A drop-down menu', text: 'Inside the form, add a label for="book" and a <select id="book"> with three <option> lines.' },
      { title: 'A number box', text: 'Add a label for="pages" and <input type="number" id="pages">.', tip: 'Read the for and the id out loud. They must match exactly.' },
      { title: 'A button', text: 'Add <button type="button">Vote</button> at the end of the form.' },
      { title: 'Style it', text: 'Add CSS so each label is display: block, and give inputs and the button padding. Click each label to test it.' },
    ],
  },
  acts: [
    {
      web: 'These two boxes have no labels, so nobody knows what to type, and there is no button. Add a label for each box (matching for and id) and a button.',
      title: 'Web Lab: label it!',
      starter: '<h1>Join the Art Club</h1>\n<form>\n  <input type="text" id="art">\n  <input type="number" id="hours">\n</form>\n',
      goals: [
        ['Every box has a label', { t: 'tag', tags: ['label'], min: 2, msg: 'Add a <label> for each of the two boxes.' }],
        ['Labels are joined to their boxes', { t: 'source', has: ['for="art"', 'for="hours"'], msg: 'Give the labels for="art" and for="hours" to match the ids.' }],
        ['Has a button', { t: 'tag', tags: ['button'], msg: 'Add a <button> to the form.' }],
      ],
      solution: '<h1>Join the Art Club</h1>\n<form>\n  <label for="art">Favourite kind of art</label>\n  <input type="text" id="art">\n  <label for="hours">Hours of art per week</label>\n  <input type="number" id="hours">\n  <button type="button">Join</button>\n</form>\n',
      explain: 'Labels make forms usable for everyone, including people who use screen readers. Always join them with for and id.',
      hints: ['A label looks like <label for="art">Favourite kind of art</label>.', 'Put each label just above its input.'],
    },
    {
      code: '<input type="checkbox" id="mango">\n<label for="mango">I love mangoes</label>',
      lang: 'html',
      ask: 'What happens when you click the words “I love mangoes”?',
      options: ['The tick box gets ticked', 'Nothing, you must click the box itself', 'The words turn blue like a link', 'The form is sent'],
      answer: 0,
      why: 'The label is joined to the checkbox because for="mango" matches id="mango", so clicking the words ticks the box.',
      title: 'Predict the click',
    },
    {
      match: 'Match each form tag to what it makes',
      pairs: [
        ['<input type="text">', 'A box for a short answer in words'],
        ['<input type="number">', 'A box for numbers only'],
        ['<input type="checkbox">', 'A tick box'],
        ['<textarea>', 'A big box for a long answer'],
        ['<select>', 'A drop-down menu'],
        ['<label>', 'Words that say what a box is for'],
      ],
      why: 'The type of an input decides the box; textarea, select and label each have their own job.',
    },
    {
      order: 'Put the steps in order to add one accessible question to a form',
      steps: ['Decide the question and the kind of answer', 'Write a label with for="…"', 'Write the input with a matching id', 'Click the label in the preview to test it', 'Ask: do I really need this information?'],
      why: 'Choose the question, join a label to an input with matching for and id, test it, and only keep questions you truly need.',
      title: 'Order it: one accessible question',
    },
    {
      web: 'Project: build a feedback form for your school canteen, a school trip or a class event. Include at least three questions with labels, using at least two different kinds of input, and a styled button. This is a practice form: it sends nothing, and it must not ask for personal details.',
      title: 'Project: my feedback form',
      mode: 'project',
      starter: '<!-- Feedback form (practice only: nothing is sent) -->\n<style>\n  label { display: block; margin-top: 12px; }\n</style>\n\n<h1>(Feedback for …)</h1>\n<form>\n  <label for="q1">(Question 1)</label>\n  <input type="text" id="q1">\n\n  <button type="button">Send feedback</button>\n</form>\n',
      goals: [
        ['Has a form', { t: 'tag', tags: ['form'], msg: 'Wrap your questions in <form> … </form>.' }],
        ['Has at least three labels', { t: 'tag', tags: ['label'], min: 3, msg: 'Ask at least three questions, each with a <label>.' }],
        ['Has at least three answer boxes', { t: 'tag', tags: ['input', 'select', 'textarea'], min: 3, msg: 'Add at least three inputs, selects or textareas.' }],
        ['Labels are joined to boxes', { t: 'source', has: ['for="', 'id="'], msg: 'Join labels and boxes with matching for and id.' }],
        ['Has a button', { t: 'tag', tags: ['button'], msg: 'Add a <button>.' }],
        ['The form is styled', { t: 'css', props: ['padding', 'border'], msg: 'Style your form or button with padding and a border.' }],
      ],
      solution: L6_FORM,
      requirements: ['A title and one line explaining what the feedback is for', 'At least three questions, each with a joined label', 'At least two different kinds of input (number, select, textarea, checkbox)', 'A clearly worded, styled button', 'No questions about names, phone numbers, addresses, passwords or ID numbers'],
      reflection: 'Which question did you decide NOT to ask, and why? How did you test that your labels work?',
      explain: 'You built a usable, accessible form that respects privacy. Good web makers only ask for what they really need.',
      hints: ['Use a select for “favourite dish” and a number box for a rating out of 5.', 'Give every box a different id, like dish, stars and idea.'],
    },
    {
      sort: 'Should a school feedback form ask this?',
      buckets: ['Fine to ask', 'Do not ask'],
      items: [
        ['Which dish did you like most?', 0],
        ['Rate the food out of 5', 0],
        ['One idea to make lunch better', 0],
        ['Would you like more fruit? (tick box)', 0],
        ['Your phone number', 1],
        ['Your home address', 1],
        ['Your email password', 1],
        ['Your Aadhaar number', 1],
      ],
      why: 'Feedback forms only need opinions and ideas. Personal details and passwords should never be collected by a practice form.',
      phase: 'probe',
      hint: 'Does the canteen need this to make lunch better?',
    },
  ],
  teacher: {
    explain: 'Forms collect answers. The form tag groups the questions; input makes boxes whose type decides the kind (text, number, checkbox, radio); textarea is for long answers and select for drop-downs. Every input needs a label, joined by matching for and id, so screen readers announce it and clicking the label focuses the box. Buttons need clear words. Our forms send nothing, and we never ask for personal details.',
    analogy: 'A form is like a printed survey sheet: each question (label) sits next to its answer space (input), and the button is handing the sheet in.',
    vocab: [
      ['form', 'A group of questions, boxes and buttons.'],
      ['input', 'A box the visitor types in or ticks; its type decides which kind.'],
      ['label', 'Words that say what a box is for, joined with for and id.'],
      ['id', 'A unique name for one element on the page.'],
      ['accessibility', 'Making pages work for everyone, including people using screen readers.'],
      ['privacy', 'Keeping personal information safe and only asking for what you need.'],
    ],
    demo: L6_DEMO,
    unplugged: 'Form Detective (5 min game): show four paper “forms” from a pretend website. Learners vote with thumbs: is each question fine to ask or not? (Favourite colour, rating, password, home address.) Then play “label match”: call out an id like “snack” and learners race to write the matching label on paper.',
    prompts: [
      ['What joins a label to an input?', 'The label’s for matches the input’s id.'],
      ['Why do labels matter?', 'Screen readers read them aloud and clicking them focuses the box.'],
      ['Which tag makes a drop-down menu?', 'select, with option tags inside.'],
      ['Does our practice form send data?', 'No. It is for practice; nothing is sent anywhere.'],
      ['Name something a school form should never ask.', 'Phone number, address, password, Aadhaar or other ID numbers.'],
    ],
    support: 'Give learners the build-along to adapt. Use a for/id checking card: read both out loud and make sure they are spelt the same.',
    stretch: 'Add radio buttons with a shared name, placeholder hints, the required attribute, and style the button with a hover colour.',
    mis: [
      ['A placeholder is the same as a label', 'Placeholders disappear when you type and are not always read aloud; always add a label.'],
      ['for and id can be spelt slightly differently', 'They must match exactly, letter for letter.'],
      ['The button sends my answers somewhere', 'Our practice form sends nothing. Real sending needs a server and permission.'],
      ['It is fine to ask for a phone number “just in case”', 'Only ask for what you truly need. Personal details stay private.'],
    ],
    successCriteria: ['I can build a form with different input types.', 'I can join every label to its input with for and id.', 'I can add a clear, styled button.', 'I can choose questions that respect privacy.'],
    homework: 'Build a short “family movie night” poll with a select menu of three films, a number box for snack count and a button. Test every label by clicking it.',
    exit: 'Write a label and a number input for “How many hours do you sleep?” with matching for and id.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Form Detective', doing: 'Thumbs vote on which questions a form should ask, then the label match race.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook button. Poll: “Where have you filled in a form online?” Play the video and pause at “Spot the bug” to find colour vs color.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the demo, including clicking the label. Build the book club poll together.' },
      { minutes: 8, stage: 'Challenge and games', doing: 'Web Lab: label it!, then Predict the click, the match game and Order it. Quick competition: first three to finish the match game.' },
      { minutes: 17, stage: 'Project in pairs', doing: 'Breakout rooms: pairs design and build a feedback form. Navigator checks every for and id match and that no question asks for personal details.' },
      { minutes: 5, stage: 'Probe', doing: 'Should a school feedback form ask this? sort. Discuss why passwords and ID numbers are never collected.' },
      { minutes: 6, stage: 'Show-and-tell: test my form', doing: 'Two learners share their form; the class tells them which label to click to test it. Two stars and a wish in the chat.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: the sleep-hours label and input.' },
    ],
  },
  files: [
    { name: 'l06-book-club-poll.html', title: 'Build-along: book club poll', audience: 'student', content: L6_BUILD },
    demoFile(6, 'Forms and buttons', L6_DEMO, [
      ['Clicking the label does nothing.', 'The for and id do not match. Read both aloud letter by letter.'],
      ['Everything is on one line.', 'Add label { display: block; } in the CSS.'],
      ['A learner adds a phone number field.', 'Use it as a teaching moment: does the form really need it? Replace it with an opinion question.'],
    ]),
  ],
});

// ─────────────────────────────────────────────────────────────
// Lesson 7 · First JavaScript
// ─────────────────────────────────────────────────────────────
const L7_BUILD = `<h1>Click counter</h1>
<p id="count">Clicks: 0</p>
<button id="btn">Click me</button>

<script>
  let clicks = 0;
  const btn = document.getElementById("btn");
  const count = document.getElementById("count");

  btn.addEventListener("click", function () {
    clicks = clicks + 1;
    count.textContent = "Clicks: " + clicks;
  });
</script>`;

const L7_SCORE = `<!-- Cricket score counter -->
<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #e8f6ef;
  }
  #score {
    font-size: 48px;
    color: #1e8449;
  }
  button {
    font-size: 20px;
    padding: 12px 18px;
    margin: 6px;
    border-radius: 10px;
    border: 2px solid #1e8449;
    background-color: white;
  }
</style>

<h1>🏏 Cricket Score Counter</h1>
<p id="score">0 / 0</p>
<p id="message">Let’s play!</p>
<button id="one">+1 run</button>
<button id="four">FOUR!</button>
<button id="six">SIX!</button>
<button id="out">Wicket</button>

<script>
  let runs = 0;
  let wickets = 0;
  const score = document.getElementById("score");
  const message = document.getElementById("message");

  function show(text) {
    score.textContent = runs + " / " + wickets;
    message.textContent = text;
  }

  document.getElementById("one").addEventListener("click", function () {
    runs = runs + 1;
    show("Quick single!");
  });
  document.getElementById("four").addEventListener("click", function () {
    runs = runs + 4;
    show("Cracking four!");
  });
  document.getElementById("six").addEventListener("click", function () {
    runs = runs + 6;
    show("Into the stands!");
  });
  document.getElementById("out").addEventListener("click", function () {
    wickets = wickets + 1;
    show("Howzat! Out!");
    document.body.style.backgroundColor = "#fdecea";
  });
</script>`;

const L7_DEMO =
  '1) Open the Web Lab and explain: the live preview runs JavaScript, so today we click our buttons right in the preview. 2) Type a paragraph with id="count" and a button with id="btn". Click the button in the preview: nothing happens yet. 3) Add a <script> tag at the bottom. Type const btn = document.getElementById("btn"); and explain it finds the button by its id. 4) Type btn.addEventListener("click", function () { … }); and inside it count.textContent = "Clicked!"; Click the button in the preview and celebrate. 5) Add let clicks = 0; and clicks = clicks + 1; then show "Clicks: " + clicks. Click five times. 6) Misspell the id as "bnt" and click again: nothing happens. Ask learners to hunt for the typo by comparing the id in the HTML with the one in getElementById. Fix it together. Optional: show the finished page saved as an .html file and opened in Chrome or Edge, so learners know they can play it at home.';

export const W7 = lesson(7, {
  title: 'First JavaScript',
  objective: 'Use JavaScript to make a button change text and colour, and keep count with a variable.',
  concept: 'script, events, variables',
  minutes: 60,
  hook: ['code', 'button.addEventListener("click", ...)\nscore = score + 6;', 'Score: 6 → Score: 12 → Score: 18'],
  intro: 'Today your web page wakes up. You will write JavaScript so buttons react when you click them.',
  cards: [
    { emoji: '⚡', title: 'JavaScript makes pages do things', body: 'HTML builds the page and CSS styles it. JavaScript makes it react, like changing words when you click a button. Every game and app on the web uses it.' },
    { emoji: '📜', title: 'The script tag', body: 'JavaScript goes inside a script tag, usually at the very bottom of the page. The browser builds the page first, then runs the script. In the Web Lab, the live preview runs your script, so you can click your buttons right away.' },
    { emoji: '🔍', title: 'Find it by its id', body: 'Give an element an id, like id equals score. In JavaScript, document dot getElementById finds that element. Then you can change its words with textContent, or its colour with style.' },
    { emoji: '👂', title: 'Listen for a click', body: 'The addEventListener command tells a button to listen for a click. Inside it, you write what should happen each time it is clicked. That code runs again every single time you click.' },
    { emoji: '🔢', title: 'Variables keep count', body: 'A variable is a named box that stores a value, like let score equals zero. Score equals score plus one adds one to it. Show the new score on the page and you have a counter.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Change the words',
      lang: 'html',
      code: '<p id="msg">Hello!</p>\n<script>\n  const msg = document.getElementById("msg");\n  msg.textContent = "Namaste from JavaScript!";\n</script>',
      output: 'Preview: the paragraph says “Namaste from JavaScript!” instead of “Hello!”.',
      say: ['The script finds the paragraph by its id and stores it in msg.', 'Then textContent replaces the words, so the page shows a new message.'],
    },
    {
      kind: 'code',
      heading: 'Listen for a click',
      lang: 'html',
      code: '<button id="btn">Click me</button>\n<script>\n  const btn = document.getElementById("btn");\n  btn.addEventListener("click", function () {\n    btn.textContent = "You clicked!";\n  });\n</script>',
      output: 'Preview: the button says “Click me”. Click it and it changes to “You clicked!”.',
      say: ['addEventListener tells the button to wait for a click.', 'The code inside the curly brackets runs only when the click happens.'],
    },
    {
      kind: 'code',
      heading: 'A counter with a variable',
      lang: 'javascript',
      code: 'let clicks = 0;\nbtn.addEventListener("click", function () {\n  clicks = clicks + 1;\n  count.textContent = "Clicks: " + clicks;\n});',
      output: 'Preview: Clicks: 1, Clicks: 2, Clicks: 3 … one more on every click.',
      say: ['The variable called clicks starts at zero before anyone clicks.', 'Every click adds one, and textContent shows the new number on the page.'],
    },
    {
      kind: 'code',
      heading: 'Change a colour',
      lang: 'javascript',
      code: 'mango.addEventListener("click", function () {\n  document.body.style.backgroundColor = "gold";\n});',
      output: 'Preview: click the mango and the whole page turns gold.',
      say: ['JavaScript can change CSS too, using style.', 'In JavaScript, background color is written as one word with a capital C.'],
    },
    {
      kind: 'steps',
      heading: 'Test it in the live preview',
      tool: 'Kitabash Web Lab',
      steps: ['Type your HTML and script in the editor', 'Click your button in the live preview', 'Watch the words, colour or score change', 'Nothing happened? Compare every id and check your quotes', 'Press Check to see which goals pass'],
      say: ['The live preview runs your JavaScript, so you can click your buttons straight away.', 'If nothing happens, compare each id carefully and make sure every quote mark has a partner.', 'When it works, press Check to see which goals you have reached.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'html',
      code: '<p id="score">0</p>\n<script>\n  const s = document.getElementById("scor");\n  s.textContent = "10";\n</script>',
      output: 'Preview: nothing changes when the script runs, because it cannot find the paragraph.',
      say: ['The id in the script says scor, but the paragraph’s id is score.', 'JavaScript cannot find it, so check that ids match exactly.'],
    },
  ],
  build: {
    title: 'Build along: a click counter',
    intro: 'Type along in the Web Lab and click your counter right in the live preview.',
    steps: [
      { title: 'The HTML', text: 'Type an h1, a <p id="count">Clicks: 0</p> and a <button id="btn">Click me</button>.' },
      { title: 'Open a script', text: 'At the bottom, type <script> and </script>.' },
      { title: 'Find the elements', text: 'Inside, type const btn = document.getElementById("btn"); and the same for count.', tip: 'getElementById has a capital E, B and I. JavaScript cares about capitals.' },
      { title: 'Start a variable', text: 'Above them, type let clicks = 0;' },
      { title: 'Listen for clicks', text: 'Type btn.addEventListener("click", function () { … }); and inside add clicks = clicks + 1; and count.textContent = "Clicks: " + clicks;' },
      { title: 'Click and check', text: 'Click your button in the preview and watch the number go up, then press Check.', tip: 'Want to play at home? Save your code as counter.html and open it in any browser.' },
    ],
  },
  acts: [
    {
      web: 'Make the button talk! The page has a button and a message. In the script, find the button by its id, listen for a click, and change the message’s textContent when it is clicked.',
      title: 'Web Lab: make the button talk',
      starter: '<h1>Secret message</h1>\n<p id="message">Press the button to reveal the secret.</p>\n<button id="reveal">Reveal</button>\n\n<script>\n  // Your JavaScript goes here\n</script>\n',
      goals: [
        ['Has a script', { t: 'tag', tags: ['script'], msg: 'Keep the <script> … </script> tag.' }],
        ['Finds elements by id', { t: 'source', has: ['getElementById("reveal")', 'getElementById("message")'], msg: 'Use document.getElementById("reveal") and document.getElementById("message").' }],
        ['Listens for a click', { t: 'source', has: ['addEventListener("click"'], msg: 'Use addEventListener("click", function () { … }).' }],
        ['Changes the words', { t: 'source', has: ['textContent'], msg: 'Change the message with textContent.' }],
      ],
      solution: '<h1>Secret message</h1>\n<p id="message">Press the button to reveal the secret.</p>\n<button id="reveal">Reveal</button>\n\n<script>\n  const reveal = document.getElementById("reveal");\n  const message = document.getElementById("message");\n  reveal.addEventListener("click", function () {\n    message.textContent = "The secret is: coding is a superpower!";\n  });\n</script>\n',
      explain: 'Find it, listen for a click, change it. That three-step pattern is the heart of every interactive page.',
      hints: ['Line 1: const reveal = document.getElementById("reveal");', 'Inside the click function: message.textContent = "Your secret here";'],
    },
    {
      code: 'let runs = 0;\nruns = runs + 4;\nruns = runs + 6;\nruns = runs + 1;\nscore.textContent = "Runs: " + runs;',
      lang: 'javascript',
      ask: 'What will the score show?',
      options: ['Runs: 11', 'Runs: 0', 'Runs: 1', 'Runs: 461'],
      answer: 0,
      why: 'runs starts at 0, then adds 4, 6 and 1. 0 + 4 + 6 + 1 = 11.',
      title: 'Predict the score',
    },
    {
      match: 'Match each piece of JavaScript to its job',
      pairs: [
        ['<script>', 'Holds the JavaScript code'],
        ['let score = 0;', 'Makes a variable that starts at zero'],
        ['document.getElementById("btn")', 'Finds the element with id="btn"'],
        ['addEventListener("click", …)', 'Waits for a click, then runs code'],
        ['textContent', 'The words inside an element'],
        ['score = score + 1;', 'Adds one to the score'],
      ],
      why: 'Scripts hold code; variables store values; getElementById finds things; event listeners wait for clicks; textContent changes words.',
    },
    {
      order: 'Put these steps in order to make a working click counter',
      steps: ['Add a button and a paragraph, each with an id', 'Add a script tag at the bottom of the page', 'Make a variable: let clicks = 0', 'Find the button and paragraph with getElementById', 'Listen for a click and add 1 to clicks', 'Show the new number with textContent'],
      why: 'HTML first, then the script: a variable, find the elements, listen, update, show.',
      title: 'Order it: build a counter',
    },
    {
      web: 'Project: build a cricket score counter OR a “click the mango” game. You need at least two buttons, a variable that keeps score, addEventListener for the clicks, textContent to show the score, and CSS to make it look great. Click your buttons in the live preview to test it, then press Check.',
      title: 'Project: score counter or click-the-mango game',
      mode: 'project',
      starter: '<!-- My score counter or mini game -->\n<style>\n  body { font-family: Arial, sans-serif; text-align: center; }\n</style>\n\n<h1>(Game title)</h1>\n<p id="score">0</p>\n<button id="add">+1</button>\n\n<script>\n  let score = 0;\n  const scoreText = document.getElementById("score");\n  // Listen for clicks here\n</script>\n',
      goals: [
        ['Has at least two buttons', { t: 'tag', tags: ['button'], min: 2, msg: 'Add at least two buttons, like +1 and +4, or a mango and a reset.' }],
        ['Has a script', { t: 'tag', tags: ['script'], msg: 'Keep your <script> tag.' }],
        ['Keeps score in a variable', { t: 'source', has: ['let '], msg: 'Make a variable with let, like let score = 0;' }],
        ['Reacts to clicks and shows the score', { t: 'source', has: ['addEventListener', 'textContent'], msg: 'Use addEventListener for clicks and textContent to show the score.' }],
        ['Is styled', { t: 'css', props: ['background-color', 'padding'], msg: 'Style your page with background-color and padding.' }],
      ],
      solution: L7_SCORE,
      requirements: ['At least two buttons with clear words or emoji', 'A variable that keeps the score', 'addEventListener on every button', 'The score shown on the page with textContent', 'One colour change with style when something special happens', 'Tested by clicking every button in the preview'],
      reflection: 'What happened when you first clicked your buttons in the preview? Describe one bug you found and how you fixed it.',
      explain: 'You wrote real JavaScript that reacts to clicks. This is how every web game starts.',
      hints: ['For a mango game: <button id="mango">🥭</button> and add 1 to the score on each click.', 'Copy one addEventListener block for each button and change the id and the number.'],
    },
    {
      web: 'Debug it! This score counter does nothing in the browser. The script looks for the wrong id and listens for the wrong event name. Fix both bugs.',
      title: 'Debug it: the silent scoreboard',
      phase: 'probe',
      starter: '<p id="score">Score: 0</p>\n<button id="plus">+1</button>\n\n<script>\n  let score = 0;\n  const scoreText = document.getElementById("scor");\n  const plus = document.getElementById("plus");\n  plus.addEventListener("clik", function () {\n    score = score + 1;\n    scoreText.textContent = "Score: " + score;\n  });\n</script>\n',
      goals: [
        ['Finds the score by the right id', { t: 'source', has: ['getElementById("score")'], msg: 'The paragraph’s id is score. Make the script use exactly that.' }],
        ['Listens for the right event', { t: 'source', has: ['addEventListener("click"'], msg: 'The event name is click, spelt c-l-i-c-k.' }],
      ],
      solution: '<p id="score">Score: 0</p>\n<button id="plus">+1</button>\n\n<script>\n  let score = 0;\n  const scoreText = document.getElementById("score");\n  const plus = document.getElementById("plus");\n  plus.addEventListener("click", function () {\n    score = score + 1;\n    scoreText.textContent = "Score: " + score;\n  });\n</script>\n',
      explain: 'Most JavaScript bugs are tiny spelling slips. Ids and event names must match exactly, so read them letter by letter.',
      hints: ['Compare the id in the HTML with the id inside getElementById.', 'Look at the word inside addEventListener. Is it spelt right?'],
    },
  ],
  teacher: {
    explain: 'JavaScript makes a page react. Code goes in a script tag at the bottom of the page. document.getElementById finds an element by its id; addEventListener("click", …) runs code each time it is clicked; textContent changes the words; style changes CSS. A variable made with let stores a value, and score = score + 1 updates it. The Web Lab live preview runs JavaScript in a locked-down sandbox, so learners click their buttons right in the preview. Saving the page as an .html file to play at home is an optional extra.',
    analogy: 'An event listener is like a fielder waiting at slip: they do nothing until the ball comes (the click), then they spring into action every single time.',
    vocab: [
      ['JavaScript', 'The language that makes web pages react and move.'],
      ['script tag', 'The tag that holds JavaScript code.'],
      ['id', 'A unique name for one element, used to find it.'],
      ['event', 'Something that happens, like a click.'],
      ['event listener', 'Code that waits for an event and then runs.'],
      ['variable', 'A named box that stores a value, made with let.'],
    ],
    demo: L7_DEMO,
    unplugged: 'Human Event Listener (5 min game): each learner is given an “id” (bat, ball, stumps). The teacher calls “getElementById bat — on click, jump!” Then the teacher claps (the click) and only “bat” must jump. Add a scorekeeper who adds 1 to a running total on the whiteboard each time. Anyone who moves on the wrong id is out.',
    prompts: [
      ['Where does the script tag usually go?', 'At the bottom of the page, after the HTML it uses.'],
      ['How does JavaScript find the button?', 'document.getElementById with the button’s id.'],
      ['What does addEventListener do?', 'Waits for an event like a click, then runs the code inside.'],
      ['What does score = score + 1 do?', 'Takes the old score, adds one and stores it back.'],
      ['My button does nothing when I click it. What should I check first?', 'That the id in getElementById matches the id in the HTML exactly, and that every quote has a partner.'],
    ],
    support: 'Give learners the build-along counter to change: new button words, a new message, +2 instead of +1. Provide a printed “find, listen, change” pattern card.',
    stretch: 'Add a reset button, a target score that shows “You win!” using if, and change the button colour on each click.',
    mis: [
      ['getelementbyid works the same as getElementById', 'JavaScript is case-sensitive. Capitals must be exact: getElementById.'],
      ['The script runs again by itself', 'Only code inside the click function runs again on each click.'],
      ['textContent changes the colour', 'textContent changes words; use style to change colours.'],
      ['Text does not need quotes in JavaScript, like textContent = Hello', 'Words must go inside quotes: textContent = "Hello". Without quotes JavaScript thinks Hello is a variable name.'],
    ],
    successCriteria: ['I can add JavaScript in a script tag.', 'I can find an element with getElementById.', 'I can make a button react with addEventListener.', 'I can keep score with a variable.'],
    homework: 'Add one new button or a reset button to your game and test it in the preview. Optional: save your code as an .html file and play it with someone at home in any browser, then teach them what addEventListener means.',
    exit: 'Write one line of JavaScript that adds 4 to a variable called runs.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human Event Listener', doing: 'Play Human Event Listener with ids and claps; a scorekeeper adds up on the whiteboard.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Thumbs poll: “Have you played a game in a web browser?” Play the video; pause at “Test it in the live preview” and ask what to check if nothing happens.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the demo in the Web Lab, including the id typo hunt. Everyone types the click counter, clicks it in the preview and presses Check.' },
      { minutes: 8, stage: 'Challenge and games', doing: 'Web Lab: make the button talk, then Predict the score, the match game and Order it. Quick competition: first correct score prediction shouts “Howzat!”.' },
      { minutes: 17, stage: 'Project in pairs', doing: 'Breakout rooms: pairs build a score counter or click-the-mango game. The navigator clicks every button in the preview to test it. Swap roles every 5 minutes.' },
      { minutes: 5, stage: 'Probe: debug race', doing: 'Race to fix “the silent scoreboard”. First learner to explain both bugs wins.' },
      { minutes: 6, stage: 'Show-and-tell: play my game', doing: 'Two learners share their browser and play their game live; the class calls out what to click.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: add 4 to runs.' },
    ],
  },
  files: [
    { name: 'l07-click-counter.html', title: 'Build-along: click counter', audience: 'student', content: L7_BUILD },
    demoFile(7, 'First JavaScript', L7_DEMO, [
      ['Nothing happens when I click.', 'Compare the id in the HTML with the id in getElementById letter by letter, and check every quote and bracket closes.'],
      ['It worked, then stopped after I added a line.', 'The new line probably has a missing quote or bracket. Undo it and retype it carefully.'],
      ['The script runs before the button exists.', 'Keep the script tag at the very bottom, after all the HTML it uses.'],
    ]),
  ],
});

// ─────────────────────────────────────────────────────────────
// Lesson 8 · Capstone: a one-page website for a cause or mini business
// ─────────────────────────────────────────────────────────────
const L8_NAV = `<style>
  nav a { margin-right: 12px; }
  section { padding: 12px; border-bottom: 1px solid #cccccc; }
</style>

<nav>
  <a href="#about">About</a>
  <a href="#gallery">Gallery</a>
  <a href="#join">Join</a>
</nav>

<section id="about"><h2>About</h2><p>Who we are.</p></section>
<section id="gallery"><h2>Gallery</h2><p>Our pictures.</p></section>
<section id="join"><h2>Join</h2><p>How to help.</p></section>`;

const L8_SITE = `<!-- Capstone: Green Lane Book Swap -->
<style>
  body {
    margin: 0;
    font-family: Verdana, sans-serif;
    background-color: #fbfaf5;
    color: #2d3436;
  }
  header {
    background-color: #2e7d32;
    color: white;
    padding: 24px;
    text-align: center;
  }
  nav a {
    color: white;
    margin: 0 10px;
  }
  section {
    padding: 20px;
    margin: 0 auto;
    max-width: 720px;
  }
  h2 {
    color: #2e7d32;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
  .card {
    width: 200px;
    background-color: white;
    border: 2px solid #a5d6a7;
    border-radius: 12px;
    padding: 12px;
  }
  label {
    display: block;
    margin-top: 10px;
  }
  input, select, textarea {
    padding: 8px;
  }
  button {
    margin-top: 12px;
    padding: 10px 18px;
    background-color: #2e7d32;
    color: white;
    border: none;
    border-radius: 8px;
  }
  footer {
    text-align: center;
    padding: 16px;
    font-size: 14px;
  }
</style>

<header>
  <h1>📚 Green Lane Book Swap</h1>
  <p>Bring a book. Take a book. Share the joy of reading!</p>
  <nav>
    <a href="#about">About</a>
    <a href="#gallery">Gallery</a>
    <a href="#join">Join</a>
  </nav>
</header>

<section id="about">
  <h2>About the swap</h2>
  <p>Many of us have books we have already read sitting on a shelf. Our colony book swap gives them a second life. Every month, neighbours bring old books and swap them for new ones, for free.</p>
  <p id="books">Books swapped so far: 120</p>
  <button id="cheer">I swapped a book! 📖</button>
</section>

<section id="gallery">
  <h2>Gallery</h2>
  <div class="gallery">
    <div class="card">
      <img src="${IMG('Story+Books')}" alt="Placeholder picture labelled Story Books">
      <h3>Story books</h3>
      <p>Mysteries, adventures and funny tales.</p>
    </div>
    <div class="card">
      <img src="${IMG('Comics')}" alt="Placeholder picture labelled Comics">
      <h3>Comics</h3>
      <p>Superheroes, mythology and more.</p>
    </div>
    <div class="card">
      <img src="${IMG('Science')}" alt="Placeholder picture labelled Science">
      <h3>Science</h3>
      <p>Space, animals and how things work.</p>
    </div>
  </div>
  <p>Pictures: placeholder images from placehold.co</p>
</section>

<section id="join">
  <h2>Tell us what you like to read</h2>
  <p>This is a practice form. Nothing is sent anywhere.</p>
  <form>
    <label for="genre">Favourite kind of book</label>
    <select id="genre">
      <option>Adventure</option>
      <option>Mystery</option>
      <option>Comics</option>
    </select>
    <label for="count">How many books could you bring?</label>
    <input type="number" id="count" min="0">
    <label for="idea">An idea for the swap</label>
    <textarea id="idea"></textarea>
    <button type="button">Send</button>
  </form>
</section>

<footer>Made by the Green Lane Readers Club · 2026</footer>

<script>
  let books = 120;
  const booksText = document.getElementById("books");
  document.getElementById("cheer").addEventListener("click", function () {
    books = books + 1;
    booksText.textContent = "Books swapped so far: " + books + " 🎉";
  });
</script>`;

const L8_DEMO =
  '1) Show the finished Green Lane Book Swap model page in the Web Lab preview and scroll through it: header, gallery, form, button. 2) Show the nav links with href="#gallery" and the matching section id="gallery"; click a link and watch the page jump. 3) Show how the gallery reuses the lesson 5 flexbox cards and the form reuses lesson 6. 4) Click the “I swapped a book!” button and show the counter from lesson 7. 5) Open the capstone starter in the Web Lab and show the pieces learners will fill in. 6) Read the launch checklist aloud: alt text and credits, labels joined, button clicked and tested in the preview, no personal details, kind and honest words.';

export const W8 = lesson(8, {
  title: 'Capstone: my one-page website',
  objective: 'Plan and build a one-page website for a local cause or mini business idea with navigation, a gallery, a form and an interactive button.',
  concept: 'plan, build, test, launch',
  minutes: 60,
  hook: ['word', 'LAUNCH', 'One page. One idea. Built by you.'],
  intro: 'It’s capstone time! Today you will build a complete website for a cause or idea you care about.',
  cards: [
    { emoji: '💡', title: 'Pick a cause or an idea', body: 'Choose something real that matters to you, like a park clean-up or a book swap. Ask who the page is for and what you want visitors to do. Your answer becomes the goal of your whole page.' },
    { emoji: '🧭', title: 'Jump links help visitors', body: 'Give each section an id, like id equals gallery. A link with href set to hash gallery jumps straight to that section. A row of these links at the top is called a nav bar.' },
    { emoji: '🧩', title: 'Reuse what you built', body: 'Your gallery uses flexbox cards from lesson five. Your form uses the labels you learned in lesson six. Your button uses the JavaScript you learned in lesson seven.' },
    { emoji: '🚀', title: 'Test before you launch', body: 'Check every picture has alt text and a credit, and every label is joined. Click every button and link in the live preview. Make sure there are no personal details and that every claim is honest.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A nav bar of jump links',
      lang: 'html',
      code: '<nav>\n  <a href="#about">About</a>\n  <a href="#gallery">Gallery</a>\n  <a href="#join">Join</a>\n</nav>\n<section id="gallery"> … </section>',
      output: 'Preview: three links at the top. Clicking “Gallery” jumps down to the gallery section.',
      say: ['The hash in the link means a place on this same page.', 'It jumps to the section whose id matches the word after the hash.'],
    },
    {
      kind: 'code',
      heading: 'Header and footer',
      lang: 'html',
      code: '<header>\n  <h1>Green Lane Book Swap</h1>\n  <p>Bring a book. Take a book.</p>\n</header>\n…\n<footer>Made by the Green Lane Readers Club</footer>',
      output: 'Preview: a bold banner at the top and a small credit line at the bottom.',
      say: ['The header tag holds the title and tagline at the top of the page.', 'The footer holds the credit line at the bottom, using a club name, not your full name.'],
    },
    {
      kind: 'code',
      heading: 'One interactive button',
      lang: 'javascript',
      code: 'let books = 120;\ncheer.addEventListener("click", function () {\n  books = books + 1;\n  booksText.textContent = "Books swapped: " + books;\n});',
      output: 'Preview: every click adds one to the books-swapped counter.',
      say: ['A small button makes the page feel alive.', 'It uses the same find, listen and change pattern from last lesson.'],
    },
    {
      kind: 'steps',
      heading: 'Launch checklist',
      tool: 'Kitabash Web Lab and your browser',
      steps: ['Header, nav and at least three sections', 'Gallery of cards with flexbox, alt text and credits', 'A form with joined labels and no personal questions', 'A button that works when you click it in the preview', 'Press Check, write your reflection and submit'],
      say: ['Before launch day, go down this checklist one line at a time.', 'Fix anything that is not ticked, then press Check and submit with your reflection.'],
    },
  ],
  build: {
    title: 'Build along: header, nav and jump links',
    intro: 'Build the top of your website first, so the rest of the page has a home.',
    steps: [
      { title: 'Choose your idea', text: 'Write one sentence: My page is for (who) so that they will (do what).' },
      { title: 'Header', text: 'Type a <header> with an h1 name and a one-line tagline.' },
      { title: 'Nav bar', text: 'Inside the header, add a <nav> with three links: href="#about", "#gallery" and "#join".' },
      { title: 'Sections with ids', text: 'Add three <section> blocks with id="about", id="gallery" and id="join", each with an h2.', tip: 'The word after the hash in the link must match the id exactly.' },
      { title: 'Fill and style', text: 'Add the gallery cards, the form and the button, then style the whole page in one style tag.' },
    ],
  },
  acts: [
    {
      web: 'This page has three sections with ids but no way to jump to them. Add a nav bar with at least three links that jump to #about, #gallery and #join.',
      title: 'Web Lab: jump links',
      starter: '<h1>Clean Park Drive</h1>\n\n<section id="about"><h2>About</h2><p>Let’s clean our park together.</p></section>\n<section id="gallery"><h2>Gallery</h2><p>Before and after pictures.</p></section>\n<section id="join"><h2>Join</h2><p>Bring gloves and a bag.</p></section>\n',
      goals: [
        ['Has a nav bar', { t: 'tag', tags: ['nav'], msg: 'Add <nav> … </nav> near the top.' }],
        ['Has at least three links', { t: 'tag', tags: ['a'], min: 3, msg: 'Add three <a> links inside the nav.' }],
        ['Links jump to the sections', { t: 'source', has: ['href="#about"', 'href="#gallery"', 'href="#join"'], msg: 'Use href="#about", href="#gallery" and href="#join".' }],
      ],
      solution: L8_NAV.replace('<nav>', '<h1>Clean Park Drive</h1>\n<nav>'),
      explain: 'Jump links make a long page easy to explore. The word after the hash always matches a section’s id.',
      hints: ['A jump link looks like <a href="#gallery">Gallery</a>.', 'Put all three links inside one <nav> tag.'],
    },
    {
      code: '<a href="#join">Join us</a>\n…\n<section id="join">\n  <h2>Join the clean-up</h2>\n</section>',
      lang: 'html',
      ask: 'What happens when you click “Join us”?',
      options: ['The page jumps down to the “Join the clean-up” section', 'A new website opens', 'Nothing, because the link has no web address', 'The section is deleted'],
      answer: 0,
      why: 'href="#join" points to the element with id="join" on the same page, so the browser scrolls to it.',
      title: 'Predict the jump',
    },
    {
      match: 'Match each page part to its job',
      pairs: [
        ['<header>', 'The banner at the top with the title'],
        ['<nav>', 'A group of links to move around'],
        ['<section id="gallery">', 'A part of the page that links can jump to'],
        ['href="#gallery"', 'A link to a place on the same page'],
        ['<footer>', 'The credit line at the bottom'],
      ],
      why: 'Header, nav, sections and footer give a website a clear shape, and hash links tie them together.',
    },
    {
      web: 'Capstone project: build a one-page website for a local cause (a park clean-up, a book swap, saving water, a tree-planting drive) OR a mini business idea (a rakhi stall, a plant-care service, a homemade card shop). It needs a header with a nav bar, at least three sections, a flexbox gallery with pictures and alt text, a practice form with labels, and one interactive button.',
      title: 'Capstone: my one-page website',
      mode: 'project',
      starter: `<!-- My one-page website -->\n<style>\n  body { font-family: Arial, sans-serif; margin: 0; }\n  header { padding: 20px; }\n  .gallery { /* flexbox here */ }\n</style>\n\n<header>\n  <h1>(Name of your cause or business)</h1>\n  <p>(One-line tagline)</p>\n  <nav>\n    <a href="#about">About</a>\n  </nav>\n</header>\n\n<section id="about">\n  <h2>About</h2>\n  <p>(What it is and why it matters)</p>\n</section>\n\n<!-- Add a gallery section, a form section and a button -->\n\n<script>\n  // Your button code here\n</script>\n`,
      goals: [
        ['Has a header and nav bar', { t: 'tag', tags: ['nav'], msg: 'Add a <nav> with links to your sections.' }],
        ['Has at least three section headings', { t: 'tag', tags: ['h2'], min: 3, msg: 'Use at least three sections, each with an <h2>.' }],
        ['Has a flexbox gallery', { t: 'css', props: ['display', 'gap'], msg: 'Make your gallery with display: flex and gap.' }],
        ['Has pictures with alt text', { t: 'source', has: ['<img', 'alt="'], msg: 'Add pictures with alt="…".' }],
        ['Has a form with labels', { t: 'tag', tags: ['label'], min: 2, msg: 'Add a form with at least two labelled questions.' }],
        ['Has a working button script', { t: 'source', has: ['<script', 'addEventListener', 'getElementById'], msg: 'Make a button react with getElementById and addEventListener.' }],
        ['Has plenty to read', { t: 'text', min: 400, msg: 'Write more about your cause or idea.' }],
      ],
      solution: L8_SITE,
      requirements: ['A header with a name, tagline and a nav bar of jump links', 'At least three sections with ids and h2 headings', 'A flexbox gallery of at least three cards with pictures, alt text and credits', 'A practice form with joined labels and no personal questions', 'One interactive button that works when you click it', 'A footer that credits a club or nickname, and honest, kind words throughout'],
      reflection: 'Who is your website for and what do you want them to do? Which part are you proudest of, and what did testing your page help you fix?',
      minWords: 30,
      explain: 'You built a complete website that brings together HTML, CSS, a form and JavaScript. You are a web creator!',
      hints: ['Copy your Top 5 gallery from lesson 5 and change the cards.', 'Build one section at a time and press Check often to see your progress.'],
    },
    {
      sort: 'Launch day check: ready, or fix it first?',
      buckets: ['Ready to launch', 'Fix it first'],
      items: [
        ['Nav links jump to the right sections', 0],
        ['Every picture has alt text and a credit', 0],
        ['The button works when you click it', 0],
        ['“Made by the Green Lane Readers Club”', 0],
        ['“Our plants cure every illness!”', 1],
        ['A form that asks for your home address', 1],
        ['A link to #gallery but the section id is “photos”', 1],
        ['A photo of a classmate posted without asking', 1],
      ],
      why: 'Launch when links, pictures and buttons all work and everything is honest and private. False claims, personal details and photos without permission must be fixed.',
      phase: 'probe',
      hint: 'Is it working, honest, and safe for everyone on the page?',
    },
  ],
  teacher: {
    explain: 'The capstone brings the whole course together: a header and nav bar of jump links (href="#id" matching a section id), sections, a flexbox gallery of cards with alt text and credits, a practice form with labels, and one JavaScript button. Learners choose a real local cause or mini business idea, plan who it is for, build section by section, test every link and button in the preview, and run a launch checklist that covers honesty and privacy as well as working code.',
    analogy: 'A one-page website is like a stall at a school fair: a banner (header), signs pointing to each table (nav), the tables themselves (sections), a sign-up sheet (form) and something fun to try (the button).',
    vocab: [
      ['header', 'The banner area at the top of a page.'],
      ['nav', 'A group of links for moving around the site.'],
      ['jump link', 'A link like href="#gallery" that moves to a section on the same page.'],
      ['footer', 'The area at the bottom, often with credits.'],
      ['launch', 'Making a finished page ready for others to see.'],
      ['audience', 'The people a website is made for.'],
    ],
    demo: L8_DEMO,
    unplugged: 'Elevator Pitch (5 min game): each learner has 30 seconds to pitch their cause or business idea: name, who it is for, and what visitors should do. Classmates hold up a thumbs-up if they would visit the page. The teacher writes the best taglines on the whiteboard.',
    prompts: [
      ['How does a jump link know where to go?', 'The word after the hash matches a section’s id.'],
      ['Which lesson did the gallery come from?', 'Lesson 5: flexbox cards.'],
      ['How do you test the button?', 'Click it in the live preview and check the page changes as expected.'],
      ['What must your form never ask?', 'Personal details like phone numbers, addresses or passwords.'],
      ['Why does honesty matter on a website?', 'Visitors trust what they read; false claims can mislead or harm people.'],
    ],
    support: 'Give the capstone starter and the lesson 5–7 build-along files to copy from. A minimum viable page is header, two sections, gallery and button; the form can follow.',
    stretch: 'Add a dark-mode button that changes the body colours, a hover effect on cards, and a “back to top” jump link in the footer.',
    mis: [
      ['href="gallery" works the same as href="#gallery"', 'Without the hash the browser looks for another page. Use #gallery for the same page.'],
      ['A website for a cause can exaggerate to get attention', 'Keep every claim honest. Exaggeration misleads visitors.'],
      ['Photos of friends are fine to post', 'Always ask first, and avoid photos that show faces, uniforms or places.'],
      ['A link to #gallery works even if the section id is spelt “Gallery”', 'Ids must match exactly, including capitals. Click every nav link to test it.'],
    ],
    successCriteria: ['I can plan a website for a real audience.', 'I can link a nav bar to sections with ids.', 'I can combine a gallery, a form and a button.', 'I can test and check a site before launch.'],
    homework: 'Present your website to your family as if it were launch day. Ask them to try every link and the button, then write down one improvement for Level 2.',
    exit: 'Write a jump link that goes to a section with id="contact".',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Elevator Pitch', doing: 'Thirty-second pitches of each learner’s cause or idea; thumbs-up votes and best taglines on the board.' },
      { minutes: 5, stage: 'Hook, video and brief', doing: 'Show the LAUNCH hook and play the video. Read the rubric together; poll: cause or business?' },
      { minutes: 5, stage: 'Demo and jump links', doing: 'Run the demo with the model site, then learners do “jump links”, Predict the jump and the match game.' },
      { minutes: 25, stage: 'Build in breakout rooms', doing: 'Learners build their website section by section. Halfway check-in (minute 12): header, nav and gallery are in the preview. Teacher visits every room.' },
      { minutes: 8, stage: 'Click test and peer feedback', doing: 'Pairs swap screens, click every link and button in each other’s preview, then give two stars and a wish. Optional: save the page as .html and test it in a real browser too.' },
      { minutes: 5, stage: 'Probe and submit', doing: 'Launch day check sort. Fix one thing, write the reflection and submit.' },
      { minutes: 7, stage: 'Launch party and wrap-up', doing: 'Show-and-tell “launch party”: three learners present in one minute each; class claps in emoji. Exit ticket: the #contact jump link.' },
    ],
  },
  project: {
    title: 'My one-page website',
    brief: 'Build a one-page website for a local cause or a mini business idea, with a header and nav bar, a flexbox gallery, a practice form and one interactive button, tested by clicking everything and checked for honesty and privacy.',
    requirements: ['Header with name, tagline and nav bar of jump links', 'At least three sections with ids and h2 headings', 'A flexbox gallery of three or more cards with alt text and credits', 'A practice form with joined labels and no personal questions', 'One JavaScript button that works when clicked', 'Honest content and a footer credit with a club name or nickname'],
    milestones: ['Idea, audience and goal written in one sentence; page sketched', 'Header, nav and three sections with working jump links', 'Gallery and form added and styled', 'Button works when clicked; launch checklist passed (optionally tested in a real browser too); a partner has tested it'],
    rubric: [
      { criterion: 'Structure and navigation', levels: ['Few sections; links missing', 'Sections present but some jump links broken', 'Header, nav and three sections with working jump links', 'Clear, well-organised page; navigation is smooth and complete'] },
      { criterion: 'Design (CSS and layout)', levels: ['Little or no styling', 'Some styling; gallery not laid out with flexbox', 'Consistent colours and fonts; flexbox gallery of cards', 'Polished, readable design with thoughtful spacing and colour'] },
      { criterion: 'Form and interaction', levels: ['No form or button', 'Form or button present but not working or unlabelled', 'Labelled form and a working, tested button', 'Accessible, private form and a creative interactive feature'] },
      { criterion: 'Purpose, honesty and safety', levels: ['Unclear purpose or personal details shared', 'Purpose clear but some credits or alt text missing', 'Clear purpose, honest claims, alt text and credits, no personal details', 'Persuasive and honest page that clearly serves its audience; explains choices'] },
    ],
    extensions: ['Add a dark-mode button that swaps the page colours', 'Add a “back to top” jump link and a hover effect on cards', 'Add a simple quiz button about your cause that shows a fun fact'],
  },
  files: [
    { name: 'l08-header-nav-jump-links.html', title: 'Build-along: header, nav and jump links', audience: 'student', content: L8_NAV },
    demoFile(8, 'Capstone: one-page website', L8_DEMO, [
      ['A nav link does not jump.', 'Check the hash in href and that the section id matches exactly, letter for letter.'],
      ['The page is too long to finish.', 'Aim for the minimum: header, nav, gallery and button first. The form can be small.'],
      ['A learner makes big claims, like “cures everything”.', 'Ask: how do we know this is true? Replace it with an honest claim.'],
    ]),
  ],
});
