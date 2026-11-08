// Money Smart · Level 1 · Module 1 — Money basics (lessons 1–4).
// Every class is hands-on with play money: counting, making change, budget simulations and planners.
import { lesson } from '../kit.ts';
import { COUNT_TABLE, PLAY_MONEY, SAFE_NOTE } from './data.ts';

// ───────────────────────────────── Lesson 1 ─────────────────────────────────
export const M1 = lesson(1, {
  title: 'What Is Money?',
  objective: 'Explain how people moved from swapping to coins, notes and digital money, count Indian rupees quickly and make correct change at a shop counter.',
  concept: 'Money and change',
  minutes: 45,
  hook: ['pattern', ['₹1', '₹2', '₹5', '₹10', '₹20', '₹50'], '₹100'],
  intro: 'Welcome to Money Smart! Today you will find out where money came from, count rupees like a shopkeeper, and give the right change.',
  cards: [
    { emoji: '🔄', title: 'Before money: swapping', body: 'Long ago, people swapped things they had for things they needed. A farmer could swap a sack of rice for a clay pot. This kind of swapping is called barter.' },
    { emoji: '😕', title: 'Why swapping was hard', body: 'What if the potter did not want rice? Then there was no swap at all. And nobody could agree how many pots one goat was worth.' },
    { emoji: '🪙', title: 'Coins and notes', body: 'Money fixed this, because everyone agrees it has value. More than 2,500 years ago, India made some of the first coins in the world. Today we use coins of ₹1, ₹2, ₹5, ₹10 and ₹20, and notes of ₹10, ₹20, ₹50, ₹100, ₹200 and ₹500.' },
    { emoji: '📱', title: 'Digital money', body: 'Many families also pay with a phone using UPI, or with a bank card. The money moves from one bank account to another without any notes changing hands. It is still real money, so we spend it just as carefully.' },
    { emoji: '🧮', title: 'Making change', body: 'Change is the money you get back when you pay more than the price. To find it, count up from the price to the money you paid. Always count your change before you leave the counter.' },
  ],
  scenes: [
    {
      kind: 'bullets',
      heading: 'Count it the smart way',
      bullets: [
        { icon: '💵', text: 'Start with the biggest note' },
        { icon: '➕', text: '₹100 → ₹150 → ₹160 → ₹170' },
        { icon: '🪙', text: 'Coins last: ₹170 → ₹175' },
        { icon: '🗣️', text: 'Say the total out loud' },
      ],
      say: [
        'To count money quickly, always start with the biggest note and work down.',
        'Here we have a hundred rupee note, a fifty rupee note, two ten rupee notes and a five rupee coin.',
        'We count one hundred, one hundred and fifty, one hundred and sixty, one hundred and seventy.',
        'Then the coin makes one hundred and seventy five rupees, and we say the total out loud.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Make change by counting up',
      tool: 'Kirana shop counter (play money)',
      steps: ['Meera buys a pencil box for ₹35 and pays with a ₹50 note.', 'Start at the price: ₹35.', 'Give a ₹5 coin and say “₹40”.', 'Give a ₹10 coin and say “₹50”.', 'Change = ₹5 + ₹10 = ₹15. Meera counts it too.'],
      say: [
        'Meera buys a pencil box for thirty five rupees and pays with a fifty rupee note.',
        'The shopkeeper starts at the price and counts up to the money Meera paid.',
        'A five rupee coin makes forty, and a ten rupee coin makes fifty.',
        'So the change is fifteen rupees, and Meera counts it again before she leaves.',
      ],
    },
    {
      kind: 'card',
      heading: 'Kabir’s kirana mix-up',
      emoji: '🏪',
      body: 'Kabir buys biscuits for ₹25 and pays with a ₹100 note. The shopkeeper gives back ₹65. Is that right?',
      say: [
        'Kabir buys biscuits for twenty five rupees and pays with a one hundred rupee note.',
        'The shopkeeper is busy and gives him back sixty five rupees.',
        'Counting up from twenty five to one hundred makes seventy five rupees, not sixty five.',
        'Kabir politely says, uncle, I think I should get ten rupees more, and the shopkeeper thanks him.',
      ],
    },
  ],
  build: {
    title: 'Set up your shop counter',
    intro: 'Use the play money sheet and five things from your home. By the end you will have a working pretend shop to play with your family.',
    steps: [
      { title: 'Cut out your play money', text: 'Cut out the coins and notes from your activity sheet (or write the values on paper slips). Put coins in one pile and notes in another.' },
      { title: 'Count your cash box', text: 'Count all your play money, starting with the biggest notes. Write the total in the counting table.', tip: 'Say each running total out loud: one hundred, two hundred, two hundred and fifty…' },
      { title: 'Make five price tags', text: 'Pick five things at home, like a pencil, an eraser, a notebook, a biscuit packet and a juice box. Write a price under ₹100 on a sticky note for each.' },
      { title: 'Play shopkeeper', text: 'A family member or your class partner buys one thing and pays with a bigger note. Count up from the price to find the change.' },
      { title: 'Record every sale', text: 'Write each sale in the counter log: item, price, money paid and change given. Swap roles and play again.' },
    ],
  },
  acts: [
    {
      budget: 100,
      title: 'Kirana run with ₹100',
      prompt: 'Amma sends you to the kirana shop with ₹100. You must buy bread and milk. Can you add a treat and still bring back at least ₹10?',
      items: [
        ['🍞 Bread', 40],
        ['🥛 Milk packet', 30],
        ['🍬 Toffee', 5],
        ['🥤 Juice box', 25],
        ['🍪 Biscuits', 20],
        ['🍫 Big chocolate bar', 40],
      ],
      required: [0, 1],
      minSavings: 10,
      why: 'Bread and milk cost ₹70, so ₹30 is left. Keeping ₹10 for Amma means your treat can cost at most ₹20: the toffee or the biscuits fit, but the juice box or the chocolate would not.',
    },
    {
      match: 'Count the money: match each handful to its total',
      pairs: [
        ['One ₹100 note and one ₹50 note', '₹150'],
        ['Two ₹20 notes and one ₹10 coin', '₹50'],
        ['One ₹500 note and two ₹100 notes', '₹700'],
        ['Three ₹5 coins and one ₹2 coin', '₹17'],
        ['One ₹200 note, one ₹50 note and one ₹20 note', '₹270'],
      ],
      why: 'Start with the biggest note and add the smaller ones one at a time, saying the running total.',
      hint: 'Count the biggest note first, then add the rest.',
    },
    {
      blanks: 'Meera buys a pencil for ₹7 and pays with a ₹10 coin. Her change is ₹[[1]]. Arjun buys biscuits for ₹25 and pays with a ₹50 note. His change is ₹[[2]]. Zoya buys milk for ₹32 and pays with a ₹50 note. Her change is ₹[[3]]. Kabir buys a notebook for ₹45 and pays with a ₹100 note. His change is ₹[[4]].',
      answers: [
        ['3', 'three'],
        ['25', 'twenty five', 'twenty-five'],
        ['18', 'eighteen'],
        ['55', 'fifty five', 'fifty-five'],
      ],
      why: 'Count up from the price to the money paid. For Zoya: ₹32 to ₹40 is ₹8, and ₹40 to ₹50 is ₹10, so ₹18.',
      hint: 'Start at the price and count up to the note that was paid.',
      title: 'Shop counter: make the change',
    },
    {
      order: 'Put the story of money in order, from the oldest to the newest.',
      steps: ['People swap things they have (barter)', 'People use metal coins', 'People use paper notes', 'People pay with bank cards', 'People pay by scanning a UPI QR code on a phone'],
      why: 'Barter came first, then coins, then paper notes. Cards came much later, and UPI on phones is the newest.',
      title: 'From swapping to scanning',
    },
    {
      mcq: 'Riya buys a storybook for ₹60 and pays with a ₹100 note. The shopkeeper gives her ₹30. What should Riya do?',
      options: ['Say thank you and leave quickly', 'Count up from ₹60 to ₹100, see she should get ₹40, and politely ask for ₹10 more', 'Shout at the shopkeeper', 'Give the book back and go home'],
      answer: 1,
      why: 'From ₹60 to ₹100 is ₹40. Mistakes happen at busy counters, so Riya checks and asks politely.',
      title: 'New situation: the wrong change',
      phase: 'probe',
      wrong: { 0: 'Always count your change before you leave. She is ₹10 short.', 2: 'Shopkeepers are busy and mistakes happen. A polite question fixes it.' },
    },
    {
      projectAct: true,
      title: 'Project: my shop counter game',
      brief: 'Set up a pretend shop at home with five items and price tags. Play shopkeeper with a family member and make change for at least five sales using play money.',
      requirements: ['Five items with price tags, each under ₹100', 'Play money cut out and counted (total written down)', 'Five sales written in the counter log: item, price, money paid, change', 'Counted up from the price for every sale', 'One sale where the customer pays with a ₹100 or bigger note'],
      reflection: 'Which sale was the hardest to give change for, and how did you work it out?',
      tips: ['Biggest notes first when you count.', 'Say the running total out loud.', 'Let your customer count the change too.', 'Swap roles so everyone gets a turn.'],
      minWords: 15,
    },
  ],
  teacher: {
    explain: 'Money is an idea everyone agrees on: a token that has value because we all accept it. Start with barter so children feel the problem (the potter who does not want rice), then show coins, notes and digital money as better and better solutions. Spend most of the class on hands: counting from the biggest note down and making change by counting up from the price, exactly like a kirana shopkeeper. Keep every amount small and real: ₹7 pencils, ₹25 biscuits, ₹40 bread.',
    analogy: 'Money is like a “thank-you ticket” that everyone in the country agrees to accept, so you can swap it for anything instead of hunting for the one person who wants your rice.',
    vocab: [
      ['barter', 'Swapping things directly, without money.'],
      ['coin', 'Metal money, like the ₹1, ₹2, ₹5, ₹10 and ₹20 coins.'],
      ['note', 'Paper money, like the ₹10, ₹50, ₹100 or ₹500 note.'],
      ['change', 'The money you get back when you pay more than the price.'],
      ['UPI', 'A way to send money from one bank account to another using a phone app.'],
    ],
    demo: '1) Hold up (or show on screen) a ₹100 note, a ₹50 note, two ₹10s and a ₹5 coin, all play money. 2) Count wrongly first, starting with the coin, and get muddled; ask the class for a better way. 3) Recount from the biggest note: 100, 150, 160, 170, 175. 4) Set up a “kirana counter” on camera with a pencil box priced ₹35. A volunteer “pays” ₹50. 5) Count up out loud: “35… 5 makes 40… 10 makes 50. Change is ₹15.” 6) Do one more with a deliberate mistake (biscuits ₹25, give back ₹65) and let the class catch it.',
    unplugged: 'Barter market game (5 min): give each child a picture card (rice, pot, goat, mangoes, cloth, shoes) and one secret card saying what they need. They must swap only directly, no money. After 3 minutes, ask who got what they needed and why it was hard. Then hand out ₹10 play-money tokens and replay for 1 minute: watch how much faster it goes.',
    prompts: [
      ['Why was barter hard?', 'The other person might not want your thing, and it was hard to agree what things were worth.'],
      ['Which note do you count first?', 'The biggest one, then smaller notes, then coins.'],
      ['A ₹35 item, paid with ₹50. How do you find the change?', 'Count up from 35 to 50: ₹15.'],
      ['Is money paid by UPI real money?', 'Yes. It moves from one bank account to another, so we spend it just as carefully.'],
      ['What should you do before leaving the counter?', 'Count your change.'],
    ],
    support: 'Give learners who find subtraction hard only coins and notes of ₹1, ₹5 and ₹10 and prices under ₹20. Let them physically count up with the play coins instead of doing it in their heads.',
    stretch: 'Make change with the fewest coins and notes possible (₹63 change from ₹100 for a ₹37 item = ₹50 + ₹10 + ₹2 + ₹1). Who can find a way with only four pieces?',
    mis: [
      ['A bigger coin is always worth more than a note.', 'Value is written on it. A ₹10 note is worth more than a ₹5 coin, however big the coin looks.'],
      ['Change means getting money for free.', 'Change is your own money coming back, because you paid more than the price.'],
      ['UPI money is not real money.', 'It is real money in a bank account, just moved by phone.'],
      ['You find change by guessing.', 'Count up from the price to the money paid, one step at a time.'],
    ],
    successCriteria: ['I can explain why money is easier than barter.', 'I can name Indian coins and notes and count them quickly.', 'I can make change by counting up from the price.', 'I can check my change before I leave a shop.'],
    homework: 'Play the shop counter game at home with a grown-up and record five sales in your counter log. Bring one tricky sale to share.',
    exit: 'A toy costs ₹45. You pay with a ₹100 note. How much change should you get, and how did you work it out?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Barter market game (see Unplugged), then replay with play-money tokens. Ask: which was faster?' },
      { minutes: 4, stage: 'Watch + thumbs poll', doing: 'Play the video. Thumbs poll: “Who has bought something at a kirana shop by themselves?” and “Who has seen someone pay by scanning a QR code?”' },
      { minutes: 5, stage: 'Live demo', doing: 'Count from the biggest note, then the kirana counter: count up to make change. Class catches the planted ₹65 mistake.' },
      { minutes: 7, stage: 'Build along (pairs)', doing: 'Cut out play money, count the cash box, make five price tags, and play shopkeeper in pairs (or with a grown-up at home).' },
      { minutes: 7, stage: 'Counting games', doing: 'Count the money match, then “Shop counter: make the change” as a quick race: first three correct get a shopkeeper star.' },
      { minutes: 6, stage: 'Budget sim', doing: 'Kirana run with ₹100. Pause and ask: who chose the toffee, who chose the biscuits, and why did nobody manage the chocolate?' },
      { minutes: 4, stage: 'Team quiz', doing: 'Quick competition in two teams: “From swapping to scanning” order game, then teams explain one step each.' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: the wrong change (individual). Start the project: my shop counter game.' },
      { minutes: 3, stage: 'Show-and-tell + exit', doing: 'Two pairs show one sale on camera. Exit ticket and homework.' },
    ],
  },
  tasks: [
    { heading: 'Count my cash box', instructions: 'Count your play money, biggest notes first. Fill in the counting table and write the total.', lines: 3, answer: 'With the full play money set: coins ₹220 + notes ₹3,000 = ₹3,220. Accept any correct count of the learner’s own set.' },
  ],
  files: [
    {
      name: 'l01_shop_counter_activity_sheet.md',
      title: 'Activity sheet: my shop counter game',
      audience: 'student',
      content: `# Lesson 1 — What is money? · My shop counter game

${SAFE_NOTE}

${PLAY_MONEY}

## 1. Count my cash box
Start with the biggest notes. Say the running total out loud.

${COUNT_TABLE}

## 2. My shop price tags
| Item from my home | Price (under ₹100) |
|---|---|
| 1. |  |
| 2. |  |
| 3. |  |
| 4. |  |
| 5. |  |

## 3. Counter log (make change by counting up)
| Sale | Item | Price | Money paid | Change (count up!) | Customer checked it? |
|---|---|---|---|---|---|
| 1 |  |  |  |  | ☐ |
| 2 |  |  |  |  | ☐ |
| 3 |  |  |  |  | ☐ |
| 4 |  |  |  |  | ☐ |
| 5 |  |  |  |  | ☐ |

**Worked example:** pencil box ₹35, paid ₹50. Count up: 35 → 40 (₹5) → 50 (₹10). Change = ₹15.

## 4. Quick quiz
1. Why was barter hard? ______________________
2. Name three Indian coins: ______________________
3. Biscuits ₹25, paid ₹100. Change = ₹______

## 5. Tell a grown-up
Tonight, tell a grown-up one thing about how money changed from swapping to UPI.
`,
    },
    {
      name: 'l01_teacher_script.md',
      title: 'Teacher script — Lesson 1',
      audience: 'teacher',
      content: `# Lesson 1 teacher script: What is money?

**You need:** play money (printed sheet), picture cards for the barter game (rice, pot, goat, mangoes, cloth, shoes), a pencil box and biscuit packet as props, price tags.

## 0–5 min · Barter market game
Say: "Today there is no money in the world. You can only swap." Hand out picture cards and secret "I need…" cards. After 3 minutes ask: "Who got what they needed? Why was it hard?"
Expected: "The person didn't want my thing", "How many mangoes is a goat?" Then give everyone ₹10 tokens and replay for one minute. Say: "Money is something everyone agrees to accept. That is its superpower."

## 5–9 min · Video + thumbs poll
Play the video with captions. Pause on "Coins and notes": ask "Which coins have you held?"

## 9–14 min · Live demo
1. Count ₹100 + ₹50 + ₹10 + ₹10 + ₹5 starting with the coin and get muddled on purpose. Ask for a better way.
2. Recount: "100, 150, 160, 170, 175."
3. Kirana counter: pencil box ₹35, volunteer pays ₹50. Say: "I start at 35. Five makes 40. Ten makes 50. Change is ₹15."
4. Planted mistake: biscuits ₹25, paid ₹100, give back ₹65. Wait for someone to catch it. Praise the polite way: "Uncle, I think I should get ₹10 more."

## 14–21 min · Build along
Pairs cut out money, count the cash box, write five price tags, take turns as shopkeeper and customer. Walk around and listen for counting up.

## 21–28 min · Counting games
Match game, then the change race. Answers: ₹3, ₹25, ₹18, ₹55.

## 28–34 min · Budget sim: kirana run with ₹100
Bread ₹40 + milk ₹30 = ₹70. ₹30 left, keep ₹10, so a treat can cost up to ₹20: toffee ₹5 or biscuits ₹20 (not both). Juice ₹25 or chocolate ₹40 break the rule.

## 34–38 min · Team quiz: story of money
Order: barter → coins → notes → cards → UPI.

## 38–42 min · Probe + project start
Riya's storybook: she should get ₹40, not ₹30.

## 42–45 min · Show-and-tell + exit ticket
Exit: toy ₹45, paid ₹100 → ₹55 change.

**If a child says "UPI money isn't real":** "If Papa pays ₹50 by UPI, his bank account has ₹50 less. It's real money that moved by phone."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 2 ─────────────────────────────────
export const M2 = lesson(2, {
  title: 'Needs and Wants',
  objective: 'Sort needs from wants, see that the same thing can be either, and explain what you give up when you choose, while planning a ₹500 school trip.',
  concept: 'Choices have costs',
  minutes: 45,
  hook: ['budget', 500, 150, 'bus ticket'],
  intro: 'Today you will learn the most important money question of all: do I need it, or do I want it?',
  cards: [
    { emoji: '🍚', title: 'Needs', body: 'A need is something you must have to live safely, stay healthy and learn. Food, water, clothes, a home, medicine and school books are needs. Needs come first in every money plan.' },
    { emoji: '🎮', title: 'Wants', body: 'A want is something nice to have, but you can live without it. Toys, video games, chocolates and fancy stickers are wants. Wants are fine, once the needs are covered.' },
    { emoji: '👟', title: 'It depends', body: 'The same thing can be a need or a want. One pair of school shoes is a need, but a fourth pair of shiny shoes is a want. Ask yourself: what happens if I do not buy it?' },
    { emoji: '⚖️', title: 'Every choice has a cost', body: 'Money spent on one thing cannot be spent on another. If Aarav spends ₹100 on a toy car, he gives up the ₹100 comic he also liked. The thing you give up is the real cost of your choice.' },
  ],
  scenes: [
    {
      kind: 'bullets',
      heading: 'The four magic questions',
      bullets: [
        { icon: '🩺', text: 'Do I need it to be safe, healthy or to learn?' },
        { icon: '❓', text: 'What happens if I do not buy it?' },
        { icon: '⏳', text: 'Can I wait a week?' },
        { icon: '⚖️', text: 'What will I give up?' },
      ],
      say: [
        'Before you spend, ask yourself four quick questions.',
        'Do I need this to be safe, healthy or to learn, and what happens if I do not buy it?',
        'Can I wait a week, and will I still want it then?',
        'And finally, what will I give up if I buy it?',
      ],
    },
    {
      kind: 'card',
      heading: 'Zoya’s ice cream choice',
      emoji: '🍦',
      body: 'Zoya has ₹50. An ice cream costs ₹40, but her brother’s birthday is tomorrow and she wanted to buy him a ₹50 card and pencil set.',
      say: [
        'Zoya has fifty rupees, and the ice cream cart is right outside her school.',
        'The ice cream costs forty rupees, but her brother’s birthday gift costs fifty rupees.',
        'If she buys the ice cream, she gives up the gift for her brother.',
        'Zoya decides to wait, because the gift matters more to her today.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Plan the school trip',
      tool: 'Trip planner',
      steps: ['You have ₹500 for the zoo trip.', 'Needs first: bus ₹150, entry ₹100, lunch ₹80, water ₹20.', 'Needs total ₹350, so ₹150 is left.', 'Keep ₹50 safe for an emergency.', 'Choose wants with the last ₹100.'],
      say: [
        'Your class is going to the zoo, and you have five hundred rupees.',
        'First the needs: the bus, the entry ticket, lunch and water come to three hundred and fifty rupees.',
        'That leaves one hundred and fifty rupees, and we keep fifty rupees safe for an emergency.',
        'Now you can choose wants with the last one hundred rupees.',
      ],
    },
  ],
  build: {
    title: 'My needs and wants T-chart',
    intro: 'Make a chart of real things from your own home and day. You will keep it and use it in the next lessons.',
    steps: [
      { title: 'Draw the chart', text: 'Fold a page in half. Write NEEDS on the left and WANTS on the right.' },
      { title: 'Add ten things', text: 'Look around your home and write ten things in the right column: food, toys, clothes, books, gadgets.' },
      { title: 'Star the tricky ones', text: 'Put a star next to anything that could be a need or a want, like shoes or a phone. Write why in a few words.', tip: 'Ask: what happens if I do not have it?' },
      { title: 'Circle a want to wait for', text: 'Circle one want you could wait for. Write what you would buy or save instead.' },
      { title: 'Write the cost of a choice', text: 'Finish the sentence: “If I buy ___, I give up ___.”' },
    ],
  },
  acts: [
    {
      sort: 'Need, want, or it depends?',
      buckets: ['Need', 'Want', 'It depends'],
      items: [
        ['Drinking water', 0],
        ['Medicine when you are sick', 0],
        ['School uniform', 0],
        ['Rice and dal', 0],
        ['Video game', 1],
        ['Chocolate', 1],
        ['Toy car', 1],
        ['Movie ticket', 1],
        ['Shoes', 2],
        ['A new school bag', 2],
        ['A mobile phone', 2],
      ],
      why: 'Needs keep you safe, healthy and learning. Wants are nice extras. Shoes, a school bag or a phone depend on the situation: a first pair of school shoes is a need, a fifth pair is a want; a new bag is a need only if the old one is torn.',
      hint: 'Ask: what happens if I do not have it?',
    },
    {
      budget: 500,
      title: 'School trip with ₹500',
      prompt: 'Your class is going to the zoo. You have ₹500. Buy every need for the trip, keep at least ₹50 for an emergency, then choose wants with what is left.',
      items: [
        ['🚌 Bus ticket', 150],
        ['🎟️ Zoo entry ticket', 100],
        ['🍱 Lunch', 80],
        ['💧 Water bottle', 20],
        ['🍦 Ice cream', 40],
        ['🔑 Tiger keychain', 60],
        ['🧸 Soft toy panda', 150],
        ['🍿 Popcorn', 30],
        ['📸 Photo with the giraffe', 50],
      ],
      required: [0, 1, 2, 3],
      minSavings: 50,
      why: 'The four needs cost ₹350. Keeping ₹50 safe leaves ₹100 for wants: for example ice cream and the keychain, or popcorn and the photo. The soft toy alone would break the emergency money.',
    },
    {
      mcq: 'Aarav has ₹100. He likes a toy car (₹100) and a comic (₹100). He buys the toy car. What did the toy car really cost him?',
      options: ['Nothing, because it was pocket money', '₹100 and the comic he could not buy', 'Only ₹50', 'The comic is free now'],
      answer: 1,
      why: 'Every choice has a cost: the money, and the next best thing you gave up. Aarav gave up the comic.',
      title: 'What did it really cost?',
    },
    {
      match: 'Money words: match each word to its meaning',
      pairs: [
        ['Need', 'Something you must have to live and learn'],
        ['Want', 'Something nice to have that you can live without'],
        ['Choice', 'Picking one thing instead of another'],
        ['Trade-off', 'What you give up when you choose'],
        ['Budget', 'A plan for how to use your money'],
      ],
      why: 'These words help you talk about money decisions clearly.',
    },
    {
      mcq: 'It is July in Mumbai and Kabir’s umbrella broke on the way to school. He has ₹300. He wants a ₹250 cricket bat. An umbrella costs ₹200. What is the smart choice?',
      options: ['Buy the bat, because umbrellas are boring', 'Buy the umbrella first, then save the ₹100 left towards the bat', 'Buy nothing at all', 'Borrow money from a friend to buy both'],
      answer: 1,
      why: 'In the monsoon an umbrella is a need. Needs come first; the bat is a want he can save for.',
      title: 'New situation: the monsoon umbrella',
      phase: 'probe',
      wrong: { 3: 'Borrowing for a want means paying it back later from money you might need. Save for it instead.' },
    },
    {
      write: 'Think of something you want right now. Is it a need or a want? What would you give up to buy it, and is it worth it?',
      keywords: ['want', 'give up'],
      exemplar: 'I want a new cricket ball for ₹60. It is a want, because I already have an old one. If I buy it, I give up two weeks of ice creams. I think it is worth it, because I play every evening.',
      starters: ['I want…', 'It is a want because…', 'If I buy it, I give up…'],
      minWords: 20,
      phase: 'probe',
      title: 'My choice and its cost',
    },
  ],
  teacher: {
    explain: 'A need keeps us safe, healthy and learning; a want is a nice extra. The big idea for this age is that the same item can be either, depending on the situation, and that every choice has a cost: what you give up (opportunity cost, but call it “what you give up”). Use real Indian situations: monsoon umbrellas, school trips, the ice cream cart at the school gate. Wants are not bad; they simply come after needs and are chosen on purpose.',
    analogy: 'Your money is like one plate at a wedding buffet: if you fill it with sweets first, there is no room left for the dal and rice you actually need.',
    vocab: [
      ['need', 'Something you must have to be safe, healthy and learn.'],
      ['want', 'Something nice to have that you can live without.'],
      ['choice', 'Picking one thing instead of another.'],
      ['trade-off', 'What you give up when you choose something.'],
      ['emergency money', 'Money you keep aside in case something unexpected happens.'],
    ],
    demo: '1) Draw a T-chart on screen: NEEDS | WANTS. 2) Call out items and let the class vote with hands up (need) or hands on head (want): water, chocolate, uniform, video game. 3) Say “shoes” and let the class disagree; draw a third column “IT DEPENDS” and explain with school shoes versus a fourth shiny pair. 4) Open the school trip budget sim on screen. Add the soft toy first and show the bar turning red when needs are added. 5) Reset, add the four needs first (₹350), point out ₹150 left, and set aside ₹50. 6) Ask the class to pick wants for the last ₹100.',
    unplugged: 'Desert island game (5 min): show 10 picture cards (water, rice, blanket, medicine, video game, chocolate, toy, comic, torch, ball). Each child may take only five to the island. Pairs compare and explain one choice. Ask: “Which did everyone pick? Which did nobody pick? Why?”',
    prompts: [
      ['What is a need?', 'Something you must have to be safe, healthy and learn.'],
      ['Can shoes be a want?', 'Yes, if you already have the shoes you need; a fourth shiny pair is a want.'],
      ['Aarav buys a toy car instead of a comic. What did he give up?', 'The comic.'],
      ['On the school trip, what do you buy first?', 'The needs: bus, entry, lunch and water.'],
      ['Why keep ₹50 safe on the trip?', 'For an emergency, like a lost water bottle or an extra bus fare.'],
    ],
    support: 'Use picture cards for sorting and give only two buckets (need or want) first. Add “It depends” after they are confident.',
    stretch: 'Plan the school trip with only ₹400. What do you remove, and what do you give up?',
    mis: [
      ['Wants are bad.', 'Wants are fine. We just choose them after the needs, and on purpose.'],
      ['Something I really, really want is a need.', 'Ask: what happens if I do not have it? If you are still safe, healthy and learning, it is a want.'],
      ['If I use pocket money, the choice has no cost.', 'Every rupee spent on one thing cannot be spent on another. That is the cost.'],
      ['Everything is always only a need or only a want.', 'The same thing can be either, depending on the situation.'],
    ],
    successCriteria: ['I can sort things into needs and wants.', 'I can explain why the same thing can be a need or a want.', 'I can say what I give up when I choose.', 'I can buy needs first in a budget.'],
    homework: 'Finish your T-chart with a grown-up. Ask them about one thing they wanted but chose not to buy, and what they bought instead.',
    exit: 'Name one need, one want, and one thing that could be either. Say why for the last one.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Desert island game: choose five cards out of ten, pairs explain one choice.' },
      { minutes: 4, stage: 'Watch + thumbs check', doing: 'Play the video. Thumbs up/down: “Is chocolate a need?” “Is an umbrella in July a need?”' },
      { minutes: 5, stage: 'Live demo', doing: 'Class T-chart vote with hands up / hands on head; add the “It depends” column. Show the school trip sim going red, then fix it.' },
      { minutes: 6, stage: 'Build along', doing: 'My needs and wants T-chart with ten things from home, stars and “If I buy ___, I give up ___”.' },
      { minutes: 6, stage: 'Sort race', doing: 'Team competition: “Need, want, or it depends?” Teams must defend one “it depends” card.' },
      { minutes: 7, stage: 'Budget sim', doing: 'School trip with ₹500. Poll: which wants did you choose with the last ₹100?' },
      { minutes: 5, stage: 'Pair talk', doing: 'Breakout pairs: “What did it really cost?” and the money words match. Each pair shares one trade-off from their own life.' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: the monsoon umbrella, then “My choice and its cost”.' },
      { minutes: 3, stage: 'Show-and-tell + exit', doing: 'Two learners read their choice and its cost. Exit ticket.' },
    ],
  },
  files: [
    {
      name: 'l02_needs_wants_activity_sheet.md',
      title: 'Activity sheet: needs, wants and the ₹500 school trip',
      audience: 'student',
      content: `# Lesson 2 — Needs and wants

${SAFE_NOTE}

## 1. My T-chart
| NEEDS (must have) | WANTS (nice to have) |
|---|---|
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

⭐ Star anything that **depends**. Why? ______________________

## 2. The four magic questions
1. Do I need it to be safe, healthy or to learn?
2. What happens if I do not buy it?
3. Can I wait a week?
4. What will I give up?

## 3. School trip planner (₹500)
| Item | Need or want? | Price | Buy? ☐ |
|---|---|---|---|
| Bus ticket | Need | ₹150 | ☐ |
| Zoo entry | Need | ₹100 | ☐ |
| Lunch | Need | ₹80 | ☐ |
| Water bottle | Need | ₹20 | ☐ |
| Ice cream | Want | ₹40 | ☐ |
| Tiger keychain | Want | ₹60 | ☐ |
| Soft toy panda | Want | ₹150 | ☐ |
| Popcorn | Want | ₹30 | ☐ |
| Photo with giraffe | Want | ₹50 | ☐ |

- Needs total: ₹______
- Money left after needs: ₹______
- Emergency money I keep (at least ₹50): ₹______
- Money for wants: ₹______ → I choose: ______________________

## 4. The cost of a choice
If I buy ______________, I give up ______________.

## 5. Ask a grown-up
"What is something you wanted but chose not to buy? What did you buy instead?"
Their answer: ______________________
`,
    },
    {
      name: 'l02_teacher_script.md',
      title: 'Teacher script — Lesson 2',
      audience: 'teacher',
      content: `# Lesson 2 teacher script: Needs and wants

**You need:** 10 desert-island picture cards, a T-chart on the board or screen, the school trip budget sim open.

## 0–5 min · Desert island
"You are going to an island for a week. You can take only five things." Pairs explain one choice. Most pick water, rice, blanket, medicine, torch. Say: "Those are needs. The others are wants."

## 5–9 min · Video + thumbs check

## 9–14 min · Live demo
- Hands up = need, hands on head = want: water, chocolate, uniform, video game.
- Say "shoes" and let them argue. Add **It depends**. Say: "Ask: what happens if I don't have it?"
- School trip sim: add the soft toy (₹150) and popcorn first, then the needs. Show the red bar. Reset. Needs first (₹350), keep ₹50, wants with ₹100.

## 14–20 min · Build along: T-chart

## 20–26 min · Sort race
Answer key: Need: water, medicine, uniform, rice and dal. Want: video game, chocolate, toy car, movie ticket. It depends: shoes, new school bag, mobile phone. Accept good reasons for other placements, e.g. "uniform depends if I have one already" — praise the reasoning.

## 26–33 min · Budget sim: school trip with ₹500
Valid plans: needs ₹350 + up to ₹100 of wants, e.g. ice cream + keychain (₹100), popcorn + photo (₹80), ice cream + photo (₹90). Soft toy (₹150) breaks the emergency money.

## 33–38 min · Pair talk
Say: "Grown-ups call this opportunity cost. We'll just say: what you give up."

## 38–42 min · Probe
Umbrella first (need in the monsoon), save ₹100 toward the bat.

## 42–45 min · Show-and-tell + exit ticket

**Sensitive note:** families have different amounts of money. Never ask what a child's family owns or earns. Keep examples pretend and positive: choosing on purpose is a skill, not a sign of being rich or poor.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 3 ─────────────────────────────────
export const M3 = lesson(3, {
  title: 'Making a Budget',
  objective: 'Make a simple weekly budget with income, spending and saving, and split pocket money into Spend, Save and Share jars.',
  concept: 'Budget and 3 jars',
  minutes: 45,
  hook: ['budget', 200, 70, 'school snacks'],
  intro: 'Today you become the boss of your money. You will make a real plan for your pocket money and set up three jars.',
  cards: [
    { emoji: '💰', title: 'Income: money in', body: 'Income is the money that comes in, like pocket money, birthday money or a festival gift. Grown-ups earn their income by working at a job or running a business. Your income is where every money plan starts.' },
    { emoji: '🧾', title: 'Spending: money out', body: 'Spending is the money that goes out when you buy something. Write down every rupee you spend, even a five rupee toffee. Small spends add up much faster than you think.' },
    { emoji: '🐷', title: 'Saving: money for later', body: 'Saving is the money you keep for later. Pay yourself first: put savings aside as soon as money comes in, not at the end of the week. Then you will never forget to save.' },
    { emoji: '🫙', title: 'Three jars: Spend, Save, Share', body: 'Split your money into three jars called Spend, Save and Share. For ₹100, you could put ₹50 in Spend, ₹40 in Save and ₹10 in Share. Share money can buy a gift for someone or help a good cause.' },
    { emoji: '📋', title: 'A budget is a plan', body: 'A budget is a plan that says where each rupee will go before you spend it. Income minus spending is what is left to save. If spending is more than income, the plan needs fixing.' },
  ],
  scenes: [
    {
      kind: 'bullets',
      heading: 'Riya’s week',
      bullets: [
        { icon: '💰', text: 'Income: ₹200 pocket money' },
        { icon: '🛒', text: 'Spend jar: ₹110 (snacks, notebook, a comic)' },
        { icon: '🐷', text: 'Save jar: ₹60 (for a skipping rope)' },
        { icon: '🤝', text: 'Share jar: ₹30 (Rakhi gift for her brother)' },
      ],
      say: [
        'Riya gets two hundred rupees of pocket money every week.',
        'As soon as she gets it, she puts sixty rupees in her Save jar and thirty rupees in her Share jar.',
        'That leaves one hundred and ten rupees in her Spend jar for snacks, a notebook and a comic.',
        'One hundred and ten plus sixty plus thirty makes two hundred, so every rupee has a job.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Make a budget in five steps',
      tool: 'My budget planner',
      steps: ['Write your income for the week.', 'List the must-pays, like school snacks.', 'Put savings and sharing aside first.', 'Plan your wants with what is left.', 'At the end of the week, check what you really spent.'],
      say: [
        'Step one, write down your income for the week.',
        'Step two, list the things you must pay for, like school snacks.',
        'Step three, put your savings and sharing money aside first.',
        'Step four, plan your wants, and step five, check at the end of the week what really happened.',
      ],
    },
    {
      kind: 'card',
      heading: 'Spot the leak',
      emoji: '🕳️',
      body: 'Arjun buys a ₹10 packet of chips every day. That is ₹70 a week and ₹280 a month!',
      say: [
        'Arjun buys a ten rupee packet of chips every single day.',
        'That does not sound like much, but it is seventy rupees a week.',
        'In a month, it adds up to about two hundred and eighty rupees.',
        'Small daily spends are like a leak in a bucket, so write them down and decide on purpose.',
      ],
    },
  ],
  build: {
    title: 'Make your three jars',
    intro: 'Use three jars, cups or envelopes and your play money. Your jars go home with you, so you can use them with real pocket money if your family agrees.',
    steps: [
      { title: 'Label three jars', text: 'Write SPEND, SAVE and SHARE on three jars, cups or envelopes. Decorate them if you like.' },
      { title: 'Take your pocket money', text: 'Count out ₹200 of play money. This is your pretend income for the week.' },
      { title: 'Pay yourself first', text: 'Put money in SAVE and SHARE first. Then put the rest in SPEND.', tip: 'A simple start: ₹100 Spend, ₹70 Save, ₹30 Share.' },
      { title: 'Write your plan', text: 'In your budget planner, list what the Spend jar must pay for (like snacks) and what you hope to buy.' },
      { title: 'Check the total', text: 'Add the three jars. They must make exactly ₹200. If not, find the mistake.' },
    ],
  },
  acts: [
    {
      sort: 'Spend, Save or Share?',
      buckets: ['Spend jar', 'Save jar', 'Share jar'],
      items: [
        ['A snack at school today', 0],
        ['A sticker pack', 0],
        ['A comic to read this week', 0],
        ['Money towards a cycle next year', 1],
        ['Money for a cricket bat next month', 1],
        ['Money kept for an emergency', 1],
        ['A Rakhi gift for your sister', 2],
        ['Food for the animal shelter', 2],
        ['Books for your school library drive', 2],
      ],
      why: 'Spend is for things now, Save is for later goals and emergencies, and Share is for giving to others or a good cause.',
      hint: 'Is it for me now, for me later, or for someone else?',
    },
    {
      blanks: 'Meera gets ₹200 pocket money and spends ₹120. She has ₹[[1]] left to save. Arjun gets ₹150, spends ₹90 and shares ₹20. He saves ₹[[2]]. Zoya gets ₹100. She puts ₹50 in Spend, ₹10 in Share and the rest in Save. Her Save jar gets ₹[[3]].',
      answers: [
        ['80', 'eighty'],
        ['40', 'forty'],
        ['40', 'forty'],
      ],
      why: 'Income minus spending (and sharing) is what is left to save. Arjun: 150 − 90 − 20 = 40.',
      hint: 'Start with the income and take away each amount.',
      title: 'Budget maths',
    },
    {
      budget: 200,
      title: 'My weekly pocket money (₹200)',
      prompt: 'This week you get ₹200. Put the school snacks, the notebook and your Share jar money in the basket. Keep at least ₹40 for your Save jar. Then pick wants if money is left.',
      items: [
        ['🥪 School snacks for the week', 70],
        ['📓 Notebook for school', 40],
        ['🤝 Share jar: class charity box', 20],
        ['📚 Comic book', 50],
        ['✨ Sticker pack', 30],
        ['🎾 Tennis ball', 60],
        ['🍦 Ice cream', 25],
        ['🎈 Balloon', 10],
      ],
      required: [0, 1, 2],
      minSavings: 40,
      why: 'Snacks, notebook and sharing cost ₹130, leaving ₹70. Keeping ₹40 for the Save jar means wants can cost up to ₹30: the sticker pack, or the ice cream, or the balloon and maybe one more small thing.',
    },
    {
      order: 'Put the budget steps in order.',
      steps: ['Write your income', 'List your must-pays, like school snacks', 'Put savings and sharing aside first', 'Plan your wants with what is left', 'Write down what you really spend', 'Check at the end of the week and fix the plan'],
      why: 'Income first, then must-pays, then pay yourself first, then wants. Tracking and checking make next week’s plan better.',
      title: 'Make a budget step by step',
    },
    {
      mcq: 'Kabir gets ₹500 from his grandparents at Diwali. Which plan follows the three-jar idea?',
      options: ['Spend all ₹500 on toys today', 'Spend ₹250, Save ₹200, Share ₹50', 'Hide all ₹500 and never use any', 'Give it all to a friend to look after'],
      answer: 1,
      why: '₹250 + ₹200 + ₹50 = ₹500, and every jar gets some. That is a balanced plan.',
      title: 'New situation: Diwali money',
      phase: 'probe',
    },
    {
      projectAct: true,
      title: 'Project: my weekly pocket-money budget',
      brief: 'Make a one-week budget for ₹200 of pocket money (or your real pocket money, if your family agrees). Split it into Spend, Save and Share, list what each jar is for, and track your spending for the week.',
      requirements: ['Income for the week written at the top', 'Spend, Save and Share amounts that add up exactly to the income', 'At least three planned spends, with must-pays first', 'A saving reason (what the Save jar is for)', 'A seven-day tracker table to fill in'],
      reflection: 'Why did you choose these amounts for each jar? What will be hardest to stick to?',
      tips: ['Pay yourself first: fill Save and Share before Spend.', 'Check that the three jars add up to your income.', 'Write small spends too.', 'It is okay to fix the plan next week.'],
      minWords: 15,
    },
  ],
  teacher: {
    explain: 'A budget is just a plan for money before you spend it: income in, spending out, the rest saved. Teach “pay yourself first” (savings aside as soon as money arrives) and the three jars: Spend, Save, Share. Pocket money amounts vary a lot between families, so always use the pretend ₹200 and never ask children how much they get. The Share jar matters: giving is part of being good with money, whether it is a Rakhi gift or food for the animal shelter.',
    analogy: 'A budget is like a train timetable for your rupees: every rupee knows which platform (jar) it is going to before it leaves the station.',
    vocab: [
      ['income', 'Money that comes in, like pocket money or a gift.'],
      ['spending', 'Money that goes out when you buy something.'],
      ['saving', 'Money you keep for later.'],
      ['sharing', 'Money you give to help others or a good cause.'],
      ['budget', 'A plan for your money before you spend it.'],
    ],
    demo: '1) Show three labelled jars (or envelopes) on camera and a ₹200 bundle of play money. 2) Do it the wrong way first: spend on snacks, comic, stickers and ice cream, then show nothing left to save. 3) Reset and “pay yourself first”: ₹60 into Save, ₹30 into Share, then the rest into Spend. 4) Write the plan on screen: Income ₹200 = Spend ₹110 + Save ₹60 + Share ₹30, and check it adds up. 5) Open the weekly pocket money sim and buy the three must-haves; show ₹70 left and ask how much can go on wants if we keep ₹40.',
    unplugged: 'Where did the money go? (5 min): give a pair ₹100 of play money and read a story aloud: “On Monday Aarav bought chips for ₹10, Tuesday a pencil for ₹5, Wednesday chips for ₹10…” Pairs pay into a “shop” pile as you read. At the end, ask how much is left and what the money went on. Point out how the small chips add up.',
    prompts: [
      ['What is income?', 'Money that comes in, like pocket money or a gift.'],
      ['What does “pay yourself first” mean?', 'Put savings aside as soon as money comes in, before spending.'],
      ['Name the three jars.', 'Spend, Save and Share.'],
      ['Meera gets ₹200 and spends ₹120. How much is left?', '₹80.'],
      ['What should you do if spending is more than income?', 'Fix the plan: cut a want or spend less.'],
    ],
    support: 'Use only ₹10 and ₹50 play notes so the jar maths stays simple (₹100 = five ₹10 notes in Spend, four in Save, one in Share).',
    stretch: 'Make a budget for a month (four weeks of ₹200) that saves for a ₹500 goal. How much must go in Save each week?',
    mis: [
      ['Saving is whatever is left at the end.', 'Usually nothing is left! Save first, as soon as the money comes in.'],
      ['Small spends do not matter.', '₹10 a day is ₹70 a week. Small spends add up.'],
      ['A budget means you can never buy fun things.', 'A budget plans fun things too, on purpose.'],
      ['Sharing means losing money.', 'Sharing is a choice to help others. It is part of a good money plan.'],
    ],
    successCriteria: ['I can explain income, spending and saving.', 'I can split money into Spend, Save and Share jars.', 'I can make a weekly budget that adds up.', 'I can find small spends that add up.'],
    homework: 'Use your three jars for a week (play money or real pocket money if your family agrees). Fill in the seven-day tracker and bring it next class.',
    exit: 'You get ₹150. You put ₹50 in Save and ₹20 in Share. How much is in your Spend jar?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Where did the money go?” story game with ₹100 of play money in pairs.' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the video. Poll: “Which jar would you fill first?” (fingers: 1 Spend, 2 Save, 3 Share).' },
      { minutes: 5, stage: 'Live demo', doing: 'Wrong way then right way with three jars; write the budget equation on screen and check it adds up.' },
      { minutes: 7, stage: 'Build along', doing: 'Make your three jars, pay yourself first with ₹200 play money, write the plan, check the total.' },
      { minutes: 7, stage: 'Budget sim', doing: 'My weekly pocket money (₹200). Thumbs check: who kept at least ₹40? Volunteers share their wants.' },
      { minutes: 6, stage: 'Team relay', doing: 'Quick competition: teams take turns on the Spend/Save/Share sort, then race the budget maths.' },
      { minutes: 4, stage: 'Pairs: order game', doing: 'Breakout pairs: “Make a budget step by step”, then the Diwali money probe.' },
      { minutes: 4, stage: 'Project', doing: 'Start “My weekly pocket-money budget” in the planner; finish at home.' },
      { minutes: 3, stage: 'Show-and-tell + exit', doing: 'Two learners show their jars and plan. Exit ticket.' },
    ],
  },
  files: [
    {
      name: 'l03_weekly_budget_planner.md',
      title: 'Activity sheet: my weekly pocket-money budget and three jars',
      audience: 'student',
      content: `# Lesson 3 — Making a budget · My weekly pocket-money budget

${SAFE_NOTE}

## 1. Jar labels (cut out and stick on)
| SPEND 🛒 | SAVE 🐷 | SHARE 🤝 |
|---|---|---|
| For things I need or want this week | For a goal or an emergency | For gifts and good causes |

## 2. My budget plan
**Income this week:** ₹______ (practice amount: ₹200)

| Jar | Amount | What it is for |
|---|---|---|
| Save (fill first!) | ₹ |  |
| Share | ₹ |  |
| Spend | ₹ |  |
| **Total (must equal income)** | ₹ |  |

**Planned spends (must-pays first):**
| Item | Must-pay or want? | Price |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

## 3. Seven-day tracker
| Day | What I spent on | Amount | Money left in Spend jar |
|---|---|---|---|
| Mon |  |  |  |
| Tue |  |  |  |
| Wed |  |  |  |
| Thu |  |  |  |
| Fri |  |  |  |
| Sat |  |  |  |
| Sun |  |  |  |

## 4. End-of-week check
- Did I stay inside my Spend jar? ☐ Yes ☐ No
- One small spend that added up: ______________
- Next week I will change: ______________

## 5. Worked example (Riya)
Income ₹200 → Save ₹60, Share ₹30, Spend ₹110. Check: 60 + 30 + 110 = 200 ✔
`,
    },
    {
      name: 'l03_teacher_script.md',
      title: 'Teacher script — Lesson 3',
      audience: 'teacher',
      content: `# Lesson 3 teacher script: Making a budget

**You need:** three jars or envelopes labelled SPEND / SAVE / SHARE, ₹200 play money, the "Where did the money go?" story.

## 0–5 min · Where did the money go?
Story (read slowly; pairs pay into a shop pile): "Monday: chips ₹10. Tuesday: pencil ₹5. Wednesday: chips ₹10. Thursday: sticker ₹15. Friday: chips ₹10. Saturday: ice cream ₹25." Spent ₹75, left ₹25. Ask: "What did most of the money go on?" (chips: ₹30).

## 5–9 min · Video + poll

## 9–14 min · Live demo
- Wrong way: spend first, nothing to save.
- Right way: "I pay myself first." ₹60 Save, ₹30 Share, ₹110 Spend. Write: 200 = 110 + 60 + 30.
- Sim: snacks ₹70 + notebook ₹40 + share ₹20 = ₹130. Left ₹70. Keep ₹40 → wants up to ₹30.

## 14–21 min · Build along: three jars

## 21–28 min · Budget sim
Valid wants: sticker pack (₹30), or ice cream (₹25), or balloon (₹10), or ice cream alone, or balloon + nothing over ₹20 more. Comic (₹50) or tennis ball (₹60) break the Save goal.

## 28–34 min · Team relay
Sort key: Spend = snack, stickers, comic. Save = cycle, bat, emergency. Share = Rakhi gift, animal shelter, library books. Blanks: ₹80, ₹40, ₹40.

## 34–38 min · Order game + Diwali probe (B: ₹250 / ₹200 / ₹50)

## 38–42 min · Project start

## 42–45 min · Show-and-tell + exit (₹80)

**Never ask** how much pocket money a child gets. Say: "We all use the practice amount of ₹200."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 4 ─────────────────────────────────
export const M4 = lesson(4, {
  title: 'Project: Plan a Birthday Party on ₹2,000',
  objective: 'Plan a birthday party on ₹2,000 that covers the must-haves, picks nice-to-haves that fit, keeps ₹200 as savings, and present it like a party planner.',
  concept: 'Planning a budget',
  minutes: 45,
  hook: ['budget', 2000, 500, 'birthday cake'],
  intro: 'It’s project time, and today you are a party planner with two thousand rupees to spend!',
  cards: [
    { emoji: '🎂', title: 'Your party brief', body: 'You have ₹2,000 to plan a birthday party for ten friends. You must keep at least ₹200 as savings. Your plan must cover the must-haves before any nice-to-haves.' },
    { emoji: '✅', title: 'Must-haves first', body: 'Must-haves are the things the party cannot happen without. For our party, they are a cake, snacks, drinks and simple decorations. Price these first and add them up.' },
    { emoji: '⭐', title: 'Then nice-to-haves', body: 'Nice-to-haves make the party extra fun, like return gifts, a magician or a music speaker. Choose them only with the money left after the must-haves and savings. You cannot have them all, so pick your favourites.' },
    { emoji: '🎤', title: 'Present like a planner', body: 'Show your plan to the class like a real party planner. Say your total, your savings and one hard choice you made. Explain what you gave up and why.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Price the must-haves',
      tool: 'Party planner',
      steps: ['Budget ₹2,000, savings to keep ₹200.', 'Cake ₹500 + snacks ₹400 + drinks ₹200 + decorations ₹200.', 'Must-haves total = ₹1,300.', '₹2,000 − ₹1,300 − ₹200 savings = ₹700 for nice-to-haves.'],
      say: [
        'Our party budget is two thousand rupees, and we will keep two hundred rupees as savings.',
        'The cake, snacks, drinks and decorations add up to one thousand three hundred rupees.',
        'Two thousand minus one thousand three hundred is seven hundred rupees.',
        'Take away the two hundred rupees of savings, and five hundred rupees is left for nice-to-haves.',
      ],
    },
    {
      kind: 'card',
      heading: 'The hard choice',
      emoji: '🤔',
      body: 'A magician costs ₹800. Return gifts (₹300) and party hats (₹100) cost ₹400 together. With ₹500 to spend, what would you choose?',
      say: [
        'Meera really wants a magician, but the magician costs eight hundred rupees.',
        'That is more than the five hundred rupees she has for nice-to-haves.',
        'Return gifts and party hats together cost four hundred rupees, and they fit.',
        'Meera chooses the return gifts and hats, and she says what she gave up when she presents.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'What makes a great presentation',
      bullets: [
        { icon: '🧾', text: 'Show every item and its price' },
        { icon: '➕', text: 'Say your total and your savings' },
        { icon: '⚖️', text: 'Share one hard choice and what you gave up' },
        { icon: '😊', text: 'Speak clearly and smile' },
      ],
      say: [
        'A great presentation shows every item and its price, so anyone can check your maths.',
        'Say your total spending and how much you saved.',
        'Then share one hard choice, and what you gave up to make it.',
        'Speak slowly and clearly, and smile, because you are the party planner today.',
      ],
    },
  ],
  build: {
    title: 'Build your party plan sheet',
    intro: 'Use the party planner in your activity sheet. By the end you will have a full, checked party plan to present.',
    steps: [
      { title: 'Write the brief', text: 'At the top, write: Budget ₹2,000. Savings to keep: ₹200. Guests: 10 friends.' },
      { title: 'List must-haves', text: 'Write the cake, snacks, drinks and decorations with their prices, and add them up.' },
      { title: 'Find your fun money', text: 'Take away the must-haves total and the ₹200 savings from ₹2,000. This is your money for nice-to-haves.', tip: '2,000 − 1,300 − 200 = 500' },
      { title: 'Pick nice-to-haves', text: 'Choose nice-to-haves that fit inside your fun money. Write what you gave up.' },
      { title: 'Check everything', text: 'Add all your spending and your savings. Together they must be ₹2,000 or less.' },
      { title: 'Practise your pitch', text: 'Practise saying your plan in under one minute: total, savings, and one hard choice.' },
    ],
  },
  acts: [
    {
      sort: 'Must-have or nice-to-have for the party?',
      buckets: ['Must-have', 'Nice-to-have'],
      items: [
        ['Birthday cake', 0],
        ['Snacks for the guests', 0],
        ['Drinks and water', 0],
        ['Simple decorations', 0],
        ['Magician show', 1],
        ['Balloon arch', 1],
        ['Return gifts', 1],
        ['Music speaker on rent', 1],
        ['Party hats', 1],
      ],
      why: 'A birthday party needs a cake, food, drinks and a little decoration. Everything else makes it more fun, but the party still works without it.',
    },
    {
      budget: 2000,
      title: 'The ₹2,000 birthday party',
      prompt: 'Plan a birthday party for ten friends with ₹2,000. Buy all the must-haves, keep at least ₹200 as savings, and choose nice-to-haves with the rest.',
      items: [
        ['🎂 Birthday cake', 500],
        ['🥟 Snacks: samosas and sandwiches', 400],
        ['🧃 Juice and water', 200],
        ['🎀 Simple decorations', 200],
        ['🎁 Return gifts for 10 friends', 300],
        ['🎩 Magician show', 800],
        ['🎈 Balloon arch', 350],
        ['🔊 Music speaker on rent', 250],
        ['🥳 Party hats', 100],
      ],
      required: [0, 1, 2, 3],
      minSavings: 200,
      why: 'The must-haves cost ₹1,300. Keeping ₹200 leaves ₹500 for nice-to-haves: for example return gifts and hats (₹400), or the speaker and hats (₹350), or the balloon arch and hats (₹450). The magician alone (₹800) does not fit.',
    },
    {
      order: 'Plan a party like a pro: put the steps in order.',
      steps: ['Write the total budget and the savings you will keep', 'List the must-haves and their prices', 'Add up the must-haves', 'Work out what is left for nice-to-haves', 'Pick nice-to-haves that fit', 'Check the final total and present the plan'],
      why: 'Budget and savings first, then must-haves, then fun money, then choices, then a final check.',
      title: 'Party planning steps',
    },
    {
      mcq: 'Zoya’s party plan adds up to ₹2,300, but she has only ₹2,000 and wants to save ₹200. What is the best fix?',
      options: ['Remove the cake', 'Remove a nice-to-have, such as the ₹800 magician, and check the total again', 'Ignore it and hope it works out', 'Use her savings without telling anyone'],
      answer: 1,
      why: 'Cut nice-to-haves, never must-haves. Without the ₹800 magician, her plan is ₹1,500, so she keeps ₹500.',
      title: 'Over budget!',
    },
    {
      mcq: 'Your plan had exactly ₹200 of savings left. Now the bakery says the cake costs ₹600, not ₹500. What should you do?',
      options: ['Cut your savings to ₹100 without thinking', 'Drop or swap a ₹100 nice-to-have, like the party hats, so savings stay ₹200', 'Cancel the whole party', 'Skip the drinks'],
      answer: 1,
      why: 'When a price goes up, the plan changes: drop a nice-to-have of the same cost so the must-haves and savings stay safe.',
      title: 'New situation: the cake price goes up',
      phase: 'probe',
    },
    {
      projectAct: true,
      title: 'Module project: my ₹2,000 birthday party plan',
      brief: 'Plan a birthday party for ten friends with ₹2,000. Cover every must-have, choose nice-to-haves that fit, keep at least ₹200 as savings, and present your plan to the class in under one minute.',
      requirements: ['A list of must-haves with prices and their total', 'Nice-to-haves that fit, with prices', 'Savings of at least ₹200', 'A final check: spending plus savings is not more than ₹2,000', 'One hard choice explained: what you gave up and why', 'A one-minute presentation or recording'],
      reflection: 'What was the hardest thing to leave out, and how did you decide?',
      tips: ['Must-haves first, always.', 'Write the maths so anyone can check it.', 'Practise your one-minute pitch with a timer.', 'Be proud of your savings!'],
      minWords: 20,
    },
  ],
  teacher: {
    explain: 'This is the Module 1 project: children use everything so far (counting, needs and wants, trade-offs and budgets) to plan a ₹2,000 birthday party. The order is the lesson: must-haves first, savings kept aside, then nice-to-haves with what is left. The presentation builds confidence and shows understanding: every child names one hard choice and what they gave up. Keep the party pretend and the amounts identical for everyone, so it is about skill, not about whose family spends more.',
    analogy: 'Planning a party is like packing a school bag: books and lunch go in first, and toys only go in if there is still room.',
    vocab: [
      ['must-have', 'Something the plan cannot work without.'],
      ['nice-to-have', 'Something that makes it better, but is not needed.'],
      ['total', 'All the prices added together.'],
      ['savings', 'Money you keep and do not spend.'],
      ['over budget', 'When your plan costs more than the money you have.'],
    ],
    demo: '1) Show the brief: ₹2,000, keep ₹200, ten friends. 2) In the party sim, “get excited” and add the magician and balloon arch first. Show the bar going red before the cake is even in. 3) Reset. Add cake, snacks, drinks and decorations: ₹1,300. Say: “₹700 left, and ₹200 must stay. So ₹500 of fun money.” 4) Think aloud about the magician (₹800, does not fit) versus return gifts and hats (₹400, fits). 5) Present your own plan in 45 seconds as a model, including “I gave up the magician because…”',
    unplugged: 'Party price guess (5 min): show pictures of party items one by one (cake, samosas, balloons, a magician). Teams hold up guesses on paper: “more or less than ₹500?” Reveal the course prices. Ask: “Which surprised you?” This makes the prices memorable before planning.',
    prompts: [
      ['What do you buy first in a party plan?', 'The must-haves: cake, snacks, drinks, decorations.'],
      ['How much fun money is left after ₹1,300 of must-haves and ₹200 savings?', '₹500.'],
      ['Why does the magician not fit?', 'It costs ₹800, more than the ₹500 of fun money.'],
      ['Your plan is over budget. What do you cut?', 'A nice-to-have, never a must-have or the savings.'],
      ['What makes a good presentation?', 'Items and prices, the total, the savings, and one hard choice explained.'],
    ],
    support: 'Give a half-filled planner with the must-haves already listed. Learners only choose nice-to-haves and do the final check with the teacher.',
    stretch: 'Plan the same party for 15 friends: snacks, drinks and return gifts cost half as much again (snacks ₹600, drinks ₹300, return gifts ₹450). Can it still work with ₹2,000 and ₹200 savings?',
    mis: [
      ['If something is fun, it is a must-have.', 'Must-haves are what the party cannot happen without. Fun extras are nice-to-haves.'],
      ['Savings can be spent if the plan runs short.', 'Cut a nice-to-have first; savings stay safe.'],
      ['Close to the budget is good enough.', 'Even ₹50 over is over budget. Check the total exactly.'],
      ['A good party needs everything.', 'A good plan picks favourites. Choosing is the skill.'],
    ],
    successCriteria: ['I can list must-haves first and add them up.', 'I can work out how much is left for nice-to-haves.', 'I can keep savings safe and stay within budget.', 'I can present my plan and explain one hard choice.'],
    homework: 'Show your party plan to a grown-up at home and present it in one minute. Ask them for one star and one wish.',
    exit: 'Your must-haves cost ₹1,300 and you keep ₹200. How much can you spend on nice-to-haves from ₹2,000?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Party price guess: teams guess more or less than ₹500 for each item.' },
      { minutes: 4, stage: 'Watch + brief', doing: 'Play the project video and read the brief together. Thumbs check: “Must-haves first, savings safe, then fun?”' },
      { minutes: 4, stage: 'Live demo', doing: 'Wrong way then right way in the party sim; model a 45-second presentation.' },
      { minutes: 8, stage: 'Plan in pairs', doing: 'Breakout pairs: the must-have sort, then the ₹2,000 party budget sim. Pairs agree on one plan.' },
      { minutes: 8, stage: 'Build the plan sheet', doing: 'Each learner fills the party planner, does the final check, and practises the pitch with a partner.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Party planner pitches: 4–5 learners present in one minute each (timer on screen).' },
      { minutes: 4, stage: 'Peer feedback + vote', doing: 'Two stars and a wish for a partner; class poll for “best hard choice explained”.' },
      { minutes: 3, stage: 'Probe', doing: 'Over budget! and New situation: the cake price goes up.' },
      { minutes: 3, stage: 'Submit + exit', doing: 'Submit the module project (plan + reflection). Exit ticket.' },
    ],
  },
  project: {
    title: 'My ₹2,000 birthday party plan',
    brief: 'Plan a birthday party for ten friends with ₹2,000: cover every must-have, choose nice-to-haves that fit, keep at least ₹200 as savings, and present the plan in under one minute.',
    requirements: ['Must-haves listed with prices and a total', 'Nice-to-haves chosen to fit the money left', 'At least ₹200 kept as savings', 'Final check: spending plus savings is ₹2,000 or less', 'One hard choice explained (what was given up and why)', 'A one-minute presentation or recording'],
    milestones: ['Must-haves listed and added up', 'Fun money worked out and nice-to-haves chosen', 'Final check done and plan written neatly', 'One-minute presentation given'],
    rubric: [
      { criterion: 'Needs first', levels: ['Must-haves are missing', 'Most must-haves are there', 'All must-haves are listed with prices', 'All must-haves with prices, and explains why each is a must-have'] },
      { criterion: 'Money maths', levels: ['Totals are missing or wrong', 'Totals are there with some mistakes', 'All totals correct and within budget', 'All totals correct, shown step by step, and checked twice'] },
      { criterion: 'Savings and choices', levels: ['No savings kept', 'Some savings, but less than ₹200', 'At least ₹200 saved and one choice explained', '₹200 or more saved, and a clear trade-off explained with what was given up'] },
      { criterion: 'Presentation', levels: ['Did not present', 'Presented with lots of help', 'Presented clearly in about one minute', 'Confident, clear and under one minute, and answered a question'] },
    ],
    extensions: ['Plan the party for 15 friends and see if it still fits.', 'Find real prices for two items from a shop near you (with a grown-up) and compare them with the course prices.', 'Plan a party with only ₹1,500 and explain what changes.'],
  },
  files: [
    {
      name: 'l04_party_planner_sheet.md',
      title: 'Activity sheet: ₹2,000 birthday party planner',
      audience: 'student',
      content: `# Lesson 4 — Module project · My ₹2,000 birthday party plan

${SAFE_NOTE}

**Brief:** Budget ₹2,000 · Keep at least ₹200 savings · 10 friends

## 1. Price list (course prices)
| Item | Must-have or nice-to-have? | Price |
|---|---|---|
| Birthday cake | Must-have | ₹500 |
| Snacks: samosas and sandwiches | Must-have | ₹400 |
| Juice and water | Must-have | ₹200 |
| Simple decorations | Must-have | ₹200 |
| Return gifts for 10 friends | Nice-to-have | ₹300 |
| Magician show | Nice-to-have | ₹800 |
| Balloon arch | Nice-to-have | ₹350 |
| Music speaker on rent | Nice-to-have | ₹250 |
| Party hats | Nice-to-have | ₹100 |

## 2. My plan
**Must-haves**
| Item | Price |
|---|---|
|  |  |
|  |  |
|  |  |
|  |  |
| **Must-haves total** | ₹ |

**My fun money:** ₹2,000 − ₹______ (must-haves) − ₹200 (savings) = ₹______

**Nice-to-haves I chose**
| Item | Price |
|---|---|
|  |  |
|  |  |
| **Nice-to-haves total** | ₹ |

## 3. Final check
Must-haves ₹______ + nice-to-haves ₹______ + savings ₹______ = ₹______ (must be ₹2,000 or less) ☐

## 4. My hard choice
I really wanted ______________, but I gave it up because ______________.

## 5. My one-minute pitch
"Hello, I am ______, party planner! My party costs ₹______ and I saved ₹______. I chose ______ because ______. I gave up ______."

## 6. Two stars and a wish (from a friend)
⭐ ______________ ⭐ ______________ 🌱 ______________
`,
    },
    {
      name: 'l04_teacher_script.md',
      title: 'Teacher script — Lesson 4 (module project)',
      audience: 'teacher',
      content: `# Lesson 4 teacher script: Plan a birthday party on ₹2,000

**You need:** party item pictures for the guess game, the party sim on screen, a timer, the rubric.

## 0–5 min · Party price guess
Teams show "more" or "less" than ₹500 for: cake (₹500, exactly!), samosas (₹400), balloon arch (₹350), magician (₹800).

## 5–9 min · Video + brief

## 9–13 min · Live demo
Wrong way: magician + balloon arch first = ₹1,150 before the cake. Right way: must-haves ₹1,300, savings ₹200, fun money ₹500. Model pitch: "My party costs ₹1,700 and I saved ₹300. I chose return gifts because every friend takes something home. I gave up the magician because it cost ₹800."

## 13–21 min · Plan in pairs
Valid nice-to-have combos within ₹500: return gifts + hats (₹400); speaker + hats (₹350); balloon arch + hats (₹450); return gifts alone (₹300); speaker alone; balloon arch alone. Not valid: magician; return gifts + speaker (₹550); return gifts + balloon arch (₹650).

## 21–29 min · Build the plan sheet

## 29–35 min · Pitches (one minute each, timer on screen)
Ask one question per pitch: "What would you cut first if the cake cost more?"

## 35–39 min · Two stars and a wish + class vote

## 39–42 min · Probe
Zoya: cut the magician. Cake ₹600: drop the ₹100 hats.

## 42–45 min · Submit + exit (₹500)

**Marking:** use the 4-criterion rubric (needs first, money maths, savings and choices, presentation).
`,
    },
  ],
});
