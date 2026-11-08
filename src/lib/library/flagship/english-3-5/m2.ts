// Confident English · Level 1 (Grades 3–6, Beginner) · Module 2 — Speak with confidence. Capstone: My first speech.
import { lesson } from '../kit.ts';
import { SAFE, REC } from './m1.ts';

// ───────────────────────────────── Lesson 5 ─────────────────────────────────
export const E5 = lesson(5, {
  title: 'Clear Speaking',
  objective: 'Say tricky sounds clearly (v and w, th, and -ed endings), use stress and pauses, and read a short paragraph aloud.',
  concept: 'Sounds, stress, pauses',
  minutes: 45,
  hook: ['phrase', 'Vicky’s violet van went west on Wednesday.', ['Vicky’s', 'violet', 'van', 'went', 'west', 'Wednesday']],
  intro: 'Today you will train your mouth like a sports star trains their muscles, so every word comes out clear.',
  cards: [
    { emoji: '🦷', title: 'V or W?', body: 'For v, gently bite your bottom lip with your top teeth and buzz, like van and very. For w, make your lips round like a little O, then open them, like water and window. Your teeth do not touch your lip for w.' },
    { emoji: '👅', title: 'The th sound', body: 'Put the tip of your tongue lightly between your teeth and blow. Think, three and thank you blow air quietly. This, that and mother add a buzz.' },
    { emoji: '🔚', title: 'Three -ed sounds', body: 'The -ed at the end of past words has three sounds. Walked and jumped end like t. Played and cleaned end like d. Wanted and painted add an extra beat, id.' },
    { emoji: '🥁', title: 'Stress and pause', body: 'Say important words a little louder and longer. Pause for a breath at every comma and full stop. Pauses help your listener understand you.' },
  ],
  scenes: [
    {
      kind: 'bullets',
      heading: 'Mouth gym: v and w',
      bullets: [
        { icon: '🦷', text: 'v: van · very · vegetable · violin' },
        { icon: '⭕', text: 'w: wet · window · water · wall' },
        { icon: '🔁', text: 'Pairs: vest / west · vine / wine · vet / wet' },
      ],
      say: [
        'Let us warm up our mouths. For the v sound, top teeth touch the bottom lip. Van, very, violin.',
        'For the w sound, make round lips and open them. Wet, window, water.',
        'Now try the pairs slowly. Vest, west. Vet, wet. Can you hear the difference?',
      ],
    },
    {
      kind: 'card',
      heading: 'Listen: the -ed sounds',
      emoji: '🔚',
      body: 'I walked to the park. (t)\nI played with my friend. (d)\nWe wanted ice cream! (id)',
      say: [
        'Listen to the endings. I walked to the park. Walked ends with a quick t sound.',
        'I played with my friend. Played ends with a soft d sound.',
        'We wanted ice cream. Wanted has an extra beat at the end. Want, ed.',
        'Only words ending in a t or d sound, like want and need, get that extra beat.',
      ],
    },
    {
      kind: 'card',
      heading: 'Listen: read with pauses',
      emoji: '📖',
      body: 'Every Wednesday, / my brother and I / visit the vegetable market. // We buy fresh, green beans / and very sweet watermelons. // Then we walk home, / tired but happy. //',
      say: [
        'Listen to how this reader uses pauses and stress.',
        'Every Wednesday, my brother and I visit the vegetable market.',
        'We buy fresh, green beans and very sweet watermelons.',
        'Then we walk home, tired but happy. Notice the short breath at every comma.',
      ],
    },
  ],
  build: {
    title: 'Tongue-twister training',
    intro: 'Work through the mouth gym on your practice sheet. Go slowly first — speed comes later.',
    steps: [
      { title: 'Mirror check', text: 'Look in a mirror or your camera. Say van and wet. Check: teeth on lip for v, round lips for w.' },
      { title: 'th warm-up', text: 'Tongue between teeth: think, three, thank you. Then with a buzz: this, that, mother.' },
      { title: '-ed sort', text: 'Say each word on your sheet and sort it into t, d or id.' },
      { title: 'Slow twister', text: 'Say “Vicky’s violet van went west on Wednesday” three times slowly, then once faster.', tip: 'Clear is better than fast. If your words crash, slow down.' },
      { title: 'Mark your pauses', text: 'Draw a line / at every comma and two lines // at every full stop in the reading paragraph, then read it aloud.' },
    ],
  },
  acts: [
    {
      sort: 'V sound or W sound at the start?',
      buckets: ['v (teeth on lip)', 'w (round lips)'],
      items: [
        ['van', 0],
        ['window', 1],
        ['vegetable', 0],
        ['water', 1],
        ['very', 0],
        ['wall', 1],
        ['violin', 0],
        ['Wednesday', 1],
      ],
      why: 'Look at the first letter: v needs top teeth on the bottom lip; w needs round lips and no teeth.',
    },
    {
      sort: 'How does the -ed ending sound?',
      buckets: ['t (walked)', 'd (played)', 'id (wanted)'],
      items: [
        ['jumped', 0],
        ['washed', 0],
        ['cooked', 0],
        ['cleaned', 1],
        ['opened', 1],
        ['rained', 1],
        ['painted', 2],
        ['needed', 2],
        ['shouted', 2],
      ],
      why: 'Only words that already end in a t or d sound (paint, need, shout) get the extra id beat. Most others end with a quick t or d.',
    },
    {
      mcq: 'Where should you take a short pause in this sentence? “After school, I play cricket with my friends.”',
      options: ['After “school”, at the comma', 'After “I”', 'After “cricket”', 'Nowhere — say it in one breath'],
      answer: 0,
      why: 'A comma is a signal to pause for a moment. Pausing there makes the sentence easy to follow.',
      title: 'Find the pause',
    },
    {
      speak: 'Vicky’s violet van went west on Wednesday. Three thin thinkers thought about thunder.',
      checklist: ['My teeth touched my lip for v', 'My lips were round for w', 'My tongue peeped out for th', 'I said it slowly and clearly first', 'I tried it faster without crashing'],
      tips: 'Slow, slow, then fast! Clear words win the challenge — not the fastest speaker.',
      title: 'Speak: tongue-twister challenge',
    },
    {
      mcq: 'You read the word “decided” in a new story. How does the -ed sound?',
      options: ['Like t: decid-t', 'Like d: decid-d', 'With an extra beat: de-ci-did', 'It is silent'],
      answer: 2,
      why: 'Decide ends with a d sound, so -ed adds an extra beat: de-ci-did, like wanted and needed.',
      phase: 'probe',
      title: 'New word: decided',
    },
    {
      speak: 'Every Wednesday, my brother and I visit the vegetable market. We buy fresh, green beans and very sweet watermelons. Then we walk home, tired but happy.',
      checklist: ['I paused at every comma and full stop', 'I said v and w clearly (Wednesday, vegetable, very, watermelons)', 'I stressed important words', 'I read at a steady speed', 'I looked up at the end'],
      tips: 'A new paragraph! Mark your pauses with / first, then read it like a newsreader.',
      phase: 'probe',
      title: 'Probe: read a paragraph aloud',
    },
  ],
  teacher: {
    explain:
      'This lesson targets sounds that many Indian learners of English find tricky: v and w (often mixed), th (often said as t or d), and the three sounds of -ed. Make it physical and fun — mirrors, cameras, exaggerated mouths. Stress that Indian English is a real, respected English; the goal is to be clear, not to copy a foreign accent. Then teach pausing at punctuation and stressing important words, and finish with a tongue-twister challenge and a paragraph read-aloud.',
    analogy: 'Your mouth is like a sports team: the lips, teeth and tongue each have a job, and today we train them like players at practice.',
    vocab: [
      ['sound', 'The noise a letter or letters make when we say them.'],
      ['tongue twister', 'A silly sentence with similar sounds that is hard to say fast.'],
      ['stress', 'Saying a word a little louder and longer because it is important.'],
      ['pause', 'A short stop to take a breath.'],
      ['ending', 'The last part of a word, like -ed.'],
    ],
    demo:
      '1) Turn on your camera close-up. Say van slowly, pointing to your teeth on your lip; say wet, pointing to your round lips. 2) Play “v or w?”: say a word, learners show a V with fingers or a W with three fingers. 3) Show th with your tongue peeping out: think, three, this. 4) Say walked, played, wanted and tap the table once for each beat — wanted gets two taps. 5) Read the Wednesday paragraph twice: once with no pauses (rushed), once with pauses. Ask which was easier to understand.',
    unplugged:
      'Mouth gym and whisper chain (5 min): first copy the teacher’s big mouth moves — lips round (w), teeth on lip (v), tongue out (th). Then play whisper chain: a twister is whispered from learner to learner in the order the teacher calls; the last learner says it aloud. Did it survive?',
    prompts: [
      ['Where do your teeth go for the v sound?', 'Top teeth gently on the bottom lip.'],
      ['How do your lips look for w?', 'Round like an O, then they open.'],
      ['Where does your tongue go for th?', 'Lightly between your teeth.'],
      ['Which -ed word has an extra beat: jumped, played or painted?', 'Painted.'],
      ['What do we do at a comma?', 'Take a short pause.'],
    ],
    support: 'Focus on one sound only (v/w) and use picture cards (van, window). Let learners say the twister in two halves.',
    stretch: 'Write your own tongue twister with v and w words and challenge the class. Read the paragraph stressing different words and notice how the meaning changes.',
    mis: [
      ['Saying “wery” for very or “vater” for water', 'Mirror check: teeth on lip for v; round lips with no teeth for w.'],
      ['Saying “tree” for three or “dis” for this', 'Let your tongue peep between your teeth and blow air.'],
      ['Saying every -ed with an extra beat: “jump-ed”', 'Only words ending in t or d sounds get the extra beat: want-ed, need-ed.'],
      ['Thinking a good speaker must talk fast', 'Clear and steady is better. Pauses help people understand.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Mouth gym (copy the big mouth moves), then the whisper-chain tongue twister.' },
      { minutes: 5, stage: 'Watch + show me', doing: 'Play the video. Then “v or w?”: teacher says words, learners show finger letters.' },
      { minutes: 5, stage: 'Close-up demo', doing: 'Teacher camera close-up for v, w and th; tap the beats for walked, played, wanted.' },
      { minutes: 6, stage: 'Build-along', doing: 'Tongue-twister training steps on the practice sheet; learners mark pauses in the paragraph.' },
      { minutes: 7, stage: 'Game time', doing: 'v/w sort, the -ed sort as a race, then Find the pause (poll).' },
      { minutes: 8, stage: 'Tongue-twister challenge', doing: 'Every learner tries the twister: slow, then fast. The class awards a “Clear Champion” badge for the clearest (not fastest) speaker.' },
      { minutes: 6, stage: 'Show-and-tell: newsreaders', doing: 'Learners read the Wednesday paragraph like newsreaders; peers listen for pauses and give a thumbs up for each clear v and w.' },
      { minutes: 3, stage: 'Probe + exit ticket', doing: 'New word: decided (poll), then the exit ticket in the chat.' },
    ],
    successCriteria: ['I can say v and w clearly.', 'I can make the th sound with my tongue.', 'I can say -ed endings as t, d or id.', 'I can pause at commas and full stops when I read aloud.'],
    homework: 'Teach your family the tongue twister and have a “clear, not fast” challenge. Read the Wednesday paragraph to someone with pauses.',
    exit: 'Write one word with v and one word with w, and say them both aloud to yourself.',
  },
  files: [
    {
      name: 'l05-practice-sheet-clear-speaking.md',
      title: 'Practice sheet: mouth gym',
      audience: 'student',
      content: `# Clear Speaking — Mouth Gym

## Sound guide
| Sound | What your mouth does | Words |
|---|---|---|
| v | top teeth gently on bottom lip, buzz | van, very, vegetable, violin, five |
| w | round lips like O, then open (no teeth!) | wet, water, window, wall, Wednesday |
| th (quiet) | tongue peeps between teeth, blow | think, three, thank you, bath |
| th (buzzy) | tongue between teeth, buzz | this, that, mother, together |

## Pairs practice (say slowly)
vest / west · vet / wet · vine / wine · tree / three · tank / thank

## The three -ed sounds
| t | d | id (extra beat) |
|---|---|---|
| walked, jumped, washed | played, cleaned, opened | wanted, painted, needed |

Rule: only words that end in a **t** or **d** sound get the extra beat.

## Tongue twisters (slow, slow, then fast)
1. Vicky's violet van went west on Wednesday.
2. Three thin thinkers thought about thunder.
3. We washed the very wet vegetables.

## Read with pauses ( / = short pause, // = full stop)
Every Wednesday, / my brother and I / visit the vegetable market. // We buy fresh, green beans / and very sweet watermelons. // Then we walk home, / tired but happy. //

## Speaking checklist
- [ ] Teeth on lip for v
- [ ] Round lips for w
- [ ] Tongue peeps out for th
- [ ] I paused at commas and full stops
- [ ] Clear first, then faster

${REC}
`,
    },
    {
      name: 'l05-teacher-script.md',
      title: 'Teacher script: Clear Speaking',
      audience: 'teacher',
      content: `# Teacher Script — Lesson 5: Clear Speaking (45 min)

## Important message to say
"Indian English is a real English, and your accent is part of who you are. Today we are not changing your accent — we are making sure every word is clear."

## Warm-up: Mouth gym + whisper chain (5 min)
Copy me: round lips (w)... teeth on lip (v)... tongue out (th)... big smile! Then whisper the twister "Vicky's violet van went west on Wednesday" down the class list; the last learner says it aloud.

## Close-up demo
- Camera close: "van" — point to teeth on lip. "wet" — point to round lips.
- "v or w?" game: say vet / wet / van / wall / very / water. Learners show a V (two fingers) or W (three fingers).
- th: "Tongue peeps out like a shy tortoise: think, three, this."
- -ed: tap the table. walked (1 tap) · played (1 tap) · want-ed (2 taps).

## Rushed vs paused
Read the Wednesday paragraph in one fast breath. Then read it with pauses. Ask: "Which one could you understand? Why?"

## Tongue-twister challenge rules
"The winner is the CLEAREST speaker, not the fastest. Say it slowly once, then as fast as you can while staying clear." Award a "Clear Champion" shout-out.

## Kind correction
Echo correctly instead of saying "wrong": Learner: "wery good" → You: "VERY good — teeth on lip — very!"

## Exit ticket
One v word and one w word, said aloud.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 6 ─────────────────────────────────
export const E6 = lesson(6, {
  title: 'Everyday Situations',
  objective: 'Use polite requests to order food, ask for help, talk on the phone and buy something at a shop, and act out a role-play dialogue.',
  concept: 'Polite requests',
  minutes: 45,
  hook: ['upgrade', 'Give me a dosa.', 'Could I have a masala dosa, please?'],
  intro: 'Today you will practise real-life English for restaurants, shops, phone calls and asking for help.',
  cards: [
    { emoji: '🙏', title: 'Polite requests', body: 'Start requests with could I or can I, and add please. Could I have a glass of water, please? It sounds much kinder than give me water.' },
    { emoji: '🍽️', title: 'At a restaurant', body: 'Say could I have, or I would like, then the food and please. I would like a masala dosa, please. When the food comes, say thank you.' },
    { emoji: '🛍️', title: 'At a shop', body: 'Ask do you have, and how much is it? Do you have a blue notebook? How much is it? Say I will take it, please, and thank you.' },
    { emoji: '📞', title: 'On the phone', body: 'Start with hello, this is, and your first name. Ask may I speak to, and the person’s name, please. End with thank you, bye.' },
    { emoji: '🆘', title: 'Asking for help', body: 'Start with excuse me to get attention politely. Excuse me, could you help me, please? Ask a grown-up you trust, like a teacher, a parent or a shop helper at the counter.' },
  ],
  scenes: [
    {
      kind: 'bullets',
      heading: 'Listen: at a restaurant',
      bullets: [
        { icon: '🧑‍🍳', text: 'Waiter: Good evening! What would you like?' },
        { icon: '🧒', text: 'Riya: Could I have a masala dosa, please?' },
        { icon: '🧑‍🍳', text: 'Waiter: Of course. Anything to drink?' },
        { icon: '🧒', text: 'Riya: A mango lassi, please.' },
        { icon: '🧑‍🍳', text: 'Waiter: Here you are.' },
        { icon: '🧒', text: 'Riya: Thank you!' },
      ],
      say: [
        'Listen to Riya order food at a restaurant.',
        'The waiter says, Good evening! What would you like?',
        'Riya says, Could I have a masala dosa, please?',
        'Anything to drink? A mango lassi, please. Here you are. Thank you!',
        'Riya used please twice and thank you once. That is polite and confident.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Listen: at a stationery shop',
      bullets: [
        { icon: '👦', text: 'Arjun: Excuse me, do you have a blue notebook?' },
        { icon: '🧑‍💼', text: 'Shopkeeper: Yes, we do. Here it is.' },
        { icon: '👦', text: 'Arjun: How much is it?' },
        { icon: '🧑‍💼', text: 'Shopkeeper: It is forty rupees.' },
        { icon: '👦', text: 'Arjun: I’ll take it, please. Thank you!' },
      ],
      say: [
        'Now listen to Arjun at a stationery shop.',
        'Excuse me, do you have a blue notebook? Yes, we do. Here it is.',
        'How much is it? It is forty rupees.',
        'I will take it, please. Thank you!',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Listen: a phone call',
      bullets: [
        { icon: '👧', text: 'Zoya: Hello, this is Zoya. May I speak to Meera, please?' },
        { icon: '👩', text: 'Meera’s mum: Sorry, she is not at home. Can I take a message?' },
        { icon: '👧', text: 'Zoya: Yes, please. Could you tell her I called?' },
        { icon: '👩', text: 'Meera’s mum: Of course!' },
        { icon: '👧', text: 'Zoya: Thank you. Bye!' },
      ],
      say: [
        'Last, listen to Zoya make a phone call to her friend.',
        'Hello, this is Zoya. May I speak to Meera, please?',
        'Sorry, she is not at home. Can I take a message?',
        'Yes, please. Could you tell her I called? Thank you. Bye!',
      ],
    },
  ],
  build: {
    title: 'Write and rehearse a role-play',
    intro: 'Choose one situation card on your practice sheet. With a partner, write a six-line dialogue, then rehearse it.',
    steps: [
      { title: 'Pick a situation', text: 'Restaurant, shop, phone call or asking for help. Decide who plays which part.' },
      { title: 'Start politely', text: 'Line 1 is a greeting or excuse me: Good evening! / Excuse me… / Hello, this is…' },
      { title: 'Make a request', text: 'Use could I, can I, may I or do you have, and add please.' },
      { title: 'Add a twist', text: 'Something small goes wrong: the dosa is finished, the notebook is red, the friend is out. How do you answer politely?', tip: 'Polite answers for a problem: That’s OK. / Could I have … instead, please?' },
      { title: 'End kindly', text: 'Finish with thank you and goodbye.' },
      { title: 'Rehearse', text: 'Practise twice, then swap parts. Use a friendly voice and look at your partner.' },
    ],
  },
  acts: [
    {
      match: 'Match each situation to the best polite sentence',
      pairs: [
        ['At a restaurant', 'Could I have a masala dosa, please?'],
        ['At a shop', 'How much is this notebook?'],
        ['On the phone', 'Hello, this is Kabir. May I speak to Arjun, please?'],
        ['When you are lost in a mall', 'Excuse me, could you help me, please?'],
        ['When someone offers more food you do not want', 'No, thank you. I’m full.'],
      ],
      why: 'Each situation has its own polite pattern, but they all use kind words like please, excuse me and thank you.',
    },
    {
      order: 'Put the restaurant dialogue in order',
      steps: [
        'Waiter: Good evening! What would you like?',
        'Riya: Could I have a masala dosa, please?',
        'Waiter: Of course. Anything to drink?',
        'Riya: A mango lassi, please.',
        'Waiter: Here you are.',
        'Riya: Thank you!',
      ],
      why: 'Greeting, request, follow-up question, answer, the food arrives, thank you.',
      title: 'Order the dialogue',
    },
    {
      sort: 'Polite or bossy?',
      buckets: ['Polite', 'Bossy'],
      items: [
        ['Could I have some water, please?', 0],
        ['Give me water.', 1],
        ['Excuse me, where is the library?', 0],
        ['Where is library? Tell me.', 1],
        ['May I speak to Riya, please?', 0],
        ['Call Riya.', 1],
        ['I’d like this one, please.', 0],
        ['I want that. Now.', 1],
      ],
      why: 'Polite requests use could, may, would like, please and excuse me. Bossy ones sound like orders.',
    },
    {
      speak: 'Excuse me, do you have a blue notebook? How much is it? I’ll take it, please. Thank you!',
      checklist: ['I started with excuse me or a greeting', 'I made a request with could I, may I or do you have', 'I used please', 'I answered my partner’s line', 'I said thank you at the end', 'I used a friendly voice and looked at my partner'],
      tips: 'Role play your own six-line dialogue with a partner (or a grown-up at home), then swap parts.',
      title: 'Speak: role-play dialogue',
    },
    {
      mcq: 'You are at the railway station with your parent, and you cannot find platform 3. Your parent says you can ask the help desk. What do you say?',
      options: ['Excuse me, could you tell us where platform 3 is, please?', 'Platform 3!', 'Where platform? Tell fast.', 'I will just walk around until I find it.'],
      answer: 0,
      why: 'Excuse me, could you…, please? is polite and clear. Asking a help desk, with your grown-up, is the safe choice.',
      wrong: { 1: 'One word sounds rude and is unclear.', 2: 'This sounds bossy. Use excuse me and please.', 3: 'Asking a trusted helper is quicker and safer.' },
      phase: 'probe',
      title: 'New situation: at the station',
    },
    {
      write: 'You call your friend Kabir to ask him to play badminton, but his dad answers and says Kabir is not home. Write the phone dialogue (4–6 lines): greet, say who you are, ask for Kabir, and leave a polite message.',
      keywords: ['hello', 'this is', 'may i', 'please', 'message', 'thank'],
      exemplar: 'Hello, this is Aarav. May I speak to Kabir, please? — Sorry, he is not at home. — Could you please give him a message? Please tell him I called to play badminton. — Of course. — Thank you, bye!',
      starters: ['Hello, this is…', 'May I speak to…', 'Could you please tell him…'],
      minWords: 25,
      phase: 'probe',
      title: 'New situation: leave a message',
    },
  ],
  teacher: {
    explain:
      'Learners practise polite request patterns for four real situations: restaurant, shop, phone and asking for help. The core language is could I / can I / may I / I’d like + please, excuse me to get attention, and thank you to finish. Model each dialogue with a volunteer, then let pairs write and act out their own role-play with a small “twist” so they learn to respond, not just recite. Safety: when lost, ask a trusted grown-up (a parent, teacher, police officer or staff at a counter); on the phone, never give your address to someone you do not know.',
    analogy: 'Please and thank you are like oil in a bicycle chain: everything runs smoothly when you use them.',
    vocab: [
      ['request', 'Asking for something.'],
      ['polite', 'Kind and respectful.'],
      ['Could I have…?', 'A polite way to ask for something.'],
      ['excuse me', 'A polite way to get someone’s attention.'],
      ['message', 'Information you ask someone to pass on.'],
      ['role play', 'Acting out a real situation with a partner.'],
    ],
    demo:
      '1) Say “Give me a dosa!” in a bossy voice, then “Could I have a masala dosa, please?” Ask: which would a waiter prefer? 2) Act out the restaurant dialogue with a volunteer as Riya; you are the waiter. 3) Act out the shop dialogue; use a real notebook as a prop and a price tag of ₹40. 4) Act out the phone call with your hand as a phone. 5) Ask: what changes in each situation, and what stays the same? (Please, thank you and excuse me stay the same.)',
    unplugged:
      'Polite or bossy? (5 min): the teacher reads requests in different voices — “Pass the salt!” / “Could you pass the salt, please?” Learners give a thumbs up for polite and a thumbs down for bossy. Then volunteers turn a bossy one into a polite one, using their kindest voice.',
    prompts: [
      ['How do we make “Give me water” polite?', 'Could I have some water, please?'],
      ['What do we say to get someone’s attention politely?', 'Excuse me.'],
      ['How do you start a phone call?', 'Hello, this is [first name]. May I speak to…, please?'],
      ['How do you ask the price?', 'How much is it? / How much is this?'],
      ['Who should you ask for help if you are lost?', 'A trusted grown-up: a parent, teacher, police officer or staff at a counter.'],
    ],
    support: 'Give a ready-made dialogue with only two gaps to fill. Let learners hold a prop (a toy phone or notebook) to make it feel real.',
    stretch: 'Add two twists to the dialogue and handle both politely. Try the same dialogue as a very polite robot, then as yourself.',
    mis: [
      ['“Give me one dosa.”', 'Could I have a dosa, please? / I’d like a dosa, please.'],
      ['“How much is these?”', 'How much are these? (more than one) / How much is this? (one)'],
      ['On the phone: “Who is this?” first', 'Say who you are first: “Hello, this is Zoya.”'],
      ['Thinking please is only for grown-ups', 'Everyone uses please and thank you, with friends too.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Polite or bossy? Thumbs up/down for requests read in different voices; volunteers fix the bossy ones.' },
      { minutes: 5, stage: 'Watch + thumbs check', doing: 'Play the video. Thumbs: “It is OK to say ‘Who is this?’ first on the phone.” (Down.)' },
      { minutes: 5, stage: 'Act-it-out demo', doing: 'Teacher and volunteers act out the restaurant, shop and phone dialogues with props.' },
      { minutes: 7, stage: 'Game time', doing: 'Situation match, Order the dialogue, then the polite-or-bossy sort as a quick competition.' },
      { minutes: 8, stage: 'Breakout: write the role-play', doing: 'Pairs choose a situation card, write a six-line dialogue with a twist, and rehearse twice, swapping parts.' },
      { minutes: 10, stage: 'Show-and-tell: role-play theatre', doing: 'Pairs perform their role-play for the class. Audience guesses the situation and spots every please and thank you.' },
      { minutes: 5, stage: 'Probe + exit ticket', doing: 'At the station (poll), then write the phone message dialogue. Exit ticket in the chat.' },
    ],
    successCriteria: ['I can make polite requests with could I, may I and please.', 'I can order food and ask the price in a shop.', 'I can start and end a phone call politely.', 'I can ask a trusted grown-up for help.'],
    homework: 'At dinner or at a shop with a grown-up, use one polite request in English (“Could I have…, please?”). Tell the class what happened.',
    exit: 'Make this polite: “Give me a pencil.”',
  },
  files: [
    {
      name: 'l06-practice-sheet-everyday-situations.md',
      title: 'Practice sheet: role-play cards',
      audience: 'student',
      content: `# Everyday Situations — Role-Play Cards

## Polite request frames
- **Could I have ______, please?**
- **I'd like ______, please.**
- **May I speak to ______, please?**
- **Excuse me, do you have ______?**
- **Excuse me, could you help me, please?**
- **How much is this? / How much are these?**

## Polite answers when something goes wrong
That's OK. · No problem. · Could I have ______ instead, please? · Never mind, thank you.

## Situation cards (choose one)
1. **Restaurant** — You want a masala dosa and a lassi. Twist: the lassi is finished.
2. **Stationery shop** — You need a blue notebook. Twist: they only have red.
3. **Phone call** — You call a friend to play. Twist: your friend is not home; leave a message.
4. **Asking for help** — You and your parent can't find the shoe section in a mall. Ask a staff member at the help desk.

## My dialogue (6 lines)
A: ___________________________________
B: ___________________________________
A: ___________________________________
B: ___________________________________
A: ___________________________________
B: ___________________________________

## Word bank
please · thank you · excuse me · sorry · of course · here you are · I'll take it · rupees · message · bye

## Stay safe
If you are lost, ask a trusted grown-up: your parent, a teacher, a police officer, or staff at a shop counter. On the phone, never give your address or details to someone you don't know. ${SAFE}

## Speaking checklist
- [ ] I started with excuse me or a greeting
- [ ] I used could I / may I / do you have
- [ ] I used please
- [ ] I answered my partner's line
- [ ] I said thank you at the end
- [ ] Friendly voice, looked at my partner
`,
    },
    {
      name: 'l06-teacher-script.md',
      title: 'Teacher script: Everyday Situations',
      audience: 'teacher',
      content: `# Teacher Script — Lesson 6: Everyday Situations (45 min)

## Warm-up: Polite or bossy? (5 min)
Read each in the voice shown; learners thumbs up (polite) or down (bossy):
- "Pass the salt!" (bossy voice) → down
- "Could you pass the salt, please?" → up
- "Move." → down → volunteer fixes: "Excuse me, could I get past, please?"

## Act it out (use props)
Restaurant: you are the waiter, a volunteer is Riya. Shop: a real notebook with a ₹40 sticky note. Phone: thumb-and-little-finger phone.
After all three, ask: "What words did we use every time?" (please, thank you, excuse me)

## Breakout instructions
"Choose a situation card. Write six lines with a partner. Something small goes wrong — the twist! Answer politely. Practise twice and swap parts."

## Role-play theatre
Each pair performs. Audience job: guess the situation and count every please and thank you. Teacher names one star per pair (e.g. "Great twist!" "Lovely polite voice!").

## Safety line
"If you're ever lost, stay where you are or go to a counter and ask a trusted grown-up — staff, a police officer, a teacher. On the phone, never give your address to someone you don't know."

## Exit ticket
Make polite: "Give me a pencil." → "Could I have a pencil, please?"
`,
    },
  ],
});

// ───────────────────────────────── Lesson 7 ─────────────────────────────────
export const E7 = lesson(7, {
  title: 'Tell a Story',
  objective: 'Retell a short story with a beginning, middle and end, using first, then, next and finally, and simple past tense verbs.',
  concept: 'Beginning · middle · end',
  minutes: 45,
  hook: ['phrase', 'First, the crow looked for water. Then he found a pot. Finally, he drank!', ['First', 'Then', 'Finally']],
  intro: 'Everyone loves a good story. Today you will learn to tell one so your listeners hang on every word.',
  cards: [
    { emoji: '📚', title: 'Beginning, middle, end', body: 'Every story has three parts. The beginning tells who and where. The middle has a problem, and the end shows how it is solved.' },
    { emoji: '➡️', title: 'Sequencing words', body: 'First, then, next and finally help listeners follow the order. They are like stepping stones through your story. Once upon a time and one day are great ways to begin.' },
    { emoji: '⏪', title: 'Past tense', body: 'Stories happened in the past, so we change the verbs. Many just add -ed: look becomes looked, and drop becomes dropped. Some change completely: go becomes went, see becomes saw.' },
    { emoji: '🎭', title: 'Tell it with feeling', body: 'Change your voice for different characters. Slow down at the exciting part. Use your face and hands to show feelings.' },
  ],
  scenes: [
    {
      kind: 'card',
      heading: 'Listen: The Thirsty Crow',
      emoji: '🐦',
      body: 'Once upon a time, on a hot summer day, a crow was very thirsty.\nFirst, he flew everywhere looking for water.\nThen he saw a pot with a little water at the bottom.\nNext, he dropped pebbles into the pot, one by one.\nFinally, the water came up, and he drank happily.',
      say: [
        'Listen to the story of the thirsty crow.',
        'Once upon a time, on a hot summer day, a crow was very thirsty.',
        'First, he flew everywhere looking for water. Then he saw a pot with a little water at the bottom.',
        'Next, he dropped pebbles into the pot, one by one.',
        'Finally, the water came up, and he drank happily. The end.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'The story map',
      bullets: [
        { icon: '🌅', text: 'Beginning: a thirsty crow on a hot day' },
        { icon: '⛰️', text: 'Middle: the water is too low to reach' },
        { icon: '💡', text: 'Middle: he drops pebbles into the pot' },
        { icon: '🏁', text: 'End: the water rises and he drinks' },
        { icon: '⭐', text: 'Lesson: think hard and never give up' },
      ],
      say: [
        'Here is the story map. At the beginning, we meet a thirsty crow on a hot day.',
        'In the middle, there is a problem. The water is too low to reach.',
        'He has a clever idea. He drops pebbles into the pot.',
        'At the end, the water rises and he drinks. The lesson is, think hard and never give up.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Today and yesterday',
      bullets: [
        { icon: '➕', text: 'look → looked · drop → dropped · walk → walked' },
        { icon: '🔀', text: 'go → went · see → saw · fly → flew' },
        { icon: '🔀', text: 'drink → drank · find → found · say → said' },
      ],
      say: [
        'Many verbs just add ed for the past. Look, looked. Drop, dropped. Walk, walked.',
        'Some verbs are special and change completely. Go becomes went. See becomes saw.',
        'Fly becomes flew, and drink becomes drank. These special verbs need practice.',
      ],
    },
  ],
  build: {
    title: 'My story map and retelling',
    intro: 'Use the story map on your practice sheet to retell The Thirsty Crow in your own words. Then try The Lion and the Mouse.',
    steps: [
      { title: 'Draw four boxes', text: 'Label them First, Then, Next, Finally. Draw a quick picture in each box for The Thirsty Crow.' },
      { title: 'Add key words', text: 'Under each picture, write two or three key words: thirsty, hot day / pot, little water / pebbles / drank.' },
      { title: 'Check your verbs', text: 'Change each verb to the past: fly → flew, see → saw, drop → dropped, drink → drank.' },
      { title: 'Retell to a partner', text: 'Point to each box as you tell it. Use a sequencing word to start each part.', tip: 'Start with Once upon a time and finish with The end — your listeners will know exactly when to clap!' },
      { title: 'Add feeling', text: 'Tell it again. Use a tired, thirsty voice for the crow and slow down at the clever idea.' },
    ],
  },
  acts: [
    {
      order: 'Put The Thirsty Crow in order',
      steps: [
        'Once upon a time, a crow was very thirsty.',
        'First, he flew everywhere looking for water.',
        'Then he saw a pot with a little water at the bottom.',
        'Next, he dropped pebbles into the pot.',
        'Finally, the water came up and he drank happily.',
      ],
      why: 'Beginning (thirsty crow), middle (finds the pot, drops pebbles), end (he drinks). The sequencing words are clues!',
      title: 'Order the story',
    },
    {
      match: 'Match each verb to its past tense',
      pairs: [
        ['go', 'went'],
        ['see', 'saw'],
        ['eat', 'ate'],
        ['run', 'ran'],
        ['find', 'found'],
        ['say', 'said'],
      ],
      why: 'These are special (irregular) verbs: they change completely in the past instead of adding -ed.',
    },
    {
      blanks: '[[1]], Meera went to the park. [[2]], she saw a tiny kitten under a bench. [[3]], she gave it some water. [[4]], the kitten purred and fell asleep.',
      answers: [['First', 'One day'], ['Then', 'Next'], ['Next', 'Then'], ['Finally']],
      bank: ['First', 'Then', 'Next', 'Finally'],
      why: 'First starts the story, then and next move it along, and finally shows the end.',
      title: 'Add the sequencing words',
    },
    {
      speak: 'Once upon a time, a crow was very thirsty. First, he flew everywhere looking for water. Then he saw a pot. Next, he dropped pebbles into it. Finally, the water came up and he drank. The end!',
      checklist: ['I told the beginning, middle and end', 'I used first, then, next and finally', 'I used past tense verbs (flew, saw, dropped, drank)', 'I used a different voice or feeling', 'I looked up at my listeners'],
      tips: 'Now retell it in YOUR own words using your story map. It is fine to add details, like what the crow said!',
      title: 'Speak: retell The Thirsty Crow',
    },
    {
      mcq: 'Which sentence is correct for a story about yesterday?',
      options: ['Yesterday, I go to the beach and see a crab.', 'Yesterday, I went to the beach and saw a crab.', 'Yesterday, I goed to the beach and seed a crab.', 'Yesterday, I going to the beach and seeing a crab.'],
      answer: 1,
      why: 'Yesterday means the past: go becomes went and see becomes saw.',
      wrong: { 0: 'These are present tense verbs — change them to the past.', 2: 'Go and see are special verbs: went and saw, not goed and seed.', 3: 'Use the past tense: went and saw.' },
      phase: 'probe',
      title: 'New situation: yesterday at the beach',
    },
    {
      write: 'Write a five-sentence story about a monsoon day (real or made up). Use first, then, next and finally, and at least three past tense verbs.',
      keywords: ['first', 'then', 'next', 'finally'],
      exemplar: 'One rainy morning, Kabir looked out of the window. First, he put on his yellow raincoat. Then he jumped in every puddle on the way to the park. Next, he made a paper boat and it sailed down the street. Finally, he went home wet, muddy and very happy.',
      starters: ['One rainy morning…', 'First,…', 'Finally,…'],
      minWords: 35,
      phase: 'probe',
      title: 'New situation: a monsoon day story',
    },
  ],
  teacher: {
    explain:
      'Learners learn story structure (beginning, middle with a problem, end), sequencing words (first, then, next, finally) and simple past tense: regular -ed verbs and common irregular verbs. They retell a well-known Indian fable, The Thirsty Crow, using a four-box story map with pictures and key words — not a memorised script. Encourage expression: character voices, slowing down at the exciting part. Lesson 5’s -ed sounds come back here: looked (t), dropped (t), wanted (id).',
    analogy: 'A story is like a bridge: the beginning is one bank, the middle is the bridge over the river (the problem), and the end is the other bank.',
    vocab: [
      ['beginning', 'The start of a story: who and where.'],
      ['problem', 'Something that goes wrong in the middle of a story.'],
      ['ending', 'How the problem is solved.'],
      ['sequencing words', 'Words that show order: first, then, next, finally.'],
      ['past tense', 'Verbs for things that already happened, like walked or went.'],
      ['retell', 'Tell a story again in your own words.'],
    ],
    demo:
      '1) Tell The Thirsty Crow dramatically with actions (flapping, peering into the pot, dropping pebbles one by one). 2) Draw the four-box story map live on the whiteboard with stick pictures. 3) Point to each box and retell it using the sequencing words — hold up one finger for each. 4) Write two columns: today / yesterday. Fill in look/looked, drop/dropped, then go/went, see/saw, fly/flew, drink/drank. 5) Tell one sentence wrongly (“He goed to the pot”) and let learners catch the mistake.',
    unplugged:
      'One-word story circle (5 min): the class builds a story together, one word each, in the teacher’s calling order. Round two: one sentence each, starting with First, Then, Next or Finally in turn. Does the story make sense?',
    prompts: [
      ['What are the three parts of a story?', 'Beginning, middle, end.'],
      ['What happens in the middle?', 'There is a problem.'],
      ['Name four sequencing words.', 'First, then, next, finally.'],
      ['What is the past tense of go? Of see?', 'Went. Saw.'],
      ['What was the crow’s clever idea?', 'He dropped pebbles into the pot to make the water rise.'],
    ],
    support: 'Use the picture story map only, and let learners say one sentence per picture. Provide the past-tense verbs on a strip.',
    stretch: 'Retell The Lion and the Mouse with character voices, or change the ending of The Thirsty Crow and tell your new version.',
    mis: [
      ['“He goed” / “He seed”', 'Special verbs change: went, saw. Practise them like a chant.'],
      ['Mixing present and past: “He flew and sees a pot”', 'Keep the whole story in the past: flew… saw.'],
      ['Using “then” for every sentence', 'Use first, then, next and finally, and starters like one day.'],
      ['Telling only the ending', 'Tell the beginning and the problem first, so the ending makes sense.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'One-word story circle, then a one-sentence round with First, Then, Next, Finally.' },
      { minutes: 5, stage: 'Watch + poll', doing: 'Play the video. Poll: “What was the crow’s problem?” (The water was too low.)' },
      { minutes: 5, stage: 'Storytelling demo', doing: 'Teacher tells the story with actions, draws the four-box story map and the today/yesterday verb columns.' },
      { minutes: 7, stage: 'Game time', doing: 'Order the story, past-tense match as a race, then Add the sequencing words.' },
      { minutes: 6, stage: 'Build-along', doing: 'Learners draw their own four-box story map with key words.' },
      { minutes: 5, stage: 'Pair retelling (breakout)', doing: 'Partners retell to each other, pointing to each box; listener ticks the checklist.' },
      { minutes: 8, stage: 'Show-and-tell: story stage', doing: 'Volunteers retell on camera with voices and actions; the class gives a “story star” for the best character voice.' },
      { minutes: 4, stage: 'Probe + exit ticket', doing: 'Yesterday at the beach (poll), then start the monsoon story (finish at home). Exit ticket in the chat.' },
    ],
    successCriteria: ['I can tell a story with a beginning, middle and end.', 'I can use first, then, next and finally.', 'I can use past tense verbs like walked, went and saw.', 'I can retell a story with feeling.'],
    homework: 'Retell The Thirsty Crow or The Lion and the Mouse to a family member at bedtime. Finish your monsoon day story.',
    exit: 'Write the past tense of: go, see, drop.',
  },
  files: [
    {
      name: 'l07-practice-sheet-tell-a-story.md',
      title: 'Practice sheet: story map',
      audience: 'student',
      content: `# Tell a Story — My Story Map

## Story map (draw a picture + 2–3 key words in each box)
| First | Then | Next | Finally |
|---|---|---|---|
| | | | |

## Story starters and enders
Once upon a time… · One day… · Long ago… · One rainy morning…
…and they lived happily. · The end! · And that is how…

## Sequencing words
**first · then · next · after that · finally**

## Past tense helper
| Add -ed | Special verbs |
|---|---|
| look → looked | go → went |
| drop → dropped | see → saw |
| walk → walked | fly → flew |
| jump → jumped | drink → drank |
| want → wanted | find → found · say → said · eat → ate · run → ran |

## Story 1: The Thirsty Crow (retell it)
Key words: hot day · thirsty crow · pot · little water · pebbles · water rose · drank

## Story 2: The Lion and the Mouse (try it!)
Key words: lion sleeping · mouse runs over him · lion catches mouse · mouse says "Let me go, I will help you one day" · lion laughs, lets him go · hunters catch lion in a net · mouse bites the net · lion is free · lesson: little friends can be great friends

## Speaking checklist
- [ ] I told the beginning, middle and end
- [ ] I used first, then, next and finally
- [ ] I used past tense verbs
- [ ] I used a different voice or feeling
- [ ] I looked up at my listeners

## Worked example
Once upon a time, a lion was sleeping in the forest. First, a little mouse ran over his nose. Then the lion caught the mouse, but he let it go. Next, hunters trapped the lion in a big net. Finally, the mouse bit the net and the lion was free. The end!
`,
    },
    {
      name: 'l07-teacher-script.md',
      title: 'Teacher script: Tell a Story',
      audience: 'teacher',
      content: `# Teacher Script — Lesson 7: Tell a Story (45 min)

## Warm-up: One-word story circle (5 min)
"We'll make a story together — one word each!" Start: "Once..." Call names in order. Round two: one sentence each, starting First → Then → Next → Finally.

## Tell the story with actions
"Once upon a time, on a hot, hot summer day (fan yourself), a crow was very thirsty (croaky voice). First, he flew everywhere (flap arms)... Then he saw a pot! (point) But the water was at the very bottom (peer down). Next, he had an idea (tap head) — he dropped pebbles in, one... by... one... Finally, the water came up and he drank (big gulp). The end!"

## Draw the story map live
Four boxes: First | Then | Next | Finally, with stick pictures and key words.

## Verb columns
today | yesterday: look/looked · drop/dropped · go/went · see/saw · fly/flew · drink/drank.
Catch-the-mistake: "He goed to the pot." Learners shout "WENT!"

## Kind correction
Recast instead of interrupting: Learner: "He see a pot." → You: "Yes! He SAW a pot. What happened next?"

## Story stage
Volunteers retell with voices; award a "story star" for the best character voice.

## Exit ticket
Past tense of go, see, drop → went, saw, dropped.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 8 ─────────────────────────────────
export const E8 = lesson(8, {
  title: 'Capstone: My First Speech',
  objective: 'Choose a topic, plan a speech with a speech map, practise it, and deliver a 1–2 minute speech, then give and use kind feedback.',
  concept: 'Plan · practise · present',
  minutes: 45,
  hook: ['word', 'SPEECH', 'Your voice, your ideas, your stage!'],
  intro: 'This is the big day! You will plan and give your very first speech, using everything you have learned.',
  cards: [
    { emoji: '💡', title: 'Pick a topic you love', body: 'Choose something you can talk about happily. My hero, a fun day I will never forget, or why I love cricket, dance or books. If you love it, your listeners will feel it.' },
    { emoji: '🗺️', title: 'Make a speech map', body: 'A speech has an opening, three main points and a closing. Write key words for each part, not every word. It is your map, so you will not get lost.' },
    { emoji: '🔁', title: 'Practise three times', body: 'Practise once alone, once in front of a mirror or camera, and once for a friend or family member. Each time, look at your map a little less.' },
    { emoji: '🌟', title: 'Deliver with confidence', body: 'Take a deep breath and smile before you begin. Stand tall, speak slowly and pause between your points. If you forget, look at your map, breathe, and carry on.' },
  ],
  scenes: [
    {
      kind: 'card',
      heading: 'Listen: Riya’s speech, My Hero',
      emoji: '🦸',
      body: 'Who is your hero? Mine is my grandmother.\nFirst, she is very kind. She feeds the stray dogs on our street every morning.\nSecond, she is brave. She learned to ride a scooter when she was sixty!\nThird, she tells the best stories about when she was a little girl.\nThat is why my grandmother is my hero. Thank you for listening!',
      say: [
        'Listen to Riya give her speech about her hero.',
        'Who is your hero? Mine is my grandmother.',
        'First, she is very kind. She feeds the stray dogs on our street every morning.',
        'Second, she is brave. She learned to ride a scooter when she was sixty!',
        'Third, she tells the best stories. That is why my grandmother is my hero. Thank you for listening!',
      ],
    },
    {
      kind: 'bullets',
      heading: 'The speech map',
      bullets: [
        { icon: '🚪', text: 'Opening: a question or a surprise' },
        { icon: '1️⃣', text: 'Point 1 + an example' },
        { icon: '2️⃣', text: 'Point 2 + an example' },
        { icon: '3️⃣', text: 'Point 3 + an example' },
        { icon: '🏁', text: 'Closing: “That is why… Thank you!”' },
      ],
      say: [
        'Riya used a speech map, just like our show and tell, but bigger.',
        'She opened with a question. Then she gave three points, each with an example.',
        'She used first, second and third, so we always knew where we were.',
        'She closed with, that is why, and thank you for listening.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Beat the butterflies',
      bullets: [
        { icon: '🌬️', text: 'Breathe in for 4, out for 4' },
        { icon: '😊', text: 'Smile — it relaxes your voice' },
        { icon: '🗺️', text: 'Forgot a line? Look at your map and carry on' },
        { icon: '👏', text: 'Everyone in the room wants you to do well' },
      ],
      say: [
        'Feeling nervous is normal. Even famous speakers get butterflies in their tummy.',
        'Breathe in slowly for four counts, and out for four counts. Then smile.',
        'If you forget a line, just look at your map, take a breath and carry on.',
        'Remember, everyone in the room wants you to do well.',
      ],
    },
  ],
  build: {
    title: 'Plan, practise, present',
    intro: 'Use the speech map on your capstone sheet. Your speech should be about one to two minutes long.',
    steps: [
      { title: 'Choose your topic', text: 'Pick one: My hero, A fun day I will never forget, Why I love cricket / dance / books, or your own idea (check with your teacher).' },
      { title: 'Write your opening', text: 'One question or surprise: Who is your hero? / Did you know…? / Imagine…' },
      { title: 'Three points with examples', text: 'For each point, write a key word and one example: kind — feeds stray dogs.', tip: 'Use first, second, third (or first, then, finally) to guide your listeners.' },
      { title: 'Write your closing', text: 'That is why ___. Thank you for listening!' },
      { title: 'Practise three times', text: 'Alone, in front of a mirror or camera, then for a partner. Time it: one to two minutes.' },
      { title: 'Present and give feedback', text: 'Deliver your speech, then give two stars and a wish to classmates.' },
    ],
  },
  acts: [
    {
      order: 'Put the speech map in order',
      steps: ['Opening: a question or surprise', 'Point 1 with an example', 'Point 2 with an example', 'Point 3 with an example', 'Closing: That is why… Thank you for listening!'],
      why: 'Open to grab attention, give three points with examples, then close clearly.',
      title: 'Order the speech map',
    },
    {
      sort: 'Point or example?',
      buckets: ['Main point', 'Example'],
      items: [
        ['Cricket keeps me fit.', 0],
        ['I run between the wickets twenty times in a match.', 1],
        ['Books take me to new places.', 0],
        ['Last week I read about a girl who sailed around the world.', 1],
        ['My grandmother is brave.', 0],
        ['She learned to ride a scooter at sixty.', 1],
      ],
      why: 'A main point is the big idea. An example proves it with something real, which makes your speech more interesting.',
    },
    {
      mcq: 'You are in the middle of your speech and you forget what comes next. What is the best thing to do?',
      options: ['Stop and say “I can’t do it.”', 'Take a breath, look at your speech map, and carry on.', 'Start the whole speech again from the beginning.', 'Talk very fast so no one notices.'],
      answer: 1,
      why: 'Every speaker forgets sometimes. A breath and a look at your map gets you back on track — the audience hardly notices.',
      title: 'Beat the butterflies',
    },
    {
      speak: 'Who is your hero? Mine is my grandmother. First, she is very kind. She feeds the stray dogs every morning. Second, she is brave. She learned to ride a scooter at sixty! Third, she tells the best stories. That is why she is my hero. Thank you for listening!',
      checklist: ['I opened with a question or surprise', 'I gave three points with examples', 'I used first, second, third or other order words', 'I used describing words and because', 'I paused between points and spoke clearly', 'I looked up and ended with a clear closing'],
      tips: 'Now deliver YOUR 1–2 minute speech from your speech map. Record your opening if you like, then give the whole speech to the class.',
      title: 'Speak: my first speech',
    },
    {
      projectAct: true,
      title: 'My first speech: speech map and reflection',
      brief: 'Write your speech map (topic, opening, three points with examples, closing). After you speak, reflect on how it went and the feedback you got.',
      requirements: ['A topic you care about', 'An opening question or surprise', 'Three main points, each with an example', 'Order words (first, second, third)', 'A clear closing with thank you'],
      reflection: 'How did you feel before and after your speech? What stars did you get? What is one thing you will do even better in your next speech?',
      tips: ['Key words, not full sentences', 'Practise three times', 'Breathe, smile, begin'],
      minWords: 50,
    },
    {
      mcq: 'Zoya’s speech was about why she loves dance. She had a great opening but only one point. Which feedback is most helpful?',
      options: ['Your speech was boring.', 'Your opening question made me want to listen! Next time, could you add two more reasons why you love dance?', 'Good.', 'You should choose cricket instead.'],
      answer: 1,
      why: 'A specific star and a clear, kind wish help the speaker improve. Vague or unkind comments do not.',
      phase: 'probe',
      title: 'New situation: feedback for Zoya',
    },
  ],
  teacher: {
    explain:
      'The capstone brings the whole course together: a structured introduction (L1), questions for the audience (L2), describing words (L3), talk structure (L4), clear sounds and pauses (L5), polite language (L6) and sequencing (L7). Learners choose a topic, build a speech map (opening, three points with examples, closing), practise three times and deliver a 1–2 minute speech. Spend real time on nerves: breathing, smiling and the “look at your map and carry on” rule. Assess with the rubric; peers give two stars and a wish. Celebrate every speaker — finishing is the win.',
    analogy: 'Giving a speech is like riding a bicycle for the first time: wobbly at the start, but with practice and someone cheering you on, you soon fly.',
    vocab: [
      ['speech', 'A talk you plan and give to an audience.'],
      ['topic', 'What your speech is about.'],
      ['speech map', 'Your plan: opening, three points, closing.'],
      ['main point', 'A big idea in your speech.'],
      ['example', 'Something real that shows your point is true.'],
      ['audience', 'The people listening to you.'],
    ],
    demo:
      '1) Give your own one-minute speech (e.g. “Why I love the monsoon”) using the speech map, holding up fingers for each point. 2) Show your speech map on screen — key words only. 3) Model the forget-and-recover: pretend to forget mid-speech, breathe, look at your map and carry on — then ask learners what you did. 4) Lead the 4-4 breathing together. 5) Model two stars and a wish on a learner’s practice opening.',
    unplugged:
      'Just-a-minute warm-up (5 min): learners pull a fun topic from a “hat” (mangoes, rainy days, my pet, superheroes) and speak for 20 seconds without stopping. The class claps after every speaker — the only rule is “keep going”. It shows everyone they can already talk longer than they think.',
    prompts: [
      ['What are the parts of our speech map?', 'Opening, three points with examples, closing.'],
      ['What is the difference between a point and an example?', 'A point is the big idea; an example proves it.'],
      ['What can you do if you feel nervous?', 'Breathe in and out for four, smile, remember the audience wants you to do well.'],
      ['What do you do if you forget a line?', 'Breathe, look at your map, carry on.'],
      ['What makes feedback helpful?', 'A specific star and a kind, clear wish.'],
    ],
    support: 'Offer a fill-in speech map with sentence starters for every line and a picture prompt for each point. A one-minute speech with two points is a great first goal.',
    stretch: 'Add a short story as one of the examples, use a question in the middle to involve the audience, and answer one audience question at the end.',
    mis: [
      ['Writing the whole speech and reading it word by word', 'Use key words on a speech map, so you can look up.'],
      ['Giving three points with no examples', 'Add one real example to each point — it makes it interesting.'],
      ['Thinking nervous means you are bad at speaking', 'Everyone feels nervous. Breathe, smile and begin.'],
      ['Stopping completely after a mistake', 'Carry on. Most listeners do not even notice small mistakes.'],
    ],
    plan: [
      { minutes: 4, stage: 'Warm-up game', doing: 'Just-a-minute: pull a fun topic from the hat and speak for 20 seconds without stopping; everyone claps.' },
      { minutes: 4, stage: 'Watch + teacher speech', doing: 'Play the video, then the teacher gives a live one-minute speech including a forget-and-recover moment.' },
      { minutes: 5, stage: 'Game time', doing: 'Order the speech map, point-or-example sort, then Beat the butterflies (poll) and 4-4 breathing together.' },
      { minutes: 7, stage: 'Plan (build-along)', doing: 'Learners choose a topic and fill their speech map; teacher checks openings in the chat.' },
      { minutes: 5, stage: 'Rehearse (breakout)', doing: 'Practise rounds 1 and 2 alone and to the camera; round 3 to a partner, who gives one star and one wish.' },
      { minutes: 16, stage: 'Speech showcase', doing: 'Every learner delivers a 1–2 minute speech. Teacher scores with the rubric; two classmates give two stars and a wish after each speech. Short class cheer between speakers.' },
      { minutes: 4, stage: 'Reflect + celebrate', doing: 'Learners write the speech reflection and answer the feedback-for-Zoya question. Award certificates of completion and announce Level 2.' },
    ],
    successCriteria: ['I can plan a speech with an opening, three points with examples and a closing.', 'I can practise and improve my speech.', 'I can deliver a 1–2 minute speech clearly and confidently.', 'I can give and use kind, specific feedback.'],
    homework: 'Give your speech to your family at home (a grown-up may record it on their phone to keep). Ask for two stars and a wish, and write one goal for Level 2.',
    exit: 'What is one thing you did in your speech today that you could not do at the start of this course?',
  },
  project: {
    title: 'My First Speech',
    brief: 'Plan, practise and deliver a 1–2 minute speech on a topic you love, using a speech map with an opening, three points with examples and a closing.',
    requirements: ['A topic you care about (my hero, a fun day, why I love…)', 'A speech map with key words', 'An opening question or surprise', 'Three main points, each with an example', 'Order words, describing words and because', 'A clear closing; 1–2 minutes; looking up at the audience'],
    milestones: ['Topic chosen and opening written', 'Speech map finished with three points and examples', 'Practised three times (alone, mirror or camera, partner)', 'Delivered to the class; feedback given and received'],
    rubric: [
      { criterion: 'Content & structure', levels: ['No clear topic or order', 'Topic clear; fewer than three points or no closing', 'Opening, three points with examples and a closing', 'Engaging opening, strong examples, memorable closing'] },
      { criterion: 'Language', levels: ['Single words or a list', 'Simple sentences; few describing or order words', 'Order words, describing words and because used well', 'Varied, vivid language; ideas linked smoothly'] },
      { criterion: 'Delivery', levels: ['Very quiet or reads every word with head down', 'Mostly heard; looks up sometimes', 'Clear, steady voice, pauses between points, looks up often', 'Confident and expressive; great pauses, stress and eye contact'] },
      { criterion: 'Feedback & reflection', levels: ['Did not give feedback or reflect', 'General feedback (“good”); short reflection', 'Specific star and kind wish; honest reflection', 'Thoughtful feedback; reflection sets a clear next goal'] },
    ],
    extensions: ['Answer one question from the audience after your speech', 'Give the same speech for a different audience (younger children or grandparents)', 'Add a short story as one of your examples'],
  },
  files: [
    {
      name: 'l08-capstone-sheet-my-first-speech.md',
      title: 'Capstone sheet: My First Speech',
      audience: 'student',
      content: `# My First Speech — Speech Map

## Choose a topic
☐ My hero ☐ A fun day I will never forget ☐ Why I love cricket ☐ Why I love dance ☐ Why I love books ☐ My own idea: ______________

(Talking about a family member as your hero? Use "my grandmother", "my uncle" — no full names or addresses needed. ${SAFE})

## Speech map (key words only!)
| Part | Frame | My key words |
|---|---|---|
| Opening | Who is your…? / Did you know…? / Imagine… | |
| Point 1 + example | First, ______. For example, ______. | |
| Point 2 + example | Second, ______. Once, ______. | |
| Point 3 + example | Third / Finally, ______. | |
| Closing | That is why ______. Thank you for listening! | |

## Word bank
- Order words: first · second · third · then · finally
- Describing: kind, brave, exciting, unforgettable, amazing, colourful, funny
- Reasons: because · so · for example · that is why

## Practise three times
☐ 1. Alone ☐ 2. Mirror or camera ☐ 3. For a partner or family member — Time: ____ min

## Beat the butterflies
Breathe in for 4, out for 4 · smile · stand tall · forgot? look at your map and carry on.

## Speaking checklist
- [ ] Opening question or surprise
- [ ] Three points with examples
- [ ] Order words (first, second, third)
- [ ] Describing words and because
- [ ] Paused between points, spoke clearly
- [ ] Looked up; clear closing

## Two stars and a wish
⭐ ____________________ ⭐ ____________________ 💭 ____________________

## Worked example: Why I love books (Arjun)
Opening: Did you know you can travel to space without leaving your bed? · Point 1: books take me to new places — last week, a jungle in Africa · Point 2: books make me laugh — a funny story about a talking cow · Point 3: books help me learn new words — "enormous" · Closing: That is why I love books. Thank you for listening!

## My goal for Level 2
______________________________________
`,
    },
    {
      name: 'l08-teacher-script.md',
      title: 'Teacher script: My First Speech capstone',
      audience: 'teacher',
      content: `# Teacher Script — Lesson 8: Capstone: My First Speech (45 min)

## Before class
Remind families: "Next class your child gives their first speech (1–2 minutes). Topics: my hero, a fun day, or why I love cricket / dance / books. Please listen to one practice at home."

## Warm-up: Just-a-minute (4 min)
Topics in the hat: mangoes · rainy days · my pet (real or dream) · superheroes · school holidays · ice cream. 20 seconds each, the only rule: keep going! Clap for every speaker.

## Teacher speech (with a planned forget)
"Have you ever danced in the rain? I love the monsoon! First, it smells wonderful... (pause, look lost) ...hmm (breathe, look at map) — yes! Second, I love hot pakoras and chai on rainy evenings. Third, the trees turn bright green. That is why I love the monsoon. Thank you for listening!"
Ask: "What did I do when I forgot?" (Breathed, looked at my map, carried on.)

## Breathing together
"Breathe in... 2... 3... 4. Out... 2... 3... 4. Now smile!"

## Showcase running order
Confident volunteers first. Gentle 2-minute limit. Nervous learner options: present sitting, present with camera on the speech map, or give opening + one point + closing. Every finish is a win.

## Feedback after each speech
Two named classmates: "I liked... because..." and "Next time, could you...?"

## Scoring
Rubric: Content & structure · Language · Delivery · Feedback & reflection. Write one sentence of praise per learner for the parent report and certificate.

## Close
"At the start of this course, many of you were shy to say your name. Today you gave a SPEECH. Next level: storytelling and presentations!"

## Exit ticket
"What is one thing you did in your speech today that you could not do at the start of this course?"
`,
    },
  ],
});
