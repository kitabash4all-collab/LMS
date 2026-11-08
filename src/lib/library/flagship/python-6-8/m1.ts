// Python Gr 6–8 Beginner · Module 1 — Talk to the computer. Project: Quiz Show.
import { lesson } from '../kit.ts';

// ─────────────────────────────────────────────────────────────
// Lesson 1 · Hello, Python!
// ─────────────────────────────────────────────────────────────
const L1_BADGE = `# My name badge
# Change the name, class and hobby to your own!

print("*****************************")
print("*                           *")
print("*     HELLO, MY NAME IS     *")
print("*          AARAV            *")
print("*                           *")
print("*****************************")

# Multi-line art with triple quotes
print("""
   Class: 7B
   Loves: cricket and coding
     ___
    (o o)
     | |
""")`;

const L1_POSTER = `# Cricket scoreboard poster
# Made by: Meera

print("==============================")
print("   KITABASH CRICKET CUP 2026  ")
print("==============================")
print("   Mumbai Waves   vs   Delhi Kites")
print("------------------------------")
print("   Mumbai Waves : 182 / 4")
print("   Delhi Kites  : 179 / 8")
print("------------------------------")
print("""
     WINNER: MUMBAI WAVES!
         ___________
        '._==_==_=_.'
        .-:      :-.
        '-|:     |-'
          ':.   .:'
            ) (
          .'   '.
         '-------'
""")
print("Player of the match: Riya (5 wickets)")`;

