// AI at Work · Level 2 · Module 1 — Automate the repetitive work (lessons 1–4).
// Builds on Level 1 (prompts, documents, spreadsheets with SUMIF/XLOOKUP, custom assistants, one AI routine).
// New here: reusable templates and mail merge, multi-condition formulas and a self-updating dashboard,
// Forms → Sheets → AI summary, a small Apps Script (AI-written, explained line by line), and one report automated end to end.
// No n8n. Zapier and Power Automate appear only as optional extras ("check the current free plan").
import { lesson } from '../kit.ts';
import { WEEKLY_ORDERS_CSV, FEEDBACK_RESPONSES_CSV, FEE_REMINDERS_CSV, FEEDBACK_SUMMARY_GS, WEEKLY_REPORT_GS } from './data.ts';

const CHATBOTS = ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot'];

// ───────────────────────────────── Lesson 1 ─────────────────────────────────
export const A1 = lesson(1, {
  title: 'Templates That Write Themselves',
  objective: 'Turn the messages you send every week into reusable prompt templates with placeholders, build personal messages with a sheet formula or mail merge without the AI seeing your real list, and start a template library.',
  concept: 'Templates and merge',
  minutes: 60,
  hook: ['upgrade', 'Typing the same fee reminder 40 times, changing the name each time', 'One AI-written template + one sheet = 40 personal reminders in 2 minutes, every name and amount checked'],
  intro: 'Welcome to Level 2! Today you will stop rewriting the same messages and build templates that do the work for you.',
  cards: [
    { emoji: '🧩', title: 'A template is a prompt with blanks', body: 'In Level 1 you saved good prompts. A template goes one step further, because it has blanks called placeholders, like Customer name or Due date in square brackets. You write it carefully once, and then you only fill the blanks each week.' },
    { emoji: '📝', title: 'Prompt templates and message templates', body: 'A prompt template is what you paste into the AI, such as your monthly update prompt. A message template is the finished text with merge fields, such as a fee reminder with a blank for the first name. The AI helps you write both, but only you fill in the real details.' },
    { emoji: '📬', title: 'Mail merge: personal messages at scale', body: 'Mail merge joins one message template with a list in a sheet, so each person gets their own name, amount and date. The AI writes the template, and your sheet fills in the names. The AI never needs to see your real customer list.' },
    { emoji: '🔎', title: 'Preview before you send', body: 'Before sending, read at least three finished messages. Look for empty blanks, wrong amounts and a field name the AI quietly changed. Then send one test to yourself first.' },
    { emoji: '📚', title: 'Your template library', body: 'Keep all your templates in one place, such as a Google Doc, a sheet, or saved templates in Gmail or Outlook. For each one, note when to use it, its placeholders, and what to check. A colleague should be able to pick it up and use it safely.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Write the message template with merge fields',
      tool: 'ChatGPT',
      prompt: 'You are the front-desk assistant of a coaching centre. Write a short, polite WhatsApp fee reminder for parents. Use these merge fields exactly as written and do not rename them: {{First Name}}, {{Batch}}, {{Amount}}, {{Due Date}}. Under 50 words. Do not add any facts, fees or late charges.',
      reply: 'Hello! 🙏 This is a gentle reminder that the fee of ₹{{Amount}} for {{First Name}}’s {{Batch}} batch is due on {{Date}}. If you have already paid, please ignore this message. Thank you!\n— [Centre name]',
      note: 'Caught it: the AI renamed {{Due Date}} to {{Date}}. The merge would leave that blank empty, so fix the name before saving the template.',
      say: [
        'Here the front desk of a coaching centre asks for a fee reminder with four merge fields.',
        'The prompt says to keep the field names exactly, and not to add any new facts.',
        'The reminder is short and polite, but look closely at the last field.',
        'The AI changed Due Date to just Date, so the merge would leave a gap.',
        'We fix the field name before we save it, and that one check saves forty broken messages.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Let the sheet build every message',
      tool: 'Gemini',
      prompt: 'In Google Sheets, column A is First Name, B is Batch, C is Amount Due, D is Due Date. Write one formula for F2 that builds this message for each row: "Hello! Gentle reminder: the fee of ₹2,500 for Aarav’s Class 9 Maths batch is due on 10 Nov." Format the amount with commas and the date like 10 Nov. Explain it simply.',
      reply: '="Hello! Gentle reminder: the fee of ₹"&TEXT(C2,"#,##0")&" for "&A2&"’s "&B2&" batch is due on "&TEXT(D2,"d mmm")&"."\n\nIn simple words: the & sign joins pieces of text together. TEXT shows the amount with commas and the date as “10 Nov”. Drag the formula down to fill every row.',
      say: [
        'Now the sheet does the personal part, and the AI only writes the formula.',
        'We describe the columns and give one example of the finished message.',
        'The formula joins the pieces of text, and the TEXT part makes the amount and date look neat.',
        'Drag it down, and every row gets its own message, while the real list never left the sheet.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Save templates and send with mail merge',
      tool: 'Gmail · Outlook · Word · Google Sheets',
      steps: [
        'Gmail: in Settings, open the advanced options and turn on Templates. In a new email, use the three-dot menu → Templates → save the draft as a template.',
        'Outlook: save reusable text with My Templates or Quick Parts (names differ between versions and the web app).',
        'Mail merge: Word’s Mailings tab can merge an Excel list into emails sent through desktop Outlook; some Google Workspace accounts also offer mail merge in Gmail.',
        'No mail merge option? Your sheet formula already built each message: copy them one by one, or use your company’s approved bulk tool.',
        'Preview at least three messages, then send one test to yourself before anything goes to customers.',
      ],
      say: [
        'Save your best message templates where you write emails, in Gmail or Outlook.',
        'For mail merge, Word and Outlook work together, and some Google Workspace accounts have it inside Gmail.',
        'If you have neither, the sheet formula already made every message for you.',
        'Whatever tool you use, preview three messages and send a test to yourself first.',
      ],
    },
  ],
  build: {
    title: 'Build your first templates and a merge',
    intro: 'Download fee_reminders_practice.csv (invented names, safe to use) and open your template library kit.',
    steps: [
      { title: 'List your repeat messages', text: 'Write down five messages you send every week or month: reminders, updates, follow-ups, notices, thank-yous.' },
      { title: 'Write one prompt template', text: 'Turn your most common message into a prompt template with [placeholders] for what changes. Add: “Do not add any facts. Keep the placeholders exactly as written.”', tip: 'Square brackets for prompt blanks, double curly brackets for mail-merge fields: pick one style and keep it.' },
      { title: 'Make a message template', text: 'Ask a chatbot for the fee reminder with the four merge fields. Check every field name against the sheet headings, letter by letter.' },
      { title: 'Build messages in the sheet', text: 'Open the practice CSV in Google Sheets or Excel. Ask the AI for one formula that builds the message in column F, paste it in F2 and drag it down.' },
      { title: 'Preview and test', text: 'Read three rows aloud: name, batch, amount and date. Fix anything odd. Send one message to yourself as a test.' },
      { title: 'Start your library', text: 'Copy the library table from the kit and add your first two templates with “when to use” and “what to check”.' },
    ],
  },
  acts: [
    {
      ai: 'Kabir runs a courier booking counter. Every Monday he messages business customers about pickups booked for that week. Write a reusable prompt template that asks the AI to draft this message. Use [placeholders] for the details that change, say who it is for, the tone and length, tell the AI not to add facts, and tell it to keep the placeholders unchanged.',
      title: 'Prompt Lab: a reusable prompt template',
      starter: 'Write a pickup message for customers.',
      checks: [
        ['Use placeholders for the details that change', ['customer name', 'pickup date', 'pickup time', 'number of parcels', 'placeholder']],
        ['Say who it is for', ['business customer', 'customer', 'client']],
        ['Set the tone', ['polite', 'friendly', 'professional', 'warm']],
        ['Set the length or format', ['words', 'lines', 'short', 'whatsapp', 'sentences']],
        ['Tell the AI not to invent facts', ['do not add', 'don\'t add', 'do not invent', 'don\'t invent', 'no new facts', 'do not make up', 'only the facts']],
        ['Keep the placeholders unchanged', ['keep the placeholders', 'keep placeholders', 'do not change the placeholders', 'don\'t change the placeholders', 'exactly as written', 'keep the brackets']],
      ],
      exemplar: 'You are the polite assistant of a courier booking counter. Write a short WhatsApp message to a business customer, [Customer name], confirming their pickups this week: [Number of parcels] parcels on [Pickup date] between [Pickup time]. Ask them to keep the parcels packed and labelled. Under 50 words, friendly and professional. Do not add any facts, charges or promises. Keep the placeholders exactly as written in square brackets.',
      tools: CHATBOTS,
    },
    {
      ai: 'You have fee_reminders_practice.csv open (A First Name, B Batch, C Amount Due, D Due Date). Write a prompt asking the AI for ONE formula that builds a personal reminder in column F for each row. Name your app, describe the columns, give an example of the finished sentence, ask for the amount and date to be formatted, ask how to fill it down, and ask for a simple explanation.',
      title: 'Prompt Lab: a mail-merge formula',
      starter: 'Make a formula for reminders.',
      checks: [
        ['Name your app', ['google sheets', 'excel', 'sheets']],
        ['Describe the columns', ['column']],
        ['Give an example of the finished message', ['for example', 'example', 'like this', 'should read']],
        ['Ask for neat formatting of amount and date', ['format', 'commas', '10 nov']],
        ['Ask how to fill every row', ['drag', 'fill down', 'every row', 'each row', 'copy down']],
        ['Ask for a simple explanation', ['explain', 'simple words', 'step by step']],
      ],
      exemplar: 'In Google Sheets, column A is First Name, column B is Batch, column C is Amount Due and column D is Due Date. Write one formula for F2 that builds a reminder like this example: “Hello! Gentle reminder: the fee of ₹2,500 for Aarav’s Class 9 Maths batch is due on 10 Nov.” Format the amount with commas and the date like 10 Nov. Tell me how to fill it down to every row, and explain the formula in simple words.',
      tools: CHATBOTS,
    },
    {
      match: 'Match each part of a good template to the job it does',
      pairs: [
        ['[Placeholders] like [Due date]', 'Mark exactly what changes each time'],
        ['“Do not add any facts”', 'Stops the AI inventing fees, dates or promises'],
        ['“Keep the merge fields exactly as written”', 'Stops a renamed field from leaving a blank'],
        ['“Under 50 words”', 'Keeps a WhatsApp message easy to read'],
        ['A “when to use” note in the library', 'Helps a colleague pick the right template fast'],
      ],
      why: 'Each line of a template has a job: blanks for what changes, rules to stop invented facts and broken fields, a length, and a note so anyone can reuse it.',
    },
    {
      sort: 'Make a template, or write it fresh each time?',
      buckets: ['Make a template (it repeats)', 'Write it fresh (one-off or sensitive)'],
      items: [
        ['Weekly pickup reminder to business customers', 0],
        ['Monthly fee reminder to parents', 0],
        ['Condolence message to a colleague who lost a parent', 1],
        ['Diwali greeting to all customers', 0],
        ['Monday review meeting invite', 0],
        ['Apology to one client for a serious billing mistake', 1],
        ['Welcome email for every new joiner', 0],
        ['Reply to a legal notice', 1],
      ],
      why: 'Messages that repeat with only small changes are perfect templates. Personal, sensitive or legal messages need fresh, careful writing (and sometimes an expert), even if AI helps with a first draft.',
      hint: 'Ask: do I send almost the same words again and again?',
    },
    {
      mcq: 'Meera wants AI help with a mail merge to 60 customers. What should the AI see?',
      options: ['The full customer list, so it can personalise each message', 'Only the message template with placeholders; the sheet fills in the real names on her own computer or company account', 'The list without phone numbers, but with names and amounts', 'Nothing; AI cannot help with mail merge'],
      answer: 1,
      why: 'The AI only needs the shape of the message. The real names and amounts stay in her sheet, and the merge or formula fills them in.',
      title: 'What does the AI need to see?',
      wrong: { 2: 'Names and amounts are still personal details. The AI does not need them to write a template.' },
    },
    {
      mcq: 'Zoya previews her merge and sees: “Hello! The fee of ₹ for Meera’s Class 10 Science batch is due on 10 Nov.” What most likely went wrong, and what should she do?',
      options: ['The AI is broken, so she should type all 60 messages by hand', 'A field name in the template does not match the sheet heading (for example {{Amount}} vs “Amount Due”); fix the name and preview again', 'Send it anyway; parents will understand', 'Delete the amount column from the sheet'],
      answer: 1,
      why: 'An empty gap almost always means a field name does not match a column heading. Fix the name, preview three messages, and test on yourself.',
      title: 'New situation: the missing amount',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Level 1 ended with one AI routine. Level 2 makes routines run with less typing. Today is templates: a prompt template is a saved prompt with [placeholders]; a message template is finished text with merge fields. The big idea for privacy is that the AI writes the template and the sheet fills in the real names, so the real list never goes into a chatbot. Show both ways to fill a template: a sheet formula that builds each message (works for everyone) and mail merge (Word with Outlook, or Gmail on some Workspace accounts). The caught mistake is a renamed field: the AI changes {{Due Date}} to {{Date}} and the merge leaves a blank.',
    analogy: 'A template is like a rubber stamp with a blank space: you carve it carefully once, then stamp it a hundred times and write only the name in the space.',
    vocab: [
      ['template', 'A message or prompt you write once and reuse, changing only the blanks.'],
      ['placeholder', 'A blank like [Customer name] that marks what changes each time.'],
      ['merge field', 'A blank like {{First Name}} that mail merge fills from a column in your sheet.'],
      ['mail merge', 'Joining one template with a list so each person gets their own personal message.'],
      ['template library', 'One place where you keep your templates with notes on when to use them.'],
    ],
    demo: '1) Open ChatGPT (or any chatbot) and type the fee reminder prompt from the video, with the four merge fields. 2) Read the reply aloud and ask: “Do all four field names match exactly?” If the AI renamed one, celebrate the catch; if not, show the {{Date}} example from the video. 3) Open fee_reminders_practice.csv in Google Sheets. 4) In Gemini or ChatGPT, ask for the F2 formula with the example sentence; paste it into F2 and drag down. 5) Read rows 2, 5 and 8 aloud and check name, amount and date. 6) Show where Gmail templates are turned on (Settings, advanced) or Outlook’s My Templates, and mention Word’s Mailings tab for mail merge. 7) Point out that the chatbot never saw the list.',
    unplugged: 'Spot the blanks (5 min): put three real-looking messages on screen (a fee reminder, a pickup reminder, a meeting invite). Teams race to circle every word that would change next time (names, dates, amounts, places). The team with the most correct circles wins. Then say: “Those circles are your placeholders. Today we turn these into templates.”',
    prompts: [
      ['What is the difference between a placeholder and a merge field?', 'A placeholder is a blank you fill in a prompt; a merge field is a blank mail merge fills from a sheet column.'],
      ['Why does the AI not need your real customer list?', 'It only writes the template; the sheet or mail merge fills in the real details.'],
      ['A preview shows an empty gap. What do you check first?', 'Whether the field name in the template exactly matches the column heading.'],
      ['Name two lines that make a template safer.', 'Do not add any facts; keep the placeholders/merge fields exactly as written (also a length limit).'],
      ['Which messages should NOT be templates?', 'Sensitive, personal or legal ones, like condolences or a reply to a legal notice.'],
    ],
    support: 'Give learners the ready-made fee reminder template and the finished F2 formula from the kit; they only change the wording and check three rows.',
    stretch: 'Add a Language column: ask the AI for an IF formula that builds the Hindi message when column E says Hindi and the English one otherwise, then have a Hindi speaker check the meaning.',
    mis: [
      ['To personalise messages, I must paste my customer list into the AI.', 'The AI writes the template; the sheet fills in names. The list stays with you.'],
      ['The AI will keep my field names as I typed them.', 'It sometimes renames them. Check every field name against the sheet headings.'],
      ['A template means every message sounds robotic.', 'Write it in your own warm voice once; personal details make each message feel personal.'],
      ['If I do not have mail merge, I cannot do this.', 'A sheet formula builds every message; copy them or use your company’s approved tool.'],
    ],
    successCriteria: ['I can turn a repeated message into a prompt template with placeholders.', 'I can get a mail-merge style formula from AI and build personal messages in a sheet.', 'I can preview merged messages and catch a renamed or empty field.', 'I can start a template library with notes on when to use each template.'],
    homework: 'Finish your five weekly templates in the library kit. Use one of them for real this week (with your own list kept in your sheet) and note the minutes saved.',
    exit: 'Your merge preview says “Dear , your order is ready.” What is the most likely cause, and what is your fix?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Spot the blanks” team race (see Unplugged). Link the circled words to placeholders.' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the lesson video. Poll in the chat: “How many times did you send nearly the same message last week?” (type a number).' },
      { minutes: 6, stage: 'Live demo', doing: 'Fee reminder template, the renamed-field catch, the F2 formula filled down, and where Gmail/Outlook templates live.' },
      { minutes: 10, stage: 'Build along (pairs)', doing: 'Build steps 1–5 with the practice CSV. Halfway thumbs check: “Thumbs up when column F shows 8 correct messages.”' },
      { minutes: 9, stage: 'Prompt Labs', doing: 'Prompt Lab: a reusable prompt template, then Prompt Lab: a mail-merge formula. Paste each into a chatbot and test.' },
      { minutes: 7, stage: 'Team games', doing: 'Quick competition: “Make a template or write it fresh?” sort in two teams, then the template-parts match as a speed round.' },
      { minutes: 7, stage: 'Breakout pairs', doing: 'Pairs swap one template and try to “break” it: rename a field or remove the no-new-facts line, then see what the AI does. Then the mail-merge question.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Three learners show one template from their library and the time it will save each week.' },
      { minutes: 4, stage: 'Probe', doing: 'New situation: the missing amount (individual).' },
      { minutes: 3, stage: 'Wrap-up', doing: 'Exit ticket and homework: five weekly templates in the library.' },
    ],
  },
  files: [
    {
      name: 'fee_reminders_practice.csv',
      title: 'Practice data: fee reminder list (CSV, invented names)',
      audience: 'student',
      content: FEE_REMINDERS_CSV,
    },
    {
      name: 'l01_template_library_kit.md',
      title: 'Templates that write themselves (project kit)',
      audience: 'student',
      content: `# Templates that write themselves — Lesson 1 project kit

**Project: 5 templates for your weekly messages.** By the end of this week you will have five tested templates in one library, each with notes on when to use it and what to check.

## 1. Privacy first (every lesson)
- The AI writes the **shape** of the message. Your sheet fills in the **real** names, numbers and dates.
- Never paste a real customer, parent, patient or staff list into a personal AI account.
- Never paste passwords, OTPs, Aadhaar, PAN, bank details or confidential company data.
- Use placeholders: [Customer name], [Amount], [Due date], [Order no.].

## 2. Two kinds of template
| Kind | What it is | Example |
|---|---|---|
| Prompt template | A saved prompt with [placeholders] you paste into a chatbot | "Write a short polite update to [Client] about [Project]. Facts: [facts]. Under 80 words. Do not add facts." |
| Message template | Finished text with {{merge fields}} that a sheet or mail merge fills | "Hello! The fee of ₹{{Amount}} for {{First Name}}'s {{Batch}} batch is due on {{Due Date}}." |

## 3. The template recipe (copy and fill)
> You are [role]. Write a [message type] to [who it is for] about [topic].
> Use these details: [placeholder 1], [placeholder 2], [placeholder 3].
> Tone: [polite / friendly / formal]. Length: [under 50 words / 3 lines].
> Do not add any facts, prices, dates or promises that are not given.
> Keep the placeholders exactly as written.

## 4. Build personal messages in a sheet (works for everyone)
Practice file: **fee_reminders_practice.csv** (invented names).

Ask the AI:
> In Google Sheets, column A is First Name, column B is Batch, column C is Amount Due and column D is Due Date. Write one formula for F2 that builds a reminder like this example: "Hello! Gentle reminder: the fee of ₹2,500 for Aarav's Class 9 Maths batch is due on 10 Nov." Format the amount with commas and the date like 10 Nov. Tell me how to fill it down, and explain it simply.

A formula that works (Google Sheets and Excel):

    ="Hello! Gentle reminder: the fee of ₹"&TEXT(C2,"#,##0")&" for "&A2&"'s "&B2&" batch is due on "&TEXT(D2,"d mmm")&"."

- **&** joins pieces of text.
- **TEXT(C2,"#,##0")** shows 2500 as 2,500.
- **TEXT(D2,"d mmm")** shows the date as 10 Nov.
- Paste in F2, then drag the small square at the corner of the cell down to the last row.

**Check rows 2, 5 and 8 (row 1 is the heading row):**
- Row 2: Aarav · Class 9 Maths · ₹2,500 · 10 Nov
- Row 5: Kabir · Class 8 English · ₹1,800 · 12 Nov
- Row 8: Ishaan · Class 10 Science · ₹1,500 · 15 Nov

Always check against the sheet itself, not against memory.

**Stretch (Hindi):** ask for an IF formula that builds a Hindi message when column E says "Hindi". Ask a Hindi speaker to check the meaning before you use it.

## 5. Sending
- **Gmail:** Settings → advanced options → turn on Templates. New email → three-dot menu → Templates → save draft as template.
- **Outlook:** My Templates or Quick Parts (names differ by version).
- **Mail merge:** Word → Mailings → Start Mail Merge → E-mail Messages, using your Excel list and desktop Outlook. Some Google Workspace accounts also have mail merge in Gmail.
- **None of these?** Copy each message from column F, or use your company's approved bulk tool.
- **Always:** preview three messages and send one test to yourself first. On WhatsApp, only message people who expect to hear from you.

## 6. My template library (copy this table into a Doc or Sheet)
| # | Template name | When to use | Placeholders / merge fields | Template text or prompt | What to check before sending | Minutes saved per week |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

Ideas: weekly status update, payment reminder, meeting invite with agenda, order-ready message, thank-you after a visit, monthly newsletter intro, leave/holiday notice.

## 7. Preview checklist
- [ ] Every field name matches the sheet heading exactly (Due Date is not Date)
- [ ] No empty gaps in three previewed messages
- [ ] Amounts and dates look right (₹2,500, 10 Nov)
- [ ] No facts, charges or promises I did not give
- [ ] Test sent to myself first

## 8. Worked example (with the caught mistake)
**Prompt:** You are the front-desk assistant of a coaching centre. Write a short, polite WhatsApp fee reminder for parents. Use these merge fields exactly as written and do not rename them: {{First Name}}, {{Batch}}, {{Amount}}, {{Due Date}}. Under 50 words. Do not add any facts, fees or late charges.

**AI draft:** "...is due on {{Date}}."
**Caught:** {{Due Date}} was renamed to {{Date}}. Fixed before saving.
**Saved template:** Hello! This is a gentle reminder that the fee of ₹{{Amount}} for {{First Name}}'s {{Batch}} batch is due on {{Due Date}}. If you have already paid, please ignore this message. Thank you! — [Centre name]
`,
    },
    {
      name: 'l01_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 1',
      audience: 'teacher',
      content: `# Lesson 1 demo script: templates and merge

**Before class:** open ChatGPT (or Claude/Gemini/Copilot) and Google Sheets. Upload fee_reminders_practice.csv to Sheets. Close anything private.

## Step 1 — Say
"In Level 1 we saved prompts. Today we make templates: a prompt with blanks. And the big privacy idea: the AI writes the template, the sheet fills in the names. The AI never sees the list."

## Step 2 — Type exactly (chatbot)
> You are the front-desk assistant of a coaching centre. Write a short, polite WhatsApp fee reminder for parents. Use these merge fields exactly as written and do not rename them: {{First Name}}, {{Batch}}, {{Amount}}, {{Due Date}}. Under 50 words. Do not add any facts, fees or late charges.

Ask: "Do all four field names match exactly?"
- **If a field was renamed or dropped:** "Great catch. A merge would leave that blank empty for every parent."
- **If all four are correct:** show the {{Date}} example from the video: "It does not happen every time, which is why we check every time."
- **If the AI added a late fee or a UPI ID:** "That is an invented fact. Delete it."

## Step 3 — The formula (Gemini or any chatbot)
> In Google Sheets, column A is First Name, column B is Batch, column C is Amount Due and column D is Due Date. Write one formula for F2 that builds a reminder like this example: "Hello! Gentle reminder: the fee of ₹2,500 for Aarav's Class 9 Maths batch is due on 10 Nov." Format the amount with commas and the date like 10 Nov. Tell me how to fill it down, and explain it simply.

Paste into F2, drag down. Read rows 2, 5 and 8 aloud (Aarav ₹2,500; Kabir ₹1,800; Ishaan ₹1,500).

**If the date shows as a number (like 46336):** the TEXT part is missing; ask "Format the date like 10 Nov using TEXT."
**If #VALUE! or #ERROR!:** copy the error back to the AI: "I get this error in F2: [error]. Fix the formula."
**If curly quotes break it:** retype the straight quotes in the formula bar.

## Step 4 — Where templates live
Show Gmail Settings (advanced → Templates) or Outlook My Templates. Mention Word → Mailings for mail merge with Outlook desktop. Do not promise Gmail mail merge: it is only on some Workspace accounts.

## Step 5 — Privacy line
"Which tool saw the parents' names? Only our sheet. The chatbot saw the template and the column headings."

## Answer key
- Match: placeholders = what changes; no facts = stops invented fees; keep fields = stops blanks; under 50 words = readable; when-to-use = colleague picks fast.
- Sort: templates = pickup reminder, fee reminder, Diwali greeting, meeting invite, welcome email; fresh = condolence, billing apology, legal notice.
- Probe: B (field name mismatch).
`,
    },
  ],
});

// ───────────────────────────────── Lesson 2 ─────────────────────────────────
const DASH_FORMULAS = `B1  19-Oct-2026        (the Monday the week starts)
A2  ="Week of "&TEXT(B1,"dd mmm yyyy")
B3  =SUMIFS(Orders!H:H, Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Delivered")
B4  =COUNTIFS(Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Delivered")
B5  =COUNTIFS(Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Cancelled")
B6  =COUNTIFS(Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Pending")
B7  =SUMIFS(Orders!H:H, Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Delivered", Orders!I:I,"Credit")
B8  =SUMIFS(Orders!H:H, Orders!A:A,">="&B1-7, Orders!A:A,"<"&B1, Orders!J:J,"Delivered")`;

export const A2 = lesson(2, {
  title: 'Spreadsheet Automation: A Dashboard That Updates Itself',
  objective: 'Get AI to write formulas with several conditions (SUMIFS, COUNTIFS, IF, XLOOKUP, TEXT) and conditional formatting rules, clean a messy sheet with formulas, build a weekly dashboard that updates when the date or data changes, and verify every number.',
  concept: 'Formulas that update',
  minutes: 60,
  hook: ['code', '=SUMIFS(Orders!H:H, Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Delivered")', '₹15,310 — this week’s delivered sales, and it updates itself'],
  intro: 'Today you will build a weekly dashboard that does its own sums, and you will learn to prove that every number is right.',
  cards: [
    { emoji: '🧮', title: 'Formulas with more than one condition', body: 'In Level 1 you used SUMIF for one condition, like one region. SUMIFS and COUNTIFS check several conditions at once, such as this week, delivered only, and paid on credit. You describe the conditions in plain words, and the AI writes the formula.' },
    { emoji: '🧹', title: 'Clean with formulas, not by hand', body: 'The AI can write cleaning formulas for you. TRIM removes extra spaces, and a check column shows OK or Check when an amount is not quantity times rate. Clean the data first, or every total after it will be wrong.' },
    { emoji: '📅', title: 'A dashboard that updates itself', body: 'Put the week start date in one cell, and point every formula at that cell. Change the date or add new rows, and the whole dashboard recalculates. The TEXT function turns dates and amounts into neat labels, such as Week of 19 Oct.' },
    { emoji: '🚦', title: 'Colour that warns you', body: 'Conditional formatting colours a cell automatically when a rule is true, such as red when sales are below target. The AI can write the rule for you. Colour helps you notice a problem, but you still decide what to do.' },
    { emoji: '✅', title: 'Always verify one number by hand', body: 'A formula can look perfect and still be wrong by one day or one condition. Check one number yourself with a filter and compare it with the dashboard. If they differ, find out why before you share anything.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Find the problems and get cleaning formulas',
      tool: 'Claude',
      prompt: '[Attached: weekly_orders.csv] List anything that would make weekly totals wrong. For each problem, give me a formula or quick fix I can use in Google Sheets. Do not change the file yourself.',
      reply: '1. ORD-3144 appears twice (22 Oct). Fix: keep one row (Data → Data cleanup → Remove duplicates, or delete it by hand).\n2. Extra spaces in Area: “Baner ” and “ Hinjewadi”. Fix: =TRIM(D2) in a helper column, or Data cleanup → Trim whitespace.\n3. Amounts typed as text: “2,400/-” and “1,800/-”. Fix: retype them as 2400 and 1800.\n4. ORD-3141 has no amount. Fix: Qty × Rate = 2 × 200 = 400.\n\nAdd a check column: =IF(H2=F2*G2,"OK","Check") and fill it down. Every “Check” is a row to fix.',
      say: [
        'We upload the practice orders file and ask Claude what would make our weekly totals wrong.',
        'It finds a duplicate order, extra spaces, amounts typed as text, and one blank amount.',
        'Best of all, it suggests a check column that flags every row where the amount does not add up.',
        'We fix each problem ourselves in the sheet, until every row in the check column says OK.',
      ],
    },
    {
      kind: 'code',
      heading: 'Your dashboard formulas',
      lang: 'spreadsheet',
      code: DASH_FORMULAS,
      output: 'Week of 19 Oct 2026 · Delivered sales 15310 · Orders 15 · Cancelled 1 · Pending 1 · Credit to collect 750 · Last week 14090',
      say: [
        'Here is the whole dashboard, and every formula points at one cell, B1, the week start date.',
        'SUMIFS adds the amounts for this week and delivered orders only, and COUNTIFS counts them.',
        'The credit formula adds one more condition, so it only counts orders paid on credit.',
        'For the week of nineteenth October, delivered sales are fifteen thousand, three hundred and ten rupees.',
      ],
    },
    {
      kind: 'chat',
      heading: 'The formula that was one day off',
      tool: 'Gemini',
      prompt: 'In Google Sheets, my Orders tab has Order Date in column A, Amount in column H and Status in column J. On my Dashboard tab, B1 holds the Monday the week starts. Write a formula for delivered sales in that week.',
      reply: '=SUMIFS(Orders!H:H, Orders!A:A, ">="&B1, Orders!A:A, "<="&B1+7, Orders!J:J, "Delivered")\n\nThis adds the amounts from the Monday in B1 up to seven days later, for Delivered orders only.\n\nResult: ₹16,530',
      note: 'Caught it: "<=" B1+7 also counts the NEXT Monday, 26 Oct (₹900 + ₹320). The filter check says ₹15,310. Fix: use "<"&B1+7.',
      say: [
        'Now we ask Gemini for the weekly sales formula, without saying exactly where the week ends.',
        'The formula looks right, and it gives sixteen thousand, five hundred and thirty rupees.',
        'But our filter check, for nineteenth to twenty-fifth October, says fifteen thousand, three hundred and ten.',
        'The less-than-or-equal sign also counted next Monday, so we change it to less than, and the numbers match.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Colour rules and the self-updating test',
      tool: 'Google Sheets · Excel',
      steps: [
        'Select B3 on the Dashboard. Google Sheets: Format → Conditional formatting. Excel: Home → Conditional Formatting → New Rule.',
        'Choose “Custom formula is” (Excel: “Use a formula to determine which cells to format”) and paste =B3<15000 with a red fill. Add =B3>=15000 with green.',
        'On the Orders tab, colour whole rows: apply to A2:K200 with =$J2="Cancelled" (grey) and =$K2="Check" (red).',
        'Test it: change B1 to 12-Oct-2026. Sales become ₹14,090 and turn red. Change it back to 19-Oct-2026.',
        'To follow the current week every day, put =TODAY()-WEEKDAY(TODAY(),3) in B1. It always shows this week’s Monday.',
        'Verify: filter Orders for 19–25 Oct and Delivered, select the Amount cells, and read the Sum at the bottom right.',
      ],
      say: [
        'Conditional formatting turns a number into a signal, green for on target and red for below.',
        'The dollar sign in the row rule keeps the colour on the whole row, not just one cell.',
        'Now change the week date, and watch every number and colour update by itself.',
        'Finally, check one total with a filter, because a dashboard is only useful when it is right.',
      ],
    },
  ],
  build: {
    title: 'Build the self-updating weekly dashboard',
    intro: 'Download weekly_orders.csv (invented orders for “Example Foods”, a fictional tiffin supplier in Pune). Customers appear only as codes, so it is safe to upload. Use Google Sheets or Excel.',
    steps: [
      { title: 'Import', text: 'Upload weekly_orders.csv to Google Sheets (File → Import) or open it in Excel. Rename the tab “Orders” and add a new tab called “Dashboard”.' },
      { title: 'Clean', text: 'Ask a chatbot to list problems and fixes. Add the check column in K: =IF(H2=F2*G2,"OK","Check"). Fix the duplicate, the extra spaces, the two text amounts and the blank, until every row says OK.', tip: 'If your app already trimmed the spaces on import, good: note it and move on.' },
      { title: 'Week cell and label', text: 'On the Dashboard, type 19-Oct-2026 in B1. Ask the AI for a label in A2 that says “Week of 19 Oct 2026” using TEXT.' },
      { title: 'Ask for the formulas', text: 'Describe each number in plain words (delivered sales, orders, cancelled, pending, credit to collect, last week) and paste the AI’s formulas into B3 to B8. Say clearly: “Monday to Sunday, before the next Monday.”' },
      { title: 'Add colour', text: 'Add conditional formatting: B3 red below ₹15,000 and green at or above; on Orders, grey rows for Cancelled and red rows for Check.' },
      { title: 'Verify and test', text: 'Filter the Orders tab for 19–25 Oct and Delivered and compare the Sum with B3 (₹15,310). Change B1 to 12-Oct-2026 and check ₹14,090. Your dashboard now updates itself.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt asking the AI for the “credit to collect” formula on your Dashboard: the total Amount of orders in the week that starts on the Monday in B1, where Status is Delivered and Payment is Credit. Name your app and tabs, give the column letters (Date A, Amount H, Payment I, Status J), list every condition, say exactly where the week ends, and ask for an explanation.',
      title: 'Prompt Lab: a formula with several conditions',
      starter: 'Give me a formula for credit.',
      checks: [
        ['Name your app', ['google sheets', 'excel', 'sheets']],
        ['Give the columns', ['column']],
        ['Point at the week start cell', ['b1']],
        ['Include the Delivered condition', ['delivered']],
        ['Include the Credit condition', ['credit']],
        ['Say exactly where the week ends', ['monday to sunday', 'before the next monday', '7 days', 'seven days', 'less than', 'up to sunday']],
        ['Ask for an explanation', ['explain', 'simple words', 'step by step']],
      ],
      exemplar: 'In Google Sheets, my Orders tab has Order Date in column A, Amount in column H, Payment in column I and Status in column J. On my Dashboard tab, B1 holds the Monday the week starts. Write a SUMIFS formula for the total Amount where the date is from B1 up to Sunday (before the next Monday), Status is Delivered and Payment is Credit. Explain it in simple words.',
      tools: CHATBOTS,
    },
    {
      ai: 'Some rows in your Orders tab have an Amount that is not Qty × Rate. Write a prompt asking the AI for (1) a check-column formula in column K that shows “OK” or “Check”, and (2) a conditional formatting rule that colours the whole row red when column K says “Check”. Name your app, give the columns (Qty F, Rate G, Amount H), and ask where to click.',
      title: 'Prompt Lab: a check column and a colour rule',
      starter: 'Highlight the wrong rows.',
      checks: [
        ['Name your app', ['google sheets', 'excel', 'sheets']],
        ['Give the columns', ['column']],
        ['Ask for an OK / Check formula', ['ok', 'check column', 'flag']],
        ['Say the rule (quantity times rate)', ['qty', 'quantity', 'times rate', 'multiplied']],
        ['Ask for conditional formatting', ['conditional formatting', 'colour', 'color', 'highlight']],
        ['Ask where to click', ['where to click', 'which menu', 'steps', 'how to set']],
      ],
      exemplar: 'In Google Sheets, my Orders tab has Qty in column F, Rate in column G and Amount in column H. (1) Give me a formula for column K that shows “OK” when Amount equals Qty times Rate and “Check” when it does not. (2) Give me a conditional formatting rule that colours the whole row red when column K says Check. Tell me the steps and which menu to use.',
      tools: CHATBOTS,
    },
    {
      match: 'Match each tool to the job it does on your dashboard',
      pairs: [
        ['SUMIFS', 'Add amounts that match several conditions, like this week and delivered'],
        ['COUNTIFS', 'Count orders that match several conditions'],
        ['TRIM', 'Remove extra spaces, like “Baner ” with a space at the end'],
        ['TEXT', 'Show a date or amount as a neat label, like 19 Oct 2026'],
        ['XLOOKUP', 'Find an item’s price in a separate price list'],
        ['Conditional formatting', 'Colour a cell red when sales are below target'],
      ],
      why: 'SUMIFS and COUNTIFS do the maths with several conditions, TRIM cleans, TEXT makes labels, XLOOKUP finds values in another table, and conditional formatting adds warning colours.',
    },
    {
      order: 'Put the steps for building a trustworthy dashboard in order.',
      steps: ['Import the data into an Orders tab', 'Clean it: duplicates, spaces, text amounts, blanks', 'Put the week start date in one cell', 'Ask AI for formulas that point at that cell', 'Add conditional formatting for targets', 'Verify one number by hand with a filter', 'Change the date to test that everything updates'],
      why: 'Clean before you count, build every formula on one date cell, then verify by hand and test that it updates.',
      title: 'Dashboard build order',
    },
    {
      mcq: 'Your dashboard says ₹16,530 for the week of 19 Oct. Your filter check (19–25 Oct, Delivered) says ₹15,310. The gap is ₹1,220. What is the most likely cause?',
      options: ['The filter is wrong, so trust the formula', 'The formula uses "<=" B1+7, so it also counts orders on Monday 26 Oct', 'The AI rounded the total up', 'Spreadsheets cannot add up money'],
      answer: 1,
      why: 'The two orders on Monday 26 Oct add up to ₹900 + ₹320 = ₹1,220. Changing "<=" to "<" fixes it. A gap of an exact set of rows points to a date or condition mistake.',
      title: 'Which number do you trust?',
      wrong: { 0: 'The filter is your hand check. When they differ, look for the reason in the formula first.' },
    },
    {
      mcq: 'Riya copies her dashboard for November. She types 2 Nov in B1, but every number shows 0, even though the Orders tab has November orders. What is the most likely reason?',
      options: ['These formulas only work in October', 'B1 was stored as text, not a real date, so the date comparisons find nothing; re-enter it as a date (for example 02-Nov-2026 or =DATE(2026,11,2))', 'The AI’s formula has expired', 'She must delete all the October rows first'],
      answer: 1,
      why: 'Date conditions only work when B1 is a real date. A quick test: a real date can be formatted differently or used in a sum; text cannot. Ask the AI “why does my SUMIFS show 0?” and paste the formula and B1.',
      title: 'New situation: the dashboard that shows zero',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Level 1 taught SUMIF, XLOOKUP and checking totals on a one-off report. Today the sheet does the work every week. Three ideas: formulas with several conditions (SUMIFS, COUNTIFS), cleaning with formulas (TRIM and a check column), and a dashboard that hangs off one date cell so it updates itself. Conditional formatting adds warning colours. The caught mistake is an off-by-one date: "<=" B1+7 quietly counts the next Monday. Learners prove their dashboard with a filter check before trusting it, and test it by changing the date.',
    analogy: 'A self-updating dashboard is like a car’s fuel gauge: you do not measure the tank every morning, the gauge updates itself, but you still check it is accurate after any repair.',
    vocab: [
      ['SUMIFS / COUNTIFS', 'Add up or count only the rows that match several conditions at once.'],
      ['TRIM', 'Removes extra spaces at the start or end of text, so “Baner ” matches “Baner”.'],
      ['TEXT function', 'Shows a number or date in a neat format, like 15,310 or 19 Oct 2026.'],
      ['conditional formatting', 'A rule that colours cells automatically, like red when sales are below target.'],
      ['dashboard', 'One page of key numbers that updates from your data.'],
      ['check column', 'An extra column with a formula that shows OK or Check for each row.'],
    ],
    demo: '1) Open weekly_orders.csv in Google Sheets as the Orders tab. 2) Upload it to Claude or ChatGPT with the “list problems and fixes, do not change the file” prompt. 3) Add the check column =IF(H2=F2*G2,"OK","Check") and fill down: three rows say Check (the two text amounts and the blank). Ask learners why the duplicate does NOT show: it adds up, it is just there twice. Fix all four problems live. 4) Make the Dashboard tab: B1 19-Oct-2026, the TEXT label in A2. 5) Ask Gemini for “delivered sales in that week” without saying where the week ends; if it uses "<=", show the ₹16,530 and the filter check ₹15,310. If it gets it right, type the "<=" version yourself to show the trap. 6) Add B4–B8. 7) Add the red/green rule on B3 and change B1 to 12 Oct (₹14,090, red). 8) Put =TODAY()-WEEKDAY(TODAY(),3) in B1 for a moment, then back to 19 Oct.',
    unplugged: 'Human SUMIFS (5 min): give 10 volunteers order cards (date, status, amount; one card dated next Monday, one cancelled). Call out conditions one at a time: “Stand up if your order is in the week of 19 Oct… stay standing only if Delivered… only if paid on Credit.” The class adds the standing amounts. Then ask: “Who wrongly stood up at the first call?” (the next-Monday card). That is exactly the mistake we will catch in a formula today.',
    prompts: [
      ['What does SUMIFS do that SUMIF cannot?', 'It checks several conditions at once, like the week, the status and the payment type.'],
      ['Why does every formula point at B1?', 'So changing one date updates the whole dashboard.'],
      ['Why use "<" B1+7 and not "<=" B1+7?', '"<=" also includes the next Monday, so the week would have eight days.'],
      ['How do you verify the dashboard?', 'Filter the data for the same week and condition and compare the Sum with the dashboard number.'],
      ['Why clean before building formulas?', 'Text amounts, blanks, spaces and duplicates make SUMIFS give wrong totals without any error message.'],
    ],
    support: 'Give a half-built Dashboard with B1, A2 and B3 filled in; learners ask the AI for B4–B8 by copying and changing the B3 prompt. Pair spreadsheet beginners with confident learners.',
    stretch: 'Add a “sales by item” table with SUMIFS per item, a “top item this week” cell (ask the AI for INDEX/MATCH with MAX, or SORTBY), and an XLOOKUP rate check against a small price list tab.',
    mis: [
      ['If a formula gives no error, it is correct.', 'Wrong dates or missing conditions give wrong numbers with no error. Verify with a filter.'],
      ['A typed date is always a real date.', 'Sometimes it is stored as text. Re-enter it or use DATE(), then test.'],
      ['Self-updating means I never check it again.', 'Check one number by hand every week, and after any change to the sheet.'],
      ['I must learn every function by heart.', 'Describe the columns and conditions; the AI writes and explains the formula.'],
    ],
    successCriteria: ['I can get formulas with several conditions (SUMIFS, COUNTIFS) from a plain-words request.', 'I can clean a messy sheet with TRIM and a check column.', 'I can build a dashboard that updates when the date or data changes, with conditional formatting.', 'I can verify a dashboard number with a filter and explain any difference.'],
    homework: 'Finish the dashboard and add one number your own work needs (for example “orders still pending”). Optional: build the same dashboard on an anonymised copy of a real sheet from your work.',
    exit: 'Your dashboard and your filter check differ by the value of exactly two orders on one date. What do you check first?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Human SUMIFS” stand-up game (see Unplugged).' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the lesson video. Fist-to-five poll: “How confident are you with SUMIF from Level 1?”' },
      { minutes: 8, stage: 'Live demo', doing: 'Problems and fixes, the check column, the dashboard on one date cell, the one-day-off catch, colour rules, the date-change test.' },
      { minutes: 15, stage: 'Build along (pairs)', doing: 'Build steps 1–6 in pairs. Halfway check: “Type your B3 in the chat.” Everyone should reach ₹15,310 before adding colour.' },
      { minutes: 8, stage: 'Prompt Labs', doing: 'Prompt Lab: a formula with several conditions (the credit cell), then the check column and colour rule. Paste the AI’s answers into the dashboard.' },
      { minutes: 6, stage: 'Team race', doing: 'Quick competition: the function match and dashboard build order, two teams, fastest correct wins. Then “Which number do you trust?” as a class poll.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Two learners share screens: change B1 to 12 Oct live and show everything updating and turning red.' },
      { minutes: 5, stage: 'Probe', doing: 'New situation: the dashboard that shows zero (individual).' },
      { minutes: 4, stage: 'Wrap-up', doing: 'Exit ticket; homework: add one number your own work needs.' },
    ],
  },
  files: [
    {
      name: 'weekly_orders.csv',
      title: 'Practice data: Example Foods weekly orders (CSV, invented)',
      audience: 'student',
      content: WEEKLY_ORDERS_CSV,
    },
    {
      name: 'l02_dashboard_kit.md',
      title: 'Spreadsheet automation: weekly dashboard (project kit)',
      audience: 'student',
      content: `# Spreadsheet automation — Lesson 2 project kit

**Project: a self-updating weekly dashboard.** One date cell drives every number. Change the date or add rows, and the dashboard updates. Every number is verified once by hand.

## 1. Privacy first
- Practice file: **weekly_orders.csv** (Example Foods is fictional; customers are codes like C-103).
- For your own sheets: remove names, phone numbers and addresses before uploading to a personal AI account, or just describe the columns. The AI does not need your data to write a formula: it needs the column letters and what you want.
- Never paste confidential company figures into a personal account. Use your company's approved tool.

## 2. Clean first (4 problems in the practice file)
| Problem | Order | Fix |
|---|---|---|
| Duplicate row | ORD-3144 (22 Oct) appears twice | Keep one: Data → Data cleanup → Remove duplicates (Sheets) or Data → Remove Duplicates (Excel) |
| Extra spaces | "Baner " (ORD-3138), " Hinjewadi" (ORD-3149) | =TRIM(D2) in a helper column, or Sheets: Data cleanup → Trim whitespace |
| Amounts as text | "2,400/-" (ORD-3146), "1,800/-" (ORD-3148) | Retype as 2400 and 1800 |
| Blank amount | ORD-3141 | Qty × Rate = 2 × 200 = 400 |

**Check column (K):** =IF(H2=F2*G2,"OK","Check") → fill down. Fix until every row says OK. (The duplicate still says OK because it adds up: duplicates need Remove duplicates, not the check column.)

## 3. Dashboard formulas (Dashboard tab)
    B1  19-Oct-2026     (the Monday the week starts)
    A2  ="Week of "&TEXT(B1,"dd mmm yyyy")
    B3  =SUMIFS(Orders!H:H, Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Delivered")
    B4  =COUNTIFS(Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Delivered")
    B5  =COUNTIFS(Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Cancelled")
    B6  =COUNTIFS(Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Pending")
    B7  =SUMIFS(Orders!H:H, Orders!A:A,">="&B1, Orders!A:A,"<"&B1+7, Orders!J:J,"Delivered", Orders!I:I,"Credit")
    B8  =SUMIFS(Orders!H:H, Orders!A:A,">="&B1-7, Orders!A:A,"<"&B1, Orders!J:J,"Delivered")
    B9  =IF(B8=0,"",B3/B8-1)     (format as %: change from last week)
    A11 ="Week of "&TEXT(B1,"d mmm")&": delivered sales ₹"&TEXT(B3,"#,##0")&" from "&B4&" orders."

Labels for column A: A3 Delivered sales · A4 Delivered orders · A5 Cancelled · A6 Pending · A7 Credit to collect · A8 Last week's sales · A9 Change.

**Make it follow today's week:** put =TODAY()-WEEKDAY(TODAY(),3) in B1. WEEKDAY(...,3) counts Monday as 0, so this always gives the current week's Monday.

## 4. Expected answers (cleaned practice file)
| Week starting | Delivered sales | Delivered orders | Cancelled | Pending | Credit to collect |
|---|---|---|---|---|---|
| 5 Oct 2026 | ₹15,850 | 16 | 1 | 0 | ₹3,550 |
| 12 Oct 2026 | ₹14,090 | 14 | 3 | 0 | ₹4,950 |
| 19 Oct 2026 | ₹15,310 | 15 | 1 | 1 | ₹750 |

Week of 19 Oct vs 12 Oct: up about 8.7%.

**Wrong answers you might see, and why**
- ₹12,510 → formulas run before cleaning (text amounts and the blank are skipped, the duplicate counted twice)
- ₹16,530 → "<="&B1+7 also counts Monday 26 Oct (₹900 + ₹320)
- ₹16,360 → no Status condition: the cancelled (₹450) and pending (₹600) orders are counted

## 5. Conditional formatting
- B3: Custom formula =B3<15000 → red; =B3>=15000 → green.
- Orders rows (apply to A2:K200): =$J2="Cancelled" → grey; =$K2="Check" → red. The $ before the letter keeps the rule on the whole row.
- Sheets: Format → Conditional formatting → "Custom formula is". Excel: Home → Conditional Formatting → New Rule → "Use a formula to determine which cells to format".

## 6. Prompt templates
1. **Problems and fixes:** [Attach file or describe columns] List anything that would make weekly totals wrong. For each problem, give me a formula or quick fix for [Google Sheets / Excel]. Do not change the file yourself.
2. **Multi-condition formula:** In [app], my [tab] has [column letters and names]. B1 holds the Monday the week starts. Write a formula for [what] where the date is from B1 up to Sunday (before the next Monday) and [condition 1] and [condition 2]. Explain it in simple words.
3. **Colour rule:** Give me a conditional formatting custom formula that colours [cells / whole rows] [colour] when [rule]. Tell me which menu to use in [app].
4. **Fix an error:** My formula is [paste]. B1 contains [what you see]. It shows [0 / #VALUE! / wrong number]. Expected about [number]. What is wrong?
5. **Extra (lookup):** In [app], my price list tab has Item in A and Rate in B. Write an XLOOKUP that finds the rate for the item in E2 and shows "Not found" if it is missing.

## 7. Verify checklist
- [ ] Every row in the check column says OK, and duplicates are removed
- [ ] B3 matches a filter check (19–25 Oct, Delivered, Sum at the bottom right)
- [ ] Changing B1 to 12-Oct-2026 gives ₹14,090
- [ ] B1 is a real date (not text)
- [ ] Colours change when the number crosses the target
`,
    },
    {
      name: 'l02_teacher_demo_and_answer_key.md',
      title: 'Teacher demo script and answer key — Lesson 2',
      audience: 'teacher',
      content: `# Lesson 2 demo script: a dashboard that updates itself

**Before class:** import weekly_orders.csv into a fresh Google Sheet (tab "Orders"). Have a second copy already cleaned and with the finished Dashboard, in case time runs short.

## Step 1 — Problems and fixes (Claude or ChatGPT)
> [Attach weekly_orders.csv] List anything that would make weekly totals wrong. For each problem, give me a formula or quick fix I can use in Google Sheets. Do not change the file yourself.

Expected: duplicate ORD-3144, spaces in "Baner " and " Hinjewadi", text amounts "2,400/-" and "1,800/-", blank amount ORD-3141.
**If the AI misses one:** "AI lists are a start, not a guarantee. Our check column will find the rest."
**If the AI offers a cleaned file to download:** "Thanks, but we fix it ourselves so we know exactly what changed."

## Step 2 — Check column
Type =IF(H2=F2*G2,"OK","Check") in K2, fill down. Three rows say Check (the 2 text amounts and the blank; none for the duplicate). Ask: "Why does the duplicate say OK?" (It adds up; it is just there twice.)

## Step 3 — The trap (Gemini or any chatbot)
> In Google Sheets, my Orders tab has Order Date in column A, Amount in column H and Status in column J. On my Dashboard tab, B1 holds the Monday the week starts. Write a formula for delivered sales in that week.

- **If it uses "<=" B1+7:** result ₹16,530. Filter check ₹15,310. Find the two 26 Oct orders together.
- **If it uses "<" B1+7 (correct):** praise it, then type the "<=" version yourself and show the ₹16,530. "Next time it might not be so careful. The filter check catches it either way."
- **If it gives ₹12,510:** you forgot to clean. Good teaching moment.

## Step 4 — Colour and the date test
Rule on B3: =B3<15000 red, =B3>=15000 green. Change B1 to 12-Oct-2026 → ₹14,090 and red. Back to 19 Oct.

## Step 5 — Today's week
Show =TODAY()-WEEKDAY(TODAY(),3) in B1. Then put back 19-Oct-2026 (the practice data is from October).

## Answer key
- Expected numbers: see the table in the student kit (19 Oct: ₹15,310 · 15 · 1 · 1 · ₹750; last week ₹14,090).
- Match: SUMIFS several conditions; COUNTIFS count; TRIM spaces; TEXT labels; XLOOKUP price list; conditional formatting colour.
- Which number do you trust? B (next Monday counted, ₹900 + ₹320 = ₹1,220).
- Probe: B (B1 stored as text).

## If something goes wrong
- **0 everywhere:** B1 is text, or the tab is not named exactly "Orders".
- **#ERROR! in Sheets:** curly quotes pasted from a chat; retype the quotes.
- **Excel uses semicolons:** some regional settings use ; instead of , between arguments. Ask the AI: "My Excel uses semicolons; rewrite the formula."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 3 ─────────────────────────────────
const LOOP_BUG = `function sendFeedbackSummary() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
  const rows = sheet.getDataRange().getValues().slice(1);
  let total = 0, low = 0;
  for (const row of rows) {
    total += Number(row[2]);
    if (row[2] <= 2) low++;
    MailApp.sendEmail(Session.getActiveUser().getEmail(), 'Feedback summary',
      'Responses: ' + rows.length + ', average: ' + (total / rows.length).toFixed(1) + ', low: ' + low);
  }
}`;

export const A3 = lesson(3, {
  title: 'Forms to Sheet to Summary',
  objective: 'Collect responses with Google Forms or Microsoft Forms, use AI to find themes with counts and exact quotes, and run a small AI-written Apps Script that emails you a summary, after checking every line before you run it.',
  concept: 'Collect, summarise, send',
  minutes: 60,
  hook: ['word', 'Form → Sheet → Summary', '18 responses counted, themed and emailed to you, and every line checked before it runs'],
  intro: 'Today you will build a small workflow: a form collects answers, AI finds the themes, and a script emails you the summary.',
  cards: [
    { emoji: '📝', title: 'Collect with a form', body: 'Google Forms and Microsoft Forms collect answers in the same shape every time. The answers go straight into a sheet, so nobody retypes anything. Turn off collecting email addresses unless you really need them.' },
    { emoji: '🧠', title: 'Let AI find the themes', body: 'Remove any personal details, then paste the comments and ask for themes with counts and exact quotes. Tell the AI to quote word for word and not to invent anything. Then check the biggest claims yourself with COUNTIF or a filter.' },
    { emoji: '🤖', title: 'A small script that emails you', body: 'Apps Script is a helper built into Google Sheets that runs small programs. The AI can write a script that reads the responses and emails you a summary. You do not need to be a programmer, but you must understand every line before you run it.' },
    { emoji: '🛑', title: 'The check-before-you-run rule', body: 'Before running any script, ask the AI to explain it line by line. Make sure it only reads data, emails only you, and sends one email, not one for every row. Test it on a copy of the sheet first, and know how to switch it off.' },
    { emoji: '🔁', title: 'Run it on a schedule, if you want', body: 'A trigger runs your script automatically, for example every Monday morning. With Microsoft Forms, Power Automate can do a similar job, and Zapier works with both. They have free plans, but check the current free plan and your company rules first.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Make the form and send answers to a sheet',
      tool: 'Google Forms · Microsoft Forms',
      steps: [
        'Google Forms: go to forms.google.com and start a blank form. Add: session (dropdown), rating 1–5 (linear scale), most useful (short answer), what to improve (paragraph), recommend (multiple choice).',
        'In the form’s Settings, keep “Collect email addresses” off for anonymous feedback.',
        'Open the Responses tab → Link to Sheets → create a new spreadsheet. Answers now arrive in a tab called “Form Responses 1”.',
        'Microsoft Forms: go to forms.office.com → New Form. Responses can be opened in Excel from the Responses tab (the button name varies by account).',
        'Practice: import feedback_responses_practice.csv into a sheet tab named “Form Responses 1” (18 invented responses).',
      ],
      say: [
        'A form collects every answer in the same shape, which makes summarising easy.',
        'Keep email collection off for honest, anonymous feedback, unless you truly need it.',
        'Link the form to a sheet, and every new answer lands in a new row by itself.',
        'For practice, we use eighteen invented responses from a workshop feedback form.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Themes, counts and quotes',
      tool: 'Claude',
      prompt: 'Here are 18 anonymous responses from a workshop feedback form (session, rating 1–5, most useful, what to improve). I removed one phone number. Group the “what to improve” comments into themes. For each theme give the number of comments and one exact quote, word for word. Do not invent quotes. Then suggest 3 actions.',
      reply: 'Themes in “What should we improve?”\n1. Pace too fast — over half of participants. “Too fast; I could not follow the formulas”\n2. More practice time — 4 comments. “More practice time”\n3. Share slides and files — 4 comments. “Please share slides”\n4. Audio problems online — 2 comments. “Audio kept breaking on the online link”\n\nActions: slow down the formula section, add a 15-minute practice block, email the slides and practice file after class.',
      note: 'Caught it: “over half” is wrong. =COUNTIF(E:E,"*fast*") gives 5 of 18. Correct it to “5 of 18 said it was too fast” before sharing.',
      say: [
        'First we deleted a phone number that one person typed into a comment, then we pasted the responses.',
        'Claude groups the comments into four themes, with a count and an exact quote for each.',
        'But the first theme says over half of the people found it too fast.',
        'A quick COUNTIF finds only five comments out of eighteen, so we correct the summary before sharing.',
      ],
    },
    {
      kind: 'chat',
      heading: 'The script that would send 18 emails',
      tool: 'ChatGPT',
      prompt: 'Write a Google Apps Script for my sheet tab “Form Responses 1”. Column C has a 1–5 rating. Email only me one summary: number of responses, average rating, and how many ratings were 1 or 2. It must only read the sheet. Explain every line in simple words.',
      reply: LOOP_BUG,
      note: 'Caught it: the sendEmail line is INSIDE the loop, so it would send 18 emails, each with a wrong running average. Move it below the loop’s closing bracket so it runs once.',
      say: [
        'Now we ask ChatGPT for a small script that emails us one summary.',
        'The script reads the rows, adds up the ratings, and counts the low ones.',
        'But look where the email line sits: inside the loop that visits every row.',
        'That would send eighteen emails, so we move it after the loop, where it runs only once.',
      ],
    },
    {
      kind: 'code',
      heading: 'The checked script, line by line',
      lang: 'javascript',
      code: FEEDBACK_SUMMARY_GS,
      output: 'One email to you: “Feedback summary: 18 responses”\nResponses so far: 18\nAverage rating: 3.9 out of 5\nLow ratings (1 or 2): 2',
      say: [
        'Here is the checked script, and the comments explain each part in plain words.',
        'It opens the responses tab, reads every row, and skips the heading row.',
        'The loop adds up the ratings and counts how many were one or two.',
        'After the loop, it works out the average and sends exactly one email, only to you.',
        'It never changes or deletes anything, and that is the first thing you check.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Run it safely, then schedule it',
      tool: 'Google Sheets · Apps Script',
      steps: [
        'Make a copy of the sheet first (File → Make a copy). Practise on the copy.',
        'In the copy: Extensions → Apps Script. Delete the empty function, paste the checked script, and save.',
        'Press Run. Google asks for permission the first time: read what it asks (this spreadsheet, send email as you). Your own script may show an “unverified app” warning: continue only for a script you wrote and understand.',
        'Check your inbox: exactly one email, with 18 responses and an average of 3.9.',
        'Optional: open Triggers (the clock icon) → Add trigger → sendFeedbackSummary → Time-driven → Week timer → Monday, morning.',
        'To stop it later, delete the trigger. Write that down before you switch it on.',
      ],
      say: [
        'Always practise on a copy, so a mistake can never touch the real responses.',
        'The first time, Google asks for permission, so read exactly what the script wants to do.',
        'Check your inbox for one email with the right numbers.',
        'Only then add a weekly trigger, and note how to delete it if you ever need to stop it.',
      ],
    },
  ],
  build: {
    title: 'Build the feedback-to-summary workflow',
    intro: 'Use the practice responses (invented, no names) or a test form you make today. Work in Google Sheets for the script part.',
    steps: [
      { title: 'Make a form', text: 'Build a 5-question feedback form in Google Forms or Microsoft Forms. Keep email collection off. Submit two test answers yourself.' },
      { title: 'Get the responses in a sheet', text: 'Link the form to a sheet, or import feedback_responses_practice.csv into a tab named exactly “Form Responses 1”.' },
      { title: 'Privacy sweep', text: 'Scan the comments for names, phone numbers or emails. Response 12 has a phone number: delete it before pasting anything into AI.', tip: 'People type personal details into comment boxes all the time. Always sweep first.' },
      { title: 'AI themes, then verify', text: 'Ask for themes with counts and exact quotes. Check the top two counts with =COUNTIF(E:E,"*fast*") and the average with =AVERAGE(C:C) (3.9). Try =AVERAGEIF(B:B,"Online",C:C) too.' },
      { title: 'Script: check before you run', text: 'Ask the AI for the summary script, then go through the 7-point check in your kit. Run it on a copy and check you get exactly one email.' },
      { title: 'Optional schedule', text: 'Add a weekly trigger, or note how Power Automate or Zapier could do the same (check the current free plan). Write down how to switch it off.' },
    ],
  },
  acts: [
    {
      ai: 'You have 18 workshop feedback responses with the personal details removed. Write a prompt asking the AI to summarise the “what to improve” comments. Say the data is anonymous, ask for themes, a count for each theme, exact quotes, no invented content, and suggested actions.',
      title: 'Prompt Lab: summarise form responses',
      starter: 'Summarise this feedback.',
      checks: [
        ['Say personal details are removed', ['anonymous', 'no names', 'removed', 'without names', 'personal details']],
        ['Ask for themes', ['theme', 'group']],
        ['Ask for a count per theme', ['how many', 'count', 'number of']],
        ['Ask for exact quotes', ['exact quote', 'quote exactly', 'word for word', 'exact words']],
        ['Tell the AI not to invent', ['do not invent', 'don\'t invent', 'do not make up', 'do not add', 'only from']],
        ['Ask for actions', ['action', 'next steps', 'suggest']],
      ],
      exemplar: 'Here are 18 anonymous responses from a workshop feedback form; I removed all personal details. Group the “what to improve” comments into themes. For each theme, give the number of comments and one exact quote, word for word. Do not invent quotes or add anything that is not in the responses. Then suggest 3 actions for the next workshop.',
      tools: CHATBOTS,
    },
    {
      ai: 'Write a prompt asking the AI to write a Google Apps Script that emails you a summary of a form. Name the tab and the rating column, say what to calculate, say it must email only you and only once, that it must only read the sheet, and ask for every line to be explained.',
      title: 'Prompt Lab: ask for a safe script',
      starter: 'Write a script to email the form.',
      checks: [
        ['Say it is Apps Script', ['apps script']],
        ['Name the tab and the column', ['form responses', 'column']],
        ['Say what to calculate', ['average', 'count', 'number of responses']],
        ['Email only you', ['only me', 'to me', 'my email', 'myself', 'my own']],
        ['Read only, no changes', ['only read', 'read-only', 'read only', 'do not change', 'do not delete', 'never change']],
        ['Exactly one email', ['one email', 'single email', 'one summary', 'only once']],
        ['Explain every line', ['every line', 'line by line', 'each line']],
      ],
      exemplar: 'Write a Google Apps Script for my sheet tab “Form Responses 1”. Column C has a rating from 1 to 5. Calculate the number of responses, the average rating and how many ratings were 1 or 2. Send one email, only to me, with these numbers and a link to the sheet. The script must only read the sheet and never change or delete anything. Explain every line in simple words.',
      tools: CHATBOTS,
    },
    {
      order: 'Put the check-before-you-run steps in order.',
      steps: ['Ask the AI to explain every line', 'Confirm it only reads data (no delete, clear or set)', 'Confirm it emails only you, and only once', 'Make a copy of the sheet and run it there', 'Read the permission screen before allowing', 'Check your inbox: one email, right numbers', 'Only then add a trigger, and note how to delete it'],
      why: 'Understand it, check what it touches and who it emails, test on a copy, and only schedule it once it has worked correctly.',
      title: 'Check before you run',
    },
    {
      sort: 'Script or automation: test it on a copy, or stop and fix it first?',
      buckets: ['Looks safe to test on a copy', 'Stop: fix it or ask before running'],
      items: [
        ['Reads the sheet and emails a summary to you', 0],
        ['Has a line with deleteRow or clear()', 1],
        ['Sends one email, after the loop', 0],
        ['Calls sendEmail inside a loop over every row', 1],
        ['Emails every address found in the responses', 1],
        ['Uses getDisplayValue to read one dashboard cell', 0],
        ['A script from a stranger’s video that nobody has explained to you', 1],
        ['A Zapier or Power Automate step that posts every response, phone numbers included, to a team chat', 1],
      ],
      why: 'Safe scripts read, summarise and email you once. Anything that deletes, emails many people, loops emails, shares personal data or that you do not understand gets fixed or questioned first.',
      hint: 'Ask: what could go wrong if this ran 100 times, or on the real data?',
    },
    {
      mcq: 'The AI’s summary says “Over half of participants found the session too fast.” =COUNTIF(E:E,"*fast*") gives 5, out of 18 responses. What do you do?',
      options: ['Trust the AI; it read every comment', 'Correct the summary to “5 of 18 said it was too fast” and check the other counts too', 'Delete the theme from the report', 'Ask the AI “are you sure?” and use whatever it says'],
      answer: 1,
      why: 'Counts are facts you can check in seconds. 5 of 18 is about a quarter, not over half. Fix it and check the other theme counts the same way.',
      title: 'Over half?',
    },
    {
      mcq: 'Kabir’s HR team uses Microsoft Forms for leave requests. He wants the manager to get an automatic email for each new request. What is the most sensible first step?',
      options: ['Find a ready-made script online and run it on the real form', 'Try Power Automate (or Zapier) with a test form, send the email only to himself while testing, and check the current free plan and company IT rules', 'Paste every leave request into a chatbot each day', 'Give the AI his Microsoft password so it can set everything up'],
      answer: 1,
      why: 'Test on a copy, send only to yourself until it works, and check the plan and company rules. Never share passwords, and never run something you do not understand on real data.',
      title: 'New situation: the leave-request form',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Today learners build a real three-step workflow: a form collects answers into a sheet, AI finds themes with counts and exact quotes, and a small Apps Script emails a summary. The script is AI-written and explained line by line; learners are not becoming programmers, they are becoming careful checkers. Teach the check-before-you-run rule as non-negotiable: explain every line, read-only, email only me and only once, run on a copy, read the permission screen, check the inbox, then schedule. Two caught mistakes: the AI says “over half” when a COUNTIF shows 5 of 18, and the first script sends an email inside the loop (18 emails). Zapier and Power Automate are optional extras; say “check the current free plan”.',
    analogy: 'A script is like a new office helper you give a written instruction slip: you read the slip aloud before handing it over, you try it on a practice file first, and you know how to tell the helper to stop.',
    vocab: [
      ['Google Forms / Microsoft Forms', 'Free tools that collect answers to questions and save them in a sheet.'],
      ['Apps Script', 'A free helper inside Google Sheets that runs small programs, like sending you an email.'],
      ['loop', 'Part of a script that repeats for every row; anything inside it happens many times.'],
      ['trigger', 'A setting that runs a script automatically, for example every Monday morning.'],
      ['permission screen', 'The Google window asking what a script may do (read this sheet, send email as you).'],
      ['Power Automate / Zapier', 'Optional tools that connect apps, like “new form response → send email”.'],
    ],
    demo: '1) Show a 5-question Google Form with email collection off, and the Link to Sheets button. 2) Open the practice responses in a tab named “Form Responses 1”. 3) Find response 12’s phone number and delete it before anything goes to AI. 4) Paste the responses into Claude with the themes prompt; check the top count with =COUNTIF(E:E,"*fast*") (5). If the AI says “over half” or a wrong number, celebrate the catch. 5) Ask ChatGPT for the script with the safe prompt. Read the script with the class and find where sendEmail sits. If it is inside the loop, show the 18-email problem; if not, show the video version. 6) Paste the checked script into Extensions → Apps Script on a COPY, run it, read the permission screen aloud, and open the one email (18 responses, 3.9, 2 low). 7) Show the Triggers clock icon and how to delete a trigger. Mention Power Automate and Zapier in one sentence each.',
    unplugged: 'The instruction slip (5 min): give pairs a paper “script” for a human helper: “For each envelope on the desk: open it, count the coins, and phone the boss with the total.” Ask: “How many times will the boss get a phone call?” (once per envelope!). Then fix the slip together so the call happens once, at the end. Say: “Today an AI-written script will make exactly this mistake. You will catch it.”',
    prompts: [
      ['Why keep “collect email addresses” off on a feedback form?', 'So feedback is anonymous and honest, and you collect less personal data.'],
      ['What must you do before pasting form comments into AI?', 'Remove names, phone numbers, emails and other personal details.'],
      ['Where should sendEmail be in a summary script, and why?', 'After the loop, so it sends one email with the final numbers.'],
      ['Name three things on the check-before-you-run list.', 'Any three: explain every line, read-only, emails only you, once, run on a copy, read permissions, check inbox, know how to delete the trigger.'],
      ['How do you check an AI theme count?', 'COUNTIF with a keyword, or a filter, on the responses column.'],
    ],
    support: 'Give learners the checked script from the kit to paste (instead of writing the prompt) and focus their time on the 7-point check and running it on a copy. Pair them with a confident learner for the permission screen.',
    stretch: 'Ask the AI to add the online and office averages (AVERAGEIF logic) to the email, then check the new lines with the same 7 points. Or sketch the same workflow in Power Automate for Microsoft Forms (check the current free plan).',
    mis: [
      ['If the AI wrote the script, it must be safe.', 'AI scripts can loop emails, delete data or email the wrong people. Check every line, run on a copy.'],
      ['The “unverified app” warning means the script is a virus.', 'Google shows it for scripts you write yourself. Continue only for a script you wrote and understand; never for a stranger’s.'],
      ['AI theme counts are exact.', 'They can be wrong. Check with COUNTIF or a filter.'],
      ['Automation means sending to everyone automatically.', 'Start by sending only to yourself; a human checks before anything goes wider.'],
    ],
    successCriteria: ['I can set up a Google or Microsoft Form that sends answers to a sheet.', 'I can get AI themes with counts and exact quotes, and verify the counts.', 'I can ask AI for a small Apps Script and explain what each part does.', 'I can apply the check-before-you-run rule and run a script safely on a copy.'],
    homework: 'Make one real form for your work (feedback, orders, attendance or requests) with email collection off, link it to a sheet, and set up the summary email to yourself. Note the minutes saved compared with reading every response.',
    exit: 'Your script sends you 18 emails instead of one. Which line is in the wrong place, and where should it go?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“The instruction slip” paper-script game (see Unplugged).' },
      { minutes: 5, stage: 'Watch + poll', doing: 'Play the lesson video. Poll: “Have you ever run a script or macro at work?” (yes / no / not sure).' },
      { minutes: 8, stage: 'Live demo', doing: 'Form to sheet, privacy sweep, AI themes and the COUNTIF catch, the loop catch, run on a copy, permission screen, one email.' },
      { minutes: 7, stage: 'Prompt Labs', doing: 'Prompt Lab: summarise form responses, then Prompt Lab: ask for a safe script. Paste the summary prompt into a chatbot with the practice data.' },
      { minutes: 14, stage: 'Build along (pairs)', doing: 'Build steps 1–5 in pairs: one partner reads each script line aloud, the other ticks the 7-point check. Thumbs up when exactly one email arrives.' },
      { minutes: 7, stage: 'Team games', doing: 'Quick competition: “Test on a copy or stop?” sort in teams, then the check-before-you-run order game and the “Over half?” question as a class poll.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Two learners show their summary email and one count they corrected.' },
      { minutes: 5, stage: 'Probe', doing: 'New situation: the leave-request form (individual).' },
      { minutes: 4, stage: 'Wrap-up', doing: 'Exit ticket; homework: one real form with a summary email to yourself.' },
    ],
  },
  files: [
    {
      name: 'feedback_responses_practice.csv',
      title: 'Practice data: 18 workshop feedback responses (CSV, invented)',
      audience: 'student',
      content: FEEDBACK_RESPONSES_CSV,
    },
    {
      name: 'feedback_summary.js',
      title: 'Apps Script: email me a feedback summary (checked version)',
      audience: 'student',
      content: FEEDBACK_SUMMARY_GS,
    },
    {
      name: 'l03_feedback_workflow_kit.md',
      title: 'Forms to sheet to summary (project kit)',
      audience: 'student',
      content: `# Forms to sheet to summary — Lesson 3 project kit

**Project: a feedback-to-summary workflow.** A form collects answers, AI finds themes (checked by you), and a script emails you one summary.

## 1. Privacy first
- Keep **Collect email addresses** off unless you truly need it.
- Before pasting comments into AI, sweep for names, phone numbers, emails and addresses. (Practice response 12 has a fake phone number on purpose: delete it.)
- Never paste staff, student, patient or customer personal data into a personal AI account. For company data, use your company's approved tool.
- The script emails **only you**. You decide what to forward.

## 2. Build the form (5 questions)
1. Which session did you attend? (dropdown)
2. How useful was the session? (linear scale 1–5)
3. What was most useful? (short answer)
4. What should we improve? (paragraph)
5. Would you recommend it to a colleague? (Yes / Maybe / No)

Google Forms → Responses → **Link to Sheets**. Microsoft Forms → Responses → open in Excel.

## 3. Summary prompt (copy)
> Here are [number] anonymous responses from a [type] form; I removed all personal details. Group the "[question]" comments into themes. For each theme, give the number of comments and one exact quote, word for word. Do not invent quotes or add anything that is not in the responses. Then suggest 3 actions.

## 4. Verify the AI's numbers (practice data answers)
| Check | Formula | Answer |
|---|---|---|
| Responses | =COUNTA(A2:A) or count rows | 18 |
| Average rating | =AVERAGE(C:C) | 3.9 (70 ÷ 18) |
| Low ratings (1 or 2) | =COUNTIF(C:C,"<=2") | 2 |
| Online average | =AVERAGEIF(B:B,"Online",C:C) | 2.9 (7 responses) |
| Pune office average | =AVERAGEIF(B:B,"Pune office",C:C) | 4.5 (11 responses) |
| "fast" comments | =COUNTIF(E:E,"*fast*") | 5 |
| "practice" comments | =COUNTIF(E:E,"*practice*") | 5 (4 ask for more practice time, 1 asks for the practice file early) |
| Would recommend: Yes | =COUNTIF(F:F,"Yes") | 13 (Maybe 3, No 2) |

The asterisks mean "this word anywhere in the comment".

## 5. The script (feedback_summary.js), line by line
| Line(s) | What it does in plain words |
|---|---|
| function sendFeedbackSummary() | The name of the job. You pick it in the Run menu and in triggers. |
| const ss = SpreadsheetApp.getActiveSpreadsheet() | "This spreadsheet" — the one the script is attached to. |
| getSheetByName('Form Responses 1') | Opens the tab with that exact name. If you renamed the tab, change this. |
| getDataRange().getValues() | Reads every filled cell into a list of rows. Reading only. |
| rows.slice(1) | Skips row 1 (the headings). |
| if (answers.length === 0) return | If there are no answers yet, stop and send nothing. |
| for (const row of answers) { ... } | The loop: visits every response once. |
| Number(row[2]) | Takes column C (counting starts at 0: A = 0, B = 1, C = 2) as a number. |
| total += rating; if (rating <= 2) low++ | Adds up the ratings and counts the 1s and 2s. |
| (total / answers.length).toFixed(1) | The average, rounded to 1 decimal place. |
| const body = ... | Writes the email text, with a link to the sheet. |
| Session.getActiveUser().getEmail() | Your own email address. |
| MailApp.sendEmail(me, subject, body) | Sends ONE email to you. It is after the loop, so it runs once. |

## 6. The check-before-you-run rule (7 points)
- [ ] 1. I asked the AI to explain every line, and I understand each part
- [ ] 2. It only **reads** (no deleteRow, clear, setValue, or "remove")
- [ ] 3. It emails **only me** (no list of addresses)
- [ ] 4. sendEmail is **after** the loop, so it sends **one** email
- [ ] 5. I am running it on a **copy** of the sheet (File → Make a copy)
- [ ] 6. I read the permission screen (this spreadsheet + send email as me). The "unverified app" warning appears for my own scripts; I continue only because I wrote and understand this one
- [ ] 7. I know how to stop it: delete the trigger (clock icon in Apps Script)

## 7. Script prompt (copy)
> Write a Google Apps Script for my sheet tab "[tab name]". Column [letter] has [what]. Calculate [numbers]. Send one email, only to me, with these numbers and a link to the sheet. The script must only read the sheet and never change or delete anything. Explain every line in simple words.

## 8. Optional: schedule or connect
- **Apps Script trigger:** Triggers (clock icon) → Add trigger → choose the function → Time-driven → Week timer → Monday morning.
- **Microsoft Forms:** Power Automate can send an email when a new response arrives.
- **Zapier:** connects Google Forms, Microsoft Forms, Sheets and email.
- Power Automate and Zapier have free plans, but check the current free plan and your company's IT rules before relying on them. Test with a test form and send only to yourself first.

## 9. Worked example (with the caught mistakes)
- AI summary said "over half found it too fast" → COUNTIF found 5 of 18 → corrected.
- AI script had sendEmail **inside** the loop → would send 18 emails → moved after the loop.
- Final email: "Feedback summary: 18 responses · Average rating: 3.9 out of 5 · Low ratings (1 or 2): 2".
`,
    },
    {
      name: 'l03_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 3',
      audience: 'teacher',
      content: `# Lesson 3 demo script: forms to sheet to summary

**Before class:** make a Google Sheet with the practice CSV in a tab named exactly "Form Responses 1", and a COPY of that sheet for running the script. Have a simple 5-question Google Form ready to show. Log in to Claude and ChatGPT (or any two chatbots).

## Step 1 — Form (2 min)
Show the form, Settings (email collection off), Responses → Link to Sheets. "Every answer lands in a new row. Nobody retypes."

## Step 2 — Privacy sweep
Scroll to response 12: "Please call me at 90000 00000". Delete the number on screen. "People put personal details in comment boxes. We sweep before AI."

## Step 3 — Themes (Claude), type exactly
> Here are 18 anonymous responses from a workshop feedback form; I removed all personal details. Group the "what to improve" comments into themes. For each theme, give the number of comments and one exact quote, word for word. Do not invent quotes or add anything that is not in the responses. Then suggest 3 actions.

Check live: =COUNTIF(E:E,"*fast*") → 5.
- **If the AI says "over half", "most" or a wrong count:** "There's our catch. Counts are facts; we check them."
- **If the counts are right:** check a quote: search the sheet (Ctrl+F) for it. "Quotes can be invented too; this one is real."

## Step 4 — Script (ChatGPT), type exactly
> Write a Google Apps Script for my sheet tab "Form Responses 1". Column C has a rating from 1 to 5. Calculate the number of responses, the average rating and how many ratings were 1 or 2. Send one email, only to me, with these numbers and a link to the sheet. The script must only read the sheet and never change or delete anything. Explain every line in simple words.

Read it with the class. Ask: "Where is sendEmail? Inside or after the loop?"
- **Inside:** "18 emails. Move it below the closing bracket of the loop."
- **After (correct):** show the video version and ask what would happen.
- **Any deleteRow / clear / setValue:** stop. "Why would a summary need to change data? Ask the AI to remove it."

## Step 5 — Run on the copy
Extensions → Apps Script → paste the checked script (feedback_summary.js) → Save → Run. Read the permission screen aloud. Explain the "unverified app" warning honestly: "Google shows this for scripts we write ourselves. I continue because I wrote it and I just checked every line. I would never do this for a stranger's script."
Open the inbox: one email, 18 responses, 3.9, 2 low.

## Step 6 — Triggers and the off switch
Show the clock icon → Add trigger (do not save it in class). Show where you would delete it.
One sentence each: "Microsoft Forms users can do this with Power Automate; Zapier connects both. Free plans exist, but check the current free plan and your IT rules."

## If something goes wrong
- **"Cannot read properties of null":** the tab name does not match exactly. Rename the tab or fix the name in the script.
- **Average looks wrong (NaN):** column C contains text; check the column letter and the data.
- **No email:** check Spam; check the script finished (Execution log).

## Answer key
- Order: explain → read-only → only me, once → copy → permissions → inbox → trigger.
- Sort, safe: read+email you, one email after loop, getDisplayValue. Stop: deleteRow/clear, sendEmail in loop, email every address, stranger's script, posting phone numbers to a chat.
- Over half? B. Probe: B.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 4 ─────────────────────────────────
export const A4 = lesson(4, {
  title: 'Project: Automate One Recurring Report',
  objective: 'Automate one recurring report from data to delivery by joining a self-updating sheet, a prompt template and an emailed draft, with human checkpoints at every risky step and an honest time-saved log.',
  concept: 'End-to-end report',
  minutes: 60,
  hook: ['word', '75 min → 20 min', 'one weekly report, automated end to end, with you at every checkpoint'],
  intro: 'Project time! Today you will join everything from this module into one report that almost builds itself, with you checking at every important step.',
  cards: [
    { emoji: '🔗', title: 'Join the pieces into a pipeline', body: 'You now have three tools: templates, a self-updating dashboard, and a script that emails you. A report pipeline joins them, from data in to message out. Each step hands its result to the next one.' },
    { emoji: '🚦', title: 'Plan your human checkpoints', body: 'A checkpoint is a planned stop where a person looks before the work moves on. Put one after cleaning, one after the numbers, and one before anything leaves your inbox. The automation sends drafts to you, and you send the final version to others.' },
    { emoji: '✍️', title: 'AI writes from your numbers, not your raw data', body: 'Give the AI only the dashboard numbers, not the full order list. Ask it to use only those numbers, to say up or down correctly, and to add no reasons of its own. Then compare every number in its draft with the dashboard.' },
    { emoji: '⏱️', title: 'Keep a time-saved log', body: 'Each week, write the date, the minutes taken including checks, and any problem you caught. Also count the setup time, and work out how many weeks it takes to pay back. After a month, you have honest proof to show your manager.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Map the pipeline and its checkpoints',
      tool: 'Paper · Google Sheets · Gmail',
      steps: [
        'Data in: orders arrive in the Orders tab (typed, imported, or from a Google Form).',
        'Clean: the check column shows OK or Check. CHECKPOINT A: every row says OK and duplicates are removed.',
        'Numbers: the Dashboard updates from the week cell B1. CHECKPOINT B: one number verified with a filter.',
        'Words: your saved prompt template turns the dashboard numbers into 3 short lines of comments.',
        'Send: the Apps Script emails YOU a draft. CHECKPOINT C: you read it, fix it, and forward it yourself.',
        'Log: write the minutes taken and any problem caught in the time-saved log.',
      ],
      say: [
        'Start on paper: draw every step of the report, from data in to message out.',
        'Mark three checkpoints, after cleaning, after the numbers, and before anything is sent.',
        'The script only ever emails you, and you decide what goes to your manager.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Comments from the numbers, checked',
      tool: 'Microsoft Copilot',
      prompt: 'You write my weekly sales note for my manager. Use ONLY these numbers: week of 19 Oct 2026; delivered sales ₹15,310 (last week ₹14,090); 15 delivered orders; 1 cancelled; 1 pending; credit to collect ₹750. Write 3 short lines. Say up or down correctly. Do not add reasons or numbers that are not given.',
      reply: 'Week of 19 Oct 2026: delivered sales rose to ₹15,310, up 12% on last week (₹14,090), from 15 orders.\nOne order was cancelled and one is pending; ₹750 of credit sales is still to collect.\nGrowth was driven by strong demand for Veg Thali in Kothrud.',
      note: 'Caught it twice: the rise is 8.7%, not 12% (15,310 ÷ 14,090 − 1). And the Veg Thali reason was never given to the AI: delete it, or check the item table before writing any reason.',
      say: [
        'We give Copilot only the dashboard numbers, never the full order list.',
        'The note is short and clear, but checkpoint C finds two problems.',
        'The rise is about eight point seven percent, not twelve percent.',
        'And the reason about Veg Thali was invented, because we never gave the AI any reasons.',
      ],
    },
    {
      kind: 'code',
      heading: 'The draft-email script (emails only you)',
      lang: 'javascript',
      code: WEEKLY_REPORT_GS,
      output: 'One email to you: “DRAFT weekly report: Week of 19 Oct 2026”\nDelivered sales: ₹15,310 (last week: ₹14,090)\nDelivered orders: 15\nCancelled: 1 | Pending: 1\nCredit to collect: ₹750\nCHECK BEFORE FORWARDING: week date, totals vs the Check column, comments.',
      say: [
        'This script reads the dashboard cells exactly as they appear on screen.',
        'If the dashboard is empty, it stops and sends nothing at all.',
        'It emails you one draft, with a reminder of what to check before forwarding.',
        'Run the same seven-point check from lesson three before you use it.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Log the time and work out the payback',
      tool: 'Google Sheets · Excel',
      steps: [
        'Before: time the old way once. Practice example: 75 minutes every Monday.',
        'After: time the new way, including all three checkpoints. Example: 20 minutes.',
        'Setup: count the time you spent building it. Example: 150 minutes.',
        'Saved per week: 75 − 20 = 55 minutes. Payback: 150 ÷ 55 ≈ 3 weeks.',
        'Keep logging for 4 weeks. If one week took longer, write down why.',
      ],
      say: [
        'Honest measuring means counting checking time and setup time too.',
        'In our example, the report drops from seventy-five minutes to twenty.',
        'The setup took one hundred and fifty minutes, so it pays for itself in about three weeks.',
      ],
    },
  ],
  build: {
    title: 'Automate your recurring report, end to end',
    intro: 'Use the Example Foods practice report (weekly_orders.csv and your Lesson 2 dashboard), or a report from your own work with all names and confidential figures removed.',
    steps: [
      { title: 'Choose and time it', text: 'Pick one report you make every week or month. Write its steps and time the old way (or use the practice example: 75 minutes).' },
      { title: 'Draw the pipeline', text: 'Copy the pipeline card from the kit: data in, clean, numbers, words, send, log. Mark checkpoints A, B and C and who does each one.' },
      { title: 'Sheet and dashboard', text: 'Reuse your Lesson 2 Orders tab, check column and Dashboard. Format B3, B7 and B8 as rupees so the email shows ₹15,310.' },
      { title: 'Save the comments prompt', text: 'Save a prompt template that uses only the dashboard numbers, says up or down correctly, adds no reasons, and asks the AI to flag anything unclear.' },
      { title: 'Add the draft email', text: 'Paste weekly_report.js into Extensions → Apps Script on a copy, run the 7-point check, and run it. No script? Use a Gmail or Outlook template and paste the numbers yourself.', tip: 'The script emails only you. You forward after checkpoint C.' },
      { title: 'Run it and log it', text: 'Run the whole pipeline once, start to finish, with the timer on. Fill the time-saved log and work out the payback.' },
    ],
  },
  acts: [
    {
      ai: 'Write the prompt template your report will use every week to turn dashboard numbers into 3 lines of comments for your manager. Say who it is for, tell the AI to use only the numbers you give, include sales and last week’s sales, ask for up or down and the percentage change, forbid added reasons, set the length, and ask it to flag anything unclear.',
      title: 'Prompt Lab: the report comments template',
      starter: 'Write a weekly sales note.',
      checks: [
        ['Say who it is for', ['manager', 'team', 'owner', 'boss']],
        ['Use only the numbers given', ['only these numbers', 'use only', 'only the numbers', 'only use']],
        ['Include this week and last week', ['last week']],
        ['Ask for the change, correctly', ['up or down', 'percentage', 'per cent', 'percent', 'change from last week']],
        ['Forbid added reasons or numbers', ['do not add', 'don\'t add', 'no reasons', 'do not guess', 'do not invent']],
        ['Set the length', ['3 lines', 'three lines', 'short', 'under', 'words']],
        ['Ask it to flag anything unclear', ['flag', 'tell me if', 'unclear', 'missing']],
      ],
      exemplar: 'You write my weekly sales note for my manager. Use only these numbers: week of [Week]; delivered sales [Sales] (last week [Last week]); [Orders] delivered orders; [Cancelled] cancelled; [Pending] pending; credit to collect [Credit]. Write 3 short lines. Say whether sales went up or down and give the percentage change from last week. Do not add reasons, guesses or numbers that are not given. If anything looks unclear or missing, flag it at the end instead of guessing.',
      tools: CHATBOTS,
    },
    {
      sort: 'In your report pipeline: let the sheet or script do it, or a human checkpoint?',
      buckets: ['Let the sheet or script do it', 'Human checkpoint'],
      items: [
        ['Adding up delivered sales with SUMIFS', 0],
        ['Recalculating when the week date changes', 0],
        ['Confirming every row says OK before using the numbers', 1],
        ['Building the draft email from dashboard cells', 0],
        ['Reading the AI’s comments against the dashboard', 1],
        ['Colouring sales red when below target', 0],
        ['Forwarding the final report to the manager', 1],
        ['Deciding what to do about a big drop in sales', 1],
      ],
      why: 'Sheets and scripts add, recalculate, colour and draft. People confirm the data is clean, check the words against the numbers, decide, and send.',
    },
    {
      order: 'Put the report pipeline in order.',
      steps: ['Data arrives in the Orders tab', 'Checkpoint A: every row says OK', 'Dashboard updates from the week cell', 'Checkpoint B: one number verified with a filter', 'AI drafts comments from the dashboard numbers', 'Script emails the draft to you', 'Checkpoint C: read, fix and forward', 'Log the time and any problem caught'],
      why: 'Clean, count, check, write, draft, check, send, log. A checkpoint sits after each step where a mistake would spread.',
      title: 'The report pipeline',
    },
    {
      mcq: 'Setting up your automated report took 180 minutes. It used to take 70 minutes a week; now it takes 25 minutes including checks. After how many weeks has the setup paid for itself?',
      options: ['2 weeks', '4 weeks', '7 weeks', 'Never; setup time does not count'],
      answer: 1,
      why: 'You save 70 − 25 = 45 minutes a week. 180 ÷ 45 = 4 weeks. After that, every week is pure time saved.',
      title: 'Payback time',
      wrong: { 3: 'Setup time is real time. Counting it is what makes your time-saved claim honest.' },
    },
    {
      projectAct: true,
      title: 'Module project: automate one recurring report',
      brief: 'Choose one report you make every week or month (or use the Example Foods weekly sales note). Automate it from data to delivery with a self-updating sheet, a prompt template and a draft email to yourself, with three human checkpoints, and prove the time saved with a log.',
      requirements: [
        'A pipeline map: data in, clean, numbers, words, send, log, with checkpoints A, B and C',
        'A sheet with a check column and a dashboard that updates from one date cell',
        'A saved prompt template for the comments that uses only your numbers',
        'A draft email sent only to you (Apps Script checked with the 7 points, or a Gmail/Outlook template)',
        'One mistake caught at a checkpoint, and how you fixed it',
        'A time-saved log: before, after (with checks), setup time and payback weeks',
      ],
      reflection: 'Which checkpoint caught something, what would have happened without it, and how many weeks until your setup pays back?',
      tips: ['Start from your Lesson 2 dashboard.', 'The script emails only you; you forward.', 'Give the AI numbers, not raw data.', 'Count checking time and setup time honestly.'],
      minWords: 40,
    },
    {
      mcq: 'On Monday 2 Nov, your draft email still says “Week of 19 Oct 2026”. Which checkpoint should catch this, and what is the lasting fix?',
      options: ['No checkpoint needed; nobody reads the date', 'Checkpoint C catches it; the lasting fix is a B1 formula for last week’s Monday, =TODAY()-WEEKDAY(TODAY(),3)-7, or a first step on the routine card: “update B1”', 'Delete the script and go back to the old way', 'Ask the AI to remember the date every week'],
      answer: 1,
      why: 'Reading the draft catches the wrong week. A report sent on Monday is about the week that just ended, so B1 should be last week’s Monday: the −7 does that.',
      title: 'New situation: the stale week',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'This is the Module 1 project. Learners join lesson 1 (templates), lesson 2 (self-updating dashboard) and lesson 3 (a script that emails you) into one recurring report, end to end. The key design idea is human checkpoints: after cleaning (A), after the numbers (B) and before anything leaves the inbox (C). The automation emails drafts to the learner; the learner forwards. The AI only sees dashboard numbers, never raw data. Measurement is honest: checking time and setup time count, and learners work out the payback in weeks. The caught mistake: the AI’s comments say “up 12%” (really 8.7%) and invent a reason.',
    analogy: 'A report pipeline is like a factory line with quality inspectors: machines cut, stamp and pack, but an inspector checks at three points, and nothing leaves the gate without a signature.',
    vocab: [
      ['pipeline', 'All the steps of a task joined in order, from data in to message out.'],
      ['human checkpoint', 'A planned stop where a person checks before the work moves on.'],
      ['draft-to-me rule', 'Automations send drafts only to you; you send the final version.'],
      ['time-saved log', 'A weekly record of minutes taken (including checks) and problems caught.'],
      ['payback', 'How many weeks of time saved it takes to cover the setup time.'],
    ],
    demo: '1) Draw the pipeline on a whiteboard or slide: data in → clean (A) → numbers (B) → words → send (C) → log. 2) Open the Lesson 2 dashboard and show checkpoint A (all OK) and B (filter check ₹15,310). 3) Paste the comments prompt into Copilot (or any chatbot) with the numbers; check the percentage with =B3/B8-1 (8.7%) and look for any added reason. If the AI is accurate, show the video version. 4) Run weekly_report.js on a copy; open the DRAFT email and read the “check before forwarding” line. 5) Fill a time-saved log row: 75 before, 20 after, setup 150, payback about 3 weeks. 6) Show the rubric and the project requirements.',
    unplugged: 'Assembly line (5 min): four volunteers form a line to make a “report” on paper: one writes numbers, one adds them, one writes a sentence, one “sends” it. Secretly tell the adder to make one mistake. Run it once with no inspectors (the mistake goes out), then again with an inspector after each person. Ask: “Where did the inspector catch it? Where should checkpoints go in your report?”',
    prompts: [
      ['Where do the three checkpoints go?', 'After cleaning, after the numbers, and before anything is sent to others.'],
      ['Why does the script email only you?', 'So a person checks the draft before it reaches anyone else.'],
      ['Why give the AI dashboard numbers and not the raw data?', 'Less private data shared, and fewer chances for wrong totals; you can check every number.'],
      ['How do you work out payback?', 'Setup minutes divided by minutes saved per week.'],
      ['What goes in the time-saved log?', 'Date, minutes before/after including checks, problems caught.'],
    ],
    support: 'Offer the complete practice pipeline (Lesson 2 dashboard, the comments template and the checked script) so learners only run it, find the mistake at checkpoint C and fill the log.',
    stretch: 'Feed the Orders tab from a Google Form so new orders arrive by themselves, add a “sales by item” table to the email, or set a weekly trigger for Monday morning.',
    mis: [
      ['End to end means no human at all.', 'It means every step is joined up; people still check at A, B and C.'],
      ['Time saved = old time − AI time.', 'Count checking and setup time too; then work out payback.'],
      ['The AI needs all my data to write a good comment.', 'It needs only the summary numbers, and you can check them all.'],
      ['Once it works, it will always work.', 'Dates, tab names and data change; checkpoints catch the drift.'],
    ],
    successCriteria: ['I can map a report pipeline with three human checkpoints.', 'I can join a self-updating sheet, a prompt template and a draft email to myself.', 'I can catch a wrong number or invented reason at a checkpoint.', 'I can keep a time-saved log and work out the payback honestly.'],
    homework: 'Finish the module project and run your pipeline for real next week. Add one more row to your time-saved log.',
    exit: 'Name your three checkpoints, and say which one you think will catch the most problems in your report.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Assembly line” with and without inspectors (see Unplugged).' },
      { minutes: 4, stage: 'Watch + poll', doing: 'Play the project video. Poll: “Which report eats most of your week?” (type it in the chat).' },
      { minutes: 6, stage: 'Live demo', doing: 'Pipeline drawing, checkpoints A and B, the Copilot comments catch (12% vs 8.7%, invented reason), the draft email, a log row.' },
      { minutes: 5, stage: 'Prompt Lab', doing: 'Prompt Lab: the report comments template. Test it in a chatbot with the practice numbers and check the percentage.' },
      { minutes: 5, stage: 'Team games', doing: 'Quick competition: “Script or checkpoint?” sort and the pipeline order game in two teams; “Payback time” as a speed question.' },
      { minutes: 20, stage: 'Project build (pairs)', doing: 'Build steps 1–6. Halfway check: “Show me checkpoint A and B passing.” Partners swap drafts at checkpoint C and hunt for one wrong number.' },
      { minutes: 7, stage: 'Show-and-tell', doing: 'Three learners show their pipeline map, the mistake their checkpoint caught, and their payback weeks.' },
      { minutes: 5, stage: 'Probe and submit', doing: 'New situation: the stale week. Submit the module project with the reflection and time-saved log.' },
      { minutes: 3, stage: 'Wrap-up', doing: 'Exit ticket and preview of Module 2: AI for your role.' },
    ],
  },
  project: {
    title: 'Automate one recurring report end to end',
    brief: 'Automate one weekly or monthly report from data to delivery, joining a self-updating sheet, a prompt template and a draft email to yourself, with three human checkpoints and an honest time-saved log.',
    requirements: [
      'Pipeline map with checkpoints A (clean), B (numbers) and C (before sending)',
      'Sheet with a check column and a dashboard driven by one date cell',
      'Saved comments prompt template that uses only the dashboard numbers',
      'Draft email to yourself (checked Apps Script or a Gmail/Outlook template)',
      'One mistake caught at a checkpoint, explained',
      'Time-saved log with before, after (including checks), setup time and payback',
    ],
    milestones: ['Report chosen, steps mapped and old time measured', 'Sheet, check column and dashboard working', 'Comments template and draft email working (to me only)', 'Full run completed, log filled and payback worked out'],
    rubric: [
      { criterion: 'Pipeline design and checkpoints', levels: ['Steps unclear; no checkpoints', 'Steps listed; checkpoints vague or missing one', 'Clear pipeline with checkpoints A, B and C and who does each', 'Clear, efficient pipeline; checkpoints placed where mistakes would spread, with a routine card a colleague could follow'] },
      { criterion: 'Automation quality', levels: ['Numbers typed by hand each time', 'Some formulas, but the dashboard does not update from one date cell', 'Dashboard updates from one cell; template and draft email work', 'Everything updates and drafts reliably; script checked with all 7 points (or a clean template alternative)'] },
      { criterion: 'Checking and accuracy', levels: ['AI numbers or comments used unchecked', 'Some numbers checked', 'Every number in the draft checked; one caught mistake explained', 'Checked, caught mistake explained, and a fix added so it cannot happen again'] },
      { criterion: 'Measurement and responsible use', levels: ['No times; private data used', 'Times without checks or setup', 'Honest before/after with checks, setup and payback; no private data in AI', 'Honest log over two runs, payback clear, privacy and draft-to-me rule explained for a manager'] },
    ],
    extensions: ['Feed the Orders tab from a Google Form so new data arrives by itself', 'Add a Monday-morning trigger (or a Power Automate flow; check the current free plan) that emails you the draft', 'Add a “sales by item” table and ask the AI to name the top item, then check it against the table'],
  },
  files: [
    {
      name: 'weekly_report.js',
      title: 'Apps Script: email me a DRAFT weekly report',
      audience: 'student',
      content: WEEKLY_REPORT_GS,
    },
    {
      name: 'l04_report_automation_kit.md',
      title: 'Automate one recurring report (project kit)',
      audience: 'student',
      content: `# Automate one recurring report — Lesson 4 project kit

**Module project.** Join your template (Lesson 1), dashboard (Lesson 2) and script (Lesson 3) into one report pipeline with three human checkpoints. Prove the time saved.

## 1. Privacy first
- The AI sees **dashboard numbers only**, never the raw order list, customer codes or names.
- Your own report: remove names, phone numbers and confidential figures, or use your company's approved AI tool.
- The script emails **only you** (the draft-to-me rule). You forward after checkpoint C.

## 2. Pipeline card (fill in)
| Step | What happens | Tool | Checkpoint | Who |
|---|---|---|---|---|
| 1. Data in | Orders added (typed, imported or from a form) | Sheet / Form | — | |
| 2. Clean | Check column shows OK/Check; duplicates removed | Sheet | **A: every row OK** | Me |
| 3. Numbers | Dashboard updates from B1 | Sheet | **B: one number verified with a filter** | Me |
| 4. Words | Comments drafted from dashboard numbers | Chatbot + saved template | — | AI |
| 5. Send | Draft emailed to me | Apps Script or email template | **C: read, fix, forward** | Me |
| 6. Log | Minutes and problems recorded | Sheet | — | Me |

## 3. The week cell for a Monday report
- Live dashboard (this week so far): B1 = =TODAY()-WEEKDAY(TODAY(),3)
- Report sent on Monday about the week that just ended: B1 = =TODAY()-WEEKDAY(TODAY(),3)-7
- Practice data: type 19-Oct-2026.
- Format B3, B7 and B8 as rupees (Format → Number → Currency, or Custom ₹#,##0) so the email shows ₹15,310.

## 4. Comments prompt template (copy)
> You write my weekly sales note for my manager. Use only these numbers: week of [Week]; delivered sales [Sales] (last week [Last week]); [Orders] delivered orders; [Cancelled] cancelled; [Pending] pending; credit to collect [Credit]. Write 3 short lines. Say whether sales went up or down and give the percentage change from last week. Do not add reasons, guesses or numbers that are not given. If anything looks unclear or missing, flag it at the end instead of guessing.

**Check the percentage yourself:** =B3/B8-1 → for the practice week, 15,310 ÷ 14,090 − 1 = 8.7% up.

## 5. The draft-email script (weekly_report.js), in plain words
| Part | What it does |
|---|---|
| getSheetByName('Dashboard') | Opens the Dashboard tab (the name must match exactly). |
| read('B3') with getDisplayValue | Reads a cell exactly as shown on screen, e.g. ₹15,310. Reading only. |
| if (sales === '' or week === '') return | If the dashboard is empty, stop and send nothing. |
| const body = ... | Builds the email text, including a "CHECK BEFORE FORWARDING" line. |
| MailApp.sendEmail(your address, 'DRAFT ...', body) | Sends ONE email, only to you. |

Run the **7-point check** from Lesson 3 before you run it: explain every line · read-only · only me · once · on a copy · read the permission screen · know how to delete the trigger.

**No script?** Save an email template in Gmail or Outlook with blanks for the six numbers, copy them from the dashboard, and paste the checked comments.

## 6. Checkpoint C card (read the draft)
- [ ] The week date is right (not last week's again)
- [ ] Every number matches the dashboard
- [ ] Up/down and the percentage are correct
- [ ] No reason, cause or promise the data does not show
- [ ] Nothing private in the email
- [ ] I forward it myself

## 7. Time-saved log (copy into a sheet)
| Week | Old way (min) | New way incl. checks (min) | Saved (min) | Problem caught | Fix |
|---|---|---|---|---|---|
| Example | 75 | 20 | 55 | AI said +12% (really +8.7%) and invented a reason | Corrected; added "flag, don't guess" to the template |
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |

**Setup time:** ____ minutes. **Payback:** setup ÷ minutes saved per week = ____ weeks.
(Example: 150 ÷ 55 ≈ 3 weeks.)

## 8. Optional upgrades
- Feed the Orders tab from a Google Form.
- Add a weekly trigger (Apps Script clock icon) for Monday morning.
- Microsoft 365 users: Power Automate can run a similar flow; Zapier also connects these apps. Check the current free plan and your IT rules first.
`,
    },
    {
      name: 'l04_teacher_demo_and_marking.md',
      title: 'Teacher demo script and marking guide — Lesson 4',
      audience: 'teacher',
      content: `# Lesson 4 demo script and marking guide

**Before class:** have your cleaned Lesson 2 dashboard (B1 = 19-Oct-2026, B3/B7/B8 formatted as ₹) and a COPY with weekly_report.js already pasted but not yet run.

## Demo
1. Draw the pipeline with A, B, C. Say: "Automations send drafts to me. I send to others."
2. Checkpoint A: every row OK. Checkpoint B: filter 19–25 Oct + Delivered → ₹15,310.
3. Paste into Copilot (or any chatbot), exactly:
> You write my weekly sales note for my manager. Use ONLY these numbers: week of 19 Oct 2026; delivered sales ₹15,310 (last week ₹14,090); 15 delivered orders; 1 cancelled; 1 pending; credit to collect ₹750. Write 3 short lines. Say up or down correctly. Do not add reasons or numbers that are not given.

   - **Wrong percentage:** check with =B3/B8-1 (8.7%).
   - **Invented reason (item, area, weather, festival):** delete it. "We never gave it reasons."
   - **All correct:** show the video version and say "This is why checkpoint C is permanent."
4. Run weekly_report.js on the copy. Read the permission screen. Open the DRAFT email.
5. Fill one log row on screen: 75 / 20 / 55, setup 150, payback ≈ 3 weeks.

## Answer key
- Sort, script: SUMIFS, recalculating, building the draft, colouring. Human: rows OK, reading comments, forwarding, deciding on a drop.
- Payback: B (4 weeks). Probe: B (checkpoint C; B1 = last week's Monday with −7).

## Marking guide (use with the rubric)
- **Secure (level 3) looks like:** a pipeline map with A/B/C named; dashboard updates when B1 changes; a template that says "use only these numbers"; a draft email to self; one caught mistake; a log with before/after/setup/payback.
- **Common gaps:** checking time left out of "after"; the AI given raw data; the script emailing the manager directly (ask them to change it to self); no payback figure.
- **Privacy red flag:** any real customer names or phone numbers in a chatbot. Return the project with a kind note and ask for an anonymised redo.
`,
    },
  ],
});
