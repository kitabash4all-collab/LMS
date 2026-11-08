// AI at Work, Made Simple · Module 1 — Your AI assistant for everyday work (lessons 1–4).
// Every lesson is hands-on in real, free AI tools. Learners are adults using their own accounts.
import { lesson } from '../kit.ts';
import { MONTHLY_SALES_CSV, SAMPLE_POLICY_MD } from './data.ts';

const CHATBOTS = ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot'];

// ───────────────────────────────── Lesson 1 ─────────────────────────────────
export const W1 = lesson(1, {
  title: 'AI in Plain Words: Your First AI Assistant',
  objective: 'Understand what an AI chatbot is (and is not), set up free accounts safely, and turn a rough note into a polite email you would actually send.',
  concept: 'Chatbots, safely',
  minutes: 60,
  hook: ['upgrade', 'sir order late, truck stuck, thurs now, sorry', 'Dear Sir, your order is delayed by the rain and will now reach you on Thursday. We are sorry for the trouble.'],
  intro: 'Welcome! Today you will meet your AI assistant, set it up safely, and write a real work email.',
  cards: [
    { emoji: '🤖', title: 'What a chatbot really is', body: 'A chatbot like ChatGPT, Claude or Gemini is like a very well-read assistant. It has read a huge amount of text and learned how words usually follow each other. When you type a request, it predicts a helpful reply, word by word.' },
    { emoji: '🔍', title: 'Not a search engine', body: 'Google search finds web pages that already exist on the internet. A chatbot writes a fresh answer every time, so it can sound confident and still be wrong. Treat it like a smart new intern: fast and useful, but always checked.' },
    { emoji: '🔐', title: 'The privacy rules', body: 'Never paste passwords, Aadhaar or PAN numbers, bank details, or client and customer data. Do not put confidential company files into a personal AI account. Swap real details for placeholders like [Client name] or [Order no.].' },
    { emoji: '✉️', title: 'Your first win: a polite email', body: 'Give the AI your rough note, say who the email is for, and ask for a polite tone. Read the draft, fix anything that is wrong, and only then send it. Your name is on it, so you are responsible for it.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Set up your free AI accounts',
      tool: 'ChatGPT · Claude · Gemini · Microsoft Copilot',
      steps: [
        'Open a browser and go to chatgpt.com, claude.ai, gemini.google.com or copilot.microsoft.com (or install the phone app).',
        'Sign up with your email, or a Google or Microsoft account. Claude needs you to be 18 or older.',
        'Find the message box at the bottom and the “New chat” button at the side or top.',
        'Open Settings and look for privacy or data controls: choose whether your chats may be used to improve the AI.',
        'Free plans have daily limits. If one tool says “limit reached”, simply switch to another.',
      ],
      say: [
        'You need just two free accounts to start, and having more is even better.',
        'Every tool has a message box, a new chat button, and a settings page.',
        'Open the settings once and look for the privacy or data controls, so you choose how your chats are used.',
        'Free plans have limits, so keeping two tools ready means you are never stuck.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Rough note to polite email',
      tool: 'Claude',
      prompt: 'Turn my rough note into a short, polite email to a customer. Note: order [Order no.] late, truck stuck because of heavy rain, new delivery Thursday, sorry, 5% off next order. Under 80 words.',
      reply: 'Subject: Update on your order [Order no.]\n\nDear Sir/Madam,\n\nWe are sorry to tell you that your order is delayed because heavy rain has stopped our delivery truck. Your order will now reach you on Thursday by 11 am. As a small apology, you will get 5% off your next order.\n\nThank you for your patience.\n\nWarm regards,\n[Your name]',
      note: 'Caught it: the note never said “by 11 am”. The AI made up a time, so delete it before sending.',
      say: [
        'Here a shop owner pastes a rough note, with a placeholder instead of the real order number.',
        'In seconds, Claude writes a clean and polite email with a subject line.',
        'But look closely: the email promises delivery by 11 am, and the note never said that.',
        'The AI filled a gap with a guess, so we delete that part before we send.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Same task, second tool',
      tool: 'Gemini',
      prompt: 'Turn my rough note into a short, polite email to a customer. Note: order [Order no.] late, truck stuck because of heavy rain, new delivery Thursday, sorry, 5% off next order. Under 80 words.',
      reply: 'Subject: Your order [Order no.] – new delivery date\n\nDear Customer,\n\nWe apologise for the delay. Heavy rain has held up our delivery truck, and your order will now arrive on Thursday. To say sorry, we are giving you 5% off your next order.\n\nThank you for understanding,\n[Your name]',
      say: [
        'Now we paste the exact same prompt into Gemini to compare.',
        'This version sticks to the facts in the note and does not add a made-up time.',
        'Trying two tools takes one minute, and you simply keep the better draft.',
      ],
    },
  ],
  build: {
    title: 'Build your AI starter kit',
    intro: 'Use your own phone or laptop. You will leave today with working accounts and five saved prompts.',
    steps: [
      { title: 'Open two tools', text: 'Sign in to at least two of ChatGPT, Claude, Gemini and Microsoft Copilot. Keep them open in two browser tabs.' },
      { title: 'Check privacy settings', text: 'In each tool, open Settings and find the privacy or data controls. Decide whether your chats may be used to improve the AI.' },
      { title: 'Your first email', text: 'Take a real rough note from your work, replace names and numbers with [placeholders], and ask for a short, polite email.', tip: 'Say who it is for: a customer, your manager, a parent, a supplier.' },
      { title: 'Compare two tools', text: 'Paste the same prompt into your second tool. Which draft is closer to the facts? Did either one add something you never said?' },
      { title: 'Save five prompts', text: 'Copy the five starter prompts from your project kit into a notes app, Google Doc or Word file called “My AI starter kit”.' },
    ],
  },
  acts: [
    {
      ai: 'Arjun, an office executive, has this rough note: “client meeting moved Tue to Wed 3pm, venue same, bring last quarter numbers”. Write a prompt that asks the AI to turn it into an email. Say what to write, who it is for, the tone, the facts and the length.',
      title: 'Prompt Lab: rough note to polite email',
      starter: 'Write an email about the meeting.',
      checks: [
        ['Say what you want written (an email)', ['email', 'mail']],
        ['Say who it is for', ['client', 'customer', 'manager', 'team', 'to my', 'for my']],
        ['Ask for a tone', ['polite', 'friendly', 'formal', 'professional', 'warm', 'respectful']],
        ['Include the facts from the note', ['wednesday', 'wed', '3 pm', '3pm', 'note:']],
        ['Set a length', ['short', 'words', 'lines', 'brief', 'sentences']],
      ],
      exemplar: 'Turn my rough note into a short, polite email to a client. Note: our meeting is moved from Tuesday to Wednesday at 3 pm, the venue is the same, and please bring last quarter’s numbers. Keep it under 80 words and end with a thank-you.',
      tools: CHATBOTS,
    },
    {
      sort: 'Safe to paste into a personal AI account, or not?',
      buckets: ['Safe to paste', 'Never paste (or replace with placeholders first)'],
      items: [
        ['A rough note: “meeting moved to Wednesday 3 pm”', 0],
        ['Your email password', 1],
        ['A customer’s Aadhaar number for KYC', 1],
        ['A public news article about a GST change', 0],
        ['A client’s balance sheet from the CA office', 1],
        ['A template letter that says [Client name] instead of the real name', 0],
        ['A photo of your PAN card', 1],
        ['The list of product categories in your shop', 0],
        ['Your colleagues’ salary details', 1],
      ],
      why: 'Public or general information is fine. Passwords, ID numbers, client files and anyone’s personal details are never pasted. Replace them with placeholders first.',
      hint: 'Ask: would I be in trouble if this appeared on a stranger’s screen?',
    },
    {
      mcq: 'When you ask a chatbot a question, what is it actually doing?',
      options: ['Searching Google and copying the top result', 'Predicting a likely, helpful reply, word by word, from patterns it learned', 'Looking up a book of checked facts', 'Passing your message to a human expert'],
      answer: 1,
      why: 'A chatbot predicts words. That is why it writes so smoothly, and also why it can sound sure while being wrong.',
      title: 'What is it really doing?',
      wrong: { 0: 'Some tools can also search the web, but the reply itself is written by prediction, not copied.', 2: 'There is no checked fact book inside. That is why you check important facts yourself.' },
    },
    {
      order: 'Put the safe way to use an AI draft in order.',
      steps: ['Replace private details with [placeholders]', 'Write your prompt with the facts and the tone', 'Read the AI’s draft fully', 'Check every name, date, number and promise against your note', 'Edit it into your own voice', 'Put the real details back and send'],
      why: 'Privacy first, then prompt, then check, then send. You never send a draft you have not read.',
      title: 'The safe email routine',
    },
    {
      mcq: 'Riya, a sales rep, asks AI for a follow-up email to a customer. The draft says: “As promised, you will get a 10% discount.” Riya never promised any discount. What should she do?',
      options: ['Send it; the customer will be happy', 'Delete the discount line, then check the rest of the email before sending', 'Stop using AI completely', 'Ask the AI if the discount is true'],
      answer: 1,
      why: 'The AI invented a promise. Remove it, check every other fact, and then send. The AI cannot know what Riya promised, so asking it again does not help.',
      title: 'New situation: the surprise discount',
      phase: 'probe',
    },
    {
      write: 'Your starter kit: name the two AI tools you set up, paste one of your five saved prompts, and write the one privacy rule you will follow at your workplace.',
      keywords: ['prompt', 'never', 'check'],
      exemplar: 'I set up ChatGPT and Gemini. One saved prompt: “Turn my rough note into a short, polite email to a customer. Note: [paste note]. Under 80 words.” My rule: I never paste customer names, phone numbers or invoices; I use placeholders and I check every draft before sending.',
      minWords: 30,
      phase: 'probe',
      title: 'My AI starter kit',
    },
  ],
  teacher: {
    explain: 'Start with what learners fear: that AI is complicated. It is not. A chatbot is a very well-read assistant that predicts the next words of a helpful reply; it is not a search engine and it does not “know” facts the way a book does. That is why it is brilliant at drafting and rewording, and why it can confidently make things up. Today everyone sets up at least two free accounts, learns three privacy rules, and sends themselves a polite email made from a rough note. Keep every example from real Indian workplaces: a shop, a school, an office, a CA firm.',
    analogy: 'A chatbot is like a very well-read new intern on day one: fast, polite and full of ideas, but it does not know your customers, so you check its work before it goes out.',
    vocab: [
      ['AI chatbot', 'A tool you type to (like ChatGPT, Claude, Gemini or Copilot) that writes a reply for you.'],
      ['prompt', 'The message or instruction you type to the AI.'],
      ['hallucination', 'When the AI makes something up and says it confidently, like a wrong date or a promise you never made.'],
      ['placeholder', 'A blank like [Client name] that you use instead of real private details.'],
      ['free plan', 'The no-cost version of a tool, with daily limits on how much you can use it.'],
    ],
    demo: '1) Share your screen with ChatGPT and Claude (or Gemini) open in two tabs. 2) Read out a rough note: “order late, truck stuck because of heavy rain, new delivery Thursday, sorry, 5% off next order”. 3) Type the prompt from the video into the first tool. Point out the subject line and polite tone. 4) Ask the class: “Is anything in this email NOT in my note?” Look for invented times, dates or promises; if the AI happens to be accurate, show the 11 am example from the video. 5) Paste the same prompt into the second tool and compare in one sentence. 6) Show the privacy settings page of one tool and where the data controls are. Never type a real customer’s details on screen.',
    unplugged: 'Finish my sentence (5 min): say the start of common office phrases (“Please find the…”, “Sorry for the…”, “Thank you for your…”) and the class shouts the next word. Then say: “You just did what a chatbot does: predict the most likely next word. Did anyone know the actual fact? No. That is why AI can sound right and be wrong.”',
    prompts: [
      ['Is a chatbot the same as Google search?', 'No. Search finds existing pages; a chatbot writes a new answer by predicting words, so it can be wrong.'],
      ['Name two things you will never paste into an AI tool.', 'Any two of: passwords, Aadhaar/PAN, bank details, client data, confidential company files.'],
      ['What is a placeholder?', 'A blank like [Client name] used instead of the real private detail.'],
      ['Why try the same prompt in two tools?', 'To compare drafts, catch made-up details, and keep working if one tool hits its limit.'],
      ['Who is responsible for an email the AI drafted?', 'You are, because you send it.'],
    ],
    support: 'Pair a confident learner with a nervous one for account setup. Learners who struggle to type can use the microphone button on the phone app to speak their rough note.',
    stretch: 'Ask the AI to write the same email in three tones (formal, friendly, very short) and decide which suits which customer.',
    mis: [
      ['AI looks things up, so its facts are correct.', 'It predicts words. Check every name, date, number and promise.'],
      ['If the account is free, my data does not matter.', 'Free or paid, never paste private or client data. Use placeholders.'],
      ['I need to learn coding or special commands.', 'You just type normal sentences, in English or Hindi.'],
      ['One tool is “the best”, so I only need one.', 'Each tool has strengths and limits; knowing two keeps you flexible.'],
    ],
    successCriteria: ['I can explain in plain words what an AI chatbot does.', 'I can set up and use two free AI tools.', 'I can follow the privacy rules and use placeholders.', 'I can turn a rough note into a polite email and check it before sending.'],
    homework: 'Use your starter prompt on two real rough notes from your work this week (with placeholders). Note one thing the AI got wrong or added, and how you fixed it.',
    exit: 'Give one example of something you will never paste into an AI tool, and say why.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Finish my sentence” prediction game (see Unplugged). Link it to how chatbots work.' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the lesson video. Thumbs poll: “Who has used ChatGPT, Gemini or Copilot before?” and “Who has ever trusted a WhatsApp forward that was wrong?”' },
      { minutes: 6, stage: 'Live demo', doing: 'Rough note to polite email in two tools; class spots anything the AI added that was not in the note.' },
      { minutes: 10, stage: 'Build along (pairs)', doing: 'Set up two accounts, open the privacy settings, write the first email. Pair helpers support anyone stuck on sign-up.' },
      { minutes: 10, stage: 'Prompt Lab', doing: 'Prompt Lab: rough note to polite email. Learners check, improve, then paste into two tools and compare.' },
      { minutes: 7, stage: 'Team game', doing: 'Quick competition: “Safe to paste or not?” sort, played in two teams. Fastest correct team explains one tricky card.' },
      { minutes: 6, stage: 'Breakout pairs', doing: 'Pairs swap their drafts and hunt for one invented detail or wrong fact. Then do the safe-email routine order game.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Three volunteers read out their before (rough note) and after (email) and say what they edited.' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: the surprise discount (individual), and start “My AI starter kit”.' },
      { minutes: 3, stage: 'Wrap-up', doing: 'Exit ticket, homework, and save the five starter prompts from the project kit.' },
    ],
  },
  files: [
    {
      name: 'l01_ai_starter_kit.md',
      title: 'My AI starter kit (project kit)',
      audience: 'student',
      content: `# My AI starter kit — Lesson 1

## 1. My accounts (tick when done)
- [ ] ChatGPT (chatgpt.com) — free plan
- [ ] Claude (claude.ai) — free plan, 18+
- [ ] Gemini (gemini.google.com) — free with a Google account
- [ ] Microsoft Copilot (copilot.microsoft.com) — free with a Microsoft account
- [ ] I opened Settings in each tool and checked the privacy / data controls

Free plans have daily limits. If one says "limit reached", switch to another tool.

## 2. The three privacy rules
1. **Never paste** passwords, OTPs, Aadhaar, PAN, bank or card details.
2. **Never paste** client, customer, patient or student personal data, or confidential company files, into a personal AI account.
3. **Use placeholders**: [Client name], [Order no.], [Phone], [Amount]. Put the real details back only in your final email.

## 3. My five starter prompts (copy, fill the [brackets], use)
1. **Rough note to email:** Turn my rough note into a short, polite email to a [customer / manager / supplier]. Note: [paste note]. Keep it under 80 words.
2. **Make it polite:** Rewrite this message so it is polite and professional but still clear. Keep the meaning the same: [paste message]
3. **Shorter please:** Make this shorter and simpler, in under 50 words, without losing any facts: [paste text]
4. **Reply to a message:** Write a friendly reply to this message from a [customer / parent / colleague]. My answer is: [your answer in a few words]. Message: [paste message]
5. **Check my writing:** Check this for spelling and grammar mistakes. Show me the corrected version and list what you changed: [paste text]

## 4. My checklist before sending anything AI wrote
- [ ] Every name, date, time, number and amount matches my note
- [ ] No promise I did not make (discounts, times, refunds)
- [ ] It sounds like me
- [ ] Real details put back in place of placeholders

## 5. Worked example
**Rough note:** order late, truck stuck because of heavy rain, new delivery Thursday, sorry, 5% off next order

**Prompt:** Turn my rough note into a short, polite email to a customer. Note: order [Order no.] late, truck stuck because of heavy rain, new delivery Thursday, sorry, 5% off next order. Under 80 words.

**What the AI got wrong:** it added "by 11 am". My note never said a time, so I deleted it.

**Final email (after my check):** Dear Sir/Madam, We are sorry that your order is delayed because heavy rain stopped our delivery truck. It will now reach you on Thursday. As a small apology, you will get 5% off your next order. Thank you for your patience. Warm regards, [Your name]
`,
    },
    {
      name: 'l01_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 1',
      audience: 'teacher',
      content: `# Lesson 1 demo script: rough note to polite email

**Before class:** log in to two tools (for example ChatGPT and Gemini, or Claude and Copilot). Close any old chats. Have nothing private open on screen.

## Step 1 — Say
"A chatbot is a very well-read assistant. It predicts a helpful reply word by word. It is not Google. It can be wrong, so we check."

## Step 2 — Type exactly (tool 1)
> Turn my rough note into a short, polite email to a customer. Note: order [Order no.] late, truck stuck because of heavy rain, new delivery Thursday, sorry, 5% off next order. Under 80 words.

Point out: the subject line, the polite opening, the placeholder kept as [Order no.].

## Step 3 — Ask the class
"Is there anything in this email that was NOT in my note?" Give them 30 seconds.
- **If the AI added a time, a date, a refund or a bigger discount:** "Great catch. This is called a hallucination: the AI filled a gap with a guess. We delete it."
- **If the AI was accurate:** "Good. Here is one from earlier where it added 'by 11 am'" (show the video frame). "It does not happen every time, which is exactly why we check every time."

## Step 4 — Type the same prompt in tool 2
Compare in one sentence: which is closer to the facts? Which sounds more like you?

## Step 5 — Follow-up (show that you can talk back)
> Make it warmer and add one line saying they can call us if they have questions. Do not add any new facts.

## Step 6 — Privacy settings
Open Settings in one tool and show the privacy / data controls. Do not recommend a setting; explain the choice.

## If something goes wrong
- **"Limit reached" on a free plan:** switch tools, and say "This is why we keep two."
- **A learner pastes a real phone number or name:** stop kindly, delete the chat together, and repeat the placeholder rule.
- **The AI refuses or gives a weird answer:** start a new chat and type the prompt again. Say "It is a prediction, so it can vary."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 2 ─────────────────────────────────
export const W2 = lesson(2, {
  title: 'Ask Better, Get Better: The 4-Part Prompt',
  objective: 'Write clear prompts with a Role, Task, Context and Format, improve replies with follow-ups, and build a library of 10 prompts for your own job.',
  concept: 'Role, Task, Context, Format',
  minutes: 60,
  hook: ['upgrade', 'reply to customer', 'You are my shop’s polite helper. Reply on WhatsApp to a customer whose cooler is late. It arrives Friday. 3 short lines.'],
  intro: 'Today you will learn four simple parts that make AI replies useful the first time.',
  cards: [
    { emoji: '🎭', title: 'Role and Task', body: 'Role tells the AI who to be, for example a polite customer-care helper for your shop. Task says exactly what you want, for example a WhatsApp reply to a customer. Start every prompt you write with these two simple parts.' },
    { emoji: '📋', title: 'Context', body: 'Context is the background the AI cannot guess: who the reader is, what happened, and the facts. The AI does not know your shop, your school or your client. The more useful facts you give, the fewer facts it makes up.' },
    { emoji: '📐', title: 'Format', body: 'Format is the shape of the answer: length, bullet points, a table, Hindi or English, formal or friendly. Saying “3 short lines for WhatsApp” saves you from editing a long essay.' },
    { emoji: '🔁', title: 'Follow-ups and “ask me first”', body: 'The first reply is a draft, not the end. Reply with “shorter”, “more polite” or “in Hindi” to improve it. For bigger tasks, add “Ask me any questions you need before you write.”' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'A vague prompt',
      tool: 'ChatGPT',
      prompt: 'Write a reply to a customer.',
      reply: 'Dear Valued Customer,\n\nThank you for reaching out to us. We truly appreciate your business and are committed to providing you with the best possible service. Please let us know how we can assist you further.\n\nBest regards,\n[Your Company]',
      note: 'Polite, but useless: the AI had to guess everything.',
      say: [
        'Here is the prompt most people type first: write a reply to a customer.',
        'The answer is polite, but it says nothing, because the AI had to guess everything.',
      ],
    },
    {
      kind: 'chat',
      heading: 'The 4-part prompt',
      tool: 'Claude',
      prompt: 'You are a polite customer-care helper for my electronics shop in Indore (Role). Write a WhatsApp reply (Task) to a customer whose cooler, ordered on Monday, has not arrived because our delivery van broke down; it will now come on Friday before 6 pm (Context). Keep it to 3 short lines in simple English, with one line in Hindi (Format).',
      reply: 'Namaste! We are very sorry your cooler is late. Our delivery van broke down, but your cooler will reach you this Friday before 6 pm.\nआपके धैर्य के लिए धन्यवाद।\nPlease message us here if you need anything.',
      say: [
        'Now the same job with all four parts: role, task, context and format.',
        'The reply has the real reason, the new day and time, and fits on a phone screen.',
        'Same tool, same minute, but a far better answer, because you gave it what it needed.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Ask me questions first',
      tool: 'Gemini',
      prompt: 'You are an experienced school coordinator. I need a notice for parents about next month’s parent-teacher meeting, in English and Hindi. Ask me any questions you need before you write.',
      reply: 'Happy to help! Before I write, please tell me:\n1. The date, time and place of the meeting?\n2. Which classes is it for?\n3. Should parents bring anything, like the report card?\n4. Is there a way to reply, such as a slip or a WhatsApp number?',
      say: [
        'For bigger tasks, ask the AI to ask you questions first.',
        'Gemini asks for the date, the classes and what to bring, which are things a good assistant would check.',
        'You answer in one message, and the notice comes out right the first time.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Hindi to English, with a catch',
      tool: 'Microsoft Copilot',
      prompt: 'Translate this customer message into polite English: “Bhaiya, payment kal tak bhej dunga, order hold rakhna please.”',
      reply: '“Brother, I sent the payment yesterday. Please keep the order on hold.”',
      note: 'Caught it: “kal tak bhej dunga” means “I will send it by tomorrow”. In Hindi, “kal” can mean yesterday or tomorrow.',
      say: [
        'Translation is a daily job, so let’s try a customer’s message in Hinglish.',
        'Copilot says the payment was sent yesterday, but the customer said they will send it by tomorrow.',
        'In Hindi, kal means both yesterday and tomorrow, and the AI guessed wrong.',
        'If you can read both languages, always check the meaning, not just the grammar.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Save your prompts so you never retype them',
      tool: 'Notes app · Google Docs · Word',
      steps: [
        'Make a document called “My prompt library”.',
        'Give each prompt a short name, like “Late delivery reply”.',
        'Write the 4 parts and put [square brackets] around the bits that change each time.',
        'When you need it, copy, fill the brackets, and paste into any AI tool.',
      ],
      say: [
        'Good prompts are worth saving, just like a good letter format.',
        'Put brackets around the parts that change, and you can reuse a prompt in seconds, in any tool.',
      ],
    },
  ],
  build: {
    title: 'Build your prompt library',
    intro: 'Think about your real week at work. You will write, test and save 10 reusable prompts.',
    steps: [
      { title: 'List your writing jobs', text: 'Write down the 5 messages you write most often: customer replies, reminders, notices, reports, follow-ups.' },
      { title: 'Write one 4-part prompt', text: 'Pick your most common job and write Role, Task, Context and Format. Put [brackets] around the parts that change.' },
      { title: 'Test it in two tools', text: 'Fill the brackets with practice details and try it in two tools. Fix the prompt, not just the answer.', tip: 'If both tools get the same thing wrong, your prompt is missing context.' },
      { title: 'Add a follow-up', text: 'Under each prompt, save one follow-up that usually helps, like “Make it shorter” or “Also give a Hindi version”.' },
      { title: 'Reach 10', text: 'Use the templates in your project kit to reach 10 prompts. Include at least one translation and one “ask me questions first” prompt.' },
    ],
  },
  acts: [
    {
      ai: 'A customer messages your shop on WhatsApp: “The cooler I ordered on Monday has still not come. What is happening?” The delivery van broke down; it will now come on Friday. Write a 4-part prompt (Role, Task, Context, Format) to get a good reply.',
      title: 'Prompt Lab: the 4-part WhatsApp reply',
      starter: 'Reply to the customer about the cooler.',
      checks: [
        ['Role: tell the AI who to be', ['you are', 'act as', 'as a', 'as my', 'pretend']],
        ['Task: say exactly what to write', ['reply', 'write', 'draft', 'respond', 'message']],
        ['Context: the facts (van broke down, new day)', ['van', 'broke', 'friday', 'because', 'delayed', 'late']],
        ['Format: length, style or language', ['lines', 'words', 'short', 'bullet', 'whatsapp', 'hindi', 'simple english']],
      ],
      exemplar: 'You are a polite customer-care helper for my electronics shop. Write a WhatsApp reply to a customer whose cooler, ordered on Monday, is late because our delivery van broke down. It will now arrive on Friday before 6 pm. Keep it to 3 short lines in simple English and say sorry once.',
      tools: CHATBOTS,
    },
    {
      ai: 'Meera, a school teacher, needs a notice for parents about a parent-teacher meeting, in English and Hindi. Write a prompt that gives a role and a task, asks for both languages, sets a format, and asks the AI to ask you questions before it writes.',
      title: 'Prompt Lab: ask me questions first',
      starter: 'Write a PTM notice.',
      checks: [
        ['Role: who the AI should be', ['you are', 'act as', 'as a', 'as an']],
        ['Task: a notice, circular or message', ['notice', 'circular', 'message', 'letter']],
        ['Both languages', ['hindi']],
        ['Ask the AI to ask you questions first', ['ask me', 'questions first', 'before you write', 'before writing', 'clarifying']],
        ['Format: length or layout', ['lines', 'words', 'short', 'simple', 'bullet', 'one page', 'half page']],
      ],
      exemplar: 'You are an experienced school coordinator. Write a short notice for parents about next month’s parent-teacher meeting, first in simple English and then in Hindi. Keep each version under 100 words. Ask me any questions you need before you write, such as the date, time and classes.',
      tools: ['Gemini', 'ChatGPT', 'Claude', 'Microsoft Copilot'],
    },
    {
      match: 'Match each part of a prompt to its example (a CA’s assistant writing to clients)',
      pairs: [
        ['Role', 'You are an experienced assistant in a CA office.'],
        ['Task', 'Draft a reminder asking clients to send their bills.'],
        ['Context', 'The return filing date is close and 12 clients have not sent bills yet.'],
        ['Format', 'Make it a WhatsApp message under 50 words.'],
      ],
      why: 'Role = who the AI is. Task = what to make. Context = the background and facts. Format = the shape and length of the answer.',
    },
    {
      mcq: 'Better prompt: A or B? A: “Write a leave application.” B: “You are a helpful writing assistant. Write a short, polite leave application to my manager for 2 days, 12–13 November, for my sister’s wedding in Jaipur. Under 80 words.”',
      options: ['A, because short prompts are better', 'B, because it gives role, task, context and format', 'Both will give the same result', 'Neither; AI cannot write leave letters'],
      answer: 1,
      why: 'B gives the reader, dates, reason and length, so the first draft is usable. A forces the AI to invent dates and reasons.',
      title: 'Better prompt: A or B?',
    },
    {
      order: 'Kabir’s first AI reply is too long and too formal. Put his follow-ups in a sensible order.',
      steps: ['Read the first draft fully', 'Ask: “Make it shorter, under 4 lines”', 'Ask: “Make it friendlier, like a WhatsApp message”', 'Check the facts are still correct', 'Save the improved prompt in your library'],
      why: 'Improve step by step, check facts after every change, then save the prompt so next time it is right first time.',
      title: 'Improve it with follow-ups',
    },
    {
      mcq: 'A customer writes: “Payment kal tak bhej dunga.” The AI translates it as “I sent the payment yesterday.” What is the best next step?',
      options: ['Trust the AI; it knows Hindi', 'Check the meaning yourself and fix it to “I will send the payment by tomorrow”, then add context to your prompt next time', 'Reply to the customer saying thanks for paying', 'Translate it again in another tool and pick the most popular answer'],
      answer: 1,
      why: '“Kal” can mean yesterday or tomorrow; here “bhej dunga” (will send) shows it means tomorrow. You know the language and the customer, so you check the meaning.',
      title: 'New situation: the “kal” problem',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'The biggest jump in AI quality comes from the prompt, not the tool. Teach four plain words: Role (who the AI should be), Task (what to make), Context (the facts it cannot guess) and Format (the shape: length, bullets, language). Then show that a prompt is a conversation: follow-ups like “shorter” or “in Hindi” fix most drafts. For bigger tasks, “ask me questions first” makes the AI collect what it needs. Every learner leaves with a personal library of 10 prompts for their own job.',
    analogy: 'Giving a prompt is like briefing a new staff member: “You’re on the counter today (role). Reply to this customer (task). Her order is late because the van broke down (context). Keep it short and friendly (format).”',
    vocab: [
      ['Role', 'Who you want the AI to act as, like a polite shop helper or an HR assistant.'],
      ['Task', 'The exact job: write, reply, translate, summarise.'],
      ['Context', 'The background facts the AI cannot know unless you tell it.'],
      ['Format', 'The shape of the answer: length, bullets, table, language, tone.'],
      ['follow-up', 'A second message that improves the first reply, like “make it shorter”.'],
      ['prompt library', 'Your saved, reusable prompts with [brackets] for the parts that change.'],
    ],
    demo: '1) Type “Write a reply to a customer.” in ChatGPT and read the empty, generic answer aloud. 2) Ask the class for the four missing parts and type them in as they call out: Role, Task, Context, Format (use the cooler example). 3) Run it in Claude or Gemini too. 4) Follow up live: “Make it shorter” then “Add one line in Hindi”. 5) Show “Ask me any questions you need before you write” with the PTM notice and answer the questions out loud. 6) Translate “Payment kal tak bhej dunga” and ask the Hindi speakers to check it.',
    unplugged: 'Bad brief, good brief (5 min): one volunteer is the “assistant” and must draw or act out “make me something nice”. Then the class gives a 4-part brief (“You are a sign painter; make a sign for my tea stall; it opens at 7 am; big letters, 3 words”). Ask: what changed?',
    prompts: [
      ['What are the four parts of a good prompt?', 'Role, Task, Context, Format.'],
      ['Which part stops the AI from inventing facts?', 'Context, because you give it the real facts.'],
      ['The reply is too long. What do you do?', 'Send a follow-up: “Make it shorter, under 4 lines.”'],
      ['When should you say “ask me questions first”?', 'For bigger or unclear tasks, like a notice, a report or a plan.'],
      ['Why use [brackets] in saved prompts?', 'So you can reuse the prompt by filling in only the parts that change.'],
    ],
    support: 'Give a fill-in card: “You are ___. Write ___ for ___. The facts are ___. Keep it ___.” Learners can speak the prompt using the microphone and edit it after.',
    stretch: 'Write one prompt that produces a reply in English, Hindi and one more Indian language; ask a colleague who speaks it to check the meaning.',
    mis: [
      ['Long prompts confuse the AI.', 'Clear details help. Long is fine if every line is useful.'],
      ['If the first answer is bad, the tool is bad.', 'Improve the prompt or send a follow-up first.'],
      ['AI translation is always correct.', 'It can miss meaning (like “kal”). Check if you know the language, or ask someone who does.'],
      ['I must use special words or English only.', 'Plain sentences work in English, Hindi or Hinglish.'],
    ],
    successCriteria: ['I can write a prompt with Role, Task, Context and Format.', 'I can improve a reply with follow-up messages.', 'I can ask the AI to ask me questions first for bigger tasks.', 'I can save reusable prompts in my own prompt library.'],
    homework: 'Use three prompts from your library at work this week (with placeholders). Improve any prompt that needed many follow-ups, and bring your best before/after.',
    exit: 'Write the four parts of a prompt for a message you will send tomorrow.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Bad brief, good brief” acting game (see Unplugged).' },
      { minutes: 4, stage: 'Watch', doing: 'Play the lesson video. Pause after the vague prompt: thumbs up or down, would you send it?' },
      { minutes: 6, stage: 'Live demo', doing: 'Vague prompt, then the class builds the 4-part prompt live; follow-ups; “ask me first”; the “kal” translation check.' },
      { minutes: 8, stage: 'Prompt Lab 1', doing: 'Prompt Lab: the 4-part WhatsApp reply. Paste into two tools and compare.' },
      { minutes: 6, stage: 'Quick competition', doing: 'Match the prompt parts and “Better prompt: A or B?” played as a race; first three correct answers win.' },
      { minutes: 7, stage: 'Prompt Lab 2 (pairs)', doing: 'Prompt Lab: ask me questions first. One partner plays the AI and asks the questions; then try it in a real tool.' },
      { minutes: 10, stage: 'Build along', doing: 'Build your prompt library: list writing jobs, write and test prompts in two tools. Teacher circulates.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Three learners share their most useful saved prompt and the follow-up they added.' },
      { minutes: 5, stage: 'Probe', doing: 'Improve it with follow-ups (order game) and the “kal” problem (individual).' },
      { minutes: 4, stage: 'Wrap-up', doing: 'Exit ticket and homework; learners complete their library to 10 prompts using the project kit.' },
    ],
  },
  files: [
    {
      name: 'l02_prompt_library_kit.md',
      title: 'My prompt library (project kit)',
      audience: 'student',
      content: `# My prompt library — Lesson 2

## The 4-part prompt
| Part | Ask yourself | Example |
|---|---|---|
| **Role** | Who should the AI be? | You are a polite customer-care helper for my shop. |
| **Task** | What exactly should it make? | Write a WhatsApp reply. |
| **Context** | What facts can it not guess? | The cooler is late because our van broke down; it will come Friday before 6 pm. |
| **Format** | What shape should the answer be? | 3 short lines, simple English, one line in Hindi. |

**Magic follow-ups:** "Make it shorter." · "More polite." · "Friendlier, like WhatsApp." · "Give me 3 options." · "Also in Hindi." · "Do not add any new facts."

**For bigger tasks add:** "Ask me any questions you need before you write."

## 10 templates (fill the [brackets], then save your own versions)
1. **Customer reply:** You are a polite helper for my [type of business]. Write a WhatsApp reply to a customer who asked [question]. The answer is [facts]. Keep it under [3] lines.
2. **Late delivery:** You are my shop's customer-care helper. Write a short apology to a customer whose [item] is late because [reason]. New date: [date]. Under 60 words, warm tone.
3. **Payment reminder:** You are a friendly accounts assistant. Write a polite reminder to a client that invoice [no.] for [amount] was due on [date]. Give the UPI / bank option: [details]. Under 60 words, not rude.
4. **Notice to parents/staff:** You are an experienced school coordinator / office admin. Write a notice about [event] on [date, time, place]. In English and then Hindi, under 100 words each. Ask me questions first if anything is missing.
5. **Meeting follow-up:** You are my executive assistant. Write a follow-up email after a meeting with [team/client] about [topic]. Decisions: [list]. Next steps: [list]. Bullet points, under 120 words.
6. **Leave application:** Write a short, polite leave application to my manager for [dates] because [reason]. Under 80 words.
7. **Hindi to English:** Translate this message into polite, simple English. Keep the exact meaning; if any word could mean two things, tell me: [message]
8. **English to Hindi:** Translate this into simple, everyday Hindi (not very formal) that a customer will understand: [text]
9. **Sales follow-up:** You are a friendly sales rep. Write a follow-up to a [type of customer] who asked for a quote for [product] [days] ago. Remind them of [one benefit]. No discounts unless I mention one. Under 70 words.
10. **Say no politely:** Write a polite reply saying we cannot [request] because [reason], and offer [alternative]. Under 60 words.

## Checklist for every saved prompt
- [ ] Has Role, Task, Context, Format
- [ ] [Brackets] for the parts that change — no real private details saved
- [ ] Tested in two tools
- [ ] One useful follow-up saved under it

## Worked example: before and after
**Before:** reply to customer
**After:** You are a polite customer-care helper for my electronics shop. Write a WhatsApp reply to a customer whose cooler, ordered on Monday, is late because our delivery van broke down. It will now arrive on Friday before 6 pm. Keep it to 3 short lines in simple English and say sorry once.
**Caught mistake:** In a translation, the AI turned "kal tak bhej dunga" into "sent yesterday". It means "will send by tomorrow". Template 7 now asks the AI to flag words with two meanings.
`,
    },
    {
      name: 'l02_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 2',
      audience: 'teacher',
      content: `# Lesson 2 demo script: from vague to 4-part

## Step 1 — Vague prompt (ChatGPT or any tool)
> Write a reply to a customer.

Say: "Polite, but useless. What did the AI have to guess?" (who, what happened, how long, what language)

## Step 2 — Build it with the class
Write on the board as learners call out the parts, then type:
> You are a polite customer-care helper for my electronics shop in Indore. Write a WhatsApp reply to a customer whose cooler, ordered on Monday, has not arrived because our delivery van broke down; it will now come on Friday before 6 pm. Keep it to 3 short lines in simple English, with one line in Hindi.

Run it in a second tool too.

## Step 3 — Follow-ups
> Make it shorter.
> Make it friendlier, like a WhatsApp message. Do not add any new facts.

## Step 4 — Ask me first
> You are an experienced school coordinator. I need a notice for parents about next month's parent-teacher meeting, in English and Hindi. Ask me any questions you need before you write.

Answer its questions aloud with made-up practice details (date, classes, what to bring).

## Step 5 — Translation check
> Translate this customer message into polite English: "Bhaiya, payment kal tak bhej dunga, order hold rakhna please."

Ask Hindi speakers: "Is this right?" Correct meaning: "I will send the payment by tomorrow; please keep the order on hold."
- **If the AI gets it wrong ("yesterday"):** "Perfect, this is our caught mistake. 'Kal' means both yesterday and tomorrow; 'bhej dunga' means will send."
- **If the AI gets it right:** "Good this time. Now ask it: 'Could kal mean yesterday here?' and see how it explains. Always check meaning when you know both languages."

## If something goes wrong
- The reply invents a discount or time: point to it and add "Do not add any facts I did not give" as a saved follow-up.
- The Hindi is very formal (shuddh Hindi): follow up with "Use everyday spoken Hindi."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 3 ─────────────────────────────────
export const W3 = lesson(3, {
  title: 'Documents and Meetings: Summarise, Ask, Check',
  objective: 'Use AI to summarise a long document, turn meeting notes into action items with owners and dates, ask questions of a document, and check every answer against the original.',
  concept: 'Summaries you can trust',
  minutes: 60,
  hook: ['word', '12 pages → 1 page', 'and every line checked against the original'],
  intro: 'Today AI reads long policies and meeting notes with you, and you learn to check what it says.',
  cards: [
    { emoji: '📄', title: 'Summarise for a purpose', body: 'Attach the document with the paperclip or + button, then say who the summary is for and why. “A one-page summary for new staff: what changes, deadlines and amounts” beats “summarise this”. Ask it to mention the section for each point.' },
    { emoji: '❓', title: 'Ask the document questions', body: 'You can ask, “What is the last date to submit a travel claim?” and get an answer in seconds. Ask it to quote the exact line and the section number. If the answer is not in the document, tell it to say so instead of guessing.' },
    { emoji: '📚', title: 'NotebookLM: answers from your sources', body: 'NotebookLM is a free Google tool that answers only from the files you add, called sources. Each answer has small numbered links that jump to the exact lines it used. It is ideal for policies, manuals and study material.' },
    { emoji: '✅', title: 'Meeting notes to action items', body: 'Paste rough meeting notes and ask for a table: task, owner, deadline. If a task has no owner or date, ask the AI to mark it as missing. Then check every name and date before sharing.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Attach a document in Claude or ChatGPT',
      tool: 'Claude · ChatGPT',
      steps: [
        'Open a new chat.',
        'Click the paperclip or + button and choose your PDF, Word file or text file.',
        'Type what you want: the reader, the purpose, the length, and “mention the section number for each point”.',
        'Ask follow-up questions in the same chat, like “What are the deadlines?”',
        'Open the original and check every number and date the AI gives you.',
      ],
      say: [
        'Both Claude and ChatGPT let you attach a file with the paperclip or plus button.',
        'Say who the summary is for, how long it should be, and ask for section numbers.',
        'Those section numbers are your shortcut for checking the original quickly.',
      ],
    },
    {
      kind: 'chat',
      heading: 'A one-page summary',
      tool: 'Claude',
      prompt: '[Attached: Staff Travel, Leave and Reimbursement Policy, practice file] Summarise this for new staff in under 150 words: what changed, key deadlines and amounts. Put the section number after each point. If something is unclear, say so.',
      reply: '• Starts 1 November 2026; claims and leave move to the HR app (s. 1, 10).\n• Work from home: up to 4 days a month for office roles, with approval (s. 3.3).\n• Apply for earned leave 7 days ahead; 3 weeks ahead for more than 5 days (s. 3.2).\n• Travel must be approved before booking (s. 4.1).\n• Submit claims within 15 days; claims older than 60 days are not paid (s. 6.1).\n• Approved claims are paid within 10 working days (s. 6.3).\n• New monsoon rule for heavy-rain warnings (s. 4.4).',
      say: [
        'We attach a twelve-section practice policy and ask for a summary for new staff.',
        'Claude gives short points, each with its section number, so checking takes minutes, not hours.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Ask a question, catch a mistake',
      tool: 'ChatGPT',
      prompt: 'From the attached policy: how many days do I have to submit a travel claim after I return?',
      reply: 'You have 30 days after returning from your trip to submit your travel claim in the HR app.',
      note: 'Caught it: section 6.1 says 15 days, not 30. Always open the original.',
      say: [
        'Now a quick question about the same document in ChatGPT.',
        'The answer says thirty days, which sounds believable.',
        'We open section six point one, and the policy actually says fifteen days.',
        'One wrong number like this could cost someone their money, so we always check.',
      ],
    },
    {
      kind: 'steps',
      heading: 'NotebookLM: answers with sources',
      tool: 'NotebookLM',
      steps: [
        'Go to notebooklm.google.com and sign in with a Google account.',
        'Create a new notebook.',
        'Add sources: upload a PDF, paste text, or add a Google Doc or website link.',
        'Ask a question in the chat box.',
        'Click the small numbered markers in the answer to see the exact lines it used.',
      ],
      say: [
        'NotebookLM answers only from the sources you add to a notebook.',
        'Each answer has small numbered markers, and clicking one shows the exact lines it used.',
        'That makes checking very fast, but you still read those lines yourself.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Meeting notes to action items',
      tool: 'Gemini',
      prompt: 'Turn these meeting notes into a table of action items with columns: Task, Owner, Deadline. If an owner or deadline is missing, write “MISSING”. Notes: Diwali stock – Zoya to order by 20 Oct. Kabir check godown space. New price list to all shops before Diwali. Arjun to fix billing printer Friday.',
      reply: '| Task | Owner | Deadline |\n|---|---|---|\n| Order Diwali stock | Zoya | 20 Oct |\n| Check godown space | Kabir | MISSING |\n| Send new price list to all shops | MISSING | Before Diwali |\n| Fix billing printer | Arjun | Friday |',
      say: [
        'Meeting notes are messy, so we ask for a clean table of task, owner and deadline.',
        'Gemini marks the gaps as missing instead of inventing a name or date.',
        'Now you know exactly what to ask in the team group before the work starts.',
      ],
    },
  ],
  build: {
    title: 'Make a one-page brief from a long document',
    intro: 'Use the practice policy in your files (safe to upload), or a public document from your field, like a government circular or a product manual.',
    steps: [
      { title: 'Pick the reader', text: 'Decide who the brief is for (new staff, your manager, parents, clients) and what they need to know.' },
      { title: 'Summarise in tool 1', text: 'Attach the document in Claude or ChatGPT and ask for a one-page summary with section numbers.' },
      { title: 'Ask three questions', text: 'Ask three real questions, like deadlines, amounts and who to contact. Ask it to quote the line.' },
      { title: 'Check in NotebookLM', text: 'Add the same document as a source in NotebookLM, ask the same three questions, and click the numbered markers.', tip: 'If the two tools disagree, the original document decides.' },
      { title: 'Fix and finish', text: 'Correct anything wrong, add “Summary made with AI help and checked against the original” at the bottom, and save your one-page brief.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt to summarise the practice policy document for new staff. Say who it is for, the length or format, ask for section numbers, ask for the key dates and amounts, and tell the AI what to do if something is unclear.',
      title: 'Prompt Lab: a summary you can check',
      starter: 'Summarise this document.',
      checks: [
        ['Who it is for', ['for new', 'for my', 'for the team', 'for staff', 'manager', 'new joiner', 'reader']],
        ['Length or format', ['one page', '1 page', 'bullet', 'points', 'words', 'table']],
        ['Ask for section or page numbers', ['section', 'page', 'quote', 'cite']],
        ['Ask for key dates and amounts', ['date', 'deadline', 'amount', 'numbers', 'days']],
        ['What to do if unclear', ['unclear', 'not sure', 'not in the document', 'do not guess', 'don’t guess', 'don\'t guess', 'say so']],
      ],
      exemplar: 'Summarise the attached policy for new staff in one page of bullet points: what changed, every deadline, date and amount. Put the section number after each point. If something is unclear or not in the document, say so and do not guess.',
      tools: ['Claude', 'ChatGPT', 'NotebookLM', 'Gemini'],
    },
    {
      ai: 'Here are rough notes from a shop team meeting: “Diwali stock – Zoya to order by 20 Oct. Kabir check godown space. New price list to all shops before Diwali. Arjun fix billing printer Friday.” Write a prompt to turn them into action items with owners and deadlines, in a table, and to mark anything missing.',
      title: 'Prompt Lab: meeting notes to action items',
      starter: 'Here are my meeting notes:',
      checks: [
        ['Ask for action items or tasks', ['action item', 'action point', 'to-do', 'tasks', 'task']],
        ['Ask for an owner for each', ['owner', 'who', 'responsible', 'person']],
        ['Ask for a deadline for each', ['deadline', 'due', 'by when', 'date']],
        ['Ask for a table', ['table', 'columns']],
        ['Mark missing information', ['missing', 'not mentioned', 'blank', 'tbd', 'unclear']],
      ],
      exemplar: 'Turn these meeting notes into a table of action items with three columns: Task, Owner, Deadline. If an owner or deadline is not mentioned, write MISSING. Do not invent names or dates. Notes: Diwali stock – Zoya to order by 20 Oct. Kabir check godown space. New price list to all shops before Diwali. Arjun fix billing printer Friday.',
      tools: ['Gemini', 'ChatGPT', 'Claude', 'Microsoft Copilot'],
    },
    {
      sort: 'Is this action item ready to share?',
      buckets: ['Ready: has a task, owner and deadline', 'Not ready: something is missing'],
      items: [
        ['Zoya — order Diwali stock — by 20 Oct', 0],
        ['Check godown space', 1],
        ['Arjun — fix billing printer — Friday', 0],
        ['Someone to send the price list soon', 1],
        ['Meera — share PTM slots with parents — 5 Nov', 0],
        ['Discuss the new software sometime', 1],
      ],
      why: 'A useful action item says what, who and by when. If any part is missing, ask in the group before sharing.',
    },
    {
      mcq: 'The policy says: “Claims older than 60 days will not be paid.” The AI summary says: “Claims older than 15 days are rejected.” What is the problem?',
      options: ['No problem; it is close enough', 'The AI mixed up two rules: claims are due in 15 days, but are refused only after 60 days', 'The original document must be wrong', 'The AI is right because it is newer'],
      answer: 1,
      why: 'Section 6.1 has two numbers: submit within 15 days (late claims need approval) and no payment after 60 days. The AI blended them. This is why you check every number.',
      title: 'Spot the summary mistake',
    },
    {
      order: 'Put the steps for checking an AI summary in order.',
      steps: ['Ask for section or page numbers in your prompt', 'Read the summary and highlight every date, amount and name', 'Open the original at each section number', 'Correct anything that does not match', 'Add a note: “Made with AI help, checked against the original”'],
      why: 'Section numbers make checking fast; numbers and names are where mistakes hide; a label is honest.',
      title: 'How to check a summary',
    },
    {
      mcq: 'Zoya, a CA’s assistant, has a 40-page public GST guide. She wants answers that come only from that guide, with links to the exact lines. Which is the best choice?',
      options: ['Ask a chatbot from memory without the file', 'Add the guide as a source in NotebookLM and click the numbered markers to check', 'Search Google and read the first result', 'Upload the firm’s client files too so the answers are more personal'],
      answer: 1,
      why: 'NotebookLM answers from the sources you add and shows the exact lines. Client files must never go into a personal AI account.',
      title: 'New situation: the right tool',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Office life is full of long documents and messy meetings. AI can read a 12-page policy in seconds, but it can also blend two numbers or invent a deadline. Teach three habits: summarise for a reader and purpose; always ask for section or page numbers; and check every date, amount and name against the original. Show two ways to ask questions of a document: attach it in Claude or ChatGPT, or add it as a source in NotebookLM, which shows the exact lines used. Finish with meeting notes turned into action items with owners and deadlines, with gaps marked as missing.',
    analogy: 'An AI summary is like a colleague’s notes from a meeting you missed: very helpful, but before you act on a number, you look at the minutes yourself.',
    vocab: [
      ['summary', 'A short version of a long document that keeps the important points.'],
      ['source', 'The document or web page an answer comes from. In NotebookLM, the files you add.'],
      ['citation', 'A marker or reference that shows exactly where an answer came from.'],
      ['action item', 'A task from a meeting with a clear owner and deadline.'],
      ['attach / upload', 'Add a file to the chat with the paperclip or + button.'],
    ],
    demo: '1) Download the practice policy from the lesson files (it is fictional and safe). 2) In Claude, attach it and type the summary prompt from the video. Point at the section numbers. 3) In ChatGPT, attach it and ask: “How many days do I have to submit a travel claim after I return?” Then open section 6.1 together and check. 4) Open NotebookLM, create a notebook, add the same file, ask the same question and click the numbered marker. 5) Paste the meeting notes into Gemini with the action-item prompt and point at the MISSING cells.',
    unplugged: 'Telephone game (5 min): whisper a three-part instruction with a number and a date down a line of 5 learners (“Send the bills to Accounts within 15 days, but not after 60”). Compare the last version with the original on the board. Say: “This is what can happen with summaries. Always check the original.”',
    prompts: [
      ['What makes a summary prompt better than “summarise this”?', 'Saying who it is for, the length, asking for section numbers and key dates and amounts.'],
      ['Why ask for section or page numbers?', 'So you can check each point in the original quickly.'],
      ['What does NotebookLM do differently?', 'It answers from the sources you add and shows clickable markers to the exact lines.'],
      ['What three things does every action item need?', 'A task, an owner and a deadline.'],
      ['Two tools give different answers. Who wins?', 'The original document.'],
    ],
    support: 'Give learners the summary prompt and the action-item prompt as copy-paste text; they focus on checking. Pair slower readers to check one section each.',
    stretch: 'Ask NotebookLM for a list of “questions new staff will ask” about the policy, then check three answers against the original.',
    mis: [
      ['If AI summarised it, I do not need to read the original.', 'Check every date, amount and name in the original before you act or share.'],
      ['NotebookLM cannot be wrong because it uses my file.', 'It is much more grounded, but you still click the markers and read the lines.'],
      ['It is fine to upload any office document.', 'Only public or practice documents in personal accounts; confidential files stay out.'],
      ['The AI should fill in missing owners so the table looks complete.', 'Missing is useful information. Ask the team instead of guessing.'],
    ],
    successCriteria: ['I can write a summary prompt with a reader, a length and section numbers.', 'I can ask questions of a document in two tools.', 'I can turn meeting notes into action items with owners and deadlines.', 'I can check an AI summary against the original and correct it.'],
    homework: 'Take one public document from your work (a circular, a product manual, a government notice) and make a checked one-page brief. Note one thing the AI got wrong or left out.',
    exit: 'Name one mistake an AI summary can make, and how you would catch it.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Telephone game with a number and a date (see Unplugged).' },
      { minutes: 4, stage: 'Watch', doing: 'Play the lesson video. Pause at the 30-days answer: poll “Would you have believed it?”' },
      { minutes: 7, stage: 'Live demo', doing: 'Summary in Claude, a question in ChatGPT checked against section 6.1, the same question in NotebookLM, meeting notes in Gemini.' },
      { minutes: 8, stage: 'Prompt Lab 1', doing: 'Prompt Lab: a summary you can check, then run it on the practice policy.' },
      { minutes: 6, stage: 'Breakout pairs: fact hunt', doing: 'Pairs check five numbers in their AI summary against the original. First pair to find a real mistake shares it.' },
      { minutes: 7, stage: 'Prompt Lab 2', doing: 'Prompt Lab: meeting notes to action items, then the “ready to share?” sort game.' },
      { minutes: 10, stage: 'Build along', doing: 'Make a one-page brief: summarise, ask three questions, check in NotebookLM, fix and label.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Two learners show their brief and one correction they made.' },
      { minutes: 5, stage: 'Probe', doing: 'Spot the summary mistake, how to check a summary (order), and the right tool (individual).' },
      { minutes: 3, stage: 'Wrap-up', doing: 'Exit ticket and homework.' },
    ],
  },
  files: [
    {
      name: 'l03_document_brief_kit.md',
      title: 'One-page brief from a long document (project kit)',
      audience: 'student',
      content: `# One-page brief — Lesson 3

Practice file: **practice_policy_document.md** (made-up company, safe to upload anywhere).

## Prompt templates
**Summary for a purpose**
> Summarise the attached document for [reader] in [one page / 8 bullet points]. Include what changed, every deadline, date and amount. Put the section or page number after each point. If something is unclear or not in the document, say so and do not guess.

**Ask the document**
> From the attached document only: [your question]. Quote the exact line and give the section number. If the answer is not in the document, say "Not in the document".

**Meeting notes to action items**
> Turn these meeting notes into a table with columns Task, Owner, Deadline. If an owner or deadline is not mentioned, write MISSING. Do not invent names or dates. Notes: [paste notes, with placeholders for anything private]

**Explain simply**
> Explain section [x] in simple words for someone who has never read a policy before, with one example.

## Which tool?
| Need | Try |
|---|---|
| Quick summary of one file | Claude or ChatGPT (attach with paperclip / +) |
| Answers only from my files, with links to exact lines | NotebookLM |
| Notes I pasted as text | Any chatbot |

## Checking checklist
- [ ] Every date matches the original
- [ ] Every amount (₹) and number of days matches
- [ ] Every name and role matches
- [ ] Nothing important is missing (look at the headings of the original)
- [ ] Label added: "Summary made with AI help, checked against the original"
- [ ] No confidential or client documents were uploaded

## Worked example (practice policy)
**AI said:** "You have 30 days to submit a travel claim."
**Original, section 6.1:** "within 15 days" (and claims older than 60 days are not paid).
**Fixed brief line:** Submit claims in the HR app within 15 days; after 60 days they are not paid (s. 6.1).

## Practice meeting notes
Diwali stock – Zoya to order by 20 Oct. Kabir check godown space. New price list to all shops before Diwali. Arjun fix billing printer Friday. Meera to share festival duty roster — date? Discuss new billing software next month.
`,
    },
    {
      name: 'practice_policy_document.md',
      title: 'Practice document: Staff Travel, Leave and Reimbursement Policy',
      audience: 'student',
      content: SAMPLE_POLICY_MD,
    },
    {
      name: 'l03_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 3',
      audience: 'teacher',
      content: `# Lesson 3 demo script: summarise, ask, check

**Before class:** download practice_policy_document.md (or save it as a PDF). Have Claude, ChatGPT, NotebookLM and Gemini open.

## 1. Summary (Claude)
Attach the file, then type:
> Summarise this for new staff in under 150 words: what changed, key deadlines and amounts. Put the section number after each point. If something is unclear, say so.

Point at the section numbers. Pick two points and check them in the original on screen.

## 2. Question and check (ChatGPT)
Attach the file, then type:
> From the attached policy: how many days do I have to submit a travel claim after I return?

Open section 6.1. **Correct answer: 15 days** (late claims need the department head's approval; claims older than 60 days are not paid).
- **If the AI says 30 days, 60 days or anything else:** "Caught it. A wrong number here costs real money."
- **If it says 15 days:** "Correct this time. Now ask: 'What happens after 60 days?' and check that too." Show the video example of a wrong answer.

## 3. NotebookLM
New notebook → add source → upload the file → ask the same question → click the numbered marker. Say: "It shows the exact lines. We still read them."

## 4. Action items (Gemini)
> Turn these meeting notes into a table of action items with columns: Task, Owner, Deadline. If an owner or deadline is missing, write "MISSING". Notes: Diwali stock – Zoya to order by 20 Oct. Kabir check godown space. New price list to all shops before Diwali. Arjun to fix billing printer Friday.

Expected: Kabir's task has no deadline; the price list has no owner.
- **If the AI fills in a name or date that was not in the notes:** "It guessed. That is worse than MISSING, because nobody will ask."

## Answer key for checking (practice policy)
Earned leave 18 days, apply 7 days ahead (3 weeks for more than 5 days) · casual 8 · sick 10 (note after 2 days in a row) · WFH up to 4 days/month (office roles) · hotel up to ₹4,500 metro / ₹3,000 other · daily allowance ₹1,200 / ₹900 · two-wheeler ₹4/km, car ₹9/km · claims within 15 days, not paid after 60 · paid within 10 working days of approval · advance up to 70% for trips over 3 days · old paper claims by 31 Dec 2026.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 4 (module project) ─────────────────────────────────
export const W4 = lesson(4, {
  title: 'Project: Spreadsheets with AI',
  objective: 'Use AI to understand and clean a sales sheet, write formulas like SUMIF, XLOOKUP and IF, build a summary and chart, and verify every total yourself.',
  concept: 'Data, formulas, checks',
  minutes: 60,
  hook: ['code', '=SUMIF(D:D,"West",J:J)', '₹81,935 — West region sales, in one line'],
  intro: 'Project time! Today you will analyse a monthly sales sheet with AI and prove every number is right.',
  cards: [
    { emoji: '📊', title: 'Let AI explain your sheet', body: 'Upload a CSV or Excel file to ChatGPT or Claude, or paste a few rows. Then ask what each column means and whether it sees any problems. A CSV is just a simple spreadsheet file that any tool can open.' },
    { emoji: '🧹', title: 'Clean before you count', body: 'Real sheets have duplicates, spelling differences like “bangalore” and “Bengaluru”, and blank cells. Ask the AI to list problems, but fix them yourself so you know what changed. Messy data always gives you wrong totals, however clever the tool is.' },
    { emoji: '🧮', title: 'Formulas in plain words', body: 'Describe what you want and AI writes the formula. SUMIF adds up only the rows that match, like one region. XLOOKUP or VLOOKUP finds a value from another table, and IF shows one thing or another, like “Target met”.' },
    { emoji: '📈', title: 'Summary, chart and the golden rule', body: 'Ask for a summary table by region or category, then make a chart in Excel or Google Sheets. The golden rule: check every total with your own SUM before you share it. AI can miscount, especially when the data is messy or has duplicates.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Upload a sheet to ChatGPT or Claude',
      tool: 'ChatGPT · Claude',
      steps: [
        'Open a new chat and attach monthly_sales.csv with the paperclip or + button.',
        'Ask: “Explain each column in simple words and list any data problems you see.”',
        'Ask for a summary: “Total revenue by Region and by Category, as a table.”',
        'Ask: “Show me how you calculated this,” so you can repeat it in your own sheet.',
        'Open the same file in Excel or Google Sheets and check the totals with SUM and SUMIF.',
      ],
      say: [
        'ChatGPT and Claude can read a spreadsheet file and do the maths for you.',
        'First ask what each column means and what problems it sees, before any totals.',
        'Then always repeat the key totals in your own sheet, with your own formula.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Spotting problems in the data',
      tool: 'Claude',
      prompt: '[Attached: monthly_sales.csv] Explain each column in simple words, then list any data problems I should fix before adding up revenue.',
      reply: 'Columns: date, invoice number, city, region, sales rep, product, category, units sold, price per unit (₹), revenue (₹ = units × price).\n\nProblems to fix:\n1. Invoice INV-2431 appears twice (23 Sep, Chennai, School Bag).\n2. “bangalore” is written differently from “Bengaluru”.\n3. INV-2426 (Masala Tea, Patna) has no units and no revenue.',
      say: [
        'Claude explains every column in plain words, then lists three problems.',
        'One invoice appears twice, one city is spelt two ways, and one row has blanks.',
        'These are exactly the problems that make totals go wrong.',
      ],
    },
    {
      kind: 'chat',
      heading: 'A formula in plain words',
      tool: 'Gemini',
      prompt: 'In Google Sheets, Region is in column D and Revenue is in column J. Give me a formula for total revenue of the West region, and explain it in simple words.',
      reply: '=SUMIF(D:D, "West", J:J)\n\nIn simple words: look down column D, and every time it says “West”, add the revenue from column J on the same row.',
      say: [
        'You do not need to remember formulas, you just describe what you want.',
        'Gemini writes the SUMIF formula and explains it in one simple sentence.',
        'Type it into your sheet, and for West the answer is eighty-one thousand, nine hundred and thirty-five rupees.',
      ],
    },
    {
      kind: 'chat',
      heading: 'The total that was wrong',
      tool: 'ChatGPT',
      prompt: 'What is the total revenue for September in this sheet?',
      reply: 'The total revenue for September is ₹5,42,691.',
      note: 'Caught it: this counts the duplicate INV-2431 (₹18,720) twice. After cleaning, our own SUM gives ₹5,23,971.',
      say: [
        'Now we ask ChatGPT for the month’s total, before cleaning the data.',
        'It says five lakh, forty-two thousand, six hundred and ninety-one rupees.',
        'But that counts the duplicate invoice twice, so the real total is lower.',
        'After cleaning, our own SUM gives five lakh, twenty-three thousand, nine hundred and seventy-one rupees.',
      ],
    },
    {
      kind: 'steps',
      heading: 'AI inside your spreadsheet (where available)',
      tool: 'Gemini in Google Sheets · Copilot in Excel',
      steps: [
        'Some Google accounts show a Gemini button or side panel in Google Sheets; some office Microsoft 365 accounts show Copilot in Excel.',
        'If you see it, select your data and ask in plain words, like “Make a summary table of revenue by region.”',
        'If you do not see it, that is fine: use ChatGPT or Claude in a browser tab and copy the formula into your sheet.',
        'Make the chart yourself: select the summary table, then Insert → Chart.',
      ],
      say: [
        'Some accounts have AI built right into Google Sheets or Excel, and some do not.',
        'If yours does not, simply ask a chatbot in another tab and paste the formula into your sheet.',
      ],
    },
  ],
  build: {
    title: 'Analyse the September sales sheet',
    intro: 'Download monthly_sales.csv from the lesson files (it is invented data, safe to upload). Open it in Excel or Google Sheets, and in ChatGPT or Claude.',
    steps: [
      { title: 'Understand it', text: 'Upload the CSV to ChatGPT or Claude. Ask it to explain each column and list data problems.' },
      { title: 'Clean it', text: 'In your own sheet: delete the duplicate INV-2431, change “bangalore” to “Bengaluru”, and highlight INV-2426 as “missing units”. Note each change.' },
      { title: 'Formulas', text: 'Ask the AI for SUMIF (revenue by region), IF (“Target met” when a row is over ₹20,000) and XLOOKUP or VLOOKUP (find a product’s category from a small table). Type them in yourself.', tip: 'Ask “explain it in simple words” for every formula.' },
      { title: 'Summary and chart', text: 'Make a summary table of revenue by region and by category, then Insert → Chart.' },
      { title: 'Verify', text: 'Compare the AI’s totals with your own SUM and SUMIF. Write down any difference and the reason.' },
      { title: 'Write three insights', text: 'Ask the AI for three insights in plain words, then check each one against your summary table before keeping it.' },
    ],
  },
  acts: [
    {
      ai: 'You have the sales sheet open in Excel or Google Sheets. Write a prompt asking the AI for a formula that adds up revenue for one category only (Category is in column G, Revenue in column J). Name your app, describe the columns, say what you want, and ask for a simple explanation.',
      title: 'Prompt Lab: ask for a formula',
      starter: 'Give me a formula.',
      checks: [
        ['Name your app', ['excel', 'google sheets', 'sheets']],
        ['Describe the columns', ['column']],
        ['Say what you want calculated', ['total', 'sum', 'add up', 'count', 'average']],
        ['Say the condition (which rows)', ['only', 'category', 'where', 'for each', 'home', 'clothing']],
        ['Ask for a simple explanation', ['explain', 'simple words', 'step by step', 'how it works']],
      ],
      exemplar: 'In Google Sheets, Category is in column G and Revenue is in column J. Give me a formula to add up the total revenue for the Home category only, and explain it in simple words so I can change it for other categories.',
      tools: ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot'],
    },
    {
      sort: 'Look at monthly_sales.csv. Does this need cleaning before you add up revenue?',
      buckets: ['Needs cleaning', 'Fine as it is'],
      items: [
        ['INV-2431 appears twice', 0],
        ['“bangalore” is spelt differently from “Bengaluru”', 0],
        ['INV-2426 has no units and no revenue', 0],
        ['Prices are written without the ₹ sign', 1],
        ['Dates are written like 2026-09-01', 1],
        ['Several sales happened on the same day', 1],
      ],
      why: 'Duplicates, spelling differences and blanks change your totals. A missing ₹ sign, a date format, or many sales on one day are normal.',
      hint: 'Ask: would this make a total or a count wrong?',
    },
    {
      match: 'Match each formula to the job it does',
      pairs: [
        ['SUMIF', 'Add up revenue only for the South region'],
        ['XLOOKUP or VLOOKUP', 'Find a product’s price from another table'],
        ['IF', 'Show “Target met” when a sale is above ₹20,000'],
        ['COUNTIF', 'Count how many invoices came from Pune'],
      ],
      why: 'SUMIF adds matching rows, COUNTIF counts them, XLOOKUP/VLOOKUP finds a value in another table, and IF chooses between two results.',
    },
    {
      mcq: 'The AI says September revenue is ₹5,42,691. Your own SUM on the cleaned sheet says ₹5,23,971. What should you do?',
      options: ['Use the AI’s number; AI is good at maths', 'Find the difference (₹18,720), see it is the duplicate invoice, and use your checked total', 'Average the two numbers', 'Leave the total out of the report'],
      answer: 1,
      why: 'The difference is exactly one duplicate row. Your checked total on clean data is the one you report, and you can explain why.',
      title: 'Which total do you trust?',
    },
    {
      projectAct: true,
      title: 'Module project: analyse the monthly sales sheet',
      brief: 'You are the office executive for a home-goods distributor. Your manager wants a one-page September sales summary by Monday. Use AI to understand, clean and analyse monthly_sales.csv, then check every number yourself.',
      requirements: [
        'List the data problems you found and how you fixed each one',
        'At least three formulas you used (SUMIF, IF and XLOOKUP/VLOOKUP or COUNTIF), each with a one-line explanation',
        'A summary table of revenue by region and by category, plus one chart',
        'A verification note: the AI’s totals compared with your own, and the reason for any difference',
        'Three insights in plain words, each checked against your summary table',
        'A line saying which AI tools you used and that the numbers were checked',
      ],
      reflection: 'Which AI answer was wrong or unclear, how did you catch it, and how long would this report have taken you without AI?',
      tips: ['Clean first, count second.', 'Ask “explain it in simple words” for every formula.', 'If the AI and your SUM disagree, look for duplicates and blanks.', 'Never upload real company sales data to a personal account; use the practice file.'],
      minWords: 40,
    },
    {
      mcq: 'Kabir runs a shop. He wants AI to help with his real customer list, which has names and phone numbers. What is the safest way?',
      options: ['Upload the whole list to his personal chatbot', 'Remove names and phone numbers (or replace them with codes) and share only the columns needed, like product and amount', 'Post it in a WhatsApp group and ask friends', 'Paste it in small parts so it does not count'],
      answer: 1,
      why: 'Remove personal details first and share only what the AI needs. Pasting in small parts is still pasting personal data.',
      title: 'New situation: real customer data',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Spreadsheets scare many adults, and AI removes the fear: you describe what you want and it writes the formula and explains it. But spreadsheets are also where AI mistakes are most dangerous, because a wrong total looks exactly like a right one. Teach the order: understand the sheet, clean it, write formulas, summarise and chart, and verify every total with your own SUM. Use the practice file only: it has a duplicate invoice, a city spelt two ways and a blank row, so the AI’s quick total is wrong in a way learners can catch.',
    analogy: 'AI with a spreadsheet is like a fast junior accountant: brilliant at formulas and tables, but you still tally the final total before it goes to the boss.',
    vocab: [
      ['CSV file', 'A simple spreadsheet file (comma-separated values) that Excel, Google Sheets and AI tools can open.'],
      ['formula', 'An instruction in a cell that calculates something, starting with =.'],
      ['SUMIF', 'Adds up only the rows that match a condition, like one region.'],
      ['XLOOKUP / VLOOKUP', 'Finds a value in another table, like a product’s price.'],
      ['duplicate', 'The same row entered twice, which makes totals too big.'],
      ['verify', 'Check a number yourself before you trust or share it.'],
    ],
    demo: '1) Open monthly_sales.csv in Google Sheets or Excel on screen. 2) Upload it to Claude or ChatGPT with: “Explain each column in simple words, then list any data problems.” 3) Show the three problems in the sheet. 4) Ask ChatGPT, before cleaning, “What is the total revenue?” and type =SUM(J2:J42) in the sheet; compare. 5) Delete the duplicate INV-2431 and show the new SUM (₹5,23,971). 6) Ask Gemini or any chatbot for the SUMIF for West and type it (₹81,935). 7) Build a region summary and Insert → Chart. 8) If Gemini in Sheets or Copilot in Excel is available on your account, show it briefly; otherwise say “If you don’t see it, a chatbot tab works just as well.”',
    unplugged: 'Human spreadsheet (5 min): six volunteers hold cards with a city, region and amount (one duplicate card, one with “bangalore”). The class adds the South total out loud. Then reveal the duplicate and recount. Ask: “Which total would you send to your manager?”',
    prompts: [
      ['What should you do before adding up any totals?', 'Clean the data: duplicates, spelling differences and blanks.'],
      ['What does SUMIF do, in plain words?', 'Adds up only the rows that match a condition.'],
      ['The AI and your SUM disagree. Where do you look first?', 'Duplicates, blanks and spelling differences.'],
      ['How do you get a formula you do not know?', 'Describe the columns and what you want, and ask the AI to explain it simply.'],
      ['Can you upload your company’s real sales file?', 'Not to a personal account. Use practice or anonymised data, or your company’s approved tool.'],
    ],
    support: 'Give a half-built summary table with the region names already typed; learners ask AI for the formula and fill the totals. Pair learners new to spreadsheets with confident ones.',
    stretch: 'Ask the AI for a pivot table guide and build revenue by region × category; add an IF column that flags sales reps below a target you choose.',
    mis: [
      ['Computers do not make maths mistakes, so AI totals are right.', 'AI can miscount or include messy rows. Verify with your own SUM.'],
      ['I need to memorise formulas.', 'Describe what you want; ask the AI to write and explain the formula.'],
      ['Cleaning data is optional.', 'Duplicates and blanks change totals. Clean first, count second.'],
      ['If Copilot or Gemini is not in my sheet, I cannot use AI.', 'Use any chatbot in another tab and paste the formula into your sheet.'],
    ],
    successCriteria: ['I can ask AI to explain a sheet and list data problems.', 'I can get and use formulas like SUMIF, IF and XLOOKUP from a plain-words request.', 'I can make a summary table and a chart.', 'I can verify AI totals with my own formulas and explain any difference.'],
    homework: 'Finish the module project. Optional: take a spreadsheet from your own work, remove all names and personal details, and ask the AI for one useful formula.',
    exit: 'The AI’s total and your SUM differ by exactly one row’s revenue. What is the most likely reason?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Human spreadsheet with a duplicate card (see Unplugged).' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the project video. Poll: “How confident are you with Excel or Google Sheets? Show 1–5 fingers.”' },
      { minutes: 7, stage: 'Live demo', doing: 'Upload, list problems, the wrong total, clean, SUMIF for West, summary and chart.' },
      { minutes: 5, stage: 'Game: needs cleaning?', doing: 'Needs cleaning or fine? sort, then the formula match, played as a quick team race.' },
      { minutes: 6, stage: 'Prompt Lab', doing: 'Prompt Lab: ask for a formula. Learners paste it into the AI and type the formula into their sheet.' },
      { minutes: 18, stage: 'Project build (pairs)', doing: 'Build-along steps: understand, clean, formulas, summary, chart. Halfway check: everyone has a cleaned sheet and one working SUMIF.' },
      { minutes: 5, stage: 'Verify and compare', doing: '“Which total do you trust?” then pairs compare their checked totals with another pair; any difference must be explained.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Three learners show their chart and one insight they checked.' },
      { minutes: 4, stage: 'Probe and submit', doing: 'New situation: real customer data. Submit the module project with the reflection.' },
    ],
  },
  project: {
    title: 'Analyse the monthly sales sheet with AI',
    brief: 'Use AI to understand, clean and analyse a September sales sheet for a home-goods distributor, then produce a checked one-page summary with formulas, a chart and three insights for your manager.',
    requirements: [
      'Data problems found and fixed (duplicate, spelling, blank row), with a note of each change',
      'Three or more formulas used (SUMIF, IF, and XLOOKUP/VLOOKUP or COUNTIF), each explained in one line',
      'Summary table of revenue by region and by category',
      'One clear chart with a title',
      'Verification note comparing the AI’s totals with your own',
      'Three checked insights in plain words, and a line naming the AI tools used',
    ],
    milestones: ['Problems listed and the sheet cleaned', 'Formulas working in your own sheet', 'Summary table and chart made', 'Totals verified and insights written'],
    rubric: [
      { criterion: 'Data cleaning', levels: ['Totals made on uncleaned data', 'One or two problems fixed', 'All three problems fixed and noted', 'All fixed, noted, and the effect on totals explained'] },
      { criterion: 'Formulas', levels: ['No formulas, numbers typed by hand', 'One formula works', 'Three formulas work and are explained', 'Formulas work, are explained, and are reused for other regions or categories'] },
      { criterion: 'Summary and chart', levels: ['No summary', 'Summary or chart, but unclear', 'Clear summary table and titled chart', 'Clear, well-labelled, and chosen to answer the manager’s question'] },
      { criterion: 'Verification and honesty', levels: ['AI numbers used without checking', 'Some totals checked', 'All key totals checked and any difference explained', 'Checked, explained, and AI use clearly labelled with the time saved noted'] },
    ],
    extensions: ['Add a pivot table of revenue by region and category', 'Add an IF column flagging rows above or below a target, and count them with COUNTIF', 'Ask the AI to draft the manager email that goes with your summary, then check every number in it'],
  },
  files: [
    {
      name: 'monthly_sales.csv',
      title: 'Practice data: September sales sheet (CSV)',
      audience: 'student',
      content: MONTHLY_SALES_CSV,
    },
    {
      name: 'l04_spreadsheet_project_kit.md',
      title: 'Spreadsheets with AI (project kit)',
      audience: 'student',
      content: `# Spreadsheets with AI — Lesson 4 project kit

Practice file: **monthly_sales.csv** — invented sales of a home-goods distributor (no real people or companies), September 2026, 41 rows. Safe to upload to any AI tool.

Columns: A Date · B Invoice · C City · D Region · E Sales Rep · F Product · G Category · H Units · I Unit Price (INR) · J Revenue (INR)

## Prompt templates
**Understand the sheet**
> [Attach file] Explain each column in simple words. Then list any data problems I should fix before adding up revenue (duplicates, spelling differences, blanks, odd values).

**Get a formula**
> In [Excel / Google Sheets], [column name] is in column [letter] and [column name] is in column [letter]. Give me a formula to [what you want, e.g. add up revenue for the South region only]. Explain it in simple words.

**Summary table**
> Make a table of total revenue by Region and by Category. Show how you calculated it so I can repeat it in my sheet.

**Insights**
> Give me three insights from this sales data in plain words, each with the number that supports it. Do not guess anything that is not in the data.

**Chart advice**
> What is the best chart to show revenue by region to my manager, and why?

## Formula cheat sheet (check column letters in your own sheet)
| Job | Formula |
|---|---|
| Total revenue | =SUM(J2:J42) |
| Revenue for West | =SUMIF(D:D,"West",J:J) |
| Count invoices from Pune | =COUNTIF(C:C,"Pune") |
| Flag big sales | =IF(J2>20000,"Big sale","") |
| Find a category from a small table in L:M | =XLOOKUP(F2,L:L,M:M) or =VLOOKUP(F2,L:M,2,FALSE) |

## Project checklist
- [ ] Problems found and fixed, with notes
- [ ] 3+ formulas, each explained in one line
- [ ] Summary by region and by category
- [ ] One chart with a title
- [ ] AI totals compared with my own; differences explained
- [ ] Three checked insights
- [ ] Line: "Analysis made with help from [tools]; all numbers checked."

## Worked example
- **AI said (before cleaning):** total revenue ₹5,42,691.
- **I found:** INV-2431 is entered twice (₹18,720).
- **My SUM after removing it:** ₹5,23,971. INV-2426 has no units, so it is left blank and flagged to ask the sales rep.
- **My SUMIF for West:** ₹81,935 (same before and after cleaning, because the problems are in other regions).
`,
    },
    {
      name: 'l04_teacher_demo_and_answer_key.md',
      title: 'Teacher demo script and answer key — Lesson 4',
      audience: 'teacher',
      content: `# Lesson 4 demo script and answer key

## The three planted problems in monthly_sales.csv
1. **Duplicate:** INV-2431 (23 Sep, Chennai, South, School Bag, 24 × ₹780 = ₹18,720) appears twice.
2. **Spelling:** INV-2413 city is "bangalore" (others say "Bengaluru"). Region is already South, so region totals are not affected, but city totals are.
3. **Blank:** INV-2426 (19 Sep, Patna, Masala Tea 500g, ₹240) has no units and no revenue. Do not guess; flag it.

## Answer key (after removing the duplicate; INV-2426 left blank)
- Rows of data: 40 (41 before removing the duplicate)
- **Total revenue: ₹5,23,971** (before cleaning: ₹5,42,691)
- By region: East ₹1,63,284 · North ₹1,51,955 · South ₹1,26,797 · West ₹81,935
- By category: Home ₹1,95,021 · Clothing ₹1,43,840 · Stationery ₹1,24,230 · Electrical ₹44,110 · Grocery ₹16,770
- Top products: Bedsheet Double ₹1,47,852 · Cotton Kurta ₹1,43,840 · School Bag ₹1,13,100

## Demo prompts (type exactly)
1. Claude or ChatGPT, attach the file:
> Explain each column in simple words, then list any data problems I should fix before adding up revenue.
2. Before cleaning:
> What is the total revenue for September in this sheet?
Then type =SUM(J2:J42) in the sheet.
- **If the AI says ₹5,42,691:** "That matches the raw sheet, but the raw sheet has a duplicate. Watch what happens after cleaning."
- **If the AI gives a different number:** "Now we have two different answers. Our own SUM decides." Find the reason together.
- **If the AI already removed the duplicate (₹5,23,971):** "Great, it noticed. Did it tell us? Always ask 'Did you remove or change any rows?'"
3. Any chatbot:
> In Google Sheets, Region is in column D and Revenue is in column J. Give me a formula for total revenue of the West region, and explain it in simple words.
Expected: =SUMIF(D:D,"West",J:J) → ₹81,935.

## If something goes wrong
- The tool cannot read the file on the free plan today: paste the first 15 rows as text instead.
- Excel shows an error for XLOOKUP (older versions): use VLOOKUP instead.
- A learner wants to use their real office file: say no for personal accounts; use the practice file or an anonymised copy in a company-approved tool.
`,
    },
  ],
});
