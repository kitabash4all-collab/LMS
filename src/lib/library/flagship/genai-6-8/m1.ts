// Gen-AI Creators (Grades 6–11, Beginner) · Module 1 — Talk to AI like a pro. Project: My AI Storybook.
import { lesson } from '../kit.ts';

const CHAT = ['Kitabash AI helper', 'ChatGPT', 'Gemini'];
const WHO =
  'Under 13: watch the teacher’s screen and use the Kitabash AI helper in the lesson (with parent consent). Aged 13–17: you may use ChatGPT, Gemini, Copilot or Perplexity with a parent’s permission. Claude is for adults (18+) only, so we do not use it in this course.';
const PRIVACY =
  'Never type real names, phone numbers, addresses, passwords, Aadhaar or PAN numbers, or private documents and photos into any AI tool.';

// ───────────────────────────────── Lesson 1 ─────────────────────────────────
export const A1 = lesson(1, {
  title: 'What Is Generative AI?',
  objective: 'Explain how a chatbot predicts the next word, say what AI can and cannot do, follow the privacy rules, and write your first three prompts.',
  concept: 'Prediction machines',
  minutes: 60,
  hook: ['pattern', ['Twinkle', 'twinkle', 'little'], 'star'],
  intro: 'Welcome, Gen-AI Creators! Today you will find out what is really happening inside a chatbot.',
  cards: [
    { emoji: '🧠', title: 'AI that makes new things', body: 'Generative AI is a computer program that creates new text, pictures or sounds. It learned patterns from a huge number of examples. Chatbots like ChatGPT and Gemini are generative AI.' },
    { emoji: '🔮', title: 'It predicts the next word', body: 'A chatbot writes its answer one small piece at a time. Each time, it guesses which word is most likely to come next. It is like a super-powered version of the autocomplete on a phone keyboard.' },
    { emoji: '⚖️', title: 'Good at, not so good at', body: 'AI is great for ideas, explanations and first drafts. It can also be confidently wrong, and it does not really know you or today’s news. You are the boss, so you always check its work.' },
    { emoji: '🔒', title: 'The privacy rule', body: 'Never type real names, phone numbers, addresses, passwords or Aadhaar numbers into an AI tool. Never paste private documents or photos of your friends. If you would not pin it on the school notice board, keep it out of AI.' },
    { emoji: '🧑‍🏫', title: 'Which tool can I use?', body: 'If you are under 13, watch the teacher’s screen and use the Kitabash AI helper in the lesson. If you are 13 to 17, you may use ChatGPT, Gemini, Copilot or Perplexity with a parent’s permission.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Watch it predict',
      tool: 'Kitabash AI helper',
      prompt: 'Finish this sentence with the most likely next words: “In the monsoon, the streets of Mumbai get…”',
      reply: '…flooded with rainwater, and people splash through puddles on their way to school and work.\n\nI chose the words that most often follow phrases like this in the text I learned from. I cannot look out of a window — I am predicting, not seeing.',
      note: 'Prediction, not magic',
      say: [
        'Here we ask the helper to finish a sentence about the monsoon in Mumbai.',
        'It picks the words that most often come next in the text it learned from.',
        'Notice the honest part: it cannot see Mumbai today, it is only predicting.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Caught it! The AI is wrong',
      tool: 'Kitabash AI helper',
      prompt: 'Can you see the Great Wall of China from the Moon?',
      reply: 'Yes! The Great Wall of China is the only human-made structure you can see from the Moon with your eyes.',
      note: 'WRONG — astronauts say the wall is far too thin to see from the Moon. This is a famous myth.',
      say: [
        'This time the AI sounds very sure of itself, but the answer is a famous myth.',
        'Astronauts say the Great Wall is far too thin to see from the Moon.',
        'Sounding confident is not the same as being correct, so we always check.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Your first three prompts',
      bullets: [
        { icon: '💡', text: 'Ask for ideas: “Give me 5 fun names for a cricket team.”' },
        { icon: '📖', text: 'Ask it to explain: “Explain what a rainbow is to a 10-year-old.”' },
        { icon: '✍️', text: 'Ask it to create: “Write a 4-line poem about Diwali lights.”' },
      ],
      say: [
        'Start with three simple kinds of prompt: ask for ideas, ask for an explanation, and ask it to create.',
        'Read every answer and ask yourself one question: is this actually true and useful?',
      ],
    },
  ],
  build: {
    title: 'First prompts and an “AI or human?” quiz',
    intro: 'Under 13: your teacher types on the shared screen, or you use the Kitabash AI helper. 13+: ChatGPT or Gemini with a parent’s permission.',
    steps: [
      { title: 'Prompt 1: ideas', text: 'Type: “Give me 5 fun names for a cricket team.” Pick your favourite name and say why.' },
      { title: 'Prompt 2: explain', text: 'Type: “Explain what a rainbow is to a 10-year-old.” Was it easy to understand?' },
      { title: 'Prompt 3: create', text: 'Type: “Write a 4-line poem about Diwali lights.” Copy it into your quiz sheet.' },
      { title: 'Write your own', text: 'Now write your own 4-line Diwali or monsoon poem, without AI. Keep it the same length.', tip: 'Short and simple works best — it makes the quiz harder to guess!' },
      { title: 'Make the quiz', text: 'Mix three AI poems and three of yours on one page, numbered 1–6. Keep a secret answer key.' },
      { title: 'Keep it', text: 'Tonight, ask your family to guess “AI or human?” for each one. Count how many they get right.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt that asks the AI for three short poems for your “AI or human?” family quiz. Say how many poems, the topic, how long each one should be, and what style they should sound like.',
      title: 'Prompt Lab: poems for the quiz',
      starter: 'Write a poem.',
      checks: [
        ['Say what to make', ['write', 'make', 'create', 'give me']],
        ['Say how many', ['three', 'four', 'five', '3', '4', '5']],
        ['Give a topic', ['about', 'topic', 'on diwali', 'on the monsoon']],
        ['Set the length', ['lines', 'line', 'short', 'words']],
        ['Describe the style or reader', ['grade', 'class', 'year-old', 'style', 'sound like', 'for my family']],
      ],
      exemplar: 'Write three short poems about the monsoon in Mumbai. Each poem should be 4 lines long and sound like it was written by a Grade 7 student, so my family can guess which ones are AI and which are mine.',
      tools: CHAT,
    },
    {
      sort: 'Safe or never share with an AI?',
      buckets: ['Safe to share', 'Never share'],
      items: [
        ['A maths question from your textbook', 0],
        ['Your home address', 1],
        ['Your favourite cricket team', 0],
        ['Your mum’s phone number', 1],
        ['Your password for a game', 1],
        ['A story idea about a dragon in Delhi', 0],
        ['Your Aadhaar number', 1],
        ['A photo of your friend’s face', 1],
      ],
      why: 'Ideas, questions and topics are fine. Anything that identifies a real person, or could unlock an account, stays out of AI.',
    },
    {
      order: 'How does a chatbot write its answer? Put the steps in order.',
      steps: ['You type a prompt', 'The AI breaks your words into small pieces', 'It predicts the most likely next word', 'It adds that word and predicts again, piece by piece', 'You read the answer and check it'],
      why: 'A chatbot builds its answer one piece at a time by prediction. The last step is always yours: check it.',
      title: 'Inside the chatbot',
    },
    {
      mcq: 'Which of these is generative AI doing?',
      options: ['A calculator adding 25 + 17', 'A chatbot writing a new poem about cricket', 'A torch turning on when you press the switch', 'A lift going to floor 3 when you press 3'],
      answer: 1,
      why: 'Generative AI creates something new, such as a poem. The others follow fixed rules and create nothing new.',
      title: 'Spot the generative AI',
    },
    {
      mcq: 'Riya asks a chatbot who won yesterday’s cricket match. It answers confidently. What should she do?',
      options: ['Trust it — it sounds very sure', 'Check the official scorecard or a trusted news site', 'Ask the same question again until it agrees with her', 'Post the answer on the class group straight away'],
      answer: 1,
      why: 'AI can be confidently wrong, and it may not know recent news. Check a trusted source before you believe it or share it.',
      wrong: { 0: 'Confident is not the same as correct.', 2: 'Asking again does not make it true — check a real source.', 3: 'Never share something you have not checked.' },
      phase: 'probe',
      title: 'New situation: yesterday’s match',
    },
    {
      write: 'Explain to a younger cousin how a chatbot “thinks”. Use the words “predict” and “next word”, and give one rule for using it safely.',
      keywords: ['predict', 'next word', 'check', 'private'],
      exemplar: 'A chatbot does not think like a person. It predicts the next word again and again, like autocomplete, so it can sound clever but still be wrong. Always check what it says, and never tell it private things like your address or password.',
      minWords: 30,
      phase: 'probe',
      title: 'Explain it to a cousin',
    },
  ],
  teacher: {
    explain:
      'Generative AI creates new text, images or sound from patterns learned from huge amounts of examples. A chatbot produces its reply one small piece (token) at a time by predicting what is most likely to come next — a very powerful autocomplete. That is why it can be fluent and still wrong (a “hallucination”), and why it does not know the learner or today’s news unless a tool looks it up. Set two rules today that repeat every lesson: the privacy rule, and “you are the boss — check it”. Explain the age rules simply: under 13 use the Kitabash AI helper and the teacher’s screen; 13–17 may use ChatGPT, Gemini, Copilot or Perplexity with a parent’s permission; Claude is 18+ only.',
    analogy: 'A chatbot is like a friend who has read millions of books but never been outside: great at finishing sentences, but sometimes it confidently fills gaps with things that are not true.',
    vocab: [
      ['generative AI', 'AI that creates new text, pictures or sounds.'],
      ['chatbot', 'An AI you talk to by typing messages.'],
      ['prompt', 'The message or instruction you give an AI.'],
      ['predict', 'Make a best guess about what comes next.'],
      ['hallucination', 'When AI says something false as if it were true.'],
      ['personal information', 'Details that identify a real person, like a name, address or phone number.'],
    ],
    demo:
      'Share your screen with the Kitabash AI helper (or your own adult account). 1) Type “Finish this sentence: In the monsoon, the streets of Mumbai get…” and point out that it predicts likely words. 2) Type “Give me 5 fun names for a cricket team.” Ask learners to vote for the best. 3) Type “Can you see the Great Wall of China from the Moon?” If it repeats the myth, stop and say: “It sounds sure — is it right?” Show how you would check (an encyclopedia or space agency page). If it answers correctly, say: “Good — but we still check, because next time it might not be.” 4) Show the privacy rule by typing a fake example, then deleting it: “I never type my real address — not even to test.”',
    unplugged:
      'Autocomplete race (5 min): the teacher says the start of a sentence (“Twinkle twinkle little…”, “Happy birthday to…”, “The capital of India is…”). Learners race to type or shout the next word. Then try an open one (“My favourite food is…”) and discuss: why did everyone agree on the first ones but not the last? That is what a chatbot does — it picks the most likely next word.',
    prompts: [
      ['How does a chatbot decide what to write?', 'It predicts the most likely next word, again and again.'],
      ['Why can AI be wrong even when it sounds sure?', 'It predicts likely words; it does not check facts.'],
      ['Name three things you must never type into an AI.', 'Any of: real names, phone numbers, addresses, passwords, Aadhaar, private photos or documents.'],
      ['What is one thing AI is good at?', 'Ideas, explanations, first drafts.'],
      ['What should you do before you share an AI answer?', 'Check it with a trusted source.'],
    ],
    support: 'Give a printed prompt card with the three starter prompts; learners only change the topic word. Pair a confident reader with a less confident one for the quiz.',
    stretch: 'Make the quiz harder: ask the AI to write “like a 12-year-old who makes small spelling mistakes”, then explain why that makes guessing harder and why we must label AI writing honestly.',
    mis: [
      ['AI knows everything and is always right', 'It predicts likely words and can be confidently wrong. Always check.'],
      ['AI is a person who understands me', 'It is a computer program finding patterns; it has no feelings or memories of you.'],
      ['It is fine to type my name and school to get better answers', 'Never share personal information. Describe yourself generally: “a Grade 7 student in India”.'],
      ['If I ask again and it agrees, it must be true', 'Repeating does not make it true. Check a trusted source.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Autocomplete race: learners race to finish famous sentences, then discuss why open sentences get different answers.' },
      { minutes: 6, stage: 'Watch + thumbs check', doing: 'Play the lesson video with captions. Thumbs up / sideways / down: “AI is always right.” (Answer: thumbs down.)' },
      { minutes: 7, stage: 'Live demo', doing: 'Teacher demo on the shared screen: predict the monsoon sentence, cricket team names, then the Great Wall myth — catch and check it together.' },
      { minutes: 10, stage: 'Follow-along', doing: 'Everyone tries the three first prompts (under 13 in the Kitabash AI helper; 13+ in ChatGPT or Gemini with permission). Teacher circulates.' },
      { minutes: 8, stage: 'Prompt Lab (pairs)', doing: 'Pairs write the quiz-poem prompt in the Prompt Lab, press Check, improve it until every item is ticked.' },
      { minutes: 6, stage: 'Quick competition', doing: '“Safe or never share” sort race: first three learners to finish with all cards correct win a shout-out. Review any mistakes as a class.' },
      { minutes: 8, stage: 'Breakout: make the quiz', doing: 'In breakout rooms, learners write their own 4-line poems and mix them with AI ones on the quiz sheet. Inside the chatbot order game and the Spot the generative AI quiz for early finishers.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Two or three learners read a poem aloud; the class votes “AI or human?” by poll. Reveal and ask: what gave it away?' },
      { minutes: 4, stage: 'Probe + exit ticket', doing: 'New situation: yesterday’s match, then the exit ticket in the chat.' },
    ],
    successCriteria: ['I can explain that a chatbot predicts the next word.', 'I can name things AI is good and bad at.', 'I can follow the privacy rule.', 'I can write and check my first prompts.'],
    homework: 'Play your “AI or human?” quiz with your family. Write down their score and which poem fooled them most — bring it to the next class.',
    exit: 'In one sentence: why can a chatbot be wrong even when it sounds sure?',
  },
  files: [
    {
      name: 'l01-ai-or-human-project-kit.md',
      title: 'Project kit: AI or human? family quiz',
      audience: 'student',
      content: `# AI or Human? — Family Quiz Kit

## Which tool do I use?
${WHO}

## The privacy rule
${PRIVACY}

## My first 3 prompts (copy and change the topic)
1. Ideas: "Give me 5 fun names for a [cricket team / school club]."
2. Explain: "Explain what [a rainbow / thunder] is to a 10-year-old."
3. Create: "Write a 4-line poem about [Diwali lights / the monsoon]."

## Quiz prompt template
"Write three short poems about [topic]. Each poem should be [4] lines long and sound like it was written by a Grade [7] student, so my family can guess which ones are AI and which are mine."

## Make the quiz
- [ ] 3 poems made by AI (copied exactly)
- [ ] 3 poems written by me, same topic and length
- [ ] Mixed up and numbered 1–6 on one page
- [ ] A secret answer key (A = AI, H = Human)
- [ ] No real names, phone numbers or addresses anywhere
- [ ] After the game, I told my family which ones were AI (honest!)

## Worked example
Topic: the monsoon. Poem 2 (AI): "Grey clouds roll over the city sky, / Puddles grow as the buses pass by, / Paper boats race down the lane, / Hello again, my friend the rain." Poem 5 (Human, by Meera): "The rain is loud on our tin roof, / My chai is hot, the cat is aloof, / My shoes are wet, my socks are too, / But mango season is nearly through."

Family score: 4 out of 6. The AI poem that fooled them most: number 2.

## Check it!
Pick one fact from any AI answer today. Where would you check it? Write the source here: ____________
`,
    },
    {
      name: 'l01-teacher-demo-script.md',
      title: 'Teacher demo script: inside the chatbot',
      audience: 'teacher',
      content: `# Teacher Demo Script — Lesson 1

Use the Kitabash AI helper or your own adult account on the shared screen. Learners under 13 never create accounts.

## Prompts to type live
1. "Finish this sentence with the most likely next words: In the monsoon, the streets of Mumbai get..."
   Say: "It picks the words that usually come next. It is predicting, not looking outside."
2. "Give me 5 fun names for a cricket team." — Run a quick poll for the favourite.
3. "Can you see the Great Wall of China from the Moon?"
   - If it says YES: "It sounds very sure. Is it right? Astronauts say the wall is far too thin to see from the Moon. This is a famous myth. Confident does not mean correct."
   - If it says NO: "Good! But we still check — next time it might repeat the myth. Let us look at a trusted encyclopedia or a space agency page."
4. Privacy moment: type "My address is [fake]" and delete it before sending. Say: "I never send real personal details — not even to test."

## If the AI gives a wrong or strange answer
Celebrate it! Say: "We caught a hallucination. Let us check it." Show where you would check (textbook, encyclopedia, official site) and correct it out loud.

## Age rules to say out loud
- Under 13: Kitabash AI helper in the lesson and the teacher's screen only.
- 13–17: ChatGPT, Gemini, Copilot or Perplexity with a parent's permission.
- Claude is 18+ only — we do not use it in this course.

## Exit ticket
"Why can a chatbot be wrong even when it sounds sure?" Look for: "It predicts words / it does not check facts."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 2 ─────────────────────────────────
export const A2 = lesson(2, {
  title: 'The Prompt Formula',
  objective: 'Write strong prompts with Role, Task, Context and Format (plus examples and tone), and improve the answer with follow-up messages.',
  concept: 'Role · Task · Context · Format',
  minutes: 60,
  hook: ['upgrade', 'Make a study plan.', 'You are a kind study coach. Make a 5-day exam plan for a Grade 7 student, as a table.'],
  intro: 'A vague prompt gets a vague answer. Today you learn the formula that makes AI really useful.',
  cards: [
    { emoji: '🎭', title: 'Role and Task', body: 'Start by giving the AI a role, for example a friendly study coach or a patient maths tutor. Then say the task clearly, so the AI knows exactly what to make.' },
    { emoji: '📚', title: 'Context', body: 'Context is the useful background that helps the AI make the answer fit you. Say your grade, your subjects, your exam dates and how much time you have. Describe yourself generally, and never give your real name or school.' },
    { emoji: '📋', title: 'Format', body: 'Format is the shape of the answer you want to get back. Ask for a table, a numbered list, five bullet points or a short paragraph. The right format makes the answer much easier to use.' },
    { emoji: '🎨', title: 'Examples and tone', body: 'Show a small example of what you want, and the AI will copy the pattern. Say the tone too, like friendly, simple or encouraging.' },
    { emoji: '🔁', title: 'Iterate with follow-ups', body: 'The first answer the AI gives you is only a first draft. Send a follow-up message, for example asking it to make Wednesday lighter or add short breaks. Keep improving the answer until it really fits your week.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'A vague prompt',
      tool: 'Kitabash AI helper',
      prompt: 'Make a study plan.',
      reply: 'Sure! Here is a general study plan:\n• Study every day\n• Take breaks\n• Revise before exams\n• Get enough sleep',
      note: 'Too general to be useful',
      say: [
        'Here is a vague prompt with no details at all.',
        'The answer is true, but it is so general that it does not really help anyone.',
      ],
    },
    {
      kind: 'chat',
      heading: 'The formula in action',
      tool: 'Kitabash AI helper',
      prompt: 'You are a friendly study coach. Make a 5-day revision plan for my exam week. I am in Grade 7. My exams are Maths on Monday and Science on Wednesday, and I can study 2 hours each evening. Show it as a table with Day, Subject, Topic and Minutes. Keep the tone encouraging.',
      reply: '| Day | Subject | Topic | Minutes |\n| Thu | Maths | Fractions + practice | 60 |\n| Thu | Science | Plants revision | 60 |\n| Fri | Maths | Algebra basics | 90 |\n| Sat | Maths | Mock test + mistakes | 120 |\n| Sun | Science | Light and shadows | 120 |\n\nYou can do this — small steps every day add up! Total: 10 hours.',
      note: 'Role ✓ Task ✓ Context ✓ Format ✓ Tone ✓',
      say: [
        'Now watch the same request with a role, a clear task, context, a format and a tone.',
        'The answer is a table built around this learner’s real exam days and study time.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Caught it! Check the maths',
      tool: 'Kitabash AI helper',
      prompt: 'Please add up the minutes in your table. Does it really come to 10 hours? Also make Saturday lighter, because I have cricket practice from 4 to 6 pm.',
      reply: 'You are right to check — I made a mistake. The rows add up to 450 minutes, which is 7 hours 30 minutes, not 10 hours. Here is a fixed table with Saturday shortened to 45 minutes after cricket.',
      note: 'The AI added up wrongly. We checked, and a follow-up fixed it.',
      say: [
        'Look closely: the AI said the total was ten hours, but the rows do not add up to that.',
        'We send a follow-up asking it to check the sum and to make Saturday lighter.',
        'Always do a quick check of numbers yourself, because AI often makes small maths slips.',
      ],
    },
  ],
  build: {
    title: 'My exam-week study planner',
    intro: 'Use the Prompt Lab first, then the Kitabash AI helper (under 13) or ChatGPT / Gemini (13+, with a parent’s permission).',
    steps: [
      { title: 'Collect your context', text: 'Write your grade, two or three exam subjects, the days they are on, and how long you can study each day. No real names or school names.' },
      { title: 'Build the prompt', text: 'Use the formula: Role + Task + Context + Format + Tone. Check it in the Prompt Lab.' },
      { title: 'Send it', text: 'Paste the prompt into the AI tool and read the table it makes.' },
      { title: 'Check it', text: 'Add up the minutes yourself. Are the right subjects on the right days? Is there time to rest?', tip: 'AI often slips with totals and dates — this is the step most people skip.' },
      { title: 'Follow up twice', text: 'Send two follow-ups to make it fit you, e.g. “Add 10-minute breaks” or “Move Science to Friday”.' },
      { title: 'Keep it', text: 'Copy the final planner into your notebook or print it. Label it “Made with help from AI”.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt that asks the AI to make your exam-week study planner. Use the full formula: give it a Role, a clear Task, your Context (grade, subjects, days, time), the Format you want, and a Tone.',
      title: 'Prompt Lab: my study planner',
      starter: 'Make me a study plan.',
      checks: [
        ['Role — who the AI should be', ['you are', 'act as', 'pretend you are', 'imagine you are']],
        ['Task — what to make', ['make a', 'create a', 'plan for', 'write a', 'build a']],
        ['Context — your grade, subjects or time', ['grade', 'class', 'my exam', 'exams are', 'hours', 'minutes each']],
        ['Format — the shape of the answer', ['table', 'list', 'bullet', 'columns', 'day by day']],
        ['Tone — how it should sound', ['friendly', 'encouraging', 'simple', 'tone', 'kind', 'positive']],
      ],
      exemplar: 'You are a friendly study coach. Make a 5-day revision plan for my exam week. I am in Grade 8. My exams are Maths on Monday, Science on Wednesday and Hindi on Friday, and I can study 2 hours each evening. Show it as a table with the columns Day, Subject, Topic and Minutes, with a 10-minute break every hour. Keep the tone encouraging and simple.',
      tools: CHAT,
    },
    {
      match: 'Match each part of the formula to its example',
      pairs: [
        ['Role', 'You are a patient maths tutor.'],
        ['Task', 'Make a 5-day revision plan.'],
        ['Context', 'I am in Grade 7 and my Science exam is on Monday.'],
        ['Format', 'Show it as a table with Day, Subject and Minutes.'],
        ['Tone', 'Keep it encouraging and simple.'],
      ],
      why: 'Role says who the AI is, Task says what to make, Context gives background, Format sets the shape, and Tone sets how it sounds.',
    },
    {
      mcq: 'Better prompt: A or B? You want help remembering the planets.',
      options: ['A: “Planets.”', 'B: “You are a fun science teacher. Make a short rhyme to help a Grade 6 student remember the 8 planets in order from the Sun. Keep it to 4 lines.”'],
      answer: 1,
      why: 'B has a role, a clear task, context (Grade 6, in order), a format (4-line rhyme) and a tone (fun).',
      title: 'Better prompt: A or B?',
    },
    {
      order: 'Put the prompt-improving loop in order',
      steps: ['Write a prompt using the formula', 'Read the AI’s answer', 'Check it — facts, numbers and dates', 'Send a follow-up to fix or improve it', 'Use it and label it as AI-helped'],
      why: 'Prompting is a loop: write, read, check, follow up. Only then use it, honestly labelled.',
      title: 'The improve loop',
    },
    {
      mcq: 'Zoya’s AI study plan says “Total: 12 hours”, but she adds up the rows and gets 9 hours. What is the best follow-up?',
      options: ['“You are wrong, I hate you.”', '“Please add up the minutes again and fix the total. Also show the total for each day.”', 'Delete the whole chat and give up', 'Use the plan anyway — the AI must be right'],
      answer: 1,
      why: 'A clear, polite follow-up that says exactly what to fix gets the best result. Her own check caught the mistake.',
      phase: 'probe',
      title: 'New situation: the wrong total',
    },
  ],
  teacher: {
    explain:
      'Prompts work best when they remove guessing. The formula is Role (who the AI should act as), Task (exactly what to make), Context (the background that makes it personal — described generally, never with real names or school details), and Format (table, list, length). Two power-ups: give an example of the pattern you want, and set the tone. The most important habit is iteration: the first reply is a draft, so read, check and send follow-ups. Today’s check moment: AI often gets totals and dates wrong, so learners add up their planner themselves.',
    analogy: 'Ordering at a dosa stall: “One dosa” gets you something. “One crispy masala dosa, less spicy, extra chutney, to take away” gets you exactly what you want.',
    vocab: [
      ['role', 'Who you ask the AI to act as, e.g. a study coach.'],
      ['task', 'The exact thing you want the AI to make or do.'],
      ['context', 'Useful background details, like your grade and exam dates.'],
      ['format', 'The shape of the answer, like a table or list.'],
      ['tone', 'How the answer should sound, like friendly or formal.'],
      ['iterate', 'Improve something step by step with follow-ups.'],
    ],
    demo:
      'On the shared screen: 1) Type “Make a study plan.” Read the vague reply aloud and ask: “Would this help you?” 2) Build the formula prompt live, colour-coding each part on a slide (Role blue, Task green, Context orange, Format purple, Tone pink). Send it. 3) Add up the minutes with the class. If the total is wrong, say “Caught it!” and send: “Please add up the minutes again and fix the total.” If it is right, say “Good — but we always check”, and change one number on purpose to show how you would spot it. 4) Send a follow-up: “Make Saturday lighter because I have cricket practice.” Show how the plan changes.',
    unplugged:
      'Human chatbot (5 min): one volunteer is the “chatbot” and must follow instructions exactly. The class first says “Draw an animal.” Then: “You are a cartoonist. Draw a happy elephant wearing a cricket cap, in the middle of the board, in 30 seconds.” Compare the two drawings: which instructions worked better, and why?',
    prompts: [
      ['What are the four parts of the formula?', 'Role, Task, Context, Format.'],
      ['Why does context help?', 'The AI can make the answer fit you instead of being general.'],
      ['How can you give context without sharing personal information?', 'Describe yourself generally: grade, subjects, times — no names or school.'],
      ['What is a follow-up?', 'A second message that asks the AI to fix or improve its answer.'],
      ['What should you check in an AI study plan?', 'Totals, days and dates, and whether it fits your real week.'],
    ],
    support: 'Give a fill-in-the-gaps prompt frame: “You are a ___. Make a ___. I am in Grade ___ and my exams are ___. Show it as a ___. Keep it ___.”',
    stretch: 'Add an example to your prompt (one sample row of the table) and compare the answer with and without it. Which is better, and why?',
    mis: [
      ['Longer prompts are always better', 'Clear beats long. Include the parts that matter: Role, Task, Context, Format.'],
      ['If the first answer is bad, AI cannot help', 'Send a follow-up. Most great answers come after two or three messages.'],
      ['Context means telling it my name and school', 'Context is general background: grade, subjects, dates. Keep personal details private.'],
      ['AI is good at maths, so I do not need to check totals', 'AI chatbots often make small arithmetic slips. Check numbers yourself.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Human chatbot: a volunteer draws from a vague instruction, then from a formula instruction. Compare.' },
      { minutes: 6, stage: 'Watch + poll', doing: 'Play the video. Poll: “Which part of the formula do you usually forget?” (Role / Task / Context / Format).' },
      { minutes: 7, stage: 'Live demo', doing: 'Vague prompt vs formula prompt on the shared screen; add up the minutes together and catch any mistake.' },
      { minutes: 5, stage: 'Quick competition', doing: 'Match race: match each formula part to its example; fastest correct pair wins. Then Better prompt: A or B by thumbs vote.' },
      { minutes: 10, stage: 'Prompt Lab', doing: 'Learners write their study-planner prompt in the Prompt Lab and improve it until all five items are ticked.' },
      { minutes: 12, stage: 'Follow-along (pairs)', doing: 'Pairs send their prompt to the AI (under 13 via the Kitabash AI helper), check the totals, then send two follow-ups. The improve loop ordering game for early finishers.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Three learners share before/after: their first answer and their improved planner. Class names the follow-up that helped most.' },
      { minutes: 5, stage: 'Probe', doing: 'New situation: the wrong total. Discuss the best follow-up.' },
      { minutes: 4, stage: 'Exit ticket', doing: 'Exit ticket in the chat; remind learners to label the planner “Made with help from AI”.' },
    ],
    successCriteria: ['I can write a prompt with Role, Task, Context and Format.', 'I can add an example and a tone.', 'I can improve an answer with follow-ups.', 'I can check an AI plan’s numbers and dates.'],
    homework: 'Use your study planner for two days. Write one follow-up prompt that would make it fit your real week better.',
    exit: 'Turn “help with science” into a formula prompt with a Role, Task, Context and Format.',
  },
  files: [
    {
      name: 'l02-study-planner-project-kit.md',
      title: 'Project kit: exam-week study planner',
      audience: 'student',
      content: `# Exam-Week Study Planner — Project Kit

## Which tool do I use?
${WHO}

## The privacy rule
${PRIVACY} Describe yourself generally: "a Grade 7 student in India" is enough.

## The prompt formula
| Part | Ask yourself | Example |
|---|---|---|
| Role | Who should the AI be? | You are a friendly study coach. |
| Task | What exactly should it make? | Make a 5-day revision plan. |
| Context | What does it need to know? | I am in Grade 7. Maths on Monday, Science on Wednesday. 2 hours each evening. |
| Format | What shape? | A table with Day, Subject, Topic, Minutes. |
| + Example | Show one sample row | Thu, Maths, Fractions, 60 |
| + Tone | How should it sound? | Encouraging and simple. |

## Template
"You are a [role]. Make a [task]. I am in Grade [__]. My exams are [subject] on [day] and [subject] on [day], and I can study [__] hours each [evening]. Show it as a [table with columns ...]. Keep the tone [encouraging]."

## Follow-up ideas
- "Add a 10-minute break every hour."
- "Make [day] lighter because I have [cricket practice / tuition]."
- "Add up the minutes for each day and the total."
- "Put my hardest subject first each day."

## Checklist
- [ ] My prompt has Role, Task, Context, Format and Tone
- [ ] No real names, school name, phone number or address
- [ ] I added up the minutes myself
- [ ] Subjects are on the right days
- [ ] I sent at least two follow-ups
- [ ] Labelled "Made with help from AI"

## Worked example (Arjun, Grade 8)
Prompt: "You are a friendly study coach. Make a 5-day revision plan for my exam week. I am in Grade 8. My exams are Maths on Monday, Science on Wednesday and Hindi on Friday, and I can study 2 hours each evening. Show it as a table with Day, Subject, Topic and Minutes. Keep the tone encouraging."
Check: the AI said "Total: 10 hours" but the rows added up to 8 hours.
Follow-up 1: "Please add up the minutes again and fix the total."
Follow-up 2: "Make Saturday lighter because I have cricket from 4 to 6 pm."
Result: a planner that fits Arjun's real week, labelled "Made with help from AI".
`,
    },
    {
      name: 'l02-teacher-demo-script.md',
      title: 'Teacher demo script: vague vs formula prompt',
      audience: 'teacher',
      content: `# Teacher Demo Script — Lesson 2

Share the Kitabash AI helper or your adult account. Prepare a slide that colour-codes the formula parts.

## Prompts to type live
1. Vague: "Make a study plan." — Ask: "Would this help you? Why not?"
2. Formula: "You are a friendly study coach. Make a 5-day revision plan for my exam week. I am in Grade 7. My exams are Maths on Monday and Science on Wednesday, and I can study 2 hours each evening. Show it as a table with Day, Subject, Topic and Minutes. Keep the tone encouraging."
3. Check together: add the minutes on the whiteboard.
4. Follow-up: "Please add up the minutes again and fix the total. Also make Saturday lighter because I have cricket practice from 4 to 6 pm."

## If the AI gets the total wrong
Say: "Caught it! The AI predicted a number that looks right but is not. This is why we check." Send follow-up 4.

## If the AI gets everything right
Say: "Great — but we still check every time." Change one number on the slide on purpose and ask learners to spot it.

## Points to make
- Context is general — grade and subjects, never names or school.
- The first answer is a draft. Iterate.
- Label the final plan "Made with help from AI".
`,
    },
  ],
});

// ───────────────────────────────── Lesson 3 ─────────────────────────────────
export const A3 = lesson(3, {
  title: 'AI as a Study Buddy, Not a Cheat',
  objective: 'Use AI to explain, quiz you and coach you with questions, catch hallucinations by checking against your textbook, and follow the honest-use rules.',
  concept: 'Learn with AI, check with sources',
  minutes: 60,
  hook: ['word', '🤝 not 📋', 'a study buddy, not a cheat sheet'],
  intro: 'AI can help you learn faster, or help you learn nothing at all. Today you choose the first one.',
  cards: [
    { emoji: '👶', title: 'Explain like I’m 10', body: 'When you are stuck on a chapter, ask the AI to explain it like you are 10. Ask for an everyday example from your own life to make it easy to picture. Then explain it back in your own words to make sure you really get it.' },
    { emoji: '❓', title: 'Quiz me', body: 'Ask the AI to quiz you one question at a time and wait for your answer. Testing yourself is one of the best ways to remember things.' },
    { emoji: '🧭', title: 'Socratic mode', body: 'Tell the AI not to give you the answer, but to ask you questions instead. This turns the AI into a coach, so your own brain does the thinking and the learning.' },
    { emoji: '🔍', title: 'Spot the hallucination', body: 'AI sometimes invents facts, dates or names that sound completely real. Check every important fact against your textbook or a trusted website. Write what you checked in a fact-check table.' },
    { emoji: '✅', title: 'Honest-use rules', body: 'Never hand in AI work as your own. Ask your teacher what AI use is allowed, and say when you used it. Use AI to learn, not to skip the learning.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Explain like I’m 10',
      tool: 'Kitabash AI helper',
      prompt: 'Explain photosynthesis like I’m 10, using an example from an Indian kitchen. Keep it to 4 sentences.',
      reply: 'Plants make their own food, a bit like cooking! Their leaves take in sunlight, water from the soil and carbon dioxide from the air. Using sunlight as the stove, they turn these into sugar for energy. While they “cook”, they give out oxygen, which we breathe.',
      say: [
        'Here the learner asks for a simple explanation with a familiar example and a set length.',
        'The kitchen comparison makes a hard idea easy to picture and remember.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Caught it! A hallucination',
      tool: 'Kitabash AI helper',
      prompt: 'Quiz me on photosynthesis. Give me the answer to question 1 so I can check.',
      reply: 'Question 1: Where in the plant cell does photosynthesis happen?\nAnswer: In the mitochondria.',
      note: 'WRONG — the textbook says photosynthesis happens in the chloroplasts. Mitochondria release energy.',
      say: [
        'The AI made a quiz, but its answer to question one is wrong.',
        'Our science textbook says photosynthesis happens in the chloroplasts, not the mitochondria.',
        'We write this in our fact-check table and tell the AI to correct it.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Socratic mode',
      tool: 'Kitabash AI helper',
      prompt: 'Do not give me the answer. Ask me one question at a time to help me find the area of a rectangle that is 8 cm by 5 cm.',
      reply: 'Great, let’s work it out together! First question: if you drew this rectangle on squared paper, how many squares would fit along the long side?',
      say: [
        'In Socratic mode, the AI asks questions instead of giving the answer.',
        'You do the thinking, so you can solve the next problem on your own in the exam.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Your fact-check table',
      bullets: [
        { icon: '🤖', text: 'What the AI said' },
        { icon: '📘', text: 'What my textbook or trusted source says (with page)' },
        { icon: '✅', text: 'Correct, or ❌ wrong?' },
        { icon: '✏️', text: 'The fixed answer' },
      ],
      say: ['Your fact-check table has four columns: what AI said, what the source says, right or wrong, and the fix.'],
    },
  ],
  build: {
    title: 'An AI practice quiz with a fact-check table',
    intro: 'Pick a topic from your own school textbook. Keep the textbook open — you will need it.',
    steps: [
      { title: 'Choose a topic', text: 'Pick one chapter you have a test on soon, e.g. “Fractions”, “The Mughal Empire” or “Light and shadows”.' },
      { title: 'Ask it to explain', text: 'Prompt: “Explain [topic] like I’m 10, in 5 sentences.” Then explain it back to your partner in your own words.' },
      { title: 'Make the quiz', text: 'Use the Prompt Lab to write a “quiz me” prompt: grade, topic, 5 questions, one at a time, with an answer key at the end.' },
      { title: 'Take the quiz', text: 'Answer each question yourself before you look at the answer key.' },
      { title: 'Fact-check it', text: 'Check every answer in the answer key against your textbook. Fill in the fact-check table with page numbers.', tip: 'If even one answer is wrong, you have caught a hallucination — well done!' },
      { title: 'Keep it', text: 'Save the corrected quiz and the table. Label it “Quiz made with AI, checked by me”.' },
    ],
  },
  acts: [
    {
      ai: 'Write a “quiz me” prompt for a topic from your own school textbook. Ask the AI to quiz you one question at a time, say your grade and topic, choose the type of question, and ask for an answer key or explanations you can check.',
      title: 'Prompt Lab: quiz me!',
      starter: 'Give me the answers to chapter 5.',
      checks: [
        ['Ask it to quiz or test you', ['quiz me', 'ask me', 'test me', 'practice quiz', 'practise quiz']],
        ['Say your grade or class and topic', ['grade', 'class', 'standard']],
        ['Choose the question type', ['multiple choice', 'mcq', 'short answer', 'true or false', 'fill in the blank']],
        ['One at a time — wait for your answer', ['one at a time', 'one by one', 'wait for my answer', 'wait for me']],
        ['Ask for an answer key or explanations to check', ['answer key', 'explain', 'explanation', 'why']],
      ],
      exemplar: 'Quiz me on the chapter “Light and shadows” for Grade 6 Science. Ask me 5 multiple choice questions one at a time and wait for my answer before the next one. After each answer, tell me if I was right and explain why in one sentence. At the end, give me an answer key so I can check it against my textbook.',
      tools: CHAT,
    },
    {
      sort: 'Study buddy or cheating?',
      buckets: ['Honest study help', 'Cheating'],
      items: [
        ['Asking AI to explain a hard chapter in simple words', 0],
        ['Copying an AI essay and handing it in as yours', 1],
        ['Asking AI to quiz you before a test', 0],
        ['Using AI to answer a test while the teacher is not looking', 1],
        ['Asking AI for hints, then solving it yourself', 0],
        ['Getting AI to write your homework and not telling anyone', 1],
        ['Checking your own answer, then telling your teacher you used AI', 0],
      ],
      why: 'If AI helps your brain do the learning — and you are honest about it — it is study help. If AI does the work for you in secret, it is cheating.',
    },
    {
      mcq: 'Spot the hallucination! One of these AI answers is false. Which one?',
      options: ['Water boils at 100 °C at sea level.', 'The Sun is a star.', 'Mahatma Gandhi was born in 1869 in Porbandar.', 'Photosynthesis happens in the mitochondria.'],
      answer: 3,
      why: 'Photosynthesis happens in the chloroplasts. The other three are true — check them in your textbook too!',
      title: 'Spot the hallucination',
    },
    {
      order: 'Put the fact-checking steps in order',
      steps: ['Read the AI answer', 'Underline the facts, dates and numbers', 'Look each one up in your textbook or a trusted site', 'Mark it correct or wrong in your table', 'Write the fixed answer and tell the AI'],
      why: 'Find the facts first, then check each one against a trusted source and record what you found.',
      title: 'How to fact-check',
    },
    {
      mcq: 'Kabir’s AI quiz says “The Battle of Plassey was fought in 1857.” His History textbook says 1757. What should he write in his fact-check table?',
      options: ['Correct — the AI is usually right', 'Wrong — the textbook says 1757 (with page number); fixed answer: 1757', 'Both dates are fine', 'Leave it out of the table'],
      answer: 1,
      why: 'The textbook is the trusted source. Record the mistake, the source and the fixed answer — that is a real fact-check.',
      phase: 'probe',
      title: 'New situation: the wrong date',
    },
    {
      write: 'Your friend says, “I just ask AI for my homework answers. It is faster.” Write what you would tell them, using the words “learn”, “check” and “honest”.',
      keywords: ['learn', 'check', 'honest', 'quiz'],
      exemplar: 'If AI does your homework, you will not learn it, and in the exam you will be stuck. AI can also be wrong, so you still have to check it. Be honest — use AI to explain things or quiz you, then do the work yourself and tell your teacher how you used it.',
      minWords: 30,
      phase: 'probe',
      title: 'Advice for a friend',
    },
  ],
  teacher: {
    explain:
      'AI is powerful for learning when it makes the learner think: explain-like-I’m-10 followed by explaining it back, quiz-me (retrieval practice), and Socratic mode (questions instead of answers). It is harmful when it replaces the thinking. Hallucinations are especially common with dates, names, numbers and quotations, so the textbook is the referee. Introduce the fact-check table and the honest-use rules: check your school’s AI policy, never submit AI work as your own, and say how you used AI. Repeat the privacy rule: no names, school or personal details in prompts.',
    analogy: 'AI is like a gym trainer: a good trainer coaches you while you lift — if the trainer lifts the weights for you, you never get stronger.',
    vocab: [
      ['hallucination', 'A false fact that an AI says confidently.'],
      ['fact-check', 'Check a claim against a trusted source.'],
      ['trusted source', 'A reliable place to check facts, like your textbook or an official website.'],
      ['Socratic mode', 'When the AI asks you questions so you work out the answer.'],
      ['honest use', 'Using AI openly in ways your teacher allows, and saying when you used it.'],
    ],
    demo:
      'Share screen with the Kitabash AI helper. Ask a learner for a chapter from their textbook. 1) Type “Explain [topic] like I’m 10, in 4 sentences.” Ask a learner to explain it back. 2) Type the quiz-me prompt from the exemplar and answer a question together. 3) Ask for the answer key and check one answer against a real textbook page held to the camera. If there is a mistake, celebrate: “Hallucination caught!” and add it to the fact-check table on screen. If everything is right, show the prepared example (photosynthesis in the mitochondria) and fact-check it. 4) Show Socratic mode with the rectangle-area prompt.',
    unplugged:
      'Two truths and a hallucination (5 min): the teacher reads three “AI answers” about India — two true, one false (e.g. “The national animal of India is the tiger” ✓, “Mount Everest is in Kerala” ✗, “The Ganga flows into the Bay of Bengal” ✓). Learners vote on the hallucination and say how they could check it.',
    prompts: [
      ['What is Socratic mode?', 'The AI asks you questions so you work out the answer.'],
      ['Why is “quiz me” better for learning than reading answers?', 'Testing yourself makes you remember.'],
      ['What kinds of facts does AI often get wrong?', 'Dates, names, numbers, quotes.'],
      ['What goes in a fact-check table?', 'What AI said, what the source says, right or wrong, the fix.'],
      ['When does AI use become cheating?', 'When it does the work for you and you hand it in as your own.'],
    ],
    support: 'Provide a printed fact-check table with the first row filled in. Let learners check just two answers instead of five.',
    stretch: 'Ask the AI the same question in two different ways. Do the answers agree? Fact-check the one that differs.',
    mis: [
      ['If the AI explains it, I have learned it', 'Explain it back in your own words or get quizzed — that is when you learn.'],
      ['The AI answer key is always right', 'Answer keys can contain hallucinations. Check them against your textbook.'],
      ['Using AI for homework is always cheating', 'It depends on how. Explaining, quizzing and hints, used honestly, are allowed if your teacher agrees.'],
      ['A website or video is always a trusted source', 'Prefer your textbook, official sites and known publishers. Check who made it.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Two truths and a hallucination: learners vote on the false “AI answer” and say how to check it.' },
      { minutes: 6, stage: 'Watch + thumbs check', doing: 'Play the video. Thumbs check: “Asking AI to quiz me is cheating.” (Thumbs down — it is honest study help.)' },
      { minutes: 7, stage: 'Live demo', doing: 'Explain-like-I’m-10, quiz-me and Socratic mode on the shared screen, then fact-check one answer against a real textbook.' },
      { minutes: 5, stage: 'Quick competition', doing: 'Spot the hallucination race, then the Study buddy or cheating sort; fastest all-correct wins.' },
      { minutes: 8, stage: 'Prompt Lab', doing: 'Learners write their quiz-me prompt for their own textbook topic and tick every checklist item.' },
      { minutes: 14, stage: 'Pairs: quiz and fact-check', doing: 'Pairs run the quiz in the AI tool (under 13 via the Kitabash AI helper), answer it, then fill the fact-check table from their textbooks. How to fact-check order game for early finishers.' },
      { minutes: 6, stage: 'Show-and-tell', doing: '“Hallucination hall of fame”: learners who caught an AI mistake share it and the page that proved it.' },
      { minutes: 5, stage: 'Probe', doing: 'New situation: the wrong date, and Advice for a friend.' },
      { minutes: 4, stage: 'Exit ticket', doing: 'Exit ticket; reminder to check the school’s AI rules with their teacher.' },
    ],
    successCriteria: ['I can use AI to explain, quiz me and coach me with questions.', 'I can catch a hallucination by checking my textbook.', 'I can fill in a fact-check table.', 'I can explain the difference between study help and cheating.'],
    homework: 'Use your corrected AI quiz to revise. Before your next test, ask a family member to quiz you with it.',
    exit: 'Write one prompt that uses AI as a study buddy, and one rule that keeps it honest.',
  },
  files: [
    {
      name: 'l03-practice-quiz-project-kit.md',
      title: 'Project kit: AI practice quiz + fact-check table',
      audience: 'student',
      content: `# AI Practice Quiz + Fact-Check Table — Project Kit

## Which tool do I use?
${WHO}

## The privacy rule
${PRIVACY}

## Study-buddy prompt templates
- Explain: "Explain [topic] like I'm 10, with an everyday example from India. Keep it to [5] sentences."
- Quiz me: "Quiz me on [chapter] for Grade [__] [subject]. Ask me [5] multiple choice questions one at a time and wait for my answer. After each answer, tell me if I was right and explain why. At the end, give me an answer key."
- Socratic: "Do not give me the answer. Ask me one question at a time to help me solve: [problem]."
- Check: "Which of your answers might be wrong? Tell me what I should check in my textbook."

## Fact-check table
| # | What the AI said | What my textbook says (page) | Right or wrong? | Fixed answer |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

## Honest-use checklist
- [ ] I know my school's rules about AI
- [ ] I answered every question myself before looking
- [ ] I checked every answer against my textbook
- [ ] I labelled it "Quiz made with AI, checked by me"
- [ ] I did not hand in AI work as my own

## Worked example (Meera, Grade 6 Science, "Getting to know plants")
| # | AI said | Textbook says | Right? | Fix |
|---|---|---|---|---|
| 1 | Photosynthesis happens in the mitochondria | Leaves make food; it happens in the chloroplasts (green parts) | Wrong | Chloroplasts |
| 2 | Roots take in water from the soil | Roots absorb water and minerals | Right | — |

Meera caught 1 hallucination out of 5 answers.
`,
    },
    {
      name: 'l03-teacher-demo-script.md',
      title: 'Teacher demo script: study buddy and hallucination hunt',
      audience: 'teacher',
      content: `# Teacher Demo Script — Lesson 3

Have a real textbook ready to hold up to the camera.

## Prompts to type live
1. "Explain photosynthesis like I'm 10, using an example from an Indian kitchen. Keep it to 4 sentences." — Ask a learner to explain it back.
2. "Quiz me on the chapter Light and shadows for Grade 6 Science. Ask me 5 multiple choice questions one at a time and wait for my answer. At the end, give me an answer key."
3. "Do not give me the answer. Ask me one question at a time to help me find the area of a rectangle that is 8 cm by 5 cm."

## The hallucination moment
- If the AI makes a mistake: stop, say "Hallucination caught!", hold up the textbook page, add a row to the fact-check table on screen, then type: "Your answer to question [n] is wrong. My textbook says [fact]. Please correct it."
- If the AI is correct: show the prepared example "Photosynthesis happens in the mitochondria" and fact-check it with the class (correct answer: chloroplasts).

## Honest-use message
"Using AI to explain and quiz you is great study help. Handing in AI work as your own is cheating. Always check your school's rules and say when you used AI."

## Privacy reminder
No names, school names or photos of worksheets with names on them.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 4 ─────────────────────────────────
export const A4 = lesson(4, {
  title: 'Project: My AI Storybook',
  objective: 'Co-write a short illustrated story with AI as your helper, design it in Canva, and credit the AI honestly.',
  concept: 'Creative co-writing',
  minutes: 60,
  hook: ['word', '📖 + 🤖 + 🎨', 'you are the author — AI is the helper'],
  intro: 'It’s project time! Today you will write, illustrate and design your very own AI storybook.',
  cards: [
    { emoji: '✍️', title: 'You are the author', body: 'In this project, you make the big decisions: the hero, the place and the problem. AI suggests ideas and helps you polish, but the story is yours.' },
    { emoji: '🗺️', title: 'Plan the story', body: 'Every good story needs a character, a setting, a problem and an ending. Ask AI for three ideas for each, then choose or mix your favourites.' },
    { emoji: '🖼️', title: 'Four illustrations', body: 'Write an image prompt for each page with the same character description every time. That keeps your hero looking the same on every page.' },
    { emoji: '🏷️', title: 'Credit AI honestly', body: 'On the last page of your book, write what you did and what AI did. For example: the story is by Riya, the ideas were helped by AI, and the pictures were made with AI.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'AI as a story helper',
      tool: 'Kitabash AI helper',
      prompt: 'You are a children’s story coach. My hero is a girl called Tara who has a talking cricket bat. The story is set in a village during the monsoon. Suggest 3 ideas for the problem she has to solve. Do not write the story — I will write it.',
      reply: '1. The river is rising and the village’s cricket ground will flood before the big match.\n2. The talking bat loses its voice the day before the final.\n3. A lost puppy is stuck on the other side of a flooded road.',
      say: [
        'The learner gives the AI a role, the hero, the setting, and a clear limit.',
        'The AI suggests ideas but does not write the story — the author chooses.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Caught it! The AI changed our hero',
      tool: 'Kitabash AI helper',
      prompt: 'Please polish my page 3 so it reads smoothly, and keep everything else the same.',
      reply: 'Page 3: Tara and her loyal dog, Bolt, ran to the river bank…',
      note: 'WRONG — Tara’s helper is a talking cricket bat, not a dog. AI can forget or invent story details.',
      say: [
        'Watch closely: the AI replaced Tara’s talking cricket bat with a dog called Bolt.',
        'AI can forget details or invent new ones, so the author reads every line it changes.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Design your storybook in Canva',
      tool: 'Canva',
      steps: [
        'Open Canva (teacher-led, or your school or family account) and search for a storybook or presentation template.',
        'Make 6 pages: cover, 4 story pages, and a credits page.',
        'Add your illustrations: upload the pictures your teacher made, or (13+) use Canva’s AI image app if your account has it.',
        'Type your story text onto each page in a large, clear font.',
        'Add the credits page: who wrote it, and what AI helped with.',
        'Download as PDF or share the view-only link with your teacher.',
      ],
      say: [
        'Now open Canva and choose a storybook or presentation template.',
        'Add the cover, four story pages and a credits page.',
        'Place your pictures and story text, then download it as a PDF to show your family.',
      ],
    },
  ],
  build: {
    title: 'Build your storybook',
    intro: 'Under 13: your teacher makes the illustrations from your prompts and you design in Canva with your teacher or a school or family account. 13+: Gemini’s image creation or Canva’s AI image app, with a parent’s permission.',
    steps: [
      { title: 'Plan', text: 'Fill in the story map: hero, setting, problem, ending. Ask AI for three ideas for any part you are stuck on.' },
      { title: 'Write', text: 'Write the story yourself in four short pages (3–5 sentences each). Ask AI to polish only one page, then read every changed line.', tip: 'Check that AI did not change your hero’s name or details!' },
      { title: 'Illustrate', text: 'Write four image prompts with the same character description each time. Make the pictures (or send the prompts to your teacher).' },
      { title: 'Design', text: 'Put the cover, four pages and a credits page into a Canva template.' },
      { title: 'Credit and check', text: 'Write the credits page. Check: no real names of classmates, no real photos of people, no copied characters.' },
      { title: 'Share', text: 'Download the PDF and read it to your family tonight.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt that asks AI to help you plan (not write!) your story. Give it a role, describe your character and setting, ask for ideas for the problem, and say how long the book will be.',
      title: 'Prompt Lab: story helper',
      starter: 'Write me a story.',
      checks: [
        ['Give AI a role', ['you are', 'act as', 'pretend you are', 'imagine you are']],
        ['Describe your character', ['my hero', 'my character', 'called', 'named', 'character is']],
        ['Describe the setting', ['set in', 'setting', 'takes place', 'in a village', 'in a city', 'in a forest', 'in a school']],
        ['Ask for ideas — you stay the author', ['ideas', 'suggest', 'options', "don't write", 'do not write', 'i will write']],
        ['Say the length', ['pages', 'page', 'sentences', 'short']],
      ],
      exemplar: 'You are a children’s story coach. My hero is a boy called Kabir who has a robot kite. The story is set in a city during Makar Sankranti. Suggest 3 ideas for the problem he has to solve and 2 ideas for a happy ending. Do not write the story — I will write it myself in 4 short pages.',
      tools: CHAT,
    },
    {
      ai: 'Write ONE illustration prompt for page 1 of your storybook. Describe what the picture shows, the art style, the colours, and your hero in a way you can copy for every page. Ask for no words in the picture.',
      title: 'Prompt Lab: illustration prompt',
      starter: 'A picture of a boy.',
      checks: [
        ['What the picture shows', ['showing', 'picture of', 'illustration of', 'image of', 'scene of']],
        ['Art style', ['style', 'cartoon', 'watercolour', 'watercolor', 'storybook', 'crayon']],
        ['Colours or light', ['colour', 'color', 'bright', 'pastel', 'warm', 'sunny', 'light']],
        ['A hero description you can repeat', ['wearing', 'with short', 'with long', 'same', 'hair']],
        ['No words in the picture', ['no text', 'no words', 'without text', 'without words', 'no letters']],
      ],
      exemplar: 'A storybook illustration showing a 10-year-old boy with short curly hair, wearing a yellow kurta and red shoes, flying a small blue robot kite from a rooftop in an Indian city. Bright watercolour style with warm sunny colours and a clear blue sky. No text or words in the picture.',
      tools: ['Canva', 'Gemini'],
    },
    {
      order: 'Put the storybook steps in order',
      steps: ['Plan the hero, setting, problem and ending', 'Write the four pages yourself', 'Ask AI to polish one page and check every change', 'Make the four illustrations', 'Design the pages in Canva', 'Add the credits page and share'],
      why: 'Plan first, write it yourself, check what AI changes, then illustrate, design and credit.',
      title: 'Storybook steps',
    },
    {
      projectAct: true,
      title: 'Submit My AI Storybook',
      brief: 'Make a 6-page storybook (cover, 4 story pages, credits) that you wrote yourself with AI as a helper, with 4 illustrations and an honest credits page.',
      requirements: ['A hero, a setting, a problem and an ending', '4 story pages written by me', '4 illustrations with the same-looking hero', 'Designed in Canva (cover + 4 pages + credits)', 'An honest credits page: what I did and what AI did', 'No real names, photos of real people or copied characters'],
      reflection: 'What was the best idea AI gave you, and what did you change or reject? Did the AI make any mistakes you had to fix?',
      tips: ['Keep each page to 3–5 sentences.', 'Copy the same hero description into every image prompt.', 'Read every line the AI changes — it may forget details.'],
      minWords: 25,
    },
    {
      mcq: 'Aarav’s storybook pictures were made with AI, but he wrote the story himself. Which credit line is the most honest?',
      options: ['“By Aarav.”', '“Story by Aarav. Ideas helped by AI. Illustrations made with AI.”', '“Made by AI.”', 'No credits are needed for a school project.'],
      answer: 1,
      why: 'An honest credit says clearly who did what. Aarav wrote the story, and AI helped with ideas and pictures.',
      phase: 'probe',
      title: 'New situation: the credits page',
    },
  ],
  teacher: {
    explain:
      'This module project brings together the prompt formula, checking and honest use. The learner is the author: AI suggests (ideas, polishing one page) but never writes the whole story. The second check moment is “did AI change my details?” — AI often forgets or invents characters. Illustrations: learners write prompts; for under-13s the teacher generates the four images on the shared screen (or in a teacher Canva account) and shares them; 13+ may use Gemini’s image creation or Canva’s AI image app with a parent’s permission, if their account has it. Designing happens in Canva, teacher-led or through a school or family account. Finish with an honest credits page.',
    analogy: 'You are the film director and AI is the crew: the crew can suggest shots and build sets, but the director decides the story and signs the film.',
    vocab: [
      ['co-write', 'Write together, with you in charge.'],
      ['story map', 'A plan with the hero, setting, problem and ending.'],
      ['illustration', 'A picture that goes with a story.'],
      ['consistent', 'Looking the same every time, like a hero on every page.'],
      ['credit', 'Saying honestly who or what made each part.'],
    ],
    demo:
      'Share your screen. 1) Fill in a story map with the class (hero, setting, problem, ending), then send the story-helper prompt to the Kitabash AI helper and let the class vote on one idea. 2) Write two sentences of page 1 together, then ask AI to polish it and read the changes aloud — if it changed any detail, say “Caught it!” and undo it. 3) Generate one illustration in Canva or Gemini (your adult account) from a learner’s prompt, then run the same prompt with a changed hero description to show why consistency matters. 4) Open a Canva storybook or presentation template and build the cover and credits page live.',
    unplugged:
      'Story chain (5 min): the teacher says one sentence of a story. Each learner adds one sentence in turn, but the teacher secretly plays “AI” and twice adds a sentence that changes the hero’s name. Learners must shout “Caught it!” when they notice. Talk about why the author must check every change.',
    prompts: [
      ['Who is the author of your storybook?', 'Me — AI is only the helper.'],
      ['How do you keep your hero looking the same in every picture?', 'Use the same character description in every image prompt.'],
      ['What should you check after AI polishes a page?', 'That it did not change or invent details.'],
      ['What goes on the credits page?', 'What I did and what AI did.'],
      ['Why should you not use real photos of classmates?', 'Privacy — and they did not agree to it.'],
    ],
    support: 'Provide a story-map template with sentence starters (“One day, ___. But then, ___. So ___. In the end, ___.”) and a ready Canva template link.',
    stretch: 'Add a fifth page with a twist ending, or write the story in both Hindi and English.',
    mis: [
      ['If AI writes the story, it is still my project', 'You must write it. AI may suggest ideas and polish one page.'],
      ['The AI will keep my hero the same automatically', 'Repeat the same character description in every image prompt and check each picture.'],
      ['AI pictures do not need a credit', 'Always say which parts AI made.'],
      ['I can use a famous cartoon character', 'Make your own character — famous characters belong to other people.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Story chain with a sneaky “AI” who changes the hero’s name — learners shout “Caught it!”.' },
      { minutes: 5, stage: 'Watch + brief', doing: 'Play the project video and go through the project brief and rubric. Thumbs check: who is the author?' },
      { minutes: 6, stage: 'Live demo', doing: 'Teacher demo: story map, AI ideas vote, polish-and-check, one illustration, Canva cover and credits.' },
      { minutes: 8, stage: 'Prompt Lab', doing: 'Learners write the story-helper prompt and one illustration prompt; tick every checklist item. Storybook steps order game for early finishers.' },
      { minutes: 18, stage: 'Build (breakouts)', doing: 'Breakout rooms: plan, write four pages, write image prompts (under-13s post prompts in the chat; the teacher generates and shares images), design in Canva. Halfway check: everyone has a cover and page 1.' },
      { minutes: 6, stage: 'Peer review', doing: 'Pairs swap storybooks: two stars and a wish, and check the credits page is honest.' },
      { minutes: 7, stage: 'Show-and-tell', doing: 'Storybook gallery: three learners read one page aloud and show a picture; class poll for “best twist” and “best illustration prompt”.' },
      { minutes: 5, stage: 'Submit + probe', doing: 'Submit My AI Storybook with the reflection; New situation: the credits page.' },
    ],
    successCriteria: ['I can plan a story and stay the author while AI helps.', 'I can write consistent illustration prompts.', 'I can design a storybook in Canva.', 'I can credit AI honestly.'],
    homework: 'Read your storybook to your family. Ask them to guess which parts AI helped with, then show them your credits page.',
    exit: 'Name one thing you did and one thing AI did in your storybook.',
  },
  project: {
    title: 'My AI Storybook',
    brief: 'Co-write and design a 6-page illustrated storybook: you write the story, AI helps with ideas and pictures, and an honest credits page says who did what.',
    requirements: ['Story map: hero, setting, problem, ending', '4 story pages written by the learner', '4 illustrations with a consistent hero', 'Designed in Canva with a cover and credits page', 'Honest credits for AI help', 'Safe and original: no real people, no copied characters'],
    milestones: ['Story map and AI idea prompt', 'Four pages written and checked', 'Four illustrations made', 'Canva book designed, credited and shared'],
    rubric: [
      { criterion: 'Story', levels: ['No clear problem or ending', 'Has a beginning and end but the problem is unclear', 'Clear hero, setting, problem and ending', 'Engaging, original story with a satisfying twist or message'] },
      { criterion: 'Prompting', levels: ['Vague prompts', 'Prompts with some formula parts', 'Story and image prompts use role, details, style and limits', 'Prompts are precise and refined with follow-ups; hero is consistent'] },
      { criterion: 'Checking & honesty', levels: ['No credits; AI changes not checked', 'Credits are vague', 'Honest credits; AI changes checked', 'Credits explain exactly what AI did; mistakes caught and fixed are described'] },
      { criterion: 'Design', levels: ['Pages missing or hard to read', 'All pages present; text hard to read in places', 'Clear, readable pages with matching pictures', 'Polished, consistent design that makes the story come alive'] },
    ],
    extensions: ['Record yourself reading the story aloud as an audiobook', 'Make a bilingual (Hindi–English) edition', 'Add a “meet the author” page about how you used AI'],
  },
  files: [
    {
      name: 'l04-storybook-project-kit.md',
      title: 'Project kit: My AI Storybook',
      audience: 'student',
      content: `# My AI Storybook — Project Kit

## Which tool do I use?
${WHO}
Pictures: under 13, send your image prompts to your teacher, who makes the pictures for you. 13+, use Gemini's image creation or Canva's AI image app (if your account has it), with a parent's permission.
Design: Canva, with your teacher or your school or family account.

## The privacy and honesty rules
${PRIVACY} No real photos of people, no classmates' real names, no copied cartoon characters. Credit AI honestly.

## Story map
- Hero (name, age, one special thing): ______
- Setting (where and when): ______
- Problem: ______
- Ending: ______

## Story-helper prompt template
"You are a children's story coach. My hero is [description]. The story is set in [place and time]. Suggest 3 ideas for the problem and 2 ideas for an ending. Do not write the story — I will write it myself in 4 short pages."

## Polish prompt (one page only)
"Please fix the spelling and make this page read smoothly. Keep the names, events and details exactly the same: [your page]"
Then read every line. Did it change anything? ______

## Illustration prompt template (copy the hero part every time)
"A storybook illustration showing [HERO: a 10-year-old girl with two long plaits, wearing a green frock and white sneakers] [what is happening] in [place]. [Watercolour / cartoon] style with [bright / pastel] colours. No text or words in the picture."

## Checklist
- [ ] Story map done
- [ ] 4 pages written by me (3–5 sentences each)
- [ ] I checked every change AI made
- [ ] 4 pictures with the same-looking hero
- [ ] Canva book: cover + 4 pages + credits
- [ ] Credits page says what I did and what AI did
- [ ] Downloaded as PDF / link shared with my teacher

## Worked example
Title: "Kabir and the Robot Kite". Hero: Kabir, 10, with a small blue robot kite. Setting: a rooftop in Ahmedabad on Makar Sankranti. Problem: the kite's battery dies just before the kite-flying contest. Ending: Kabir builds a tail of solar-paper ribbons with his grandmother.
Credits: "Story written by Kabir. AI suggested the solar idea and polished page 2. Illustrations made with AI from Kabir's prompts."
`,
    },
    {
      name: 'l04-teacher-demo-script.md',
      title: 'Teacher demo script: storybook project',
      audience: 'teacher',
      content: `# Teacher Demo Script — Lesson 4 (Project)

## Before class
- Prepare a Canva storybook or presentation template and a view-only copy link.
- Under-13 learners will post their image prompts in the class chat; you generate the pictures in your own Canva or Gemini account and share them back.

## Prompts to type live
1. Story helper: "You are a children's story coach. My hero is a girl called Tara who has a talking cricket bat. The story is set in a village during the monsoon. Suggest 3 ideas for the problem she has to solve. Do not write the story — I will write it."
2. Polish: "Please polish this page so it reads smoothly, and keep everything else the same: [2 sentences written with the class]"
3. Illustration (in Canva's AI image app or Gemini, your adult account): "A storybook illustration showing a 10-year-old girl with two long plaits, wearing a green frock, holding a cricket bat with a smiling face, standing by a flooded village road. Bright watercolour style. No text or words in the picture."

## If the AI changes a detail or makes a mistake
Say "Caught it! The author always checks." Undo the change or send: "You changed the bat into a dog. Please keep the talking cricket bat."

## If a picture looks different from page to page
Show how repeating the exact hero description helps. Images will never be perfectly identical — that is fine; choose the closest.

## Credits page (model it)
"Story by [author's first name]. Ideas helped by AI. Illustrations made with AI."

## Marking
Use the 4-criterion rubric: Story, Prompting, Checking & honesty, Design.
`,
    },
  ],
});
