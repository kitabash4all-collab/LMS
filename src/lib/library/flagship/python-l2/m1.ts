// Python Game Coders · Level 2 · Module 1 — Functions and graphics. Project: Turtle Art Studio.
import { lesson } from '../kit.ts';

// ─────────────────────────────────────────────────────────────
// Lesson 1 · Functions that give answers back
// ─────────────────────────────────────────────────────────────
const L1_HELPERS = `# Cricket helper functions
def strike_rate(runs, balls):
    return round(runs * 100 / balls, 2)

def boundary_runs(fours, sixes):
    return fours * 4 + sixes * 6

sr = strike_rate(45, 30)
print("Strike rate:", sr)
print("Runs from boundaries:", boundary_runs(5, 2))

if sr > 120:
    print("Fast scorer!")
else:
    print("Steady scorer.")`;

const L1_CALC = `# Cricket score calculator
# Made by: Kabir

def strike_rate(runs, balls):
    return round(runs * 100 / balls, 2)

def run_rate(runs, overs):
    return round(runs / overs, 2)

def verdict(sr):
    if sr >= 150:
        return "Explosive batting!"
    elif sr >= 100:
        return "Good, quick scoring."
    else:
        return "Steady innings."

print("=== KITABASH CRICKET CALCULATOR ===")
runs = int(input("Batter's runs: "))
balls = int(input("Balls faced: "))
sr = strike_rate(runs, balls)
print(f"Strike rate: {sr}")
print(verdict(sr))

team_runs = int(input("Team total runs: "))
overs = int(input("Overs played: "))
print(f"Run rate: {run_rate(team_runs, overs)} runs per over")`;

