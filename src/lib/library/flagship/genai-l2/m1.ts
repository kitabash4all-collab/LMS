// Gen-AI Creators · Level 2 (Grades 7–11, Intermediate) · Module 1 — Code with an AI partner.
// Project: AI-assisted mini game with an honest "what AI did" log.
import { lesson } from '../kit.ts';
import { CHAT, CODE_TOOLS, HONEST, PRIVACY, WHO } from './common.ts';

// ───────────────────────────────── Lesson 1 ─────────────────────────────────
const RUNS = `# Cricket over tracker
runs = [4, 6, 1, 0, 6]
total = 0
for r in runs:
    total = total + r
print("Total runs:", total)
if total > 15:
    print("Great over!")`;

export const B1 = lesson(1, {
  title: 'AI as a Coding Buddy',
  objective: 'Ask an AI to explain code line by line instead of writing it for you, then run the code yourself to catch the AI’s mistakes.',
  concept: 'Explain, don’t write',
  minutes: 60,
  hook: ['code', 'print("2" + "2")', '22'],
  intro: 'Welcome back, Gen-AI Creators! In Level 2 you become a programmer with an AI coach beside you.',
  cards: [
    { emoji: '🤝', title: 'A buddy, not a ghost-writer', body: 'An AI coding buddy helps you understand code. It does not write your homework for you. If you cannot explain a line, it is not your code yet.' },
    { emoji: '🔍', title: 'Ask for line by line', body: 'Paste a short program and ask the AI to explain it one line at a time. Ask for simple words and an everyday example. Then explain the code back in your own words.' },
    { emoji: '🐞', title: 'AI gets code wrong too', body: 'AI can explain code wrongly, or invent a command that does not exist. It sounds just as sure when it is wrong. So you always run the code yourself and compare.' },
    { emoji: '🔒', title: 'Safe code sharing', body: 'Only paste your own practice code into an AI tool. Never paste code that has a password or a real person’s details inside it. Under 13, use the Kitabash AI helper in the lesson.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Our example program',
      lang: 'python',
      code: RUNS,
      output: 'Total runs: 17\nGreat over!',
      say: [
        'Here is a short Python program that adds up the runs in one cricket over.',
        'When we run it, it prints the total, seventeen, and then says great over.',
        'Now let us ask the AI to explain it, and see if it gets everything right.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Caught it! A wrong explanation',
      tool: 'Kitabash AI helper',
      prompt: `Explain this Python code line by line for a Grade 7 student. Use simple words. Do not change or rewrite the code.\n\n${RUNS}`,
      reply:
        'Line 2 makes a list called runs with five numbers.\nLine 3 sets total to 0, like an empty scoreboard.\nLines 4–5 are a loop: for each number r in the list, add it to total.\nLine 6 prints the total, which is 16.\nLines 7–8: if total is more than 15, it prints "Great over!".',
      note: 'WRONG — 4 + 6 + 1 + 0 + 6 = 17, not 16. Running the code proves it. The rest of the explanation is good.',
      say: [
        'The explanation of the loop is clear, and it did not rewrite our code.',
        'But look at line six: the AI says the total is sixteen.',
        'We ran the program and it printed seventeen, so the AI made a maths slip.',
        'Running the code is how a programmer checks what the AI says.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Make it quiz you',
      tool: 'Kitabash AI helper',
      prompt: 'Thanks. Now do not explain any more. Ask me two short questions to check I really understand this code.',
      reply: '1. If the list were [1, 1, 1], what would the program print?\n2. Why does total start at 0 and not at 4?\n\nType your answers and I will tell you if you are on the right track.',
      say: [
        'A great follow-up is to ask the AI to quiz you instead of explaining more.',
        'Answering questions in your own words shows you understand the code.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Keep an explain-my-code log',
      tool: 'Kitabash Python Lab',
      steps: ['Paste or type a short program and press Run', 'Copy the program into the AI helper with your explain prompt', 'Read the explanation one line at a time', 'Run the code again: does the output match what the AI said?', 'Write each line in your own words in your log', 'Note any AI mistake you caught ✔'],
      say: [
        'Your log has three columns: the line, what the AI said, and what you say.',
        'Add a star next to every mistake you caught by running the code.',
      ],
    },
  ],
  build: {
    title: 'My “explain my code” log',
    intro: 'Under 13: use the Kitabash AI helper in the lesson. 13+: ChatGPT, Gemini or Copilot with a parent’s permission. Code in the Kitabash Python Lab.',
    steps: [
      { title: 'Run it first', text: 'Type the cricket over tracker into the Python Lab and press Run. Write down the real output.' },
      { title: 'Ask for line by line', text: 'Paste the code into the AI helper with your explain prompt. Ask for simple words and no rewriting.' },
      { title: 'Compare', text: 'Check every claim against the real output. Did it say the right total? Did it count the loop correctly?', tip: 'Change one number in the list and run it again. Does the AI’s explanation still make sense?' },
      { title: 'Say it your way', text: 'Fill your log: for each line write what it does in your own words, without copying the AI.' },
      { title: 'Get quizzed', text: 'Ask the AI for two questions about the code. Answer them without looking at the explanation.' },
      { title: 'Keep it', text: 'Save your log. It is the first page of your Level 2 coding journal.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt that asks an AI to explain a short program line by line. Say who you are (generally), ask for simple words, tell it not to rewrite the code, and ask it to quiz you at the end. Put [my code] where the code would go.',
      title: 'Prompt Lab: explain my code',
      starter: 'Explain this code.',
      checks: [
        ['Ask for line by line', ['line by line', 'each line', 'one line at a time', 'every line']],
        ['Say your level', ['grade', 'beginner', 'year-old', 'class 7', 'class 8']],
        ['Ask for simple words or an example', ['simple', 'easy words', 'everyday example', 'example']],
        ['Tell it not to rewrite the code', ['do not change', 'don’t change', "don't change", 'do not rewrite', "don't rewrite", 'do not write', 'no new code']],
        ['Ask it to check your understanding', ['quiz me', 'ask me', 'questions', 'check i understand']],
      ],
      exemplar: 'You are a patient coding coach. I am a Grade 8 beginner learning Python. Explain my code line by line in simple words, with an everyday example for the loop. Do not change or rewrite the code. At the end, ask me two questions to check I understand. Here is my code: [my code]',
      tools: CHAT,
    },
    {
      sort: 'Coding buddy or ghost-writer?',
      buckets: ['Good buddy use', 'Ghost-writing (not OK)'],
      items: [
        ['“Explain what line 4 of my code does.”', 0],
        ['“Write my whole homework program for me.”', 1],
        ['“Quiz me on how this loop works.”', 0],
        ['Copying AI code and saying you wrote it', 1],
        ['“What does this error message mean?”', 0],
        ['Pasting the teacher’s test question and submitting the answer', 1],
        ['“Give me a hint, not the answer.”', 0],
      ],
      why: 'A buddy explains, hints and quizzes so you learn. Handing in code you did not write and cannot explain is cheating.',
    },
    {
      code: 'for i in range(3):\n    print("Hi")',
      lang: 'python',
      ask: 'An AI says “range(3) means 1, 2, 3, so this prints Hi three times, numbered 1 to 3.” What does the code really print?',
      options: ['Hi three times (no numbers)', '1 Hi, 2 Hi, 3 Hi', 'Hi four times', 'Nothing — range(3) is an error'],
      answer: 0,
      why: 'It prints Hi three times. range(3) gives 0, 1, 2, and the numbers are never printed. The AI was half right — run it to be sure.',
      title: 'Check the AI: range(3)',
    },
    {
      order: 'Put an explain-my-code session in the best order.',
      steps: ['Run the code yourself and note the output', 'Ask the AI to explain it line by line', 'Compare what the AI said with the real output', 'Write each line in your own words', 'Ask the AI to quiz you'],
      why: 'Run first so you have the truth to compare against. Explaining it yourself and being quizzed is what makes you learn.',
      title: 'The buddy routine',
    },
    {
      mcq: 'Kabir’s AI says Python has a command called repeat_until() that will fix his loop. He types it and gets NameError. What is most likely?',
      options: ['His computer is broken', 'The AI invented a command that does not exist in Python', 'He must type it in capital letters', 'He should paste his password so the AI can log in and fix it'],
      answer: 1,
      why: 'AI sometimes invents commands that sound real. NameError means Python does not know that name. Check the real Python docs or ask for a hint using commands you have learned.',
      wrong: { 0: 'The error is a clue from Python, not a broken computer.', 2: 'Python is case-sensitive, but the command does not exist at all.', 3: 'Never share a password with an AI tool.' },
      phase: 'probe',
      title: 'New situation: the invented command',
    },
    {
      write: 'Look at this line: total = total + r. Explain in your own words what it does, and say how you would check that an AI’s explanation of it is correct.',
      keywords: ['add', 'total', 'run', 'check'],
      exemplar: 'It takes the total so far and adds the next number r to it, then stores the new total. To check the AI, I would run the code and see if the printed total matches the sum I work out myself.',
      minWords: 25,
      phase: 'probe',
      title: 'Explain one line',
    },
  ],
  teacher: {
    explain:
      'Level 1 taught prompting and checking. Level 2 turns AI into a coding coach. The big rule: AI explains, hints and quizzes — the learner writes the code. A program is only “yours” if you can explain every line. AI explanations of code can contain slips (wrong totals, wrong loop counts, invented functions), so the learner always runs the code and compares. Repeat the privacy rule for code: never paste code containing passwords, keys or real people’s details. Age rules stay the same: under 13 use the Kitabash AI helper and the teacher’s screen; 13–17 may use ChatGPT, Gemini, Copilot or Perplexity with a parent’s permission; Claude is 18+ only.',
    analogy: 'An AI coding buddy is like a cricket coach in the nets: they can explain your stance and point out mistakes, but they cannot bat for you in the match.',
    vocab: [
      ['program', 'A list of instructions a computer follows, in order.'],
      ['line by line', 'Going through code one line at a time.'],
      ['loop', 'Code that repeats, such as for r in runs.'],
      ['variable', 'A named box that stores a value, like total.'],
      ['output', 'What the program shows when it runs.'],
      ['ghost-writing', 'Getting someone (or AI) to do your work and handing it in as yours.'],
    ],
    demo:
      'Open the Kitabash Python Lab and the Kitabash AI helper side by side on the shared screen. 1) Type the cricket over tracker and press Run — circle “Total runs: 17”. 2) Paste it into the helper with: “Explain this Python code line by line for a Grade 7 student. Use simple words. Do not change or rewrite the code.” Read the reply aloud, pausing at each line. 3) Ask the class: “Does the total it gives match our output?” If the AI says 16 (or anything not 17), celebrate the catch. If it says 17, change the list to [4, 6, 1, 0, 6, 2] and ask the AI what it prints now — check it again. 4) Show the follow-up “Ask me two questions to check I understand.” Answer one wrongly on purpose and see how it responds.',
    unplugged:
      'Human compiler game (5 min): put RUNS on the board. One learner is “the computer” and must follow it exactly, saying each value of total out loud. The rest of the class are “AI explainers” who shout what they think happens next. Who was right — the explainers or the computer? Point out that the computer (running the code) is always the final judge.',
    prompts: [
      ['What is the difference between a coding buddy and a ghost-writer?', 'A buddy explains and hints so you learn; a ghost-writer does the work for you.'],
      ['How do you check an AI’s explanation of code?', 'Run the code and compare the real output with what the AI said.'],
      ['What should you never paste into an AI with your code?', 'Passwords, keys, real names, phone numbers or other personal details.'],
      ['Why ask the AI to quiz you?', 'Answering in your own words shows you really understand the code.'],
      ['What does NameError often mean when you used an AI’s suggestion?', 'The name or command does not exist — the AI may have invented it.'],
    ],
    support: 'Give the explain prompt on a card with the blanks filled in. Pair learners so one runs the code while the other reads the AI explanation aloud.',
    stretch: 'Ask the AI to explain the code “for a 6-year-old” and then “for a Class 12 student”. Compare: which explanation is more accurate, and which is easier? Find one thing each version gets wrong or leaves out.',
    mis: [
      ['If the AI explained it, I understand it', 'Reading is not understanding. Explain it back in your own words and answer the AI’s quiz.'],
      ['AI never makes mistakes about code', 'It can get loop counts, totals and command names wrong. Running the code is the test.'],
      ['Using AI for code is always cheating', 'Asking for explanations and hints is fine; handing in code you did not write and cannot explain is not.'],
      ['The longer the AI answer, the better', 'Short, line-by-line answers you can check are better than long essays.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Human compiler game: one learner runs the cricket code out loud while the class predicts each total.' },
      { minutes: 5, stage: 'Hook + thumbs check', doing: 'Show print("2" + "2"). Thumbs up if you think it prints 4, down for 22. Run it and reveal 22 — computers follow rules, not guesses.' },
      { minutes: 5, stage: 'Watch', doing: 'Play the lesson video with captions; pause on the caught mistake and ask “How did we know the AI was wrong?”' },
      { minutes: 8, stage: 'Live demo', doing: 'Teacher demo: run the code, ask the AI helper for a line-by-line explanation, catch any slip, then ask the AI to quiz the class.' },
      { minutes: 8, stage: 'Prompt Lab (pairs)', doing: 'Pairs write the explain-my-code prompt, press Check and improve it until every item is ticked.' },
      { minutes: 10, stage: 'Follow-along + log', doing: 'Everyone builds their explain-my-code log in the Python Lab and AI helper (13+ may use ChatGPT, Gemini or Copilot with permission).' },
      { minutes: 6, stage: 'Quick competition', doing: 'Buddy or ghost-writer sort race, then Check the AI: range(3). Fastest all-correct trio gets a shout-out.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Two learners share one line they explained in their own words and one AI mistake they caught.' },
      { minutes: 4, stage: 'Breakout: the buddy routine', doing: 'In small breakout rooms, order the buddy routine together and agree on the rule “run it first”.' },
      { minutes: 4, stage: 'Probe + exit ticket', doing: 'New situation: the invented command, Explain one line, then the exit ticket in the chat.' },
    ],
    successCriteria: ['I can ask an AI to explain code line by line without rewriting it.', 'I can run code to check an AI’s explanation.', 'I can explain a line of code in my own words.', 'I can tell good buddy use from ghost-writing.'],
    homework: 'Pick any short program from your school textbook or Level 1 notes. Add three lines to your explain-my-code log and one AI mistake (or “no mistakes found — here is how I checked”).',
    exit: 'How do you know if an AI’s explanation of your code is correct?',
  },
  files: [
    {
      name: 'l01-explain-my-code-kit.md',
      title: 'Project kit: explain-my-code log',
      audience: 'student',
      content: `# Explain-My-Code Log — Project Kit

## Which tool do I use?
${WHO}
${CODE_TOOLS}

## Privacy and honesty
${PRIVACY}
${HONEST}

## The explain prompt (copy and fill in)
"You are a patient coding coach. I am a Grade [7/8] beginner learning [Python/Scratch]. Explain my code line by line in simple words. Do not change or rewrite the code. At the end, ask me two questions to check I understand. Here is my code: [paste your code]"

## Follow-ups that help you learn
- "Explain line [3] again with an everyday example."
- "What would happen if I changed [this number] to [that number]? Don't tell me — give me a hint."
- "Ask me two questions about this code."

## My log
| Line | What the AI said | What I checked (ran it?) | In my own words |
|------|------------------|--------------------------|-----------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

AI mistakes I caught (★): ____________

## Worked example (Riya, Grade 8)
| Line | What the AI said | What I checked | In my own words |
|------|------------------|----------------|-----------------|
| total = 0 | "Starts the score at zero" | ✔ | An empty scoreboard before the over starts |
| for r in runs: | "Repeats for each number" | ✔ ran it, 5 numbers | Look at each ball one by one |
| print("Total runs:", total) | "Prints 16" ★ | ✘ real output was 17 | Shows the total after the loop |

## Checklist
- [ ] I ran the code BEFORE asking the AI
- [ ] I compared every claim with the real output
- [ ] I wrote every line in my own words
- [ ] I answered the AI's quiz without peeking
- [ ] No passwords or real names in my code
`,
    },
    {
      name: 'l01-teacher-demo-script.md',
      title: 'Teacher demo script: AI as a coding buddy',
      audience: 'teacher',
      content: `# Teacher Demo Script — Lesson 1: AI as a Coding Buddy

Shared screen: Kitabash Python Lab + Kitabash AI helper (or your own adult account). Learners under 13 never create accounts.

## Code to type
\`\`\`python
${RUNS}
\`\`\`
Run it first. Circle the output: Total runs: 17, Great over!

## Prompts to type live
1. "Explain this Python code line by line for a Grade 7 student. Use simple words. Do not change or rewrite the code." + the code
   - Pause after each line. Ask: "Is that what the computer did?"
2. "Ask me two short questions to check I really understand this code."
   - Answer one wrongly on purpose. Point out how the AI responds.
3. Hook check: print("2" + "2") — ask the AI what it prints, then run it (22).

## If the AI gets something wrong
- Wrong total or loop count: "We caught it! The computer is the judge — let's run it again." Add up the runs on the board.
- Invented command (NameError): "Python does not know this name. The AI made it up. We only use commands we can check."
- If the AI is perfect: change the list to [4, 6, 1, 0, 6, 2] and ask again. Say: "It was right this time — and we still checked."

## Say out loud
- "AI explains. You write. If you can't explain a line, it isn't your code yet."
- Privacy: never paste passwords, keys or real people's details inside code.
- Under 13: Kitabash AI helper only. 13–17: ChatGPT, Gemini, Copilot or Perplexity with a parent's permission. Claude is 18+ only.

## Exit ticket
"How do you know if an AI's explanation of your code is correct?" Look for: "Run the code and compare."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 2 ─────────────────────────────────
const BUGGY = `score = 0
score = score + 5
print("Score: " + score)`;

export const B2 = lesson(2, {
  title: 'Debugging with AI',
  objective: 'Write a clear bug report for an AI — what you expected, what happened and the exact error — then test the fix and explain why the bug happened.',
  concept: 'Describe · Share · Test · Understand',
  minutes: 60,
  hook: ['code', 'print("Score: " + 5)', 'TypeError'],
  intro: 'Every programmer writes bugs. Today you learn to hunt them down with an AI helper, and understand them.',
  cards: [
    { emoji: '🧭', title: 'Describe the bug', body: 'Tell the AI what you expected, what actually happened, and what you already tried. A clear bug report gets a clear answer. Saying it does not work only gets a guess.' },
    { emoji: '📜', title: 'Share the error message', body: 'Copy the exact error message, including the line number and the error type. Error messages are clues, not insults. Ask the AI what the message means before you ask for a fix.' },
    { emoji: '🧪', title: 'Test the fix', body: 'Never trust a fix until you run it yourself. Test with normal values and a tricky one, like zero or an empty list. If it still fails, tell the AI exactly what happened.' },
    { emoji: '💡', title: 'Understand why', body: 'When it works, ask why the bug happened and write the reason in one sentence. Ask for a hint first, not the full fixed program. Next time you will spot the same bug on your own.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A bug appears',
      lang: 'python',
      code: BUGGY,
      output: 'Traceback (most recent call last):\n  File "main.py", line 3\nTypeError: can only concatenate str (not "int") to str',
      say: [
        'Meera wants her quiz to print the score, but Python shows an error instead.',
        'The error message says line three, and the type of error is a TypeError.',
        'That is two useful clues to give the AI.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Caught it! A fix that does not work',
      tool: 'Kitabash AI helper',
      prompt: `I am learning Python. I expected this to print "Score: 5" but I get an error.\nError: TypeError: can only concatenate str (not "int") to str, on line 3.\nGive me a hint first, not the whole answer.\n\n${BUGGY}`,
      reply: 'Hint: Python cannot join text and a number with +. Try turning the number into an integer first:\n\nprint("Score: " + int(score))',
      note: 'WRONG — score is already an integer, so int(score) changes nothing and the same TypeError appears. The fix is str(score), or an f-string.',
      say: [
        'The hint is good: Python cannot join text and a number with a plus sign.',
        'But the suggested fix turns the number into a number again.',
        'Meera runs it, and the very same error appears, so the fix fails the test.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Report back and understand',
      tool: 'Kitabash AI helper',
      prompt: 'I tried int(score) and I still get the same TypeError on line 3. Why? Explain the real cause.',
      reply: 'You are right, sorry — that was my mistake. score is already an int. You need to turn it into text with str(score), or use an f-string: print(f"Score: {score}"). The cause: + can join two strings, or add two numbers, but not mix them.',
      say: [
        'Meera tells the AI exactly what happened when she tested the fix.',
        'Now the AI explains the real cause and gives a fix that works.',
        'She writes one sentence in her bug log: plus cannot mix text and numbers.',
      ],
    },
    {
      kind: 'steps',
      heading: 'The debug loop',
      tool: 'Kitabash Python Lab',
      steps: ['Run the program and read the whole error', 'Write the bug report: expected, happened, error, tried', 'Ask the AI for a hint first', 'Make ONE change yourself and run it', 'Still broken? Report back what happened', 'Works? Ask why, and write it in your bug log'],
      say: [
        'This is the debug loop that real programmers use every day.',
        'Change one thing at a time, so you know which change fixed it.',
      ],
    },
  ],
  build: {
    title: 'Fix three buggy programs',
    intro: 'Open your project kit for the three buggy programs. Use the Kitabash Python Lab and the AI helper (13+: ChatGPT, Gemini or Copilot with a parent’s permission).',
    steps: [
      { title: 'Bug 1: run and read', text: 'Run Buggy Program 1 (the Diwali greeting). Copy the exact error message and line number into your bug log.' },
      { title: 'Write the bug report', text: 'Use the template: what I expected, what happened, the error, what I tried. Ask for a hint, not the answer.' },
      { title: 'Fix and test', text: 'Make one change yourself, run it, and test with a second value too.', tip: 'If the AI’s fix fails, that is a great catch — report back exactly what happened.' },
      { title: 'Bugs 2 and 3', text: 'Repeat for the typo bug and the logic bug. The logic bug has no error message, so describe the wrong output carefully.' },
      { title: 'Why did it happen?', text: 'For each bug, ask the AI why it happened. Write one sentence in your own words.' },
      { title: 'Keep it', text: 'Save your bug log with all three fixes. Mark any AI fix that did not work.' },
    ],
  },
  acts: [
    {
      ai: 'Write a bug report prompt for Meera’s score bug. Include what you expected, what happened, the exact error message with the line number, what you already tried, and ask for a hint before the full answer.',
      title: 'Prompt Lab: the perfect bug report',
      starter: 'My code does not work. Fix it.',
      checks: [
        ['Say what you expected', ['expected', 'i wanted', 'should print', 'supposed to']],
        ['Say what actually happened', ['instead', 'actually', 'but i get', 'i got', 'it shows']],
        ['Paste the error message', ['typeerror', 'error message', 'error:']],
        ['Give the line number', ['line 3', 'line three', 'on line']],
        ['Say what you tried', ['i tried', 'already tried', 'i changed']],
        ['Ask for a hint first', ['hint', 'not the whole answer', 'do not give me the answer', "don't give me the answer"]],
      ],
      exemplar: 'I am learning Python. I expected my program to print "Score: 5" but instead I get an error. The error message is: TypeError: can only concatenate str (not "int") to str, on line 3. I already tried adding a space after the colon. Please give me a hint first, not the whole answer.',
      tools: CHAT,
    },
    {
      match: 'Match each error to what it usually means',
      pairs: [
        ['SyntaxError', 'Python cannot read a line — a missing bracket or quote'],
        ['NameError', 'A name is not defined — often a typo'],
        ['TypeError', 'Mixing types that cannot go together, like text + number'],
        ['IndentationError', 'The spaces at the start of a line are wrong'],
        ['Logic bug', 'No error, but the answer is wrong'],
      ],
      why: 'The error type is the first clue. Logic bugs are the sneakiest because Python shows no error at all.',
    },
    {
      sort: 'Helpful bug report or unhelpful?',
      buckets: ['Helpful', 'Unhelpful'],
      items: [
        ['“I expected 77.75 but got 103.67.”', 0],
        ['“It’s broken, fix it.”', 1],
        ['“NameError: name ‘scoer’ is not defined, line 4.”', 0],
        ['“I already tried changing the loop to range(4).”', 0],
        ['Pasting 300 lines of code with no question', 1],
        ['“Just send me the right program.”', 1],
      ],
      why: 'Expected vs actual, the exact error and what you tried make it easy to help. Vague reports and “just fix it” teach you nothing.',
    },
    {
      py: 'Debug it! This program should print the average of four test marks: `Average: 77.75`. It has three bugs: one TypeError and two logic bugs. Fix them.',
      title: 'Python Lab: the broken average',
      starter: 'marks = [72, 85, 90, 64]\ntotal = 0\nfor m in marks:\n    total = m\naverage = total / 3\nprint("Average: " + average)\n',
      goals: [
        ['Runs with no errors', { t: 'noError', msg: 'Line 6 joins text and a number. Turn the number into text with str(), or use an f-string.' }],
        ['Prints the correct average', { t: 'output', contains: ['Average: 77.75'], msg: 'The average should be 77.75. Does total really add up every mark? Are you dividing by the right number?' }],
        ['Uses len() to count the marks', { t: 'uses', what: ['len'], msg: 'Divide by len(marks) so it still works if you add a fifth mark.' }],
      ],
      solution: 'marks = [72, 85, 90, 64]\ntotal = 0\nfor m in marks:\n    total = total + m\naverage = total / len(marks)\nprint("Average: " + str(average))\n',
      explain: 'Three bugs fixed: total now adds each mark, you divide by len(marks) (4, not 3), and str() turns the number into text. Write each one in your bug log!',
      hints: ['Line 4 replaces total each time instead of adding to it. Try total = total + m.', 'There are 4 marks, not 3. len(marks) counts them for you.', 'Use str(average) or print(f"Average: {average}").'],
      phase: 'probe',
    },
    {
      order: 'Put the debug loop in order.',
      steps: ['Run the program and read the whole error', 'Write a clear bug report for the AI', 'Ask for a hint first', 'Make one change and run it again', 'Ask why the bug happened and write it down'],
      why: 'Read, report, hint, test, understand. Changing one thing at a time tells you exactly what fixed it.',
      title: 'The debug loop',
    },
    {
      mcq: 'Arjun’s AI suggests a fix. He pastes it in, and the program runs with no error, but the total is still wrong. What should he do next?',
      options: ['Hand it in — no error means it works', 'Tell the AI the exact wrong output and what he expected', 'Delete the program and start again', 'Ask the AI to write a different program instead'],
      answer: 1,
      why: 'No error is not the same as correct. A logic bug is still there. Report back expected vs actual so the AI (and Arjun) can find it.',
      wrong: { 0: 'A program can run with no error and still give the wrong answer.', 2: 'He is close! Report what happened instead of starting over.', 3: 'A new program he does not understand will not help him learn.' },
      phase: 'probe',
      title: 'New situation: no error, wrong answer',
    },
  ],
  teacher: {
    explain:
      'Debugging is a skill, and AI can be a great debugging partner — if the learner gives it good information and tests everything. Teach the four moves: Describe (expected vs actual), Share (the exact error and line number), Test (run every suggested fix), Understand (ask why and write one sentence). AI fixes are sometimes wrong: they may change the wrong thing, or “fix” a bug in a way that hides a logic error. Learners ask for a hint first, change one thing at a time and report back honestly. Privacy rule applies to code: no passwords or real details in what they paste.',
    analogy: 'Debugging with AI is like visiting a doctor: if you only say “I feel bad”, the doctor guesses. If you say where it hurts, since when and what you already tried, you get real help — and you still check the medicine works.',
    vocab: [
      ['bug', 'A mistake in a program that makes it go wrong.'],
      ['debugging', 'Finding and fixing bugs.'],
      ['error message', 'Python’s note about what went wrong and on which line.'],
      ['logic bug', 'The program runs but gives the wrong answer.'],
      ['bug report', 'A clear description: expected, actual, error, what you tried.'],
      ['test', 'Running the program with chosen inputs to check it works.'],
    ],
    demo:
      'Shared screen: Kitabash Python Lab + Kitabash AI helper. 1) Type the score bug and run it; read the TypeError aloud and underline the line number and error type. 2) First type a BAD prompt: “It doesn’t work, fix it.” Show the vague reply. 3) Type the full bug report (expected, happened, error, tried, hint first). 4) Apply the AI’s fix yourself and run it. If it suggests int(score), run it and show the same error — “Caught it! Report back.” If it suggests str() or an f-string straight away, ask: “Why does this work?” and test with score = 0 too. 5) Write the one-sentence reason on the board: “+ cannot mix text and numbers.”',
    unplugged:
      'Bug detective (5 min): show three “recipes” on the board for making chai, each with one bug (wrong order, a missing step, “add 50 spoons of sugar”). Teams race to find the bug and write a one-line bug report: “I expected…, but…”. Link it: the better the report, the faster the fix.',
    prompts: [
      ['What four things go in a good bug report?', 'What you expected, what happened, the exact error/line, what you tried.'],
      ['Why ask for a hint first?', 'So you learn to fix it yourself and understand the bug.'],
      ['The AI’s fix runs with no error. Is it correct?', 'Not necessarily — test the output; there may be a logic bug.'],
      ['What is a logic bug?', 'The program runs but gives the wrong answer.'],
      ['Why change one thing at a time?', 'So you know which change fixed (or broke) it.'],
    ],
    support: 'Give a fill-in bug report card: “I expected ___. Instead ___. The error is ___ on line ___. I tried ___.” Start learners on Bug 1 (syntax) only.',
    stretch: 'Write your own buggy program with one hidden logic bug. Swap with a partner, who must find it using a bug report and AI hints — without being told where it is.',
    mis: [
      ['No error message means the program is correct', 'Logic bugs give wrong answers with no error. Always check the output.'],
      ['The AI’s fix must be right', 'AI fixes can be wrong or fix the wrong thing. Run and test every fix.'],
      ['Error messages mean I am bad at coding', 'Every programmer gets errors. They are clues that point to the bug.'],
      ['Pasting the whole program with “fix it” is fastest', 'A clear report with the error and expected output gets better help faster — and you learn.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Bug detective: teams race to find the bug in three chai recipes and write a one-line bug report.' },
      { minutes: 5, stage: 'Hook + poll', doing: 'Show print("Score: " + 5). Poll: will it print Score: 5, Score 5, or an error? Run it to reveal the TypeError.' },
      { minutes: 5, stage: 'Watch', doing: 'Play the lesson video; pause after the failed int() fix and ask “How did Meera know it was wrong?”' },
      { minutes: 7, stage: 'Live demo', doing: 'Teacher demo: bad prompt vs full bug report, test the AI fix live, report back, write the one-sentence reason.' },
      { minutes: 7, stage: 'Prompt Lab (pairs)', doing: 'Pairs write the perfect bug report in the Prompt Lab and improve it until all items are ticked.' },
      { minutes: 5, stage: 'Quick competition', doing: 'Error match and helpful-or-unhelpful sort race; first three all-correct win a shout-out.' },
      { minutes: 12, stage: 'Breakout: fix three bugs', doing: 'In breakout rooms of two or three, learners fix the three buggy programs from the kit with AI hints and fill their bug logs. The debug loop order game for early finishers.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Each room shares the trickiest bug and the one-sentence reason. Did any AI fix fail? Thumbs up if yours did.' },
      { minutes: 9, stage: 'Probe + exit ticket', doing: 'Python Lab: the broken average (solo), New situation: no error, wrong answer, then the exit ticket.' },
    ],
    successCriteria: ['I can write a bug report with expected, actual, error and what I tried.', 'I can test an AI’s fix instead of trusting it.', 'I can tell an error from a logic bug.', 'I can explain why a bug happened in one sentence.'],
    homework: 'Finish your bug log for all three programs. For each, write: the error (or wrong output), the fix, whether the AI’s first fix worked, and why the bug happened.',
    exit: 'An AI’s fix runs with no error. What must you still check, and why?',
  },
  files: [
    {
      name: 'l02-bug-hunt-kit.md',
      title: 'Project kit: fix three buggy programs',
      audience: 'student',
      content: `# Bug Hunt — Project Kit

## Which tool do I use?
${WHO}
${CODE_TOOLS}

## Privacy and honesty
${PRIVACY}
${HONEST}

## Bug report template (copy and fill in)
"I am learning Python. I expected my program to [what should happen]. Instead, [what actually happened]. The error message is: [paste the exact error], on line [number]. I already tried [what you tried]. Please give me a hint first, not the whole answer."

## The three buggy programs
### Bug 1 — the Diwali greeting (should print: Happy Diwali, Zoya!)
\`\`\`python
name = "Zoya"
print("Happy Diwali, " + name + "!)
\`\`\`

### Bug 2 — the cricket score (should print: Runs: 24)
\`\`\`python
score = 18
score = score + 6
print("Runs:", scoer)
\`\`\`

### Bug 3 — the ticket price (children under 12 pay ₹50, everyone else pays ₹100; age 8 should print ₹50)
\`\`\`python
age = 8
if age > 12:
    print("Ticket: ₹50")
else:
    print("Ticket: ₹100")
\`\`\`
(No error message! Describe the wrong output carefully. Also test age 12 — what should happen?)

## My bug log
| Bug | Error or wrong output | My fix | Did the AI's first fix work? | Why it happened (my words) |
|-----|-----------------------|--------|------------------------------|-----------------------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

## Worked example (from the video)
| Bug | Error | Fix | AI's first fix? | Why |
|-----|-------|-----|-----------------|-----|
| Score | TypeError, line 3 | str(score) | ✘ it said int(score) — same error | + can't mix text and numbers |

## Checklist
- [ ] Every bug report has expected, actual, error and what I tried
- [ ] I asked for a hint first
- [ ] I ran every fix myself and tested a second value
- [ ] I wrote why each bug happened in my own words
`,
    },
    {
      name: 'l02-teacher-demo-script.md',
      title: 'Teacher demo script: debugging with AI',
      audience: 'teacher',
      content: `# Teacher Demo Script — Lesson 2: Debugging with AI

Shared screen: Kitabash Python Lab + Kitabash AI helper (or your adult account).

## Code to type
\`\`\`python
${BUGGY}
\`\`\`
Run it. Underline: line 3, TypeError.

## Prompts to type live
1. BAD: "It doesn't work, fix it." — show how vague the reply is.
2. GOOD: "I am learning Python. I expected this to print "Score: 5" but I get an error. Error: TypeError: can only concatenate str (not "int") to str, on line 3. I tried adding a space. Give me a hint first, not the whole answer." + the code
3. After testing: "I tried [the fix] and [what happened]. Why?"

## If the AI's fix is wrong
- int(score) or any fix giving the same error: "Caught it! The test failed. Let's report back exactly what happened." Type prompt 3.
- A fix that runs but changes the meaning (e.g. prints "Score: score"): "No error — but is the output right? Always check the output, not just the errors."

## If the AI's fix is right first time
Ask: "Why does this work?" Then test with score = 0 and score = 100. Say: "It worked — and we tested it anyway."

## Answer key for the kit
- Bug 1: missing closing quote → print("Happy Diwali, " + name + "!")
- Bug 2: typo scoer → score (NameError)
- Bug 3: logic — should be if age < 12 (age 12 pays ₹100, as the rule says "under 12")

## Exit ticket
"An AI's fix runs with no error. What must you still check?" Look for: "the output is correct — there may be a logic bug."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 3 ─────────────────────────────────
const QUIZ = `# India quiz - planned with AI help, coded by me
score = 0
print("Welcome to the India Quiz!")

answer = input("What is the capital of India? ")
if answer.lower() == "new delhi" or answer.lower() == "delhi":
    print("Correct!")
    score = score + 1
else:
    print("Not quite. It is New Delhi.")

answer = input("How many players does a cricket team have on the field? ")
if answer == "11":
    print("Correct!")
    score = score + 1
else:
    print("Not quite. It is 11.")

answer = input("Which festival is called the festival of lights? ")
if answer.lower() == "diwali":
    print("Correct!")
    score = score + 1
else:
    print("Not quite. It is Diwali.")

print("Your score: " + str(score) + " out of 3")
`;

export const B3 = lesson(3, {
  title: 'Planning a Program with AI',
  objective: 'Turn a game idea into pseudocode steps, ask an AI to review your plan, then build and test the quiz game yourself.',
  concept: 'Idea → pseudocode → code',
  minutes: 60,
  hook: ['pattern', ['Idea', 'Plan', 'Code'], 'Test'],
  intro: 'Great programmers plan before they type. Today you plan a quiz game with AI, then build it yourself.',
  cards: [
    { emoji: '💭', title: 'Start with the idea', body: 'Write your idea in one sentence, like a three-question quiz about India that keeps score. Say who will play it and what counts as winning. A clear idea makes a clear plan.' },
    { emoji: '🪜', title: 'Pseudocode', body: 'Pseudocode is your program written as plain English steps. Each step is one small action, like ask a question or add one to the score. It is not Python yet, so anyone can read it.' },
    { emoji: '🤖', title: 'Ask AI for a plan, not code', body: 'Ask the AI to review your steps or suggest a plan in pseudocode only. Tell it not to write the code. Then check the plan for missing steps before you build.' },
    { emoji: '🧱', title: 'Build one step at a time', body: 'Turn one step into code, run it, and only then add the next step. Test with right answers, wrong answers and capital letters. The code is yours, because you built every line.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Caught it! A plan with a hole',
      tool: 'Kitabash AI helper',
      prompt: 'I want to make a 3-question quiz game about India that keeps score. Give me a plan in pseudocode only, in numbered steps. Do not write any Python code.',
      reply: '1. Set score to 0\n2. Show a welcome message\n3. Ask question 1 and get the answer\n4. If the answer is right, say "Correct!"\n5. Otherwise, say the right answer\n6. Repeat steps 3–5 for questions 2 and 3\n7. Show the final score',
      note: 'MISSING STEP — nothing ever adds 1 to the score, so the final score is always 0. Step 4 should also say “add 1 to score”.',
      say: [
        'Zoya asks for a plan in pseudocode only, and the AI keeps to that rule.',
        'The plan looks tidy, but trace it with your finger: when does the score go up?',
        'It never does, so every player would score zero. Zoya adds the missing step.',
      ],
    },
    {
      kind: 'code',
      heading: 'Zoya builds it herself',
      lang: 'python',
      code: QUIZ.split('\n').slice(0, 11).join('\n') + '\n# ...two more questions, same pattern...\nprint("Your score: " + str(score) + " out of 3")',
      output: 'Welcome to the India Quiz!\nWhat is the capital of India? Delhi\nCorrect!\n...\nYour score: 3 out of 3',
      say: [
        'Zoya turns each pseudocode step into one or two lines of Python.',
        'She uses lower so that Delhi with a capital letter still counts as correct.',
        'She runs it after every question, not just at the very end.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Or build it in Scratch',
      tool: 'Scratch',
      steps: ['Variables → Make a Variable → “score”', 'When green flag clicked → set score to 0', 'Sensing → ask “What is the capital of India?” and wait', 'Control → if answer = “Delhi” then → say “Correct!” and change score by 1', 'Else → say “It is New Delhi”', 'Repeat for 3 questions, then say join “Score: ” score'],
      say: [
        'You can build the same plan in Scratch with ask and wait, and an if else block.',
        'The plan is the same in any language, only the code looks different.',
      ],
    },
    {
      kind: 'bullets',
      heading: 'Test like a player',
      bullets: [
        { icon: '✅', text: 'All right answers → score 3' },
        { icon: '❌', text: 'All wrong answers → score 0' },
        { icon: '🔠', text: '“DELHI” in capitals → still correct?' },
        { icon: '⬜', text: 'Press Enter with no answer → does it crash?' },
      ],
      say: [
        'Test your game the way a real player might use it, including the silly ways.',
        'Every test that fails is a new bug to hunt, using your debug loop from last lesson.',
      ],
    },
  ],
  build: {
    title: 'Plan and build a quiz game',
    intro: 'Plan on paper or in your kit, check the plan with the AI helper (13+: ChatGPT, Gemini or Copilot with permission), then build it in the Kitabash Python Lab or Scratch.',
    steps: [
      { title: 'One-sentence idea', text: 'Pick a topic (India, cricket, space, your favourite subject) and write the idea in one sentence.' },
      { title: 'Write your pseudocode', text: 'Write the steps yourself first: start score, ask, check, add to score, final score.' },
      { title: 'AI review', text: 'Ask the AI to review your pseudocode for missing steps — plan only, no code.', tip: 'Trace the plan with your finger and a pretend player. Does the score ever go up?' },
      { title: 'Build question 1', text: 'Code only the first question and the score. Run it with a right and a wrong answer.' },
      { title: 'Add questions 2 and 3', text: 'Copy the pattern, change the question and answer, and run it after each one.' },
      { title: 'Test and keep', text: 'Run the four player tests. Save your game and your plan — you will use them in the module project.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt asking an AI to review YOUR pseudocode for a quiz game. Say what the game does, paste your steps (use [my steps]), ask it to find missing steps or edge cases, and tell it not to write any code.',
      title: 'Prompt Lab: review my plan',
      starter: 'Make me a quiz game in Python.',
      checks: [
        ['Describe the game', ['quiz', 'game']],
        ['Share your own plan', ['my steps', 'my pseudocode', 'my plan', 'here is my plan']],
        ['Ask for missing steps', ['missing', 'forgot', 'left out', 'what is wrong']],
        ['Ask about tricky cases', ['edge case', 'tricky', 'capital', 'wrong answer', 'empty']],
        ['Say no code', ['no code', 'do not write', "don't write", 'pseudocode only', 'plan only']],
      ],
      exemplar: 'I am making a 3-question quiz game about cricket that keeps score. Here is my plan in pseudocode: [my steps]. Please review my steps and tell me if anything is missing, and what tricky cases I should test, like capital letters or an empty answer. Do not write any code — I will build it myself.',
      tools: CHAT,
    },
    {
      order: 'Put the pseudocode for one quiz question in order.',
      steps: ['Set score to 0', 'Ask the question and store the answer', 'If the answer is right, say Correct and add 1 to score', 'Otherwise, show the right answer', 'After all questions, show the final score'],
      why: 'The score starts at 0 before any question. Adding 1 must happen inside the “right answer” part, and the final score comes last.',
      title: 'Order the plan',
    },
    {
      py: 'Build a 3-question quiz in Python. Start score at 0, ask each question with input(), use if/else to check the answer and add 1 to score when it is right, and finish by printing `Your score: ... out of 3`. Use the questions from the starter (capital of India, players in a cricket team, festival of lights) so the checker can test it.',
      title: 'Python Lab: my quiz game',
      starter: '# India quiz - my plan: score, ask, check, add, final score\nscore = 0\nprint("Welcome to the India Quiz!")\n\nanswer = input("What is the capital of India? ")\nif answer.lower() == "new delhi" or answer.lower() == "delhi":\n    print("Correct!")\n    score = score + 1\nelse:\n    print("Not quite. It is New Delhi.")\n\n# Question 2: How many players does a cricket team have on the field? (11)\n# Question 3: Which festival is called the festival of lights? (Diwali)\n\nprint("Your score: " + str(score) + " out of 3")\n',
      goals: [
        ['All right answers score 3', { t: 'output', inputs: ['Delhi', '11', 'Diwali'], contains: ['Your score: 3 out of 3'], msg: 'With the answers Delhi, 11, Diwali the score should be 3. Did you add questions 2 and 3, each with score = score + 1?' }],
        ['All wrong answers score 0', { t: 'output', inputs: ['Mumbai', '9', 'Holi'], contains: ['Your score: 0 out of 3'], msg: 'Wrong answers must not add to the score.' }],
        ['Capital letters still count', { t: 'output', inputs: ['DELHI', '11', 'DIWALI'], contains: ['Your score: 3 out of 3'], msg: 'Use .lower() so “DIWALI” counts as correct.' }],
        ['Uses input, if and else', { t: 'uses', what: ['input', 'if', 'else'], msg: 'Ask with input() and check with if / else.' }],
      ],
      inputs: ['Delhi', '11', 'Diwali'],
      solution: QUIZ,
      explain: 'Your plan became a working game! Each question follows the same pattern: ask, check, add to score, or show the right answer.',
      hints: ['Copy the whole question 1 block (from answer = input to the last print) and paste it twice.', 'Change the question text and the right answer in each copy. For 11, compare answer == "11" — input() always gives text.', 'Use answer.lower() == "diwali" so capitals still count.'],
    },
    {
      sort: 'Who should do it: you or the AI?',
      buckets: ['You do it', 'AI can help'],
      items: [
        ['Choose the game idea', 0],
        ['Spot missing steps in your plan', 1],
        ['Type the Python code', 0],
        ['Suggest tricky test cases', 1],
        ['Run the tests and record results', 0],
        ['Explain an error message', 1],
      ],
      why: 'You own the idea, the code and the testing. AI is a reviewer and explainer — a second pair of eyes.',
    },
    {
      mcq: 'Riya’s quiz says “Not quite” when she types “Diwali”, but it works for “diwali”. What is the best next step?',
      options: ['Ask the AI to rewrite the whole game', 'Write a bug report: expected Correct for “Diwali”, got Not quite — then try .lower()', 'Tell players to only use small letters', 'Remove the festival question'],
      answer: 1,
      why: 'It is a capital-letter bug. A clear bug report and one small change (comparing answer.lower()) fixes it, and Riya keeps her own code.',
      wrong: { 0: 'A rewritten game is not hers and she would not learn the fix.', 2: 'Players will type capitals anyway — fix the program, not the players.', 3: 'Fix the bug instead of deleting your work.' },
      phase: 'probe',
      title: 'New situation: the capital-letter bug',
    },
  ],
  teacher: {
    explain:
      'Planning is the most underrated programming skill. Learners write the idea in one sentence, break it into pseudocode (plain English steps), then ask AI to REVIEW the plan — missing steps, tricky cases — but not to write the code. AI plans can have holes (a score that never goes up, a final score shown too early), so learners trace the plan with a pretend player. Then they build one step at a time, running after each step, and test like a player (right, wrong, capitals, empty). Python Lab learners use the checker; Scratch learners use ask and wait, if/else and a score variable.',
    analogy: 'Pseudocode is like a recipe written before you cook: the AI can read it and say “you forgot the salt”, but you still do the cooking.',
    vocab: [
      ['pseudocode', 'A program written as plain English steps.'],
      ['input', 'Information the player types in; input() in Python, ask and wait in Scratch.'],
      ['if / else', 'Do one thing if something is true, otherwise do another.'],
      ['score variable', 'A variable that counts points, starting at 0.'],
      ['edge case', 'An unusual input that might break the program, like capitals or an empty answer.'],
      ['trace', 'Walk through a plan or program step by step to see what happens.'],
    ],
    demo:
      'Shared screen: Kitabash AI helper + Python Lab (or Scratch). 1) Write the idea: “a 3-question India quiz that keeps score.” 2) Type: “Give me a plan in pseudocode only, in numbered steps. Do not write any Python code.” 3) Trace the plan with a pretend player on the board. If it forgets to add to the score (or shows the score too early), say “Caught it!” and fix the step. If the plan is complete, ask “What would happen with DELHI in capitals?” and add a step. 4) Build question 1 only, run it with “Delhi” and “Mumbai”. 5) Show copy-and-change for question 2, then run the four player tests.',
    unplugged:
      'Robot waiter (5 min): one learner is a “robot” who only follows exact steps. The class writes pseudocode on the board to make the robot serve a glass of water. The robot follows it literally — and fails at every missing step (“pick up the glass” before “walk to the table”?). Fix the steps together.',
    prompts: [
      ['What is pseudocode?', 'Your program written as plain English steps.'],
      ['Why ask AI to review your plan instead of writing code?', 'You learn more, keep ownership, and AI is good at spotting gaps.'],
      ['Where must “add 1 to score” go?', 'Inside the part that runs when the answer is right.'],
      ['Name two tests for a quiz game.', 'All right, all wrong, capital letters, empty answer.'],
      ['Why run the code after each question?', 'So a bug is found right away, in the small part you just added.'],
    ],
    support: 'Give a pseudocode frame with blanks (“Set ___ to 0”, “Ask ___”, “If ___ then ___”). Learners can build only one or two questions and still pass the plan review.',
    stretch: 'Add a fourth question with two possible right answers, a “Perfect!” message for 3 out of 3, or store the questions in a list and loop over them. Ask the AI to review the new plan first.',
    mis: [
      ['The AI plan is always complete', 'AI plans can miss steps. Trace them with a pretend player.'],
      ['Pseudocode has to look like real code', 'It is plain English. Anyone should be able to read it.'],
      ['I should write all the code, then run it once at the end', 'Run after each small step so bugs are easy to find.'],
      ['If input() asks for a number, I can compare with 11 (no quotes)', 'input() always gives text. Compare with "11", or convert with int().'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Robot waiter: the class writes steps for a “robot” learner, who follows them literally until the plan is fixed.' },
      { minutes: 4, stage: 'Watch', doing: 'Play the lesson video; pause on the plan with a hole and ask everyone to find it.' },
      { minutes: 3, stage: 'Thumbs check', doing: 'Thumbs up / down: “The AI should write my code for me.” (Down — AI reviews the plan, you build it.)' },
      { minutes: 7, stage: 'Live demo', doing: 'Teacher demo: idea, AI pseudocode plan, trace and catch the hole, build question 1 and run it.' },
      { minutes: 6, stage: 'Prompt Lab + plan (pairs)', doing: 'Pairs write their own pseudocode, then the review-my-plan prompt; check and improve it.' },
      { minutes: 4, stage: 'Quick competition', doing: 'Order the plan and the “you or AI?” sort — first three all-correct win.' },
      { minutes: 18, stage: 'Build', doing: 'Everyone builds the quiz game in the Python Lab (or Scratch), running after each question and doing the four player tests. Teacher circulates.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Volunteers share their screen and the class plays their quiz. Everyone tries to break it with capitals or an empty answer.' },
      { minutes: 7, stage: 'Probe + exit ticket', doing: 'New situation: the capital-letter bug, then the exit ticket.' },
    ],
    successCriteria: ['I can turn an idea into pseudocode steps.', 'I can ask an AI to review my plan without writing my code.', 'I can find a missing step by tracing a plan.', 'I can build and test a quiz game one step at a time.'],
    homework: 'Play your quiz with someone at home. Add one question about something they like, and record one test that failed and how you fixed it.',
    exit: 'Name one step an AI plan for a quiz game might forget, and how you would catch it.',
  },
  files: [
    {
      name: 'l03-quiz-game-kit.md',
      title: 'Project kit: plan and build a quiz game',
      audience: 'student',
      content: `# Plan-and-Build Quiz Game — Project Kit

## Which tool do I use?
${WHO}
${CODE_TOOLS}

## Privacy and honesty
${PRIVACY}
${HONEST}

## 1. My idea in one sentence
"A ___-question quiz about ___ for ___ that keeps score."

## 2. My pseudocode (write it BEFORE asking AI)
1. Set score to 0
2. ______
3. ______
4. ______
5. ______

## 3. Review prompt (copy and fill in)
"I am making a [3]-question quiz game about [topic] that keeps score. Here is my plan in pseudocode: [paste your steps]. Please review my steps and tell me if anything is missing, and what tricky cases I should test, like capital letters or an empty answer. Do not write any code — I will build it myself."

What the AI found: ______  Did I agree? ______

## 4. Build in small steps
- [ ] Question 1 works (right AND wrong answer tested)
- [ ] Question 2 works
- [ ] Question 3 works
- [ ] Final score prints

Scratch version: Make a Variable "score" → set score to 0 → ask [ ] and wait → if <(answer) = [ ]> then say "Correct!", change score by 1, else say the right answer → say (join "Score: " (score)).

## 5. Player tests
| Test | What I typed | Expected | What happened | Pass? |
|------|--------------|----------|---------------|-------|
| All right | | Score 3 | | |
| All wrong | | Score 0 | | |
| Capitals | | Correct | | |
| Empty answer | | Not quite (no crash) | | |

## Worked example: AI plan with a hole (from the video)
The AI's plan never said "add 1 to score", so every player got 0. Zoya caught it by tracing a pretend player and added the step.
`,
    },
    {
      name: 'l03-quiz-game.py',
      title: 'Quiz game (follow-along version)',
      audience: 'student',
      content: QUIZ,
    },
    {
      name: 'l03-teacher-demo-script.md',
      title: 'Teacher demo script: planning with AI',
      audience: 'teacher',
      content: `# Teacher Demo Script — Lesson 3: Planning a Program with AI

## Prompts to type live
1. "I want to make a 3-question quiz game about India that keeps score. Give me a plan in pseudocode only, in numbered steps. Do not write any Python code."
2. Follow-up: "What tricky inputs should I test? List 4. No code."

## Trace it on the board
Draw a pretend player. Walk them through each step. Ask: "When does the score go up?"
- If the plan forgets "add 1 to score", or shows the score before the last question: "Caught it! The plan has a hole." Fix the step.
- If the plan is complete: "Great — and what happens with DELHI in capitals?" Add a lower() step.
- If the AI writes Python anyway: "It ignored our rule. We don't copy it. Plan only." Ask again.

## Build live (Python Lab)
Type question 1 only, run with "Delhi", then "Mumbai". Copy the block for question 2. Run the four player tests: all right, all wrong, capitals, empty.

## Scratch alternative
Variables → score; set score to 0; ask and wait; if/else with answer; change score by 1; say join "Score: " score.

## Common learner bugs
- Comparing answer == 11 (no quotes) — input() gives text
- score = 1 instead of score = score + 1
- Final print placed inside the last else

## Exit ticket
"Name one step an AI plan might forget, and how you'd catch it." Look for: add to score / final score; trace with a pretend player or test.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 4 ─────────────────────────────────
export const B4 = lesson(4, {
  title: 'Project: AI-Assisted Mini Game',
  objective: 'Plan, code and test your own mini game, using AI only to explain and debug, and keep an honest log of exactly what the AI did.',
  concept: 'You code, AI coaches',
  minutes: 60,
  hook: ['word', '🎮 + 🤝', 'you code, AI coaches'],
  intro: 'Project time! You will make your own mini game, with AI as your coach and an honest log to prove it.',
  cards: [
    { emoji: '🎮', title: 'Pick a small game', body: 'Choose a game you can finish in one class, like a number guessing game, a cricket quiz or a catch game in Scratch. Small and working beats big and broken. You can always add more later.' },
    { emoji: '🗺️', title: 'Plan, then build', body: 'Write your idea and pseudocode first, and ask the AI to review the plan. Build one step at a time and run it after each step. Use your bug report template when something breaks.' },
    { emoji: '📒', title: 'The what-AI-did log', body: 'Every time you use AI, write what you asked, what it said, and what you did with it. Write down if its answer was wrong. This log is part of your grade, so honesty earns marks.' },
    { emoji: '🎤', title: 'Explain every line', body: 'At the end you will explain your code to the class or your teacher. If there is a line you cannot explain, ask the AI to explain it and practise. Your game, your code, your words.' },
  ],
  scenes: [
    {
      kind: 'bullets',
      heading: 'Choose your mini game',
      bullets: [
        { icon: '🔢', text: 'Python: guess the number (1–20) with “too high / too low”' },
        { icon: '🏏', text: 'Python: cricket quiz with 5 questions and a final rating' },
        { icon: '🪔', text: 'Scratch: catch the falling diyas, score and a timer' },
        { icon: '✂️', text: 'Python or Scratch: rock, paper, scissors against the computer' },
      ],
      say: [
        'Here are four mini games you can finish in one class, in Python or Scratch.',
        'Pick one, or your own idea of the same size, and write it in one sentence.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Caught it! AI explains a game wrongly',
      tool: 'Kitabash AI helper',
      prompt: 'Explain this line in my guessing game simply. Do not rewrite it.\n\nsecret = random.randint(1, 20)',
      reply: 'This line picks a random whole number for the secret. randint(1, 20) gives a number from 1 to 19 — the 20 is not included, just like range(1, 20).',
      note: 'WRONG — random.randint(1, 20) CAN give 20. Both ends are included (unlike range). Test it: print the secret many times.',
      say: [
        'Kabir asks the AI to explain one line of his guessing game.',
        'The AI says the number twenty can never be picked, mixing it up with range.',
        'Kabir tests it by printing the secret again and again, and twenty does appear.',
        'He writes the catch in his what AI did log, which earns him marks.',
      ],
    },
    {
      kind: 'code',
      heading: 'A log entry, not a copy',
      lang: 'text',
      code: 'WHAT AI DID — entry 3\nI asked:   "Explain random.randint(1, 20). Don\'t rewrite it."\nAI said:   1 to 19, 20 not included\nI checked: printed secret 30 times → saw 20 twice\nResult:    AI was WRONG. Both ends included.\nI changed: nothing in my code; fixed my notes',
      say: [
        'A good log entry has four parts: what you asked, what it said, what you checked, and the result.',
        'Notice that Kabir did not paste any AI code into his game.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Project route',
      tool: 'Kitabash Python Lab or Scratch',
      steps: ['Idea in one sentence + pseudocode', 'AI reviews the plan (no code)', 'Build step 1, run it, log any AI help', 'Build the rest, one step at a time', 'Run 5 player tests', 'Practise explaining every line, then share'],
      say: [
        'Follow the route from idea to sharing, and keep your log open the whole time.',
        'Your grade comes from the game, your testing, your honest log, and your explanation.',
      ],
    },
  ],
  build: {
    title: 'Build your mini game',
    intro: 'Under 13: Kitabash AI helper only. 13+: ChatGPT, Gemini or Copilot with a parent’s permission. Code in the Kitabash Python Lab or Scratch.',
    steps: [
      { title: 'Choose and plan', text: 'Write your game idea in one sentence and your pseudocode. Ask the AI to review the plan — no code.' },
      { title: 'Start your log', text: 'Open the what-AI-did log in your kit. Every AI chat gets an entry: asked, said, checked, result.' },
      { title: 'Build the core', text: 'Code the main part first (ask a question, or move the sprite). Run it after every few lines.', tip: 'Stuck for more than 5 minutes? Write a bug report and ask for a hint.' },
      { title: 'Add score and an ending', text: 'Add a score or a win/lose message, so the game has a clear finish.' },
      { title: 'Test it', text: 'Run 5 player tests (normal, wrong, silly inputs). Record each in your test table.' },
      { title: 'Explain and submit', text: 'Practise explaining each line, write your reflection, and submit your game, log and tests.' },
    ],
  },
  acts: [
    {
      projectAct: true,
      title: 'Submit: my AI-assisted mini game',
      brief: 'Submit your mini game (paste the code or share your Scratch project file), your what-AI-did log, your test table and a reflection.',
      requirements: ['A one-sentence idea and pseudocode plan', 'A game that runs, with a score or win/lose ending', 'At least 3 what-AI-did log entries (asked, said, checked, result)', 'At least 5 player tests recorded', 'No AI-written code pasted in — or, if a line came from AI, it is labelled and you can explain it', 'You can explain every line of your code'],
      reflection: 'What was the most useful thing the AI did for you, and what was one thing it got wrong? How did you find out?',
      tips: ['Small and working beats big and broken.', 'Log AI help as you go — it is hard to remember afterwards.', 'Ask the AI to quiz you on your own code to practise explaining it.'],
      minWords: 40,
    },
    {
      ai: 'Write one honest what-AI-did log entry for your game. Include what you asked the AI, what it said, how you checked it, the result (right or wrong), and what you changed in your own code.',
      title: 'Prompt Lab: an honest log entry',
      starter: 'AI helped me.',
      checks: [
        ['What you asked', ['i asked', 'my question', 'asked:']],
        ['What the AI said', ['ai said', 'it said', 'it told me', 'it suggested']],
        ['How you checked', ['i checked', 'i tested', 'i ran', 'tested it']],
        ['The result', ['right', 'wrong', 'worked', 'did not work', "didn't work", 'correct']],
        ['What you changed yourself', ['i changed', 'i fixed', 'i wrote', 'i added', 'nothing in my code']],
      ],
      exemplar: 'I asked: "Why does my guessing game never say Too low?" It said my if and elif were in the wrong order and suggested swapping them. I checked by running the game and guessing 3 when the secret was 15. It worked — the AI was right. I changed the order of the two lines myself.',
      tools: ['Kitabash Prompt Lab', 'my project log'],
      minWords: 30,
    },
    {
      sort: 'Honest log or not OK?',
      buckets: ['Honest and OK', 'Not OK'],
      items: [
        ['“AI explained randint; I tested it and it was wrong.”', 0],
        ['Pasting a whole AI-written game and logging nothing', 1],
        ['“AI suggested swapping two lines; I did it and tested it.”', 0],
        ['Leaving out the times the AI was wrong to look clever', 1],
        ['“Line 12 idea came from AI — I can explain it.”', 0],
        ['Saying “I wrote all of it” when AI wrote the loop', 1],
      ],
      why: 'Honesty about AI help is what makes the project yours. Catching AI mistakes earns credit, hiding AI work does not.',
    },
    {
      order: 'Put the project route in order.',
      steps: ['Write the idea and pseudocode', 'Ask the AI to review the plan', 'Build the core and run it', 'Add the score and ending', 'Run five player tests', 'Explain every line and submit'],
      why: 'Plan, review, build small, finish, test, explain. Skipping the plan or the tests is where most projects go wrong.',
      title: 'The project route',
    },
    {
      mcq: 'Zoya’s AI offers: “Here is a complete, better version of your game!” It has features she has not learned yet. What is the honest choice?',
      options: ['Paste it in and submit — it is better', 'Say no thanks, ask for a hint on just one feature, and build it herself', 'Paste it in but do not mention it in her log', 'Submit both versions and let the teacher pick'],
      answer: 1,
      why: 'Code she cannot explain is not hers. She can still learn from it: ask about one feature, then build it herself and log the help.',
      wrong: { 0: 'She could not explain it, and the project is about her coding.', 2: 'Hiding AI work is dishonest — and the explain-every-line check would show it.', 3: 'The project is her own game; extra AI versions do not help her learn.' },
      phase: 'probe',
      title: 'New situation: the “better version”',
    },
  ],
  teacher: {
    explain:
      'This is the Module 1 project. Each learner builds a small game in Python or Scratch using the routine from Lessons 1–3: plan in pseudocode, AI review, build small, debug with bug reports, test like a player. The key deliverable alongside the game is the what-AI-did log: what they asked, what it said, how they checked, the result and what they changed. Reward honesty — catching an AI mistake is worth credit. The final check is that the learner can explain every line; AI-written code they cannot explain does not count. Keep the age rules and privacy rule as before.',
    analogy: 'The what-AI-did log is like the “method” section of a science experiment: it shows how you got your result, including what went wrong.',
    vocab: [
      ['mini game', 'A small game with a clear goal and ending.'],
      ['what-AI-did log', 'A record of each time you used AI: asked, said, checked, result.'],
      ['player test', 'Playing your game with chosen inputs to check it works.'],
      ['random.randint(a, b)', 'Python: a random whole number from a to b, both included.'],
      ['ownership', 'Being able to explain and stand behind every part of your work.'],
    ],
    demo:
      'Show a finished example: a guessing game in the Python Lab (secret = random.randint(1, 20), a while loop, too high / too low, a guess counter). 1) Play it once. 2) Ask the AI helper: “Explain random.randint(1, 20) simply. Don’t rewrite it.” If it says 20 is not included, test it by printing the secret in a loop of 30 and show 20 appear (or run it until it does) — “Caught it!”. If it is correct, still test it: “We trust, then verify.” 3) Write the log entry live on the shared screen using the four parts. 4) Ask a volunteer to point at any line; explain it in one sentence.',
    unplugged:
      'Two truths and an AI lie (5 min): read three statements about code (“print shows text”, “range(3) gives 0, 1, 2”, “randint(1, 20) never gives 20”). Teams vote which is the AI’s lie, then explain how they could test it. Link to the log: the test is what proves it.',
    prompts: [
      ['What four parts make a good what-AI-did log entry?', 'What I asked, what it said, how I checked, the result (and what I changed).'],
      ['Why does catching an AI mistake earn credit?', 'It shows you checked and understood, which is the real skill.'],
      ['What should you do if AI offers a complete game?', 'Decline, ask about one feature, build it yourself and log the help.'],
      ['How do you know a line is really yours?', 'You can explain what it does and why it is there.'],
    ],
    support: 'Offer the quiz game from Lesson 3 as a base: add two questions and a rating (“Cricket legend!” for 5/5). Log entries can be oral, recorded by the teacher.',
    stretch: 'Add a “play again?” loop, a high score, or levels of difficulty. Ask the AI to suggest three test cases you have not thought of — and run them.',
    mis: [
      ['Using AI less makes a worse project', 'Using AI well (explain, debug, review) and logging it honestly is what scores highly.'],
      ['The log is just paperwork', 'The log is evidence of your thinking and checking — it is a rubric criterion.'],
      ['If it runs, it is finished', 'It is finished when it is tested and you can explain every line.'],
      ['randint works like range', 'randint(1, 20) includes 20; range(1, 20) stops at 19.'],
    ],
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: 'Two truths and an AI lie: teams vote which code statement is the AI’s mistake, and how to test it.' },
      { minutes: 5, stage: 'Watch + pick (poll)', doing: 'Play the project video. Quick poll: which mini game will you build? Learners write the one-sentence idea.' },
      { minutes: 5, stage: 'Live demo', doing: 'Teacher plays the example guessing game, catches or verifies the randint explanation, and writes one log entry live.' },
      { minutes: 5, stage: 'Plan + AI review (pairs)', doing: 'Pairs swap pseudocode and review each other’s plan, then each asks the AI to review it (no code).' },
      { minutes: 20, stage: 'Build', doing: 'Learners build their game, logging every AI chat. Halfway check-in: thumbs up if the core works. Honest log entry Prompt Lab and the sort for anyone waiting for help.' },
      { minutes: 6, stage: 'Test & peer feedback', doing: 'Breakout pairs play each other’s games, try to break them, and give two stars and a wish.' },
      { minutes: 3, stage: 'Quick competition', doing: 'Project route order race — first three correct win a shout-out.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Volunteers demo their game and explain one line the class picks, plus one AI mistake from their log.' },
      { minutes: 5, stage: 'Probe + submit', doing: 'New situation: the “better version”, then submit the game, log, tests and reflection.' },
    ],
    successCriteria: ['I can plan and build a small game with AI as a coach.', 'I can keep an honest what-AI-did log.', 'I can test my game with five player tests.', 'I can explain every line of my code.'],
    homework: 'Teach someone at home to play your game. Ask them to try to break it, fix one thing they find, and add a final log entry.',
    exit: 'What is one thing the AI did for your game, and how did you check it?',
  },
  project: {
    title: 'AI-Assisted Mini Game',
    brief: 'Plan, code and test your own mini game in Python or Scratch, using AI only to review, explain and debug — with an honest log of exactly what the AI did.',
    requirements: ['One-sentence idea and a pseudocode plan reviewed by AI', 'A working game with a score or a win/lose ending', 'At least 3 what-AI-did log entries (asked, said, checked, result)', 'At least 5 player tests recorded', 'Any AI-suggested line is labelled and explained', 'You can explain every line of your code'],
    milestones: ['Idea, pseudocode and AI plan review', 'Core of the game working', 'Score/ending added and 5 tests run', 'Log complete, explanation practised, submitted'],
    rubric: [
      { criterion: 'Game works', levels: ['Does not run', 'Runs but has a major bug or no ending', 'Runs with a clear goal, score or ending', 'Polished, fun and handles silly inputs'] },
      { criterion: 'Planning & testing', levels: ['No plan or tests', 'A plan or tests, but incomplete', 'Pseudocode plan and 5 tests with results', 'Plan improved after AI review; tests include edge cases and fixes'] },
      { criterion: 'Honest AI log', levels: ['No log', 'Log is vague (“AI helped”)', '3+ entries with asked, said, checked, result', 'Detailed entries, including AI mistakes caught and how'] },
      { criterion: 'Understanding', levels: ['Cannot explain the code', 'Can explain some lines', 'Can explain every line', 'Explains every line and why it was written that way'] },
    ],
    extensions: ['Add a play-again loop and a high score', 'Add difficulty levels (easy 1–10, hard 1–100)', 'Make a Python and a Scratch version and compare them'],
  },
  files: [
    {
      name: 'l04-mini-game-project-kit.md',
      title: 'Project kit: AI-assisted mini game',
      audience: 'student',
      content: `# AI-Assisted Mini Game — Project Kit

## Which tool do I use?
${WHO}
${CODE_TOOLS}

## Privacy and honesty
${PRIVACY}
${HONEST}

## Game ideas (pick one, or your own of the same size)
- Guess the number 1–20 with "too high / too low" and a guess counter (Python)
- Cricket quiz with 5 questions and a final rating (Python or Scratch)
- Catch the falling diyas with a score and a 30-second timer (Scratch)
- Rock, paper, scissors against the computer, best of 3 (Python or Scratch)

## My plan
Idea in one sentence: ______
Pseudocode:
1. ______
2. ______
3. ______

## Prompts I'm allowed to use
- Review: "Here is my plan in pseudocode: [steps]. What is missing? Do not write any code."
- Explain: "Explain this line simply. Do not rewrite it: [line]"
- Debug: "I expected [x]. Instead [y]. Error: [error] on line [n]. I tried [z]. Hint first, please."
- Practise: "Ask me 3 questions about my own code: [code]"

## What-AI-did log
| # | I asked | AI said | I checked by | Result (right/wrong) | I changed |
|---|---------|---------|--------------|----------------------|-----------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

## Worked example (Kabir's guessing game)
| 3 | "Explain random.randint(1, 20). Don't rewrite it." | "1 to 19, 20 not included" | Printed the secret 30 times — saw 20 twice | WRONG | Nothing in my code; fixed my notes |

## Player tests
| Test | Input | Expected | Happened | Pass? |
|------|-------|----------|----------|-------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

## Before I submit
- [ ] The game runs and has a score or ending
- [ ] 3+ log entries, including any AI mistakes
- [ ] 5 tests recorded
- [ ] I can explain every line (I asked the AI to quiz me)
`,
    },
    {
      name: 'l04-guessing-game-example.py',
      title: 'Example: guess the number (teacher model)',
      audience: 'teacher',
      content: `# Guess the number - teacher model for the Lesson 4 demo
import random

secret = random.randint(1, 20)   # 1 to 20, both included
guesses = 0
print("I am thinking of a number from 1 to 20.")

guess = 0
while guess != secret:
    guess = int(input("Your guess: "))
    guesses = guesses + 1
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")

print("You got it in " + str(guesses) + " guesses!")
`,
    },
    {
      name: 'l04-teacher-demo-script.md',
      title: 'Teacher guide: running the mini game project',
      audience: 'teacher',
      content: `# Teacher Guide — Lesson 4: AI-Assisted Mini Game

## Demo (5 minutes)
1. Play the guessing game example (l04-guessing-game-example.py) in the Python Lab.
2. Type into the AI helper: "Explain random.randint(1, 20) simply. Don't rewrite it."
   - If it says 20 is not included: "Caught it!" Run: for i in range(30): print(random.randint(1, 20)) — point out a 20.
   - If it is correct: "It was right — and we still test it." Run the same loop.
3. Write the log entry live: asked / said / checked / result / changed.

## While learners build
- Every 5 minutes, ask: "Have you logged your last AI chat?"
- Stuck learners: point them to the bug report template, not to the answer.
- Spot-check ownership: point at a random line and ask "What does this do?"

## If the AI writes a whole game for a learner
Don't punish the question — redirect: "Pick ONE feature you like. Ask the AI to explain how it works, then build it yourself and log it."

## Marking (rubric)
Game works · Planning & testing · Honest AI log · Understanding. Give explicit credit for caught AI mistakes.

## Age and privacy reminders
Under 13: Kitabash AI helper only. 13–17: ChatGPT, Gemini, Copilot or Perplexity with a parent's permission. Claude is 18+ only. No real names or passwords inside code.
`,
    },
  ],
});
