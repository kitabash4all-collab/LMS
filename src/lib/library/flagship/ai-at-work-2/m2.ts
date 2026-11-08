// AI at Work · Level 2 · Module 2 — AI for your role (lessons 5–8).
// Lessons 5–7: learners choose a role path inside the lesson, with worked examples for each path.
// Lesson 8: the capstone playbook that pulls the whole course together.
import { lesson } from '../kit.ts';

const CHATBOTS = ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot'];

// ───────────────────────────────── Lesson 5 ─────────────────────────────────
export const A5 = lesson(5, {
  title: 'AI for Sales and Customer Messages',
  objective: 'Choose your sales path and use AI to write lead follow-ups, handle common objections, reply on WhatsApp and email, and turn call notes into clear CRM notes, while following strict honesty rules.',
  concept: 'Honest sales messages',
  minutes: 60,
  hook: ['upgrade', 'Hi sir any update?? Offer ending soon!!!', 'Hello Arjun ji, thank you for visiting on Saturday. Here is the quote for the 3 study tables we discussed. Shall I keep them aside till Friday?'],
  intro: 'Today you choose your sales path and build a follow-up kit that sounds like you, sells honestly and never forgets a customer.',
  cards: [
    { emoji: '🧭', title: 'Choose your path', body: 'Pick the path closest to your work. Path A is a shop owner, path B is a sales rep who sells to companies, and path C is a service business such as a coaching centre or travel agency. Every task today has an example for each path, so use your own products and your own words.' },
    { emoji: '🔁', title: 'Follow-ups that feel personal', body: 'Many sales are lost simply because nobody followed up. Ask the AI for a short sequence, for example on day 3, day 7 and day 14, each with a new, useful reason to reply. Give it the real facts, and stop when the customer says no.' },
    { emoji: '🛡️', title: 'Handling objections', body: 'Common objections are price, timing, trust and a cheaper competitor. Ask the AI for calm replies that ask a question, show real value and offer a real option. Never let it invent discounts, warranties or reviews.' },
    { emoji: '🗂️', title: 'CRM notes in one minute', body: 'A CRM is simply where a team keeps notes about customers, even a shared sheet. After a call, paste your rough notes without phone numbers, and ask for need, budget, decision maker, objections, next step and date. Clear notes mean nobody forgets a promise.' },
    { emoji: '⚖️', title: 'The honesty rules', body: 'Use only true facts, prices and dates. No fake urgency, no fake reviews and no pretend discounts. Message only people who agreed to hear from you, and stop when they ask you to stop.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Path A: the price objection',
      tool: 'ChatGPT',
      prompt: 'I run a furniture shop in Pune. A customer says our study table (₹8,500) is too expensive; a website sells a similar one for ₹6,900. Our facts: solid sheesham wood, free delivery and fitting in Pune, 1-year warranty. Write a short, polite WhatsApp reply that asks one question and offers a real next step. Do not invent anything.',
      reply: 'Thank you for telling me, I completely understand! 😊 The website table is made of engineered wood, while ours is solid sheesham with free delivery and fitting in Pune, plus a 5-year warranty. May I ask what matters most to you: the price, the size, or how long it lasts? I can send you photos of the joints so you can compare.',
      note: 'Caught it twice: we do not know what the website table is made of, and our warranty is 1 year, not 5. Delete the first claim and correct the warranty before sending.',
      say: [
        'A shop owner gets the most common objection of all: it is too expensive.',
        'The prompt gives the real facts and asks for one question and a real next step.',
        'The reply is warm and helpful, but it says the other table is engineered wood, and we do not know that.',
        'It also promises a five-year warranty, when ours is one year, so we fix both before sending.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Path B: a follow-up sequence',
      tool: 'Claude',
      prompt: 'I sell office stationery to companies. I met an admin manager, [Client], at a trade fair on 3 Nov; she asked for a quote for 50 diaries and 200 pens, which I emailed on 4 Nov. Write a 3-email follow-up sequence (day 3, day 7, day 14), each under 70 words, each with a new helpful reason to reply. The last one should politely close the loop. No fake urgency.',
      reply: 'Day 3 — Subject: Your quote for diaries and pens\nHello [Client], I hope the quote reached you safely. Would it help if I sent a sample diary so your team can see the paper quality?\n\nDay 7 — Subject: Logo printing option\nHello [Client], a quick note: we can print your company logo on the diaries. Shall I add a version of the quote with and without the logo?\n\nDay 14 — Subject: Closing the loop\nHello [Client], I don’t want to fill your inbox. If now isn’t the right time, no problem at all. Just reply whenever you need stationery, and I’ll be happy to help.',
      say: [
        'A business sales rep asks for three follow-ups, each with a new and useful reason to reply.',
        'The first offers a sample, and the second offers logo printing, if that is a real service you offer.',
        'The last email politely closes the loop, with no pressure and no fake deadline.',
        'Before you save it, check that every offer in it is something you can really do.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Path C: rough call notes into a CRM note',
      tool: 'Gemini',
      prompt: 'Turn my rough call notes into a CRM note with these fields: Need, Budget, Decision maker, Objections, Next step, Follow-up date. Notes (phone number removed): parent called about class 10 maths batch for daughter, wants weekend batch, worried about fees, ok with up to 3k per month, father decides, asked for demo class, call back Thursday. Do not add anything that is not in the notes.',
      reply: 'Need: Class 10 Maths, weekend batch\nBudget: up to ₹3,000 per month\nDecision maker: Father\nObjections: Worried about fees\nNext step: Book a free demo class\nFollow-up date: Thursday',
      note: 'Caught it: the notes say “asked for demo class”, not “free”. If your demo is not free, this line becomes a promise you cannot keep. Change it to “Book a demo class”.',
      say: [
        'A coaching centre counsellor pastes rough notes from a parent’s call, without the phone number.',
        'In seconds the notes become a clean record with six clear fields.',
        'But one small word was added: free, and the parent never heard that from us.',
        'One extra word in a CRM note can turn into a promise, so we delete it.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Save replies and send them the right way',
      tool: 'WhatsApp Business · Gmail · Outlook · Google Sheets',
      steps: [
        'Save your checked replies as Quick Replies in WhatsApp Business (under business tools), or as Gmail or Outlook templates.',
        'Use [placeholders] for name, product and price, and fill them in yourself each time.',
        'Message only customers who gave you their number for this and expect to hear from you. Stop when they say stop.',
        'If an AI chatbot ever replies to customers for you, say clearly that it is an automated assistant, and hand over to a person for prices, complaints and promises.',
        'Keep a simple CRM sheet: Date, Customer code, Need, Next step, Follow-up date, Status. Sort it by follow-up date every morning.',
      ],
      say: [
        'Save your best checked replies as quick replies or email templates, with blanks for the details.',
        'Only message people who agreed to hear from you, and always respect a stop.',
        'If a bot ever replies for you, it must say it is a bot and pass hard questions to a person.',
        'A simple sheet sorted by follow-up date works as a CRM for a small team.',
      ],
    },
  ],
  build: {
    title: 'Build your follow-up kit',
    intro: 'Choose path A (shop owner), B (sales to companies) or C (service business). Use your own products with placeholders instead of customer details.',
    steps: [
      { title: 'Choose your path', text: 'Write your path, your product or service, and three true facts a customer cares about (for example: material, delivery, warranty, batch timings, inclusions).' },
      { title: 'Follow-up sequence', text: 'Ask for a 3-message sequence (day 3, 7, 14) with a new helpful reason each time and a polite close-the-loop message. A: after a shop visit. B: after a quote. C: after an enquiry call.' },
      { title: 'Top 3 objections', text: 'List the three objections you hear most (price, “I’ll think about it”, a cheaper competitor). Ask for a calm reply to each that asks a question and offers a real option.', tip: 'Give the AI your real facts and say “do not invent anything”.' },
      { title: 'CRM note', text: 'Take rough notes from a recent call (remove names and numbers) and turn them into the six-field CRM note. Check every word against your notes.' },
      { title: 'Honesty check', text: 'Read every message against the honesty rules: true facts only, no fake urgency, no fake reviews, a way to stop. Fix anything that fails.' },
      { title: 'Save the kit', text: 'Save the messages as quick replies or email templates and copy them into your follow-up kit file.' },
    ],
  },
  acts: [
    {
      ai: 'Choose your path and write a prompt for a 3-message follow-up sequence to a lead. Say who the customer is (with a placeholder), the real facts of what happened, the timing of each message, the length, a new helpful reason each time, an honesty rule, and how the last message should end.',
      title: 'Prompt Lab: a follow-up sequence',
      starter: 'Write follow-up messages for a customer.',
      checks: [
        ['Say who the lead is', ['customer', 'client', 'lead', 'parent']],
        ['Give the real facts of what happened', ['quote', 'visited', 'met', 'asked for', 'enquiry', 'enquired']],
        ['Give the timing', ['day 3', 'day 7', 'day 14', '3 messages', 'three messages', 'sequence']],
        ['Set the length', ['words', 'short', 'lines']],
        ['A new helpful reason each time', ['new reason', 'helpful', 'useful', 'value']],
        ['An honesty rule', ['no fake', 'do not invent', 'don\'t invent', 'no pressure', 'only true', 'no false']],
        ['How the last message ends', ['close the loop', 'last message', 'last one', 'no reply', 'stop']],
      ],
      exemplar: 'I run a coaching centre. A parent, [Parent name], enquired on Monday about our Class 10 Maths weekend batch and asked for the fee details, which I sent the same day. Write a 3-message WhatsApp follow-up sequence (day 3, day 7, day 14), each under 50 words, each with a new helpful reason to reply, such as a demo class date or the batch timetable. Use only true facts I give you; no fake urgency and do not invent offers. The last message should politely close the loop.',
      tools: CHATBOTS,
    },
    {
      ai: 'Write a prompt that turns rough call notes into a CRM note. Name the fields (need, budget, decision maker, objections, next step, follow-up date), say that personal details were removed, tell the AI not to add anything, and ask it to flag anything unclear.',
      title: 'Prompt Lab: rough notes to a CRM note',
      starter: 'Make my notes neat.',
      checks: [
        ['Name the main fields', ['need', 'budget', 'next step']],
        ['Include a follow-up date', ['follow-up date', 'follow up date', 'date']],
        ['Include decision maker and objections', ['decision maker', 'who decides', 'objection', 'concern']],
        ['Say personal details are removed', ['removed', 'no phone', 'without the phone', 'customer code', 'no personal']],
        ['Tell the AI not to add anything', ['do not add', 'don\'t add', 'only what', 'not in the notes', 'do not invent']],
        ['Ask it to flag unclear points', ['flag', 'unclear', 'missing', 'not sure']],
      ],
      exemplar: 'Turn my rough call notes into a CRM note with these fields: Need, Budget, Decision maker, Objections, Next step, Follow-up date. I removed the phone number and used the customer code C-214. Do not add anything that is not in the notes. If something is unclear or missing, write “Not mentioned” and flag it. Notes: [paste notes].',
      tools: CHATBOTS,
    },
    {
      sort: 'Honest sales message, or rewrite it?',
      buckets: ['Honest: OK to send', 'Not honest: rewrite it'],
      items: [
        ['“Only 2 left in stock!” (you have 40)', 1],
        ['“Prices go up on 1 Dec, as the supplier has announced”', 0],
        ['“Rated 5 stars by 1,000+ customers” (you have 12 reviews)', 1],
        ['“Would Thursday or Friday suit you for a demo?”', 0],
        ['“This is my last follow-up; reply any time you need us”', 0],
        ['“Our competitor’s tables break within a month” (no proof)', 1],
        ['“Here are two photos of the actual table you will receive”', 0],
        ['Writing a Google review as a “happy customer” yourself', 1],
      ],
      why: 'True deadlines, real photos, clear questions and polite endings are good selling. Fake scarcity, inflated reviews, unproven attacks on competitors and fake reviews are dishonest, and can break consumer rules.',
      hint: 'Ask: is it true, and could I prove it if asked?',
    },
    {
      match: 'Match each objection to a good way to answer it',
      pairs: [
        ['“It’s too expensive”', 'Ask what matters most, show real value, offer a real cheaper option if one exists'],
        ['“I’ll think about it”', 'Ask what is holding them back and agree a follow-up date'],
        ['“Another shop is cheaper”', 'Compare true facts politely; never run down the competitor'],
        ['“Not the right time”', 'Ask when would suit them and set a reminder'],
        ['“I don’t know your company”', 'Share genuine proof: real reviews, a sample, a visit or a demo'],
      ],
      why: 'Good objection handling asks questions and offers real options. It never invents facts, pressure or proof.',
    },
    {
      mcq: 'Meera has 300 numbers from a trade-fair sign-up sheet where people ticked “send me offers”, and 200 numbers from a “leads list” she was offered for sale. Whom should she message on WhatsApp?',
      options: ['All 500; more messages means more sales', 'Only the 300 who agreed, with an easy way to stop messages', 'Only the 200 bought numbers, since they are new', 'Nobody; WhatsApp is never allowed for business'],
      answer: 1,
      why: 'Message people who agreed to hear from you, and make it easy to stop. Bought lists mean messaging strangers who never agreed, which is spam and can get your number blocked.',
      title: 'Who can you message?',
    },
    {
      mcq: 'Your shop’s WhatsApp auto-reply assistant gets this message: “Are you a real person? Can you give me 20% off?” What should the assistant do?',
      options: ['Say it is a real person, so the customer trusts it', 'Say honestly that it is an automated assistant, and pass the discount question to a person', 'Offer 20% off to close the sale', 'Ignore the message'],
      answer: 1,
      why: 'Customers deserve to know when they are talking to a bot. Prices, discounts, complaints and promises go to a person who can decide.',
      title: 'New situation: “Are you a real person?”',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Module 2 is about the learner’s own role. Today: sales and customer messages. Learners choose a path (A shop owner, B sales to companies, C service business) and every task has an example for each path. Four skills: follow-up sequences, objection replies, WhatsApp/email replies saved as quick replies or templates, and CRM notes from rough call notes. The heart of the lesson is the honesty rules: true facts only, no fake urgency, no fake reviews, message only people who agreed, stop when asked, and a bot must say it is a bot. Caught mistakes: an invented warranty and competitor claim, and the word “free” slipped into a CRM note.',
    analogy: 'AI in sales is like a very fast assistant who has read every sales book but has never seen your shop: great at words, but you tell it the facts and you sign every message.',
    vocab: [
      ['lead', 'A person or company that has shown interest and might buy.'],
      ['follow-up sequence', 'A planned set of messages, like day 3, day 7 and day 14, each with a new reason to reply.'],
      ['objection', 'A reason a customer gives for not buying yet, like price or timing.'],
      ['CRM', 'Where a team keeps customer notes and next steps; even a shared sheet can be a simple CRM.'],
      ['opt-in', 'When a customer agrees to receive your messages.'],
      ['fake urgency', 'Pressure that is not true, like “only 2 left” when you have plenty.'],
    ],
    demo: '1) Ask learners to type their path (A, B or C) in the chat. 2) Paste the path A objection prompt into ChatGPT; read the reply and hunt for anything not in our facts (competitor material, warranty length). If the AI stays accurate, show the video version. 3) Paste the path B sequence prompt into Claude; ask “Is every offer something we really do?” 4) Paste the path C rough notes into Gemini; look for added words like “free”. 5) Show WhatsApp Business quick replies (or a Gmail template) and the simple CRM sheet sorted by follow-up date. 6) Read the honesty rules aloud and ask for a thumbs up on each.',
    unplugged: 'Objection ping-pong (5 min): the teacher plays a customer and throws objections (“too expensive”, “I’ll think about it”, “the shop next door is cheaper”). Volunteers have 10 seconds to reply out loud with a question, not a speech. The class scores each reply: did it ask a question? Was it honest? Then say: “Today the AI will draft these for you, and you will check them for honesty.”',
    prompts: [
      ['What makes a good follow-up message?', 'A new, helpful reason to reply, the real facts, short, and no pressure.'],
      ['Name two things the AI must never invent in a sales message.', 'Any two: discounts, warranties, reviews, stock levels, deadlines, competitor claims.'],
      ['What is a CRM, in plain words?', 'Where a team keeps customer notes and next steps, even a shared sheet.'],
      ['Whom can you message on WhatsApp for business?', 'People who agreed to hear from you; stop when they ask.'],
      ['What must an automated assistant say if asked whether it is a person?', 'That it is an automated assistant, and offer a person.'],
    ],
    support: 'Give learners the ready prompts from the kit for their path; they only change the facts in brackets and check the reply against the honesty rules.',
    stretch: 'Ask the AI to rewrite the follow-up sequence in Hindi or Marathi (check with a fluent speaker) and to suggest one honest reason to reply for each month of the year (festivals, monsoon, exams, year end).',
    mis: [
      ['A pushy message sells more.', 'Helpful, honest follow-ups build trust and repeat customers; pressure loses them.'],
      ['If the AI wrote a claim, it must be true.', 'The AI does not know your products. Check every fact, number and promise.'],
      ['Bought number lists are fine for WhatsApp.', 'Message only people who agreed to hear from you.'],
      ['A CRM is expensive software.', 'A shared sheet with dates and next steps is a simple CRM.'],
    ],
    successCriteria: ['I can write a follow-up sequence with a new helpful reason in each message.', 'I can get calm, honest replies to common objections and remove invented claims.', 'I can turn rough call notes into a CRM note without adding anything.', 'I can follow the honesty rules for sales messages, opt-in and bots.'],
    homework: 'Finish your follow-up kit and use one sequence for a real lead this week (with placeholders filled in by you). Note any reply you got.',
    exit: 'Write one sales line the AI might suggest that breaks the honesty rules, and rewrite it honestly.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Objection ping-pong” (see Unplugged).' },
      { minutes: 5, stage: 'Watch + choose your path', doing: 'Play the lesson video. Poll: everyone types A, B or C in the chat; form breakout groups by path.' },
      { minutes: 7, stage: 'Live demo', doing: 'Path A objection (invented warranty catch), path B sequence, path C CRM note (“free” catch), quick replies and the CRM sheet.' },
      { minutes: 9, stage: 'Prompt Labs', doing: 'Prompt Lab: a follow-up sequence, then rough notes to a CRM note. Test in two chatbots and compare.' },
      { minutes: 13, stage: 'Build along (path groups)', doing: 'Breakout rooms by path: build steps 1–5. Each group shares one objection reply in the chat before returning.' },
      { minutes: 7, stage: 'Team games', doing: 'Quick competition: “Honest or rewrite?” sort in two teams, then the objection match as a speed round, then “Who can you message?” as a poll.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'One learner from each path reads a before (pushy) and after (honest) message.' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: “Are you a real person?” (individual).' },
      { minutes: 4, stage: 'Wrap-up', doing: 'Exit ticket; homework: save the kit and use one sequence for real.' },
    ],
  },
  files: [
    {
      name: 'l05_follow_up_kit.md',
      title: 'AI for sales and customer messages (project kit)',
      audience: 'student',
      content: `# AI for sales and customer messages — Lesson 5 project kit

**Project: a follow-up kit.** A 3-message follow-up sequence, replies to your top 3 objections, a CRM note template and your saved quick replies, all checked against the honesty rules.

## 1. Privacy first
- Use [Customer name], [Client], customer codes like C-214. Never paste phone numbers, addresses, Aadhaar/PAN or payment details into an AI tool.
- Do not paste your company's confidential price lists or client contracts into a personal AI account.

## 2. The honesty rules (tick every message)
- [ ] Only true facts, prices, dates and stock levels
- [ ] No fake urgency ("only 2 left", "today only") unless it is true
- [ ] No fake or inflated reviews; never write reviews yourself
- [ ] No unproven claims about competitors
- [ ] Only message people who agreed to hear from you; stop when asked
- [ ] A bot says it is a bot and passes prices, complaints and promises to a person

## 3. Choose your path
| Path | Who | Example situation |
|---|---|---|
| A | Shop owner (furniture, electronics, clothing, pharmacy items, hardware) | Customer visited on Saturday, liked 3 study tables, said "too expensive" |
| B | Sales to companies (stationery, packaging, software, uniforms) | Admin manager asked for a quote at a trade fair; no reply since |
| C | Service business (coaching centre, travel agency, interior studio, salon) | Parent enquired about a weekend batch; worried about fees |

## 4. Prompt templates
**Follow-up sequence**
> I run [business]. [Customer] [what happened: visited / asked for a quote / enquired] on [date] about [product/service]. Write a 3-message [WhatsApp/email] follow-up sequence (day 3, day 7, day 14), each under [50/70] words, each with a new helpful reason to reply. Use only these true facts: [facts]. No fake urgency and do not invent offers. The last message should politely close the loop.

**Objection reply**
> A customer says "[objection]". Our true facts: [facts]. Write a short, polite reply that asks one question and offers a real next step. Do not invent anything, and do not criticise competitors.

**CRM note**
> Turn my rough call notes into a CRM note with these fields: Need, Budget, Decision maker, Objections, Next step, Follow-up date. I removed personal details and used the code [C-xxx]. Do not add anything that is not in the notes. If something is unclear or missing, write "Not mentioned" and flag it. Notes: [notes]

**Reply to a message**
> Write a friendly reply to this customer message. My answer is: [your answer in a few words]. Use only these facts: [facts]. Under [40] words. Message: [paste message without personal details]

## 5. Worked examples (one per path)
**Path A — price objection.** Facts: solid sheesham, free delivery and fitting in Pune, 1-year warranty.
- AI draft said the competitor's table was engineered wood (unknown) and gave a 5-year warranty (wrong).
- **Checked reply:** Thank you for telling me, I understand! Ours is solid sheesham with free delivery and fitting in Pune and a 1-year warranty. May I ask what matters most to you: the price, the size, or how long it lasts? I can send photos of the joints so you can compare.

**Path B — follow-up after a quote.** Day 3: offer a sample diary. Day 7: logo printing option (only if you really offer it). Day 14: close the loop politely.

**Path C — CRM note.**
| Field | Note |
|---|---|
| Need | Class 10 Maths, weekend batch |
| Budget | Up to ₹3,000 per month |
| Decision maker | Father |
| Objections | Worried about fees |
| Next step | Book a demo class (AI had added "free": deleted, because the notes did not say so) |
| Follow-up date | Thursday |

## 6. My kit
| Item | My checked version |
|---|---|
| Path and product | |
| 3 true facts customers care about | |
| Follow-up 1 (day 3) | |
| Follow-up 2 (day 7) | |
| Follow-up 3 (day 14, close the loop) | |
| Objection 1 + reply | |
| Objection 2 + reply | |
| Objection 3 + reply | |
| CRM note template | |

## 7. Saving and sending
- WhatsApp Business: Quick Replies (under business tools). Gmail/Outlook: templates.
- Simple CRM sheet columns: Date · Customer code · Need · Next step · Follow-up date · Status. Sort by follow-up date each morning.
- Optional: Zapier or Power Automate can add a row to your CRM sheet when a web form is filled. Check the current free plan, and keep a person reading before any message goes out.
`,
    },
    {
      name: 'l05_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 5',
      audience: 'teacher',
      content: `# Lesson 5 demo script: sales and customer messages

**Before class:** open ChatGPT, Claude and Gemini (or any two). Prepare three breakout rooms: A shop owner, B sales to companies, C service business.

## Step 1 — Path A, type exactly (ChatGPT)
> I run a furniture shop in Pune. A customer says our study table (₹8,500) is too expensive; a website sells a similar one for ₹6,900. Our facts: solid sheesham wood, free delivery and fitting in Pune, 1-year warranty. Write a short, polite WhatsApp reply that asks one question and offers a real next step. Do not invent anything.

Ask: "Is there anything here that is not in our facts?"
- **Competitor claim or a longer warranty appears:** "This is how small lies get sent. Delete and correct."
- **A discount appears:** "We never offered one. Delete it."
- **Accurate:** show the video version: "It doesn't happen every time; we check every time."

## Step 2 — Path B (Claude)
Paste the follow-up sequence prompt from the video. Ask: "Do we really offer samples and logo printing? If not, those lines go."

## Step 3 — Path C (Gemini)
Paste the CRM prompt with the rough notes. Look for added words ("free", "confirmed", "will join"). "One extra word in a CRM note becomes a promise someone else keeps for you."

## Step 4 — Saving and sending
Show WhatsApp Business quick replies or a Gmail template, and a CRM sheet sorted by follow-up date. Read the honesty rules aloud.

## If something goes wrong
- **The AI writes very long messages:** add "under 50 words" and "WhatsApp style".
- **The AI uses pressure words ("hurry", "last chance"):** add "no pressure, no fake urgency".
- **A learner wants to paste a real customer chat:** remove names and numbers first, or describe it.

## Answer key
- Sort, honest: supplier price rise (true), demo question, last follow-up, real photos. Rewrite: fake stock, inflated rating, competitor attack, self-written review.
- Match: as in the activity.
- Who can you message? B. Probe: B.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 6 ─────────────────────────────────
export const A6 = lesson(6, {
  title: 'AI for Teachers and Trainers',
  objective: 'Choose your teaching path and use AI to draft a lesson plan, worksheets at three levels, a rubric and feedback comments, then check every answer, fact and level for accuracy and age-fit before you use them.',
  concept: 'Lesson packs, checked',
  minutes: 60,
  hook: ['word', '1 topic → 3 levels', 'one worksheet for every learner in the room, every answer checked by you'],
  intro: 'Today you choose your teaching path and build one complete lesson pack with AI, then check it like an examiner.',
  cards: [
    { emoji: '🧭', title: 'Choose your path', body: 'Path A is a school teacher, path B is a tutor or coaching centre, and path C is a workplace or skills trainer. Every task today has an example for each path. Use your own topic, your own learners and your own syllabus.' },
    { emoji: '🗓️', title: 'A lesson plan in minutes', body: 'Give the AI the class or group, the subject, the topic, the time and one clear goal. Ask for a starter, a main activity, practice and a quick check at the end. Then shape it to your learners, your board and your own style.' },
    { emoji: '🪜', title: 'Three levels, one topic', body: 'Differentiated means the same topic at different levels: support, core and challenge. Ask for three short versions of a worksheet, with an answer key and working. Every learner practises the same idea at the right level.' },
    { emoji: '🧾', title: 'Rubrics and feedback comments', body: 'A rubric shows what good work looks like at each level. The AI can draft one, and can turn your rough notes into kind, specific feedback. Use a placeholder instead of the student’s name, and add your own personal touch.' },
    { emoji: '🔍', title: 'Check accuracy and age-fit', body: 'AI answer keys are often wrong, so solve every question yourself. Check the reading level, the examples and the cultural fit, and match it to your own syllabus. Students’ names, marks and photos never go into a personal AI account.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Path A: a three-level worksheet with a wrong answer',
      tool: 'Gemini',
      prompt: 'You are an experienced Class 6 maths teacher in India. Make a short worksheet on adding fractions with 3 levels: Support (same denominators), Core (one denominator is a multiple of the other), Challenge (word problems with Indian examples). 3 questions per level, simple English, with an answer key.',
      reply: 'Support: 1) 1/5 + 2/5  2) 3/8 + 1/8  3) 2/7 + 4/7\nCore: 1) 1/2 + 1/4  2) 2/3 + 1/6  3) 3/4 + 1/8\nChallenge: 1) Riya read 1/4 of a storybook on Monday and 3/8 on Tuesday. How much has she read?  2) A water tank is 1/3 full. Aarav adds 1/6 more. How full is it now?  3) Meera walked 1/2 km to school and 1/4 km to the market. How far did she walk?\n\nAnswer key: Support 3/5, 1/2, 6/7 · Core 3/4, 5/6, 4/12 = 1/3 · Challenge 5/8, 1/2, 3/4 km',
      note: 'Caught it: 3/4 + 1/8 is 7/8, not 4/12. The AI added the tops and the bottoms. Solve every answer yourself before printing.',
      say: [
        'A Class 6 teacher asks for one worksheet on adding fractions, at three levels.',
        'The questions are clear, and the word problems use familiar names and situations.',
        'But look at the last core answer: three quarters plus one eighth is not four twelfths.',
        'The right answer is seven eighths, so we solve every answer ourselves before printing.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Path B: rough notes into kind, specific feedback',
      tool: 'Claude',
      prompt: 'Turn my rough notes into kind, specific feedback on a Class 10 science answer. Use [Student] instead of a name. Notes: heart diagram labelled well, explanation of double circulation missing, good effort, needs keywords like oxygenated. 3 sentences: one strength, one improvement, one next step.',
      reply: '[Student], your labelled diagram of the heart is clear and accurate — well done. Your answer still needs an explanation of double circulation: say how blood passes through the heart twice in one full cycle. Next step: rewrite one answer using the keywords “oxygenated” and “deoxygenated”.',
      say: [
        'A tutor turns rough marking notes into feedback a student can act on.',
        'The placeholder means no student name ever goes into the chatbot.',
        'The comment has one strength, one improvement and one next step.',
        'The tutor still reads it for accuracy and adds a personal line before sharing it.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Path C: a quiz built only from your own material',
      tool: 'NotebookLM',
      steps: [
        'Open NotebookLM and create a new notebook.',
        'Add your source: your own training handout, chapter notes, or a public document you are allowed to use (no learner data; confidential company documents only in a company-approved tool).',
        'Ask: “Make 8 quiz questions only from these sources, with answers, and show where each answer comes from.”',
        'Click the citation numbers to see the exact part of your source behind each answer.',
        'Still answer each question yourself, and check the language suits your learners.',
      ],
      say: [
        'A workplace trainer wants a quiz that comes only from the training handout.',
        'NotebookLM answers from the sources you add, and shows where each answer came from.',
        'Click the citations to check, and still answer every question yourself.',
      ],
    },
    {
      kind: 'steps',
      heading: 'The accuracy and age-fit check',
      tool: 'Paper · your answer key',
      steps: [
        'Solve every question yourself and compare with the AI’s answer key.',
        'Read it as your weakest reader would: are any words too hard for the age?',
        'Check the names, foods, places and money: do they feel familiar and include everyone?',
        'Compare with your own syllabus or training goals: is anything not taught yet?',
        'Check facts, dates and definitions against your textbook or handout.',
        'Label it honestly if your school or company asks you to mark AI-assisted materials.',
      ],
      say: [
        'Before any AI material reaches learners, run this six-point check.',
        'Solve every answer, read it as your weakest reader, and check the examples feel familiar.',
        'Match it to your syllabus, and check facts against your own book.',
      ],
    },
  ],
  build: {
    title: 'Build one lesson pack',
    intro: 'Choose path A (school teacher), B (tutor or coaching) or C (workplace trainer). Pick one topic you will really teach in the next two weeks.',
    steps: [
      { title: 'Choose path and topic', text: 'A: for example Class 6 fractions or Class 8 photosynthesis. B: Class 10 exam practice on one chapter. C: “writing clear emails” or “Excel basics” for new staff.' },
      { title: 'Lesson plan', text: 'Ask for a plan with your group, topic, time, one goal, a starter, a main activity, practice and a quick check. Change at least two things to fit your learners.' },
      { title: 'Three-level worksheet', text: 'Ask for support, core and challenge versions with an answer key and working. Solve every question yourself and mark any wrong answers.', tip: 'Ask for local, familiar examples and simple English, or a Hindi version checked by a fluent speaker.' },
      { title: 'Rubric', text: 'Ask for a 4-level rubric with 3 or 4 criteria for the main task. Make sure every level describes what you would actually see in the work.' },
      { title: 'Feedback comments', text: 'Turn rough notes for two pieces of work into feedback using [Student]. One strength, one improvement, one next step.' },
      { title: 'Check and pack', text: 'Run the six-point accuracy and age-fit check, then put everything into your lesson pack file.' },
    ],
  },
  acts: [
    {
      ai: 'Choose your path and write a prompt for a lesson plan. Give the AI a role, your learners and their level, the topic, the time, one clear goal, the parts you want (starter, activity, practice, quick check), and what makes it fit your learners.',
      title: 'Prompt Lab: a lesson plan',
      starter: 'Make a lesson plan on fractions.',
      checks: [
        ['Give the AI a role', ['teacher', 'trainer', 'tutor']],
        ['Describe the learners and level', ['class', 'grade', 'new staff', 'beginners', 'learners', 'students']],
        ['Name the topic', ['topic', 'about', 'lesson on', 'session on']],
        ['Give the time', ['minutes', 'minute', 'hour', 'period']],
        ['State one clear goal', ['by the end', 'goal', 'objective', 'able to']],
        ['Ask for the parts', ['starter', 'activity', 'practice', 'quick check', 'exit']],
        ['Make it fit your learners', ['simple english', 'indian', 'familiar', 'local', 'age']],
      ],
      exemplar: 'You are an experienced Class 6 maths teacher in India. Plan a 40-minute lesson on adding fractions with different denominators. Goal: by the end, students can add two fractions where one denominator is a multiple of the other. Include a 5-minute starter, a short demo, pair practice and a 3-question quick check. Use simple English and familiar Indian examples like rotis and laddoos.',
      tools: CHATBOTS,
    },
    {
      ai: 'Write a prompt for a worksheet at three levels on your topic. Ask for the three levels by name, the number of questions, an answer key with working, the right reading level for the age, and familiar local examples.',
      title: 'Prompt Lab: a three-level worksheet',
      starter: 'Make a worksheet.',
      checks: [
        ['Ask for three levels', ['three levels', '3 levels', 'support', 'challenge']],
        ['Say how many questions', ['questions']],
        ['Ask for an answer key', ['answer key', 'answers']],
        ['Ask for working or steps', ['working', 'steps', 'method', 'show how']],
        ['Set the reading level or age', ['simple english', 'reading level', 'age', 'class', 'grade']],
        ['Ask for familiar examples', ['indian', 'local', 'familiar', 'rupee']],
      ],
      exemplar: 'Make a Class 6 worksheet on adding fractions with 3 levels: Support (same denominators), Core (one denominator is a multiple of the other) and Challenge (word problems). 3 questions per level. Include an answer key that shows the working for each question. Use simple English for 11-year-olds and familiar Indian examples like sharing laddoos or rupees.',
      tools: CHATBOTS,
    },
    {
      sort: 'Teacher privacy: OK to paste into a personal AI account, or never?',
      buckets: ['OK to paste', 'Never paste (use placeholders or a school-approved tool)'],
      items: [
        ['The chapter topic and the learning goal', 0],
        ['A list of students with their marks', 1],
        ['Your own lesson notes', 0],
        ['A student’s essay with their name and roll number', 1],
        ['A photo of your class', 1],
        ['Rough feedback notes that say [Student] instead of a name', 0],
        ['A parent’s complaint email with their phone number', 1],
        ['A public syllabus outline', 0],
      ],
      why: 'Topics, goals, your own notes and public documents are fine. Students’ names, marks, work, photos and parents’ details are personal data and stay out of personal AI accounts.',
    },
    {
      match: 'Match each check to the problem it catches',
      pairs: [
        ['Solve every answer yourself', 'A wrong answer key, like 3/4 + 1/8 = 4/12'],
        ['Read it as your weakest reader', 'Words that are too hard for the age'],
        ['Compare with your syllabus', 'Topics your learners have not been taught yet'],
        ['Check names, foods and places', 'Examples that feel foreign or leave learners out'],
        ['Use citations in NotebookLM', 'Answers that did not come from your own material'],
      ],
      why: 'Each check catches a different kind of AI mistake: wrong maths, wrong level, wrong syllabus, poor fit and made-up facts.',
    },
    {
      mcq: 'An essay from one of your students looks AI-written. What should you do?',
      options: ['Run it through an AI detector and give it zero', 'Talk to the student, ask them to explain their work and their process, and follow your school’s policy', 'Ignore it completely', 'Post it in the staff WhatsApp group as an example'],
      answer: 1,
      why: 'AI detectors are not reliable proof. A calm conversation about the work, and your school’s policy, are fairer. Never share a student’s work publicly.',
      title: 'Honest use: the suspicious essay',
    },
    {
      mcq: 'You are a trainer. An AI quiz on your company’s leave policy says staff get 15 sick days; the real policy says 10. What is the best fix for next time?',
      options: ['Trust the AI and update the policy', 'Build quizzes only from the actual policy (in NotebookLM or a company-approved AI tool), ask where each answer comes from, and still check every answer', 'Remove all numbers from quizzes', 'Ask colleagues to guess the right number'],
      answer: 1,
      why: 'Ground the quiz in your real source and check it. Internal policies may be confidential, so use a company-approved tool for them.',
      title: 'New situation: the wrong sick-leave number',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Today learners who teach or train build one complete lesson pack: a plan, a three-level worksheet with an answer key, a rubric and feedback comments. They choose a path: A school teacher, B tutor or coaching centre, C workplace trainer. AI drafts fast, but teaching materials must be accurate and fit the learners, so the lesson centres on a six-point check: solve every answer, read as the weakest reader, check examples, match the syllabus, check facts, label honestly. The caught mistake is a wrong answer key (3/4 + 1/8 = 4/12). Privacy: no student names, marks, work or photos in personal accounts; use [Student].',
    analogy: 'AI is like a student teacher who prepares your materials overnight: keen and quick, but you check the answer key before anything goes on the board.',
    vocab: [
      ['lesson plan', 'The steps of a lesson with times: starter, main activity, practice, check.'],
      ['differentiated', 'The same topic at different levels, so every learner works at the right level.'],
      ['answer key', 'The correct answers, ideally with working, for checking learners’ work.'],
      ['rubric', 'A table describing what work looks like at each level for each criterion.'],
      ['age-fit', 'Whether the words, examples and difficulty suit your learners’ age.'],
      ['grounded', 'When the AI answers only from sources you gave it, like NotebookLM.'],
    ],
    demo: '1) Ask learners to type A, B or C. 2) Paste the Class 6 fractions worksheet prompt into Gemini. 3) Ask the class to solve the core questions on paper; compare with the key. If the AI’s key is correct, show the 3/4 + 1/8 = 4/12 version from the video. 4) Paste the feedback prompt into Claude with [Student]; point out there is no name. 5) In NotebookLM, add a short handout you wrote and ask for 5 quiz questions with citations; click a citation. 6) Read the six-point check aloud.',
    unplugged: 'Spot the teacher’s error (5 min): show five “answer key” lines, two of them wrong (for example 1/2 + 1/3 = 2/5 and “The capital of Australia is Sydney”). Pairs race to find and fix the errors. Say: “AI makes exactly these mistakes in answer keys. Today you are the examiner.”',
    prompts: [
      ['What five things should a lesson plan prompt include?', 'Learners/level, topic, time, one goal, and the parts (starter, activity, practice, check).'],
      ['What does differentiated mean?', 'The same topic at different levels: support, core, challenge.'],
      ['What is the first check on any AI answer key?', 'Solve every question yourself.'],
      ['How do you give feedback with AI without sharing a name?', 'Use [Student] and add the name yourself afterwards.'],
      ['Is an AI detector enough to prove a student cheated?', 'No. Talk with the student and follow the school’s policy.'],
    ],
    support: 'Give learners the ready prompts from the kit for their path; they change only the topic and level, then focus on the six-point check.',
    stretch: 'Ask for a Hindi version of the support worksheet and have a fluent speaker check it, or make a 5-slide visual version of the lesson in Canva and label it as AI-assisted.',
    mis: [
      ['AI maths and facts are always right.', 'Answer keys are often wrong. Solve every answer.'],
      ['The AI knows my board’s syllabus.', 'It may guess. Compare with your own syllabus.'],
      ['Using a first name only is fine.', 'Use [Student]. Names, marks and work stay out of personal accounts.'],
      ['AI detectors prove cheating.', 'They are unreliable; talk to the student and follow policy.'],
    ],
    successCriteria: ['I can get a lesson plan from AI and adapt it to my learners.', 'I can make a worksheet at three levels with an answer key, and check every answer.', 'I can draft a rubric and feedback comments without sharing student details.', 'I can check AI materials for accuracy, age-fit and syllabus fit.'],
    homework: 'Finish your lesson pack, run the six-point check, and use one part of it with real learners. Note one thing you changed after the check.',
    exit: 'Name one mistake you would expect in an AI answer key, and how you would catch it.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Spot the teacher’s error” pair race (see Unplugged).' },
      { minutes: 5, stage: 'Watch + choose your path', doing: 'Play the lesson video. Everyone types A, B or C; form path groups.' },
      { minutes: 7, stage: 'Live demo', doing: 'Three-level worksheet and the wrong key catch, feedback with [Student], NotebookLM quiz with citations, the six-point check.' },
      { minutes: 8, stage: 'Prompt Labs', doing: 'Prompt Lab: a lesson plan, then a three-level worksheet. Paste into a chatbot and test.' },
      { minutes: 14, stage: 'Build along (path groups)', doing: 'Breakout rooms by path: build steps 1–6. Partners solve each other’s answer keys.' },
      { minutes: 7, stage: 'Team games', doing: 'Quick competition: the privacy sort, then the check match, then the suspicious-essay question as a poll.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'One learner per path shows a worksheet level and the error their check caught.' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: the wrong sick-leave number (individual).' },
      { minutes: 4, stage: 'Wrap-up', doing: 'Exit ticket; homework: use one part of the pack with real learners.' },
    ],
  },
  files: [
    {
      name: 'l06_lesson_pack_kit.md',
      title: 'AI for teachers and trainers (project kit)',
      audience: 'student',
      content: `# AI for teachers and trainers — Lesson 6 project kit

**Project: one lesson pack.** A lesson plan, a three-level worksheet with a checked answer key, a rubric and two feedback comments, all through the six-point check.

## 1. Privacy first
- Never paste students' names, roll numbers, marks, work, photos, or parents' details into a personal AI account. Use [Student].
- Your own notes, topics, goals and public syllabus outlines are fine.
- Confidential company training documents: only in a company-approved AI tool.

## 2. Choose your path
| Path | Who | Example topic |
|---|---|---|
| A | School teacher | Class 6 adding fractions; Class 8 photosynthesis |
| B | Tutor / coaching centre | Class 10 science: the human heart (exam practice) |
| C | Workplace / skills trainer | Writing clear emails for new office staff; Excel basics |

## 3. Prompt templates
**Lesson plan**
> You are an experienced [role]. Plan a [time]-minute [lesson/session] on [topic] for [learners and level]. Goal: by the end, learners can [one clear goal]. Include a [5]-minute starter, a short demo, [pair/group] practice and a [3]-question quick check. Use [simple English / Hindi] and familiar [Indian / workplace] examples.

**Three-level worksheet**
> Make a [level] worksheet on [topic] with 3 levels: Support ([what]), Core ([what]) and Challenge ([what]). [3] questions per level. Include an answer key that shows the working. Use simple English for [age]-year-olds and familiar local examples.

**Rubric**
> Write a 4-level rubric (Not yet, Developing, Secure, Extending) with [3–4] criteria for [task]. Describe what I would actually see in the work at each level. Simple words.

**Feedback**
> Turn my rough notes into kind, specific feedback. Use [Student] instead of a name. Notes: [notes]. 3 sentences: one strength, one improvement, one next step.

**Grounded quiz (NotebookLM)**
> Make [8] quiz questions only from these sources, with answers, and show where each answer comes from.

## 4. The six-point accuracy and age-fit check
- [ ] 1. I solved every question and compared with the AI's key
- [ ] 2. I read it as my weakest reader: no words too hard for the age
- [ ] 3. Names, foods, places and money feel familiar and include everyone
- [ ] 4. It matches my syllabus or training goals (nothing not taught yet)
- [ ] 5. Facts, dates and definitions match my textbook or handout
- [ ] 6. Labelled as AI-assisted if my school or company asks for it

## 5. Worked example (Path A)
Core questions: 1/2 + 1/4 = **3/4** · 2/3 + 1/6 = **5/6** · 3/4 + 1/8 = **7/8** (the AI said 4/12: it added tops and bottoms — caught by check 1).
Challenge: Riya read 1/4 then 3/8 of a storybook = **5/8** · tank 1/3 + 1/6 = **1/2** · Meera walked 1/2 km + 1/4 km = **3/4 km**.

Feedback (Path B): [Student], your labelled diagram of the heart is clear and accurate — well done. Your answer still needs an explanation of double circulation. Next step: rewrite one answer using the keywords "oxygenated" and "deoxygenated".

## 6. My lesson pack
| Part | Done | What I changed after checking |
|---|---|---|
| Lesson plan | | |
| Support worksheet + key | | |
| Core worksheet + key | | |
| Challenge worksheet + key | | |
| Rubric | | |
| Feedback comment 1 | | |
| Feedback comment 2 | | |

## 7. Honest use with learners
- Agree class rules on AI for homework and follow your school's policy.
- AI detectors are not reliable proof: talk with the learner and ask them to explain their work.
- For learners under 13, demonstrate AI on your screen; do not ask them to create accounts.
`,
    },
    {
      name: 'l06_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 6',
      audience: 'teacher',
      content: `# Lesson 6 demo script: teachers and trainers

**Before class:** open Gemini, Claude and NotebookLM. Upload a short handout you wrote (for example "How to write a clear email", one page) to a NotebookLM notebook. No learner data anywhere on screen.

## Step 1 — Worksheet (Gemini), type exactly
> You are an experienced Class 6 maths teacher in India. Make a short worksheet on adding fractions with 3 levels: Support (same denominators), Core (one denominator is a multiple of the other), Challenge (word problems with Indian examples). 3 questions per level, simple English, with an answer key.

Learners solve the core questions on paper (90 seconds), then compare.
- **A wrong key:** "That's why the examiner is you."
- **All correct:** show the 3/4 + 1/8 = 4/12 example from the video.
- **A word problem with odd numbers or an unfamiliar example:** ask for a local example instead.

## Step 2 — Feedback (Claude)
Paste the [Student] feedback prompt. Point out: no name, one strength, one improvement, one next step.

## Step 3 — NotebookLM
Ask: "Make 5 quiz questions only from these sources, with answers, and show where each answer comes from." Click a citation.

## Step 4 — The six-point check
Read it aloud. Ask each path group which point matters most for them.

## Answer key
- Sort: OK = topic and goal, own notes, [Student] notes, public syllabus. Never = marks list, named essay, class photo, parent's email with phone.
- Match: as in the activity.
- Suspicious essay: B. Probe: B.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 7 ─────────────────────────────────
export const A7 = lesson(7, {
  title: 'AI for HR, Office and Small Business Owners',
  objective: 'Choose your path and use AI to draft fair job posts, policies in plain words, meeting minutes and the wording of quotations or invoices, then run bias, accuracy and number checks before anything is used.',
  concept: 'Office kit + bias checks',
  minutes: 60,
  hook: ['upgrade', 'Wanted: young, energetic female receptionist, age below 25, fluent English must', 'Wanted: friendly, organised receptionist. Clear spoken English or Hindi. Freshers welcome. All applicants considered equally.'],
  intro: 'Today you choose your path and build a role kit of five prompts, each with the check that keeps it fair, accurate and safe.',
  cards: [
    { emoji: '🧭', title: 'Choose your path', body: 'Path A is HR, path B is an office administrator or executive assistant, and path C is a small business owner. Every task today has an example for each path. By the end you will have five prompts for your own role, each with its own check.' },
    { emoji: '📣', title: 'Fair job posts', body: 'Ask the AI for a job post with the real duties, skills, hours and pay range. Then run a bias check: remove age limits, gender, religion, marital status, looks, and words like young or native speaker. Describe the skills the job needs, not the type of person.' },
    { emoji: '📘', title: 'Policies in plain words', body: 'Paste a public or approved policy section and ask for a plain-words version and a short list of common questions. Check that no rule, number or date has changed. The original policy always stays the official version.' },
    { emoji: '🧾', title: 'Minutes, quotations and invoices', body: 'AI can turn notes into formal minutes and draft the wording of a quotation or invoice. Let your sheet or billing software do the maths, and never let the AI choose a tax rate. Check every amount, tax detail and date before sending.' },
    { emoji: '⚖️', title: 'AI must not decide about people', body: 'Never let AI shortlist, reject or rate candidates or staff on its own. It can help you write fair questions, clear criteria and polite letters. People make the decisions, and confidential HR data stays out of personal AI accounts.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Path A: the job post that copied old habits',
      tool: 'ChatGPT',
      prompt: 'Write a job post for a receptionist at our dental clinic in Indore. Duties: greet patients, manage appointments on the computer, answer calls, take payments. Timings 10 am to 7 pm, Monday to Saturday. Salary ₹18,000–₹22,000 per month. Under 120 words.',
      reply: 'Receptionist — Dental Clinic, Indore\n\nWe are looking for a young, smart female candidate (age 20–28) with a pleasant personality and fluent English to be the face of our clinic. You will greet patients, manage appointments on the computer, answer calls and take payments.\n\nTimings: 10 am–7 pm, Monday to Saturday\nSalary: ₹18,000–₹22,000 per month\n\nApply with your CV and a recent photograph.',
      note: 'Caught it: “young”, “female”, “age 20–28”, “pleasant personality” and “recent photograph” were never asked for and are biased. Run a bias check and rewrite around the skills.',
      say: [
        'An HR executive asks for a simple receptionist job post with the duties, hours and salary.',
        'The AI copies old job-ad habits it has seen many times.',
        'It adds an age limit, a gender, a pleasant personality and a photo, and none of that was asked for.',
        'These lines shut out good candidates, so we run a bias check and rewrite the post around skills.',
      ],
    },
    {
      kind: 'chat',
      heading: 'The bias check and the fair rewrite',
      tool: 'Claude',
      prompt: 'Check this job post for bias (age, gender, religion, caste, marital status, looks, background) and for words that may put good people off applying. List each problem, then rewrite it around the duties and skills. [paste post]',
      reply: 'Problems:\n1. “young” and “age 20–28” — age limit not needed for the job\n2. “female candidate” — gender not needed for the job\n3. “pleasant personality”, “face of our clinic” — vague, about looks\n4. “recent photograph” — invites judging on looks\n5. “fluent English” — the job needs clear communication; Hindi may matter more for patients\n\nRewrite:\nReceptionist — Dental Clinic, Indore\nGreet patients, manage appointments on the computer, answer calls and take payments. We need someone friendly, organised and comfortable with basic computer work. Clear spoken Hindi and English. Freshers welcome; we will train you.\nTimings: 10 am–7 pm, Monday to Saturday · Salary: ₹18,000–₹22,000 per month\nAll applicants are considered equally. Apply with your CV.',
      say: [
        'Now we ask Claude to check the same post for bias, and list every problem it finds.',
        'It flags the age limit, the gender, the words about looks, and the photo request.',
        'The rewrite describes the work and the skills, and welcomes freshers.',
        'You still read the final version yourself, because the post goes out under your name.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Path C: a quotation where the maths was wrong',
      tool: 'Microsoft Copilot',
      prompt: 'Draft a quotation for [Client] for 40 printed T-shirts at ₹350 each and 40 caps at ₹120 each, plus GST at 18%. Show subtotal, GST and total. Valid for 15 days, 50% advance.',
      reply: 'QUOTATION — [Your business name]\nTo: [Client]\n\n1. Printed T-shirts — 40 × ₹350\n2. Caps — 40 × ₹120\nSubtotal: ₹18,400\nGST @ 18%: ₹3,312\nTotal: ₹21,712\n\nValid for 15 days. 50% advance, balance on delivery.',
      note: 'Caught it: 40 × 350 + 40 × 120 = ₹18,800, not ₹18,400 (GST ₹3,384, total ₹22,184). Let your sheet or billing software do the maths, and confirm the right GST rate with your accountant.',
      say: [
        'A small business owner asks Copilot to draft a quotation with GST.',
        'The layout and terms look professional and complete.',
        'But the subtotal is wrong: forty times three fifty plus forty times one twenty is eighteen thousand, eight hundred.',
        'So the AI writes the words, the sheet does the maths, and your accountant confirms the tax rate.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Path B: minutes and plain-words policies',
      tool: 'ChatGPT · Claude · Gemini · Copilot',
      steps: [
        'Paste meeting notes (replace names with roles if anything is confidential) and ask for minutes: date, attendees, decisions, and action items with owner and due date.',
        'Ask the AI to flag anything unclear instead of guessing, then check every decision, owner and date against your notes.',
        'For a policy, paste a public or approved section and ask for a plain-words version at a simple reading level, plus 5 common questions and answers.',
        'Compare line by line: no rule, number, date or exception may change. Keep the original as the official version.',
        'Need Hindi or another language? Ask for it, then have a fluent speaker check the meaning.',
        'Save each prompt in your role kit with the check written right under it.',
      ],
      say: [
        'An office administrator turns meeting notes into formal minutes with owners and dates.',
        'The AI should flag anything unclear, and you check every decision against your notes.',
        'For policies, ask for plain words, then check that no rule or number changed.',
        'Save each prompt with its check, so your kit is safe for a colleague to use too.',
      ],
    },
  ],
  build: {
    title: 'Build your role kit: 5 prompts + checks',
    intro: 'Choose path A (HR), B (office admin or assistant) or C (small business owner). Use placeholders and practice text, never real staff, candidate or client details.',
    steps: [
      { title: 'Choose path and five tasks', text: 'A HR: job post, bias check, plain-words policy, interview questions, offer or regret letter. B Office: minutes, circular, visitor or travel email, agenda, monthly update. C Owner: quotation, payment reminder, supplier email, staff leave rules, job post.' },
      { title: 'Prompt 1 and 2', text: 'Write your first two prompts with role, task, facts as [placeholders], format and length. Test each in a chatbot.' },
      { title: 'Add the check', text: 'Under each prompt, write its check: bias check, no rule changed, every owner and date matches, maths in a sheet, fluent speaker checks the language.', tip: 'A prompt without a check is only half of the kit.' },
      { title: 'Prompts 3 to 5', text: 'Write and test the other three. For any numbers, build the maths in a sheet: for the quotation, subtotal =40*350+40*120 and GST =subtotal*rate.' },
      { title: 'Run the bias check', text: 'Run the bias-check prompt on any text about people (job posts, letters, policies) and fix what it finds. Read it yourself afterwards.' },
      { title: 'Pack it', text: 'Copy all five prompts and checks into your role kit file so a colleague could use it safely.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt for a fair job post for a role you know. Say it is a job post, give the duties, the skills or experience needed, the timings or location, and ask the AI to keep it fair: no age, gender or marital-status requirements, and a bias check at the end. Set a length.',
      title: 'Prompt Lab: a fair job post',
      starter: 'Write a job post for an accountant.',
      checks: [
        ['Say it is a job post', ['job post', 'job ad', 'vacancy', 'hiring']],
        ['List the duties', ['duties', 'responsibilities', 'tasks']],
        ['List the skills needed', ['skills', 'experience', 'requirements']],
        ['Give timings or location', ['timings', 'hours', 'location', 'office in']],
        ['Ask for fairness or a bias check', ['bias', 'fair', 'inclusive']],
        ['Forbid age, gender or marital limits', ['age', 'gender', 'marital']],
        ['Set a length', ['words', 'short', 'lines']],
      ],
      exemplar: 'Write a job post for an accounts assistant at our small trading business, office in Jaipur. Duties: enter bills in our accounting software, reconcile bank statements, prepare payment reminders. Skills: basic accounting, Excel, care with numbers; experience 0–2 years. Timings 9:30 am to 6 pm, Monday to Saturday. Keep it fair and inclusive: no age, gender, religion or marital-status requirements, and no photo request. Under 120 words. At the end, run a bias check and list any words you changed.',
      tools: CHATBOTS,
    },
    {
      ai: 'Write a prompt that turns rough meeting notes into formal minutes. Ask for attendees, decisions and action items, an owner and due date for each action, a clear format, no added content, a flag for anything unclear, and say that confidential names were replaced.',
      title: 'Prompt Lab: notes to formal minutes',
      starter: 'Make minutes from my notes.',
      checks: [
        ['Ask for the main sections', ['attendees', 'decisions', 'action']],
        ['Owner and due date for each action', ['owner', 'due date', 'deadline', 'by when']],
        ['Choose a clear format', ['table', 'headings', 'bullet']],
        ['Tell the AI not to add anything', ['do not add', 'don\'t add', 'only what', 'not in the notes', 'do not invent']],
        ['Ask it to flag unclear points', ['flag', 'unclear', 'missing', 'not sure']],
        ['Say confidential names were replaced', ['replaced', 'roles instead', 'no names', 'placeholders', 'confidential']],
      ],
      exemplar: 'Turn my rough notes from today’s monthly operations meeting into formal minutes with headings: Date, Attendees, Decisions, and an Action items table with Owner and Due date for each action. I replaced confidential names with roles (Accounts Head, Store Manager). Do not add anything that is not in the notes. If an owner or date is unclear or missing, flag it instead of guessing. Notes: [paste notes]',
      tools: CHATBOTS,
    },
    {
      sort: 'Job post line: fair, or biased?',
      buckets: ['Fair: keep it', 'Biased: rewrite it'],
      items: [
        ['“Age 22–30 only”', 1],
        ['“Must be comfortable managing appointments on a computer”', 0],
        ['“Female candidates preferred”', 1],
        ['“Freshers welcome; we will train you”', 0],
        ['“Native English speaker”', 1],
        ['“Clear spoken English or Hindi”', 0],
        ['“Unmarried candidates only”', 1],
        ['“Salary: ₹18,000–₹22,000 per month”', 0],
        ['“Good-looking, fair-skinned candidates”', 1],
      ],
      why: 'Describe the work, the skills and the pay. Age, gender, marital status, looks, skin colour and “native speaker” shut out good people and are not about doing the job.',
      hint: 'Ask: does this describe the job, or the type of person?',
    },
    {
      match: 'Match each task to the check that must happen before you use it',
      pairs: [
        ['Job post', 'Bias check: no age, gender, looks or background requirements'],
        ['Plain-words policy', 'No rule, number, date or exception changed from the original'],
        ['Meeting minutes', 'Every decision, owner and date matches the notes'],
        ['Quotation or invoice', 'Maths done in a sheet; tax rate confirmed with your accountant'],
        ['Hindi version of a notice', 'A fluent speaker checks the meaning'],
      ],
      why: 'Every prompt in your role kit comes with its own check. The check is what makes the output safe to use.',
    },
    {
      mcq: 'Your manager asks you to paste 120 CVs into your personal ChatGPT and “pick the best 10”. What is the best response?',
      options: ['Do it; it will save hours', 'Explain that CVs are personal data and AI must not decide; suggest using AI to write fair scoring criteria, then people score the CVs (or use the company’s approved HR tool)', 'Remove the names, then let the AI pick', 'Ask the AI which candidates would be the best “culture fit”'],
      answer: 1,
      why: 'CVs are personal data, and an AI shortlist can be unfair and hard to explain. AI can help write fair criteria and questions; people make the decisions.',
      title: 'The 120 CVs',
      wrong: { 2: 'Even without names, CVs contain personal details, and the AI would still be making a decision about people.' },
    },
    {
      mcq: 'Zoya asks a chatbot to draft an invoice for her bakery. The draft includes a GSTIN number she has never seen. What should she do?',
      options: ['Use it; the AI must have looked it up', 'Delete it: the AI invented it. Use her real GSTIN from her registration, and make invoices in her billing software or a checked sheet', 'Ask the AI to confirm the number is real', 'Remove GST from the invoice entirely'],
      answer: 1,
      why: 'The AI made up a number that looks real. Official numbers, tax rates and totals come from your own records and software, never from a chatbot.',
      title: 'New situation: the made-up GSTIN',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Today is for HR, office and small business roles. Learners choose a path (A HR, B office admin or assistant, C small business owner) and build a role kit: five prompts, each with its own check. Teach the checks as part of the prompt: bias check for anything about people, no-rule-changed for plain-words policies, owners and dates for minutes, maths in a sheet and tax rate from the accountant for quotations and invoices, a fluent speaker for translations. Two caught mistakes: the AI adds age, gender and looks to a job post (copying old Indian job-ad habits), and miscalculates a quotation subtotal. The big rule: AI must not decide about people, and HR data stays out of personal accounts.',
    analogy: 'Your role kit is like a set of rubber stamps with an inspection sticker on each: the stamp makes the work fast, the sticker reminds you what to check before it leaves the office.',
    vocab: [
      ['bias', 'Unfair preference for or against people, like an age limit or gender in a job post.'],
      ['bias check', 'Asking the AI (and then reading yourself) to find and remove unfair words.'],
      ['plain words', 'Simple, everyday language that anyone can understand.'],
      ['minutes', 'The official record of a meeting: attendees, decisions and actions.'],
      ['quotation', 'A price offer to a customer before they buy, with terms and validity.'],
      ['role kit', 'Your set of tested prompts, each with its own check, for your job.'],
    ],
    demo: '1) Learners type A, B or C. 2) Paste the receptionist job post prompt into ChatGPT. Look for age, gender, looks, photo or “native speaker”. If none appear, show the video version and say “it often does this, because it learned from old ads”. 3) Paste the post into Claude with the bias-check prompt and read the fair rewrite. 4) Paste the quotation prompt into Copilot; check in a sheet: =40*350+40*120 (18,800), =18800*18% (3,384), total 22,184. 5) Show the minutes prompt and the plain-words policy prompt; stress “flag, don’t guess” and “no rule changed”. 6) Show the role kit table.',
    unplugged: 'Spot the bias (5 min): read out six real-style job-ad lines (“age below 25”, “freshers welcome”, “male candidates only”, “good communication skills”, “convent-educated”, “salary negotiable”). Learners hold up a green card (fair) or red card (biased). Discuss the tricky ones. Say: “AI learned from millions of old ads like these. Today you will catch it.”',
    prompts: [
      ['Name three things that must never be in a job post.', 'Any three: age limits, gender, religion, caste, marital status, looks, photo request, “native speaker”.'],
      ['Who does the maths on a quotation?', 'Your sheet or billing software, not the AI; the accountant confirms the tax rate.'],
      ['What is the check for a plain-words policy?', 'No rule, number, date or exception has changed; the original stays official.'],
      ['Can AI shortlist candidates?', 'No. It can help write fair criteria and questions; people decide.'],
      ['What should a minutes prompt ask the AI to do with unclear points?', 'Flag them instead of guessing.'],
    ],
    support: 'Give learners the ready-made role kit for their path from the kit file; they test each prompt once and write the check in their own words.',
    stretch: 'Write a short “AI use at our office” notice in plain words and Hindi (checked by a fluent speaker), or build the quotation as a sheet template with formulas for subtotal, GST and total.',
    mis: [
      ['The AI will write a fair job post by default.', 'It often copies old biased habits. Always run a bias check and read it yourself.'],
      ['AI maths on invoices is reliable.', 'Do the maths in a sheet or billing software.'],
      ['Removing names makes AI shortlisting fair.', 'AI must not decide about people; people score against fair criteria.'],
      ['A plain-words policy replaces the original.', 'The original stays the official version; check nothing changed.'],
    ],
    successCriteria: ['I can get a fair job post from AI and run a bias check on it.', 'I can turn a policy into plain words and check that no rule changed.', 'I can turn notes into minutes with owners and dates, and draft quotation wording with the maths in a sheet.', 'I can build a role kit of five prompts, each with its own check.'],
    homework: 'Finish your role kit (5 prompts + checks) and use two of the prompts at work this week with placeholders. Note what each check caught.',
    exit: 'Pick one prompt from your role kit and say its check in one sentence.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Spot the bias” green/red cards (see Unplugged).' },
      { minutes: 5, stage: 'Watch + choose your path', doing: 'Play the lesson video. Everyone types A, B or C; form path groups.' },
      { minutes: 7, stage: 'Live demo', doing: 'Biased job post, bias check and fair rewrite, the quotation maths catch, minutes and plain-words prompts.' },
      { minutes: 8, stage: 'Prompt Labs', doing: 'Prompt Lab: a fair job post, then notes to formal minutes. Test each in a chatbot.' },
      { minutes: 14, stage: 'Build along (path groups)', doing: 'Breakout rooms by path: build the role kit, steps 1–6. Partners test one of each other’s prompts and its check.' },
      { minutes: 7, stage: 'Team games', doing: 'Quick competition: “Fair or biased?” sort, then the task-check match, then “The 120 CVs” as a class poll with discussion.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'One learner per path shows one prompt and what its check caught.' },
      { minutes: 5, stage: 'Probe', doing: 'New situation: the made-up GSTIN (individual).' },
      { minutes: 4, stage: 'Wrap-up', doing: 'Exit ticket; homework: finish the role kit and use two prompts.' },
    ],
  },
  files: [
    {
      name: 'l07_role_kit.md',
      title: 'AI for HR, office and small business (role kit)',
      audience: 'student',
      content: `# AI for HR, office and small business owners — Lesson 7 role kit

**Project: a role kit of 5 prompts + checks.** Each prompt has its own check written directly under it.

## 1. Privacy and fairness first
- Never paste CVs, salaries, appraisals, staff ID or bank details, or client contracts into a personal AI account. Use placeholders and your company's approved tools.
- AI must not shortlist, reject, rate or decide about people. People decide; AI helps with wording, criteria and questions.
- Official numbers (GSTIN, PAN, invoice numbers) and tax rates come from your own records and your accountant, never from a chatbot.

## 2. Choose your path and five tasks
| Path A — HR | Path B — Office admin / assistant | Path C — Small business owner |
|---|---|---|
| Job post | Meeting minutes | Quotation wording |
| Bias check | Office circular in plain words | Payment reminder |
| Policy in plain words + FAQ | Visitor or travel email | Supplier email (price or delivery) |
| Same interview questions for every candidate | Meeting agenda | Staff leave rules in plain words |
| Offer / regret letter template | Monthly update for the manager | Job post (with bias check) |

## 3. Prompts with their checks
**Fair job post**
> Write a job post for a [role] at [business], [location]. Duties: [duties]. Skills: [skills]; experience [range]. Timings [timings]. Salary [range]. Keep it fair and inclusive: no age, gender, religion, caste or marital-status requirements, and no photo request. Under 120 words. At the end, run a bias check and list any words you changed.

Check: no age, gender, religion, caste, marital status, looks, photo, "native speaker". I read it myself.

**Bias check (for any text about people)**
> Check this [job post / letter / policy] for bias (age, gender, religion, caste, marital status, looks, background) and for words that may put good people off applying. List each problem, then rewrite it around the duties and skills. [paste]

Check: I agree with each change, and the meaning is still correct.

**Policy in plain words**
> Rewrite this policy section in plain words at a simple reading level, then write 5 common questions and answers. Do not change any rule, number, date or exception. [paste a public or approved section]

Check: line-by-line comparison; the original stays the official version.

**Minutes**
> Turn my rough notes into formal minutes with headings: Date, Attendees, Decisions, and an Action items table with Owner and Due date. I replaced confidential names with roles. Do not add anything that is not in the notes. Flag any unclear owner or date instead of guessing. Notes: [notes]

Check: every decision, owner and date matches my notes.

**Quotation wording**
> Draft the wording of a quotation from [business] to [Client] for [items and quantities]. Leave the amounts as [Subtotal], [GST] and [Total]: I will fill them from my sheet. Terms: valid for [days], [payment terms], [delivery]. Professional and short.

Check: maths in the sheet; GST rate confirmed with my accountant; GSTIN from my registration.

## 4. Worked examples
**Job post (Path A).** The AI added "young, female, age 20–28, pleasant personality, recent photograph". Bias check removed all five. Fair version: friendly, organised, comfortable with basic computer work, clear spoken Hindi and English, freshers welcome, all applicants considered equally.

**Quotation (Path C).** 40 T-shirts × ₹350 = ₹14,000; 40 caps × ₹120 = ₹4,800.
| Line | Sheet formula | Amount |
|---|---|---|
| Subtotal | =40*350+40*120 | ₹18,800 |
| GST at 18% (rate given by the owner; confirm with your accountant) | =B2*18% | ₹3,384 |
| Total | =B2+B3 | ₹22,184 |

The AI's draft said ₹18,400 / ₹3,312 / ₹21,712: wrong, caught by doing the maths in the sheet.

## 5. My role kit
| # | Task | My tested prompt | Its check | What the check caught |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
`,
    },
    {
      name: 'l07_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 7',
      audience: 'teacher',
      content: `# Lesson 7 demo script: HR, office and small business

**Before class:** open ChatGPT, Claude and Copilot (or any two) and a blank Google Sheet. No real CVs, staff or client details on screen.

## Step 1 — Job post (ChatGPT), type exactly
> Write a job post for a receptionist at our dental clinic in Indore. Duties: greet patients, manage appointments on the computer, answer calls, take payments. Timings 10 am to 7 pm, Monday to Saturday. Salary ₹18,000–₹22,000 per month. Under 120 words.

Ask: "Is there anything here we did not ask for?"
- **Age, gender, looks, photo, "native speaker":** the catch. "It learned from old ads."
- **Clean post:** show the video version, then say "it does not happen every time, so the bias check is permanent".

## Step 2 — Bias check (Claude)
Paste the post with the bias-check prompt. Read the problem list and the rewrite. Ask: "Do we agree with every change?"

## Step 3 — Quotation (Copilot) and the sheet
Paste the quotation prompt. Then in the sheet: =40*350+40*120 → 18,800; =18800*18% → 3,384; total 22,184.
- **The AI's maths is wrong:** "This is why the sheet does the maths."
- **The AI's maths is right:** "Good, this time. The sheet is still the record."
Say: "We used 18% because the owner told us to. The right GST rate depends on the item; confirm it with your accountant."

## Step 4 — Minutes and policy
Show both prompts. Stress "flag, don't guess" and "do not change any rule".

## Answer key
- Sort, fair: computer appointments, freshers welcome, clear English or Hindi, salary range. Biased: age limit, female preferred, native speaker, unmarried only, good-looking/fair-skinned.
- Match: as in the activity.
- 120 CVs: B. Probe: B.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 8 ─────────────────────────────────
export const A8 = lesson(8, {
  title: 'Capstone: Your AI Work Playbook',
  objective: 'Map a full work week, choose three tasks to automate with a simple score, build the prompts, templates and automations for each, measure the time saved, write your own responsible-use rules, and present your playbook.',
  concept: 'Your AI playbook',
  minutes: 60,
  hook: ['word', '1 week · 3 tasks · 1 playbook', 'mapped, automated where it is safe, measured, and owned by you'],
  intro: 'Capstone time! Today you turn everything from Level 2 into your own AI work playbook, and you prove what it saves.',
  cards: [
    { emoji: '🗺️', title: 'Map your week', body: 'For one normal week, list every task that takes more than fifteen minutes, with how often you do it and how long it takes. Group the tasks into messages, reports, data, documents and meetings. This is your time map.' },
    { emoji: '🎯', title: 'Score and choose three', body: 'Score each task on minutes per week, how repetitive it is, and how risky a mistake would be. Choose three tasks that are frequent, repetitive and low to medium risk. Leave high-risk decisions about people, money, health and the law with people.' },
    { emoji: '🧰', title: 'Build the right tool for each', body: 'Match each task to a tool from this course: a template, a mail merge, a dashboard, a form with a summary, a script, or a role prompt kit. Add a human checkpoint to each one. Test with practice or anonymised data first.' },
    { emoji: '📏', title: 'Measure, then write your rules', body: 'Log before and after times for each task, including checks and setup. Then write five to eight responsible-use rules for your own work, covering privacy, checking, honesty, labelling and who approves. Your playbook is the tasks, the tools, the numbers and the rules together.' },
    { emoji: '🎤', title: 'Present it in five minutes', body: 'Show your time map, your three automations, one mistake a checkpoint caught, and the hours saved per month. Finish with your rules, what you will automate next, and what you will never hand to AI.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Map and score your week',
      tool: 'Google Sheets · Excel',
      steps: [
        'Make a sheet with columns: Task, Type, Times per week, Minutes each, Minutes per week (=C2*D2).',
        'Add Repetitive (1 = varies a lot, 3 = almost the same every time) and Risk if wrong (1 low, 2 medium, 3 high).',
        'Ask the AI for a score column: =E2*F2/G2 (minutes per week × repetitive ÷ risk), then sort from high to low.',
        'Filter out risk 3 tasks: decisions about people, money, health or legal matters stay with people.',
        'Pick your top three. Next to each, write the tool you will use and its human checkpoint.',
      ],
      say: [
        'Start with a simple sheet of every task that takes more than fifteen minutes in a normal week.',
        'Give each task a score for how repetitive it is and how risky a mistake would be.',
        'A simple formula ranks the tasks, and high-risk work stays with people.',
        'Your top three tasks become the heart of your playbook.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Plan the tools, and catch a risky shortcut',
      tool: 'Claude',
      prompt: 'I am an office executive. My top 3 tasks: weekly sales report (75 min), payment reminders to customers who opted in (40 min), meeting minutes (45 min). For each, suggest a tool from: template, mail merge, dashboard, form + summary, Apps Script, role prompt kit. Add one human checkpoint each. Short table.',
      reply: '| Task | Tool | Human checkpoint |\n|---|---|---|\n| Weekly sales report | Dashboard + Apps Script draft to you | Verify one number; read the draft before forwarding |\n| Payment reminders | Mail merge from your sheet + template | Preview 3 messages; test to yourself |\n| Meeting minutes | Role prompt kit (minutes prompt) | Check every owner and date against notes |\n\nTip: to save even more time, connect Zapier to send WhatsApp reminders to every customer automatically every morning, with no review needed.',
      note: 'Caught it: “every customer, every morning, no review needed” breaks the draft-to-me rule and risks spamming people and sending wrong amounts. Keep the preview checkpoint and message only people who opted in.',
      say: [
        'Claude matches each of the three tasks to a tool from the course, with a checkpoint.',
        'The table is sensible, and every task keeps a person in the loop.',
        'But the tip at the end says to message every customer every morning, with no review.',
        'That removes the checkpoint and could spam people, so we keep the preview step.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Draft your responsible-use rules',
      tool: 'ChatGPT',
      prompt: 'Help me write 6 responsible-use rules for using AI in my job as an office executive at a small distributor. Cover privacy, checking, honesty and labelling, approvals, and what AI must never decide. Plain words, one line each.',
      reply: '1. I never paste customer, staff or confidential company data into a personal AI account.\n2. I check every number, name, date and promise before anything leaves my inbox.\n3. I label AI-made images and documents when my company asks, and never write fake reviews.\n4. Messages sent from a saved template do not need checking.\n5. New AI uses at work are approved by my manager first.\n6. AI never decides about people: hiring, pay, discipline or credit.',
      note: 'Caught it: rule 4 is wrong. Templates can still merge the wrong name, amount or date. Change it to: “I preview every merge and send a test to myself first.”',
      say: [
        'Now we ask ChatGPT to help draft six rules for our own job.',
        'Most of the rules are strong: privacy, checking, labelling, approvals and people decisions.',
        'But rule four says template messages need no checking, and that is exactly how broken merges get sent.',
        'We rewrite it, because these are our rules, and we stand behind every line.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Build the five-minute presentation',
      tool: 'Canva · PowerPoint · Google Slides',
      steps: [
        'Slide 1: your time map (the sheet, sorted by score) and the three tasks you chose.',
        'Slides 2–4: one per automation: before time, tool, checkpoint, after time, and one thing it caught.',
        'Slide 5: total minutes saved per week and per month, setup time, and payback in weeks.',
        'Slide 6: your responsible-use rules, what you will automate next, and what you will never hand to AI.',
        'Rehearse once with a timer. Use practice or anonymised screenshots only.',
      ],
      say: [
        'Six slides are enough: the map, three automations, the numbers, and your rules.',
        'Every automation slide shows before, after, the checkpoint, and one real catch.',
        'Rehearse with a timer, and only show practice or anonymised data.',
      ],
    },
  ],
  build: {
    title: 'Build your AI work playbook',
    intro: 'Use your own work week. Keep all data anonymised or use the course practice files. Reuse what you built in lessons 1 to 7.',
    steps: [
      { title: 'Map your week', text: 'Fill the time map sheet from the kit with every task over 15 minutes: type, times per week, minutes each.' },
      { title: 'Score and choose', text: 'Add Repetitive and Risk, ask the AI for the score formula, sort, remove risk-3 tasks, and choose your top three.' },
      { title: 'Build three automations', text: 'For each task pick a tool (template, mail merge, dashboard, form + summary, script, role kit), build it with practice data, and add a checkpoint.', tip: 'Scripts: use the 7-point check from lesson 3. Messages: preview and test to yourself.' },
      { title: 'Measure', text: 'Run each automation once with a timer. Log before, after (with checks), setup time and payback for each.' },
      { title: 'Write your rules', text: 'Write 5–8 responsible-use rules in plain words. Ask the AI for a draft if you like, then fix any rule you do not agree with.' },
      { title: 'Present', text: 'Make the six slides and rehearse a five-minute talk.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt asking the AI to help you plan your playbook. Describe your role, list your tasks with the minutes each takes, ask it to use repetitiveness and risk to rank them, give the tool options, ask for a human checkpoint for each, ask for a table, and say that no personal data is included.',
      title: 'Prompt Lab: plan your playbook',
      starter: 'What should I automate at work?',
      checks: [
        ['Describe your role', ['i am', 'i work as', 'my job', 'my role']],
        ['List tasks with minutes', ['minutes', 'min']],
        ['Rank by repetitiveness and risk', ['risk', 'repetitive', 'score']],
        ['Give the tool options', ['template', 'dashboard', 'mail merge', 'script', 'form']],
        ['Ask for a checkpoint for each', ['checkpoint', 'human check', 'review']],
        ['Ask for a table', ['table']],
        ['Say no personal data is included', ['no personal', 'anonymised', 'anonymized', 'no names', 'no customer details']],
      ],
      exemplar: 'I am an accounts assistant at a small distributor. My weekly tasks: payment reminders (40 minutes), weekly sales report (75 minutes), supplier emails (30 minutes), meeting minutes (45 minutes), checking credit limits (60 minutes). There is no personal or customer data here. Rank the tasks by how repetitive they are and how risky a mistake would be. For my top three, suggest a tool (template, mail merge, dashboard, form + summary, Apps Script or a role prompt kit) and one human checkpoint each. Answer as a short table.',
      tools: CHATBOTS,
    },
    {
      ai: 'Write a prompt asking the AI to help draft your own responsible-use rules. Name your role, and ask for rules on privacy, checking, honesty or labelling, approvals, and what AI must never decide, in plain words, one line each.',
      title: 'Prompt Lab: my responsible-use rules',
      starter: 'Give me AI rules.',
      checks: [
        ['Name your role', ['my job', 'my role', 'i am', 'as a', 'as an']],
        ['Privacy', ['privacy', 'personal data', 'confidential']],
        ['Checking', ['check', 'verify']],
        ['Honesty or labelling', ['label', 'honest', 'disclose']],
        ['Approvals', ['approve', 'approval', 'manager']],
        ['What AI must never decide', ['never decide', 'must not decide', 'people decide', 'decisions about people']],
        ['Plain words, one line each', ['plain words', 'simple words', 'one line']],
      ],
      exemplar: 'Help me write 6 responsible-use rules for using AI in my job as a school office administrator. Cover privacy of student and parent data, checking every output, honesty and labelling AI-made work, approval from the principal for new uses, and decisions about people that AI must never decide (admissions, fees waivers, discipline). Plain words, one line each.',
      tools: CHATBOTS,
    },
    {
      sort: 'In your playbook: automate with a checkpoint, or keep with people?',
      buckets: ['Automate (with a checkpoint)', 'Keep with people'],
      items: [
        ['Weekly sales report', 0],
        ['Fee reminders to parents who opted in', 0],
        ['Deciding salary increments', 1],
        ['First draft of meeting minutes', 0],
        ['Replying to a customer’s serious complaint', 1],
        ['Summarising form feedback', 0],
        ['Choosing which candidate to hire', 1],
        ['Approving a large refund', 1],
      ],
      why: 'Repetitive, low-risk tasks with a checkpoint are good to automate. Decisions about people, money and serious complaints stay with people, even when AI helps with wording.',
    },
    {
      mcq: 'Score = minutes per week × repetitive ÷ risk. Task A: 120 min, repetitive 3, risk 1. Task B: 60 min, repetitive 2, risk 2. Task C: 200 min, repetitive 1, risk 3. Which should you automate first?',
      options: ['Task A (score 360)', 'Task B (score 60)', 'Task C (score about 67)', 'Task C, because it takes the most minutes'],
      answer: 0,
      why: 'A: 120 × 3 ÷ 1 = 360. B: 60 × 2 ÷ 2 = 60. C: 200 × 1 ÷ 3 ≈ 67. Task A is frequent, very repetitive and low risk. Task C takes long, but it varies a lot and is high risk.',
      title: 'Which task first?',
      wrong: { 3: 'Minutes alone are not enough. A long, varied, high-risk task is a poor first automation.' },
    },
    {
      projectAct: true,
      title: 'Capstone: your AI work playbook',
      brief: 'Map one normal work week, choose three tasks with the score, build a tool and checkpoint for each from this course, measure the time saved honestly, write your responsible-use rules, and present your playbook in five minutes.',
      requirements: [
        'A time map of your week with the score for each task',
        'Three automations, each with its tool, prompt or template, and a human checkpoint',
        'A time-saved log for each: before, after (including checks), setup and payback',
        'At least one mistake or risky suggestion caught at a checkpoint',
        '5–8 responsible-use rules in your own plain words',
        'A five-minute presentation: map, automations, numbers, rules, what is next and what you will never hand to AI',
      ],
      reflection: 'Which of your three automations saves the most, which checkpoint mattered most, and what will you never hand to AI in your job?',
      tips: ['Choose small, real, weekly tasks.', 'Reuse your Level 2 kits: templates, dashboard, script, role kit.', 'Practice or anonymised data only.', 'Your strongest slide is the mistake you caught.'],
      minWords: 50,
    },
    {
      mcq: 'At your demo, your manager says: “Great! Now let the reminders go to all customers automatically every day, no checking.” What is the best response?',
      options: ['Agree; the manager decides', 'Explain the risk (wrong amounts, people who opted out, spam) and offer a light checkpoint: a 2-minute preview of three messages and a test to yourself before each send', 'Refuse to automate anything ever again', 'Agree, then quietly keep checking without telling anyone'],
      answer: 1,
      why: 'A light checkpoint keeps most of the time saved and stops costly mistakes. Explain it openly, with your numbers.',
      title: 'New situation: “no checking needed”',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'The capstone turns Level 2 into each learner’s own playbook. Level 1’s capstone redesigned one task; this one maps a whole week, scores the tasks (minutes × repetitive ÷ risk), and automates three with tools from the course: templates and mail merge (L1), dashboards (L2), forms, summaries and scripts (L3), the report pipeline (L4) and role kits (L5–7). Every automation keeps a human checkpoint, and time saved is honest (checks and setup count, payback in weeks). Learners write their own responsible-use rules and present in five minutes. Caught mistakes: a “no review needed” Zapier tip and a rule that says templates need no checking.',
    analogy: 'A playbook is like a cricket team’s game plan: it says who bowls which over, where the fielders stand and when to review a decision, and the captain still makes the big calls.',
    vocab: [
      ['playbook', 'Your written plan of tasks, tools, checkpoints, numbers and rules for using AI at work.'],
      ['time map', 'A list of your week’s tasks with how often and how long each takes.'],
      ['task score', 'Minutes per week × how repetitive ÷ how risky, used to choose what to automate.'],
      ['checkpoint', 'A planned stop where a person checks before the work moves on.'],
      ['payback', 'Setup time divided by minutes saved per week.'],
      ['responsible-use rules', 'Your own plain-words rules for privacy, checking, honesty, approvals and decisions.'],
    ],
    demo: '1) Show a sample time map sheet with eight tasks; add the score formula =E2*F2/G2 and sort. 2) Remove a risk-3 task and explain why. 3) Paste the top three into Claude with the tool-and-checkpoint prompt; look for any “no review needed” or “send to everyone” suggestion (if none appears, show the video). 4) Ask ChatGPT for six responsible-use rules and ask the class to find one they disagree with. 5) Show the six-slide presentation outline and run a one-minute version yourself with a timer.',
    unplugged: 'Where did my week go? (5 min): everyone writes their five biggest weekly tasks with minutes on paper or in the chat, then totals them. Ask: “Who spends more than 3 hours a week on reminders, reports or minutes?” Hands up. Then: “Which one would you automate first, and which would you never hand to AI?” Two volunteers answer.',
    prompts: [
      ['How do you choose which tasks to automate first?', 'Score them: minutes per week × repetitive ÷ risk; leave high-risk decisions with people.'],
      ['What must every automation in your playbook have?', 'A human checkpoint (and test data first).'],
      ['What counts in the “after” time?', 'The time with AI plus the checking time; setup is counted separately for payback.'],
      ['Name three topics your responsible-use rules must cover.', 'Any three: privacy, checking, honesty/labelling, approvals, decisions AI must never make.'],
      ['What goes on the last slide?', 'Your rules, what you will automate next, and what you will never hand to AI.'],
    ],
    support: 'Offer a half-filled time map for a common role (office executive, teacher, shop owner) and let learners reuse their lesson 4 report as one of the three automations.',
    stretch: 'Add a fourth automation using an optional tool such as Zapier or Power Automate (check the current free plan), with a checkpoint, or estimate hours saved per year and propose a team pilot to your manager.',
    mis: [
      ['The biggest task is always the best one to automate.', 'Score it: repetitive and low-risk tasks first.'],
      ['Automation means no checking.', 'A light checkpoint keeps most of the time saved and stops costly mistakes.'],
      ['The AI can write my rules for me.', 'It can draft; you fix and own every rule.'],
      ['Time saved is easy to guess.', 'Measure with a timer and include checks and setup.'],
    ],
    successCriteria: ['I can map my work week and score tasks for automation.', 'I can build three automations with tools from this course, each with a human checkpoint.', 'I can measure time saved honestly, including checks, setup and payback.', 'I can write and present my own responsible-use rules and playbook.'],
    homework: 'Run your playbook for two weeks, keep the time-saved log, and share the playbook with your manager or team. Bring one question for Level 3.',
    exit: 'Name one task you will automate next, and one task you will never hand to AI. Why?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Where did my week go?” (see Unplugged).' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the capstone video. Poll: “How many hours a week could you win back?” (type a number).' },
      { minutes: 6, stage: 'Live demo', doing: 'Time map and score, the “no review needed” catch, the rules draft and its wrong rule, the six-slide outline.' },
      { minutes: 6, stage: 'Prompt Labs', doing: 'Prompt Lab: plan your playbook, then my responsible-use rules. Test both in a chatbot.' },
      { minutes: 5, stage: 'Team games', doing: 'Quick competition: “Automate or keep with people?” sort, then “Which task first?” as a speed round.' },
      { minutes: 15, stage: 'Capstone build (pairs)', doing: 'Build steps 1–5: map, score, three automations, log, rules. Partners check each other’s checkpoints and privacy.' },
      { minutes: 14, stage: 'Demo day', doing: 'Show-and-tell: five-minute presentations in breakout rooms of three, with a timer. Peers give two stars and a wish; each room picks one to show everyone.' },
      { minutes: 5, stage: 'Probe and submit', doing: 'New situation: “no checking needed”. Submit the capstone with the reflection, then celebrate finishing Level 2.' },
    ],
  },
  project: {
    title: 'Your AI work playbook',
    brief: 'Map one work week, choose three tasks by score, build a tool and human checkpoint for each from this course, measure the time saved honestly, write your responsible-use rules, and present your playbook in five minutes.',
    requirements: [
      'Time map with a score for each task',
      'Three automations, each with tool, prompt or template, and checkpoint',
      'Time-saved log for each: before, after with checks, setup, payback',
      'At least one caught mistake or risky suggestion',
      '5–8 responsible-use rules in your own words',
      'A five-minute presentation with what is next and what you will never hand to AI',
    ],
    milestones: ['Week mapped and three tasks chosen by score', 'Three automations built and tested with practice data', 'Times logged and rules written', 'Presentation rehearsed and delivered'],
    rubric: [
      { criterion: 'Task choice and time map', levels: ['No map; tasks chosen at random', 'Map made but no score, or risky tasks chosen', 'Clear map and score; three sensible low-to-medium-risk tasks', 'Clear map, well-reasoned choices, and high-risk tasks consciously kept with people'] },
      { criterion: 'Automations and checkpoints', levels: ['Vague ideas only', 'One or two automations working, checkpoints unclear', 'Three working automations from course tools, each with a checkpoint', 'Three reliable automations, well-placed checkpoints, and a routine a colleague could follow'] },
      { criterion: 'Measurement and honesty', levels: ['No times', 'Times without checks or setup', 'Honest before/after with checks, setup and payback; one caught mistake', 'Honest numbers over more than one run, caught mistakes explained, and fixes added'] },
      { criterion: 'Responsible use and presentation', levels: ['No rules; private data shown', 'Generic rules; presentation unclear or over time', 'Own plain-words rules covering privacy, checking, honesty, approvals and decisions; clear five-minute talk', 'Workplace-ready rules and a confident talk a manager could act on, including what never goes to AI'] },
    ],
    extensions: ['Add a fourth automation with Zapier or Power Automate (check the current free plan), with a checkpoint', 'Write a one-page proposal for a one-month team pilot of your playbook', 'Turn your rules into a plain-words poster for your office in English and Hindi (checked by a fluent speaker)'],
  },
  files: [
    {
      name: 'l08_playbook_kit.md',
      title: 'Your AI work playbook (capstone kit)',
      audience: 'student',
      content: `# Your AI work playbook — Lesson 8 capstone kit

**Capstone.** Map your week, choose three tasks, build them with checkpoints, measure, write your rules, present.

## 1. Privacy first
- Practice or anonymised data only in AI tools and in your slides.
- No customer, staff, student or patient details in personal AI accounts. Company data only in company-approved tools.

## 2. Time map (copy into a sheet)
| Task | Type | Times per week | Minutes each | Minutes per week | Repetitive (1–3) | Risk if wrong (1–3) | Score |
|---|---|---|---|---|---|---|---|
| Example: payment reminders | Messages | 2 | 20 | =C2*D2 → 40 | 3 | 1 | =E2*F2/G2 → 120 |
| | | | | | | | |

- Repetitive: 1 = varies a lot, 3 = almost the same every time.
- Risk: 1 low, 2 medium, 3 high (decisions about people, money, health, legal: keep with people).
- Sort by Score, remove risk-3 tasks, pick the top three.

## 3. Tool menu (from Level 2)
| Tool | Lesson | Good for | Checkpoint |
|---|---|---|---|
| Prompt / message template | 1 | Repeated messages | Fields match; no new facts |
| Mail merge or sheet formula | 1 | Personal messages to a list | Preview 3; test to yourself |
| Self-updating dashboard | 2 | Weekly numbers | Filter check one number |
| Form + AI summary | 3 | Feedback, requests, orders | Verify counts with COUNTIF |
| Apps Script (draft to me) | 3–4 | Summary or report emails | 7-point check; read the draft |
| Report pipeline | 4 | Recurring reports | Checkpoints A, B, C |
| Role prompt kit | 5–7 | Sales, teaching, HR, office | The check under each prompt |
| Optional: Zapier / Power Automate | 3 | Connecting apps | Check the current free plan; send to yourself first |

## 4. My three automations
| # | Task | Tool | Prompt / template / file | Checkpoint | Before (min) | After incl. checks (min) | Setup (min) | Payback (weeks) | What the checkpoint caught |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |
| 3 | | | | | | | | | |

**Total saved per week:** ____ min. **Per month (× 4):** ____ min ≈ ____ hours.

## 5. Prompts
**Plan**
> I am a [role]. My weekly tasks: [task (minutes)], ... There is no personal or customer data here. Rank the tasks by how repetitive they are and how risky a mistake would be. For my top three, suggest a tool (template, mail merge, dashboard, form + summary, Apps Script or a role prompt kit) and one human checkpoint each. Answer as a short table.

**Rules**
> Help me write 6 responsible-use rules for using AI in my job as a [role] at [type of workplace]. Cover privacy, checking every output, honesty and labelling, approvals for new uses, and decisions about people that AI must never decide. Plain words, one line each.

## 6. My responsible-use rules (5–8, my own words)
Example set:
1. I never paste customer, staff or confidential company data into a personal AI account.
2. I check every number, name, date and promise before anything leaves my inbox.
3. Automations send drafts to me; I send to others.
4. I preview every merge and send a test to myself first. (The AI's draft said templates need no checking — I rewrote it.)
5. I label AI-made images and documents when asked, and never write fake reviews.
6. New AI uses are approved by my manager first.
7. AI never decides about people: hiring, pay, discipline or credit.

## 7. Five-minute presentation (6 slides)
1. Time map and my three tasks
2–4. One slide per automation: before → tool → checkpoint → after, and one catch
5. Total time saved per week and month, setup, payback
6. My rules, what I will automate next, what I will never hand to AI
`,
    },
    {
      name: 'l08_teacher_demo_and_marking.md',
      title: 'Teacher demo script and marking guide — Lesson 8',
      audience: 'teacher',
      content: `# Lesson 8 demo script and marking guide: the AI work playbook

**Before class:** prepare a sample time map sheet (office executive, 8 tasks) and set up breakout rooms of three for demo day, with a 5-minute timer.

## Demo
1. Show the time map; type =E2*F2/G2 and sort. Remove a risk-3 task ("approving credit for a new customer") and say why.
2. Paste into Claude, exactly:
> I am an office executive. My top 3 tasks: weekly sales report (75 min), payment reminders to customers who opted in (40 min), meeting minutes (45 min). For each, suggest a tool from: template, mail merge, dashboard, form + summary, Apps Script, role prompt kit. Add one human checkpoint each. Short table.
   - **A "no review", "send to everyone" or "fully automatic" tip:** the catch. "That removes our checkpoint."
   - **No risky tip:** show the video version. "Tools often suggest skipping the human step to save time. We keep a light one."
3. Paste the rules prompt into ChatGPT. Ask: "Which rule would you change?" Look for anything that skips checking or allows personal data.
4. Show the six-slide outline and run a one-minute model talk.

## Answer key
- Sort, automate: sales report, opted-in fee reminders, minutes draft, form summary. Keep with people: salary increments, serious complaint, hiring choice, large refund.
- Which task first? A (360). Probe: B.

## Marking guide (with the rubric)
- **Secure looks like:** a scored time map; three working automations from course tools, each with a named checkpoint; honest before/after/setup/payback; one caught mistake; own rules covering privacy, checking, honesty, approvals and people decisions; a clear five-minute talk.
- **Common gaps:** "after" time without checks; a risk-3 task chosen; rules copied from the AI without changes; screenshots with real names.
- **Privacy red flag:** real customer, staff or student data in slides or prompts. Ask for an anonymised redo.
- **Next step:** recommend AI at Work · Level 3 (role specialisations and AI agents).
`,
    },
  ],
});
