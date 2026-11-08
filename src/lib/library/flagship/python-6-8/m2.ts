// Python Gr 6–8 Beginner · Module 2 — Loops and games. Capstone: Treasure Hunt text adventure.
import { lesson } from '../kit.ts';

// ─────────────────────────────────────────────────────────────
// Lesson 5 · Loops
// ─────────────────────────────────────────────────────────────
const L5_BUILD = `# Loop practice
# 1. Cheer three times
for i in range(3):
    print("Hip hip hooray!")

# 2. Count from 1 to 5
for n in range(1, 6):
    print(n)

# 3. Even numbers up to 10 (range with a step)
for n in range(2, 11, 2):
    print("Even:", n)

# 4. A while loop that counts down
count = 3
while count > 0:
    print(count)
    count = count - 1
print("Go!")`;

const L5_ROCKET = `# Rocket launch + times-table trainer
# Made by: Kabir

# Part 1: the countdown
print("=== KITABASH SPACE CENTRE ===")
count = 10
while count > 0:
    print(count)
    count -= 1
print("Blast off! 🚀")
print()

# Part 2: the times-table trainer
table = int(input("Which times table do you want to practise? "))
score = 0
for i in range(1, 6):
    answer = int(input(f"{table} x {i} = "))
    if answer == table * i:
        print("Correct!")
        score += 1
    else:
        print(f"Oops, it is {table * i}")

print(f"You got {score} out of 5.")
if score == 5:
    print("Perfect! You are ready for orbit.")`;

