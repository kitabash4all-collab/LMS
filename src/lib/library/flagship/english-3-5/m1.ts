// Confident English · Level 1 (Grades 3–6, Beginner) · Module 1 — Everyday English. Project: Show and tell.
import { lesson } from '../kit.ts';

export const SAFE = 'Share only your first name. Keep your surname, home address, phone number, school name and passwords private, in class and online.';
export const REC = 'Recording is optional. Your recording stays on your own device and is never uploaded.';

// ───────────────────────────────── Lesson 1 ─────────────────────────────────
export const E1 = lesson(1, {
  title: 'Introduce Yourself',
  objective: 'Greet people, introduce yourself with your first name, class and likes, use polite phrases, and give a 30-second self-introduction.',
  concept: 'Greetings and me',
  minutes: 45,
  hook: ['phrase', 'Good morning! My name is Riya, and I love painting.', ['morning', 'Riya', 'painting']],
  intro: 'Welcome, confident speakers! Today you will learn to introduce yourself in a clear, friendly way.',
  cards: [
    { emoji: '👋', title: 'Say hello first', body: 'Every good introduction starts with a greeting. Say good morning before twelve noon, and good afternoon after lunch. You can also say hello everyone, or hi.' },
    { emoji: '🙋', title: 'Tell us about you', body: 'Say your first name, your class and one or two things you like. For example, my name is Kabir and I am in Class 4. Keep your surname, address and phone number private.' },
    { emoji: '❤️', title: 'Add because', body: 'Do not just say what you like. Say why you like it with the word because. I love cricket because it is exciting.' },
    { emoji: '🙏', title: 'Magic polite words', body: 'Please, thank you, sorry and excuse me make people happy to talk to you. When you meet someone new, say nice to meet you. They will say nice to meet you too.' },
    { emoji: '⏱️', title: 'The 30-second shape', body: 'First greet everyone. Then say your name, your class and two likes with because. Finally, say thank you for listening.' },
  ],
  scenes: [
    {
      kind: 'card',
      heading: 'Listen: Aarav’s introduction',
      emoji: '🎤',
      body: 'Good morning, everyone! My name is Aarav. I am in Class 4. I love cricket because it is exciting. My favourite food is dosa because it is crispy. Thank you for listening!',
      say: [
        'Listen to Aarav. Good morning, everyone! My name is Aarav, and I am in Class 4.',
        'I love cricket because it is exciting. My favourite food is dosa because it is crispy.',
        'Thank you for listening! Did you notice how he started and how he finished?',
        'He began with a greeting and ended with thank you. That makes a talk sound complete.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Meeting someone new',
      bullets: [
        { icon: '🧒', text: 'Meera: Hi! I’m Meera. What’s your name?' },
        { icon: '👦', text: 'Kabir: Hello, Meera. I’m Kabir. Nice to meet you.' },
        { icon: '🧒', text: 'Meera: Nice to meet you too! Which class are you in?' },
        { icon: '👦', text: 'Kabir: I’m in Class 5. I like drawing. What about you?' },
        { icon: '🧒', text: 'Meera: I like dancing!' },
      ],
      say: [
        'Now listen to two friends meeting for the first time.',
        'Meera says, Hi! I am Meera. What is your name?',
        'Kabir answers, Hello, Meera. I am Kabir. Nice to meet you.',
        'Meera replies, Nice to meet you too! Which class are you in?',
        'See how they take turns? One person speaks, then asks a question back.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Speak like a star',
      bullets: [
        { icon: '🧍', text: 'Stand or sit up tall' },
        { icon: '👀', text: 'Look up at your listeners or the camera' },
        { icon: '😊', text: 'Smile when you greet' },
        { icon: '🐢', text: 'Speak slowly and loudly enough' },
      ],
      say: [
        'Here are four star tips for every time you speak.',
        'Sit up tall, look up at the camera, and smile when you say hello.',
        'Speak slowly and loudly enough, so even the person at the back can hear you.',
      ],
    },
  ],
  build: {
    title: 'My 30-second introduction card',
    intro: 'Fill in your own introduction on the practice sheet, then practise it three times. You keep this card and use it all course.',
    steps: [
      { title: 'Pick a greeting', text: 'Write the greeting that fits the time of your class: Good morning, Good afternoon or Hello everyone.' },
      { title: 'Name and class', text: 'Write: My name is ___. I am in Class ___. Use only your first name.' },
      { title: 'Two likes with because', text: 'Write two things you like and why: I love ___ because ___. My favourite ___ is ___ because ___.', tip: 'Pick things you can talk about happily — a game, a food, a hobby, a festival.' },
      { title: 'A polite ending', text: 'Finish with: Thank you for listening! or Nice to meet you all!' },
      { title: 'Practise three ways', text: 'Say it in a whisper, then in your normal voice, then in a big confident voice. Look up from the card more each time.' },
      { title: 'Time it', text: 'Ask a family member to time you. Aim for about 30 seconds — not too fast!' },
    ],
  },
  acts: [
    {
      match: 'Match each greeting or polite phrase to when you use it',
      pairs: [
        ['Good morning', 'Before twelve noon'],
        ['Good afternoon', 'After lunch, before evening'],
        ['Good night', 'When you go to bed'],
        ['Nice to meet you', 'When you meet someone new'],
        ['Excuse me', 'When you want someone’s attention politely'],
      ],
      why: 'Greetings change with the time of day. Polite phrases fit special moments, like meeting someone new.',
    },
    {
      sort: 'Share in a class introduction, or keep private?',
      buckets: ['OK to share', 'Keep private'],
      items: [
        ['Your first name', 0],
        ['Your favourite sport', 0],
        ['Your class (like Class 4)', 0],
        ['Your home address', 1],
        ['Your phone number', 1],
        ['Your favourite food', 0],
        ['Your password', 1],
        ['Your full name and surname', 1],
      ],
      why: 'First name, class and likes are safe and fun to share. Address, phone, surname and passwords stay private — in class and online.',
    },
    {
      blanks: 'Good morning! My name [[1]] Zoya. I [[2]] in Class 5. I love dancing [[3]] it makes me happy. Thank you for [[4]]!',
      answers: [['is'], ['am'], ['because'], ['listening']],
      bank: ['is', 'am', 'are', 'because', 'but', 'listening', 'listen'],
      why: 'We say my name is and I am. Because gives the reason. Thank you for listening is a polite ending.',
      title: 'Complete Zoya’s introduction',
    },
    {
      speak: 'Good morning, everyone! My name is Aarav. I am in Class 4. I love cricket because it is exciting. My favourite food is dosa because it is crispy. Thank you for listening!',
      checklist: ['I greeted everyone', 'I said my first name clearly', 'I said my class', 'I shared two likes with because', 'I looked up and smiled', 'I ended with thank you'],
      tips: 'Listen to the model, then say it with YOUR name, class and likes. First name only!',
      title: 'Speak: my 30-second introduction',
    },
    {
      mcq: 'It is your first day at a summer art camp. A girl smiles and says, “Hi, I’m Riya. Nice to meet you!” What is the best reply?',
      options: ['Nice to meet you too! I’m Arjun. I love drawing animals.', 'Okay.', 'My name is Arjun and my house is at 12 Park Road.', 'Why are you talking to me?'],
      answer: 0,
      why: 'Reply with “nice to meet you too”, say your first name, and share something friendly. Never share your address.',
      wrong: { 1: 'Too short — it can sound unfriendly. Add your name.', 2: 'Never share your address with someone new.', 3: 'That sounds rude. Be friendly and polite.' },
      phase: 'probe',
      title: 'New situation: first day at camp',
    },
    {
      write: 'You are joining a new online chess club. Write 3–4 sentences to introduce yourself to the club. Use a greeting, your first name, one thing you like with “because”, and a polite ending.',
      keywords: ['hello', 'name', 'because', 'thank'],
      exemplar: 'Hello everyone! My name is Meera and I am in Class 4. I like chess because I enjoy planning my moves. Thank you, and nice to meet you all!',
      starters: ['Hello everyone! My name is…', 'I like chess because…', 'Thank you…'],
      minWords: 20,
      phase: 'probe',
      title: 'New situation: the chess club',
    },
  ],
  teacher: {
    explain:
      'Today learners build a short, safe, structured self-introduction: greeting, first name, class, two likes with “because”, and a polite closing. The structure matters more than fancy words — it gives nervous children something to hold on to. Model it yourself first with your own first name and likes. Set the privacy rule early: first names only, never addresses, phone numbers or surnames. Praise effort and clear voices, not perfect grammar.',
    analogy: 'An introduction is like a sandwich: the greeting and the thank you are the bread, and your name and likes are the tasty filling.',
    vocab: [
      ['greeting', 'Words you say when you meet someone, like “good morning”.'],
      ['introduce', 'Tell people who you are.'],
      ['favourite', 'The one you like the most.'],
      ['because', 'A word that tells the reason.'],
      ['polite', 'Kind and respectful in the way you speak.'],
      ['private', 'Something you keep to yourself, like your address.'],
    ],
    demo:
      '1) Say your own 30-second introduction with big energy, holding up five fingers and folding one for each part (greet, name, class or job, likes with because, thank you). 2) Say it again badly: mumble, look down, no greeting, and ask learners to spot three problems. 3) Write the five-part frame on the shared whiteboard. 4) Role-play “Meeting someone new” with one confident learner: you say “Hi, I’m ___. Nice to meet you.” and they reply. 5) Point out turn-taking: answer, then ask one question back.',
    unplugged:
      'Name-and-action circle (5 min): each learner says “Hello, I’m ___ and I like ___” and does an action for the like (bowling a cricket ball, dancing, eating). Everyone repeats the name and copies the action. Then go round again faster — can the class remember everyone’s name and action?',
    prompts: [
      ['What are the five parts of our introduction?', 'Greeting, first name, class, likes with because, thank you.'],
      ['Which greeting do we use at 10 o’clock in the morning?', 'Good morning.'],
      ['What do you say when someone says “Nice to meet you”?', 'Nice to meet you too.'],
      ['Why do we add “because”?', 'It tells people the reason and makes the sentence longer and more interesting.'],
      ['Name two things we never share in an introduction.', 'Any of: address, phone number, surname, password, school address.'],
    ],
    support: 'Give the five-part frame with picture icons and let learners fill only the gaps. Allow them to read from the card the first time, then look up for the last sentence.',
    stretch: 'Add a third like and a question for the listeners at the end: “What do you like doing?” Try the introduction without the card.',
    mis: [
      ['“Myself Aarav.”', 'Say “My name is Aarav” or “I am Aarav.” “Myself” is not used this way in English.'],
      ['“I am having a sister.”', 'Say “I have a sister.” We do not use “having” for things we own or family.'],
      ['Speaking very fast to finish quickly', 'Slow down and pause after each sentence. Slow sounds confident.'],
      ['Sharing the full address to sound friendly', 'Friendly people share likes, not addresses. First name only.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Name-and-action circle: “Hello, I’m ___ and I like ___” with an action; everyone repeats. Second round faster.' },
      { minutes: 5, stage: 'Watch + thumbs check', doing: 'Play the video. Thumbs up or down: “It is OK to tell a new friend your home address.” (Down.)' },
      { minutes: 5, stage: 'Teacher model + spot the problems', doing: 'Teacher gives a great introduction, then a mumbled one. Learners call out three problems; write the five-part frame on screen.' },
      { minutes: 6, stage: 'Build-along', doing: 'Learners fill their 30-second introduction card on the practice sheet (greeting, name, class, two likes with because, ending).' },
      { minutes: 7, stage: 'Game time', doing: 'Greetings match, then the “share or keep private” sort as a quick competition — first three with all correct win a shout-out. Then Complete Zoya’s introduction.' },
      { minutes: 6, stage: 'Pair practice (breakout)', doing: 'Pairs practise the introduction three ways: whisper, normal, big voice. Partner ticks the speaking checklist and times it.' },
      { minutes: 7, stage: 'Show-and-tell: speaking round', doing: 'Every learner gives their 30-second introduction on camera. The class claps and the teacher names one star from the checklist for each speaker.' },
      { minutes: 4, stage: 'Probe + exit ticket', doing: 'New situation: first day at camp (poll), then the chess club write task. Exit ticket in the chat.' },
    ],
    successCriteria: ['I can greet people for the time of day.', 'I can introduce myself with my first name, class and likes.', 'I can use because to give a reason.', 'I can use polite words and keep private things private.'],
    homework: 'Give your 30-second introduction to two family members. Ask each one for one star (something good). Write the stars on your practice sheet.',
    exit: 'Write one sentence about something you like, using “because”.',
  },
  files: [
    {
      name: 'l01-practice-sheet-introduce-yourself.md',
      title: 'Practice sheet: my 30-second introduction',
      audience: 'student',
      content: `# My 30-Second Introduction

## Safety first
${SAFE}

## Sentence frames
1. Greeting: **Good morning / Good afternoon / Hello, everyone!**
2. Name: **My name is ________.** (first name only)
3. Class: **I am in Class ____.**
4. Like 1: **I love ________ because ________.**
5. Like 2: **My favourite ________ is ________ because ________.**
6. Ending: **Thank you for listening! / Nice to meet you all!**

## Word bank
| Things I like | Because it is… |
|---|---|
| cricket, football, badminton, chess | exciting, fun, fast |
| dancing, singing, drawing, reading | relaxing, creative, happy |
| dosa, biryani, mangoes, pani puri | tasty, crispy, sweet, spicy |
| Diwali, Holi, Eid, Christmas, Pongal | colourful, bright, joyful |

## Polite phrases
please · thank you · sorry · excuse me · nice to meet you · nice to meet you too

## Speaking checklist (tick when you can do it)
- [ ] I greeted everyone
- [ ] I said my first name clearly
- [ ] I said my class
- [ ] I shared two likes with **because**
- [ ] I looked up and smiled
- [ ] I ended with thank you

## Practise three ways
Whisper ☐ · Normal voice ☐ · Big confident voice ☐ · Time: ____ seconds

## Worked example
Good afternoon, everyone! My name is Zoya. I am in Class 5. I love dancing because it makes me happy. My favourite festival is Holi because it is so colourful. Thank you for listening!

## Stars from my family
Star 1: ______________________ Star 2: ______________________
`,
    },
    {
      name: 'l01-teacher-script.md',
      title: 'Teacher script: Introduce Yourself',
      audience: 'teacher',
      content: `# Teacher Script — Lesson 1: Introduce Yourself (45 min)

## Warm-up: Name-and-action circle (5 min)
Say: "Let's meet everyone! Say: Hello, I'm ___ and I like ___ — and do an action for your like." Go first: "Hello, I'm [your first name] and I like swimming" (swimming arms). Everyone repeats your name and copies the action. Round two: faster!

## Model (say this exactly, with energy)
"Good morning, everyone! My name is ___. I am your English teacher. I love reading because it takes me to new places. My favourite food is idli because it is soft. Thank you for listening!"
Fold one finger per part: greet · name · class/job · likes with because · thank you.

## Spot the problems
Now mumble, look down, skip the greeting, speak very fast: "uh... Aarav... Class 4... cricket." Ask: "What three things can I do better?" (Greet, look up, slow down, add because.)

## Privacy line (say it every lesson)
"In our class we share our first name and things we like. We never share our address, phone number, surname or passwords."

## Common fixes to say kindly
- "Myself Aarav" → "My name is Aarav."
- "I am having a brother" → "I have a brother."
- Too fast → "Lovely! Now say it like a slow, proud elephant."

## Speaking round
Call learners one by one. After each, name one checklist star: "Great greeting!" "I loved your because!" Never correct grammar in front of everyone during the round — note it and share a group tip at the end.

## Exit ticket
"Write one sentence about something you like, using because."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 2 ─────────────────────────────────
export const E2 = lesson(2, {
  title: 'Ask and Answer',
  objective: 'Ask questions with what, where, when, who, why and how, give short answers, add a follow-up question, and interview a partner.',
  concept: 'Question words',
  minutes: 45,
  hook: ['phrase', 'What is your favourite game? Why do you like it?', ['What', 'Why']],
  intro: 'Today you become a reporter! You will learn to ask great questions and give clear answers.',
  cards: [
    { emoji: '❓', title: 'Six question words', body: 'What asks about a thing. Where asks about a place, and when asks about a time. Who asks about a person, why asks for a reason, and how asks about the way.' },
    { emoji: '🔄', title: 'Question word first', body: 'Put the question word at the start. Then add do or does, or is or are. What do you like? Where is the ball?' },
    { emoji: '💬', title: 'Short answers', body: 'You do not always need a long answer. To do you like mangoes, say yes, I do, or no, I don’t. To what is your favourite colour, just say blue, or my favourite colour is blue.' },
    { emoji: '➕', title: 'Ask one more', body: 'A follow-up question keeps a chat going. If your friend says I like cricket, ask why do you like it, or who is your favourite player? It shows you are really listening.' },
  ],
  scenes: [
    {
      kind: 'bullets',
      heading: 'Listen: a mini interview',
      bullets: [
        { icon: '🎙️', text: 'Riya: What is your favourite game?' },
        { icon: '🏏', text: 'Arjun: Cricket!' },
        { icon: '🎙️', text: 'Riya: Why do you like it?' },
        { icon: '🏏', text: 'Arjun: Because I love batting.' },
        { icon: '🎙️', text: 'Riya: When do you play?' },
        { icon: '🏏', text: 'Arjun: Every evening, in the park.' },
      ],
      say: [
        'Listen to Riya interview her friend Arjun.',
        'Riya asks, What is your favourite game? Arjun says, Cricket!',
        'Riya asks a follow-up question. Why do you like it? Because I love batting.',
        'Then she asks, When do you play? Arjun says, every evening, in the park.',
        'Riya used three different question words. Can you name them? What, why and when.',
      ],
    },
    {
      kind: 'card',
      heading: 'Yes or no, or tell me more?',
      emoji: '🔍',
      body: 'Do you like mangoes? → Yes, I do.\nWhat fruit do you like? → I like mangoes because they are sweet.',
      say: [
        'Some questions only need a yes or a no. Do you like mangoes? Yes, I do.',
        'Questions with what, why and how ask you to tell more.',
        'Good reporters ask tell me more questions, because the answers are more interesting.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Reporter manners',
      bullets: [
        { icon: '👂', text: 'Listen to the whole answer' },
        { icon: '➕', text: 'Ask one follow-up question' },
        { icon: '😊', text: 'Nod and say “Oh, nice!” or “Really?”' },
        { icon: '🙏', text: 'End with “Thank you for talking to me!”' },
      ],
      say: [
        'A great reporter listens to the whole answer before speaking again.',
        'Nod and say oh, nice, or really, to show you are interested.',
        'At the end, always say thank you for talking to me.',
      ],
    },
  ],
  build: {
    title: 'My reporter question card',
    intro: 'Write five interview questions on your practice sheet. You will use them to interview a partner at the end of class.',
    steps: [
      { title: 'Start with What', text: 'Write: What is your favourite ___? (game, food, festival, animal)' },
      { title: 'Add Why', text: 'Write a follow-up: Why do you like it?' },
      { title: 'Add When or Where', text: 'Write: When do you ___? or Where do you ___?' },
      { title: 'Add Who or How', text: 'Write: Who is your favourite ___? or How do you ___?', tip: 'Never ask for addresses, phone numbers or surnames — ask about likes and hobbies.' },
      { title: 'Plan your ending', text: 'Write: Thank you for talking to me!' },
    ],
  },
  acts: [
    {
      match: 'Match each question word to what it asks about',
      pairs: [
        ['What', 'A thing'],
        ['Where', 'A place'],
        ['When', 'A time'],
        ['Who', 'A person'],
        ['Why', 'A reason'],
        ['How', 'The way something is done'],
      ],
      why: 'Each question word asks for a different kind of answer. Choose the word that matches what you want to know.',
    },
    {
      blanks: '[[1]] is your favourite festival? [[2]] do you celebrate it? At home with my family. [[3]] do you like it? Because of the lights! [[4]] is it? In October or November.',
      answers: [['What'], ['Where'], ['Why'], ['When']],
      bank: ['What', 'Where', 'Why', 'When', 'Who'],
      why: 'Look at each answer: a place needs where, a reason needs why, a time needs when.',
      title: 'Find the question word',
    },
    {
      sort: 'Yes/no question or tell-me-more question?',
      buckets: ['Yes/no question', 'Tell-me-more question'],
      items: [
        ['Do you like mangoes?', 0],
        ['What is your favourite fruit?', 1],
        ['Is your cat black?', 0],
        ['Why do you like drawing?', 1],
        ['Can you swim?', 0],
        ['How do you make a paper boat?', 1],
        ['Are you in Class 4?', 0],
        ['Where do you play football?', 1],
      ],
      why: 'Questions starting with do, is, can or are usually get yes or no. Question words like what, why and how get longer, more interesting answers.',
    },
    {
      speak: 'What is your favourite hobby? Why do you like it? When do you do it? Thank you for talking to me!',
      checklist: ['I asked at least three questions', 'I used three different question words', 'I asked one follow-up question', 'I listened and nodded', 'I said thank you at the end'],
      tips: 'Role play with a partner: you are the reporter, then swap. Answer in full sentences when it is your turn.',
      title: 'Speak: interview a partner',
    },
    {
      mcq: 'Your friend says, “I went to the zoo on Sunday.” Which is the best follow-up question?',
      options: ['What was your favourite animal?', 'Do you like the zoo?', 'I went to the market.', 'Zoo?'],
      answer: 0,
      why: 'A good follow-up asks for more about what they just said, with a tell-me-more question word.',
      wrong: { 1: 'They already went — ask something that gets a longer answer.', 2: 'That changes the topic to you. Ask about them first.', 3: 'One word is not a full question.' },
      phase: 'probe',
      title: 'New situation: the zoo trip',
    },
    {
      write: 'A new pet shop has opened near your home. Write four questions to ask the shopkeeper, using four different question words (what, where, when, who, why or how).',
      keywords: ['what', 'where', 'when', 'how', 'why', 'who'],
      exemplar: 'What animals do you have? Where do the puppies sleep? When do the fish eat? How do I look after a rabbit?',
      starters: ['What…?', 'How…?', 'When…?'],
      minWords: 16,
      phase: 'probe',
      title: 'New situation: the pet shop',
    },
  ],
  teacher: {
    explain:
      'Learners meet the six “wh” question words and the yes/no question pattern. The key idea: the question word goes first, and it tells the listener what kind of answer you want (a thing, place, time, person, reason or way). Then teach the follow-up question, which turns a quiz into a real conversation. Keep all interview questions about likes and hobbies — never personal details.',
    analogy: 'Question words are like keys: each one opens a different door — where opens the place door, when opens the time door, why opens the reason door.',
    vocab: [
      ['question word', 'A word that starts a question: what, where, when, who, why, how.'],
      ['answer', 'What you say back when someone asks a question.'],
      ['follow-up question', 'A new question about the answer you just heard.'],
      ['interview', 'Asking someone questions to find out about them.'],
      ['reporter', 'A person who asks questions and shares the news.'],
    ],
    demo:
      '1) Hold up six question-word cards on screen. Ask a quick question with each about yourself (“Where do I drink my chai? In the garden!”). 2) Interview a volunteer learner live: What is your favourite game? Why? When do you play? Pause after each answer and ask the class: “Was that a yes/no question or a tell-me-more question?” 3) Show the difference: “Do you like cricket?” (Yes.) vs “Why do you like cricket?” (A real answer.) 4) Model reporter manners: nod, say “Oh, nice!”, end with thank you.',
    unplugged:
      'Question-word ball (5 min): the teacher “throws” an imaginary ball and calls a question word. The catcher must ask any question starting with that word (“Who is your favourite superhero?”) and throw it on. If you repeat someone’s question, you do a silly dance!',
    prompts: [
      ['Which question word asks about a place?', 'Where.'],
      ['What kind of answer does “why” want?', 'A reason, often with “because”.'],
      ['Make this a tell-me-more question: “Do you like dancing?”', 'Why do you like dancing? / What kind of dancing do you like?'],
      ['What is a follow-up question?', 'A question about the answer you just heard.'],
      ['How do we end an interview?', 'Thank you for talking to me!'],
    ],
    support: 'Give a question-word strip with pictures (box = what, map pin = where, clock = when, face = who, thought bubble = why, gear = how). Let learners pick two questions from a ready-made list.',
    stretch: 'Ask two follow-up questions in a row, and report back to the class: “Arjun likes cricket because he loves batting. He plays every evening.”',
    mis: [
      ['“Where you live?” (missing do)', 'Add do or does: “Where do you play?” Remember to ask about play, not where someone lives.'],
      ['“Why you like it?”', 'Why do you like it?'],
      ['Answering “Because” alone', 'Give the reason: “Because it is exciting.”'],
      ['Asking a new question before listening to the answer', 'Listen to the whole answer, then ask a follow-up about it.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Question-word ball: catch the imaginary ball, ask a question starting with the called word, throw it on.' },
      { minutes: 5, stage: 'Watch + poll', doing: 'Play the video. Poll: “Which question word asks about a time?” (When.)' },
      { minutes: 5, stage: 'Live interview demo', doing: 'Teacher interviews a volunteer. Class calls out “yes/no” or “tell-me-more” after each question.' },
      { minutes: 5, stage: 'Build-along', doing: 'Learners write five reporter questions on the practice sheet using the frames.' },
      { minutes: 8, stage: 'Game time', doing: 'Question-word match, then Find the question word, then the yes/no sort as a race — fastest correct finisher picks the next warm-up word.' },
      { minutes: 8, stage: 'Breakout role play', doing: 'Pairs interview each other with their question cards (reporter and guest, then swap). Partner ticks the speak checklist.' },
      { minutes: 5, stage: 'Show-and-tell: reporters report', doing: 'Three or four reporters tell the class one thing they found out about their partner: “Zoya likes… because…”' },
      { minutes: 4, stage: 'Probe + exit ticket', doing: 'The zoo trip question (thumbs vote), then the pet shop questions. Exit ticket in the chat.' },
    ],
    successCriteria: ['I can use what, where, when, who, why and how.', 'I can give a short answer and a full answer.', 'I can ask a follow-up question.', 'I can interview a partner politely.'],
    homework: 'Interview a family member with your five reporter questions. Write down two of their answers and tell the class next time.',
    exit: 'Write a follow-up question for this answer: “My favourite animal is the elephant.”',
  },
  files: [
    {
      name: 'l02-practice-sheet-ask-and-answer.md',
      title: 'Practice sheet: reporter question card',
      audience: 'student',
      content: `# Reporter Question Card

## The six question words
| Word | Asks about | Example |
|---|---|---|
| What | a thing | What is your favourite game? |
| Where | a place | Where do you play? |
| When | a time | When do you practise? |
| Who | a person | Who is your favourite player? |
| Why | a reason | Why do you like it? |
| How | the way | How do you make a paper boat? |

## Sentence frames for answers
- Short: **Yes, I do. / No, I don't. / Cricket! / On Sunday.**
- Full: **My favourite ___ is ___ because ___.**
- Time: **I ___ every evening / on Saturdays / after school.**

## My five questions
1. What ______________________________?
2. Why ______________________________?
3. When / Where ______________________?
4. Who / How _________________________?
5. Ending: Thank you for talking to me!

## Reporter manners
Listen to the whole answer · nod · say "Oh, nice!" or "Really?" · ask one follow-up · say thank you.

## Safe questions only
Ask about likes, hobbies, food, festivals and games. ${SAFE}

## Speaking checklist
- [ ] I asked at least three questions
- [ ] I used three different question words
- [ ] I asked one follow-up question
- [ ] I listened and nodded
- [ ] I said thank you at the end

## What I found out
My partner likes __________ because __________.
`,
    },
    {
      name: 'l02-teacher-script.md',
      title: 'Teacher script: Ask and Answer',
      audience: 'teacher',
      content: `# Teacher Script — Lesson 2: Ask and Answer (45 min)

## Warm-up: Question-word ball (5 min)
"I'm throwing the question ball to Kabir... WHERE!" Kabir asks any where-question ("Where do you buy ice cream?"), then throws it on and calls a new word. Repeat a question? Silly dance!

## Teach the six keys
Show the six cards. For each, ask a question about yourself and answer it:
- What is my favourite fruit? Mango!
- Where do I drink chai? On my balcony.
- When do I wake up? At six o'clock.
- Who is my favourite singer? (any)
- Why do I like rain? Because it smells lovely.
- How do I get to work? By bus.

## Live interview
Choose a confident volunteer. Ask: What is your favourite game? → Why do you like it? → When do you play? After each, ask the class: "Yes/no or tell-me-more?"

## Fixes to model
- "Why you like it?" → "Why DO you like it?" (tap the table on DO)
- "Because." → "Because...? Give me the reason!"

## Breakout instructions (say before sending)
"Reporter asks at least three questions with different question words and one follow-up. Guest answers in full sentences. Then swap. Ask only about likes and hobbies — no addresses or phone numbers."

## Show-and-tell
Each reporter shares one fact: "Meera likes painting because it is relaxing."

## Exit ticket
Follow-up question for: "My favourite animal is the elephant." (e.g. "Why do you like elephants?")
`,
    },
  ],
});

// ───────────────────────────────── Lesson 3 ─────────────────────────────────
export const E3 = lesson(3, {
  title: 'Describe It!',
  objective: 'Use describing words for colour, size, shape, sound and feeling to describe a picture, a person or a place in five sentences.',
  concept: 'Describing words',
  minutes: 45,
  hook: ['upgrade', 'There is a market.', 'There is a busy, colourful market full of happy people and sweet smells.'],
  intro: 'Today you will learn to paint pictures with words, so your listener can see what you see.',
  cards: [
    { emoji: '🎨', title: 'Describing words', body: 'Describing words, called adjectives, tell us more about a thing. A big red kite. A tiny noisy puppy. They make your sentences come alive.' },
    { emoji: '👀', title: 'Use your senses', body: 'Think about what you can see, hear, smell, taste and feel. The market is noisy. The jalebis smell sweet. The air feels hot.' },
    { emoji: '🧭', title: 'Where is it?', body: 'Use place words to guide your listener. In the middle, on the left, on the right, at the back, next to. In the middle there is a tall Diwali lamp.' },
    { emoji: '✋', title: 'Five-sentence picture talk', body: 'First say what the picture shows. Then give three details with describing words. Finally, say how it makes you feel.' },
  ],
  scenes: [
    {
      kind: 'card',
      heading: 'Listen: Meera describes a Diwali picture',
      emoji: '🪔',
      body: 'This picture shows a family celebrating Diwali.\nIn the middle, there are bright, golden diyas.\nOn the left, a little girl is drawing a colourful rangoli.\nAt the back, I can see sparkly lights on the house.\nThis picture makes me feel happy and excited.',
      say: [
        'Listen to Meera describe a Diwali picture in five sentences.',
        'This picture shows a family celebrating Diwali. In the middle, there are bright, golden diyas.',
        'On the left, a little girl is drawing a colourful rangoli.',
        'At the back, I can see sparkly lights on the house. This picture makes me feel happy and excited.',
        'She used place words like in the middle and on the left, and lots of describing words.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Before and after',
      bullets: [
        { icon: '😐', text: 'Before: “There is a dog.”' },
        { icon: '🤩', text: 'After: “There is a small, fluffy, brown dog.”' },
        { icon: '😐', text: 'Before: “The park is nice.”' },
        { icon: '🤩', text: 'After: “The park is green, peaceful and full of tall trees.”' },
      ],
      say: [
        'Listen to the difference describing words make.',
        'Before. There is a dog. After. There is a small, fluffy, brown dog.',
        'Before. The park is nice. After. The park is green, peaceful and full of tall trees.',
        'Nice is a tired word. Try to choose a word that paints a clearer picture.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'My favourite place',
      bullets: [
        { icon: '🏖️', text: 'My favourite place is my grandmother’s garden.' },
        { icon: '🌳', text: 'It has tall mango trees and pink flowers.' },
        { icon: '🐦', text: 'I can hear birds singing in the morning.' },
        { icon: '😌', text: 'It feels calm and cool. I love it there!' },
      ],
      say: [
        'You can describe places too. My favourite place is my grandmother’s garden.',
        'It has tall mango trees and pink flowers. I can hear birds singing in the morning.',
        'It feels calm and cool. I love it there.',
      ],
    },
  ],
  build: {
    title: 'My five-sentence picture talk',
    intro: 'Choose one of the three pictures on your practice sheet (a monsoon street, a cricket match, a fruit market). Plan five sentences, then say them aloud.',
    steps: [
      { title: 'Pick a picture', text: 'Choose the picture you have the most to say about.' },
      { title: 'Collect describing words', text: 'Write six describing words you could use: two for colours, two for size or shape, two for sounds or feelings.' },
      { title: 'Sentence 1: what it shows', text: 'Write: This picture shows ___.' },
      { title: 'Sentences 2 to 4: three details', text: 'Use a place word and a describing word in each: In the middle / On the left / At the back, there is a ___ ___.', tip: 'Try two describing words together: a tall, green tree.' },
      { title: 'Sentence 5: your feeling', text: 'Write: This picture makes me feel ___ because ___.' },
    ],
  },
  acts: [
    {
      sort: 'Sort the describing words',
      buckets: ['Colour', 'Size or shape', 'Sound', 'Feeling'],
      items: [
        ['golden', 0],
        ['purple', 0],
        ['tiny', 1],
        ['round', 1],
        ['enormous', 1],
        ['noisy', 2],
        ['quiet', 2],
        ['excited', 3],
        ['calm', 3],
        ['scared', 3],
      ],
      why: 'Using words from different groups makes a description rich: what it looks like, sounds like and how it makes you feel.',
    },
    {
      match: 'Match the opposites',
      pairs: [
        ['big', 'small'],
        ['noisy', 'quiet'],
        ['hot', 'cold'],
        ['bright', 'dark'],
        ['crowded', 'empty'],
      ],
      why: 'Knowing opposites helps you compare: the morning market is crowded, but at night it is empty.',
    },
    {
      blanks: 'This picture shows a [[1]] cricket match. In the [[2]], a boy is hitting the ball. On the [[3]], the crowd is cheering loudly. The sky is [[4]] and sunny. It makes me feel [[5]]!',
      answers: [['busy', 'exciting'], ['middle'], ['left', 'right'], ['blue'], ['excited', 'happy']],
      bank: ['busy', 'middle', 'left', 'blue', 'excited', 'under'],
      why: 'Place words (middle, left) guide the listener; describing words (busy, blue, excited) paint the picture.',
      title: 'Fill the picture talk',
    },
    {
      speak: 'This picture shows a fruit market. In the middle, there are big, yellow mangoes. On the left, a man is selling juicy watermelons. The market is noisy and crowded. This picture makes me feel hungry!',
      checklist: ['I said five sentences', 'I used at least three describing words', 'I used a place word (middle, left, right, back)', 'I said how it makes me feel', 'I spoke slowly and looked up'],
      tips: 'Now describe YOUR chosen picture from the practice sheet in five sentences.',
      title: 'Speak: describe a picture in 5 sentences',
    },
    {
      mcq: 'Which sentence paints the clearest picture of a monsoon day?',
      options: ['The weather is nice.', 'Dark grey clouds fill the sky, and heavy rain splashes on the street.', 'It is a day.', 'Rain rain rain.'],
      answer: 1,
      why: 'It uses describing words (dark, grey, heavy) and an action, so the listener can see and hear it.',
      phase: 'probe',
      title: 'Spot the best description',
    },
    {
      speak: 'My favourite place is the beach. The sand is soft and warm. The waves are big and noisy. I can smell salty air. I feel free and happy there!',
      checklist: ['I named my favourite place', 'I used at least three describing words', 'I used a sense word (see, hear, smell, feel)', 'I said how I feel there', 'I did not share my address'],
      tips: 'New situation: describe YOUR favourite place (a park, a room, a relative’s village) — no addresses, just how it looks, sounds and feels.',
      phase: 'probe',
      title: 'Probe: my favourite place',
    },
  ],
  teacher: {
    explain:
      'Learners learn that adjectives (“describing words”) tell us more about a noun, and that the five senses are a great source of them. Teach the five-sentence picture talk: what it shows, three details with place words, and a feeling. Show before-and-after sentences so they hear the difference. Encourage replacing “nice” and “good” with clearer words.',
    analogy: 'Describing words are like crayons: “There is a dog” is a pencil outline, and every describing word adds a new colour.',
    vocab: [
      ['adjective (describing word)', 'A word that tells more about a thing, like big, red or noisy.'],
      ['senses', 'Seeing, hearing, smelling, tasting and touching.'],
      ['detail', 'A small piece of information that makes a picture clear.'],
      ['opposite', 'A word that means the reverse, like hot and cold.'],
      ['in the middle', 'In the centre of the picture.'],
    ],
    demo:
      '1) Show a busy market picture (or any festival picture you have rights to use) on screen. 2) Say a flat description: “There is a market. It is nice.” Ask: “Can you see it in your head?” 3) Build it up live, adding one describing word at a time while learners suggest words: busy, colourful, noisy. 4) Point to the middle, left and back of the picture as you say place words. 5) Give your full five-sentence talk, counting on your fingers.',
    unplugged:
      'Mystery bag (5 min): the teacher hides an object (a ball, a spoon, a toy) and describes it with three describing words only — “It is round, smooth and orange.” Learners guess. Then volunteers pick something from their room and describe it for the class to guess.',
    prompts: [
      ['What is a describing word?', 'A word that tells more about a thing, like big or noisy.'],
      ['Give a describing word for how a jalebi tastes.', 'Sweet, sticky, crispy.'],
      ['What is the opposite of crowded?', 'Empty.'],
      ['What are the five parts of our picture talk?', 'What it shows, three details, how it makes me feel.'],
      ['Make this better: “The flower is nice.”', 'e.g. The flower is pink, soft and sweet-smelling.'],
    ],
    support: 'Give a describing-word mat with pictures and colours, and let learners point to the picture while they speak. Three sentences is a fine first goal.',
    stretch: 'Use two describing words together (“a tall, green tree”) and a comparison (“as bright as the sun”).',
    mis: [
      ['Putting the describing word after the noun: “a ball red”', 'Describing word first: “a red ball”.'],
      ['Using “very very very nice” for everything', 'Choose a sharper word: beautiful, exciting, delicious.'],
      ['Listing things without details: “tree, house, dog”', 'Make full sentences: “There is a tall tree next to the house.”'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Mystery bag: teacher describes a hidden object with three describing words; learners guess, then volunteers try with objects from their room.' },
      { minutes: 5, stage: 'Watch + thumbs check', doing: 'Play the video. Thumbs up or down: “Nice is the best describing word.” (Down — choose sharper words.)' },
      { minutes: 5, stage: 'Live upgrade demo', doing: 'Teacher builds a flat sentence into a rich one, one word at a time, with learners shouting describing words.' },
      { minutes: 6, stage: 'Build-along', doing: 'Learners choose a picture on the practice sheet and plan their five sentences.' },
      { minutes: 8, stage: 'Game time', doing: 'Describing-word sort race, opposites match, then Fill the picture talk. Poll: which group (colour, size, sound, feeling) was hardest?' },
      { minutes: 5, stage: 'Pair practice (breakout)', doing: 'Pairs say their picture talk to each other; the listener ticks the checklist and counts describing words.' },
      { minutes: 7, stage: 'Show-and-tell: picture talks', doing: 'Learners describe their picture on camera; the class guesses which picture it is before the speaker shows it.' },
      { minutes: 4, stage: 'Probe + exit ticket', doing: 'Spot the best description, then the favourite place speak task (a few volunteers). Exit ticket in the chat.' },
    ],
    successCriteria: ['I can use describing words for colour, size, sound and feeling.', 'I can use place words like in the middle and on the left.', 'I can describe a picture in five sentences.', 'I can describe a favourite place.'],
    homework: 'Choose a photo at home (with a grown-up’s permission) or look out of your window. Describe it in five sentences to a family member.',
    exit: 'Write one sentence about your favourite food with two describing words.',
  },
  files: [
    {
      name: 'l03-practice-sheet-describe-it.md',
      title: 'Practice sheet: five-sentence picture talk',
      audience: 'student',
      content: `# Describe It! — Picture Talk Sheet

## Choose one picture to describe
1. **A monsoon street** — dark clouds, umbrellas, puddles, a man selling hot corn
2. **A cricket match** — a batter, a bowler, a cheering crowd, a sunny sky
3. **A fruit market** — mangoes, bananas, watermelons, busy shoppers

## Word bank
| Colour | Size / shape | Sound | Smell / taste | Feeling |
|---|---|---|---|---|
| golden, purple, bright, dark | tiny, huge, round, tall | noisy, quiet, loud, buzzing | sweet, spicy, fresh, salty | happy, calm, excited, hungry |

Place words: **in the middle · on the left · on the right · at the back · in front of · next to**

## Sentence frames
1. This picture shows ______________.
2. In the middle, there is / are a ______ ______ ______.
3. On the left / right, ______________.
4. At the back, I can see ______________.
5. This picture makes me feel ______ because ______.

## Upgrade it!
"The park is nice." → The park is ______, ______ and full of ______.

## Speaking checklist
- [ ] I said five sentences
- [ ] I used at least three describing words
- [ ] I used a place word
- [ ] I said how it makes me feel
- [ ] I spoke slowly and looked up

## Worked example
This picture shows a monsoon street. In the middle, there are big, black umbrellas. On the right, a man is selling hot, smoky corn. At the back, I can see dark grey clouds. This picture makes me feel cosy because I love the rain.
`,
    },
    {
      name: 'l03-teacher-script.md',
      title: 'Teacher script: Describe It!',
      audience: 'teacher',
      content: `# Teacher Script — Lesson 3: Describe It! (45 min)

## Warm-up: Mystery bag (5 min)
Hide an object. Say: "It is round, smooth and orange." (an orange or a ball). Learners guess. Next: "It is long, thin and silver." (a spoon). Then invite volunteers to describe objects from their room.

## Upgrade demo
Write "There is a market." Ask: "Can you see it?" Add one word at a time, taking learner suggestions:
There is a busy market. → There is a busy, colourful market. → ...full of happy people and sweet smells.

## Model picture talk (count on fingers)
"This picture shows a fruit market. (1) In the middle, there are big, yellow mangoes. (2) On the left, a man is selling juicy watermelons. (3) The market is noisy and crowded. (4) This picture makes me feel hungry! (5)"

## Show-and-tell game
Learners describe their chosen practice-sheet picture without saying its name. The class guesses: monsoon, cricket or market? Celebrate guesses — it means the description worked.

## Fixes to model kindly
- "a ball red" → "a red ball"
- "very very nice" → "Can you find a sharper word? Beautiful? Delicious?"

## Exit ticket
One sentence about a favourite food with two describing words.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 4 ─────────────────────────────────
export const E4 = lesson(4, {
  title: 'Project: Show and Tell',
  objective: 'Plan and give a one-minute show-and-tell talk about a favourite object, with an opening, three details and a closing.',
  concept: 'Opening · details · closing',
  minutes: 45,
  hook: ['upgrade', 'This is my bat. Bye.', 'Have you ever held a bat that scored fifty runs? This is my lucky cricket bat!'],
  intro: 'It is project time! You will bring a favourite object and give your very first one-minute talk.',
  cards: [
    { emoji: '🎁', title: 'Choose your object', body: 'Pick something you love and can hold up: a toy, a book, a medal, a plant or a drawing. Choose something with a story. Ask a grown-up before you bring anything special.' },
    { emoji: '🚪', title: 'A strong opening', body: 'Start with a hook so people want to listen. Ask a question, like have you ever seen a teddy this old? Or say something surprising.' },
    { emoji: '3️⃣', title: 'Three details', body: 'Tell three things about your object. What it looks like, where it came from, and why it is special to you. Use describing words and because.' },
    { emoji: '🏁', title: 'A clear closing', body: 'Finish so people know you are done. Say that is why my teddy is my favourite thing, thank you for listening. Then smile and wait for the claps.' },
  ],
  scenes: [
    {
      kind: 'card',
      heading: 'Listen: Kabir’s show and tell',
      emoji: '🏏',
      body: 'Have you ever held a bat that scored fifty runs?\nThis is my lucky cricket bat. It is light brown, with a red grip.\nMy grandfather gave it to me on my birthday.\nIt is special because I scored my first fifty with it!\nThat is why this bat is my favourite thing. Thank you for listening!',
      say: [
        'Listen to Kabir give his show and tell.',
        'Have you ever held a bat that scored fifty runs? This is my lucky cricket bat.',
        'It is light brown, with a red grip. My grandfather gave it to me on my birthday.',
        'It is special because I scored my first fifty with it.',
        'That is why this bat is my favourite thing. Thank you for listening!',
      ],
    },
    {
      kind: 'bullets',
      heading: 'The talk map',
      bullets: [
        { icon: '🚪', text: 'Opening: a question or a surprise' },
        { icon: '👀', text: 'Detail 1: what it looks like' },
        { icon: '📍', text: 'Detail 2: where it came from' },
        { icon: '❤️', text: 'Detail 3: why it is special' },
        { icon: '🏁', text: 'Closing: “That is why… Thank you!”' },
      ],
      say: [
        'Every show and tell follows the same map.',
        'Open with a question or a surprise. Then give three details.',
        'What it looks like, where it came from, and why it is special to you.',
        'Close with, that is why, and thank you for listening.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Give kind feedback',
      bullets: [
        { icon: '⭐', text: 'Star: “I liked your opening question.”' },
        { icon: '⭐', text: 'Star: “You used great describing words.”' },
        { icon: '💭', text: 'Wish: “Next time, could you speak a bit louder?”' },
      ],
      say: [
        'After each talk, we give two stars and a wish.',
        'A star is something good, like I liked your opening question.',
        'A wish is a kind idea, like next time, could you speak a little louder?',
      ],
    },
  ],
  build: {
    title: 'Plan, practise and present',
    intro: 'Use the talk map on your project sheet. Keep it to key words, not a full script, so you can look up while you speak.',
    steps: [
      { title: 'Choose and hold it up', text: 'Pick your object and check it fits in the camera when you hold it up.' },
      { title: 'Write your opening', text: 'Write one question or surprise: Have you ever…? / Guess what this is!' },
      { title: 'Three detail key words', text: 'Write one or two key words for each detail: looks like, came from, special because.', tip: 'Key words, not sentences — look at the word, then look up and speak.' },
      { title: 'Write your closing', text: 'Write: That is why my ___ is my favourite thing. Thank you for listening!' },
      { title: 'Practise with a timer', text: 'Say the whole talk aloud. Aim for about one minute. Slow down if you finish in 30 seconds.' },
      { title: 'Present and listen', text: 'Give your talk, then listen to others and give two stars and a wish.' },
    ],
  },
  acts: [
    {
      order: 'Put Zoya’s show-and-tell talk in order',
      steps: [
        'Guess what this is? It is my very first trophy!',
        'It is small and shiny gold, with a star on top.',
        'I won it at my school dance competition.',
        'It is special because I practised for three months.',
        'That is why my trophy is my favourite thing. Thank you for listening!',
      ],
      why: 'Opening first, then three details (looks like, where from, why special), then the closing.',
      title: 'Order the talk',
    },
    {
      sort: 'Opening, detail or closing?',
      buckets: ['Opening', 'Detail', 'Closing'],
      items: [
        ['Have you ever seen a teddy this old?', 0],
        ['Guess what is in my hand!', 0],
        ['It is soft and brown, with one button eye.', 1],
        ['My aunt gave it to me when I was a baby.', 1],
        ['It is special because it comes on every trip.', 1],
        ['That is why I love it so much.', 2],
        ['Thank you for listening!', 2],
      ],
      why: 'Openings grab attention, details tell us about the object, and closings tell everyone you have finished.',
    },
    {
      mcq: 'Which is the strongest opening for a talk about a plant?',
      options: ['Um, so, this is a plant.', 'Did you know my plant grew from a tiny mango seed?', 'Plant.', 'I am going to talk now.'],
      answer: 1,
      why: 'A surprising question makes listeners curious and want to hear more.',
      title: 'Pick the best opening',
    },
    {
      speak: 'Have you ever held a bat that scored fifty runs? This is my lucky cricket bat. It is light brown, with a red grip. My grandfather gave it to me. It is special because I scored my first fifty with it! That is why it is my favourite thing. Thank you for listening!',
      checklist: ['I started with a question or surprise', 'I gave three details', 'I used at least three describing words', 'I used because', 'I held up my object and looked at the camera', 'I ended with a clear closing'],
      tips: 'Now give YOUR one-minute talk about your own object. Use key words, not a full script.',
      title: 'Speak: my one-minute show and tell',
    },
    {
      projectAct: true,
      title: 'Show and tell: plan and reflect',
      brief: 'Write your talk map (opening, three details, closing) for your favourite object, then reflect on how your talk went.',
      requirements: ['An opening question or surprise', 'Detail 1: what it looks like (with describing words)', 'Detail 2: where it came from', 'Detail 3: why it is special (with because)', 'A clear closing with thank you'],
      reflection: 'What went well in your talk? What would you do differently next time? What star did a friend give you?',
      tips: ['Key words, not long sentences', 'Practise with a timer', 'Hold your object near the camera'],
      minWords: 40,
    },
    {
      mcq: 'Your friend Aarav finished his talk, but he spoke very quietly. What is the kindest, most helpful feedback?',
      options: ['That was bad.', 'I liked your opening question! Next time, could you speak a bit louder so everyone can hear?', 'Nothing — just stay quiet.', 'You should talk like me.'],
      answer: 1,
      why: 'Start with a star (something good), then give a kind wish with a clear idea to improve.',
      phase: 'probe',
      title: 'New situation: giving feedback',
    },
  ],
  teacher: {
    explain:
      'This is the Module 1 project. Each learner plans and gives a one-minute talk about a favourite object using a clear structure: opening hook, three details (looks like, came from, why special), and a closing. They use everything from Lessons 1–3: greeting energy, because, describing words. Ask families the lesson before to help choose an object (nothing valuable or fragile). Assess with the rubric and run “two stars and a wish” peer feedback.',
    analogy: 'A good talk is like a train: the engine (opening) pulls everyone along, the carriages (details) carry the good stuff, and the last carriage (closing) shows the train has arrived.',
    vocab: [
      ['opening', 'The first sentence that grabs attention.'],
      ['hook', 'A question or surprise that makes people want to listen.'],
      ['detail', 'One fact about your object.'],
      ['closing', 'The last sentence that shows you have finished.'],
      ['key words', 'A few words that remind you what to say.'],
      ['feedback', 'Kind comments that help someone improve.'],
    ],
    demo:
      '1) Hold up your own object (a mug, a book, a plant) and give a full one-minute talk following the talk map. 2) Ask learners to raise one finger at your opening, three fingers through the details, and wave at your closing. 3) Show your key-word card on screen: “Ever seen…? / blue, chipped / gift from sister / every morning chai / That is why…”. 4) Model two stars and a wish on a volunteer’s practice opening.',
    unplugged:
      'Guess my object in three clues (5 min): learners hide their show-and-tell object behind their back. Volunteers give three describing clues (“It is soft. It is brown. It has one eye.”) and the class guesses before the reveal.',
    prompts: [
      ['What are the three parts of our talk?', 'Opening, three details, closing.'],
      ['Give an example of a strong opening.', 'A question like “Have you ever…?” or a surprise.'],
      ['What three details do we give?', 'What it looks like, where it came from, why it is special.'],
      ['Why do we use key words, not a full script?', 'So we can look up at our listeners.'],
      ['What are two stars and a wish?', 'Two good things and one kind idea to improve.'],
    ],
    support: 'Provide a talk map with picture icons and sentence starters for every line. Allow 30–45 seconds as a first target, and let learners read their opening line.',
    stretch: 'Add a short story moment (“The day I got it…”) and answer one question from the audience at the end.',
    mis: [
      ['A talk is just a list: “It is red. It is big. It is mine.”', 'Join details with because and add where it came from and why it is special.'],
      ['Ending with “That’s it” or just stopping', 'Use a closing: “That is why… Thank you for listening!”'],
      ['Reading every word with head down', 'Use key words, look at the word, then look up and speak.'],
      ['Feedback like “good” or “bad”', 'Say what exactly was good and give one kind, clear wish.'],
    ],
    plan: [
      { minutes: 4, stage: 'Warm-up game', doing: 'Guess my object in three clues: volunteers describe their hidden object; the class guesses.' },
      { minutes: 4, stage: 'Watch + teacher talk', doing: 'Play the project video, then the teacher gives a live one-minute talk; learners show fingers for each part.' },
      { minutes: 6, stage: 'Game time', doing: 'Order the talk and the opening/detail/closing sort, then a poll: Pick the best opening.' },
      { minutes: 8, stage: 'Plan (build-along)', doing: 'Learners write their talk map with key words on the project sheet; teacher checks each opening in the chat.' },
      { minutes: 5, stage: 'Pair rehearsal (breakout)', doing: 'Pairs rehearse with a timer and swap one star and one wish.' },
      { minutes: 14, stage: 'Show-and-tell presentations', doing: 'Every learner presents for about one minute holding their object. Teacher scores with the rubric; two classmates give two stars and a wish after each talk.' },
      { minutes: 4, stage: 'Reflect + probe', doing: 'Learners write the project reflection and answer the giving-feedback question. Celebrate: everyone gave a talk!' },
    ],
    successCriteria: ['I can plan a talk with an opening, three details and a closing.', 'I can use describing words and because in my talk.', 'I can speak for about one minute while looking up.', 'I can give two stars and a wish.'],
    homework: 'Give your show-and-tell talk to your family, holding your object. Ask them for two stars and a wish and write them on your project sheet.',
    exit: 'What was the best opening you heard today, and why did it work?',
  },
  project: {
    title: 'Show and Tell: My Favourite Thing',
    brief: 'Give a one-minute show-and-tell talk about a favourite object, with a strong opening, three details and a clear closing.',
    requirements: ['A real object you can hold up (with a grown-up’s OK)', 'An opening question or surprise', 'Three details: looks like, came from, why special', 'At least three describing words and one because', 'A clear closing with thank you', 'About one minute, looking up at the listeners'],
    milestones: ['Object chosen and opening written', 'Talk map with key words finished', 'Rehearsed with a partner and a timer', 'Presented to the class and feedback received'],
    rubric: [
      { criterion: 'Structure', levels: ['No clear opening or closing', 'Has an opening or a closing, not both', 'Clear opening, three details and closing', 'Engaging hook, well-linked details and a memorable closing'] },
      { criterion: 'Language', levels: ['Single words or a list', 'Some full sentences; one describing word', 'Full sentences with three describing words and because', 'Rich, varied describing words and reasons; joined ideas smoothly'] },
      { criterion: 'Voice & body', levels: ['Very quiet or hard to follow', 'Mostly heard; looks down a lot', 'Clear, steady voice; looks up often; holds up the object', 'Confident, expressive voice; good pauses; looks at the audience throughout'] },
      { criterion: 'Listening & feedback', levels: ['Did not listen to others', 'Listened; feedback was “good” or “bad”', 'Gave a specific star and a kind wish', 'Gave thoughtful, specific feedback and used feedback to improve'] },
    ],
    extensions: ['Add a short story about the day you got your object', 'Answer one question from the audience', 'Give the talk again in Hindi or your home language, then in English'],
  },
  files: [
    {
      name: 'l04-project-sheet-show-and-tell.md',
      title: 'Project sheet: Show and Tell talk map',
      audience: 'student',
      content: `# Show and Tell — My Talk Map

## My object: ______________________
(Ask a grown-up first. No phones, jewellery or anything fragile.)

## Talk map (key words only!)
| Part | Sentence frame | My key words |
|---|---|---|
| Opening | Have you ever…? / Guess what this is! / Did you know…? | |
| Detail 1 — looks like | It is ______ and ______, with ______. | |
| Detail 2 — came from | I got it from ______ / at ______ / on my ______. | |
| Detail 3 — why special | It is special because ______. | |
| Closing | That is why my ______ is my favourite thing. Thank you for listening! | |

## Word bank
- Looks: shiny, soft, tiny, huge, colourful, old, new, smooth, round
- Feelings: proud, happy, lucky, safe, excited
- Joining words: because, and, but, so

## Speaking checklist
- [ ] I started with a question or surprise
- [ ] I gave three details
- [ ] I used three describing words and because
- [ ] I held up my object and looked at the camera
- [ ] I ended with a clear closing
- [ ] I spoke for about one minute (time: ____)

## Two stars and a wish (from a friend)
⭐ ____________________ ⭐ ____________________ 💭 ____________________

## Worked example (Meera's plant)
Opening: Did you know my plant grew from a tiny mango seed? · Looks like: green, shiny leaves, red pot · Came from: planted it with my grandmother in the monsoon · Special because: I water it every morning and it is taller than me now! · Closing: That is why my mango plant is my favourite thing. Thank you for listening!

## Rubric (what your teacher looks for)
Structure · Language · Voice & body · Listening & feedback
`,
    },
    {
      name: 'l04-teacher-script.md',
      title: 'Teacher script: Show and Tell project',
      audience: 'teacher',
      content: `# Teacher Script — Lesson 4: Show and Tell (45 min)

## Before class
Message families: "Please help your child choose one favourite object to hold up in class (a toy, book, medal, plant or drawing). Nothing valuable or fragile."
Have a spare idea for learners who forget: "Describe your favourite thing in your room."

## Warm-up: Guess my object in three clues (4 min)
"Hide your object behind your back. Who can give three describing clues?"

## Teacher model (say it with your own object)
"Have you ever seen a mug with a chip shaped like India? This is my favourite chai mug. It is blue and a little bit old. My sister gave it to me when I started teaching. It is special because I drink my morning chai from it every day. That is why this mug is my favourite thing. Thank you for listening!"
Learners: one finger at the opening, three fingers for details, wave at the closing.

## Presentation order
Ask for 2–3 confident volunteers first. Keep a gentle 75-second limit. Nervous learner? Let them present sitting, or say only the opening and closing today.

## Two stars and a wish (model these sentence starters)
- "I liked your opening because..."
- "You used great describing words like..."
- "Next time, could you...?"

## Scoring
Use the rubric (Structure, Language, Voice & body, Listening & feedback). Note one star for each learner to share in the parent update.

## Exit ticket
"What was the best opening you heard today, and why did it work?"
`,
    },
  ],
});