export const P1 = lesson(1, {
  title: 'Hello, Python!',
  objective: 'Write your first Python programs with print(), strings and comments, and make text art that shows on screen.',
  concept: 'print, strings, comments',
  minutes: 60,
  hook: ['code', 'print("Hello, Kitabash!")', 'Hello, Kitabash!'],
  intro: 'Today you will type your first real Python code and make the computer talk back to you.',
  cards: [
    { emoji: '🐍', title: 'Python is a real language', body: 'Python is a real programming language that professional coders use every day. Scientists, game makers and website builders all use it. You type words, and the computer follows them.' },
    { emoji: '🖨️', title: 'print() shows text', body: 'The print() command shows a message on the screen. Put your message inside the brackets, like print("Hello"). Each print starts a new line.' },
    { emoji: '🧵', title: 'Strings are text in quotes', body: 'Text in quotes is called a string. You can use "double" or \'single\' quotes, but both ends must match. Forget a quote and Python shows an error.' },
    { emoji: '💬', title: 'Comments are notes for humans', body: 'A line that starts with # is a comment. Python skips it completely. Use comments to explain your code or to switch a line off.' },
    { emoji: '🎨', title: 'Text art with triple quotes', body: 'Three quotes in a row make a string that can cover many lines. That is perfect for drawing pictures and posters with keyboard symbols.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Your first line of Python',
      lang: 'python',
      code: 'print("Hello, Kitabash!")',
      output: 'Hello, Kitabash!',
      say: ['Watch me type the word print, then round brackets, then a message in quotes.', 'When I press Run, Python shows exactly what was inside the quotes.'],
    },
    {
      kind: 'code',
      heading: 'One print, one line',
      lang: 'python',
      code: 'print("Namaste!")\nprint("My name is Zoya.")\nprint("I love mangoes and cricket.")',
      output: 'Namaste!\nMy name is Zoya.\nI love mangoes and cricket.',
      say: ['Three print lines give us three lines of output, in the same order.', 'Python always runs your code from top to bottom, one line at a time.'],
    },
    {
      kind: 'code',
      heading: 'Comments switch lines off',
      lang: 'python',
      code: '# My favourite sports\nprint("Cricket")\n# print("Football")\nprint("Kabaddi")',
      output: 'Cricket\nKabaddi',
      say: ['Lines that start with a hash sign are comments, so Python skips them.', 'Football never shows up, because we turned that line into a comment.'],
    },
    {
      kind: 'code',
      heading: 'Draw with triple quotes',
      lang: 'python',
      code: 'print("""\n   +--------+\n   |  o  o  |\n   |   __   |\n   +--------+\n""")',
      output: '   +--------+\n   |  o  o  |\n   |   __   |\n   +--------+',
      say: ['Three quote marks let one string stretch across many lines.', 'Every space you type stays exactly where you put it, so you can draw pictures.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'print("Welcome to the match!)',
      output: 'SyntaxError: unterminated string literal',
      say: ['Here the closing quote is missing, so Python does not know where the text ends.', 'An error is not a disaster, it is a clue. Read it, fix it, and run again.'],
    },
  ],
  build: {
    title: 'Build along: my name badge',
    intro: 'Open the Python Lab and type along with your teacher. You will keep this badge and show it at home.',
    steps: [
      { title: 'Add a comment', text: 'On line 1 type: # My name badge. Press Run. Nothing appears, because comments are only for humans.' },
      { title: 'Print a border', text: 'Type print("*****************************") and press Run. You should see a row of stars.' },
      { title: 'Print your name', text: 'Add print("*     HELLO, MY NAME IS     *") and then a line with your own name inside the stars.' },
      { title: 'Close the border', text: 'Copy your border line to the bottom so your badge has a top and a bottom.', tip: 'Copy and paste saves time and keeps both borders the same length.' },
      { title: 'Add triple-quote art', text: 'Type print(""" then press Enter, draw a small face over three lines, and end with """) on its own line.' },
      { title: 'Run and save', text: 'Run it, fix any red error by checking quotes and brackets, then download your badge file.', tip: 'Every ( needs a ) and every " needs a partner ".' },
    ],
  },
  acts: [
    {
      py: 'Say hello to Python! Print exactly three lines: first `Hello, Python!`, then `My name is ...` with your name, then `I like ...` with something you like. Add at least one comment that starts with #.',
      title: 'Python Lab: three-line hello',
      starter: '# My first program\nprint("Hello")\n',
      goals: [
        ['Prints the three lines in order', { t: 'output', lines: ['Hello, Python!', 'My name is', 'I like'], msg: 'Print “Hello, Python!”, then “My name is …”, then “I like …”, in that order.' }],
        ['Has a comment', { t: 'uses', what: ['comment'], msg: 'Add a line that starts with # to explain your code.' }],
        ['Runs with no errors', { t: 'noError', msg: 'Check every quote and bracket has a partner.' }],
      ],
      solution: '# My first program\nprint("Hello, Python!")\nprint("My name is Kabir.")\nprint("I like biryani and badminton.")\n',
      explain: 'Three print commands, three lines of output. You just talked to a computer in its own language!',
      hints: ['Copy the first line exactly: print("Hello, Python!") with the comma and the exclamation mark.', 'Each new line of output needs its own print(...).'],
    },
    {
      code: '# Team list\nprint("Cricket")\n# print("Football")\nprint("Kabaddi")',
      lang: 'python',
      ask: 'What will this program show on the screen?',
      options: ['Cricket and Kabaddi on two lines', 'Cricket, Football and Kabaddi on three lines', 'Team list, Cricket and Kabaddi', 'Nothing, because of the # signs'],
      answer: 0,
      why: 'Lines starting with # are comments, so Python skips “Team list” and the Football line.',
      title: 'Predict the output: comments',
    },
    {
      match: 'Match each piece of Python to its job',
      pairs: [
        ['print("Hi")', 'Shows Hi on the screen'],
        ['"Hi"', 'A string: text in quotes'],
        ['# Hi', 'A comment that Python skips'],
        ['"""Hi"""', 'A string that can cover many lines'],
      ],
      why: 'print shows things, quotes make strings, # makes comments and triple quotes make multi-line strings.',
    },
    {
      py: 'Project: make a poster that prints on screen. Choose a name badge OR a cricket scoreboard poster. Use a border made of symbols, at least 6 lines of output, one triple-quote art block, and comments that say what each part is and who made it.',
      title: 'Project: name badge or scoreboard poster',
      mode: 'project',
      starter: '# My poster\n# Made by: (your name)\n\nprint("==============================")\n# Add your lines here\n',
      goals: [
        ['Prints at least 6 lines', { t: 'output', lines: ['', '', '', '', '', ''], msg: 'Your poster needs at least 6 lines of output.' }],
        ['Uses print and comments', { t: 'uses', what: ['print', 'comment'], msg: 'Use print(...) for every line and add comments with #.' }],
        ['Runs with no errors', { t: 'noError', msg: 'Check that every quote and bracket is closed.' }],
      ],
      solution: L1_POSTER,
      requirements: ['A border made of symbols at the top and bottom', 'At least 6 lines of output', 'One triple-quote art block (a picture)', 'A comment saying who made it', 'Your own words: your name, your team or your school club'],
      reflection: 'Which part of your poster was hardest to line up, and how did you fix it?',
      explain: 'Your first Python project! Show it to someone at home and explain what print does.',
      hints: ['Copy one border line and paste it at the bottom.', 'Start the art with print(""" and end it with """) on its own line.'],
    },
    {
      py: 'Spot the bugs! This welcome screen has three mistakes. Fix them so it prints the three lines: `Welcome to the match!`, `India vs Australia`, `Toss: India won`.',
      title: 'Debug it: the broken welcome screen',
      phase: 'probe',
      starter: 'print("Welcome to the match!)\nPrint("India vs Australia")\nprint("Toss: India won"\n',
      goals: [
        ['Runs with no errors', { t: 'noError', msg: 'Look for a missing quote, a capital letter and a missing bracket.' }],
        ['Prints all three lines', { t: 'output', lines: ['Welcome to the match!', 'India vs Australia', 'Toss: India won'], msg: 'All three lines should print, in order.' }],
      ],
      solution: 'print("Welcome to the match!")\nprint("India vs Australia")\nprint("Toss: India won")\n',
      explain: 'Python is picky: print must be lower-case, and every quote and bracket needs a partner.',
      hints: ['Line 1 is missing a closing quote mark.', 'Python only knows print with a small p. Line 3 needs a ) at the end.'],
    },
  ],
  teacher: {
    explain: 'Python reads your program from top to bottom and follows each line exactly. print() shows whatever is inside its brackets. Text must go inside matching quotes, and that text is called a string. Lines starting with # are comments: Python ignores them, so we use them for notes. Triple quotes let one string cover many lines, which is how we draw text art.',
    analogy: 'print() is like a loudspeaker: whatever you put in front of it gets announced exactly as written, spelling mistakes and all.',
    vocab: [
      ['program', 'A list of instructions the computer follows in order.'],
      ['print()', 'The command that shows text on the screen.'],
      ['string', 'Text inside quote marks, like "Hello".'],
      ['comment', 'A note that starts with #. Python skips it.'],
      ['syntax error', 'A typing mistake that stops Python from understanding the code.'],
      ['output', 'What the program shows on the screen when it runs.'],
    ],
    demo: '1) Open the Python Lab and share your screen. 2) Type print("Hello, Kitabash!") and press Run; point to the output panel. 3) Delete the closing quote, press Run, and read the red error aloud: “unterminated string literal” means the quote never ended. Put the quote back. 4) Type Print with a capital P, run it, and show the NameError; fix it. 5) Add # My first program on line 1 and run: point out that nothing new appears. 6) Type print(""" , press Enter, type  (o o)  and  | |  on two lines, then """) and run to show the art keeps its spaces.',
    unplugged: 'Robot Printer (5 min game): one learner is the “Python robot”. Others hold up cards with instructions such as print("Namaste") or # print("Dance"). The robot must say out loud ONLY what a real print would show, and stay silent for comments. Anyone who catches the robot making a mistake becomes the next robot.',
    prompts: [
      ['What does print() do?', 'It shows the text inside the brackets on the screen.'],
      ['Why does print("Hi) give an error?', 'The closing quote is missing, so Python does not know where the string ends.'],
      ['What happens to a line starting with #?', 'Python skips it; it is a comment for humans.'],
      ['How do you print three lines?', 'Use three print commands, or one triple-quoted string.'],
      ['Is Print("Hi") the same as print("Hi")?', 'No. Python is case-sensitive, so Print is an error.'],
    ],
    support: 'Give a printed “bracket and quote buddy” card: every ( needs ) and every " needs ". Let learners start from the starter file and only change the words.',
    stretch: 'Make a 10-line poster with two different borders, and use print("=" * 30) to draw a border of 30 equals signs in one line.',
    mis: [
      ['The computer will understand print("Hi) because it is close enough', 'Python needs exact syntax. One missing quote stops the whole program.'],
      ['Comments are shown on the screen', 'Comments are skipped. Only print shows things on the screen.'],
      ['Print and print are the same', 'Python is case-sensitive: always use lower-case print.'],
      ['The quotes are printed too', 'Quotes only mark where the string starts and ends; they are not shown.'],
    ],
    successCriteria: ['I can use print() to show text on the screen.', 'I can explain what a string is and close every quote.', 'I can write a comment with #.', 'I can fix a simple syntax error by reading the message.'],
    homework: 'Make a birthday card program for someone at home: a border, their name, and a triple-quote cake picture. Run it for them!',
    exit: 'Write one line of Python that prints: I am a Python coder!',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Robot Printer', doing: 'Play Robot Printer (unplugged). Learners act out print and comments. Celebrate the best robot.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook: print("Hello, Kitabash!"). Thumbs poll: “Who has typed real code before?” Play the video with captions and pause at “Spot the bug”.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo exactly as written, then everyone types the name badge build-along with you. Thumbs check after each step.' },
      { minutes: 8, stage: 'Challenge and predict', doing: 'Learners do “three-line hello”, then the predict-the-output and match activities. Quick competition: first three correct predictions shout “Kabaddi!”.' },
      { minutes: 15, stage: 'Project in pairs', doing: 'Pair programming in breakout rooms: one types (driver), one checks quotes and brackets (navigator); swap every 5 minutes. Build the badge or scoreboard poster.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the broken welcome screen”. The first learner to explain all three bugs wins a shout-out.' },
      { minutes: 7, stage: 'Show-and-tell', doing: 'Three volunteers share their screen and run their poster. Class gives two stars and a wish in the chat.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Recap the four success criteria with a fist-to-five poll. Exit ticket: print “I am a Python coder!”.' },
    ],
  },
  files: [{ name: 'name_badge.py', title: 'Build-along: name badge', audience: 'student', content: L1_BADGE }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 2 · Variables and input
// ─────────────────────────────────────────────────────────────
const L2_GREETER = `# Friendly greeter
name = input("What is your name? ")
city = input("Which city do you live in? ")
snack = input("What is your favourite snack? ")

print(f"Hi {name}! Welcome to Python.")
print(f"{city} is a great place to live.")
print(f"{name}, I will save some {snack} for you!")`;

const L2_MADLIBS = `# Mad Libs story generator
# Made by: Arjun

print("=== MAD LIBS: THE MONSOON MATCH ===")
hero = input("Name of a friend: ")
animal = input("An animal: ")
colour = input("A colour: ")
food = input("A food: ")
action = input("An action word (like dance): ")

print()
print("Here is your story!")
print(f"It was raining hard when {hero} walked onto the cricket ground.")
print(f"Suddenly a {colour} {animal} ran onto the pitch!")
print(f"The {animal} grabbed the ball and started to {action}.")
print(f"{hero} offered it some {food}, and it gave the ball back.")
print(f"Everyone agreed: the {colour} {animal} was the player of the match!")`;

export const P2 = lesson(2, {
  title: 'Variables and Input',
  objective: 'Store information in variables, ask the user questions with input(), and build sentences with f-strings.',
  concept: 'variables, input, f-strings',
  minutes: 60,
  hook: ['code', 'name = "Meera"\nprint(f"Hi {name}!")', 'Hi Meera!'],
  intro: 'Today your programs start to listen. You will store answers in variables and use them in a funny story.',
  cards: [
    { emoji: '📦', title: 'A variable is a labelled box', body: 'A variable stores a value under a name, like score = 0. The = sign means “put this value in the box”. Later you can use the name instead of the value.' },
    { emoji: '⌨️', title: 'input() asks a question', body: 'input("What is your name? ") shows a question and waits for the user to type. Whatever they type is stored, usually in a variable. input() always gives back text, even if they type a number.' },
    { emoji: '✨', title: 'f-strings mix text and variables', body: 'Put an f before the quotes and a variable name inside curly brackets. So f"Hi {name}!" becomes Hi Meera! when name holds Meera.' },
    { emoji: '🏷️', title: 'Good variable names', body: 'Names can use letters, numbers and underscores, but cannot start with a number or have spaces. Choose names that explain themselves, like player_name or total_runs.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Store and reuse',
      lang: 'python',
      code: 'team = "Mumbai Waves"\nprint(team)\nprint("Go", team, "go!")',
      output: 'Mumbai Waves\nGo Mumbai Waves go!',
      say: ['We put the text Mumbai Waves into a variable called team.', 'Now we can use the word team again and again, without typing the whole name.'],
    },
    {
      kind: 'code',
      heading: 'Boxes can change',
      lang: 'python',
      code: 'snack = "samosa"\nsnack = "vada pav"\nprint(snack)',
      output: 'vada pav',
      say: ['A variable holds one value at a time.', 'When we store vada pav, the samosa is replaced, so only vada pav is printed.'],
    },
    {
      kind: 'code',
      heading: 'Ask the user',
      lang: 'python',
      code: 'name = input("What is your name? ")\nprint(f"Hi {name}! Nice to meet you.")',
      output: 'What is your name? Riya\nHi Riya! Nice to meet you.',
      say: ['The input command shows the question and waits for the user to type.', 'Riya typed her name, and the f-string dropped it straight into the sentence.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'name = input("Your name? ")\nprint("Hello {name}!")',
      output: 'Your name? Kabir\nHello {name}!',
      say: ['Oops, the output says curly bracket name instead of Kabir.', 'We forgot the little f before the quotes, so Python printed the brackets as plain text.'],
    },
  ],
  build: {
    title: 'Build along: friendly greeter',
    intro: 'Type along in the Python Lab. Your greeter will ask three questions and answer like a friend.',
    steps: [
      { title: 'Ask for a name', text: 'Type name = input("What is your name? ") and press Run. Type your name in the box that appears.' },
      { title: 'Ask two more questions', text: 'Add city = input("Which city do you live in? ") and snack = input("What is your favourite snack? ").', tip: 'Leave a space before the closing quote so the answer does not stick to the question.' },
      { title: 'Greet with an f-string', text: 'Type print(f"Hi {name}! Welcome to Python."). Check the f is right before the first quote.' },
      { title: 'Use every variable', text: 'Add two more f-string lines that use city and snack.' },
      { title: 'Test with silly answers', text: 'Run it twice with different answers. The same code gives a different conversation each time!' },
    ],
  },
  acts: [
    {
      py: 'Make a greeting bot. Ask for the user’s name, then ask for their city. Then print one line with an f-string in this pattern: `Hi Zoya from Pune!`',
      title: 'Python Lab: greeting bot',
      starter: 'name = input("What is your name? ")\n# ask for the city here\n# print the greeting with an f-string\n',
      inputs: ['Zoya', 'Pune'],
      goals: [
        ['Asks two questions with input()', { t: 'uses', what: ['input'], msg: 'Use input(...) to ask for the name and then the city.' }],
        ['Uses an f-string', { t: 'uses', what: ['fstring'], msg: 'Put f before the quotes and the variable names in { }.' }],
        ['Prints “Hi Zoya from Pune!”', { t: 'output', contains: ['Hi Zoya from Pune'], inputs: ['Zoya', 'Pune'], msg: 'When the user types Zoya and Pune, print: Hi Zoya from Pune!' }],
        ['Works for anyone', { t: 'output', contains: ['Hi Aarav from Chennai'], inputs: ['Aarav', 'Chennai'], msg: 'Use the variables, not the words Zoya and Pune, so it works for every user.' }],
      ],
      solution: 'name = input("What is your name? ")\ncity = input("Which city? ")\nprint(f"Hi {name} from {city}!")\n',
      explain: 'Two inputs, two variables, one f-string. Your bot now talks to anyone!',
      hints: ['Copy the first line and change name to city and the question to “Which city? ”.', 'The print line is: print(f"Hi {name} from {city}!")'],
    },
    {
      code: 'snack = "samosa"\nsnack = "vada pav"\nprint(f"I want {snack}!")',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['I want vada pav!', 'I want samosa!', 'I want samosa vada pav!', 'I want {snack}!'],
      answer: 0,
      why: 'The second line replaces samosa with vada pav, and the f-string uses the newest value.',
      title: 'Predict the output: changing boxes',
    },
    {
      sort: 'Will Python accept this variable name?',
      buckets: ['Works in Python', 'Breaks Python'],
      items: [
        ['player_name', 0],
        ['total2', 0],
        ['score', 0],
        ['2total', 1],
        ['my name', 1],
        ['first-name', 1],
      ],
      why: 'Names use letters, numbers and underscores. They cannot start with a number or contain spaces or dashes.',
      hint: 'Look for spaces, dashes and names that start with a digit.',
    },
    {
      py: 'Project: Mad Libs story generator! Ask the user for at least 5 words (for example a friend’s name, an animal, a colour, a food and an action). Store each one in a variable, then print a funny story of at least 4 lines that uses every word with f-strings.',
      title: 'Project: Mad Libs story generator',
      mode: 'project',
      starter: '# Mad Libs story generator\n# Made by: (your name)\n\nhero = input("Name of a friend: ")\n# ask for 4 more words here\n\n# print your story with f-strings\n',
      inputs: ['Kabir', 'elephant', 'purple', 'jalebi', 'dance'],
      goals: [
        ['Asks questions with input()', { t: 'uses', what: ['input', 'fstring', 'print'], msg: 'Use input() for the words and f-strings for the story.' }],
        ['Runs with 5 answers', { t: 'noError', inputs: ['Kabir', 'elephant', 'purple', 'jalebi', 'dance'], msg: 'Ask exactly 5 questions (or fewer), then print the story without errors.' }],
        ['Prints a story of 4+ lines', { t: 'output', lines: ['', '', '', '', '', '', '', '', ''], inputs: ['Kabir', 'elephant', 'purple', 'jalebi', 'dance'], msg: 'After the questions, print at least 4 lines of story.' }],
      ],
      solution: L2_MADLIBS,
      requirements: ['Asks for 5 words with input()', 'Stores each word in a well-named variable', 'Prints a story of at least 4 lines', 'Uses every word at least once with f-strings', 'Has a title and a “Made by” comment'],
      reflection: 'Which word made the funniest story when your friend played it, and why?',
      explain: 'You built a program that writes a different story for every player. Play it with your family tonight!',
      hints: ['Copy the hero line four times and change the variable name and the question.', 'Every story line looks like print(f"... {hero} ... {animal} ...").'],
    },
    {
      py: 'Debug it! This program should print `Hello Riya!` and then `You are 12 years old.` when Riya types her name and age. It has two bugs. Fix them.',
      title: 'Debug it: the confused greeter',
      phase: 'probe',
      starter: 'name = input("Your name? ")\nage = input("Your age? ")\nprint("Hello name!")\nprint(f"You are {Age} years old.")\n',
      inputs: ['Riya', '12'],
      goals: [
        ['Says hello to Riya', { t: 'output', contains: ['Hello Riya!'], inputs: ['Riya', '12'], msg: 'The first message should use the name variable, not the word “name”.' }],
        ['Says the age', { t: 'output', contains: ['You are 12 years old'], inputs: ['Riya', '12'], msg: 'Variable names must match exactly, including capital letters.' }],
        ['Uses f-strings', { t: 'uses', what: ['fstring'], msg: 'Use f"..." with {name} to put the name into the message.' }],
      ],
      solution: 'name = input("Your name? ")\nage = input("Your age? ")\nprint(f"Hello {name}!")\nprint(f"You are {age} years old.")\n',
      explain: 'Bug 1: “name” in plain quotes is just text, so use f"Hello {name}!". Bug 2: Age and age are different names.',
      hints: ['Line 3 prints the word name, not the variable. It needs an f and curly brackets.', 'Line 4 uses Age with a capital A, but the variable is age.'],
    },
  ],
  teacher: {
    explain: 'A variable is a named box that stores a value; = means “store”, not “equals”. input() pauses the program, shows a question and returns what the user typed, always as text. f-strings let us drop variables into sentences: put f before the quotes and the variable in curly brackets. Today we use these three ideas to make programs that react to the person using them.',
    analogy: 'Variables are like labelled tiffin boxes: the label (name) stays the same, but you can change what is inside, and you only ever see the latest lunch.',
    vocab: [
      ['variable', 'A named box that stores a value.'],
      ['assign', 'Put a value into a variable with =.'],
      ['input()', 'Asks the user a question and waits for an answer.'],
      ['f-string', 'A string with f in front, where {name} is replaced by the variable’s value.'],
      ['value', 'The information stored in a variable, like "Meera" or 10.'],
    ],
    demo: '1) Type team = "Mumbai Waves" and on the next line print(team). Run it: point out there are no quotes around team in print. 2) Change it to print("team"), run, and ask what changed (it prints the word team). 3) Type name = input("What is your name? ") and run; type a learner’s first name from the class (first names only). 4) Add print(f"Hi {name}!"), run, then delete the f and run again to show Hi {name}!. Put the f back. 5) Type snack = "samosa" then snack = "vada pav" and print(snack), and ask the class to predict before running.',
    unplugged: 'Box Swap (5 min game): three learners each “become” a variable and hold up a name card (snack, city, hero). The teacher calls out lines like snack = "jalebi" and the learner writes the new value on their whiteboard, rubbing out the old one. Then the teacher reads an f-string sentence aloud and the class fills it in from the boxes.',
    prompts: [
      ['What does = do in Python?', 'It stores the value on the right in the variable on the left.'],
      ['What type of value does input() give back?', 'Always text (a string), even if the user types a number.'],
      ['Why do we need the f in f"Hi {name}"?', 'Without it, Python prints {name} as plain text.'],
      ['Is 2total a good variable name?', 'No, names cannot start with a number.'],
      ['If snack changes twice, which value is printed?', 'The latest one.'],
    ],
    support: 'Give a fill-in template: ___ = input("___ ") and print(f"... {___} ..."). Learners only choose names and questions.',
    stretch: 'Add a second story ending, and use .upper() to SHOUT one word, like {animal.upper()}.',
    mis: [
      ['= means “is equal to” like in maths', 'In Python, = means “store this value in the box”.'],
      ['print("name") prints the variable', 'Quotes make it the word name. Use print(name) or an f-string.'],
      ['Variable names are not case-sensitive', 'Age and age are two different variables.'],
      ['input() gives a number if you type a number', 'input() always gives text. Next lesson we convert it with int().'],
    ],
    successCriteria: ['I can store a value in a variable and use it again.', 'I can ask the user a question with input().', 'I can use an f-string to put variables into a sentence.', 'I can choose good variable names.'],
    homework: 'Play your Mad Libs game with two people at home. Add one more question and one more story line based on their ideas.',
    exit: 'Write two lines: one that asks for a favourite colour, and one that prints “Your favourite colour is …” with an f-string.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Box Swap', doing: 'Play Box Swap (unplugged) with three volunteers as variables. The class fills in a silly sentence from the boxes.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook and ask: “What will print?” Chat poll: type your guess. Play the video with captions; pause at “Spot the bug”.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone types the friendly greeter. Thumbs check: “Did your greeter say your name?”' },
      { minutes: 8, stage: 'Challenge, predict and sort', doing: 'Greeting bot challenge, then predict-the-output and the variable-name sort. Quick competition: fastest correct sort wins.' },
      { minutes: 15, stage: 'Project in breakout pairs', doing: 'In breakout pairs, each learner builds a Mad Libs story, then swaps and plays their partner’s game using the chat.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the confused greeter”. Ask the winner to explain both bugs out loud.' },
      { minutes: 7, stage: 'Show-and-tell', doing: 'Two or three learners run their Mad Libs live while the class shouts out the words. Vote for the funniest story with emoji reactions.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: favourite colour program.' },
    ],
  },
  files: [{ name: 'friendly_greeter.py', title: 'Build-along: friendly greeter', audience: 'student', content: L2_GREETER }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 3 · Numbers and decisions
// ─────────────────────────────────────────────────────────────
const L3_TICKETS = `# Cinema ticket counter
age = int(input("How old are you? "))

if age < 12:
    print("Child ticket: Rs 100")
elif age < 60:
    print("Adult ticket: Rs 250")
else:
    print("Senior ticket: Rs 150")

print("Enjoy the film!")`;

const L3_SHOP = `# UPI shop calculator
# Made by: Zoya

print("=== KITABASH CORNER SHOP ===")
price = int(input("Price of one item (Rs): "))
qty = int(input("How many? "))
pocket = int(input("Your pocket money (Rs): "))

total = price * qty
print(f"Total: Rs {total}")

# Discount rule: 10% off orders of Rs 500 or more
if total >= 500:
    discount = total * 10 // 100
    print(f"Big order! You save Rs {discount}")
else:
    discount = 0
    print("Spend Rs 500 or more to get 10% off.")

pay = total - discount
print(f"Pay Rs {pay}")

if pocket >= pay:
    change = pocket - pay
    print(f"You can pay with UPI! Left over: Rs {change}")
else:
    need = pay - pocket
    print(f"You need Rs {need} more.")`;

export const P3 = lesson(3, {
  title: 'Numbers and Decisions',
  objective: 'Turn typed answers into numbers with int(), do maths in Python, and make decisions with if, elif and else.',
  concept: 'int, maths, if/elif/else',
  minutes: 60,
  hook: ['code', 'price = 120\nif price > 100:\n    print("Too costly!")', 'Too costly!'],
  intro: 'Today your programs learn to do maths and make decisions, just like a shopkeeper with a calculator.',
  cards: [
    { emoji: '🔢', title: 'int() turns text into a number', body: 'input() always gives text, so "5" plus "3" would make "53". Wrap it in int() to get a real number: int(input("How many? ")). Now you can do maths with it.' },
    { emoji: '➕', title: 'Python is a calculator', body: 'Use + to add, - to subtract, * to multiply and / to divide. Use // for whole-number division and % for the remainder. Python follows BODMAS, just like your maths class.' },
    { emoji: '⚖️', title: 'Comparisons give True or False', body: 'Python compares with < > <= >= and ==, which means “is equal to”. Use != for “is not equal to”. Every comparison is either True or False.' },
    { emoji: '🚦', title: 'if, elif and else', body: 'if runs code only when a comparison is True. elif checks another option, and else catches everything left. The lines inside must be indented by four spaces.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Text or number?',
      lang: 'python',
      code: 'a = input("First number: ")\nb = input("Second number: ")\nprint(a + b)\nprint(int(a) + int(b))',
      output: 'First number: 5\nSecond number: 3\n53\n8',
      say: ['Watch what happens when we add two answers from input.', 'Without int we get fifty-three, because text just sticks together. With int we get eight.'],
    },
    {
      kind: 'code',
      heading: 'Shopkeeper maths',
      lang: 'python',
      code: 'price = 40\nqty = 3\ntotal = price * qty\nprint("Total:", total)\nprint("Each friend pays:", total // 2)',
      output: 'Total: 120\nEach friend pays: 60',
      say: ['Three samosas at forty rupees each cost one hundred and twenty rupees.', 'Two friends share the bill, so double slash divides it into whole rupees.'],
    },
    {
      kind: 'code',
      heading: 'Make a decision',
      lang: 'python',
      code: 'runs = int(input("Runs scored? "))\nif runs >= 100:\n    print("Century!")\nelif runs >= 50:\n    print("Half century!")\nelse:\n    print("Keep batting!")',
      output: 'Runs scored? 67\nHalf century!',
      say: ['Python checks the first condition, and sixty-seven is not one hundred or more.', 'Then elif checks fifty or more, which is True, so we see Half century.', 'Notice the colon at the end and the four spaces before each print.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'money = input("Pocket money? ")\nif money > 100:\n    print("Party time!")',
      output: 'Pocket money? 150\nTypeError: \'>\' not supported between instances of \'str\' and \'int\'',
      say: ['Python cannot compare text with a number, so it shows a TypeError.', 'The fix is to wrap the input in int, so money becomes a real number.'],
    },
  ],
  build: {
    title: 'Build along: cinema ticket counter',
    intro: 'Type along in the Python Lab. Your counter will choose the right ticket for any age.',
    steps: [
      { title: 'Ask for the age as a number', text: 'Type age = int(input("How old are you? ")). Count the brackets: two open and two close.' },
      { title: 'First decision', text: 'Type if age < 12: and press Enter. On the indented line type print("Child ticket: Rs 100").', tip: 'The Python Lab indents for you after a colon. If not, press space four times.' },
      { title: 'Add elif', text: 'Go back to the left edge and type elif age < 60: with print("Adult ticket: Rs 250") indented underneath.' },
      { title: 'Add else', text: 'Type else: and indent print("Senior ticket: Rs 150").' },
      { title: 'Test the edges', text: 'Run it with 8, 12, 59 and 60. Which ticket does 12 get? Was that what you expected?', tip: 'Testing the edge numbers finds the sneakiest bugs.' },
    ],
  },
  acts: [
    {
      py: 'Cinema ticket counter. Ask the age with int(input(...)). Under 12 gets a Child ticket for Rs 100, under 60 gets an Adult ticket for Rs 250, and everyone else gets a Senior ticket for Rs 150. Print the ticket type and price.',
      title: 'Python Lab: ticket counter',
      starter: 'age = int(input("How old are you? "))\nprint("Adult ticket: Rs 250")\n',
      inputs: ['30'],
      goals: [
        ['Age 8 gets a child ticket', { t: 'output', contains: ['child', '100'], inputs: ['8'], msg: 'Under 12: print Child ticket: Rs 100.' }],
        ['Age 30 gets an adult ticket', { t: 'output', contains: ['adult', '250'], inputs: ['30'], msg: 'Under 60: print Adult ticket: Rs 250.' }],
        ['Age 65 gets a senior ticket', { t: 'output', contains: ['senior', '150'], inputs: ['65'], msg: 'Everyone else: print Senior ticket: Rs 150.' }],
        ['Uses if, elif and else', { t: 'uses', what: ['if', 'elif', 'else'], msg: 'Use if, then elif, then else.' }],
      ],
      solution: L3_TICKETS,
      explain: 'Python checks each condition from the top and runs only the first one that is True.',
      hints: ['Start with if age < 12: and indent the print under it.', 'The order matters: check < 12 before < 60.'],
    },
    {
      code: 'runs = 48\nif runs >= 50:\n    print("Half century!")\nelse:\n    print("Keep going!")\nprint("Next ball...")',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['Keep going! then Next ball...', 'Half century! then Next ball...', 'Only Keep going!', 'Half century! then Keep going!'],
      answer: 0,
      why: '48 is not 50 or more, so else runs. The last print is not indented, so it always runs.',
      title: 'Predict the output: half century?',
    },
    {
      match: 'Match each symbol to what it means',
      pairs: [
        ['*', 'Multiply'],
        ['//', 'Divide into a whole number'],
        ['%', 'The remainder after dividing'],
        ['==', 'Is equal to?'],
        ['!=', 'Is not equal to?'],
        ['>=', 'Is more than or equal to?'],
      ],
      why: 'Single = stores a value, double == compares two values.',
    },
    {
      py: 'Project: UPI shop calculator. Ask for the price of one item, how many, and the user’s pocket money (all with int). Work out the total. Discount rule: if the total is Rs 500 or more, take off 10% (use total * 10 // 100). Print `Pay Rs ...`. If the pocket money is enough, say they can pay with UPI; if not, print `You need Rs ... more.`',
      title: 'Project: UPI shop calculator',
      mode: 'project',
      starter: '# UPI shop calculator\n# Made by: (your name)\n\nprice = int(input("Price of one item (Rs): "))\n# ask for qty and pocket money\n\n# work out the total and the discount\n',
      inputs: ['120', '5', '600'],
      goals: [
        ['Big order gets 10% off', { t: 'output', contains: ['Pay Rs 540'], inputs: ['120', '5', '600'], msg: '120 × 5 = 600, minus 10% (60) means Pay Rs 540.' }],
        ['Small order pays full price', { t: 'output', contains: ['Pay Rs 150'], inputs: ['50', '3', '500'], msg: '50 × 3 = 150 is under 500, so no discount: Pay Rs 150.' }],
        ['Says how much more is needed', { t: 'output', contains: ['Rs 50 more'], inputs: ['50', '3', '100'], msg: 'With Rs 100 and a bill of Rs 150, print: You need Rs 50 more.' }],
        ['Uses if and else', { t: 'uses', what: ['if', 'else', 'input'], msg: 'Use if/else for the discount rule and the pocket-money check.' }],
      ],
      solution: L3_SHOP,
      requirements: ['Asks for price, quantity and pocket money with int(input())', 'Works out the total with *', 'Gives 10% off when the total is Rs 500 or more', 'Prints Pay Rs … with the final amount', 'Says whether the pocket money is enough, or how much more is needed'],
      reflection: 'Which numbers did you test with, and did any test show a bug you had to fix?',
      explain: 'Your calculator does maths AND makes decisions, just like a real billing app.',
      hints: ['total = price * qty, then discount = total * 10 // 100 inside the if.', 'Use an f-string for the money lines: print(f"Pay Rs {pay}").'],
    },
    {
      py: 'Debug it! This pocket-money checker should print `Party time!` for 150 and `Save up!` for 40. It has three bugs: one about numbers, one about a colon and one about spaces. Fix them all.',
      title: 'Debug it: the pocket-money checker',
      phase: 'probe',
      starter: 'money = input("Pocket money? ")\nif money > 100\nprint("Party time!")\nelse:\n    print("Save up!")\n',
      inputs: ['150'],
      goals: [
        ['150 means party time', { t: 'output', contains: ['Party time!'], inputs: ['150'], msg: 'With 150, print Party time!' }],
        ['40 means save up', { t: 'output', contains: ['Save up!'], notContains: ['Party'], inputs: ['40'], msg: 'With 40, print only Save up!' }],
      ],
      solution: 'money = int(input("Pocket money? "))\nif money > 100:\n    print("Party time!")\nelse:\n    print("Save up!")\n',
      explain: 'int() makes the answer a number, the colon starts the if block, and the indent puts print inside it.',
      hints: ['Every if line ends with a colon.', 'The print under if needs four spaces in front. And input() gives text: wrap it in int().'],
    },
  ],
  teacher: {
    explain: 'input() always returns text, so before we do maths we convert it with int(). Python can add, subtract, multiply and divide, and // gives whole-number answers that are perfect for rupees. A comparison like total >= 500 is either True or False. if runs its indented block only when the comparison is True; elif tries another test; else catches everything else. Python checks from the top and stops at the first True one.',
    analogy: 'if/elif/else is like a railway signal at a junction: the train checks each signal in order and takes the first track that shows green.',
    vocab: [
      ['int()', 'Turns text like "42" into the number 42.'],
      ['operator', 'A maths symbol such as +, -, *, / or //.'],
      ['condition', 'A test that is True or False, like age < 12.'],
      ['if / elif / else', 'Run different code depending on conditions.'],
      ['indent', 'The four spaces that show which lines belong inside the if.'],
      ['==', 'Compares two values: is equal to?'],
    ],
    demo: '1) Type a = input("First number: ") and b = input("Second number: ") then print(a + b). Run with 5 and 3 and show 53. Ask why. 2) Change it to print(int(a) + int(b)) and run again: 8. 3) Type price = 40, qty = 3, total = price * qty, print(total). Then try total // 2 and total % 7 and ask the class to predict. 4) Type runs = int(input("Runs? ")), then if runs >= 50: with an indented print("Half century!"), then else: print("Keep batting!"). Run with 67 and 12. 5) Remove the colon and run to show the SyntaxError, then remove the indent and run to show the IndentationError. Fix both.',
    unplugged: 'Human If-Statement (5 min game): the teacher reads out a rule such as “if your birthday is in a monsoon month (June to September), stand up; elif it is in winter, raise your hand; else, clap.” Learners act it out. Then a learner makes up the next rule using if, elif and else.',
    prompts: [
      ['Why does "5" + "3" give 53?', 'They are strings, so + joins them together.'],
      ['What does 17 // 5 give? And 17 % 5?', '3 and 2.'],
      ['What is the difference between = and ==?', '= stores a value; == compares two values.'],
      ['If age is 12, which ticket does age < 12 give?', 'Not child, because 12 is not less than 12.'],
      ['What must go at the end of an if line?', 'A colon.'],
    ],
    support: 'Give a printed if/elif/else skeleton with the colons and indents already there; learners fill in the conditions and messages.',
    stretch: 'Add a “Diwali sale” rule: orders of Rs 1000 or more get 20% off, checked before the 10% rule with elif.',
    mis: [
      ['input() already gives a number', 'It gives text. Wrap it in int() before doing maths.'],
      ['= and == mean the same', '= stores; == compares.'],
      ['Python checks every elif even after one is True', 'Python stops at the first True condition.'],
      ['Indentation is just for neatness', 'Indentation tells Python which lines belong inside the if.'],
    ],
    successCriteria: ['I can turn input into a number with int().', 'I can do maths with + - * / // and %.', 'I can use if, elif and else to make a decision.', 'I can test my program with edge numbers.'],
    homework: 'Use your shop calculator to price a real shopping list with someone at home. Add a rule of your own, such as free delivery over Rs 300.',
    exit: 'What does this print: x = 7, then if x > 5: print("Big") else: print("Small")?',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human If-Statement', doing: 'Play Human If-Statement (unplugged): learners stand, raise hands or clap by the rules. Two learners invent rules.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Poll: “Is Rs 120 too costly? What decides?” Play the video with captions; pause on the 53 vs 8 scene and ask why.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone builds the cinema ticket counter. Thumbs check: “Test with 12. Thumbs up if you get Adult.”' },
      { minutes: 8, stage: 'Challenge, predict and match', doing: 'Ticket counter challenge, predict-the-output and symbol match. Quick competition: first to answer 17 // 5 and 17 % 5 in the chat.' },
      { minutes: 15, stage: 'Project in breakout pairs', doing: 'Breakout pairs build the UPI shop calculator. One partner is the shopkeeper and tests with real prices; then swap.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the pocket-money checker”: three bugs. First to explain all three wins.' },
      { minutes: 7, stage: 'Show-and-tell', doing: 'Volunteers run their shop calculator while the class calls out prices. Did the discount rule work?' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Thumbs check on each success criterion. Exit ticket: Big or Small?' },
    ],
  },
  files: [{ name: 'ticket_counter.py', title: 'Build-along: cinema ticket counter', audience: 'student', content: L3_TICKETS }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 4 · Project: Quiz Show
// ─────────────────────────────────────────────────────────────
const L4_ONEQ = `# One quiz question
score = 0
answer = input("Which planet is called the Red Planet? ")
answer = answer.strip().lower()

if answer == "mars":
    print("Correct! +1 point")
    score = score + 1
else:
    print("Not quite. The answer is Mars.")

print(f"Score: {score}")`;

const L4_QUIZ = `# Quiz Show: India and the World
# Made by: Riya

score = 0
print("=== WELCOME TO THE KITABASH QUIZ SHOW ===")
print("5 questions. 1 point each. Good luck!")
print()

# Question 1
answer = input("1. How many players are in a cricket team? ")
if answer.strip() == "11":
    print("Correct!")
    score += 1
else:
    print("Not quite. It is 11.")

# Question 2
answer = input("2. Which planet is called the Red Planet? ")
if answer.strip().lower() == "mars":
    print("Correct!")
    score += 1
else:
    print("Not quite. It is Mars.")

# Question 3
answer = input("3. What is 12 x 12? ")
if answer.strip() == "144":
    print("Correct!")
    score += 1
else:
    print("Not quite. It is 144.")

# Question 4
answer = input("4. Which festival is called the festival of lights? ")
if answer.strip().lower() == "diwali":
    print("Correct!")
    score += 1
else:
    print("Not quite. It is Diwali.")

# Question 5
answer = input("5. Which animal is India's national animal? ")
if answer.strip().lower() == "tiger":
    print("Correct!")
    score += 1
else:
    print("Not quite. It is the tiger.")

print()
print(f"Final score: {score} out of 5")
if score == 5:
    print("Grade: Quiz Champion!")
elif score >= 3:
    print("Grade: Star Player")
elif score >= 1:
    print("Grade: Good Try")
else:
    print("Grade: Keep Practising")`;

export const P4 = lesson(4, {
  title: 'Project: Quiz Show',
  objective: 'Build a five-question quiz game that keeps score, gives feedback on every answer and awards a final grade.',
  concept: 'score variables and decisions',
  minutes: 60,
  hook: ['code', 'score = 0\nscore += 1\nprint("Score:", score)', 'Score: 1'],
  cards: [
    { emoji: '🏆', title: 'A score variable', body: 'Start with score = 0 before the first question. Each time the player is right, add one with score += 1. At the end, the variable holds the total.' },
    { emoji: '✅', title: 'Check every answer', body: 'Each question is an input() followed by an if and an else. The if gives the point and says Correct. The else kindly shows the right answer.' },
    { emoji: '🔡', title: 'Accept DELHI, delhi and Delhi', body: 'Players type in different ways. answer.lower() makes the answer small letters, and .strip() removes extra spaces. Then one comparison catches them all.' },
    { emoji: '🎓', title: 'A final grade', body: 'After the last question, use if, elif and else on the score. Five gets Quiz Champion, three or more gets Star Player, and so on.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Keep the score',
      lang: 'python',
      code: 'score = 0\nscore = score + 1\nscore += 1\nprint("Score:", score)',
      output: 'Score: 2',
      say: ['The score starts at zero, like a fresh scoreboard before a match.', 'Both lines add one, and plus equals is just a shorter way to write it.'],
    },
    {
      kind: 'code',
      heading: 'One question, two endings',
      lang: 'python',
      code: 'score = 0\nanswer = input("Red Planet? ").strip().lower()\nif answer == "mars":\n    print("Correct!")\n    score += 1\nelse:\n    print("Not quite. It is Mars.")',
      output: 'Red Planet?  MARS\nCorrect!',
      say: ['The player typed MARS in capitals with an extra space.', 'strip and lower clean it up to mars, so the answer still counts.'],
    },
    {
      kind: 'code',
      heading: 'Award the grade',
      lang: 'python',
      code: 'score = 4\nif score == 5:\n    print("Quiz Champion!")\nelif score >= 3:\n    print("Star Player")\nelse:\n    print("Keep Practising")',
      output: 'Star Player',
      say: ['With a score of four, the first test is False, but the elif is True.', 'Always put the biggest score first, or everyone becomes a Star Player.'],
    },
    {
      kind: 'steps',
      heading: 'Plan, build, test, share',
      tool: 'Python Lab',
      steps: ['Write your 5 questions and answers on paper', 'Type score = 0 at the top', 'Build one question and test it', 'Copy the pattern for questions 2 to 5', 'Add the final score and grade', 'Swap with a friend and play'],
      say: ['Good coders plan before they type. Write your questions on paper first.', 'Build one question, test it, then copy the pattern for the rest.'],
    },
  ],
  build: {
    title: 'Build along: one perfect question',
    intro: 'Build one question together. Your quiz will copy this pattern five times.',
    steps: [
      { title: 'Start the score', text: 'Type score = 0 on line 1.' },
      { title: 'Ask the question', text: 'Type answer = input("Which planet is called the Red Planet? ").' },
      { title: 'Clean the answer', text: 'On the next line type answer = answer.strip().lower() so MARS and Mars both become mars.' },
      { title: 'Check it', text: 'Type if answer == "mars": then indent print("Correct! +1 point") and score = score + 1. Add else: with print("Not quite. The answer is Mars.").', tip: 'Compare with the small-letter answer, because you used lower().' },
      { title: 'Show the score', text: 'At the left edge type print(f"Score: {score}"). Test it with MARS, mars and Venus.' },
    ],
  },
  acts: [
    {
      py: 'One perfect question. Start with score = 0. Ask “Which planet is called the Red Planet?”. If the answer is mars (in any capitals, with or without extra spaces), print Correct and add 1 to score. Otherwise, print the right answer. Finally print the score.',
      title: 'Python Lab: one perfect question',
      starter: 'score = 0\nanswer = input("Which planet is called the Red Planet? ")\n# check the answer and update the score\n',
      inputs: ['MARS'],
      goals: [
        ['MARS scores a point', { t: 'var', name: 'score', equals: 1, inputs: ['MARS'], msg: 'Use .lower() so MARS counts, then add 1 to score.' }],
        ['“ mars ” with spaces scores a point', { t: 'var', name: 'score', equals: 1, inputs: [' mars '], msg: 'Use .strip() to remove extra spaces.' }],
        ['Venus scores nothing', { t: 'var', name: 'score', equals: 0, inputs: ['Venus'], msg: 'A wrong answer must not add a point.' }],
        ['Says Correct for a right answer', { t: 'output', contains: ['correct'], inputs: ['Mars'], msg: 'Print a message with the word Correct.' }],
        ['Uses if and else', { t: 'uses', what: ['if', 'else'], msg: 'Use if for the right answer and else for a wrong one.' }],
      ],
      solution: L4_ONEQ,
      explain: 'One question, cleaned answer, two endings and a score. Now you can copy it five times!',
      hints: ['After input, add answer = answer.strip().lower().', 'Inside the if: print("Correct!") and score = score + 1.'],
    },
    {
      code: 'score = 0\nscore += 1\nscore += 1\nscore = score + 2\nprint("Score:", score)',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['Score: 4', 'Score: 2', 'Score: 1', 'Score: score'],
      answer: 0,
      why: 'Start at 0, add 1, add 1 more, then add 2. That makes 4.',
      title: 'Predict the output: score keeper',
    },
    {
      order: 'Put the steps of a quiz program in order',
      steps: ['Set score = 0', 'Ask a question with input()', 'Clean the answer with .strip().lower()', 'Check it with if / else and add 1 if right', 'Repeat for every question', 'Print the final score and grade'],
      why: 'The score must start at 0 before any question, and the grade can only be given at the very end.',
      title: 'Plan the quiz',
    },
    {
      py: 'Project: the Quiz Show! Make a 5-question quiz on any topic you love (cricket, space, food, Bollywood, maths…). Use a variable called score that starts at 0. After each answer, say Correct or show the right answer. At the end print the final score out of 5 and a grade using if / elif / else.',
      title: 'Project: Quiz Show',
      mode: 'project',
      starter: '# Quiz Show\n# Made by: (your name)\n\nscore = 0\nprint("=== WELCOME TO MY QUIZ SHOW ===")\n\n# Question 1\nanswer = input("1. ")\n\n# Add questions 2 to 5, then the final grade\n',
      inputs: ['0', '0', '0', '0', '0'],
      goals: [
        ['Runs for 5 answers', { t: 'noError', inputs: ['0', '0', '0', '0', '0'], msg: 'Ask exactly 5 questions with input().' }],
        ['Wrong answers score 0', { t: 'var', name: 'score', equals: 0, inputs: ['0', '0', '0', '0', '0'], msg: 'Use a variable called score that starts at 0 and only goes up for right answers.' }],
        ['Shows the final score', { t: 'output', contains: ['score'], inputs: ['0', '0', '0', '0', '0'], msg: 'Print the final score at the end.' }],
        ['Uses if, elif and else', { t: 'uses', what: ['input', 'if', 'elif', 'else'], msg: 'Check answers with if/else and give the grade with if/elif/else.' }],
      ],
      solution: L4_QUIZ,
      requirements: ['5 questions on a topic you choose', 'A score variable that starts at 0', 'Feedback after every answer (Correct, or the right answer)', 'Answers work in any capitals (use .lower())', 'A final score out of 5 and a grade with if / elif / else', 'A title screen and a “Made by” comment'],
      reflection: 'Who played your quiz? Which question did they find hardest, and would you change it?',
      explain: 'You built a complete game show! Host it for your family tonight.',
      hints: ['Build and test question 1 first. Then copy and paste it four times and change the words.', 'Put the grade if/elif/else at the very end, after all five questions. Biggest score first!'],
    },
    {
      py: 'Debug it! This grade calculator gives “Good try” to everyone, even a perfect 5. Fix the order of the checks so 5 gets `Quiz Champion`, 4 gets `Star`, 2 or 3 gets `Good try`, and add an else that prints `Keep practising` for 0 or 1.',
      title: 'Debug it: the unfair grade calculator',
      phase: 'probe',
      starter: 'score = int(input("Score out of 5? "))\nif score >= 2:\n    print("Grade: Good try")\nelif score >= 4:\n    print("Grade: Star")\nelif score == 5:\n    print("Grade: Quiz Champion")\n',
      inputs: ['5'],
      goals: [
        ['5 gets Quiz Champion', { t: 'output', contains: ['Quiz Champion'], notContains: ['Good try', 'Star'], inputs: ['5'], msg: 'Check score == 5 first.' }],
        ['4 gets Star', { t: 'output', contains: ['Star'], notContains: ['Good try'], inputs: ['4'], msg: 'Check score >= 4 before score >= 2.' }],
        ['2 gets Good try', { t: 'output', contains: ['Good try'], inputs: ['2'], msg: 'Score 2 or 3 should print Good try.' }],
        ['0 gets Keep practising', { t: 'output', contains: ['Keep practising'], inputs: ['0'], msg: 'Add an else at the end.' }],
      ],
      solution: 'score = int(input("Score out of 5? "))\nif score == 5:\n    print("Grade: Quiz Champion")\nelif score >= 4:\n    print("Grade: Star")\nelif score >= 2:\n    print("Grade: Good try")\nelse:\n    print("Grade: Keep practising")\n',
      explain: 'Python stops at the first True condition, so the hardest-to-reach grade must be checked first.',
      hints: ['With score 5, is score >= 2 True? Then Python never looks further.', 'Reverse the order: == 5 first, then >= 4, then >= 2, then else.'],
    },
  ],
  teacher: {
    explain: 'Today learners combine everything from Module 1 into one complete game. A score variable starts at 0 and grows with score += 1 when an answer is right. Each question is the same pattern: input, clean with .strip().lower(), if/else with feedback. The final grade uses if/elif/else, and the order matters because Python stops at the first True condition. Encourage learners to build and test ONE question before copying the pattern.',
    analogy: 'The score variable is like the runs board at a cricket ground: it starts at 0, the scorer adds runs after every ball, and you read the total at the end of the innings.',
    vocab: [
      ['score variable', 'A variable that counts points during a game.'],
      ['+=', 'Adds to a variable: score += 1 means score = score + 1.'],
      ['.lower()', 'Turns text into small letters.'],
      ['.strip()', 'Removes extra spaces from the start and end of text.'],
      ['feedback', 'A message that tells the player how they did.'],
      ['pattern', 'A piece of code you can copy and reuse with small changes.'],
    ],
    demo: '1) Type score = 0 and print(score); run it. 2) Add score += 1 twice and run: ask what changed. 3) Type answer = input("Which planet is called the Red Planet? ") then if answer == "mars": print("Correct!"). Run it and type MARS: point out that nothing prints. 4) Add answer = answer.strip().lower() under the input, run again with MARS: now it works. 5) Add the else and the score line. 6) Type the grade block with if score >= 1 first, set score = 5, run, and show the wrong grade; then reorder to check == 5 first.',
    unplugged: 'Human Quiz Machine (5 min game): one learner is the “program”. They ask a quiz question, hold up a scorecard starting at 0, and must say exactly “Correct! +1” or “Not quite. It is …” and update the card. The class tries to trick them with answers like “MaRs” and “ mars ” — should those count? Leads into .lower() and .strip().',
    prompts: [
      ['Why must score = 0 come before the first question?', 'So the score exists and starts at zero before we add to it.'],
      ['What does score += 1 mean?', 'Add one to score.'],
      ['Why use .lower() on the answer?', 'So MARS, Mars and mars all match "mars".'],
      ['Why check score == 5 before score >= 3?', 'Python stops at the first True test; 5 is also >= 3.'],
      ['How can you test your quiz quickly?', 'Run it once with all right answers and once with all wrong answers.'],
    ],
    support: 'Provide the one-question file (download) so learners copy-paste the pattern and only change the question and answer. Allow 3 questions as a first goal.',
    stretch: 'Add a bonus round: ask if they want a bonus question with yes/no, and give 2 points for it. Or show the percentage with score * 100 // 5.',
    mis: [
      ['score + 1 on its own line adds a point', 'You must store it: score = score + 1 or score += 1.'],
      ['Putting score = 0 inside each question is fine', 'That resets the score every time. Put it once at the top.'],
      ['"Mars" == "mars" is True', 'Capitals matter. Use .lower() first.'],
      ['The order of elif checks does not matter', 'Python stops at the first True one, so check the highest grade first.'],
    ],
    successCriteria: ['I can keep score with a variable and +=.', 'I can check answers with if / else and give feedback.', 'I can accept answers in any capitals with .lower() and .strip().', 'I can give a final grade with if / elif / else in the right order.'],
    homework: 'Host your Quiz Show for two people at home. Write down their scores and one question they found too easy, then make it harder.',
    exit: 'A player scores 5. Your grade code checks score >= 3 first, then score == 5. Which grade do they get, and how do you fix it?',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human Quiz Machine', doing: 'Play Human Quiz Machine (unplugged). The class tries tricky answers like “MaRs”. Discuss: should they count?' },
      { minutes: 5, stage: 'Hook, video and plan', doing: 'Show the hook, play the project video with captions. Thumbs poll: “Who knows their quiz topic already?” Learners write 5 questions and answers on paper.' },
      { minutes: 8, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone builds “one perfect question” and tests it with MARS, mars and Venus.' },
      { minutes: 5, stage: 'Predict and plan', doing: 'Predict-the-output and the ordering activity. Quick competition: first to the correct order wins a point for their team.' },
      { minutes: 18, stage: 'Build the Quiz Show', doing: 'Learners build the full Quiz Show. Halfway check-in: everyone has at least two questions working. Teacher visits breakout rooms.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the unfair grade calculator”. The winner explains why order matters.' },
      { minutes: 9, stage: 'Quiz swap and show-and-tell', doing: 'Pairs in breakout rooms play each other’s quiz and give two stars and a wish. Back together, two learners host their quiz live for the whole class.' },
      { minutes: 4, stage: 'Submit and exit ticket', doing: 'Learners submit the project with a reflection. Exit ticket on the grade order question.' },
    ],
  },
  project: {
    title: 'Quiz Show',
    brief: 'Build a five-question quiz game on a topic you love. It keeps score, gives feedback after every answer and awards a final grade.',
    requirements: ['5 questions on one topic', 'A score variable that starts at 0 and goes up with +=', 'Feedback after every answer', 'Answers accepted in any capitals with .lower()', 'Final score out of 5 and a grade with if / elif / else', 'A title screen and a “Made by” comment'],
    milestones: ['Questions and answers written on paper', 'Question 1 works and is tested with right and wrong answers', 'All 5 questions work and the score adds up', 'Final grade works for scores 0, 3 and 5; a friend has played it'],
    rubric: [
      { criterion: 'Program works', levels: ['Crashes or fewer than 3 questions run', '3–4 questions run; score sometimes wrong', 'All 5 questions run and the score is always right', 'Works perfectly and handles odd answers like extra spaces'] },
      { criterion: 'Decisions and score', levels: ['No if/else or no score', 'if/else on some questions', 'if/else on every question and a correct final grade', 'Grade order is correct and explained; adds a bonus or percentage'] },
      { criterion: 'Player experience', levels: ['No feedback to the player', 'Says right or wrong only', 'Kind feedback that shows the right answer', 'Fun title screen, clear questions and a celebration at the end'] },
      { criterion: 'Code quality and testing', levels: ['Hard to read; never tested', 'Some comments; tested once', 'Comments for each question; tested with right and wrong answers', 'Neat, well named, and tested by another player with changes made'] },
    ],
    extensions: ['Add a bonus question worth 2 points', 'Show the score as a percentage with score * 100 // 5', 'Give the player a second chance on one question before showing the answer'],
  },
  files: [{ name: 'one_question.py', title: 'Build-along: one perfect question', audience: 'student', content: L4_ONEQ }],
});