export const P1 = lesson(1, {
  title: 'Functions That Give Answers Back',
  objective: 'Write your own functions with several parameters and a return value, and use them to build a cricket score calculator.',
  concept: 'parameters and return',
  minutes: 60,
  hook: ['code', 'def double(n):\n    return n * 2\n\nprint(double(21))', '42'],
  intro: 'Welcome to Level 2! Today your functions stop just printing and start giving answers back, like a real calculator.',
  cards: [
    { emoji: '🎁', title: 'Parameters are the inputs', body: 'A parameter is a name inside the brackets of def, like def strike_rate(runs, balls). When you call the function you pass in values, called arguments. Inside the function they work just like variables.' },
    { emoji: '↩️', title: 'return gives an answer back', body: 'return sends a value back to the line that called the function. You can store it, print it or use it in more maths. A function with no return gives back None, which means nothing.' },
    { emoji: '🧮', title: 'Write the formula once', body: 'Put a formula inside a function and use it for every player. strike_rate(45, 30) and strike_rate(80, 50) run the same code. Fix a bug once and every use is fixed.' },
    { emoji: '🎛️', title: 'Default values', body: 'A parameter can have a default value, like overs=20. If you leave it out when you call the function, Python uses 20. If you pass a value, your value wins.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Two inputs, one answer',
      lang: 'python',
      code: 'def strike_rate(runs, balls):\n    return runs * 100 / balls\n\nsr = strike_rate(45, 30)\nprint("Strike rate:", sr)',
      output: 'Strike rate: 150.0',
      say: ['This function takes two parameters, the runs and the balls faced.', 'The return line sends the answer back, and we store it in a variable called sr.'],
    },
    {
      kind: 'code',
      heading: 'print shows, return gives back',
      lang: 'python',
      code: 'def shout(word):\n    print(word.upper())\n\ndef louder(word):\n    return word.upper() + "!"\n\na = shout("chak de")\nb = louder("chak de")\nprint(a)\nprint(b)',
      output: 'CHAK DE\nNone\nCHAK DE!',
      say: ['The first function only prints, so it gives nothing back and a holds None.', 'The second function returns its answer, so b holds the shout and we can use it later.'],
    },
    {
      kind: 'code',
      heading: 'Use the answer again',
      lang: 'python',
      code: 'def boundary_runs(fours, sixes):\n    return fours * 4 + sixes * 6\n\ntotal = boundary_runs(5, 2) + 7\nprint("Total runs:", total)',
      output: 'Total runs: 39',
      say: ['Five fours and two sixes make thirty-two runs from boundaries.', 'Because the function returns a number, we can add seven singles straight onto it.'],
    },
    {
      kind: 'code',
      heading: 'A default value',
      lang: 'python',
      code: 'def run_rate(runs, overs=20):\n    return round(runs / overs, 2)\n\nprint(run_rate(180))\nprint(run_rate(96, 12))',
      output: '9.0\n8.0',
      say: ['When we leave out the overs, Python uses the default of twenty overs.', 'When we pass twelve, our value replaces the default for that call.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'def double(n):\n    n * 2\n\nprint(double(21))',
      output: 'None',
      say: ['The function works out the answer, but it never sends it back.', 'Without the word return, the function gives back None. Add return and you get forty-two.'],
    },
  ],
  build: {
    title: 'Build along: cricket helper functions',
    intro: 'Open the Python Lab and type along. You will keep these helper functions and reuse them in your project.',
    steps: [
      { title: 'Define strike_rate', text: 'Type def strike_rate(runs, balls): and on the indented line return round(runs * 100 / balls, 2).', tip: 'round(x, 2) keeps two numbers after the decimal point.' },
      { title: 'Call it and store the answer', text: 'At the left edge type sr = strike_rate(45, 30) and print("Strike rate:", sr). Run it: you should see 150.0.' },
      { title: 'A second function', text: 'Type def boundary_runs(fours, sixes): with return fours * 4 + sixes * 6. Print boundary_runs(5, 2).' },
      { title: 'Use the answer in a decision', text: 'Type if sr > 120: with print("Fast scorer!") indented, and an else with print("Steady scorer.").' },
      { title: 'Test with real numbers', text: 'Change the numbers to a famous innings you know, or one from your school match, and run it again.', tip: 'Test a case you can check in your head, like 50 runs from 50 balls (strike rate 100).' },
    ],
  },
  acts: [
    {
      py: 'Write a function total_runs(fours, sixes, singles) that RETURNS the total runs: 4 for each four, 6 for each six and 1 for each single. Then print total_runs(2, 1, 3), which should show 17.',
      title: 'Python Lab: total runs function',
      starter: 'def total_runs(fours, sixes, singles):\n    runs = fours * 4 + sixes * 6 + singles\n    print(runs)\n\nprint(total_runs(2, 1, 3))\n',
      goals: [
        ['Returns the right total', { t: 'func', name: 'total_runs', cases: [{ args: [2, 1, 3], expect: 17 }, { args: [0, 0, 5], expect: 5 }, { args: [4, 2, 0], expect: 28 }], msg: 'total_runs must RETURN fours * 4 + sixes * 6 + singles.' }],
        ['Prints 17', { t: 'output', contains: ['17'], notContains: ['None'], msg: 'Print the answer of total_runs(2, 1, 3). It should not say None.' }],
        ['Uses def and return', { t: 'uses', what: ['def', 'return'], msg: 'Use return inside the function instead of print.' }],
      ],
      solution: 'def total_runs(fours, sixes, singles):\n    runs = fours * 4 + sixes * 6 + singles\n    return runs\n\nprint(total_runs(2, 1, 3))\n',
      explain: 'Swapping print for return turns your function into a mini calculator whose answer you can use anywhere.',
      hints: ['The starter prints inside the function, so the last line prints None. Change print(runs) to return runs.', 'Check: 2 fours (8) + 1 six (6) + 3 singles (3) = 17.'],
    },
    {
      code: 'def add_bonus(score):\n    return score + 10\n\nx = add_bonus(5)\nprint(x * 2)',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['30', '15', '25', '20'],
      answer: 0,
      why: 'add_bonus(5) returns 15, so x is 15, and 15 × 2 = 30.',
      title: 'Predict the output: bonus points',
    },
    {
      match: 'Match each function word to its meaning',
      pairs: [
        ['def', 'Starts a new function'],
        ['parameter', 'A name in the def brackets that receives a value'],
        ['argument', 'The value you pass in when you call it'],
        ['return', 'Sends an answer back to the caller'],
        ['None', 'What you get back when there is no return'],
      ],
      why: 'def creates the function, parameters receive the arguments, and return sends the answer back. No return means None.',
    },
    {
      py: 'Project: Cricket score calculator! Write strike_rate(runs, balls) that returns round(runs * 100 / balls, 2) and run_rate(runs, overs) that returns round(runs / overs, 2). Then ask for a batter’s runs and balls, print `Strike rate: ...`, ask for the team’s runs and overs (whole overs), and print `Run rate: ...`. Add one more function of your own, such as a verdict that returns a comment on the innings.',
      title: 'Project: cricket score calculator',
      mode: 'project',
      starter: '# Cricket score calculator\n# Made by: (your name)\n\ndef strike_rate(runs, balls):\n    # return the strike rate here\n    pass\n\n# write run_rate(runs, overs) here\n\nruns = int(input("Batter\'s runs: "))\n',
      inputs: ['50', '40', '180', '20'],
      goals: [
        ['strike_rate returns the right answer', { t: 'func', name: 'strike_rate', cases: [{ args: [50, 40], expect: 125 }, { args: [33, 20], expect: 165 }, { args: [10, 3], expect: 333.33 }], msg: 'strike_rate(50, 40) should return 125.0. Use return round(runs * 100 / balls, 2).' }],
        ['run_rate returns the right answer', { t: 'func', name: 'run_rate', cases: [{ args: [180, 20], expect: 9 }, { args: [150, 18], expect: 8.33 }], msg: 'run_rate(150, 18) should return 8.33. Use return round(runs / overs, 2).' }],
        ['Prints both rates', { t: 'output', contains: ['Strike rate: 125', 'Run rate: 9'], inputs: ['50', '40', '180', '20'], msg: 'Ask for runs, balls, team runs and overs (in that order), then print Strike rate: … and Run rate: …' }],
        ['Uses functions and input', { t: 'uses', what: ['def', 'return', 'input', 'fstring'], msg: 'Use def and return for the formulas, input() for the numbers and f-strings to print.' }],
      ],
      solution: L1_CALC,
      requirements: ['strike_rate(runs, balls) returns the strike rate', 'run_rate(runs, overs) returns the run rate', 'Asks for the numbers with int(input())', 'Prints both answers with f-strings', 'One extra function of your own (for example a verdict)', 'A title and a “Made by” comment'],
      reflection: 'Which innings did you test your calculator with, and how did you check that the answer was right?',
      explain: 'You built a real cricket stats tool from small, reusable functions. Commentators use exactly these formulas!',
      hints: ['Replace pass with return round(runs * 100 / balls, 2).', 'Copy the strike_rate function, rename it run_rate(runs, overs) and change the formula to runs / overs.'],
    },
    {
      py: 'Debug it! average(a, b, c) should return the average of three scores, so print(average(30, 45, 60)) shows 45.0. It has two bugs. Fix them.',
      title: 'Debug it: the average that vanished',
      phase: 'probe',
      starter: 'def average(a, b, c):\n    total = a + b + C\n    avg = total / 3\n\nprint(average(30, 45, 60))\n',
      goals: [
        ['Returns the average', { t: 'func', name: 'average', cases: [{ args: [30, 45, 60], expect: 45 }, { args: [10, 20, 30], expect: 20 }], msg: 'average must return (a + b + c) / 3.' }],
        ['Prints 45.0', { t: 'output', contains: ['45'], notContains: ['None'], msg: 'The last line should print 45.0, not None.' }],
      ],
      solution: 'def average(a, b, c):\n    total = a + b + c\n    avg = total / 3\n    return avg\n\nprint(average(30, 45, 60))\n',
      explain: 'Bug 1: C and c are different names. Bug 2: without return the answer never leaves the function.',
      hints: ['Read the error: NameError means Python does not know a name. Check capital letters.', 'After you fix the name, you get None. What word sends the answer back?'],
    },
  ],
  teacher: {
    explain: 'In Level 1 learners wrote functions that only printed. Today functions take several parameters and return an answer. Parameters are the names in the def brackets; arguments are the values passed in. return sends a value back to the caller, so it can be stored, printed or used in more maths. A function without return gives back None, which is the most common bug today. Default values like overs=20 make a parameter optional.',
    analogy: 'A function is like a juice stall: you hand over the fruit (arguments), the stall does its work inside, and return hands you back a glass of juice. print would be the stall shouting “juice!” without giving you anything to drink.',
    vocab: [
      ['parameter', 'A name inside the def brackets that receives a value.'],
      ['argument', 'The actual value you pass when you call the function.'],
      ['return', 'Sends a value back to the line that called the function.'],
      ['None', 'Python’s value for “nothing”; what a function gives back with no return.'],
      ['default value', 'A value a parameter uses if you leave it out, like overs=20.'],
      ['strike rate', 'Runs scored per 100 balls: runs × 100 ÷ balls.'],
    ],
    demo: '1) Type def double(n): with return n * 2, then print(double(21)); run: 42. 2) Change return to print(n * 2) and run: point to 42 and then None, and ask where None came from. Put return back. 3) Type def strike_rate(runs, balls): return runs * 100 / balls and call strike_rate(45, 30): 150.0. 4) Swap the arguments to strike_rate(30, 45) and ask why the answer changed: order matters. 5) Add round(..., 2) and try strike_rate(10, 3). 6) Show def run_rate(runs, overs=20): and call it with and without the second argument.',
    unplugged: 'Function Machine (5 min game): the teacher is a “function” with a secret rule (for example return n * 3 + 1). Learners call it out loud with an argument, like “machine of 4!”, and the teacher returns the answer on the whiteboard. The first learner to write the rule as def machine(n): return … wins and becomes the next machine.',
    prompts: [
      ['What is the difference between a parameter and an argument?', 'The parameter is the name in def; the argument is the value you pass when calling.'],
      ['What does a function give back if it has no return?', 'None.'],
      ['Why is return better than print for strike_rate?', 'The answer can be stored and used again, for example in an if or more maths.'],
      ['Does the order of arguments matter?', 'Yes. The first argument goes into the first parameter.'],
      ['What does overs=20 mean in def run_rate(runs, overs=20)?', 'If you leave overs out, it uses 20.'],
    ],
    support: 'Give a template card: def name(a, b): / return a ? b. Let learners write strike_rate first with the formula given, and test it with 50 runs from 50 balls (answer 100).',
    stretch: 'Write required_rate(target, runs, overs_left) that returns the runs per over a team needs to win, and use it to print a chase message.',
    mis: [
      ['print inside a function gives the answer back', 'print only shows it on screen. Use return to give it back.'],
      ['Code after return still runs', 'return ends the function immediately.'],
      ['The argument must have the same name as the parameter', 'Any value or variable can be passed; it is copied into the parameter.'],
      ['Defining a function runs it', 'The function only runs when you call it.'],
    ],
    successCriteria: ['I can write a function with two or more parameters.', 'I can return a value and store it in a variable.', 'I can explain the difference between print and return.', 'I can use a default value for a parameter.'],
    homework: 'Use your calculator on a real match scorecard from the newspaper or a cricket site with someone at home. Add a function economy(runs_given, overs) for bowlers.',
    exit: 'Write a function square(n) that returns n times n, and one line that prints square(9).',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Function Machine', doing: 'Play Function Machine (unplugged). Learners call the machine with arguments and race to guess the rule. Winner becomes the next machine.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Chat poll: “What will double(21) print?” Play the video with captions; pause at “print shows, return gives back” and ask what a holds.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone types the cricket helper functions. Thumbs check after each step: “Do you see 150.0?”' },
      { minutes: 8, stage: 'Challenge, predict and match', doing: 'Total runs function challenge, the predict-the-output and the word match. Quick competition: first three correct predictions in the chat get a “Six!” shout-out.' },
      { minutes: 15, stage: 'Project in breakout pairs', doing: 'Pair programming in breakout rooms: the driver types, the navigator checks every function has return; swap every 5 minutes. Build the cricket score calculator.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the average that vanished”. The first learner to explain both bugs out loud wins.' },
      { minutes: 7, stage: 'Show-and-tell', doing: 'Two or three learners share their screen and run the calculator with a real innings. The class checks one answer with mental maths and gives two stars and a wish.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five poll on the success criteria. Exit ticket: the square(n) function.' },
    ],
  },
  files: [{ name: 'cricket_helpers.py', title: 'Build-along: cricket helper functions', audience: 'student', content: L1_HELPERS }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 2 · Turtle graphics
// ─────────────────────────────────────────────────────────────
const L2_SHAPES = `# Turtle warm-up: shapes with one function
import turtle
t = turtle.Turtle()
t.speed(0)

def draw_polygon(sides, size):
    for i in range(sides):
        t.forward(size)
        t.right(360 / sides)

t.color("red")
draw_polygon(3, 100)
t.color("blue")
draw_polygon(4, 100)
t.color("green")
draw_polygon(6, 60)`;

const L2_RANGOLI = `# Diwali rangoli generator
# Made by: Meera
import turtle
t = turtle.Turtle()
t.speed(0)
turtle.bgcolor("black")

colours = ["orange", "magenta", "yellow", "cyan"]

def draw_polygon(sides, size):
    for i in range(sides):
        t.forward(size)
        t.right(360 / sides)

def petal_ring(count, size):
    for i in range(count):
        t.color(colours[i % len(colours)])
        draw_polygon(6, size)
        t.right(360 / count)

def diya_dots(count, radius):
    for i in range(count):
        t.penup()
        t.forward(radius)
        t.dot(10, "gold")
        t.backward(radius)
        t.pendown()
        t.right(360 / count)

petal_ring(12, 60)
petal_ring(8, 30)
diya_dots(12, 130)
t.hideturtle()`;

export const P2 = lesson(2, {
  title: 'Turtle Graphics',
  objective: 'Draw shapes and patterns with the turtle module, using loops and functions with parameters, and build a Diwali rangoli generator.',
  concept: 'turtle, loops, functions',
  minutes: 60,
  hook: ['code', 'import turtle\nt = turtle.Turtle()\nfor i in range(4):\n    t.forward(100)\n    t.right(90)', 'A square appears on the drawing canvas!'],
  intro: 'Today Python becomes a paintbrush. You will steer a turtle with code and turn loops and functions into art.',
  cards: [
    { emoji: '🐢', title: 'Meet the turtle', body: 'import turtle opens the drawing toolbox, and t = turtle.Turtle() gives you a turtle with a pen. t.forward(100) moves it 100 steps and draws a line. The Python Lab shows the drawing next to your output.' },
    { emoji: '↪️', title: 'Turning by angles', body: 't.right(90) turns the turtle 90 degrees clockwise, and t.left(90) turns it the other way. A full turn is 360 degrees. For a shape with n sides, turn 360 divided by n at every corner.' },
    { emoji: '🔁', title: 'Loops and functions draw shapes', body: 'A for loop repeats forward and turn to make a shape. Put that loop inside def draw_polygon(sides, size): and one line can draw any shape. draw_polygon(6, 50) draws a hexagon.' },
    { emoji: '🎨', title: 'Colour and jumping', body: 't.color("orange") changes the pen colour. t.penup() lifts the pen so the turtle moves without drawing, and t.pendown() puts it back. t.goto(x, y) jumps to a point on the canvas.' },
    { emoji: '🪔', title: 'Rangoli is repeat and rotate', body: 'Draw one shape, turn a little, and draw it again. Do that twelve times and a flower pattern appears. That is the secret of a rangoli generator.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Meet the turtle',
      lang: 'python',
      code: 'import turtle\nt = turtle.Turtle()\nt.forward(100)\nt.left(90)\nt.forward(100)',
      output: '(Canvas: the turtle draws a line to the right, turns, and draws a line upwards: an L shape.)',
      say: ['First we import the turtle toolbox and make a turtle called t.', 'Forward draws a line, left turns on the spot, and forward again draws the second line.'],
    },
    {
      kind: 'code',
      heading: 'A loop draws a square',
      lang: 'python',
      code: 'import turtle\nt = turtle.Turtle()\nfor i in range(4):\n    t.forward(100)\n    t.right(90)',
      output: '(Canvas: a square with sides of 100 steps.)',
      say: ['A square is four sides and four turns of ninety degrees.', 'Instead of typing eight lines, a loop repeats the two lines four times.'],
    },
    {
      kind: 'code',
      heading: 'One function, every shape',
      lang: 'python',
      code: 'def draw_polygon(sides, size):\n    for i in range(sides):\n        t.forward(size)\n        t.right(360 / sides)\n\ndraw_polygon(3, 100)\ndraw_polygon(6, 60)',
      output: '(Canvas: a triangle and a hexagon that share a corner.)',
      say: ['The function takes the number of sides and the size as parameters.', 'It turns three hundred and sixty divided by the sides, so any shape closes up perfectly.'],
    },
    {
      kind: 'code',
      heading: 'Colours and jumps',
      lang: 'python',
      code: 't.color("orange")\ndraw_polygon(5, 60)\nt.penup()\nt.goto(-150, 0)\nt.pendown()\nt.color("blue")\ndraw_polygon(8, 40)',
      output: '(Canvas: an orange pentagon, and a blue octagon further to the left.)',
      say: ['Color changes the pen, so the next shape is orange.', 'Pen up lifts the pen, goto jumps to a new spot without drawing, and pen down starts drawing again.'],
    },
    {
      kind: 'code',
      heading: 'Repeat and rotate: a rangoli',
      lang: 'python',
      code: 'colours = ["orange", "magenta", "yellow"]\nfor i in range(12):\n    t.color(colours[i % 3])\n    draw_polygon(6, 60)\n    t.right(30)',
      output: '(Canvas: twelve hexagons spun around the centre in three colours, like a rangoli flower.)',
      say: ['We draw a hexagon, turn thirty degrees, and repeat twelve times to go all the way round.', 'The remainder sign picks the next colour from the list each time, so the colours take turns.'],
    },
  ],
  build: {
    title: 'Build along: shapes with one function',
    intro: 'Type along in the Python Lab and watch the canvas. By the end one function draws any shape you ask for.',
    steps: [
      { title: 'Make a turtle', text: 'Type import turtle, then t = turtle.Turtle(). Add t.forward(100) and run. A line appears on the canvas.' },
      { title: 'Draw a square with a loop', text: 'Type for i in range(4): with t.forward(100) and t.right(90) indented underneath. Run it.' },
      { title: 'Turn it into a function', text: 'Type def draw_polygon(sides, size): and move your loop inside it. Change range(4) to range(sides), 100 to size and 90 to 360 / sides.', tip: 'Everything inside the function needs four more spaces of indent.' },
      { title: 'Call it three times', text: 'Call draw_polygon(3, 100), draw_polygon(4, 100) and draw_polygon(6, 60). Put t.color("red"), "blue" and "green" before each one.' },
      { title: 'Try a big number', text: 'Call draw_polygon(36, 10). What shape does it look like? Why?', tip: 'With lots of tiny sides, a polygon looks like a circle.' },
    ],
  },
  acts: [
    {
      py: 'Fix draw_polygon(sides, size) so it can draw ANY shape: loop sides times, and turn 360 / sides at each corner. The last line calls draw_polygon(6, 80), which should draw a closed hexagon.',
      title: 'Python Lab: any-shape function',
      starter: 'import turtle\nt = turtle.Turtle()\n\ndef draw_polygon(sides, size):\n    for i in range(4):\n        t.forward(size)\n        t.right(90)\n\ndraw_polygon(6, 80)\n',
      goals: [
        ['Draws a closed hexagon', { t: 'turtle', sides: 6, closed: true, msg: 'draw_polygon(6, 80) should draw 6 sides and end where it started.' }],
        ['Calls draw_polygon', { t: 'calls', name: 'draw_polygon', min: 1, msg: 'Call draw_polygon(6, 80) at the left edge.' }],
        ['Uses a function, a loop and turtle', { t: 'uses', what: ['def', 'for', 'turtle'], msg: 'Keep the loop inside def draw_polygon(sides, size):' }],
      ],
      solution: 'import turtle\nt = turtle.Turtle()\n\ndef draw_polygon(sides, size):\n    for i in range(sides):\n        t.forward(size)\n        t.right(360 / sides)\n\ndraw_polygon(6, 80)\n',
      explain: 'Using the parameters instead of fixed numbers is what makes a function reusable for every shape.',
      hints: ['range(4) always loops 4 times. Use range(sides).', 'A hexagon turns 60 degrees, a square 90. Both are 360 / sides.'],
    },
    {
      code: 'import turtle\nt = turtle.Turtle()\nfor i in range(3):\n    t.forward(100)\n    t.left(120)',
      lang: 'python',
      ask: 'What shape does the turtle draw?',
      options: ['A triangle', 'A square', 'A hexagon', 'A straight line'],
      answer: 0,
      why: 'Three sides with a 120 degree turn at each corner make a triangle (3 × 120 = 360).',
      title: 'Predict the drawing: three turns',
    },
    {
      match: 'Match each shape to the turn at every corner',
      pairs: [
        ['Triangle', '120 degrees'],
        ['Square', '90 degrees'],
        ['Pentagon', '72 degrees'],
        ['Hexagon', '60 degrees'],
        ['Octagon', '45 degrees'],
      ],
      why: 'The turns of a closed shape add up to 360 degrees, so each turn is 360 ÷ the number of sides.',
      hint: 'Divide 360 by the number of sides.',
    },
    {
      py: 'Project: Diwali rangoli generator! Use a draw_polygon(sides, size) function and a loop that draws a shape, turns a little and repeats until it has gone all the way round. Use at least 3 colours from a list, and at least two rings or layers. Add a function of your own, such as diya dots around the edge.',
      title: 'Project: Diwali rangoli generator',
      mode: 'project',
      starter: '# Diwali rangoli generator\n# Made by: (your name)\nimport turtle\nt = turtle.Turtle()\nt.speed(0)\n\ncolours = ["orange", "magenta", "yellow"]\n\ndef draw_polygon(sides, size):\n    for i in range(sides):\n        t.forward(size)\n        t.right(360 / sides)\n\n# draw a ring of shapes here\n',
      goals: [
        ['Draws a big pattern', { t: 'turtle', minLines: 40, colors: 3, msg: 'Draw at least 40 lines in at least 3 colours: loop draw_polygon many times.' }],
        ['Repeats the shape function', { t: 'calls', name: 'draw_polygon', min: 8, msg: 'Call draw_polygon at least 8 times inside a loop to go round in a circle.' }],
        ['Uses functions, loops and turtle', { t: 'uses', what: ['def', 'for', 'turtle', 'list'], msg: 'Use def, a for loop, the turtle and a list of colours.' }],
      ],
      solution: L2_RANGOLI,
      requirements: ['A draw_polygon(sides, size) function', 'A loop that draws, turns and repeats all the way round (360 degrees)', 'At least 3 colours taken from a list', 'At least two rings or layers of different sizes', 'One extra function of your own (dots, a centre flower, a border…)', 'A “Made by” comment'],
      reflection: 'How did you choose the turn angle for your ring, and what happened when you changed it?',
      explain: 'Repeat and rotate is how real rangoli, mandala and kaleidoscope apps work. Show it at home this Diwali!',
      hints: ['for i in range(12): draw_polygon(6, 60) then t.right(30). 12 × 30 = 360.', 'Pick the colour with t.color(colours[i % len(colours)]) inside the loop.'],
    },
    {
      py: 'Debug it! This program should draw a closed orange square, but it draws one long line. Fix the two bugs.',
      title: 'Debug it: the square that ran away',
      phase: 'probe',
      starter: 'import turtle\nt = turtle.Turtle()\nt.color("orange")\nfor i in range(3):\n    t.forward(100)\nt.right(90)\n',
      goals: [
        ['Draws 4 sides', { t: 'turtle', sides: 4, msg: 'A square has 4 sides, so the loop needs range(4).' }],
        ['The square is closed', { t: 'turtle', closed: true, minLines: 4, msg: 'The turtle must turn at every corner and end where it started.' }],
      ],
      solution: 'import turtle\nt = turtle.Turtle()\nt.color("orange")\nfor i in range(4):\n    t.forward(100)\n    t.right(90)\n',
      explain: 'The turn must be indented so it happens inside the loop, at every corner, and a square needs 4 repeats.',
      hints: ['Which lines are inside the loop? Only the indented ones repeat.', 'Count the sides of a square. What should go in range()?'],
    },
  ],
  teacher: {
    explain: 'The turtle module lets Python draw: forward draws a line, right and left turn by an angle in degrees. A closed shape always turns a total of 360 degrees, so each corner of an n-sided shape turns 360 ÷ n. A loop repeats forward-and-turn; wrapping it in a function with parameters (sides, size) lets one line draw any shape. Patterns like rangoli come from repeating a shape and rotating a little each time.',
    analogy: 'The turtle is like a remote-control car with a pen taped underneath: it only knows “drive forward” and “turn”, but clever sequences of those two commands can draw anything.',
    vocab: [
      ['turtle', 'A drawing robot in Python that moves and draws lines.'],
      ['forward(n)', 'Moves the turtle n steps, drawing a line if the pen is down.'],
      ['right(a) / left(a)', 'Turns the turtle by a degrees.'],
      ['angle', 'How far to turn, measured in degrees; a full turn is 360.'],
      ['penup / pendown', 'Lift or lower the pen so moving draws or does not draw.'],
      ['polygon', 'A closed shape with straight sides, like a triangle or hexagon.'],
    ],
    demo: '1) Type import turtle and t = turtle.Turtle(), then t.forward(100); run and point to the canvas. 2) Add t.right(90) and t.forward(100); ask the class which way it will go before running. 3) Type the square with a for loop. 4) Ask: “What angle for a triangle?” Try 60 first (wrong!) and run to show the open shape, then 120. 5) Wrap it into def draw_polygon(sides, size): and call it for 3, 5 and 8 sides. 6) Show the rangoli loop: draw_polygon(6, 60) and t.right(30) inside for i in range(12).',
    unplugged: 'Human Turtle (5 min game): one learner is the turtle and stands up; classmates give only “forward 3 steps” and “turn right 90” commands to make them walk a square, then a triangle. Online: the teacher moves a cursor on a whiteboard as learners type commands in the chat. Who can make a triangle in the fewest commands?',
    prompts: [
      ['What does t.forward(100) do?', 'Moves the turtle 100 steps and draws a line.'],
      ['What angle do you turn for a pentagon?', '72 degrees, because 360 ÷ 5 = 72.'],
      ['Why put the drawing loop in a function?', 'So one line can draw any shape with different sides and sizes.'],
      ['How do you move without drawing?', 't.penup(), move, then t.pendown().'],
      ['How does a rangoli pattern repeat?', 'Draw a shape, turn a little, and repeat until you have turned 360 degrees.'],
    ],
    support: 'Give a turn-angle table (3 → 120, 4 → 90, 5 → 72, 6 → 60, 8 → 45). Let learners start from the build-along file and only change the numbers and colours.',
    stretch: 'Make the size grow inside the loop (size = size + 5) to draw a spiral, or draw a star with 5 sides and a 144 degree turn.',
    mis: [
      ['A triangle turns 60 degrees', 'The turtle turns the outside angle: 120 degrees for a triangle.'],
      ['right(90) moves the turtle', 'Turning happens on the spot. Only forward and backward move it.'],
      ['Code after the loop repeats too', 'Only the indented lines repeat.'],
      ['The function draws as soon as you define it', 'Nothing is drawn until you call draw_polygon(...).'],
    ],
    successCriteria: ['I can move and turn the turtle to draw lines.', 'I can work out the turn angle for any shape (360 ÷ sides).', 'I can write a function with parameters that draws a shape.', 'I can repeat and rotate a shape to make a pattern.'],
    homework: 'Make a rangoli card for someone at home: use their favourite colours and add your own extra layer. Ask them to choose the number of petals.',
    exit: 'What angle should the turtle turn at each corner of an octagon, and why?',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human Turtle', doing: 'Play Human Turtle (unplugged): learners steer a classmate (or the teacher’s cursor) into a square and a triangle with forward/turn commands.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Poll: “What shape will 4 forwards and 4 right turns make?” Play the video with captions; pause at “One function, every shape”.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo (including the wrong 60 degree triangle), then everyone types the shapes build-along. Thumbs check: “Do you see three shapes?”' },
      { minutes: 8, stage: 'Challenge and angle game', doing: 'Any-shape function challenge, the predict-the-drawing question and the angle match. Quick competition: first to post the turn angle for a 10-sided shape (36) wins.' },
      { minutes: 15, stage: 'Rangoli project in breakout pairs', doing: 'In breakout pairs, learners plan their rangoli on paper (shape, number of petals, colours) and code it. Partners suggest one change to try.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the square that ran away”. The winner explains why indentation matters.' },
      { minutes: 7, stage: 'Rangoli gallery show-and-tell', doing: 'Learners share screenshots in a class gallery; three volunteers explain their angle and colours. Vote for the most colourful with emoji reactions.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Thumbs check on each success criterion. Exit ticket: the octagon angle.' },
    ],
  },
  files: [{ name: 'turtle_shapes.py', title: 'Build-along: shapes with one function', audience: 'student', content: L2_SHAPES }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 3 · Random + functions
// ─────────────────────────────────────────────────────────────
const L3_DICELAB = `# Dice lab: functions with random
import random

def roll_dice(sides):
    return random.randint(1, sides)

def flip_coin():
    return random.choice(["heads", "tails"])

print("Six-sided dice:", roll_dice(6))
print("Twenty-sided dice:", roll_dice(20))
print("Coin:", flip_coin())

# Roll 60 times and count the sixes
sixes = 0
for i in range(60):
    if roll_dice(6) == 6:
        sixes += 1
print("Sixes in 60 rolls:", sixes)`;

const L3_LUDO = `# Ludo dice duel
# Made by: Zoya
import random

FINISH = 30

def roll_dice():
    return random.randint(1, 6)

def move(position, roll):
    if position + roll > FINISH:
        return position
    return position + roll

def take_turn(name, position):
    roll = roll_dice()
    position = move(position, roll)
    print(f"{name} rolled {roll} and is on square {position}")
    if roll == 6 and position < FINISH:
        print("Six! Bonus roll!")
        roll = roll_dice()
        position = move(position, roll)
        print(f"{name} rolled {roll} and is on square {position}")
    return position

print("=== LUDO DICE DUEL: first to square 30 wins! ===")
p1 = input("Player 1 name: ")
p2 = input("Player 2 name: ")
pos1 = 0
pos2 = 0
winner = ""
while winner == "":
    pos1 = take_turn(p1, pos1)
    if pos1 == FINISH:
        winner = p1
    else:
        pos2 = take_turn(p2, pos2)
        if pos2 == FINISH:
            winner = p2
print(f"{winner} wins the Ludo duel!")`;

export const P3 = lesson(3, {
  title: 'Random Functions and Dice Games',
  objective: 'Combine random numbers with functions to simulate dice and build a two-player Ludo dice duel with a function for each turn.',
  concept: 'random, simulation, turn functions',
  minutes: 60,
  hook: ['code', 'import random\n\ndef roll_dice():\n    return random.randint(1, 6)\n\nprint("You rolled", roll_dice())', 'You rolled 6'],
  intro: 'Today you mix chance with functions, roll hundreds of dice in a blink and build a Ludo race.',
  cards: [
    { emoji: '🎲', title: 'Random inside a function', body: 'Put random.randint inside a function and return the result. Now roll_dice() gives a fresh number every time you call it. Your game code starts to read like a story.' },
    { emoji: '🧪', title: 'Simulation: let the computer try', body: 'A loop can roll a dice hundreds of times in a blink. Counting the results shows patterns, like a six coming up about one time in six. Scientists and game designers test ideas this way.' },
    { emoji: '🔄', title: 'One function per turn', body: 'def take_turn(name, position): handles one player’s whole turn. It rolls, moves, prints and returns the new position. Two players simply call it with different names.' },
    { emoji: '📏', title: 'Rules as functions', body: 'Game rules can be functions too. move(position, roll) returns the square you land on, and keeps you still if you would go past the finish. Small rule functions are easy to test.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A dice with any number of sides',
      lang: 'python',
      code: 'import random\n\ndef roll_dice(sides):\n    return random.randint(1, sides)\n\nprint(roll_dice(6))\nprint(roll_dice(20))',
      output: '4\n17',
      say: ['The parameter sides decides how big the dice is.', 'Every call returns a new random number, so your output will be different from mine.'],
    },
    {
      kind: 'code',
      heading: 'Heads or tails?',
      lang: 'python',
      code: 'def flip_coin():\n    return random.choice(["heads", "tails"])\n\ntoss = flip_coin()\nprint("Toss:", toss)\nif toss == "heads":\n    print("You bat first!")',
      output: 'Toss: heads\nYou bat first!',
      say: ['This function returns heads or tails, just like the coin toss before a match.', 'We store the answer and use it in a decision.'],
    },
    {
      kind: 'code',
      heading: 'Simulate 600 rolls',
      lang: 'python',
      code: 'sixes = 0\nfor i in range(600):\n    if roll_dice(6) == 6:\n        sixes += 1\nprint("Sixes:", sixes, "out of 600")',
      output: 'Sixes: 97 out of 600',
      say: ['The loop rolls the dice six hundred times faster than you can blink.', 'We get close to one hundred sixes, about one roll in every six.'],
    },
    {
      kind: 'code',
      heading: 'A rule as a function',
      lang: 'python',
      code: 'def move(position, roll):\n    if position + roll > 30:\n        return position\n    return position + roll\n\nprint(move(10, 4))\nprint(move(28, 5))',
      output: '14\n28',
      say: ['From square ten, a four takes you to square fourteen.', 'From square twenty-eight, a five would pass the finish at thirty, so you stay where you are.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'def roll_dice():\n    random.randint(1, 6)\n\nroll = roll_dice()\nprint(roll * 2)',
      output: "TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'",
      say: ['The function rolls the dice but forgets to return the number.', 'So roll holds None, and Python cannot multiply nothing by two.'],
    },
  ],
  build: {
    title: 'Build along: dice lab',
    intro: 'Type along in the Python Lab. You will build dice and coin functions, then run a mini science experiment.',
    steps: [
      { title: 'A dice function', text: 'Type import random, then def roll_dice(sides): with return random.randint(1, sides) indented.' },
      { title: 'Roll different dice', text: 'Print roll_dice(6) and roll_dice(20). Run three times and watch the numbers change.' },
      { title: 'A coin function', text: 'Type def flip_coin(): with return random.choice(["heads", "tails"]). Print it.' },
      { title: 'Run an experiment', text: 'Type sixes = 0, then a for loop of 60 rolls with if roll_dice(6) == 6: sixes += 1. Print the sixes.', tip: 'Before running, guess how many sixes you will get. Write it in the chat!' },
      { title: 'Make it bigger', text: 'Change 60 to 600. Is the number of sixes closer to one sixth now?' },
    ],
  },
  acts: [
    {
      py: 'Dice simulation. Fix roll_dice(sides) so it returns random.randint(1, sides) (using the parameter!). Then roll a six-sided dice 100 times with a loop, count the sixes in a variable called sixes, and print `Sixes: ... out of 100`.',
      title: 'Python Lab: 100-roll experiment',
      starter: 'import random\n\ndef roll_dice(sides):\n    return random.randint(1, 6)\n\nprint(roll_dice(6))\n',
      goals: [
        ['Uses the sides parameter', { t: 'func', name: 'roll_dice', cases: [{ args: [1], expect: 1 }], msg: 'A 1-sided dice must always give 1. Use random.randint(1, sides).' }],
        ['Rolls 100 times', { t: 'calls', name: 'roll_dice', min: 100, msg: 'Call roll_dice(6) inside a loop that runs 100 times.' }],
        ['Prints the number of sixes', { t: 'output', contains: ['Sixes', 'out of 100'], msg: 'Print Sixes: … out of 100 at the end.' }],
        ['Uses random, a function and a loop', { t: 'uses', what: ['random', 'def', 'return', 'for'], msg: 'Use random.randint inside def, and a for loop for the rolls.' }],
      ],
      solution: 'import random\n\ndef roll_dice(sides):\n    return random.randint(1, sides)\n\nsixes = 0\nfor i in range(100):\n    if roll_dice(6) == 6:\n        sixes += 1\nprint("Sixes:", sixes, "out of 100")\n',
      explain: 'You just ran a simulation: the computer did 100 experiments so you can see the pattern.',
      hints: ['Change 6 to sides inside randint.', 'sixes = 0 goes before the loop; inside the loop: if roll_dice(6) == 6: sixes += 1.'],
    },
    {
      code: 'import random\n\ndef roll():\n    return random.randint(1, 6)\n\nprint(roll() + roll())',
      lang: 'python',
      ask: 'Which of these outputs is IMPOSSIBLE?',
      options: ['1', '2', '7', '12'],
      answer: 0,
      why: 'Each roll is at least 1, so two rolls add up to at least 2. The total can be anything from 2 to 12.',
      title: 'Predict the output: two dice',
    },
    {
      sort: 'Will this give the same answer every time you run it?',
      buckets: ['Same every run', 'Can change every run'],
      items: [
        ['3 + 4', 0],
        ['len("ludo")', 0],
        ['max(2, 9)', 0],
        ['random.randint(1, 6)', 1],
        ['random.choice(["heads", "tails"])', 1],
        ['roll_dice(6) when it uses randint', 1],
      ],
      why: 'Ordinary maths and built-ins always give the same answer. Anything that uses random can change on each run.',
      hint: 'Look for the word random, or a function that uses it.',
    },
    {
      py: 'Project: Ludo dice duel! Two players race from square 0 to square 30. Write roll_dice() (returns 1 to 6), move(position, roll) (returns position + roll, but stays at position if that would go past 30) and take_turn(name, position) (rolls, moves, prints what happened and returns the new position; a 6 gives a bonus roll). Ask for both names with input, then loop turns until someone lands exactly on 30, and print `... wins`.',
      title: 'Project: Ludo dice duel',
      mode: 'project',
      starter: '# Ludo dice duel\n# Made by: (your name)\nimport random\n\ndef roll_dice():\n    return random.randint(1, 6)\n\ndef move(position, roll):\n    # return the new position (stay put if it goes past 30)\n    pass\n\n# write take_turn(name, position) here\n\np1 = input("Player 1 name: ")\np2 = input("Player 2 name: ")\n',
      inputs: ['Aarav', 'Meera'],
      goals: [
        ['move follows the rules', { t: 'func', name: 'move', cases: [{ args: [10, 4], expect: 14 }, { args: [28, 5], expect: 28 }, { args: [26, 4], expect: 30 }], msg: 'move(10, 4) → 14, move(28, 5) → 28 (too far, stay put), move(26, 4) → 30.' }],
        ['A turn function is used', { t: 'calls', name: 'take_turn', min: 2, inputs: ['Aarav', 'Meera'], msg: 'Call take_turn(name, position) for each player’s turn.' }],
        ['Someone wins', { t: 'output', contains: ['wins'], inputs: ['Aarav', 'Meera'], msg: 'Loop until a player is on square 30, then print who wins.' }],
        ['Uses random, functions and a game loop', { t: 'uses', what: ['random', 'def', 'return', 'while', 'input'], msg: 'Use random, def and return, input() for names and a while loop for the turns.' }],
      ],
      solution: L3_LUDO,
      requirements: ['roll_dice() returns a number from 1 to 6', 'move(position, roll) returns the new square and stays put if it would pass 30', 'take_turn(name, position) prints the roll and returns the new position', 'A 6 gives a bonus roll', 'A while loop takes turns until someone lands exactly on 30', 'Prints the winner'],
      reflection: 'Play your duel five times. Did player 1 win more often? Why might going first help?',
      explain: 'Three small functions and a loop make a full board game. That is how real game engines are organised.',
      hints: ['move: if position + roll > 30: return position, otherwise return position + roll.', 'take_turn: roll = roll_dice(), position = move(position, roll), print it, then return position.'],
    },
    {
      py: 'Debug it! This program should print `You rolled ...` and then `Double it: ...` with a real number. It crashes. Find and fix the two bugs.',
      title: 'Debug it: the dice that gave nothing',
      phase: 'probe',
      starter: 'import random\n\ndef roll_dice():\n    random.randint(1, 6)\n\nroll = roll_dice(6)\nprint("You rolled", roll)\nprint("Double it:", roll * 2)\n',
      goals: [
        ['Runs without crashing', { t: 'noError', msg: 'Check how many arguments roll_dice takes, and what it gives back.' }],
        ['Prints a real number', { t: 'output', contains: ['You rolled', 'Double it'], notContains: ['None'], msg: 'roll_dice must return the number so roll is not None.' }],
      ],
      solution: 'import random\n\ndef roll_dice():\n    return random.randint(1, 6)\n\nroll = roll_dice()\nprint("You rolled", roll)\nprint("Double it:", roll * 2)\n',
      explain: 'The call must match the def (no argument, or add a sides parameter), and the function must return the roll.',
      hints: ['Read the first error: roll_dice() takes 0 arguments but you gave it 1.', 'Then the function rolls but never returns. Add return.'],
    },
  ],
  teacher: {
    explain: 'Learners already know random.randint and random.choice from Level 1. Today we put randomness inside functions that return a value, so games read clearly: roll = roll_dice(). Loops let us simulate hundreds of rolls and see patterns (about one six in every six rolls). Splitting a game into small functions, a dice function, a rule function and a turn function, makes it easy to test each part, even though the dice is random.',
    analogy: 'roll_dice() is like a dice cup you can pass round the table: anyone can shake it and it always hands back one number. The rules (move) are the referee who checks every move the same way, no matter who rolled.',
    vocab: [
      ['random.randint(a, b)', 'Gives a random whole number from a to b, including both.'],
      ['simulation', 'Using a program to try something many times and see what happens.'],
      ['probability', 'How likely something is, like 1 in 6 for rolling a six.'],
      ['game loop', 'A loop that keeps the game going until someone wins.'],
      ['turn function', 'A function that does one player’s whole turn.'],
    ],
    demo: '1) Type def roll_dice(sides): return random.randint(1, sides) and print roll_dice(6) three times. 2) Ask the class to guess how many sixes in 60 rolls; run the experiment loop and compare. Change to 600 and 6000 and show it gets closer to one sixth. 3) Type move(position, roll) and test move(10, 4) and move(28, 5) live: these give the same answer every time, even though dice are random. 4) Write take_turn(name, position) and call it twice for “Aarav” and “Meera”. 5) Remove return from roll_dice and show the TypeError, then fix it.',
    unplugged: 'Real Dice Race (5 min game): in pairs (or the teacher with two volunteers), roll a real or online dice and move counters on a 0–30 number line drawn on paper. A 6 gives a bonus roll and you must land exactly on 30. After two minutes, ask: “What steps happen in every turn?” Write them on the board: roll, move, check finish. That list becomes take_turn.',
    prompts: [
      ['Why put random.randint inside a function?', 'So we can call roll_dice() whenever we need a roll and the code is easy to read.'],
      ['In 600 rolls, about how many sixes do you expect?', 'About 100, one in six.'],
      ['What should move(28, 5) return if the finish is 30?', '28, because 33 would go past the finish.'],
      ['How can you test a function that uses random?', 'Test the rule functions with fixed numbers, or use a 1-sided dice so the answer is always 1.'],
      ['What does take_turn need to return, and why?', 'The new position, so the main loop can remember where the player is.'],
    ],
    support: 'Provide move() already written so learners only write take_turn and the loop. Let them start with a finish of 10 so test games are short.',
    stretch: 'Add a snake square and a ladder square with a dictionary later, or three players. Count how many turns the game took and print it.',
    mis: [
      ['A six is due if it has not come up for a while', 'Each roll is independent: the dice has no memory.'],
      ['Functions with random cannot be tested', 'Test the rule functions with fixed numbers and check ranges.'],
      ['Changing position inside take_turn changes it outside too', 'Numbers do not change outside the function. Return the new value and store it.'],
      ['randint(1, 6) never gives 6', 'randint includes both ends, unlike range.'],
    ],
    successCriteria: ['I can write a function that returns a random result.', 'I can use a loop to simulate many rolls and count results.', 'I can write a rule function and test it with fixed numbers.', 'I can split a game turn into its own function.'],
    homework: 'Play your Ludo duel ten times with someone at home and tally who wins. Then add a rule of your own, like “a 1 sends you back 2 squares”.',
    exit: 'Write a function coin() that returns "heads" or "tails" at random.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Real Dice Race', doing: 'Play Real Dice Race in pairs on a paper number line. List the steps of a turn on the board.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Chat poll: “Guess how many sixes in 600 rolls.” Play the video with captions; pause at “Simulate 600 rolls” and compare guesses.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone types the dice lab. Thumbs check: “Who got between 5 and 15 sixes in 60 rolls?”' },
      { minutes: 8, stage: 'Challenge, predict and sort', doing: '100-roll experiment, the impossible-output question and the “same or random?” sort. Quick competition: closest guess to the class total of sixes wins.' },
      { minutes: 15, stage: 'Ludo duel in breakout pairs', doing: 'Breakout pairs build the Ludo dice duel: one writes move and tests it, the other writes take_turn; then combine and play.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the dice that gave nothing”. The winner explains both bugs.' },
      { minutes: 7, stage: 'Tournament show-and-tell', doing: 'Two volunteers run their duel live with classmates’ names; the class cheers each six. Discuss: does going first help?' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: coin() function.' },
    ],
  },
  files: [{ name: 'dice_lab.py', title: 'Build-along: dice lab', audience: 'student', content: L3_DICELAB }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 4 · Project: Turtle Art Studio
// ─────────────────────────────────────────────────────────────
const L4_MENU = `# Art Studio starter: two shapes and a menu
import turtle
t = turtle.Turtle()

def draw_square(size):
    for i in range(4):
        t.forward(size)
        t.right(90)

def draw_triangle(size):
    for i in range(3):
        t.forward(size)
        t.left(120)

shape = input("square or triangle? ").strip().lower()
colour = input("Pen colour? ").strip().lower()
size = int(input("Size (20 to 200)? "))
t.color(colour)

if shape == "square":
    draw_square(size)
elif shape == "triangle":
    draw_triangle(size)
else:
    print("Sorry, I can only draw a square or a triangle.")`;

const L4_STUDIO = `# Turtle Art Studio
# Made by: Arjun
import turtle
t = turtle.Turtle()
t.speed(0)

def draw_square(size):
    for i in range(4):
        t.forward(size)
        t.right(90)

def draw_triangle(size):
    for i in range(3):
        t.forward(size)
        t.left(120)

def draw_star(size):
    for i in range(5):
        t.forward(size)
        t.right(144)

def draw_flower(size):
    for i in range(8):
        t.circle(size / 2)
        t.right(45)

def move_to_spot(number):
    t.penup()
    t.goto(-180 + number * 120, 0)
    t.pendown()

print("=== TURTLE ART STUDIO ===")
print("Shapes: square, triangle, star, flower. Type done to finish.")
print("Colours: red, orange, yellow, green, blue, purple, pink, gold...")
count = 0
drawing = True
while drawing:
    shape = input("Shape? ").strip().lower()
    if shape == "done":
        drawing = False
    elif shape in ["square", "triangle", "star", "flower"]:
        colour = input("Colour? ").strip().lower()
        size = int(input("Size (20 to 100)? "))
        move_to_spot(count)
        t.color(colour)
        if shape == "square":
            draw_square(size)
        elif shape == "triangle":
            draw_triangle(size)
        elif shape == "star":
            draw_star(size)
        else:
            draw_flower(size)
        count += 1
        print(f"Drew a {colour} {shape}. Shapes so far: {count}")
    else:
        print("Sorry, I don't know that shape.")

print(f"Your artwork has {count} shapes. Beautiful!")
t.hideturtle()`;

export const P4 = lesson(4, {
  title: 'Project: Turtle Art Studio',
  objective: 'Build an interactive drawing program where the user chooses shapes, colours and sizes, with a separate function for each shape.',
  concept: 'functions, input, menus',
  minutes: 60,
  hook: ['code', 'shape = input("Shape? ")\nif shape == "star":\n    draw_star(80)', 'Shape? star\n(A star appears on the canvas!)'],
  intro: 'It is project time! Today you build a drawing studio where the user is the artist.',
  cards: [
    { emoji: '🖌️', title: 'One function per shape', body: 'Give every shape its own function: draw_square(size), draw_star(size) and so on. Each one is short and easy to test. The main program just picks which one to call.' },
    { emoji: '📋', title: 'A menu with input', body: 'Ask the user for a shape, a colour and a size. Clean the shape with .strip().lower() and turn the size into a number with int(). Then if, elif and else call the right function.' },
    { emoji: '🔁', title: 'Keep drawing until done', body: 'A while loop keeps the studio open. Each time round it asks for a new shape. When the user types done, set the loop variable to False and the studio closes.' },
    { emoji: '📍', title: 'Move before you draw', body: 'Shapes on top of each other look messy. A move_to_spot(number) function can lift the pen, goto a new place and put the pen down. Then every shape gets its own space.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A function for every shape',
      lang: 'python',
      code: 'def draw_star(size):\n    for i in range(5):\n        t.forward(size)\n        t.right(144)\n\ndef draw_triangle(size):\n    for i in range(3):\n        t.forward(size)\n        t.left(120)',
      output: '(Nothing is drawn yet: these lines only teach Python two new commands.)',
      say: ['Each shape gets its own small function with a size parameter.', 'A star turns one hundred and forty-four degrees five times, and goes round the centre twice.'],
    },
    {
      kind: 'code',
      heading: 'The menu picks a function',
      lang: 'python',
      code: 'shape = input("Shape? ").strip().lower()\nsize = int(input("Size? "))\nif shape == "star":\n    draw_star(size)\nelif shape == "triangle":\n    draw_triangle(size)\nelse:\n    print("Sorry, I don\'t know that shape.")',
      output: 'Shape? Star\nSize? 80\n(A star with sides of 80 appears.)',
      say: ['The user typed Star with a capital letter, and lower turns it into star.', 'The if and elif lines choose which shape function to call, with the size the user chose.'],
    },
    {
      kind: 'code',
      heading: 'Keep the studio open',
      lang: 'python',
      code: 'drawing = True\nwhile drawing:\n    shape = input("Shape? ")\n    if shape == "done":\n        drawing = False\n    else:\n        print("Drawing a", shape)',
      output: 'Shape? square\nDrawing a square\nShape? done',
      say: ['The while loop keeps asking for shapes while drawing is True.', 'Typing done switches drawing to False, so the loop ends and the studio closes.'],
    },
    {
      kind: 'steps',
      heading: 'Plan, build, test, share',
      tool: 'Python Lab',
      steps: ['Sketch your studio on paper: which shapes and what the menu asks', 'Write and test one shape function at a time', 'Add the menu with input and if / elif / else', 'Wrap the menu in a while loop that stops on done', 'Add move_to_spot so shapes do not overlap', 'Let a friend make a picture with your studio'],
      say: ['Build one shape function, test it, and only then add the next.', 'When the menu works, wrap it in a loop and let a friend become the artist.'],
    },
  ],
  build: {
    title: 'Build along: two shapes and a menu',
    intro: 'Build the heart of the studio together: two shape functions and a menu. Your project grows from this file.',
    steps: [
      { title: 'Two shape functions', text: 'Type import turtle and t = turtle.Turtle(). Write draw_square(size) and draw_triangle(size), each with a for loop.' },
      { title: 'Test each one', text: 'At the bottom call draw_square(80) and run. Then try draw_triangle(80). Delete the test calls when both work.', tip: 'Testing each function alone makes bugs easy to find.' },
      { title: 'Ask three questions', text: 'Ask for the shape with .strip().lower(), the colour, and the size with int(input(...)). Then t.color(colour).' },
      { title: 'Choose with if / elif / else', text: 'if shape == "square": draw_square(size), elif shape == "triangle": draw_triangle(size), else print a friendly “Sorry” message.' },
      { title: 'Try tricky answers', text: 'Run it with SQUARE, triangle and banana. Does each one do the right thing?' },
    ],
  },
  acts: [
    {
      py: 'Shape picker. Ask the user for a shape (square or triangle) and a size. Write a draw_triangle(size) function next to draw_square, and use if / elif / else to call the right one. For any other shape, print a message that starts with `Sorry`.',
      title: 'Python Lab: shape picker',
      starter: 'import turtle\nt = turtle.Turtle()\n\ndef draw_square(size):\n    for i in range(4):\n        t.forward(size)\n        t.right(90)\n\nshape = input("square or triangle? ")\nsize = int(input("Size? "))\ndraw_square(size)\n',
      inputs: ['triangle', '80'],
      goals: [
        ['Typing triangle draws a triangle', { t: 'turtle', sides: 3, closed: true, msg: 'When the user types triangle, call draw_triangle(size): 3 sides, 120 degree turns.' }],
        ['Calls draw_triangle', { t: 'calls', name: 'draw_triangle', min: 1, inputs: ['triangle', '80'], msg: 'Define def draw_triangle(size): and call it for triangle.' }],
        ['Unknown shapes get a Sorry', { t: 'output', contains: ['Sorry'], inputs: ['hexagon', '50'], msg: 'For any other shape, print a message starting with Sorry.' }],
        ['Uses if, elif and else', { t: 'uses', what: ['def', 'if', 'elif', 'else', 'input'], msg: 'Use if / elif / else to pick the shape function.' }],
      ],
      solution: 'import turtle\nt = turtle.Turtle()\n\ndef draw_square(size):\n    for i in range(4):\n        t.forward(size)\n        t.right(90)\n\ndef draw_triangle(size):\n    for i in range(3):\n        t.forward(size)\n        t.left(120)\n\nshape = input("square or triangle? ").strip().lower()\nsize = int(input("Size? "))\nif shape == "square":\n    draw_square(size)\nelif shape == "triangle":\n    draw_triangle(size)\nelse:\n    print("Sorry, I can only draw a square or a triangle.")\n',
      explain: 'The menu is the boss: it reads the choice and hands the work to the right shape function.',
      hints: ['Copy draw_square, rename it draw_triangle, and change 4 to 3 and 90 to 120.', 'Replace the last line with if shape == "square": … elif shape == "triangle": … else: print("Sorry …").'],
    },
    {
      code: 'def grow(size):\n    return size + 20\n\ns = 40\nfor i in range(3):\n    s = grow(s)\nprint(s)',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['100', '60', '40', '120'],
      answer: 0,
      why: 'The loop calls grow three times: 40 → 60 → 80 → 100.',
      title: 'Predict the output: growing shapes',
    },
    {
      order: 'Put the parts of the Art Studio program in order',
      steps: ['import turtle and make the turtle t', 'Define a function for each shape', 'Start a while loop', 'Ask for a shape (done ends the loop)', 'Ask for the colour and size', 'Move to a new spot and call the right shape function'],
      why: 'Functions must be defined before the loop calls them, and the loop asks for the shape first so done can stop it straight away.',
      title: 'Plan the studio',
    },
    {
      py: 'Project: Turtle Art Studio! Write a function for at least 3 shapes. In a while loop, ask the user for a shape; if they type done, stop. For a known shape, ask for a colour and a size, then draw it. Keep a count of shapes in a variable called count. For an unknown shape, print a message that starts with `Sorry`. At the end, print how many shapes the artwork has.',
      title: 'Project: Turtle Art Studio',
      mode: 'project',
      starter: '# Turtle Art Studio\n# Made by: (your name)\nimport turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_square(size):\n    for i in range(4):\n        t.forward(size)\n        t.right(90)\n\n# add more shape functions here\n\ncount = 0\ndrawing = True\nwhile drawing:\n    shape = input("Shape? ").strip().lower()\n    # done? known shape? unknown shape?\n',
      inputs: ['square', 'red', '80', 'star', 'orange', '60', 'flower', 'blue', '40', 'done'],
      goals: [
        ['Runs a full session', { t: 'noError', inputs: ['square', 'red', '80', 'star', 'orange', '60', 'flower', 'blue', '40', 'done'], msg: 'Ask shape, then colour and size for each shape, and stop on done. Include square, star and flower.' }],
        ['Draws in 3 colours', { t: 'turtle', minLines: 20, colors: 3, msg: 'A red square, an orange star and a blue flower should all appear.' }],
        ['Counts the shapes', { t: 'var', name: 'count', equals: 3, inputs: ['square', 'red', '80', 'star', 'orange', '60', 'flower', 'blue', '40', 'done'], msg: 'Add 1 to count each time a shape is drawn.' }],
        ['Handles unknown shapes', { t: 'output', contains: ['Sorry'], inputs: ['banana', 'done'], msg: 'For a shape you do not know, print a message starting with Sorry (and do not ask for colour or size).' }],
        ['Uses functions, a loop and a menu', { t: 'uses', what: ['def', 'while', 'if', 'elif', 'else', 'input', 'turtle'], msg: 'Use shape functions, a while loop and if / elif / else.' }],
      ],
      solution: L4_STUDIO,
      requirements: ['At least 3 shape functions, each with a size parameter (the checker tests square, star and flower)', 'Asks for shape, colour and size with input()', 'A while loop that keeps going until the user types done', 'Unknown shapes get a friendly Sorry message', 'Shapes are moved apart (penup / goto / pendown) and counted', 'A title screen and a “Made by” comment'],
      reflection: 'Who used your studio, and what did they draw? Which shape function was hardest to get right?',
      explain: 'You built a real interactive drawing app. Every button in a paint app calls a function, just like yours!',
      hints: ['First make draw_star(size): 5 sides with t.right(144). draw_flower can loop t.circle(size / 2) and t.right(45) eight times.', 'Inside the loop: if shape == "done": drawing = False, elif shape in ["square", "star", "flower"]: ask colour and size and draw, else: print("Sorry …").'],
    },
    {
      py: 'Debug it! When the user types `Square` and `60`, this program should draw a closed square. Right now it draws nothing, and then it crashes. Fix both bugs.',
      title: 'Debug it: the shy square',
      phase: 'probe',
      starter: 'import turtle\nt = turtle.Turtle()\n\ndef draw_square(size):\n    for i in range(4):\n        t.forward(size)\n        t.right(90)\n\nshape = input("Shape? ")\nsize = input("Size? ")\nif shape == "square":\n    draw_square(size)\n',
      inputs: ['Square', '60'],
      goals: [
        ['Square draws a square', { t: 'turtle', sides: 4, closed: true, msg: 'Square with a capital S should still draw. Use .lower() on the shape.' }],
        ['Runs without errors', { t: 'noError', inputs: ['Square', '60'], msg: 'forward() needs a number. Turn the size into a number with int().' }],
      ],
      solution: 'import turtle\nt = turtle.Turtle()\n\ndef draw_square(size):\n    for i in range(4):\n        t.forward(size)\n        t.right(90)\n\nshape = input("Shape? ").strip().lower()\nsize = int(input("Size? "))\nif shape == "square":\n    draw_square(size)\n',
      explain: '"Square" is not equal to "square", so clean the answer with .lower(). input() gives text, so the size needs int().',
      hints: ['Is "Square" == "square"? Capitals matter.', 'After fixing that, read the TypeError: forward() needs a number, not text.'],
    },
  ],
  teacher: {
    explain: 'Today learners combine everything from Module 1 into one interactive program. Each shape is its own function with a size parameter, so it can be tested alone. The main program is a menu: a while loop asks for a shape, cleans it with .strip().lower(), and uses if / elif / else to call the right function. done ends the loop. A move_to_spot function keeps shapes apart. Encourage learners to build and test one shape function before writing the menu.',
    analogy: 'The studio is like a restaurant: the menu (the while loop with input) takes the order, and each shape function is a chef who only knows one dish. The waiter never cooks; it just sends the order to the right chef.',
    vocab: [
      ['menu', 'A program part that asks the user to choose and then acts on the choice.'],
      ['interactive', 'A program that responds to what the user types.'],
      ['loop flag', 'A True/False variable, like drawing, that keeps a while loop going.'],
      ['testing', 'Running a part of your program to check it works before moving on.'],
      ['.strip().lower()', 'Removes extra spaces and makes text small letters.'],
      ['penup / goto', 'Lift the pen and jump to a point without drawing.'],
    ],
    demo: '1) Write draw_square(size) and test it with draw_square(80). 2) Write draw_star(size) and test it; ask why 144 degrees works (the star goes round twice: 5 × 144 = 720). 3) Add shape = input("Shape? ") and if/elif/else; type Star and show it fails; add .strip().lower(). 4) Type the size without int() and show the TypeError, then fix it. 5) Wrap the menu in while drawing: and show done ending it. 6) Add move_to_spot(count) and show shapes no longer overlap.',
    unplugged: 'Studio Order Desk (5 min game): one learner is the “menu”, three learners are “shape chefs” who each can draw only one shape on a whiteboard (square, star, triangle). Classmates order “blue star, size big!” The menu sends the order to the right chef; unknown orders get “Sorry, not on the menu”. The order “done” closes the desk. Ask: what was the menu’s job, and what were the chefs’ jobs?',
    prompts: [
      ['Why give each shape its own function?', 'Each one is short, easy to test and can be reused.'],
      ['Why use .strip().lower() on the shape?', 'So Star, STAR and " star " all match "star".'],
      ['What stops the while loop?', 'Typing done sets drawing to False.'],
      ['Why must the size go through int()?', 'input() gives text and forward() needs a number.'],
      ['Why define the functions before the loop?', 'Python must know a function before it is called.'],
    ],
    support: 'Give the build-along file and let learners add one shape (star) plus the loop. Two shapes and done is a fine first goal.',
    stretch: 'Add a “random” option that picks a random shape, colour and size with random.choice and randint, or a “clear” command that calls t.clear().',
    mis: [
      ['input() gives a number if you type digits', 'It always gives text; use int().'],
      ['"Square" == "square" is True', 'Capitals matter; use .lower().'],
      ['Putting drawing = True inside the loop is fine', 'It must be set once before the loop, or done can never stop it.'],
      ['A function draws when it is defined', 'It only draws when it is called.'],
    ],
    successCriteria: ['I can write a separate function for each shape with a size parameter.', 'I can build a menu with input and if / elif / else.', 'I can keep a program running with a while loop until the user types done.', 'I can test each function on its own before joining them together.'],
    homework: 'Let two people at home use your studio. Ask each one to make a picture and screenshot it. Add the shape they asked for that you did not have.',
    exit: 'Your menu checks if shape == "star": but the user typed STAR. What one change fixes it?',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Studio Order Desk', doing: 'Play Studio Order Desk (unplugged): a menu learner sends orders to shape chefs. Discuss the menu’s job and the chefs’ jobs.' },
      { minutes: 5, stage: 'Hook, video and plan', doing: 'Show the hook and play the project video. Thumbs poll: “Who already knows which 3 shapes they want?” Learners sketch their studio on paper.' },
      { minutes: 8, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone builds two shapes and a menu. Test with SQUARE, triangle and banana.' },
      { minutes: 5, stage: 'Challenge, predict and order', doing: 'Shape picker challenge, predict-the-output and the ordering activity. Quick competition: first correct order wins a point for their team.' },
      { minutes: 18, stage: 'Build the Art Studio', doing: 'Learners build the full studio in breakout rooms. Halfway check-in: every learner has 2 shapes and the done loop working. Teacher visits each room.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the shy square”. The winner explains both bugs.' },
      { minutes: 9, stage: 'Gallery walk and show-and-tell', doing: 'Pairs swap and draw a picture with each other’s studio, giving two stars and a wish. Back together, three learners show their artwork live.' },
      { minutes: 4, stage: 'Submit and exit ticket', doing: 'Learners submit the project with a reflection. Exit ticket: the STAR question.' },
    ],
  },
  project: {
    title: 'Turtle Art Studio',
    brief: 'Build an interactive drawing studio where the user picks shapes, colours and sizes, and every shape has its own function.',
    requirements: ['At least 3 shape functions, each with a size parameter', 'Asks for shape, colour and size with input()', 'A while loop that keeps drawing until the user types done', 'A friendly Sorry message for unknown shapes', 'Shapes moved apart and counted, with a final message', 'A title screen and a “Made by” comment'],
    milestones: ['Studio sketched on paper: shapes, menu questions and colours', 'Each shape function works when called on its own', 'Menu with if / elif / else draws the chosen shape', 'The loop runs until done; a friend has made a picture with it'],
    rubric: [
      { criterion: 'Program works', levels: ['Crashes or draws nothing', 'Draws one shape, then stops or crashes', 'Draws every shape the user asks for and stops on done', 'Works perfectly and handles odd answers like STAR or banana'] },
      { criterion: 'Functions', levels: ['No functions', 'One function, or functions without parameters', '3 or more shape functions with a size parameter', 'Extra helper functions (like move_to_spot) and no repeated code'] },
      { criterion: 'User experience', levels: ['No instructions for the user', 'Asks questions but gives no feedback', 'Clear menu, feedback after each shape and a final message', 'Fun title screen, shapes laid out neatly and a celebration at the end'] },
      { criterion: 'Testing and code quality', levels: ['Hard to read; never tested', 'Some comments; tested once', 'Each function tested; comments explain each part', 'Tested by another person and improved from their feedback'] },
    ],
    extensions: ['Add a “random” choice that picks a random shape, colour and size', 'Let the user choose where each shape goes with x and y numbers', 'Add a “spin” option that repeats the chosen shape 12 times like a rangoli'],
  },
  files: [{ name: 'art_studio_menu.py', title: 'Build-along: two shapes and a menu', audience: 'student', content: L4_MENU }],
});