export const P5 = lesson(5, {
  title: 'Loops: Repeat Like a Robot',
  objective: 'Repeat code with for loops and range(), keep going with while loops, and avoid infinite loops.',
  concept: 'for, range, while',
  minutes: 60,
  hook: ['code', 'for i in range(3):\n    print("Hip hip hooray!")', 'Hip hip hooray!\nHip hip hooray!\nHip hip hooray!'],
  intro: 'Today you will make the computer repeat things hundreds of times without getting tired.',
  cards: [
    { emoji: '🔁', title: 'A for loop repeats', body: 'for i in range(5): runs the indented code five times. The variable i counts for you: 0, 1, 2, 3, 4. Loops save you from copying the same line again and again.' },
    { emoji: '📏', title: 'range() sets the count', body: 'range(1, 11) gives the numbers 1 to 10, because it stops just before the last number. range(10, 0, -1) counts backwards from 10 to 1. The third number is the step.' },
    { emoji: '⏳', title: 'A while loop keeps checking', body: 'while count > 0: repeats as long as the condition is True. Use it when you do not know how many times you need. Something inside must change, or it never stops.' },
    { emoji: '⚠️', title: 'Beware the infinite loop', body: 'If the condition never becomes False, the loop runs forever. That is called an infinite loop. Always change the variable inside the loop, like count -= 1.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Repeat with for',
      lang: 'python',
      code: 'for i in range(3):\n    print("Hip hip hooray!")',
      output: 'Hip hip hooray!\nHip hip hooray!\nHip hip hooray!',
      say: ['We write the cheer only once, but the loop runs it three times.', 'The indented line is the body of the loop. It repeats each time.'],
    },
    {
      kind: 'code',
      heading: 'Counting with range',
      lang: 'python',
      code: 'for n in range(1, 6):\n    print(n, "x 4 =", n * 4)',
      output: '1 x 4 = 4\n2 x 4 = 8\n3 x 4 = 12\n4 x 4 = 16\n5 x 4 = 20',
      say: ['This time the loop variable n goes from one up to five.', 'Range stops just before six, and each time we multiply n by four.'],
    },
    {
      kind: 'code',
      heading: 'Count down with while',
      lang: 'python',
      code: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("Blast off!")',
      output: '5\n4\n3\n2\n1\nBlast off!',
      say: ['The while loop checks if count is still more than zero.', 'Each time round we take one away, so the countdown finally ends with Blast off.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'count = 5\nwhile count > 0:\n    print(count)\nprint("Blast off!")',
      output: '5\n5\n5\n5\n5\n... (it never stops)\nOutputLimit: Your program printed too much',
      say: ['Here we forgot to change count, so it stays five forever.', 'The Python Lab stops it for us, and the fix is one line: count -= 1.'],
    },
  ],
  build: {
    title: 'Build along: loop practice',
    intro: 'Type each mini-loop with your teacher and run it before moving on.',
    steps: [
      { title: 'Cheer three times', text: 'Type for i in range(3): and on the indented line print("Hip hip hooray!"). Run it.' },
      { title: 'Count 1 to 5', text: 'Type for n in range(1, 6): with print(n) indented. Why does it stop at 5?' },
      { title: 'Use a step', text: 'Type for n in range(2, 11, 2): with print("Even:", n). What does the 2 at the end do?', tip: 'The third number in range is how much to jump each time.' },
      { title: 'Count down with while', text: 'Type count = 3, then while count > 0:, then indent print(count) and count = count - 1. Finish with print("Go!") at the left edge.' },
      { title: 'Break it on purpose', text: 'Delete the count = count - 1 line and run. Watch the Lab stop the infinite loop, then put the line back.' },
    ],
  },
  acts: [
    {
      py: 'Times-table printer. Ask which table the user wants with int(input(...)). Then use a for loop with range to print 10 lines like `7 x 1 = 7` up to `7 x 10 = 70`.',
      title: 'Python Lab: times-table printer',
      starter: 'n = int(input("Which table? "))\nprint(n, "x 1 =", n * 1)\n',
      inputs: ['7'],
      goals: [
        ['Prints the 7 times table', { t: 'output', lines: ['7 x 1 = 7', '7 x 5 = 35', '7 x 10 = 70'], notContains: ['7 x 11'], inputs: ['7'], msg: 'Print from 7 x 1 = 7 up to 7 x 10 = 70, and stop there.' }],
        ['Works for any table', { t: 'output', lines: ['12 x 1 = 12', '12 x 10 = 120'], inputs: ['12'], msg: 'Use the variable n, so the 12 times table works too.' }],
        ['Uses a for loop with range', { t: 'uses', what: ['for', 'range'], msg: 'Use for i in range(1, 11):' }],
      ],
      solution: 'n = int(input("Which table? "))\nfor i in range(1, 11):\n    print(n, "x", i, "=", n * i)\n',
      explain: 'Two lines of loop replaced ten lines of print. That is the power of loops!',
      hints: ['range(1, 11) gives 1 to 10.', 'Inside the loop: print(n, "x", i, "=", n * i)'],
    },
    {
      code: 'for i in range(1, 10, 3):\n    print(i)',
      lang: 'python',
      ask: 'What does this loop print?',
      options: ['1, 4 and 7 on separate lines', '1, 2 and 3 on separate lines', '1, 4, 7 and 10 on separate lines', '3, 6 and 9 on separate lines'],
      answer: 0,
      why: 'Start at 1, jump by 3 each time, and stop before 10: 1, 4, 7.',
      title: 'Predict the output: range with a step',
    },
    {
      sort: 'Which loop fits best?',
      buckets: ['for loop (I know how many times)', 'while loop (keep going until something happens)'],
      items: [
        ['Print a cheer 10 times', 0],
        ['Print the 9 times table up to 9 x 10', 0],
        ['Go through the numbers 1 to 100', 0],
        ['Keep asking for the password until it is right', 1],
        ['Keep playing until lives reach 0', 1],
        ['Keep asking until the user types quit', 1],
      ],
      why: 'Use for when you know the count in advance, and while when you stop because of something that happens.',
      hint: 'Ask: do I know the number of repeats before the loop starts?',
    },
    {
      py: 'Project: Rocket launch + times-table trainer. Part 1: use a while loop to count down from 10 to 1, then print `Blast off!`. Part 2: ask which table to practise, then use a for loop to ask 5 questions (table x 1 up to table x 5). Use a variable called score to count right answers, and print the score at the end.',
      title: 'Project: rocket launch and table trainer',
      mode: 'project',
      starter: '# Rocket launch + times-table trainer\n# Made by: (your name)\n\n# Part 1: countdown from 10 with a while loop\ncount = 10\n\n# Part 2: times-table trainer with a for loop\nscore = 0\n',
      inputs: ['3', '3', '6', '9', '12', '15'],
      goals: [
        ['Counts down 10 to 1, then blast off', { t: 'output', lines: ['10', '9', '8', '2', '1', 'Blast off'], inputs: ['3', '3', '6', '9', '12', '15'], msg: 'Print 10, 9, 8 … 1 and then Blast off!' }],
        ['All right answers score 5', { t: 'var', name: 'score', equals: 5, inputs: ['3', '3', '6', '9', '12', '15'], msg: 'For the 3 times table, answers 3, 6, 9, 12, 15 should give score 5.' }],
        ['Wrong answers score 0', { t: 'var', name: 'score', equals: 0, inputs: ['4', '0', '0', '0', '0', '0'], msg: 'Only add to score when the answer equals table * i.' }],
        ['Uses while and for', { t: 'uses', what: ['while', 'for', 'range', 'input'], msg: 'Use a while loop for the countdown and a for loop for the questions.' }],
      ],
      solution: L5_ROCKET,
      requirements: ['A while loop that counts down from 10 to 1', 'Prints Blast off! after the countdown', 'Asks which table to practise', 'A for loop that asks 5 questions', 'A score variable that counts right answers', 'Prints the final score'],
      reflection: 'How did loops make your program shorter? How many lines would it be without them?',
      explain: 'A countdown AND a trainer, both with loops. Practise your tables with it every day!',
      hints: ['Countdown: while count > 0: print(count) then count -= 1.', 'Trainer: for i in range(1, 6): answer = int(input(f"{table} x {i} = ")).'],
    },
    {
      py: 'Debug it! This countdown never stops. Fix it so it prints 5, 4, 3, 2, 1 and then `Go!`, exactly.',
      title: 'Debug it: the endless countdown',
      phase: 'probe',
      starter: 'count = 5\nwhile count > 0:\n    print(count)\nprint("Go!")\n',
      goals: [
        ['Stops by itself', { t: 'noError', msg: 'Something inside the loop must change so the condition becomes False.' }],
        ['Prints 5 to 1 then Go!', { t: 'output', equals: '5\n4\n3\n2\n1\nGo!', msg: 'The output should be exactly 5, 4, 3, 2, 1, Go! on separate lines.' }],
      ],
      solution: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("Go!")\n',
      explain: 'count -= 1 inside the loop makes count smaller each time, so count > 0 finally becomes False.',
      hints: ['What is count after one trip round the loop? Does it ever change?', 'Add count -= 1 inside the loop, indented under print.'],
    },
  ],
  teacher: {
    explain: 'Loops repeat code. A for loop with range() repeats a known number of times, and the loop variable counts for us. range(start, stop, step) stops before the stop number. A while loop repeats while a condition is True, so something inside the loop must change, or we get an infinite loop. The Python Lab stops runaway loops with an error message, which makes it a safe place to make this mistake.',
    analogy: 'A for loop is like doing 10 skips with a skipping rope: you know the count. A while loop is like waiting at the bus stop: you keep waiting until the bus comes.',
    vocab: [
      ['loop', 'Code that repeats.'],
      ['for loop', 'Repeats once for each item, such as each number in a range.'],
      ['range()', 'Makes a list of numbers: range(1, 6) is 1 to 5.'],
      ['while loop', 'Repeats as long as a condition is True.'],
      ['infinite loop', 'A loop that never stops because its condition stays True.'],
      ['body', 'The indented lines inside a loop.'],
    ],
    demo: '1) Type print("Hip hip hooray!") three times, then delete them and type for i in range(3): with one indented print. Run both versions and compare. 2) Change it to print(i) to show 0, 1, 2. 3) Type for n in range(1, 6): print(n, "x 4 =", n * 4) and run. 4) Ask the class to predict range(10, 0, -1), then run it. 5) Type count = 5, while count > 0:, print(count), count -= 1, then print("Blast off!") at the left edge. Run. 6) Delete count -= 1 and run: the Lab stops the endless 5s with an error. Put the line back.',
    unplugged: 'Loop Dance (5 min game): the teacher writes “for i in range(4): clap, stamp” on the board and the class performs it. Then “while the teacher’s hand is up: jump”. Learners notice the for loop has a fixed count, but the while loop only stops when something changes.',
    prompts: [
      ['How many times does range(5) repeat?', '5 times (0 to 4).'],
      ['What numbers does range(1, 4) give?', '1, 2 and 3.'],
      ['How do you count backwards from 10 to 1?', 'range(10, 0, -1).'],
      ['Why did the countdown never stop?', 'count never changed, so count > 0 stayed True.'],
      ['When would you use while instead of for?', 'When you do not know how many repeats you need.'],
    ],
    support: 'Give a card with three loop shapes to copy: for i in range(N), for i in range(A, B), while x > 0 with x -= 1.',
    stretch: 'Print the full table as a grid using two loops, or make the countdown pause by printing a line of dots that gets shorter each time ("." * count).',
    mis: [
      ['range(1, 10) includes 10', 'range stops before the stop number, so it ends at 9.'],
      ['The loop variable starts at 1', 'range(5) starts at 0 unless you give a start.'],
      ['A while loop changes its own variable', 'You must change it inside the loop yourself.'],
      ['Lines after the loop repeat too', 'Only the indented lines repeat. Lines at the left edge run once, after the loop.'],
    ],
    successCriteria: ['I can repeat code with a for loop and range().', 'I can count up, count down and count in steps.', 'I can use a while loop and make sure it stops.', 'I can fix an infinite loop.'],
    homework: 'Use your table trainer for the table you find hardest. Then change it to ask questions 6 to 10, and record your score each day this week.',
    exit: 'Write a for loop that prints the numbers 10, 20, 30, 40, 50.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Loop Dance', doing: 'Play Loop Dance (unplugged). Compare the clapping for loop with the jumping while loop.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Chat poll: “How many lines would 100 cheers take without a loop?” Play the video with captions.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo, then type the loop practice build-along together. Thumbs check after each mini-loop.' },
      { minutes: 8, stage: 'Challenge, predict and sort', doing: 'Times-table printer, then the range predict and the for-or-while sort. Quick competition: first correct prediction of range(1, 10, 3).' },
      { minutes: 15, stage: 'Project in breakout pairs', doing: 'Pairs build the rocket launch + table trainer. Partners test each other’s trainer with one wrong answer on purpose.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the endless countdown”. Ask: why did the Lab stop it?' },
      { minutes: 7, stage: 'Show-and-tell', doing: 'Three volunteers run their rocket launch; the class counts down out loud together. Share the best trainer score.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: 10, 20, 30, 40, 50 loop.' },
    ],
  },
  files: [{ name: 'loop_practice.py', title: 'Build-along: loop practice', audience: 'student', content: L5_BUILD }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 6 · Random and games
// ─────────────────────────────────────────────────────────────
const L6_DICE = `# Dice roller
import random

die1 = random.randint(1, 6)
die2 = random.randint(1, 6)
print("Die 1:", die1)
print("Die 2:", die2)
print("Total:", die1 + die2)

if die1 == die2:
    print("Doubles! Roll again!")

snack = random.choice(["samosa", "jalebi", "dhokla", "idli"])
print(f"Today's lucky snack is {snack}!")`;

const L6_GUESS = `# Guess the Number
# Made by: Meera
import random

secret = random.randint(1, 50)
attempts = 0
guess = 0

print("=== GUESS THE NUMBER ===")
print("I am thinking of a number from 1 to 50.")
print("You have 7 tries. Good luck!")

while guess != secret and attempts < 7:
    guess = int(input(f"Try {attempts + 1}: "))
    attempts += 1
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print(f"You got it in {attempts} tries!")

if guess != secret:
    print(f"Out of tries! The number was {secret}.")`;

export const P6 = lesson(6, {
  title: 'Random and Games',
  objective: 'Use the random module to roll dice and pick choices, and build a guessing game with a while loop, hints and an attempt counter.',
  concept: 'random, game loops',
  minutes: 60,
  hook: ['code', 'import random\nprint(random.randint(1, 6))', '4'],
  intro: 'Today you will make games that surprise you, because even you will not know what the computer picks.',
  cards: [
    { emoji: '🧰', title: 'import random', body: 'Python has extra toolboxes called modules. import random at the top of your program opens the random toolbox. Now you can use its commands.' },
    { emoji: '🎲', title: 'randint picks a number', body: 'random.randint(1, 6) gives a whole number from 1 to 6, like rolling a dice. Both end numbers can come up. Every run can give a different number.' },
    { emoji: '🎯', title: 'choice picks from a list', body: 'random.choice(["rock", "paper", "scissors"]) picks one item from the list at random. Use it for lucky snacks, random names or computer moves.' },
    { emoji: '🔄', title: 'The game loop', body: 'Most games repeat the same steps: ask, check, give a hint. A while loop keeps the game going until the player wins or runs out of tries.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Roll the dice',
      lang: 'python',
      code: 'import random\ndie = random.randint(1, 6)\nprint("You rolled", die)',
      output: 'You rolled 4',
      say: ['First we import the random toolbox, then randint picks a number from one to six.', 'Your number may be different every time you run it. That is the fun part!'],
    },
    {
      kind: 'code',
      heading: 'Pick a random item',
      lang: 'python',
      code: 'import random\nsnacks = ["samosa", "jalebi", "dhokla", "idli"]\nprint("Lucky snack:", random.choice(snacks))',
      output: 'Lucky snack: dhokla',
      say: ['The choice command picks one snack from the list.', 'Run it again and the computer might choose jalebi or idli instead.'],
    },
    {
      kind: 'code',
      heading: 'Hints with if and elif',
      lang: 'python',
      code: 'secret = 23\nguess = int(input("Guess: "))\nif guess < secret:\n    print("Too low!")\nelif guess > secret:\n    print("Too high!")\nelse:\n    print("You got it!")',
      output: 'Guess: 30\nToo high!',
      say: ['The player guessed thirty, which is bigger than the secret number.', 'So the program gives a hint: Too high. Now the player knows to go lower.'],
    },
    {
      kind: 'code',
      heading: 'The game loop',
      lang: 'python',
      code: 'secret = 18\nattempts = 0\nguess = 0\nwhile guess != secret and attempts < 7:\n    guess = int(input("Guess: "))\n    attempts += 1\n    if guess < secret:\n        print("Too low!")\n    elif guess > secret:\n        print("Too high!")\nprint(f"You got it in {attempts} tries!")',
      output: 'Guess: 25\nToo high!\nGuess: 12\nToo low!\nGuess: 18\nYou got it in 3 tries!',
      say: ['The loop keeps asking while the guess is wrong and there are tries left.', 'Every guess adds one to attempts, so we can tell the player how many tries they took.'],
    },
  ],
  build: {
    title: 'Build along: dice roller',
    intro: 'Type along to make a dice roller with a doubles rule and a lucky snack.',
    steps: [
      { title: 'Open the toolbox', text: 'On line 1 type import random.' },
      { title: 'Roll two dice', text: 'Type die1 = random.randint(1, 6) and die2 = random.randint(1, 6). Print both.' },
      { title: 'Show the total', text: 'Type print("Total:", die1 + die2). Run it three times: the numbers change!' },
      { title: 'Doubles rule', text: 'Type if die1 == die2: and indent print("Doubles! Roll again!"). Keep running until you see it.', tip: 'Doubles do not come up often. Keep pressing Run!' },
      { title: 'Lucky snack', text: 'Type snack = random.choice(["samosa", "jalebi", "dhokla", "idli"]) and print it with an f-string.' },
    ],
  },
  acts: [
    {
      py: 'Dice roller. Import random, roll two dice with random.randint(1, 6), print each die and then `Total: ...`. If the two dice are the same, print `Doubles!`.',
      title: 'Python Lab: dice roller',
      starter: '# Dice roller\ndie1 = 3\nprint("Die 1:", die1)\n',
      goals: [
        ['Uses the random module', { t: 'uses', what: ['import', 'random'], msg: 'Start with import random and use random.randint(1, 6).' }],
        ['Prints the total', { t: 'output', contains: ['Total'], msg: 'Print the total of the two dice, like Total: 7.' }],
        ['Checks for doubles', { t: 'uses', what: ['if'], msg: 'Use if die1 == die2: to check for doubles.' }],
        ['Runs with no errors', { t: 'noError', msg: 'Check your spelling of random.randint.' }],
      ],
      solution: L6_DICE,
      explain: 'Your program now does something different every time. That is the heart of every game!',
      hints: ['die1 = random.randint(1, 6) gives a number from 1 to 6.', 'Total is die1 + die2.'],
    },
    {
      code: 'import random\nn = random.randint(1, 3)\nprint(n * 10)',
      lang: 'python',
      ask: 'Which of these could this program NEVER print?',
      options: ['40', '10', '20', '30'],
      answer: 0,
      why: 'randint(1, 3) gives only 1, 2 or 3, so the output can only be 10, 20 or 30.',
      title: 'Predict the output: what can randint give?',
    },
    {
      match: 'Match each line of code to what it does',
      pairs: [
        ['import random', 'Opens the random toolbox'],
        ['random.randint(1, 6)', 'A whole number from 1 to 6'],
        ['random.choice(moves)', 'Picks one item from a list'],
        ['attempts += 1', 'Adds one to the try counter'],
        ['while guess != secret:', 'Keeps going until the guess is right'],
      ],
      why: 'These five lines are the building blocks of almost every guessing game.',
    },
    {
      py: 'Project: Guess the Number! Pick a secret number with random.randint(1, 50). The player gets 7 tries. Use a while loop. After each guess print `Too low!` or `Too high!`, or a win message with the number of tries. Count tries in a variable called attempts. If they run out, show the secret number.',
      title: 'Project: Guess the Number',
      mode: 'project',
      starter: '# Guess the Number\n# Made by: (your name)\nimport random\n\nsecret = random.randint(1, 50)\nattempts = 0\nguess = 0\n\n# Write the game loop here (7 tries)\n',
      inputs: ['0', '0', '0', '0', '0', '0', '0'],
      goals: [
        ['Says “Too low!” for a low guess', { t: 'output', contains: ['Too low'], inputs: ['0', '0', '0', '0', '0', '0', '0'], msg: 'If the guess is smaller than the secret, print Too low!' }],
        ['Says “Too high!” for a high guess', { t: 'output', contains: ['Too high'], inputs: ['100', '100', '100', '100', '100', '100', '100'], msg: 'If the guess is bigger than the secret, print Too high!' }],
        ['Stops after 7 tries', { t: 'var', name: 'attempts', equals: 7, inputs: ['0', '0', '0', '0', '0', '0', '0'], msg: 'Add 1 to attempts for each guess and stop the loop at 7.' }],
        ['Uses random, while and if', { t: 'uses', what: ['random', 'while', 'if', 'elif'], msg: 'Use random.randint, a while loop and if / elif / else hints.' }],
      ],
      solution: L6_GUESS,
      requirements: ['A secret number from random.randint(1, 50)', 'A while loop that allows 7 tries', 'Too low / Too high hints after each guess', 'An attempts counter and a win message with the number of tries', 'Shows the secret number if the player runs out of tries'],
      reflection: 'What is the smartest way to guess? How many tries does it take you, and why?',
      explain: 'A real game with a secret, hints, a counter and two endings. Challenge your family to beat your score!',
      hints: ['while guess != secret and attempts < 7:', 'Inside the loop: ask, add 1 to attempts, then if / elif / else for the hints.'],
    },
    {
      py: 'Debug it! This guessing game crashes on the first guess, and it also says “Too low!” when you are right. Fix both bugs so the player can guess and the game ends with `You got it in ... tries!`.',
      title: 'Debug it: the crashing guesser',
      phase: 'probe',
      starter: 'import random\nsecret = random.randint(1, 10)\nguess = 0\ntries = 0\nwhile guess != secret:\n    guess = input("Guess 1-10: ")\n    tries += 1\n    if guess > secret:\n        print("Too high!")\n    else:\n        print("Too low!")\nprint("You got it in", tries, "tries!")\n',
      inputs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      goals: [
        ['Runs without crashing', { t: 'noError', inputs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], msg: 'input() gives text. Turn the guess into a number with int().' }],
        ['Ends with the win message', { t: 'output', contains: ['You got it in'], inputs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], msg: 'The game should end with You got it in … tries!' }],
        ['Only says Too low when it is low', { t: 'uses', what: ['elif'], msg: 'Use elif guess < secret: so a right guess gets no hint.' }],
      ],
      solution: 'import random\nsecret = random.randint(1, 10)\nguess = 0\ntries = 0\nwhile guess != secret:\n    guess = int(input("Guess 1-10: "))\n    tries += 1\n    if guess > secret:\n        print("Too high!")\n    elif guess < secret:\n        print("Too low!")\nprint("You got it in", tries, "tries!")\n',
      explain: 'int() lets Python compare numbers, and elif stops the “Too low!” message from showing for the right answer.',
      hints: ['The error says Python cannot compare text with a number. Wrap input() in int().', 'else catches EVERYTHING that is not too high, including the right answer. Use elif guess < secret: instead.'],
    },
  ],
  teacher: {
    explain: 'Modules are toolboxes of extra commands; import random gives us randint and choice. randint(a, b) includes both ends. A game loop repeats ask, check, hint until a win or a limit. Combining while with and lets us stop for two reasons: the guess is right OR the tries are used up. In the Python Lab the random numbers are real for the player, but when the Lab checks your work it uses fixed test answers, so make your game follow the rules exactly.',
    analogy: 'random.randint is a dice you never have to pick up, and random.choice is like pulling a chit out of a bowl at a class party.',
    vocab: [
      ['module', 'A toolbox of extra commands, opened with import.'],
      ['import', 'Loads a module so you can use it.'],
      ['randint(a, b)', 'A random whole number from a to b, both included.'],
      ['choice(list)', 'Picks one random item from a list.'],
      ['game loop', 'The repeating part of a game: ask, check, respond.'],
      ['counter', 'A variable that counts, like attempts += 1.'],
    ],
    demo: '1) Type import random and print(random.randint(1, 6)). Run it five times and write the numbers on the board. 2) Delete the import line and run: show the NameError, then put it back. 3) Type snacks = ["samosa", "jalebi", "dhokla", "idli"] and print(random.choice(snacks)). Run it a few times. 4) Set secret = 23 (fixed, so everyone can follow) and type the if / elif / else hint code. Run with 30, 10 and 23. 5) Wrap it in while guess != secret: with guess = 0 above, and add attempts += 1. Play one round with the class calling out guesses. 6) Change secret back to random.randint(1, 50) and play again.',
    unplugged: 'Higher or Lower (5 min game): the teacher secretly writes a number from 1 to 50. Learners take turns guessing in the chat; the teacher replies only “too high” or “too low”, and one learner keeps the attempts count on the board. Then ask: what is the cleverest first guess? (25, the middle.)',
    prompts: [
      ['What does import random do?', 'It opens the random toolbox so we can use randint and choice.'],
      ['Can random.randint(1, 6) give 6?', 'Yes, both ends are included.'],
      ['Why do we need attempts += 1 inside the loop?', 'To count each guess, so we can stop at 7 and report the tries.'],
      ['Why did the guess crash when we compared it to secret?', 'input() gives text; we need int() to compare numbers.'],
      ['What is a good first guess from 1 to 50?', '25, the middle, because it cuts the options in half.'],
    ],
    support: 'Let learners start with a fixed secret = 23 so they can test their hints, then swap in randint at the end.',
    stretch: 'Add difficulty levels: easy (1–20, 7 tries), hard (1–100, 7 tries). Or give a “very close!” hint when the guess is within 3.',
    mis: [
      ['randint(1, 6) never gives 6', 'Both ends are included, unlike range.'],
      ['You can use random without importing it', 'You must write import random first.'],
      ['The loop stops when attempts reaches 7 even without a condition', 'You must add attempts < 7 to the while condition.'],
      ['else only runs when the guess is too low', 'else runs for everything not caught above, including the right answer.'],
    ],
    successCriteria: ['I can import the random module.', 'I can use randint and choice in a program.', 'I can build a game loop with a while loop and a counter.', 'I can give hints with if / elif / else.'],
    homework: 'Play Guess the Number with someone at home. Who needs the fewest tries? Then add a “very close!” hint.',
    exit: 'Write one line that picks a random number from 1 to 100 and stores it in a variable called secret.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Higher or Lower', doing: 'Play Higher or Lower (unplugged) in the chat. One learner keeps count on the board. Discuss the best first guess.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Prediction poll: “What number will it print?” Run it live to see who guessed right. Play the video with captions.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone builds the dice roller. Thumbs check: “Who rolled doubles?”' },
      { minutes: 8, stage: 'Challenge, predict and match', doing: 'Dice roller challenge, the randint predict and the match. Quick competition: the class rolls together and the highest total wins.' },
      { minutes: 15, stage: 'Project in breakout pairs', doing: 'Pairs build Guess the Number; each partner plays the other’s game and counts their tries.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the crashing guesser”: two bugs. First to explain why else was wrong wins.' },
      { minutes: 7, stage: 'Show-and-tell tournament', doing: 'Two volunteers share their game; the class plays together by voting on each guess. Shout-out for the fewest tries.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: secret = random.randint(1, 100).' },
    ],
  },
  files: [{ name: 'dice_roller.py', title: 'Build-along: dice roller', audience: 'student', content: L6_DICE }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 7 · Lists
// ─────────────────────────────────────────────────────────────
const L7_TEAM = `# My cricket team list
team = ["Aarav", "Meera", "Kabir"]
print("First player:", team[0])
print("Last player:", team[-1])

new_player = input("Add a player: ")
team.append(new_player)

print("The team is:")
for player in team:
    print("-", player)
print(f"We have {len(team)} players.")

if "Zoya" in team:
    print("Zoya is in the team!")
else:
    print("Zoya is not in the team yet.")`;

const L7_RPS = `# Rock, Paper, Scissors: best of 5
# Made by: Aarav
import random

moves = ["rock", "paper", "scissors"]
player_score = 0
computer_score = 0

print("=== ROCK, PAPER, SCISSORS ===")
print("Best of 5 rounds. Type rock, paper or scissors.")

for round_num in range(1, 6):
    print(f"--- Round {round_num} ---")
    player = input("Your move: ").strip().lower()
    if player not in moves:
        print("Invalid move! Nobody scores this round.")
        continue
    computer = random.choice(moves)
    print(f"Computer chose {computer}")
    if player == computer:
        print("Draw!")
    elif (player == "rock" and computer == "scissors") or (player == "paper" and computer == "rock") or (player == "scissors" and computer == "paper"):
        print("You win this round!")
        player_score += 1
    else:
        print("Computer wins this round!")
        computer_score += 1

print(f"Final score: You {player_score} - {computer_score} Computer")
if player_score > computer_score:
    print("You are the champion!")
elif player_score < computer_score:
    print("The computer wins this time.")
else:
    print("It's a tie!")`;

export const P7 = lesson(7, {
  title: 'Lists: Many Things in One Box',
  objective: 'Make lists, read items by their index, add items with append, loop through a list and check what is in it.',
  concept: 'lists, index, append, in',
  minutes: 60,
  hook: ['code', 'moves = ["rock", "paper", "scissors"]\nprint(moves[0])', 'rock'],
  intro: 'Today you will store many things in one variable and use it to build Rock, Paper, Scissors.',
  cards: [
    { emoji: '📋', title: 'A list holds many items', body: 'A list keeps many values in order inside square brackets, like team = ["Aarav", "Meera", "Kabir"]. Commas separate the items. One variable, many values!' },
    { emoji: '🔢', title: 'Index numbers start at 0', body: 'Each item has a position called its index. The first item is team[0], the second is team[1]. team[-1] gives the last item.' },
    { emoji: '➕', title: 'append adds to the end', body: 'team.append("Zoya") adds Zoya to the end of the list. len(team) tells you how many items it has now.' },
    { emoji: '🔍', title: 'Loop through it and search it', body: 'for player in team: visits every item, one at a time. "Zoya" in team gives True or False, so you can check if something is in the list.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Make a list',
      lang: 'python',
      code: 'team = ["Aarav", "Meera", "Kabir"]\nprint(team)\nprint(team[0])\nprint(team[2])',
      output: "['Aarav', 'Meera', 'Kabir']\nAarav\nKabir",
      say: ['Square brackets make a list, and commas separate the items.', 'Index zero is the first player, Aarav, and index two is the third player, Kabir.'],
    },
    {
      kind: 'code',
      heading: 'Add and count',
      lang: 'python',
      code: 'team = ["Aarav", "Meera", "Kabir"]\nteam.append("Zoya")\nprint(team)\nprint(len(team), "players")',
      output: "['Aarav', 'Meera', 'Kabir', 'Zoya']\n4 players",
      say: ['Append adds Zoya to the end of the list.', 'Then len counts the items, so now the team has four players.'],
    },
    {
      kind: 'code',
      heading: 'Loop through a list',
      lang: 'python',
      code: 'snacks = ["samosa", "jalebi", "pakora"]\nfor snack in snacks:\n    print("I love", snack)',
      output: 'I love samosa\nI love jalebi\nI love pakora',
      say: ['The for loop visits each snack in the list, one after another.', 'We never need to know the index numbers. Python handles them for us.'],
    },
    {
      kind: 'code',
      heading: 'Is it in the list?',
      lang: 'python',
      code: 'moves = ["rock", "paper", "scissors"]\nplayer = input("Your move: ")\nif player in moves:\n    print("Good move!")\nelse:\n    print("That is not a move!")',
      output: 'Your move: banana\nThat is not a move!',
      say: ['The word in checks whether banana is one of the moves.', 'It is not, so the program politely says it is not a move.'],
    },
  ],
  build: {
    title: 'Build along: my cricket team list',
    intro: 'Type along to build a team list that grows when you add players.',
    steps: [
      { title: 'Make the list', text: 'Type team = ["Aarav", "Meera", "Kabir"] and print(team). Run it.', tip: 'Every name needs quotes, and commas go between the items.' },
      { title: 'Read by index', text: 'Add print("First player:", team[0]) and print("Last player:", team[-1]).' },
      { title: 'Add a player', text: 'Type new_player = input("Add a player: ") and team.append(new_player).' },
      { title: 'Loop through', text: 'Type for player in team: and indent print("-", player). Then print(f"We have {len(team)} players.") at the left edge.' },
      { title: 'Search it', text: 'Type if "Zoya" in team: with a message, plus an else. Run it twice: once adding Zoya, once adding someone else.' },
    ],
  },
  acts: [
    {
      py: 'Snack list. Start with snacks = ["samosa", "jalebi", "pakora"]. Ask the user for one more snack and append it. Then use a for loop to print every snack, and finally print `We have 4 snacks!` using len().',
      title: 'Python Lab: growing snack list',
      starter: 'snacks = ["samosa", "jalebi", "pakora"]\nprint(snacks)\n',
      inputs: ['dhokla'],
      goals: [
        ['Adds the new snack', { t: 'var', name: 'snacks', equals: ['samosa', 'jalebi', 'pakora', 'dhokla'], inputs: ['dhokla'], msg: 'Use snacks.append(...) with the answer from input().' }],
        ['Counts with len()', { t: 'output', contains: ['We have 4 snacks'], inputs: ['dhokla'], msg: 'Print We have 4 snacks! using len(snacks).' }],
        ['Uses a for loop, append and len', { t: 'uses', what: ['for', 'append', 'len', 'input'], msg: 'Use for snack in snacks: to print every snack.' }],
      ],
      solution: 'snacks = ["samosa", "jalebi", "pakora"]\nnew = input("Add a snack: ")\nsnacks.append(new)\nfor snack in snacks:\n    print("-", snack)\nprint(f"We have {len(snacks)} snacks!")\n',
      explain: 'Your list grew while the program ran. Lists are how apps store playlists, contacts and high scores.',
      hints: ['new = input("Add a snack: ") then snacks.append(new).', 'print(f"We have {len(snacks)} snacks!")'],
    },
    {
      code: 'team = ["Aarav", "Meera", "Kabir"]\nteam.append("Zoya")\nprint(team[1], len(team))',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['Meera 4', 'Aarav 4', 'Meera 3', 'Aarav 3'],
      answer: 0,
      why: 'Index 1 is the SECOND item, Meera, and after append the list has 4 items.',
      title: 'Predict the output: index and length',
    },
    {
      blanks: 'A list is written with [[1]] brackets. The first item is at index [[2]]. To add an item to the end, use [[3]]. To check if something is in a list, use the word [[4]].',
      answers: [['square'], ['0'], ['append'], ['in']],
      bank: ['square', 'round', '0', '1', 'append', 'remove', 'in', 'if'],
      why: 'Lists use [ ], start counting at 0, grow with append and are searched with in.',
      title: 'List facts',
    },
    {
      py: 'Project: Rock, Paper, Scissors, best of 5! Store the moves in a list called moves. Play 5 rounds with a for loop. Each round: ask the player’s move; if it is not in moves, print `Invalid move!` and nobody scores; otherwise the computer picks with random.choice(moves), and you decide the winner. Keep player_score and computer_score, and end with `Final score: ...` and the champion.',
      title: 'Project: Rock, Paper, Scissors',
      mode: 'project',
      starter: '# Rock, Paper, Scissors: best of 5\n# Made by: (your name)\nimport random\n\nmoves = ["rock", "paper", "scissors"]\nplayer_score = 0\ncomputer_score = 0\n\n# Play 5 rounds with a for loop\n',
      inputs: ['rock', 'paper', 'scissors', 'rock', 'paper'],
      goals: [
        ['Plays 5 rounds', { t: 'output', contains: ['Final score'], inputs: ['rock', 'paper', 'scissors', 'rock', 'paper'], msg: 'Ask for exactly 5 moves, then print Final score: …' }],
        ['Rejects moves that are not in the list', { t: 'output', contains: ['Invalid'], inputs: ['banana', 'banana', 'banana', 'banana', 'banana'], msg: 'If the move is not in moves, print Invalid move!' }],
        ['Invalid moves score nothing', { t: 'var', name: 'computer_score', equals: 0, inputs: ['banana', 'banana', 'banana', 'banana', 'banana'], msg: 'Nobody scores in a round with an invalid move.' }],
        ['Uses a list, random.choice and a for loop', { t: 'uses', what: ['list', 'random', 'for', 'if', 'elif'], msg: 'Use the moves list, random.choice(moves), a for loop and if / elif / else.' }],
      ],
      solution: L7_RPS,
      requirements: ['A list called moves with rock, paper and scissors', 'A for loop that plays 5 rounds', 'The computer picks with random.choice(moves)', 'Checks the move with in, and says Invalid move! for anything else', 'Keeps player_score and computer_score', 'Prints the final score and the champion'],
      reflection: 'How did you work out who wins each round? Is there a shorter way you could write it?',
      explain: 'A real two-player game against the computer, built on a list! Play a best-of-5 with someone at home.',
      hints: ['for round_num in range(1, 6): starts each round.', 'if player not in moves: print("Invalid move!") then continue skips to the next round.'],
    },
    {
      py: 'Debug it! This colour list should print `First: red`, then `Last: blue`, then add yellow and print `4 colours`. It has three bugs. Fix them.',
      title: 'Debug it: the colour list',
      phase: 'probe',
      starter: 'colours = ["red", "green", "blue"]\nprint("First:", colours[1])\nprint("Last:", colours[3])\ncolours.add("yellow")\nprint(len(colours), "colours")\n',
      goals: [
        ['Prints the first colour', { t: 'output', contains: ['First: red'], msg: 'The first item is at index 0.' }],
        ['Prints the last colour', { t: 'output', contains: ['Last: blue'], msg: 'With 3 items, the last index is 2 (or use -1).' }],
        ['Adds yellow', { t: 'output', contains: ['4 colours'], msg: 'Lists use append, not add.' }],
      ],
      solution: 'colours = ["red", "green", "blue"]\nprint("First:", colours[0])\nprint("Last:", colours[-1])\ncolours.append("yellow")\nprint(len(colours), "colours")\n',
      explain: 'Index numbers start at 0, so a list of 3 has indexes 0, 1 and 2. And lists grow with append.',
      hints: ['Counting starts at 0, so red is colours[0].', 'colours[3] does not exist (IndexError). Use colours[2] or colours[-1]. Then change add to append.'],
    },
  ],
  teacher: {
    explain: 'A list stores many values in order in one variable. Items are numbered from 0, so the first item is list[0] and the last is list[-1]. append adds to the end and len counts the items. A for loop can visit every item directly, and the word in checks whether a value is in the list. Today learners use a list of moves with random.choice to build Rock, Paper, Scissors.',
    analogy: 'A list is like a train: each coach holds one item, the coaches are numbered from 0 starting at the engine, and append adds a new coach at the back.',
    vocab: [
      ['list', 'Many values stored in order inside [ ].'],
      ['item', 'One value inside a list.'],
      ['index', 'The position number of an item. The first is 0.'],
      ['append', 'Adds an item to the end of a list.'],
      ['len()', 'Counts the items in a list.'],
      ['in', 'Checks if a value is in a list: True or False.'],
    ],
    demo: '1) Type team = ["Aarav", "Meera", "Kabir"] and print(team). 2) Ask the class: “What is team[1]?” Take answers in the chat, then print it (Meera). 3) Print team[3] to show the IndexError, and explain the last index is 2; then show team[-1]. 4) Type team.append("Zoya") and print(len(team)). 5) Type for player in team: print("Go", player). 6) Type moves = ["rock", "paper", "scissors"], then player = input("Your move: ") and if player in moves: print("Good move!") else: print("Not a move!"). Run with rock and banana. 7) Add import random and print(random.choice(moves)).',
    unplugged: 'Human List (5 min game): five learners line up on camera (or hold up name cards) as a list. The class calls out “index 0!”, “index -1!”, “append Riya!” or “is Arjun in the list?” and the list must respond. Anyone who answers “index 1” as the first item gets a friendly buzzer.',
    prompts: [
      ['What index does the first item have?', '0.'],
      ['How do you get the last item of any list?', 'list[-1].'],
      ['What does team.append("Riya") do?', 'Adds Riya to the end of the list.'],
      ['What does "banana" in moves give?', 'False.'],
      ['Why did colours[3] crash a 3-item list?', 'Indexes go 0, 1, 2, so 3 does not exist.'],
    ],
    support: 'Give a printed index strip (0, 1, 2, 3 above boxes) so learners can write the items under their index numbers.',
    stretch: 'Make Rock, Paper, Scissors, Lizard, Spock with 5 moves, or keep a history list of every move the player made and print it at the end.',
    mis: [
      ['The first item is at index 1', 'Python counts from 0.'],
      ['list.add() adds an item', 'Python lists use append().'],
      ['for item in list gives the index numbers', 'It gives the items themselves.'],
      ['"Rock" in moves is True when moves has "rock"', 'Capitals matter. Use .lower() on the input first.'],
    ],
    successCriteria: ['I can make a list and read items by their index.', 'I can add items with append and count them with len.', 'I can loop through a list with for.', 'I can check if something is in a list with in.'],
    homework: 'Play your Rock, Paper, Scissors with two people at home and record the results. Then make a list of your 5 favourite foods and print them with a for loop.',
    exit: 'colours = ["red", "green", "blue"]. What is colours[1], and what is len(colours)?',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human List', doing: 'Play Human List (unplugged): learners act as a list and respond to index, append and in calls.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Chat poll: “Will moves[0] print rock or paper?” Play the video with captions.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone builds the cricket team list. Thumbs check: “Did len go up after append?”' },
      { minutes: 8, stage: 'Challenge, predict and blanks', doing: 'Growing snack list, the index predict and list facts. Quick competition: fastest correct answer to team[1].' },
      { minutes: 15, stage: 'Project in breakout pairs', doing: 'Pairs build Rock, Paper, Scissors. Each partner plays a full best-of-5 against the other’s game and tries an invalid move.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the colour list”: three bugs. First to explain why index 3 crashed wins.' },
      { minutes: 7, stage: 'Show-and-tell tournament', doing: 'Mini-tournament: three volunteers play their game live against the computer while the class cheers. Shout-out for the cleanest winner logic.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: colours[1] and len(colours).' },
    ],
  },
  files: [{ name: 'team_list.py', title: 'Build-along: cricket team list', audience: 'student', content: L7_TEAM }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 8 · Capstone: Treasure Hunt
// ─────────────────────────────────────────────────────────────
const L8_ROOMS = `# Room describer: my first functions
def line():
    print("=" * 30)

def describe_room(name):
    line()
    print(f"You are in the {name}.")
    line()

describe_room("Hall")
describe_room("Kitchen")
describe_room("Cave")`;

const L8_HUNT = `# Treasure Hunt: a text adventure
# Made by: Zoya
# Map: hall -north-> library, hall -east-> kitchen, kitchen -down-> cellar (needs the key)

inventory = []
room = "hall"
moves = 0
max_moves = 10
playing = True

def show_status():
    print("-" * 34)
    print(f"Room: {room} | Moves left: {max_moves - moves}")
    print("Bag:", inventory)

def describe(place):
    if place == "hall":
        print("A dusty hall. Doors lead north and east.")
    elif place == "library":
        print("Old books everywhere. Something shiny is on the desk. Exit: south.")
    elif place == "kitchen":
        print("A smoky kitchen. A trapdoor leads down. Exit: west.")
    elif place == "cellar":
        print("A dark cellar. A wooden chest sits in the corner. Exit: up.")

print("=== TREASURE HUNT ===")
print("Find the treasure before your torch runs out!")
print("Commands: north, south, east, west, up, down, take, quit")

while playing:
    show_status()
    describe(room)
    cmd = input("> ").strip().lower()
    moves += 1

    if cmd == "quit":
        print("Bye! Thanks for playing.")
        playing = False
    elif room == "hall" and cmd == "north":
        room = "library"
    elif room == "hall" and cmd == "east":
        room = "kitchen"
    elif room == "library" and cmd == "south":
        room = "hall"
    elif room == "library" and cmd == "take":
        if "key" in inventory:
            print("You already have the key.")
        else:
            inventory.append("key")
            print("You picked up a golden key!")
    elif room == "kitchen" and cmd == "west":
        room = "hall"
    elif room == "kitchen" and cmd == "down":
        if "key" in inventory:
            print("The key opens the trapdoor...")
            room = "cellar"
        else:
            print("The trapdoor is locked. You need a key.")
    elif room == "cellar" and cmd == "up":
        room = "kitchen"
    elif room == "cellar" and cmd == "take":
        inventory.append("treasure")
        print("You open the chest and find the TREASURE! YOU WIN!")
        playing = False
    else:
        print("You can't do that here.")

    if playing and moves >= max_moves:
        print("Your torch flickers out. GAME OVER!")
        playing = False`;

export const P8 = lesson(8, {
  title: 'Capstone: Treasure Hunt',
  objective: 'Design and build a text adventure game with rooms, choices, an inventory list, win and lose endings, and your first functions.',
  concept: 'game design, lists, def',
  minutes: 60,
  hook: ['code', 'bag = []\nbag.append("key")\nprint("Bag:", bag)', "Bag: ['key']"],
  cards: [
    { emoji: '🗺️', title: 'Rooms and choices', body: 'A text adventure is a story where the player types commands like north or take. A variable called room remembers where they are. if and elif decide what each command does in each room.' },
    { emoji: '🎒', title: 'An inventory list', body: 'Start with an empty list: inventory = []. When the player picks something up, use inventory.append("key"). Later, if "key" in inventory: can unlock a door.' },
    { emoji: '🏁', title: 'Win and lose', body: 'A while loop keeps the game running while playing is True. Finding the treasure wins. Running out of moves loses. Both set playing = False to end the loop.' },
    { emoji: '🧩', title: 'Your first function', body: 'def show_status(): gives a name to a chunk of code. Call it with show_status() whenever you need it. Functions keep long programs tidy, and Level 2 goes much deeper.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Make a function',
      lang: 'python',
      code: 'def describe_room(name):\n    print("=" * 20)\n    print(f"You are in the {name}.")\n\ndescribe_room("Hall")\ndescribe_room("Cave")',
      output: '====================\nYou are in the Hall.\n====================\nYou are in the Cave.',
      say: ['The word def makes a new command called describe_room.', 'We write it once, then call it twice with different room names.'],
    },
    {
      kind: 'code',
      heading: 'Pick up and unlock',
      lang: 'python',
      code: 'inventory = []\ninventory.append("key")\nif "key" in inventory:\n    print("The door opens!")\nelse:\n    print("It is locked.")',
      output: 'The door opens!',
      say: ['The bag starts empty, then we append a key.', 'Because key is in the inventory, the locked door opens.'],
    },
    {
      kind: 'code',
      heading: 'The game loop',
      lang: 'python',
      code: 'room = "hall"\nplaying = True\nwhile playing:\n    cmd = input("> ")\n    if cmd == "quit":\n        playing = False\n    elif room == "hall" and cmd == "north":\n        room = "library"',
      output: '> north\n> quit',
      say: ['The while loop keeps asking for commands while playing is True.', 'Each elif checks the room AND the command, so north only works from the hall.'],
    },
    {
      kind: 'steps',
      heading: 'Design first, then code',
      tool: 'Paper and Python Lab',
      steps: ['Draw a map with 3 or 4 rooms and arrows', 'Decide where the key and the treasure are', 'Write the win rule and the lose rule', 'Code the loop and one room, then test', 'Add the other rooms one at a time', 'Playtest with a friend and fix what confuses them'],
      say: ['Real game designers sketch a map before they write any code.', 'Build one room at a time and test it, so bugs stay small and easy to find.'],
    },
  ],
  build: {
    title: 'Build along: room describer with functions',
    intro: 'Type along to write your first two functions, then use them in your adventure.',
    steps: [
      { title: 'A function with no input', text: 'Type def line(): and indent print("=" * 30). Run it: nothing happens yet!', tip: 'Defining a function only teaches Python the command. You must call it to run it.' },
      { title: 'Call it', text: 'At the left edge type line() and run. Now the line appears.' },
      { title: 'A function with an input', text: 'Type def describe_room(name): and indent line(), print(f"You are in the {name}.") and line().' },
      { title: 'Call it three times', text: 'Type describe_room("Hall"), describe_room("Kitchen") and describe_room("Cave"). Run it.' },
      { title: 'Plan your adventure', text: 'On paper, draw your map: rooms, doors, the key and the treasure. You will build this in the project.' },
    ],
  },
  acts: [
    {
      py: 'Your first function. Write def describe_room(name): that prints a border line and then `You are in the ...` with the room name. Call it three times, for the Hall, the Kitchen and the Cave.',
      title: 'Python Lab: room describer',
      starter: 'def describe_room(name):\n    print("=" * 20)\n    # print "You are in the ..." here\n\ndescribe_room("Hall")\n',
      goals: [
        ['Describes all three rooms', { t: 'output', lines: ['You are in the Hall', 'You are in the Kitchen', 'You are in the Cave'], msg: 'Print You are in the Hall, then the Kitchen, then the Cave.' }],
        ['Calls describe_room 3 times', { t: 'calls', name: 'describe_room', min: 3, msg: 'Call describe_room("…") once for each room.' }],
        ['Defines a function', { t: 'uses', what: ['def', 'fstring'], msg: 'Use def describe_room(name): and an f-string with {name}.' }],
      ],
      solution: L8_ROOMS,
      explain: 'Write once, use many times. That is why every big program is built from functions.',
      hints: ['Inside the function: print(f"You are in the {name}.")', 'At the left edge: describe_room("Kitchen") and describe_room("Cave").'],
    },
    {
      code: 'bag = []\nbag.append("torch")\nbag.append("key")\nif "map" in bag:\n    print("You know the way!")\nelse:\n    print("You have", len(bag), "things.")',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['You have 2 things.', 'You know the way!', 'You have 3 things.', 'Nothing'],
      answer: 0,
      why: 'The bag holds torch and key, but no map, so else runs and len(bag) is 2.',
      title: 'Predict the output: what is in the bag?',
    },
    {
      order: 'Put the game designer’s steps in order',
      steps: ['Draw a map of the rooms', 'Choose where the key and treasure go', 'Write the win and lose rules', 'Code the game loop and one room', 'Add the other rooms and test each one', 'Playtest with a friend and improve'],
      why: 'Design before code, and test one piece at a time: that is how real games get made.',
      title: 'Design a game',
    },
    {
      py: 'Capstone: build your Treasure Hunt! Rules: at least 3 rooms, an inventory list that you append to, a while loop game, and at least one function you define with def. Win when the player finds the treasure. Lose when the torch runs out after 10 moves (print `GAME OVER`). Typing `quit` must end the game, and unknown commands must not crash it.',
      title: 'Capstone: Treasure Hunt',
      mode: 'project',
      starter: '# Treasure Hunt: a text adventure\n# Made by: (your name)\n# My map: \n\ninventory = []\nroom = "hall"\nmoves = 0\nplaying = True\n\ndef show_status():\n    print(f"Room: {room} | Moves: {moves}")\n\nwhile playing:\n    show_status()\n    cmd = input("> ").strip().lower()\n    moves += 1\n    # Add your rooms, the win, the lose and quit here\n',
      inputs: ['quit'],
      goals: [
        ['Typing quit ends the game', { t: 'noError', inputs: ['quit'], msg: 'When the player types quit, set playing = False.' }],
        ['Torch runs out after 10 moves', { t: 'output', contains: ['GAME OVER'], inputs: ['xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'], msg: 'After 10 moves, print GAME OVER and end the loop. Unknown commands should just print a message.' }],
        ['Has rooms, an inventory and a function', { t: 'uses', what: ['def', 'list', 'append', 'while', 'if', 'elif', 'input'], msg: 'Use def, an inventory list with append, a while loop and if / elif.' }],
      ],
      solution: L8_HUNT,
      requirements: ['A map of at least 3 rooms (drawn first, written in a comment)', 'An inventory list that grows with append', 'A locked door or challenge that checks the inventory with in', 'A win ending (find the treasure) and a lose ending (torch runs out after 10 moves)', 'At least one function you define with def and call', 'quit ends the game; unknown commands print a friendly message'],
      reflection: 'What was the hardest bug in your adventure, and how did you track it down? What would you add with more time?',
      minWords: 25,
      explain: 'You designed and built a whole game from your own map. You are a Python game coder!',
      hints: ['Every room choice is one elif: elif room == "hall" and cmd == "north": room = "library"', 'At the end of the loop: if playing and moves >= 10: print("GAME OVER") and playing = False.'],
    },
    {
      py: 'Debug it! This adventure start-up has three bugs. Fix it so it prints `Welcome, Explorer!` and then `You can see in the dark.`',
      title: 'Debug it: the broken adventure',
      phase: 'probe',
      starter: 'greet("Explorer")\n\ndef greet(name)\n    print(f"Welcome, {name}!")\n\nbag = []\nbag.append("torch")\nif "torch" in bag\n    print("You can see in the dark.")\n',
      goals: [
        ['Runs with no errors', { t: 'noError', msg: 'Look at the colons, and when the function is called.' }],
        ['Prints both lines in order', { t: 'output', lines: ['Welcome, Explorer!', 'You can see in the dark.'], msg: 'First the welcome, then the torch message.' }],
        ['Still uses the function', { t: 'calls', name: 'greet', min: 1, msg: 'Keep the greet function and call it.' }],
      ],
      solution: 'def greet(name):\n    print(f"Welcome, {name}!")\n\ngreet("Explorer")\n\nbag = []\nbag.append("torch")\nif "torch" in bag:\n    print("You can see in the dark.")\n',
      explain: 'Define a function before you call it, and end every def and if line with a colon.',
      hints: ['def and if lines both need a colon at the end.', 'Python reads from the top: move greet("Explorer") below the def block.'],
    },
  ],
  teacher: {
    explain: 'The capstone pulls the whole course together: variables for the room and moves, input for commands, if/elif for choices, a while loop for the game, a list for the inventory, and a first taste of functions. A function is a named block of code defined with def and run by calling its name with brackets. Insist on design first: a paper map with rooms, the key, the treasure, the win rule and the lose rule. Then build the loop and ONE room, test, and add rooms one by one.',
    analogy: 'A function is like a recipe card in the kitchen: you write “make chai” once, and whenever you need chai you just say “make chai” instead of reading every step again.',
    vocab: [
      ['text adventure', 'A game where the player types commands to explore a story.'],
      ['inventory', 'A list of items the player is carrying.'],
      ['function', 'A named block of code you can run again and again.'],
      ['def', 'The word that defines a new function.'],
      ['call', 'Running a function by writing its name with brackets.'],
      ['playtest', 'Letting someone play your game to find problems.'],
    ],
    demo: '1) Type def line(): with an indented print("=" * 30) and run: nothing appears. Ask why. 2) Add line() at the left edge and run. 3) Type def describe_room(name): with print(f"You are in the {name}."), then call it with "Hall" and "Cave". 4) Type inventory = [], inventory.append("key"), and if "key" in inventory: print("The door opens!"). 5) Open the Treasure Hunt starter and add two rooms live: elif room == "hall" and cmd == "north": room = "library". Play it with the class calling out commands. 6) Add the torch rule (if playing and moves >= 10: print("GAME OVER")) and show the lose ending by typing nonsense 10 times. Winning route for the model solution: north, take, south, east, down, take.',
    unplugged: 'Dungeon Master (5 min game): the teacher describes a room (“You are in a dark hall. Doors lead north and east.”) and learners type commands in the chat. The teacher only accepts exact commands and keeps an inventory list on the board. After 3 rooms, ask: what did the “program” need to remember? (the room, the inventory, the moves).',
    prompts: [
      ['What does def do?', 'It defines (creates) a new function.'],
      ['Why did nothing happen after we defined line()?', 'A function only runs when you call it.'],
      ['How does the game remember where the player is?', 'With a variable called room.'],
      ['How do we check if the player has the key?', 'if "key" in inventory:'],
      ['How does the game end?', 'Set playing = False, so the while loop stops.'],
      ['Why test one room at a time?', 'Bugs stay small and easy to find.'],
    ],
    support: 'Give the full starter with the loop and quit already working; learners add rooms using the one-room pattern card. Allow 2 rooms plus the treasure room as a first goal.',
    stretch: 'Add a second item (a torch refill that adds 5 moves), a trap room that ends the game, or a describe(place) function that prints every room description.',
    mis: [
      ['Defining a function runs it', 'You must call it by name with brackets, like show_status().'],
      ['You can call a function above its def line', 'Python reads top to bottom, so define it first.'],
      ['elif cmd == "north" works in every room', 'Check the room too: room == "hall" and cmd == "north".'],
      ['while playing stops by itself', 'Something must set playing = False: winning, losing or quit.'],
    ],
    successCriteria: ['I can plan a game with a map, a win rule and a lose rule.', 'I can use a while loop, a room variable and if / elif to run a text adventure.', 'I can use an inventory list with append and in.', 'I can define and call a simple function with def.'],
    homework: 'Get two people at home to play your Treasure Hunt without help. Write down where they got stuck, then improve that room’s description.',
    exit: 'Write the two lines that add "map" to the inventory list and then check whether "map" is in it.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Dungeon Master', doing: 'Play Dungeon Master (unplugged) in the chat. Ask what the “program” had to remember.' },
      { minutes: 5, stage: 'Hook, video and map', doing: 'Show the hook and play the capstone video with captions. Thumbs poll: “Who has played a text adventure?” Learners draw their map on paper.' },
      { minutes: 8, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone builds the room describer functions. Predict-the-output and the design-order activity as a quick competition.' },
      { minutes: 20, stage: 'Build the Treasure Hunt', doing: 'Learners build their adventure from the starter, one room at a time. Halfway check-in: the loop, quit and one room work. Teacher visits breakout rooms.' },
      { minutes: 5, stage: 'Debug race', doing: 'Race to fix “the broken adventure”: three bugs. Winner explains why the call had to move.' },
      { minutes: 9, stage: 'Playtest swap and showcase', doing: 'Breakout pairs play each other’s adventure and give two stars and a wish. Back together, three learners run a live showcase while the class calls out commands.' },
      { minutes: 5, stage: 'Improve and submit', doing: 'Fix one thing from playtesting, write the reflection and submit.' },
      { minutes: 3, stage: 'Celebrate and exit ticket', doing: 'Course celebration: everyone shares one emoji for their favourite project. Exit ticket: append and check "map".' },
    ],
  },
  project: {
    title: 'Treasure Hunt Text Adventure',
    brief: 'Design and build a text adventure with at least three rooms, an inventory, a locked door, a treasure to win and a torch that runs out.',
    requirements: ['A paper map of 3+ rooms, copied into a comment', 'An inventory list that grows with append and is checked with in', 'A while loop game with if / elif for every room and command', 'A win ending and a lose ending (GAME OVER after 10 moves)', 'At least one function you define with def and call', 'quit ends the game and unknown commands do not crash it'],
    milestones: ['Map, win rule and lose rule designed on paper', 'Game loop, quit and the first room work', 'All rooms, the key and the locked door work', 'Win and lose endings work; a friend has playtested it and you fixed one thing'],
    rubric: [
      { criterion: 'Game design', levels: ['No clear map or goal', 'A goal but rooms do not connect clearly', '3+ connected rooms, a locked door, win and lose rules', 'A clever, well-described world with a puzzle that makes the player think'] },
      { criterion: 'Programming', levels: ['Crashes or the loop never ends', 'Loop works but some rooms or items do not', 'Rooms, inventory, win, lose and quit all work', 'Also uses functions well, e.g. describe(place), and handles odd input'] },
      { criterion: 'Lists and functions', levels: ['No inventory list or function', 'A list or a function, but not used properly', 'Inventory with append and in; at least one function called', 'Several functions that make the code shorter and clearer'] },
      { criterion: 'Testing and presentation', levels: ['Not tested', 'Tested by the maker only', 'Playtested by someone else and one fix made', 'Clear instructions, comments, a playtest log and a confident showcase'] },
    ],
    extensions: ['Add a trap room that ends the game, or a monster that needs an item to pass', 'Add a torch refill item that gives 5 extra moves', 'Write a describe(place) function and a help command that lists every command'],
  },
  files: [
    { name: 'room_describer.py', title: 'Build-along: room describer functions', audience: 'student', content: L8_ROOMS },
    { name: 'treasure_hunt_map.md', title: 'Treasure Hunt map and plan sheet', audience: 'student', content: '# Treasure Hunt: my plan\n\n## My map\nDraw your rooms as boxes and the doors as arrows. Label each arrow with the command (north, east, down...).\n\n| Room | Exits (command → room) | Item here | Special rule |\n|---|---|---|---|\n| hall | north → library, east → kitchen | — | start here |\n|  |  |  |  |\n|  |  |  |  |\n|  |  |  |  |\n\n## Rules\n- How do I win? ______________________\n- How do I lose? (torch runs out after 10 moves) ______________________\n- What is locked, and what opens it? ______________________\n\n## The one-room pattern\n```python\nelif room == "hall" and cmd == "north":\n    room = "library"\n```\n\n## Playtest log\n| Tester | Where they got stuck | What I changed |\n|---|---|---|\n|  |  |  |\n' },
  ],
});
