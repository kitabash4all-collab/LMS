// Money Smart · Level 1 · Module 2 — Smart with money (lessons 5–8).
// Saving for goals, smart shopping, digital money safety, and a capstone mini market stall.
import { lesson } from '../kit.ts';
import { COUNT_TABLE, PLAY_MONEY, SAFE_NOTE } from './data.ts';

// ───────────────────────────────── Lesson 5 ─────────────────────────────────
export const M5 = lesson(5, {
  title: 'Saving for a Goal',
  objective: 'Set a savings goal with a price and a date, work out how many weeks it will take, and track it on a chart.',
  concept: 'Goals and patience',
  minutes: 45,
  hook: ['pattern', ['₹100', '₹200', '₹300', '₹400'], '₹500'],
  intro: 'What would you love to buy one day? Today you will make a real plan to get there, one week at a time.',
  cards: [
    { emoji: '🎯', title: 'Pick a clear goal', body: 'A goal is something you want to buy later, like a cycle or a cricket bat. A clear goal has a name, a price and a date. For example, a ₹900 cricket bat by the summer holidays is a clear goal.' },
    { emoji: '➗', title: 'How many weeks?', body: 'Divide the price by the amount you can save each week. A ₹900 bat with ₹100 saved each week takes 9 weeks. Save a little more each week, and you get there sooner.' },
    { emoji: '📈', title: 'Track it on a chart', body: 'Draw a savings chart and colour one box every time you add money. Watching the chart fill up keeps you going. Write the date next to each box.' },
    { emoji: '🐢', title: 'Patience pays', body: 'Saving takes patience, like waiting for a mango to ripen. Every time you skip a small want, your goal comes closer. If you miss a week, simply start again the next week.' },
    { emoji: '🎁', title: 'Boosts help', body: 'Birthday money, festival gifts or money for helping at home are boosts. Put part of every boost into your goal. You will be surprised how fast it grows.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Meera’s cycle plan',
      tool: 'Savings goal planner',
      steps: ['Goal: a cycle for ₹3,000 by Diwali.', 'Meera already has ₹600.', 'Still needed: ₹3,000 − ₹600 = ₹2,400.', 'She can save ₹200 a week.', '₹2,400 ÷ ₹200 = 12 weeks.'],
      say: [
        'Meera wants a cycle that costs three thousand rupees, and she wants it by Diwali.',
        'She already has six hundred rupees saved, so she needs two thousand four hundred rupees more.',
        'She can save two hundred rupees every week from her pocket money and helping at home.',
        'Two thousand four hundred divided by two hundred is twelve, so Meera needs twelve weeks.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Kabir’s bat chart',
      bullets: [
        { icon: '🟩', text: 'Week 1: ₹100' },
        { icon: '🟩', text: 'Week 2: ₹200' },
        { icon: '⬜', text: 'Week 3: missed! Start again' },
        { icon: '🟩', text: 'Week 4: ₹300 … Week 10: ₹900 🏏' },
      ],
      say: [
        'Kabir is saving one hundred rupees a week for a nine hundred rupee cricket bat.',
        'He colours one box on his chart every week, so he can see his savings grow.',
        'In week three he spent his money on snacks, so he did not colour a box.',
        'He did not give up, and in week ten his chart was full and he bought the bat.',
      ],
    },
    {
      kind: 'card',
      heading: 'Now or later?',
      emoji: '🍬',
      body: 'Riya can buy a ₹20 lollipop today, or put the ₹20 towards her ₹480 board game. Each skipped treat is one step closer.',
      say: [
        'Riya sees a lollipop for twenty rupees, and she really wants it.',
        'She is also saving for a board game that costs four hundred and eighty rupees.',
        'She thinks about her goal, puts the twenty rupees in her Save jar, and colours her chart.',
        'Choosing later over now is hard, and that is exactly what makes saving a superpower.',
      ],
    },
  ],
  build: {
    title: 'Make your savings goal chart',
    intro: 'Use squared paper or the chart in your activity sheet. You will take it home and colour it in every week.',
    steps: [
      { title: 'Choose your goal', text: 'Pick one thing you would love to buy, like a cricket bat, a book set or a skipping rope. Write its name and price.', tip: 'Ask a grown-up to help you find a real price.' },
      { title: 'Count what you have', text: 'Write how much you have already saved. Take it away from the price to find how much more you need.' },
      { title: 'Pick a weekly amount', text: 'Decide how much you can save each week from your Save jar.' },
      { title: 'Work out the weeks', text: 'Divide the amount you need by your weekly saving. That is how many boxes your chart needs.' },
      { title: 'Draw the chart', text: 'Draw one box for each week and write the running total in each box. Draw your goal at the end of the chart.' },
    ],
  },
  acts: [
    {
      blanks: 'A cricket bat costs ₹900. Kabir saves ₹100 each week, so he needs [[1]] weeks. A cycle costs ₹3,000. Meera already has ₹600, so she needs ₹[[2]] more. If she saves ₹200 a week, that takes [[3]] weeks. A board game costs ₹480. Riya saves ₹60 a week, so she needs [[4]] weeks.',
      answers: [
        ['9', 'nine'],
        ['2400', '2,400', 'two thousand four hundred'],
        ['12', 'twelve'],
        ['8', 'eight'],
      ],
      why: 'Find how much more you need, then divide by the weekly saving: 900 ÷ 100 = 9, 2,400 ÷ 200 = 12, 480 ÷ 60 = 8.',
      hint: 'How many groups of the weekly saving fit into the amount needed?',
      title: 'How many weeks?',
    },
    {
      budget: 150,
      title: 'Saving week: keep ₹100 for the bat',
      prompt: 'You get ₹150 this week. You are saving for a cricket bat, so keep at least ₹100. Buy your school snack, then decide if any treat fits.',
      items: [
        ['🥪 School snack', 30],
        ['🥟 Pani puri with friends', 20],
        ['📚 Comic', 40],
        ['✨ Stickers', 15],
        ['🎮 Game zone token', 50],
        ['🍭 Lollipop', 5],
      ],
      required: [0],
      minSavings: 100,
      why: 'After the ₹30 snack you have ₹120. Keeping ₹100 for the bat leaves just ₹20 for treats: pani puri, or the stickers and the lollipop. The comic or the game token would push your goal back a week.',
    },
    {
      order: 'Put the steps to reach a savings goal in order.',
      steps: ['Choose your goal and find its price', 'Count the money you already have', 'Work out how much more you need', 'Decide how much to save each week', 'Work out how many weeks it will take', 'Colour your chart every week until you reach it'],
      why: 'Goal and price first, then what you have, what you need, the weekly amount, the number of weeks, and then the patient part: tracking.',
      title: 'My savings plan steps',
    },
    {
      match: 'Saving words: match each word to its meaning',
      pairs: [
        ['Goal', 'The thing you are saving for'],
        ['Target', 'The amount of money you need'],
        ['Savings chart', 'A chart you colour as your savings grow'],
        ['Patience', 'Waiting calmly for something better later'],
        ['Boost', 'Extra money, like a birthday gift'],
        ['Deadline', 'The date you want to reach your goal by'],
      ],
      why: 'These words help you plan and talk about your savings.',
    },
    {
      mcq: 'Kabir needs ₹900 for a bat. He has saved ₹400. His aunt gives him ₹200 for his birthday and he puts it all in. He saves ₹100 a week. How many more weeks does he need?',
      options: ['3 weeks', '5 weeks', '9 weeks', '1 week'],
      answer: 0,
      why: '₹400 + ₹200 = ₹600. He needs ₹300 more, and ₹300 ÷ ₹100 = 3 weeks. The birthday boost saved him two weeks.',
      title: 'New situation: a birthday boost',
      phase: 'probe',
      wrong: { 1: 'That is without the birthday money. Add the ₹200 boost first.', 2: 'He has already saved some money. Count what he has first.' },
    },
    {
      projectAct: true,
      title: 'Project: my savings goal planner',
      brief: 'Choose a real goal, find its price with a grown-up, and make a savings planner: how much you need, how much you will save each week, how many weeks it will take, and a chart to colour in.',
      requirements: ['A goal with a name, a price and a date', 'The amount still needed (price minus what you have)', 'A weekly saving amount', 'The number of weeks, worked out', 'A chart with one box per week and running totals', 'One idea for a boost (extra money you could add)'],
      reflection: 'What small want will you skip to reach your goal, and how will you stay patient?',
      tips: ['Choose a goal you really care about.', 'Pick a weekly amount you can actually manage.', 'Stick the chart where you will see it.', 'If you miss a week, just start again.'],
      minWords: 15,
    },
  ],
  teacher: {
    explain: 'Saving is easier with a goal: a name, a price and a date. Children can work out how many weeks a goal takes by dividing what they still need by what they save each week, and a chart they colour in turns patience into a game. Celebrate the “now or later?” moment: skipping a small treat for a bigger goal is the heart of saving. Normalise slip-ups: missing a week is fine; starting again is the skill. Keep divisions friendly (multiples of 50 and 100) for this age.',
    analogy: 'Saving is like growing a mango tree: you water it a little every week, and one day there is fruit you could never get by eating the seeds today.',
    vocab: [
      ['goal', 'Something you are saving up for.'],
      ['target', 'The amount of money you need to reach your goal.'],
      ['savings chart', 'A chart you colour to show your savings growing.'],
      ['patience', 'Waiting calmly for something better later.'],
      ['boost', 'Extra money, like a birthday or festival gift, that you add to your savings.'],
    ],
    demo: '1) Show a picture of a cricket bat with a ₹900 price tag. 2) Ask: “If I save ₹100 a week, how long?” Draw nine empty boxes and fill them in live, saying the running total (100, 200, 300…). 3) Leave week 3 blank and say: “I spent it on snacks. Do I give up?” Class says no. Add a tenth box. 4) Do Meera’s cycle on screen: 3,000 − 600 = 2,400, then 2,400 ÷ 200 = 12. 5) Open the saving week sim and show that the comic would push the goal back a week.',
    unplugged: 'Now or later? (5 min): offer the class a choice in each round: “One sticker now, or three stickers at the end of class?” (use stars on the board or real stickers). Keep a tally. At the end, give the “later” choosers their three. Ask: “How did it feel to wait? Was it worth it?”',
    prompts: [
      ['What three things does a clear goal have?', 'A name, a price and a date.'],
      ['₹900 bat, ₹100 a week. How many weeks?', '9 weeks.'],
      ['Why colour a chart?', 'Seeing savings grow keeps you motivated.'],
      ['You missed a week. What now?', 'Start again next week; add one more box.'],
      ['What is a boost?', 'Extra money like a birthday gift that you add to your goal.'],
    ],
    support: 'Use goals that are multiples of the weekly amount (₹500 at ₹100 a week) and let learners count boxes instead of dividing.',
    stretch: 'If Meera saves ₹250 a week instead of ₹200, how many weeks does the cycle take? (2,400 ÷ 250 is 9.6, so 10 weeks.) Why do we round up?',
    mis: [
      ['Saving means never buying anything fun.', 'Saving means choosing a bigger fun thing later over small things now.'],
      ['If I miss a week, the goal is ruined.', 'Just start again. The goal only moves one week further.'],
      ['Weeks = price ÷ weekly saving, even if I already have some money.', 'First take away what you already have.'],
      ['Boost money should all be spent, because it is extra.', 'Putting part of a boost into your goal gets you there much faster.'],
    ],
    successCriteria: ['I can set a clear goal with a name, a price and a date.', 'I can work out how many weeks a goal will take.', 'I can track my savings on a chart.', 'I can explain why patience helps me save.'],
    homework: 'Finish your savings goal planner with a grown-up, stick the chart on the wall, and colour your first box.',
    exit: 'A book set costs ₹600 and you save ₹50 a week. How many weeks will it take?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Now or later?” sticker choices; tally on the board; ask how waiting felt.' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the video. Poll: “What would you save for?” (chat or hands: cycle, bat, books, toy, something else).' },
      { minutes: 5, stage: 'Live demo', doing: 'Fill a bat chart live, leave a week blank, then Meera’s cycle maths on screen.' },
      { minutes: 7, stage: 'Build along', doing: 'Make your savings goal chart: goal, price, what you have, weekly amount, weeks, boxes.' },
      { minutes: 6, stage: 'Weeks race', doing: 'Quick competition: “How many weeks?” blanks; first three correct explain their method.' },
      { minutes: 7, stage: 'Budget sim', doing: 'Saving week: keep ₹100 for the bat. Thumbs check: who kept exactly ₹100? Who kept more?' },
      { minutes: 4, stage: 'Pair games', doing: 'Breakout pairs: savings plan steps (order) and saving words (match).' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: a birthday boost. Start the savings goal planner project.' },
      { minutes: 3, stage: 'Show-and-tell + exit', doing: 'Three learners hold up their charts and say their goal and weeks. Exit ticket.' },
    ],
  },
  files: [
    {
      name: 'l05_savings_goal_planner.md',
      title: 'Activity sheet: my savings goal planner',
      audience: 'student',
      content: `# Lesson 5 — Saving for a goal · My savings goal planner

${SAFE_NOTE}

## 1. My goal
- I am saving for: ______________________
- Price: ₹______ (found with: ______________)
- I want it by (date): ______________

## 2. The maths
| Step | Working | Answer |
|---|---|---|
| Price |  | ₹ |
| Money I already have |  | ₹ |
| Still needed = price − what I have |  | ₹ |
| I can save each week |  | ₹ |
| Weeks = still needed ÷ weekly saving (round up) |  | weeks |

**Worked example:** cycle ₹3,000, have ₹600 → need ₹2,400 → save ₹200 a week → 12 weeks.

## 3. My savings chart (colour one box each week, write the running total)
| Week | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total ₹ |  |  |  |  |  |  |  |  |  |  |  |  |
| Date |  |  |  |  |  |  |  |  |  |  |  |  |

Add more boxes if you need them. Missed a week? No problem: add one box and keep going.

## 4. Boost ideas
Extra money I might get (birthday, festival, helping at home): ______________
Part I will add to my goal: ₹______

## 5. My patience promise
To reach my goal, I will skip ______________ and remember ______________.
`,
    },
    {
      name: 'l05_teacher_script.md',
      title: 'Teacher script — Lesson 5',
      audience: 'teacher',
      content: `# Lesson 5 teacher script: Saving for a goal

**You need:** stickers or board stars for "Now or later?", a bat picture with a ₹900 tag, squared paper.

## 0–5 min · Now or later?
Three rounds: 1 sticker now or 3 at the end. Tally. Give the "later" stickers at the end of class, as promised.

## 5–9 min · Video + poll

## 9–14 min · Live demo
Bat chart: 100, 200, (week 3 blank: "I spent it on snacks. Do I give up?") 300 … 900 in week 10. Cycle: 3,000 − 600 = 2,400; 2,400 ÷ 200 = 12 weeks.

## 14–21 min · Build along

## 21–27 min · Weeks race
Answers: 9 weeks, ₹2,400, 12 weeks, 8 weeks.

## 27–34 min · Budget sim
Snack ₹30 → ₹120 left; keep ₹100 → ₹20 for treats: pani puri (₹20), or stickers + lollipop (₹20), or one of them. Comic or game token break the goal.

## 34–38 min · Pair games

## 38–42 min · Probe
Kabir: 400 + 200 = 600; needs 300; 3 weeks.

## 42–45 min · Show-and-tell + exit (₹600 ÷ ₹50 = 12 weeks)

**Rounding note for the stretch:** if the division is not exact, round up — 9.6 weeks means 10, because in 9 weeks you are still short.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 6 ─────────────────────────────────
export const M6 = lesson(6, {
  title: 'Smart Shopping',
  objective: 'Compare prices and unit prices, see through offers and ads, and check the bill and change, while doing the family’s Diwali shopping on ₹1,000.',
  concept: 'Compare and check',
  minutes: 45,
  hook: ['word', 'Unit price', 'which pack is really cheaper?'],
  intro: 'Today you become a shopping detective. You will find the real best deal, spot ad tricks, and check every bill.',
  cards: [
    { emoji: '🔍', title: 'Compare prices', body: 'The same thing can cost different amounts in different shops or apps. Before you buy, check at least two places. A few minutes of checking can save real money.' },
    { emoji: '⚖️', title: 'Unit price', body: 'Unit price means the price of one piece, or one kilo. Two pens for ₹20 is ₹10 a pen, but three pens for ₹27 is ₹9 a pen. The bigger pack is cheaper for each pen, but only if you need all three.' },
    { emoji: '🎁', title: 'Offers', body: 'Buy one get one free sounds great, but it only saves money if you really need two. Half price means you pay only half of the normal price. Ask yourself: would I buy this if there was no offer?' },
    { emoji: '📺', title: 'Ads want you to want', body: 'Ads are made to make you want things. They use famous faces, bright colours, catchy songs and words like ‘Hurry, last day!’. Enjoy the ad, then ask what the product really does.' },
    { emoji: '🧾', title: 'Check the bill', body: 'Always check the bill before you pay, and count your change after. Make sure each item and price is right and nothing is added twice. Shopkeepers are busy, and mistakes happen.' },
  ],
  scenes: [
    {
      kind: 'bullets',
      heading: 'Which pack of biscuits?',
      bullets: [
        { icon: '🍪', text: 'Small pack: 1 for ₹10' },
        { icon: '📦', text: 'Family pack: 4 for ₹36 → ₹9 each' },
        { icon: '🤔', text: 'Will we eat all four before they go soft?' },
        { icon: '✅', text: 'Cheaper per pack and needed = smart buy' },
      ],
      say: [
        'A small biscuit pack costs ten rupees, and a family box of four packs costs thirty six rupees.',
        'Thirty six divided by four is nine, so each pack in the box costs nine rupees.',
        'The family box is cheaper for each pack, but only if your family will eat all four.',
        'A deal is only smart when the price is better and you really need the amount.',
      ],
    },
    {
      kind: 'card',
      heading: 'Buy one get one: the trap',
      emoji: '🧃',
      body: 'Aarav needs one drawing book for a project (₹40). Shop B has “Buy 1 get 1 free” at ₹70. He only needs one. Which is cheaper for him?',
      say: [
        'Aarav needs one drawing book for a school project, and it costs forty rupees.',
        'Another shop shouts buy one get one free, but the pair costs seventy rupees.',
        'Aarav needs only one book, so the offer would cost him thirty rupees more.',
        'A free item is not a saving if you did not need it in the first place.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Check the bill',
      tool: 'Stationery shop bill',
      steps: ['Pencils ₹20, eraser ₹5, notebook ₹40.', 'Add it yourself: ₹20 + ₹5 + ₹40 = ₹65.', 'The bill says ₹75. That is ₹10 too much!', 'Politely show the shopkeeper. The bill is fixed to ₹65.', 'Pay ₹100 and count your change: ₹35.'],
      say: [
        'Zoya buys pencils for twenty rupees, an eraser for five rupees and a notebook for forty rupees.',
        'She adds it up herself and gets sixty five rupees, but the bill says seventy five.',
        'She politely shows the shopkeeper, who thanks her and fixes the bill.',
        'Zoya pays with a hundred rupee note and counts her change, thirty five rupees.',
      ],
    },
  ],
  build: {
    title: 'Price detective at home',
    intro: 'Use packets and boxes from your kitchen (or the price cards in your activity sheet). You will fill in a real price detective table.',
    steps: [
      { title: 'Find two sizes', text: 'Find one item that comes in two sizes, like a small and a big packet of biscuits, salt or soap. Use the price cards on your sheet if you have none at home.' },
      { title: 'Write the prices', text: 'Write the price and the amount (pieces, grams or kilos) for each size.' },
      { title: 'Work out the unit price', text: 'Divide the price by the number of pieces or kilos. Which is cheaper for one unit?', tip: '₹36 for 4 packs is ₹9 for each pack.' },
      { title: 'Ask: do we need it?', text: 'Write whether your family would use the bigger size before it spoils. Cheaper is only smarter if you need it.' },
      { title: 'Spot one ad trick', text: 'Look at one packet or ad. Write one trick it uses (a cartoon, a star, “new!”, “hurry!”) and one useful fact (weight, price, date).' },
    ],
  },
  acts: [
    {
      mcq: 'Rice: a 1 kg packet costs ₹60. A 5 kg bag costs ₹275. How much does 1 kg cost in the big bag?',
      options: ['₹55', '₹60', '₹275', '₹50'],
      answer: 0,
      why: '₹275 ÷ 5 = ₹55 for each kilo, so the big bag is cheaper per kilo, and it is a smart buy for a family that eats rice every day.',
      title: 'Unit price detective',
      hint: 'Divide the price of the bag by the number of kilos.',
    },
    {
      sort: 'Ad trick or useful fact?',
      buckets: ['Ad trick', 'Useful fact'],
      items: [
        ['A cricket star says it makes you a champion', 0],
        ['“Hurry, only today!”', 0],
        ['“Everyone in your class has one!”', 0],
        ['Bright cartoons and a catchy song', 0],
        ['Weight: 200 g', 1],
        ['Price: ₹45', 1],
        ['Best before: March 2027', 1],
        ['Made with whole wheat flour', 1],
      ],
      why: 'Ad tricks make you feel you must buy. Useful facts tell you what you actually get, how much it costs and how long it lasts.',
      hint: 'Does it tell you something true about the product, or does it just make you feel excited?',
    },
    {
      budget: 1000,
      title: 'Diwali shopping with ₹1,000',
      prompt: 'Your family gives you ₹1,000 to do the Diwali shopping. Buy the diyas, sweets, rangoli colours and Dadi’s gift. Keep at least ₹100, then choose extras wisely.',
      items: [
        ['🪔 Clay diyas, pack of 12', 100],
        ['🍬 Box of sweets for the family', 300],
        ['🎨 Rangoli colours', 80],
        ['🎁 Gift for Dadi', 200],
        ['💡 String of lights', 250],
        ['🧸 New toy for me', 400],
        ['🍫 Extra chocolates', 150],
        ['💌 Greeting cards', 60],
        ['🕯️ Candles', 90],
      ],
      required: [0, 1, 2, 3],
      minSavings: 100,
      why: 'The four must-buys cost ₹680, leaving ₹320. Keeping ₹100 means extras can cost up to ₹220: candles and greeting cards (₹150), or extra chocolates and greeting cards (₹210). The lights (₹250) or the toy (₹400) do not fit.',
    },
    {
      match: 'What does the offer really mean?',
      pairs: [
        ['Buy 1 get 1 free', 'Two for the price of one, useful only if you need two'],
        ['Half price', 'You pay only half of the normal price'],
        ['₹10 off', 'The price is ten rupees less'],
        ['Free gift inside', 'The gift is part of what you pay for'],
        ['Sale ends today!', 'A push to make you buy fast without thinking'],
      ],
      why: 'Offers can be real savings, but read them carefully and always ask: do I need this?',
    },
    {
      blanks: 'Bill: pencils ₹20, eraser ₹5, notebook ₹40. The total should be ₹[[1]]. The bill says ₹75, so it is ₹[[2]] too much. You pay with a ₹100 note for the correct total. Your change should be ₹[[3]].',
      answers: [
        ['65', 'sixty five', 'sixty-five'],
        ['10', 'ten'],
        ['35', 'thirty five', 'thirty-five'],
      ],
      why: '20 + 5 + 40 = 65. The bill is ₹10 too much. From ₹65 to ₹100 is ₹35.',
      title: 'Check the bill',
    },
    {
      mcq: 'Aarav needs one drawing book for a single project. Shop A sells 1 for ₹40. Shop B has “Buy 1 get 1 free” for ₹70. What is the smart choice?',
      options: ['Shop B, because free is always better', 'Shop A, because he needs only one and it costs ₹30 less', 'Buy from both shops', 'Wait for an ad to tell him'],
      answer: 1,
      why: 'He needs only one book. The offer costs ₹30 more for a book he will not use.',
      title: 'New situation: the free offer',
      phase: 'probe',
      wrong: { 0: '“Free” is only a saving if you need the extra one. Here it costs ₹30 more.' },
    },
  ],
  teacher: {
    explain: 'Smart shoppers compare, calculate and check. Unit price (price of one piece or one kilo) shows which pack is really cheaper, but cheaper is only smarter if you need the amount. Offers like “buy 1 get 1 free” and “half price” can help or trick, and ads are designed to make us want things. Finally, always check the bill and count the change: honest mistakes happen at busy counters. Keep all maths with friendly numbers and Indian products: rice, biscuits, diyas, sweets.',
    analogy: 'A smart shopper is like a cricket umpire: they watch carefully, check the replay (the bill), and do not get carried away by the crowd shouting (the ads).',
    vocab: [
      ['compare', 'Look at two or more prices before you buy.'],
      ['unit price', 'The price of one piece or one kilo.'],
      ['offer', 'A special deal, like buy 1 get 1 free or half price.'],
      ['advertisement (ad)', 'A message made to make you want to buy something.'],
      ['bill', 'The list of what you bought and the total you must pay.'],
    ],
    demo: '1) Hold up two biscuit packs (or show pictures): 1 for ₹10 and a box of 4 for ₹36. Ask which is cheaper and let the class vote. 2) Work out ₹36 ÷ 4 = ₹9 on screen. 3) Ask: “Is the box always smarter?” (Only if we eat them all.) 4) Show a pretend ad with a cricket star, “Hurry!” and a jingle; ask the class to spot tricks. 5) Show a bill with a deliberate ₹10 mistake (₹75 instead of ₹65). Let the class catch it and model the polite fix. 6) Open the Diwali sim and buy the must-haves.',
    unplugged: 'Higher or lower? (5 min): show a picture of an everyday item and a price (“A 1 kg packet of salt: ₹200?”). Learners stand up for “too high”, crouch for “too low”, stay seated for “about right”. Reveal a sensible price each time and ask how they knew. It warms up their price sense.',
    prompts: [
      ['What is a unit price?', 'The price of one piece or one kilo.'],
      ['4 packs for ₹36: what is the price of one?', '₹9.'],
      ['When is buy 1 get 1 free a good deal?', 'Only when you really need two.'],
      ['Name one ad trick.', 'Famous faces, catchy songs, “hurry, last day!”, “everyone has one”.'],
      ['What two things do you check at the counter?', 'The bill, and your change.'],
    ],
    support: 'Use unit prices that divide neatly (2 for ₹20, 5 for ₹50) and let learners use play coins to share the price out into piles.',
    stretch: 'Soap: 1 bar for ₹35, or a pack of 4 for ₹120. Which is cheaper per bar, and by how much over four bars? (₹30 each; ₹20 less for four.)',
    mis: [
      ['A bigger pack is always cheaper.', 'Not always. Work out the unit price.'],
      ['Free means it costs nothing.', 'The “free” item is part of what you pay for. It only helps if you need it.'],
      ['Ads tell us which product is best.', 'Ads are made to sell. Check the facts: price, weight, date.'],
      ['Bills are always right.', 'Mistakes happen. Check the bill and count your change.'],
    ],
    successCriteria: ['I can compare prices and work out a simple unit price.', 'I can tell when an offer is really a saving.', 'I can spot tricks in ads.', 'I can check a bill and my change.'],
    homework: 'With a grown-up, compare the price of one item in two sizes at home or at a shop. Fill in the price detective table and decide which is the smart buy for your family.',
    exit: 'Pens: 2 for ₹20 or 5 for ₹45. Which is cheaper for one pen?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Higher or lower?” price game: stand, crouch or sit.' },
      { minutes: 4, stage: 'Watch + thumbs check', doing: 'Play the video. Thumbs: “Is a bigger pack always cheaper?”' },
      { minutes: 5, stage: 'Live demo', doing: 'Biscuit unit price, the pretend ad, and the bill with a planted ₹10 mistake.' },
      { minutes: 6, stage: 'Build along', doing: 'Price detective at home: two sizes, unit price, “do we need it?”, one ad trick.' },
      { minutes: 5, stage: 'Team game', doing: 'Quick competition: “Ad trick or useful fact?” sort in two teams; then the unit price detective question.' },
      { minutes: 7, stage: 'Budget sim', doing: 'Diwali shopping with ₹1,000. Poll: which extras did you choose? Who kept more than ₹100?' },
      { minutes: 5, stage: 'Pairs', doing: 'Breakout pairs: offer match and the bill-check race.' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: the free offer (individual).' },
      { minutes: 4, stage: 'Show-and-tell + exit', doing: 'Learners share one price detective find from home. Exit ticket.' },
    ],
  },
  tasks: [
    { heading: 'Spot the ad trick', instructions: 'Look at an ad on a packet, poster or TV (with a grown-up). Write one trick it uses and one useful fact it gives.', lines: 3, answer: 'Any trick (famous face, cartoon, “hurry”, “new”, “everyone has one”) and any fact (price, weight, date, ingredients).' },
  ],
  files: [
    {
      name: 'l06_smart_shopping_sheet.md',
      title: 'Activity sheet: price detective and Diwali shopping list',
      audience: 'student',
      content: `# Lesson 6 — Smart shopping · Price detective

${SAFE_NOTE}

## 1. Price cards (use these if you have no packets at home)
| Item | Small size | Big size |
|---|---|---|
| Biscuits | 1 pack for ₹10 | 4 packs for ₹36 |
| Rice | 1 kg for ₹60 | 5 kg for ₹275 |
| Pens | 2 for ₹20 | 5 for ₹45 |
| Soap | 1 bar for ₹35 | 4 bars for ₹120 |

## 2. Price detective table
| Item | Size A: price ÷ amount = unit price | Size B: price ÷ amount = unit price | Cheaper per unit | Do we need the big size? |
|---|---|---|---|---|
|  |  |  |  | ☐ Yes ☐ No |
|  |  |  |  | ☐ Yes ☐ No |

## 3. Diwali shopping list (₹1,000, keep at least ₹100)
| Item | Must-buy or extra? | Price | Buy? |
|---|---|---|---|
| Clay diyas, pack of 12 | Must-buy | ₹100 | ☐ |
| Box of sweets | Must-buy | ₹300 | ☐ |
| Rangoli colours | Must-buy | ₹80 | ☐ |
| Gift for Dadi | Must-buy | ₹200 | ☐ |
| String of lights | Extra | ₹250 | ☐ |
| New toy for me | Extra | ₹400 | ☐ |
| Extra chocolates | Extra | ₹150 | ☐ |
| Greeting cards | Extra | ₹60 | ☐ |
| Candles | Extra | ₹90 | ☐ |

Total spent: ₹______ Money kept: ₹______

## 4. Check the bill
| Item | Price on the bill | Correct? |
|---|---|---|
| Pencils | ₹20 | ☐ |
| Eraser | ₹5 | ☐ |
| Notebook | ₹40 | ☐ |
| **Total on bill** | **₹75** | ☐ My total: ₹____ |

Paid ₹100 for the correct total. My change should be ₹____.

## 5. Offer check — ask these three questions
1. Do I really need it (or two of it)?
2. What is the price for one?
3. Would I buy it without the offer?
`,
    },
    {
      name: 'l06_teacher_script.md',
      title: 'Teacher script — Lesson 6',
      audience: 'teacher',
      content: `# Lesson 6 teacher script: Smart shopping

**You need:** two biscuit packs or pictures (1 for ₹10, 4 for ₹36), a pretend ad slide, a pretend bill with a ₹10 mistake, the Diwali sim.

## 0–5 min · Higher or lower?
Items: 1 kg salt "₹200?" (too high; about ₹25–30), a pencil "₹1?" (too low), a samosa "₹15?" (about right in many places). Prices vary by city; accept sensible ranges and say so.

## 5–9 min · Video + thumbs check

## 9–14 min · Live demo
Biscuits: 36 ÷ 4 = ₹9 each. Ad: point to the star, the jingle, "Hurry!". Bill: ₹20 + ₹5 + ₹40 = ₹65, not ₹75. Model: "Uncle, I think the bill should be ₹65. Could you check?"

## 14–20 min · Build along

## 20–25 min · Team game
Sort key: tricks = cricket star, hurry, everyone has one, cartoons and song. Facts = weight, price, best-before date, whole wheat. Rice: ₹55 per kg.

## 25–32 min · Diwali budget sim
Must-buys ₹680, ₹320 left, keep ₹100 → extras up to ₹220. Good combos: candles + cards (₹150); chocolates + cards (₹210); candles alone; chocolates alone. Not: lights, toy.

## 32–37 min · Pairs: offers match + bill race (₹65, ₹10, ₹35)

## 37–41 min · Probe: Shop A

## 41–45 min · Show-and-tell + exit
Pens: 2 for ₹20 = ₹10 each; 5 for ₹45 = ₹9 each. The pack of 5 is cheaper per pen.

**Diwali note:** families celebrate different festivals. Invite children to share the festival shopping in their own homes (Eid, Christmas, Pongal, Onam, Gurpurab…). The same skills apply.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 7 ─────────────────────────────────
export const M7 = lesson(7, {
  title: 'Digital Money and Staying Safe',
  objective: 'Explain simply how UPI, QR codes and cards move money, and follow the safety rules: never share a PIN or OTP, always ask a grown-up, and spot scams.',
  concept: 'Digital money safety',
  minutes: 45,
  hook: ['word', 'Never share your OTP', 'not with anyone, not ever'],
  intro: 'Today you will learn how phone payments work, and the safety rules that keep your family’s money safe.',
  cards: [
    { emoji: '📱', title: 'What is UPI?', body: 'UPI lets people send money from one bank account to another using a phone app. It works in seconds, at any time of the day. In India, people use it to pay for everything from vegetables to school fees.' },
    { emoji: '🔳', title: 'QR codes', body: 'A QR code is a square pattern of black and white dots. A grown-up scans the shop’s QR code with a UPI app, and the app shows the shop’s name. Always check the name and the amount before paying.' },
    { emoji: '💳', title: 'Cards', body: 'A debit card takes money straight from a bank account. A credit card uses borrowed money that must be paid back later. Both are protected by a secret PIN.' },
    { emoji: '🔐', title: 'PIN and OTP are secrets', body: 'A PIN is a secret number, and an OTP is a one-time password sent by text message. Never share them with anyone, even someone who says they are from the bank. Real banks never ask for your PIN or OTP.' },
    { emoji: '🚩', title: 'Spot the scam', body: 'Messages like ‘You won a free phone, pay ₹99 to claim it!’ are scams. You never need to enter a PIN to receive money, only to send it. If something feels strange, stop and tell a grown-up.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Paying at the kirana with UPI',
      tool: 'UPI app on a grown-up’s phone',
      steps: ['Papa opens his UPI app and taps Scan.', 'He scans the QR code stuck on the shop counter.', 'The screen shows the shop’s name: check it!', 'He types the amount, ₹85, and checks it again.', 'He types his secret UPI PIN, hiding the screen.', 'A “payment successful” screen appears. He shows the shopkeeper.'],
      say: [
        'Riya and her father are paying eighty five rupees at the kirana shop.',
        'Papa opens his UPI app and scans the QR code on the counter.',
        'The phone shows the shop’s name, so they check that it is the right shop, and then check the amount.',
        'Papa types his secret PIN while hiding the screen, and the payment successful message appears.',
      ],
    },
    {
      kind: 'card',
      heading: 'The fake prize message',
      emoji: '🎁',
      body: '“Congratulations! You won a new phone! Click this link and pay ₹99 delivery to claim your prize. Offer ends in 10 minutes!”',
      say: [
        'Kabir sees this message on his mother’s phone, saying he won a free phone.',
        'It asks for ninety nine rupees and says hurry, the offer ends in ten minutes.',
        'Red flags: a prize he never entered, a payment for something free, and a rush.',
        'Kabir does not click anything, and he shows the message to his mother straight away.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Four golden safety rules',
      bullets: [
        { icon: '🤐', text: 'Never share a PIN, OTP or password' },
        { icon: '🧑‍🤝‍🧑', text: 'Always ask a grown-up before any online payment' },
        { icon: '🔍', text: 'Check the name and the amount before paying' },
        { icon: '🚩', text: 'Free prize, rush, or a stranger asking? Stop and tell' },
      ],
      say: [
        'Rule one, never share a PIN, an OTP or a password with anyone.',
        'Rule two, always ask a grown-up before any online payment.',
        'Rule three, check the name and the amount before any money is sent.',
        'Rule four, if there is a free prize, a rush or a stranger asking, stop and tell a grown-up.',
      ],
    },
  ],
  build: {
    title: 'Be a scam detective',
    intro: 'Draw three phone screens on paper (or use the ones in your activity sheet). You will mark the red flags like a real detective.',
    steps: [
      { title: 'Draw three phone screens', text: 'Draw three rectangles like phones. Copy one message into each from your activity sheet.' },
      { title: 'Circle the red flags', text: 'Circle anything that is a warning sign: a prize you never entered, asking for a PIN or OTP, a rush, a strange link.', tip: 'Real banks never ask for your PIN or OTP.' },
      { title: 'Safe or scam?', text: 'Write SAFE or SCAM on each screen.' },
      { title: 'Write the right action', text: 'Under each scam, write what to do: do not click, do not reply, tell a grown-up.' },
      { title: 'Teach a grown-up', text: 'At home, show your detective screens to a grown-up and explain one red flag.' },
    ],
  },
  acts: [
    {
      sort: 'Safe or unsafe?',
      buckets: ['Safe', 'Unsafe'],
      items: [
        ['Asking a grown-up before any online payment', 0],
        ['Checking the shop’s name after scanning a QR code', 0],
        ['Keeping a PIN secret', 0],
        ['Telling a grown-up about a strange message', 0],
        ['Telling a caller the OTP from Papa’s phone', 1],
        ['Clicking a “free prize” link', 1],
        ['Scanning a QR code a stranger sent to “receive” money', 1],
        ['Writing the PIN on the back of the card', 1],
      ],
      why: 'Secrets stay secret, grown-ups are always asked, and names and amounts are checked. You never need a PIN or a QR scan to receive money.',
      hint: 'Would this give away a secret, or send money to a stranger?',
    },
    {
      match: 'Digital money words',
      pairs: [
        ['UPI', 'Sending money between bank accounts using a phone'],
        ['QR code', 'A square of dots you scan to pay a shop'],
        ['PIN', 'A secret number only the account owner knows'],
        ['OTP', 'A one-time password sent by text message'],
        ['Debit card', 'A card that takes money straight from the bank account'],
        ['Scam', 'A trick to steal money or secrets'],
      ],
      why: 'Knowing these words helps you understand how digital money works, and when something is not right.',
    },
    {
      order: 'Paying safely at a shop with UPI: put the steps in order.',
      steps: ['Ask a grown-up to pay with their phone', 'Scan the shop’s QR code', 'Check the shop’s name on the screen', 'Check the amount is right', 'The grown-up types the secret PIN, hiding the screen', 'Wait for the “payment successful” screen and show the shopkeeper'],
      why: 'A grown-up pays, the name and amount are checked before the PIN, and the shopkeeper sees the success screen.',
      title: 'Paying safely with UPI',
    },
    {
      budget: 400,
      title: 'Online stationery order (with a grown-up)',
      prompt: 'Mumma lets you plan a stationery order of up to ₹400, and she will pay on her phone. Choose the geometry box, colour pencils and delivery. Keep at least ₹100. Careful: one item is a scam!',
      items: [
        ['📐 Geometry box', 120],
        ['🖍️ Colour pencils', 80],
        ['🚚 Delivery charge', 40],
        ['📝 Glitter pens', 60],
        ['🎁 “Pay ₹99 to claim your free phone prize”', 99],
        ['📒 Sticky notes', 30],
      ],
      required: [0, 1, 2],
      minSavings: 100,
      why: 'The three needs cost ₹240, leaving ₹160. Keeping ₹100 means only ₹60 more: the sticky notes or the glitter pens fit, but not both. The “free phone prize” is a scam: you should never pay to get a prize. Do not click, and tell a grown-up.',
    },
    {
      mcq: 'Someone calls Papa’s phone while Riya is holding it. “I am from the bank. Tell me the OTP you just got, or the account will close today!” What should Riya do?',
      options: ['Read out the OTP quickly so the account stays open', 'Not share it, end the call and tell a grown-up straight away', 'Share only half of the OTP', 'Send the OTP by text message instead'],
      answer: 1,
      why: 'Real banks never ask for an OTP. A scary rush is a red flag. Never share it, end the call, and tell a grown-up.',
      title: 'New situation: the “bank” call',
      phase: 'probe',
      wrong: { 0: 'This is a scam. Real banks never ask for your OTP, even if they say the account will close.', 2: 'Any part of an OTP is still the secret. Share none of it.' },
    },
    {
      projectAct: true,
      title: 'Project: my money safety rules poster',
      brief: 'Make a bright poster with your family’s money safety rules, to stick near the place where the family phones are kept or charged.',
      requirements: ['A clear title, like “Our money safety rules”', 'At least four rules, including never share a PIN or OTP and always ask a grown-up', 'One example of a scam message and its red flag', 'Pictures or drawings for each rule', 'Shown to a grown-up at home'],
      reflection: 'Which rule do you think is most important for your family, and why?',
      tips: ['Use big letters so it can be read from far away.', 'Short rules are easier to remember.', 'Use red for warning signs.', 'Ask your family to sign it.'],
      minWords: 15,
    },
  ],
  teacher: {
    explain: 'Digital money is real money moved between bank accounts, by UPI on a phone or with a card. Explain just enough: a QR code tells the app which shop to pay; the name and amount are checked before the PIN; a PIN is only needed to send money, never to receive it. The heart of the lesson is safety: never share a PIN, OTP or password, always ask a grown-up, and treat free prizes, rushes and “bank” calls asking for secrets as red flags. Children at this age must never make payments themselves; they help their families stay safe by spotting scams.',
    analogy: 'A PIN or OTP is like the key to your home: you would never hand it to a stranger at the door, even if they say they are from the building office.',
    vocab: [
      ['UPI', 'A way to send money between bank accounts using a phone.'],
      ['QR code', 'A square of dots that tells the app which shop to pay.'],
      ['PIN', 'A secret number that only the account owner knows.'],
      ['OTP', 'A one-time password sent by text message to confirm a payment.'],
      ['scam', 'A trick to steal money or secrets.'],
      ['red flag', 'A warning sign that something is wrong.'],
    ],
    demo: 'Use slides or a printed picture, never a real payment or a real phone screen with account details. 1) Show a pretend QR code on a shop counter picture. 2) Walk through the six UPI steps from the video, pointing at “check the name” and “check the amount” before the PIN. 3) Show the fake prize message and ask the class to call out red flags. 4) Act out the “bank” call: you are the caller, a volunteer refuses and says “I will tell a grown-up.” Applaud. 5) Open the online stationery sim and show that the “prize” item breaks the savings goal, and is a scam anyway.',
    unplugged: 'Secret keeper (5 min): one child is the “account owner” with a secret 4-digit number on a folded paper. Other children play tricksters and try to get the number with lines from cards (“I’m from the bank!”, “You won a prize!”, “Hurry, your account will close!”). The owner must say “No. I will tell a grown-up.” every time. Swap roles twice. Then ask: “Which trick felt the most convincing?”',
    prompts: [
      ['What does UPI do?', 'Moves money from one bank account to another using a phone.'],
      ['What do you check after scanning a QR code?', 'The shop’s name and the amount.'],
      ['Who can you share an OTP with?', 'No one. Not even someone who says they are from the bank.'],
      ['Do you need a PIN to receive money?', 'No. A PIN is only for sending money.'],
      ['Name two red flags in a message.', 'Any two of: a prize you never entered, paying to get something free, a rush, asking for a PIN or OTP, a strange link.'],
    ],
    support: 'Focus on two rules only: never share a PIN or OTP, and always ask a grown-up. Use picture cards for the safe or unsafe sort.',
    stretch: 'Write your own pretend scam message with three red flags, swap with a partner, and see if they can find all three.',
    mis: [
      ['Digital money is not real money.', 'It is real money in a bank account. When it is sent, it is gone.'],
      ['If someone says they are from the bank, it is okay to share the OTP.', 'Real banks never ask for a PIN or OTP. It is always a scam.'],
      ['You need to enter a PIN to receive money.', 'Never. A PIN is only needed to send money.'],
      ['Free prizes online are lucky wins.', 'If you never entered and they want money first, it is a scam.'],
    ],
    successCriteria: ['I can explain what UPI, QR codes and cards do.', 'I can say why a PIN and an OTP must stay secret.', 'I can spot red flags in a scam message.', 'I always ask a grown-up before any online payment.'],
    homework: 'Finish your money safety rules poster and stick it up at home. Teach one rule to a grown-up or an older sibling.',
    exit: 'A message says: “You won ₹5,000! Share your OTP to get it.” Write two red flags and what you will do.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Secret keeper” role-play: the owner always says “No. I will tell a grown-up.”' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the video. Poll: “Have you seen a grown-up pay by scanning a QR code?” (thumbs).' },
      { minutes: 6, stage: 'Live demo', doing: 'Pretend QR payment steps, the fake prize message, and acting out the “bank” call with a volunteer.' },
      { minutes: 6, stage: 'Build along', doing: 'Be a scam detective: three phone screens, circle red flags, safe or scam, the right action.' },
      { minutes: 5, stage: 'Team competition', doing: '“Safe or unsafe?” sort in two teams; each team explains one card.' },
      { minutes: 5, stage: 'Budget sim', doing: 'Online stationery order (with a grown-up). Ask: who spotted the scam item?' },
      { minutes: 4, stage: 'Pairs', doing: 'Breakout pairs: digital money words match and the safe UPI steps order.' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: the “bank” call. Pairs role-play the right answer.' },
      { minutes: 6, stage: 'Poster + show-and-tell', doing: 'Start the money safety rules poster; three learners show their rules. Exit ticket.' },
    ],
  },
  files: [
    {
      name: 'l07_money_safety_sheet.md',
      title: 'Activity sheet: scam detective and money safety poster',
      audience: 'student',
      content: `# Lesson 7 — Digital money and staying safe

${SAFE_NOTE}

## 1. Scam detective screens
Circle the red flags. Write SAFE or SCAM. Write what to do.

| Message | Safe or scam? | Red flags | What I do |
|---|---|---|---|
| "Congratulations! You won a phone! Pay ₹99 delivery in 10 minutes to claim it." |  |  |  |
| "Dear customer, your bank account will close today. Share the OTP you just received." |  |  |  |
| "Hi Riya, Mumma here. I'm in a meeting, I'll be home by 7. Please do your homework!" (from Mumma's saved number) |  |  |  |
| "Scan this QR code to RECEIVE ₹500 cashback!" |  |  |  |

## 2. UPI payment steps (with a grown-up)
1. A grown-up opens the UPI app and taps Scan.
2. Scan the shop's QR code.
3. **Check the shop's name.**
4. **Check the amount.**
5. The grown-up types the secret PIN, hiding the screen.
6. Wait for "payment successful" and show the shopkeeper.

## 3. Words to know
- **UPI**: sending money between bank accounts using a phone
- **QR code**: a square of dots you scan to pay a shop
- **PIN**: a secret number only the account owner knows
- **OTP**: a one-time password sent by text message
- **Scam**: a trick to steal money or secrets

## 4. My poster plan
**Title:** ______________________

| Rule | Picture idea |
|---|---|
| 1. Never share a PIN, OTP or password. |  |
| 2. Always ask a grown-up before any online payment. |  |
| 3. |  |
| 4. |  |

**Scam example and its red flag:** ______________________

Family signatures: ______________________

**Remember:** you never need a PIN to receive money.
`,
    },
    {
      name: 'l07_teacher_script.md',
      title: 'Teacher script — Lesson 7',
      audience: 'teacher',
      content: `# Lesson 7 teacher script: Digital money and staying safe

**You need:** "Secret keeper" trick cards, a picture of a pretend shop QR code, the fake prize message slide. **Never** show a real UPI app with account details, a real card, or make a real payment in class.

## 0–5 min · Secret keeper
Trick lines: "I'm from the bank!", "You won a prize!", "Hurry, your account closes today!", "I'm your friend's uncle, just tell me." Owner always says: "No. I will tell a grown-up."

## 5–9 min · Video + poll

## 9–15 min · Live demo
- UPI steps with the picture. Stop at "check the name" and "check the amount": "We check BEFORE the PIN."
- Key fact: "You never need a PIN to receive money. If anyone says 'enter your PIN to get money', it's a scam."
- Fake prize: red flags = never entered, pay for something free, 10-minute rush, strange link.
- Bank call role-play.

## 15–21 min · Build along: scam detective
Answers: 1 scam (prize, pay, rush). 2 scam (OTP, threat). 3 safe (saved number, normal message, asks for nothing). 4 scam (QR to "receive" money).

## 21–26 min · Safe or unsafe sort

## 26–31 min · Budget sim
Needs ₹240, keep ₹100 → ₹60 more: sticky notes (₹30) fit; glitter pens (₹60) exactly fit too (₹100 left). The ₹99 "prize" is a scam and breaks the savings goal.

## 31–35 min · Pairs: match + order

## 35–39 min · Probe: the "bank" call (role-play the right answer)

## 39–45 min · Poster start + show-and-tell + exit

**Age note:** UPI apps and bank accounts are for grown-ups. Children help by spotting scams and asking a grown-up — they do not pay on their own. If a child shares a worrying real story (money lost to a scam), listen kindly, do not ask for details on the call, and let their grown-up know after class.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 8 ─────────────────────────────────
export const M8 = lesson(8, {
  title: 'Capstone: My Mini Market Stall',
  objective: 'Plan and run a pretend market stall: choose a product, work out cost, price and profit, make a poster and a sales pitch, and sell with play money.',
  concept: 'Cost, price, profit',
  minutes: 45,
  hook: ['budget', 500, 200, 'stall materials'],
  intro: 'It’s capstone time! Today you run your own mini market stall, using everything you have learned about money.',
  cards: [
    { emoji: '🛍️', title: 'Choose a product', body: 'Pick one simple thing you could make or offer, like bookmarks, greeting cards, lemon water or friendship bands. It should be cheap to make and something people like. In class we use play money only.' },
    { emoji: '🧮', title: 'Cost and price', body: 'Cost is the money you spend to make one item. Price is what the customer pays. If a bookmark costs ₹6 to make and sells for ₹10, you earn ₹4 on each one.' },
    { emoji: '💹', title: 'Profit', body: 'Profit is the money left after you take away all your costs. Profit equals the money from sales minus the costs. If you sell 20 bookmarks for ₹10, you get ₹200, and if they cost ₹120 to make, your profit is ₹80.' },
    { emoji: '📣', title: 'Poster and pitch', body: 'A poster shows the product name, the price and one reason to buy. A sales pitch is one short, friendly sentence you say to customers. Be honest and never promise what your product cannot do.' },
    { emoji: '🤝', title: 'Run the market', body: 'Take turns being sellers and buyers with play money. Give correct change, write every sale in your sales log, and say thank you. At the end, count your money and work out your profit.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Zoya’s bookmark stall',
      tool: 'Stall planner',
      steps: ['Product: hand-painted bookmarks.', 'Cost to make one: ₹6 (card, paint, ribbon).', 'Price: ₹10, so she earns ₹4 on each one.', 'She makes 20 bookmarks: cost ₹120.', 'She sells 20: ₹200. Profit = ₹200 − ₹120 = ₹80.'],
      say: [
        'Zoya decides to sell hand-painted bookmarks at the class market.',
        'Each bookmark costs her six rupees to make, and she sells it for ten rupees.',
        'She makes twenty bookmarks, which costs one hundred and twenty rupees.',
        'She sells all twenty for two hundred rupees, so her profit is eighty rupees.',
      ],
    },
    {
      kind: 'card',
      heading: 'Too high, too low, just right',
      emoji: '🏷️',
      body: 'At ₹50, nobody buys Zoya’s bookmarks. At ₹5, she loses ₹1 on each one. At ₹10, people buy them and she makes a profit.',
      say: [
        'If Zoya sets the price at fifty rupees, it is too high and nobody buys.',
        'If she sets it at five rupees, she loses one rupee on every bookmark, because it costs six to make.',
        'At ten rupees, the price is fair for customers and more than her cost.',
        'A good price is more than your cost, and fair enough that people want to buy.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'A great sales pitch',
      bullets: [
        { icon: '👋', text: 'Greet: “Hello! Would you like a bookmark?”' },
        { icon: '✨', text: 'One true reason: “Each one is hand-painted.”' },
        { icon: '🏷️', text: 'The price: “Only ₹10.”' },
        { icon: '🙏', text: 'Thank you, whether they buy or not' },
      ],
      say: [
        'A great sales pitch starts with a friendly hello and a smile.',
        'Then give one true reason to buy, like each bookmark is hand-painted.',
        'Say the price clearly, so the customer knows exactly what it costs.',
        'And always say thank you, even when someone does not buy.',
      ],
    },
  ],
  build: {
    title: 'Set up your stall',
    intro: 'Work in a team of two or three (or on your own at home). You will finish with a stall plan, a poster and a pitch ready for the class market.',
    steps: [
      { title: 'Pick your product', text: 'Choose one product your team could really make. Write its name.' },
      { title: 'Work out the cost', text: 'List the materials for one item and their cost. Add them up to find the cost of one.', tip: 'Use the course price list on your sheet.' },
      { title: 'Set a fair price', text: 'Choose a price that is more than the cost and fair for a friend. Write how much you earn on each one.' },
      { title: 'Make your poster', text: 'Draw a poster with the product name, the price and one honest reason to buy.' },
      { title: 'Practise your pitch', text: 'Write one sentence to say to customers. Practise it with a partner three times.' },
      { title: 'Get your change box ready', text: 'Put ₹100 of small play money (₹10, ₹5, ₹2, ₹1) in your change box so you can give change.' },
    ],
  },
  acts: [
    {
      blanks: 'Each bookmark costs ₹6 to make. Zoya sells it for ₹10. She earns ₹[[1]] on each bookmark. She sells 15 bookmarks, so she gets ₹[[2]] from sales. Her costs for 15 bookmarks are ₹90, so her profit is ₹[[3]].',
      answers: [
        ['4', 'four'],
        ['150', 'one hundred fifty', 'one hundred and fifty'],
        ['60', 'sixty'],
      ],
      why: 'Price minus cost is what you earn on one. Sales are 15 × ₹10 = ₹150. Profit = ₹150 − ₹90 = ₹60.',
      hint: 'Profit = money from sales − costs.',
      title: 'Profit maths',
    },
    {
      budget: 500,
      title: 'Set up your stall with ₹500',
      prompt: 'Your team has ₹500 of play money to set up a market stall. Buy the materials, chart paper for the poster and a price board. Keep at least ₹100 as a change box so you can give customers change.',
      items: [
        ['✂️ Materials to make 25 items', 200],
        ['🖼️ Chart paper and sketch pens', 50],
        ['🏷️ Price board', 30],
        ['💡 Fancy fairy lights', 150],
        ['🎈 Balloons for the stall', 60],
        ['🖨️ Printed banner', 120],
        ['⭐ Stickers for decoration', 40],
      ],
      required: [0, 1, 2],
      minSavings: 100,
      why: 'Materials, chart paper and the price board cost ₹280, leaving ₹220. Keeping ₹100 for change leaves ₹120: balloons and stickers (₹100), or the printed banner. Every extra rupee spent on decoration is a rupee less profit.',
    },
    {
      order: 'Running a market stall: put the steps in order.',
      steps: ['Choose a product', 'Work out the cost to make one', 'Set a fair price that is more than the cost', 'Make the poster and practise your pitch', 'Sell, give correct change and write each sale in the log', 'Count the money and work out the profit'],
      why: 'Plan first (product, cost, price), then prepare (poster, pitch), then sell, then count.',
      title: 'Stall steps',
    },
    {
      match: 'Stall words: match each word to its meaning',
      pairs: [
        ['Cost', 'Money spent to make the product'],
        ['Price', 'What the customer pays'],
        ['Profit', 'Money left after taking away the costs'],
        ['Loss', 'When the costs are more than the sales money'],
        ['Customer', 'The person who buys'],
        ['Sales pitch', 'A short, friendly sentence to get people to buy'],
      ],
      why: 'These are the words every shopkeeper and business owner uses.',
    },
    {
      mcq: 'Kabir made 20 greeting cards. Each cost ₹5 to make, so his costs were ₹100. He sold 12 cards at ₹10 each. Did he make a profit?',
      options: ['Yes, ₹20 profit: sales of ₹120 minus costs of ₹100', 'No, it is a loss because 8 cards are unsold', 'Yes, ₹120 profit', 'Yes, ₹200 profit'],
      answer: 0,
      why: 'Sales are 12 × ₹10 = ₹120. Costs were ₹100 for all 20 cards, sold or not. ₹120 − ₹100 = ₹20 profit, and he still has 8 cards to sell later.',
      title: 'New situation: unsold cards',
      phase: 'probe',
      wrong: { 2: 'Remember to take away the costs. Sales are not the same as profit.', 3: 'He sold only 12 cards, not 20.' },
    },
    {
      projectAct: true,
      title: 'Capstone: my mini market stall',
      brief: 'Plan and run a pretend market stall. Choose a product, work out the cost and a fair price, make a poster and a sales pitch, sell at the class market with play money, and work out your profit.',
      requirements: ['A product, with the cost to make one item worked out', 'A fair price that is more than the cost', 'A poster with the name, the price and one honest reason to buy', 'A one-sentence sales pitch', 'A sales log with every sale and the change given', 'Profit worked out: money from sales minus costs'],
      reflection: 'What went well at your stall, what would you change next time, and how did you work out your profit?',
      tips: ['Keep small notes and coins in your change box.', 'Count up from the price to give change.', 'Write every sale straight away.', 'Smile and say thank you to every customer.'],
      minWords: 20,
    },
  ],
  teacher: {
    explain: 'The capstone brings the whole course together: counting and change (lesson 1), needs and choices (2), budgeting (3–4), saving (5), fair prices and honest ads (6) and trust (7). Teach three words carefully: cost (what you spend to make one), price (what the customer pays) and profit (sales minus all costs). Then run a real class market with play money, where every child is both a seller and a buyer. Celebrate effort and honesty, not just profit: a team that made a small profit and gave perfect change has done brilliantly.',
    analogy: 'A stall is like a mango tree in your garden: the water and care are your costs, the mangoes you sell are your sales, and whatever is left after paying for the care is your profit.',
    vocab: [
      ['cost', 'The money you spend to make something.'],
      ['price', 'What the customer pays for one item.'],
      ['profit', 'The money left after you take away all your costs.'],
      ['loss', 'When your costs are more than the money from sales.'],
      ['sales pitch', 'A short, friendly sentence that tells customers why to buy.'],
    ],
    demo: '1) Hold up a pretend bookmark: “Card ₹3, paint ₹2, ribbon ₹1. Cost: ₹6.” 2) Ask the class to vote on prices: ₹5, ₹10 or ₹50. Discuss loss, fair and too high. 3) Write on screen: 20 sold × ₹10 = ₹200 sales; costs ₹120; profit ₹80. 4) Open the stall setup sim, add fairy lights and the banner first, and show the change box disappearing. Reset and do needs first. 5) Model a sales pitch and a sale with a volunteer: they pay ₹20 for a ₹10 bookmark and you count up the change.',
    unplugged: 'What would you pay? (4 min): hold up three ordinary classroom items one at a time (a decorated pencil, a paper boat, a bookmark). Learners write the price they would pay on a slip and hold it up. Ask the highest and lowest guessers why. Point out that customers decide whether a price is fair.',
    prompts: [
      ['What is the difference between cost and price?', 'Cost is what you spend to make it; price is what the customer pays.'],
      ['Cost ₹6, price ₹10. What do you earn on one?', '₹4.'],
      ['How do you work out profit?', 'Money from sales minus all the costs.'],
      ['What happens if the price is lower than the cost?', 'You make a loss on every item.'],
      ['Why keep a change box?', 'So you can give customers the right change.'],
    ],
    support: 'Give a ready-made stall card (bookmarks, cost ₹5, price ₹10) so learners focus on selling, change and the sales log rather than planning.',
    stretch: 'If Zoya drops her price to ₹8 and sells 30 bookmarks instead of 20, does she make more profit? (30 × ₹8 = ₹240 sales, costs 30 × ₹6 = ₹180, profit ₹60: less than ₹80!)',
    mis: [
      ['Sales money is all profit.', 'Take away the costs first. Profit is what is left.'],
      ['A higher price always means more profit.', 'If the price is too high, nobody buys.'],
      ['Unsold items cost nothing.', 'You already paid to make them. Their cost still counts.'],
      ['A good ad can say anything to sell.', 'Be honest. Never promise what your product cannot do.'],
    ],
    successCriteria: ['I can explain cost, price and profit.', 'I can set a fair price that is more than my cost.', 'I can make an honest poster and sales pitch.', 'I can sell with play money, give correct change and work out my profit.'],
    homework: 'Tell a grown-up about your stall: your product, cost, price and profit. If your family agrees, make two of your product at home and show them.',
    exit: 'You made 10 bookmarks for ₹50 in total and sold all of them at ₹8 each. What is your profit?',
    plan: [
      { minutes: 4, stage: 'Warm-up game', doing: '“What would you pay?” price slips for three classroom items.' },
      { minutes: 3, stage: 'Watch', doing: 'Play the capstone video. Thumbs check: “Is all sales money profit?”' },
      { minutes: 4, stage: 'Live demo', doing: 'Bookmark cost, class price vote, profit on screen, stall sim wrong way and right way, model a sale.' },
      { minutes: 7, stage: 'Plan in teams', doing: 'Breakout teams: profit maths, then the stall setup budget sim; choose a product, cost and price.' },
      { minutes: 7, stage: 'Poster and pitch', doing: 'Build along: make the poster, write the pitch, practise it three times, fill the change box.' },
      { minutes: 10, stage: 'Class market game', doing: 'Run the market with play money: half the class sells for 5 minutes while the others shop, then swap. Every sale goes in the sales log.' },
      { minutes: 4, stage: 'Count up', doing: 'Teams count their money and work out profit = sales − costs. Quick competition: best sales log and best change-giving.' },
      { minutes: 3, stage: 'Probe', doing: 'New situation: unsold cards, and the stall words match.' },
      { minutes: 3, stage: 'Show-and-tell + celebrate', doing: 'Teams share their profit and one thing they would change. Course certificates. Exit ticket.' },
    ],
  },
  project: {
    title: 'My mini market stall',
    brief: 'Plan and run a pretend market stall with play money: choose a product, work out the cost and a fair price, make an honest poster and pitch, sell at the class market, keep a sales log, and work out your profit.',
    requirements: ['Product chosen, with the cost to make one item worked out', 'A fair price that is more than the cost', 'A poster with the product name, the price and one honest reason to buy', 'A one-sentence sales pitch, practised', 'A sales log with every sale and the change given', 'Profit worked out as sales minus costs, with the working shown'],
    milestones: ['Product, cost and price planned', 'Poster and pitch ready, change box filled', 'Stall run at the class market with a sales log', 'Money counted and profit worked out'],
    rubric: [
      { criterion: 'Cost, price and profit', levels: ['Cost or price is missing', 'Cost and price are there, but profit is wrong', 'Cost, price and profit are all correct', 'All correct, with working shown, and explains how a different price would change the profit'] },
      { criterion: 'Poster and pitch', levels: ['No poster or pitch', 'A poster or a pitch, but not both', 'Clear poster and a friendly, honest pitch', 'Eye-catching poster and a confident, honest pitch used with every customer'] },
      { criterion: 'Selling and change', levels: ['Did not sell or gave wrong change often', 'Sold with help; some change mistakes', 'Sold on their own and gave correct change', 'Sold confidently, gave correct change every time and helped a teammate'] },
      { criterion: 'Sales log and reflection', levels: ['No sales log', 'Sales log has gaps', 'Complete sales log and a short reflection', 'Complete, neat sales log and a reflection with a clear idea to improve'] },
    ],
    extensions: ['Plan a second product for your stall and compare which one makes more profit.', 'Try two different prices in two rounds of the market and record which works better.', 'With a grown-up, visit a local shop or market and ask the shopkeeper one question about how they set prices.'],
  },
  files: [
    {
      name: 'l08_market_stall_planner.md',
      title: 'Activity sheet: my mini market stall planner and sales log',
      audience: 'student',
      content: `# Lesson 8 — Capstone · My mini market stall

${SAFE_NOTE}

${PLAY_MONEY}

## 1. Course price list for materials
| Material | Price |
|---|---|
| Card for 1 bookmark or greeting card | ₹3 |
| Paint or sketch-pen colour for 1 item | ₹2 |
| Ribbon or thread for 1 item | ₹1 |
| Lemon, sugar and water for 1 cup of lemon water | ₹5 |
| Threads for 1 friendship band | ₹4 |

## 2. My stall plan
- Product: ______________________
- Cost to make one: ₹____ + ₹____ + ₹____ = ₹____
- My price: ₹____ (must be more than the cost)
- I earn on each one: price − cost = ₹____
- How many I will make: ____ → total cost: ₹____

## 3. My poster
Draw: product name · price · one honest reason to buy.

## 4. My sales pitch
"Hello! ______________________. It is only ₹____. Thank you!"

## 5. Change box (start with ₹100 of small play money)
${COUNT_TABLE}

## 6. Sales log
| Sale | How many | Price | Money paid | Change given |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |
| 6 |  |  |  |  |
| 7 |  |  |  |  |
| 8 |  |  |  |  |

## 7. My profit
- Money from sales: ₹______
- Total costs: ₹______
- **Profit = sales − costs = ₹______**

**Worked example:** Zoya: cost ₹6, price ₹10, made 20 (₹120), sold 20 (₹200). Profit = ₹200 − ₹120 = ₹80.

## 8. Reflection
What went well: ______________________
Next time I would change: ______________________
`,
    },
    {
      name: 'l08_teacher_script.md',
      title: 'Teacher script — Lesson 8 (capstone market)',
      audience: 'teacher',
      content: `# Lesson 8 teacher script: Mini market stall

**You need:** play money for every learner (each buyer starts with ₹100 of play money), three classroom items for the warm-up, a timer, the rubric. Online classes: sellers hold up products/posters on camera; buyers "pay" by naming play-money notes, and sellers say the change aloud.

## 0–4 min · What would you pay?

## 4–7 min · Video

## 7–11 min · Live demo
Bookmark: card ₹3 + paint ₹2 + ribbon ₹1 = ₹6. Price vote: ₹5 (loss of ₹1 each), ₹10 (fair), ₹50 (no buyers). Profit: 20 × ₹10 = ₹200; − ₹120 = ₹80. Sim: lights + banner first = ₹270 and the change box is gone. Model sale: ₹10 bookmark, paid ₹20, count up: "10… 20. Your change is ₹10."

## 11–18 min · Plan in teams
Profit maths: ₹4, ₹150, ₹60. Stall sim: needs ₹280, keep ₹100 → ₹120 extra: balloons + stickers (₹100), banner (₹120), balloons alone, stickers alone.

## 18–25 min · Poster and pitch

## 25–35 min · Class market game
Round 1 (5 min): half sell, half buy. Round 2 (5 min): swap. Walk around and listen for counting up and "thank you". Note who gives correct change for the rubric.

## 35–39 min · Count up
Profit = sales − costs. Quick competition: best sales log, best change-giver.

## 39–42 min · Probe
Kabir: 12 × ₹10 = ₹120 − ₹100 = ₹20 profit.

## 42–45 min · Celebrate
Teams share profit and one change. Hand out course certificates. Exit: 10 × ₹8 = ₹80 − ₹50 = ₹30 profit.

**Honesty point:** praise honest posters ("hand-painted" is true) and gently challenge made-up claims ("makes you smarter!"). Link to lesson 6 on ads.
`,
    },
  ],
});
