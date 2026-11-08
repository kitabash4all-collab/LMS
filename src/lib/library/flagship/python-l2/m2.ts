// Python Game Coders · Level 2 · Module 2 — Data and bigger games. Capstone: Battle Arena.
import { lesson } from '../kit.ts';

// ─────────────────────────────────────────────────────────────
// Lesson 5 · Dictionaries
// ─────────────────────────────────────────────────────────────
const L5_MENU = `# Canteen menu with a dictionary
menu = {"samosa": 15, "vada pav": 20, "chai": 10}

print("Today's menu:")
for item, price in menu.items():
    print(f"- {item}: Rs {price}")

menu["idli"] = 30     # add a new item
menu["chai"] = 12     # change a price
print("Items on the menu:", len(menu))

order = input("What would you like? ").strip().lower()
if order in menu:
    print(f"That will be Rs {menu[order]}, please.")
else:
    print("Sorry, that is not on the menu.")`;

const L5_QUIZ = `# Class Quiz Bank
# Made by: Aarav

questions = {
    "Which planet is closest to the Sun?": "mercury",
    "How many sides does a hexagon have?": "6",
    "What is the capital of Rajasthan?": "jaipur",
    "Which gas do plants take in from the air?": "carbon dioxide",
    "What is 9 x 7?": "63",
}

def ask(question, answer):
    reply = input(question + " ").strip().lower()
    if reply == answer:
        print("Correct!")
        return 1
    print(f"Not quite. The answer is {answer}.")
    return 0

print("=== CLASS QUIZ BANK ===")
print(f"There are {len(questions)} questions. Let's go!")
score = 0
for question, answer in questions.items():
    score += ask(question, answer)

print(f"Final score: {score} out of {len(questions)}")
percent = score * 100 // len(questions)
print(f"That is {percent}%")
if percent == 100:
    print("Quiz master!")
elif percent >= 60:
    print("Great job!")
else:
    print("Keep revising and try again!")`;

export const P5 = lesson(5, {
  title: 'Dictionaries: Look It Up',
  objective: 'Store information as key and value pairs in a dictionary, look values up, add and update them, loop over them, and build a class quiz bank.',
  concept: 'dictionaries, keys, values',
  minutes: 60,
  hook: ['code', 'capitals = {"Kerala": "Thiruvananthapuram", "Punjab": "Chandigarh"}\nprint(capitals["Punjab"])', 'Chandigarh'],
  intro: 'Today you meet the dictionary, a way to store pairs of information, like names and numbers in a phone book.',
  cards: [
    { emoji: '📒', title: 'Keys and values', body: 'A dictionary stores pairs, just like a phone book stores a name and a number. The first part is the key and the second is the value. capitals = {"Kerala": "Thiruvananthapuram"} holds one pair.' },
    { emoji: '🔑', title: 'Look up by key', body: 'capitals["Kerala"] gives the value stored for that key. Keys must match exactly, so "kerala" with a small k is a different key. Asking for a key that is not there gives a KeyError.' },
    { emoji: '✏️', title: 'Add and update', body: 'menu["idli"] = 30 adds a new pair if idli is not there yet. If it is already there, the old value is replaced. Use "idli" in menu to check before you look something up.' },
    { emoji: '🔁', title: 'Loop over the pairs', body: 'for item, price in menu.items(): visits every pair. Each time round, item holds the key and price holds the value. len(menu) tells you how many pairs there are.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A dictionary is a phone book',
      lang: 'python',
      code: 'capitals = {"Kerala": "Thiruvananthapuram", "Gujarat": "Gandhinagar", "Punjab": "Chandigarh"}\nprint(capitals["Gujarat"])\nprint(len(capitals), "states")',
      output: 'Gandhinagar\n3 states',
      say: ['Curly brackets make a dictionary, and a colon joins each key to its value.', 'We look up Gujarat by its key, and Python finds the capital straight away.'],
    },
    {
      kind: 'code',
      heading: 'Add and change',
      lang: 'python',
      code: 'menu = {"samosa": 15, "chai": 10}\nmenu["idli"] = 30\nmenu["chai"] = 12\nprint(menu)',
      output: "{'samosa': 15, 'chai': 12, 'idli': 30}",
      say: ['Idli was not on the menu, so this line adds a brand new pair.', 'Chai was already there, so its price is replaced with twelve rupees.'],
    },
    {
      kind: 'code',
      heading: 'Loop over every pair',
      lang: 'python',
      code: 'menu = {"samosa": 15, "chai": 12, "idli": 30}\nfor item, price in menu.items():\n    print(f"{item}: Rs {price}")',
      output: 'samosa: Rs 15\nchai: Rs 12\nidli: Rs 30',
      say: ['The items method hands us one key and one value at a time.', 'This is how a canteen app could print its whole price list.'],
    },
    {
      kind: 'code',
      heading: 'Count with a dictionary',
      lang: 'python',
      code: 'votes = ["mango", "chikoo", "mango", "litchi", "mango"]\ncount = {}\nfor fruit in votes:\n    if fruit in count:\n        count[fruit] += 1\n    else:\n        count[fruit] = 1\nprint(count)',
      output: "{'mango': 3, 'chikoo': 1, 'litchi': 1}",
      say: ['The class voted for its favourite fruit, and we start with an empty dictionary.', 'A new fruit gets a count of one, and a fruit we have seen before goes up by one.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'menu = {"samosa": 15, "chai": 10}\nprint(menu["pizza"])',
      output: "KeyError: 'pizza'",
      say: ['Pizza is not a key in this dictionary, so Python stops with a KeyError.', 'Check first with if pizza in menu, or use the get method with a default value.'],
    },
  ],
  build: {
    title: 'Build along: canteen menu',
    intro: 'Type along in the Python Lab. You will build a canteen menu that can grow, change prices and take orders.',
    steps: [
      { title: 'Make the dictionary', text: 'Type menu = {"samosa": 15, "vada pav": 20, "chai": 10} and print(menu). Run it.', tip: 'Each pair is key: value, and commas separate the pairs.' },
      { title: 'Print the menu nicely', text: 'Type for item, price in menu.items(): with print(f"- {item}: Rs {price}") indented.' },
      { title: 'Add and change', text: 'Add menu["idli"] = 30 and menu["chai"] = 12, then print len(menu). How many items now?' },
      { title: 'Take an order', text: 'Ask order = input("What would you like? ").strip().lower(). If order in menu, print the price with menu[order]. Otherwise print a Sorry message.' },
      { title: 'Test it', text: 'Run it with chai, SAMOSA and pizza. Which one gets the Sorry message?' },
    ],
  },
  acts: [
    {
      py: 'Canteen price checker. Use the menu dictionary given. Ask the user what they want. If it is on the menu, print its price like `Rs 10`. If not, print `Sorry, that is not on the menu.`',
      title: 'Python Lab: canteen price checker',
      starter: 'menu = {"samosa": 15, "vada pav": 20, "chai": 10}\norder = input("What would you like? ")\nprint("Rs 15")\n',
      inputs: ['chai'],
      goals: [
        ['Chai costs Rs 10', { t: 'output', contains: ['Rs 10'], inputs: ['chai'], msg: 'Look the price up with menu[order], so chai gives Rs 10.' }],
        ['Samosa costs Rs 15', { t: 'output', contains: ['Rs 15'], inputs: ['samosa'], msg: 'samosa should give Rs 15.' }],
        ['Pizza is not on the menu', { t: 'output', contains: ['not on the menu'], notContains: ['Rs'], inputs: ['pizza'], msg: 'Check with if order in menu: first, and print the Sorry message otherwise.' }],
        ['Uses a dictionary and if', { t: 'uses', what: ['dict', 'if', 'else', 'input'], msg: 'Use the dictionary with if order in menu: and else.' }],
      ],
      solution: 'menu = {"samosa": 15, "vada pav": 20, "chai": 10}\norder = input("What would you like? ").strip().lower()\nif order in menu:\n    print(f"That will be Rs {menu[order]}, please.")\nelse:\n    print("Sorry, that is not on the menu.")\n',
      explain: 'in checks the keys, and menu[order] looks the value up. Together they never crash.',
      hints: ['if order in menu: checks the keys of the dictionary.', 'Inside the if: print(f"Rs {menu[order]}").'],
    },
    {
      code: 'votes = {"Aarav": 3, "Meera": 5}\nvotes["Aarav"] += 2\nvotes["Zoya"] = 1\nprint(len(votes), votes["Aarav"])',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['3 5', '2 5', '3 3', '2 3'],
      answer: 0,
      why: 'Aarav goes from 3 to 5, and Zoya is a new key, so there are now 3 pairs.',
      title: 'Predict the output: class election',
    },
    {
      match: 'Match each piece of dictionary code to what it does',
      pairs: [
        ['menu["chai"]', 'Reads the value for the key chai'],
        ['menu["chai"] = 12', 'Adds chai or changes its value'],
        ['"chai" in menu', 'Checks if the key chai exists'],
        ['menu.items()', 'Gives every key and value pair'],
        ['menu.get("tea", 0)', 'Reads a value, or 0 if the key is missing'],
      ],
      why: 'Square brackets read or write a value, in checks keys, items gives pairs and get reads safely with a default.',
    },
    {
      py: 'Project: Class quiz bank! Store exactly 5 questions in a dictionary called questions, where each key is a question and each value is its answer in small letters. Write a function ask(question, answer) that asks the question, prints Correct or the right answer, and RETURNS 1 or 0. Loop over questions.items(), add up the score in a variable called score, and print the final score and a message.',
      title: 'Project: class quiz bank',
      mode: 'project',
      starter: '# Class Quiz Bank\n# Made by: (your name)\n\nquestions = {\n    "Which planet is closest to the Sun?": "mercury",\n    # add 4 more questions here\n}\n\ndef ask(question, answer):\n    reply = input(question + " ").strip().lower()\n    # return 1 if right, 0 if wrong\n\nscore = 0\n',
      inputs: ['0', '0', '0', '0', '0'],
      goals: [
        ['Asks 5 questions', { t: 'noError', inputs: ['0', '0', '0', '0', '0'], msg: 'Your questions dictionary needs exactly 5 questions, and the program asks each one once.' }],
        ['Wrong answers score 0', { t: 'var', name: 'score', equals: 0, inputs: ['0', '0', '0', '0', '0'], msg: 'score starts at 0 and only goes up when the answer is right.' }],
        ['Shows the final score', { t: 'output', contains: ['score'], inputs: ['0', '0', '0', '0', '0'], msg: 'Print the final score at the end.' }],
        ['Uses a dictionary, a loop and a function', { t: 'uses', what: ['dict', 'for', 'def', 'return', 'input'], msg: 'Store the questions in a dictionary, loop over questions.items() and return 1 or 0 from ask().' }],
      ],
      solution: L5_QUIZ,
      requirements: ['A dictionary of exactly 5 questions and answers', 'An ask(question, answer) function that returns 1 or 0', 'A for loop over questions.items()', 'Answers accepted in any capitals with .strip().lower()', 'A final score and a message (for example a percentage)', 'A title screen and a “Made by” comment'],
      reflection: 'How is the quiz bank better than writing each question with its own if and else, like the Level 1 Quiz Show?',
      explain: 'Your questions are now data, not code. Adding a question is one line, and the same loop asks them all.',
      hints: ['Each pair is "question?": "answer", with a comma after it.', 'In ask: if reply == answer: print("Correct!") and return 1. Otherwise print the answer and return 0. In the loop: score += ask(question, answer).'],
    },
    {
      py: 'Debug it! This report card should print `Maths mark: 85`, then every subject with its mark, then `Total: 319`. It has two bugs. Fix them.',
      title: 'Debug it: the broken report card',
      phase: 'probe',
      starter: 'marks = {"Maths": 85, "Science": 92, "English": 68}\nmarks["Hindi"] = 74\nprint("Maths mark:", marks["maths"])\ntotal = 0\nfor subject, mark in marks:\n    print(f"{subject}: {mark}")\n    total += mark\nprint("Total:", total)\n',
      goals: [
        ['Prints the Maths mark', { t: 'output', contains: ['Maths mark: 85'], msg: 'Keys must match exactly, capital letters too.' }],
        ['Prints every subject', { t: 'output', lines: ['Maths: 85', 'Science: 92', 'English: 68', 'Hindi: 74'], msg: 'To get each key and value, loop over marks.items().' }],
        ['Prints the total', { t: 'output', contains: ['Total: 319'], msg: 'Add up every mark: 85 + 92 + 68 + 74 = 319.' }],
      ],
      solution: 'marks = {"Maths": 85, "Science": 92, "English": 68}\nmarks["Hindi"] = 74\nprint("Maths mark:", marks["Maths"])\ntotal = 0\nfor subject, mark in marks.items():\n    print(f"{subject}: {mark}")\n    total += mark\nprint("Total:", total)\n',
      explain: 'Bug 1: "maths" is not the same key as "Maths". Bug 2: looping over a dictionary gives only keys; .items() gives the pairs.',
      hints: ['Read the KeyError: which key could not be found? Compare its capitals with the dictionary.', 'for subject, mark in marks: does not work. Add .items().'],
    },
  ],
  teacher: {
    explain: 'A dictionary stores key: value pairs inside curly brackets. We read a value with square brackets and its key, like menu["chai"]. Assigning to a key adds it if it is new or replaces the value if it exists. in checks whether a key exists, which avoids KeyError. Looping with .items() gives each key and value. Today the quiz from Level 1 becomes data: questions live in a dictionary and one loop asks them all.',
    analogy: 'A dictionary is like a phone book or the contacts on a phone: you search by the name (key) to find the number (value). You never search by position, and two contacts cannot have exactly the same name.',
    vocab: [
      ['dictionary', 'A collection of key: value pairs inside { }.'],
      ['key', 'The label you look up, like "chai". Keys are unique.'],
      ['value', 'The information stored with a key, like 10.'],
      ['.items()', 'Gives every key and value pair, for looping.'],
      ['KeyError', 'The error when you ask for a key that is not in the dictionary.'],
      ['.get(key, default)', 'Reads a value safely, giving the default if the key is missing.'],
    ],
    demo: '1) Type capitals = {"Kerala": "Thiruvananthapuram", "Punjab": "Chandigarh"} and print(capitals["Punjab"]). 2) Try capitals["punjab"] and read the KeyError aloud. 3) Add capitals["Goa"] = "Panaji" and print the dictionary. 4) Make the canteen menu, loop with for item, price in menu.items(): and print each line. 5) Show order in menu with input. 6) Do the fruit vote count: ask learners to shout fruits, type them into a list, and count them with the dictionary pattern.',
    unplugged: 'Human Phone Book (5 min game): five learners each hold a “key” card (a made-up nickname like Captain, Speedy, Spinner) and secretly write a “value” (a favourite snack). The class calls out keys and the holder reveals the value. Calling a key nobody holds gets “KeyError!” shouted by the class. Then one learner changes their value: that is updating a key.',
    prompts: [
      ['What is the difference between a key and a value?', 'You look up by the key; the value is what is stored with it.'],
      ['What happens with menu["idli"] = 30 if idli is already there?', 'The old price is replaced with 30.'],
      ['How do you avoid a KeyError?', 'Check with if key in dict: or use .get(key, default).'],
      ['What does for item, price in menu.items(): give you each time?', 'One key in item and its value in price.'],
      ['Why is a dictionary good for a quiz?', 'Each question is linked to its answer and one loop can ask them all.'],
    ],
    support: 'Give the quiz bank starter with all 5 questions filled in; learners write only ask() and the loop. A printed card shows the shape { "key": value, "key": value }.',
    stretch: 'Add a scores dictionary for two players taking turns, or shuffle the questions with random.shuffle(list(questions.items())).',
    mis: [
      ['Dictionaries are looked up by position, like lists', 'You look up by key, not by number position.'],
      ['"Maths" and "maths" are the same key', 'Keys must match exactly, including capitals.'],
      ['for x in my_dict gives the values', 'It gives the keys. Use .items() for pairs or .values() for values.'],
      ['A dictionary can have two pairs with the same key', 'Keys are unique; assigning again replaces the value.'],
    ],
    successCriteria: ['I can make a dictionary of key: value pairs.', 'I can look up, add and update a value by its key.', 'I can check a key exists with in before using it.', 'I can loop over a dictionary with .items().'],
    homework: 'Make a “family favourites” dictionary at home: ask three people for their favourite food (use first names or nicknames only) and write a program that prints each pair and counts how many people chose sweets.',
    exit: 'prices = {"pen": 10, "notebook": 40}. Write one line that changes the notebook price to 45.',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human Phone Book', doing: 'Play Human Phone Book (unplugged). The class shouts “KeyError!” for a missing key. One learner updates a value.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Chat poll: “What will print?” Play the video with captions; pause at “Count with a dictionary” and ask what count will hold.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo including the class fruit vote, then everyone types the canteen menu. Thumbs check: “Did pizza get the Sorry message?”' },
      { minutes: 8, stage: 'Challenge, predict and match', doing: 'Canteen price checker, the class election prediction and the dictionary match. Quick competition: fastest correct match wins.' },
      { minutes: 15, stage: 'Quiz bank in breakout pairs', doing: 'Each pair agrees on a topic, writes 5 questions on paper, then both build the quiz bank. Partners play each other’s quiz in the chat.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the broken report card”. The winner explains both bugs.' },
      { minutes: 7, stage: 'Quiz show-and-tell', doing: 'Two learners host their quiz bank live and the class answers in the chat. Celebrate the highest class score.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: change the notebook price.' },
    ],
  },
  files: [{ name: 'canteen_menu.py', title: 'Build-along: canteen menu', audience: 'student', content: L5_MENU }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 6 · Strings in depth
// ─────────────────────────────────────────────────────────────
const L6_EXPLORER = `# Word explorer
word = input("Type a word: ").strip()
print("Letters:", len(word))
print("First letter:", word[0])
print("Last letter:", word[-1])
print("First three:", word[0:3])
print("Backwards:", word[::-1])
print("Shouting:", word.upper())

vowels = 0
for letter in word.lower():
    if letter in "aeiou":
        vowels += 1
print("Vowels:", vowels)

if word.lower() == word.lower()[::-1]:
    print("It is a palindrome!")`;

const L6_HANGMAN = `# Hangman
# Made by: Riya
import random

words = ["cricket", "monsoon", "rangoli", "python", "mango", "kabaddi"]

def show_word(word, guessed):
    shown = ""
    for letter in word:
        if letter in guessed:
            shown += letter + " "
        else:
            shown += "_ "
    return shown.strip()

secret = random.choice(words)
guessed = []
lives = 6
print("=== HANGMAN ===")
print(f"The word has {len(secret)} letters. You have {lives} lives.")

while lives > 0 and "_" in show_word(secret, guessed):
    print(show_word(secret, guessed))
    guess = input("Guess a letter: ").strip().lower()
    if len(guess) != 1 or not guess.isalpha():
        print("Please type one letter.")
    elif guess in guessed:
        print("You already tried that letter.")
    elif guess in secret:
        guessed.append(guess)
        print("Yes! It is in the word.")
    else:
        guessed.append(guess)
        lives -= 1
        print(f"No. Lives left: {lives}")

if lives > 0:
    print(f"You win! The word was {secret}.")
else:
    print(f"Out of lives! The word was {secret}.")`;

export const P6 = lesson(6, {
  title: 'Strings in Depth: Hangman',
  objective: 'Use indexes, slicing, string methods, in and loops over letters to take text apart, and build a Hangman game.',
  concept: 'slicing, string methods, in',
  minutes: 60,
  hook: ['code', 'word = "monsoon"\nprint(word[::-1])', 'noosnom'],
  intro: 'Today you become a text detective, cutting words apart and building the classic game of Hangman.',
  cards: [
    { emoji: '🔢', title: 'Every letter has an index', body: 'A string is a row of letters, and each one has an index starting at 0. city[0] is the first letter and city[-1] is the last. len(city) counts them all.' },
    { emoji: '✂️', title: 'Slicing cuts out a piece', body: 'city[0:5] gives the letters from index 0 up to, but not including, index 5. Leave a number out to start from the beginning or go to the end. city[::-1] gives the whole string backwards.' },
    { emoji: '🧰', title: 'String methods', body: '.upper(), .lower() and .title() change the capitals. .replace() swaps text, .count() counts it and .split() breaks a sentence into a list of words. Each one makes a new string, because a string can never be changed.' },
    { emoji: '🔍', title: 'in and loops over letters', body: '"sam" in "samosa" is True, so in can search inside text. for letter in word: visits each letter in turn. That is exactly what Hangman needs.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Index and slice',
      lang: 'python',
      code: 'city = "Bengaluru"\nprint(city[0], city[-1])\nprint(city[0:5])\nprint(len(city))',
      output: 'B u\nBenga\n9',
      say: ['Index zero is the first letter, and minus one is the last letter.', 'The slice from zero to five gives five letters, stopping just before index five.'],
    },
    {
      kind: 'code',
      heading: 'Handy string methods',
      lang: 'python',
      code: 'text = "chai and samosa"\nprint(text.title())\nprint(text.replace("chai", "lassi"))\nprint(text.count("a"))\nprint(text.split())',
      output: "Chai And Samosa\nlassi and samosa\n4\n['chai', 'and', 'samosa']",
      say: ['Title gives every word a capital letter, and replace swaps chai for lassi.', 'Count finds four letter a, and split breaks the sentence into a list of words.'],
    },
    {
      kind: 'code',
      heading: 'Loop over letters',
      lang: 'python',
      code: 'word = "Diwali"\nvowels = 0\nfor letter in word.lower():\n    if letter in "aeiou":\n        vowels += 1\nprint("Vowels:", vowels)',
      output: 'Vowels: 3',
      say: ['The loop visits one letter at a time, from the first to the last.', 'Each time the letter is found inside the vowel string, we add one to the count.'],
    },
    {
      kind: 'code',
      heading: 'Build a new string',
      lang: 'python',
      code: 'word = "mango"\nguessed = ["m", "o"]\nshown = ""\nfor letter in word:\n    if letter in guessed:\n        shown += letter + " "\n    else:\n        shown += "_ "\nprint(shown)',
      output: 'm _ _ _ o',
      say: ['This is the heart of Hangman: we show the letters already guessed.', 'Every other letter becomes an underscore, so the player sees the gaps.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'word = "mango"\nword[0] = "M"',
      output: "TypeError: 'str' object does not support item assignment",
      say: ['Strings cannot be changed one letter at a time, so this line crashes.', 'Instead, build a new string, for example with word dot capitalize or by adding pieces together.'],
    },
  ],
  build: {
    title: 'Build along: word explorer',
    intro: 'Type along to build a word explorer that takes any word apart. Try it with your own name or your favourite food.',
    steps: [
      { title: 'Ask for a word', text: 'Type word = input("Type a word: ").strip() and print len(word).' },
      { title: 'First, last and slices', text: 'Print word[0], word[-1], word[0:3] and word[::-1]. Run it with the word Bengaluru.' },
      { title: 'Methods', text: 'Print word.upper(). Then try word.title() and word.count("a").', tip: 'Methods always need round brackets at the end, even when empty.' },
      { title: 'Count the vowels', text: 'Set vowels = 0, then for letter in word.lower(): if letter in "aeiou": vowels += 1. Print it.' },
      { title: 'Palindrome check', text: 'Add if word.lower() == word.lower()[::-1]: print("It is a palindrome!"). Test with Malayalam and level.' },
    ],
  },
  acts: [
    {
      py: 'Word tools. Write count_vowels(word) that RETURNS how many vowels (a, e, i, o, u) a word has, in capitals or small letters. Then write is_palindrome(word) that returns True if the word reads the same backwards (ignoring capitals), and False otherwise.',
      title: 'Python Lab: vowel counter and palindrome checker',
      starter: 'def count_vowels(word):\n    return len(word)\n\ndef is_palindrome(word):\n    return False\n\nprint(count_vowels("Kitabash"))\nprint(is_palindrome("Malayalam"))\n',
      goals: [
        ['Counts vowels', { t: 'func', name: 'count_vowels', cases: [{ args: ['Kitabash'], expect: 3 }, { args: ['India'], expect: 3 }, { args: ['rhythm'], expect: 0 }], msg: 'count_vowels("India") should return 3. Use .lower() and check each letter with in "aeiou".' }],
        ['Spots palindromes', { t: 'func', name: 'is_palindrome', cases: [{ args: ['Malayalam'], expect: true }, { args: ['level'], expect: true }, { args: ['cricket'], expect: false }], msg: 'Compare word.lower() with word.lower()[::-1] and return the result.' }],
        ['Loops over letters', { t: 'uses', what: ['def', 'return', 'for'], msg: 'Use a for loop over the letters in count_vowels.' }],
      ],
      solution: 'def count_vowels(word):\n    count = 0\n    for letter in word.lower():\n        if letter in "aeiou":\n            count += 1\n    return count\n\ndef is_palindrome(word):\n    w = word.lower()\n    return w == w[::-1]\n\nprint(count_vowels("Kitabash"))\nprint(is_palindrome("Malayalam"))\n',
      explain: 'A loop with in counts letters, and a reversed slice compares a word with itself backwards.',
      hints: ['Start with count = 0, loop for letter in word.lower(): and add 1 when letter in "aeiou".', 'Malayalam has a capital M. Make it small first, then compare it with its [::-1] slice.'],
    },
    {
      code: 'word = "DIWALI"\nprint(word[0:3].lower() + word[-1])',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['diwI', 'DIWI', 'diwi', 'diwal'],
      answer: 0,
      why: 'word[0:3] is DIW, .lower() makes it diw, and word[-1] is the last letter, a capital I.',
      title: 'Predict the output: slice and lower',
    },
    {
      match: 'Match each expression to its result when s = "monsoon"',
      pairs: [
        ['s[0]', '"m"'],
        ['s[-1]', '"n"'],
        ['s[1:4]', '"ons"'],
        ['s[::-1]', '"noosnom"'],
        ['len(s)', '7'],
        ['s.upper()', '"MONSOON"'],
      ],
      why: 'Indexes start at 0, -1 is the last letter, a slice stops before its end number and [::-1] reverses.',
      hint: 'Write the index numbers 0 to 6 under the letters of monsoon.',
    },
    {
      py: 'Project: Hangman! Pick a secret word with random.choice from your own word list (keep the letters q, x, z, j, v and w out of your words, because the checker guesses those). Write show_word(word, guessed) that returns the word with guessed letters shown and the rest as _ , all separated by spaces, like `c _ _ c _ _ t`. Give the player 6 lives in a variable called lives. Each wrong letter loses a life. End with a win message, or a message that says `The word was ...`.',
      title: 'Project: Hangman',
      mode: 'project',
      starter: '# Hangman\n# Made by: (your name)\nimport random\n\nwords = ["cricket", "monsoon", "rangoli"]\n\ndef show_word(word, guessed):\n    shown = ""\n    # add each letter or an _ to shown\n    return shown.strip()\n\nsecret = random.choice(words)\nguessed = []\nlives = 6\n',
      inputs: ['q', 'x', 'z', 'j', 'v', 'w'],
      goals: [
        ['show_word shows the gaps', { t: 'func', name: 'show_word', cases: [{ args: ['cricket', ['c', 't']], expect: 'c _ _ c _ _ t' }, { args: ['mango', []], expect: '_ _ _ _ _' }, { args: ['mango', ['m', 'a', 'n', 'g', 'o']], expect: 'm a n g o' }], msg: 'show_word("cricket", ["c", "t"]) should return "c _ _ c _ _ t" (spaces between, none at the end).' }],
        ['Six wrong guesses lose all lives', { t: 'var', name: 'lives', equals: 0, inputs: ['q', 'x', 'z', 'j', 'v', 'w'], msg: 'Start with lives = 6 and take one away for each wrong letter. Stop when lives is 0.' }],
        ['Reveals the word at the end', { t: 'output', contains: ['word was'], inputs: ['q', 'x', 'z', 'j', 'v', 'w'], msg: 'When the game ends, print The word was … .' }],
        ['Uses random, a loop and input', { t: 'uses', what: ['random', 'while', 'for', 'def', 'input'], msg: 'Use random.choice, a while loop for the game and a for loop in show_word.' }],
      ],
      solution: L6_HANGMAN,
      requirements: ['A word list and random.choice to pick the secret word', 'show_word(word, guessed) returns the word with gaps', 'A while loop that keeps asking for letters', '6 lives, and one is lost for each wrong letter', 'A win message and a lose message that shows the word', 'Bonus: handle repeated letters and typing more than one letter'],
      reflection: 'Which string skill did you use most in Hangman: in, a loop over letters or building a new string? Where?',
      explain: 'Hangman is all string skills at once: in to search, a loop over letters and building a new string.',
      hints: ['In show_word: for letter in word: if letter in guessed: shown += letter + " " else: shown += "_ ".', 'Game loop: while lives > 0 and "_" in show_word(secret, guessed):'],
    },
    {
      py: 'Debug it! This hashtag maker should turn `diwali sale today` into `#DiwaliSaleToday`. It has two bugs (look closely at the brackets). Fix them.',
      title: 'Debug it: the hashtag maker',
      phase: 'probe',
      starter: 'text = input("Phrase: ")\nwords = text.split\ntag = "#"\nfor w in words:\n    tag = tag + w.title\nprint(tag)\n',
      inputs: ['diwali sale today'],
      goals: [
        ['Makes #DiwaliSaleToday', { t: 'output', contains: ['#DiwaliSaleToday'], exactCase: true, inputs: ['diwali sale today'], msg: 'Split the phrase into words, then add each word with a capital letter.' }],
        ['Works for any phrase', { t: 'output', contains: ['#HappyHoli'], exactCase: true, inputs: ['happy holi'], msg: 'happy holi should become #HappyHoli.' }],
      ],
      solution: 'text = input("Phrase: ")\nwords = text.split()\ntag = "#"\nfor w in words:\n    tag = tag + w.title()\nprint(tag)\n',
      explain: 'A method only runs when you add round brackets: text.split() and w.title().',
      hints: ['text.split without brackets is the method itself, not a list of words.', 'w.title also needs brackets to give back the new word.'],
    },
  ],
  teacher: {
    explain: 'A string is a sequence of characters, each with an index from 0 (and negative indexes from the end). Slicing [start:stop:step] cuts out a piece and stops before stop; [::-1] reverses. String methods like upper, lower, title, replace, count and split return NEW strings, because strings cannot be changed in place. in searches inside a string, and for letter in word loops over characters. Hangman uses all of these: in to check a guess, a loop to build the display, and a new string each time.',
    analogy: 'A string is like a train of carriages with numbers painted on them, starting at 0. A slice is uncoupling a group of carriages, and reversing is driving the train backwards. You cannot repaint one carriage, but you can build a new train.',
    vocab: [
      ['index', 'The position number of a letter, starting at 0.'],
      ['slice', 'A piece of a string, like word[0:3].'],
      ['method', 'A command attached to a value with a dot, like word.upper().'],
      ['immutable', 'Cannot be changed; strings are immutable, so we build new ones.'],
      ['palindrome', 'A word that reads the same backwards, like Malayalam.'],
      ['.split()', 'Breaks a sentence into a list of words.'],
    ],
    demo: '1) Type city = "Bengaluru" and write the indexes 0 to 8 under it on the whiteboard. Print city[0], city[-1] and city[0:5]. 2) Ask the class to predict city[2:6] before running. 3) Print city[::-1]. 4) Show text.title(), replace, count and split on "chai and samosa". 5) Try word[0] = "M" and read the TypeError; fix with "M" + word[1:]. 6) Build the show_word loop for "mango" with guessed = ["m", "o"] and print it.',
    unplugged: 'Human Hangman (5 min game): the teacher draws blanks for a word like R A N G O L I and learners guess letters in the chat. Keep a lives counter on the board. Afterwards ask: what did I check for every guess, and what did I redraw each time? (Is the letter in the word? Redraw the blanks with the found letters.) That is the program.',
    prompts: [
      ['What is word[-1]?', 'The last letter of the word.'],
      ['What does "Bengaluru"[0:5] give?', 'Benga, the letters at index 0 to 4.'],
      ['Why does word[0] = "M" crash?', 'Strings cannot be changed; build a new string instead.'],
      ['How can you check if a letter is in the secret word?', 'if guess in secret:'],
      ['Why do methods need ( ) at the end?', 'The brackets run the method; without them you just name it.'],
    ],
    support: 'Give a printed index strip for “monsoon” and a fill-in show_word skeleton. Learners can start Hangman with a fixed secret = "mango" and add random.choice last.',
    stretch: 'Draw the hangman picture with a list of ASCII art stages, or give a hint letter when only 2 lives are left.',
    mis: [
      ['Indexes start at 1', 'The first letter is at index 0.'],
      ['word[0:3] includes index 3', 'A slice stops just before the end number.'],
      ['word.upper() changes word', 'It returns a new string; store it: word = word.upper().'],
      ['text.split gives the words', 'Methods need brackets: text.split().'],
    ],
    successCriteria: ['I can use indexes and slices to get parts of a string.', 'I can use string methods like upper, replace, count and split.', 'I can loop over the letters of a word and use in to search text.', 'I can build a new string piece by piece.'],
    homework: 'Play Hangman with someone at home using words they choose for your list. Add a hint: print the first letter of the word when lives reaches 2.',
    exit: 'name = "Kabaddi". What do name[0:3] and name[::-1] give?',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Human Hangman', doing: 'Play Human Hangman (unplugged) with RANGOLI. Ask what the “program” checked and redrew for each guess.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Chat poll: “What is monsoon backwards?” Play the video with captions; pause at “Index and slice” to predict city[2:6].' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo with the index strip, then everyone types the word explorer. Thumbs check: “Is Malayalam a palindrome?”' },
      { minutes: 8, stage: 'Challenge, predict and match', doing: 'Vowel counter and palindrome challenge, the slice prediction and the monsoon match. Quick competition: who finds the longest palindrome in English or Hindi?' },
      { minutes: 15, stage: 'Hangman in breakout pairs', doing: 'Breakout pairs build Hangman: one writes show_word and tests it, the other writes the game loop; then combine. Partners play with each other’s word lists.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the hashtag maker”. The winner explains why brackets matter.' },
      { minutes: 7, stage: 'Hangman show-and-tell', doing: 'Two learners run Hangman live while the class guesses letters in the chat. Cheer every correct letter.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: Kabaddi slices.' },
    ],
  },
  files: [{ name: 'word_explorer.py', title: 'Build-along: word explorer', audience: 'student', content: L6_EXPLORER }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 7 · Lists of dictionaries and simple classes
// ─────────────────────────────────────────────────────────────
const L7_TEAM = `# Cricket team sheet: a list of dictionaries, then a class
team = [
    {"name": "Riya", "runs": 45, "wickets": 1},
    {"name": "Kabir", "runs": 12, "wickets": 3},
    {"name": "Zoya", "runs": 67, "wickets": 0},
]
team.append({"name": "Arjun", "runs": 28, "wickets": 2})

for player in team:
    print(f"{player['name']}: {player['runs']} runs, {player['wickets']} wickets")

total = 0
for player in team:
    total += player["runs"]
print("Team total:", total)

class Player:
    def __init__(self, name):
        self.name = name
        self.runs = 0

    def hit(self, runs):
        self.runs += runs
        print(f"{self.name} hits {runs}! Total: {self.runs}")

meera = Player("Meera")
meera.hit(4)
meera.hit(6)`;

const L7_PET = `# Virtual Pet
# Made by: Kabir

class Pet:
    def __init__(self, name):
        self.name = name
        self.hunger = 5
        self.happiness = 5
        self.energy = 5

    def feed(self):
        self.hunger = max(0, self.hunger - 2)
        print(f"{self.name} munches happily.")

    def play(self):
        self.happiness += 2
        self.energy -= 2
        self.hunger += 1
        print(f"{self.name} chases the ball!")

    def sleep(self):
        self.energy += 3
        print(f"{self.name} curls up for a nap. Zzz")

    def mood(self):
        if self.hunger >= 8 or self.energy <= 1:
            return "grumpy"
        elif self.happiness >= 7:
            return "very happy"
        return "okay"

    def status(self):
        print(f"{self.name} | Hunger: {self.hunger} | Happiness: {self.happiness} | Energy: {self.energy} | Mood: {self.mood()}")

print("=== VIRTUAL PET ===")
pet = Pet(input("Name your pet: ").strip())
playing = True
while playing:
    pet.status()
    cmd = input("feed, play, sleep or quit? ").strip().lower()
    if cmd == "feed":
        pet.feed()
    elif cmd == "play":
        pet.play()
    elif cmd == "sleep":
        pet.sleep()
    elif cmd == "quit":
        playing = False
    else:
        print("Unknown command. Try feed, play or sleep.")
print(f"Bye! {pet.name} will miss you.")`;

export const P7 = lesson(7, {
  title: 'Records and Classes: Virtual Pet',
  objective: 'Store records in a list of dictionaries, write your first class with attributes and methods, and build a virtual pet game.',
  concept: 'lists of dicts, classes',
  minutes: 60,
  hook: ['code', 'class Pet:\n    def __init__(self, name):\n        self.name = name\n\nmoti = Pet("Moti")\nprint(moti.name, "says woof!")', 'Moti says woof!'],
  intro: 'Today you organise data like a real app, from a whole cricket team to your own virtual pet.',
  cards: [
    { emoji: '📋', title: 'A list of dictionaries', body: 'A list can hold dictionaries, one for each player. team[0]["runs"] means the runs of the first player. This is how real apps store tables of data.' },
    { emoji: '🔁', title: 'Loop over the records', body: 'for player in team: gives you one dictionary at a time. You can read it, add it up or change it, like player["runs"] += 4. Every record has the same keys.' },
    { emoji: '🏗️', title: 'A class is a blueprint', body: 'class Pet: describes what every pet has and what it can do. Pet("Moti") builds one real pet object from the blueprint. You can build as many pets as you like.' },
    { emoji: '⚙️', title: 'self, attributes and methods', body: 'Inside the class, self means this particular pet. self.hunger = 5 is an attribute, a value the pet remembers. def feed(self): is a method, an action you call with pet.feed().' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'A team in one list',
      lang: 'python',
      code: 'team = [\n    {"name": "Riya", "runs": 45},\n    {"name": "Kabir", "runs": 12},\n    {"name": "Zoya", "runs": 67},\n]\nprint(team[0]["name"])\nfor player in team:\n    print(player["name"], player["runs"])',
      output: 'Riya\nRiya 45\nKabir 12\nZoya 67',
      say: ['Each player is a dictionary with the same keys, and the list holds them all.', 'Team zero name means the first record, then its name key.'],
    },
    {
      kind: 'code',
      heading: 'Find the top scorer',
      lang: 'python',
      code: 'best = team[0]\nfor player in team:\n    if player["runs"] > best["runs"]:\n        best = player\nprint("Top scorer:", best["name"])',
      output: 'Top scorer: Zoya',
      say: ['We start by guessing that the first player is the best.', 'Whenever we find someone with more runs, they become the new best.'],
    },
    {
      kind: 'code',
      heading: 'A class is a blueprint',
      lang: 'python',
      code: 'class Pet:\n    def __init__(self, name):\n        self.name = name\n        self.hunger = 5\n\nmoti = Pet("Moti")\nbijli = Pet("Bijli")\nprint(moti.name, moti.hunger)\nprint(bijli.name, bijli.hunger)',
      output: 'Moti 5\nBijli 5',
      say: ['The init method runs every time we build a new pet from the blueprint.', 'Moti and Bijli are two separate objects, and each remembers its own name.'],
    },
    {
      kind: 'code',
      heading: 'Methods are actions',
      lang: 'python',
      code: 'class Pet:\n    def __init__(self, name):\n        self.name = name\n        self.hunger = 5\n\n    def feed(self):\n        self.hunger -= 2\n        print(f"{self.name} munches. Hunger: {self.hunger}")\n\nmoti = Pet("Moti")\nmoti.feed()',
      output: 'Moti munches. Hunger: 3',
      say: ['A method is a function that lives inside the class and always starts with self.', 'When we call moti dot feed, self means Moti, so only Moti gets less hungry.'],
    },
    {
      kind: 'code',
      heading: 'Spot the bug',
      lang: 'python',
      code: 'class Pet:\n    def __init__(self, name):\n        self.name = name\n\n    def wag():\n        print("Wag wag!")\n\nPet("Moti").wag()',
      output: 'TypeError: wag() takes 0 positional arguments but 1 was given',
      say: ['Python always passes the object itself into a method, as the first argument.', 'The method forgot to accept it. Writing self in the brackets fixes the error.'],
    },
  ],
  build: {
    title: 'Build along: cricket team sheet',
    intro: 'Type along to store a whole team in one list, then meet your first class. You will reuse both ideas in the pet game.',
    steps: [
      { title: 'A list of dictionaries', text: 'Type team = [ and then one dictionary per line: {"name": "Riya", "runs": 45, "wickets": 1}, and two more players. Close with ].', tip: 'Each dictionary needs a comma after it, like items in any list.' },
      { title: 'Add a player', text: 'Type team.append({"name": "Arjun", "runs": 28, "wickets": 2}).' },
      { title: 'Print the team sheet', text: 'Loop for player in team: and print each name, runs and wickets with an f-string.', tip: 'Inside an f-string with double quotes, use single quotes for the keys: player[\'name\'].' },
      { title: 'Add up the runs', text: 'Set total = 0 and loop again with total += player["runs"]. Print the team total.' },
      { title: 'Your first class', text: 'Type class Player: with def __init__(self, name): setting self.name and self.runs = 0, and a hit(self, runs) method. Make meera = Player("Meera") and call meera.hit(4).' },
    ],
  },
  acts: [
    {
      py: 'Team manager functions. Write total_runs(team) that returns the total runs of every player in the list, and top_scorer(team) that returns the NAME of the player with the most runs. Each player is a dictionary with "name" and "runs" keys.',
      title: 'Python Lab: team manager',
      starter: 'team = [\n    {"name": "Riya", "runs": 45},\n    {"name": "Kabir", "runs": 12},\n    {"name": "Zoya", "runs": 67},\n]\n\ndef total_runs(team):\n    return 0\n\ndef top_scorer(team):\n    return team[0]["name"]\n\nprint("Total:", total_runs(team))\nprint("Top scorer:", top_scorer(team))\n',
      goals: [
        ['Adds up the runs', { t: 'func', name: 'total_runs', cases: [{ args: [[{ name: 'A', runs: 10 }, { name: 'B', runs: 50 }]], expect: 60 }, { args: [[]], expect: 0 }], msg: 'Loop over the team and add player["runs"] to a total, then return it.' }],
        ['Finds the top scorer', { t: 'func', name: 'top_scorer', cases: [{ args: [[{ name: 'A', runs: 10 }, { name: 'B', runs: 50 }, { name: 'C', runs: 20 }]], expect: 'B' }, { args: [[{ name: 'Solo', runs: 5 }]], expect: 'Solo' }], msg: 'Keep the best player so far and replace it when someone has more runs. Return the name.' }],
        ['Prints Zoya as top scorer', { t: 'output', contains: ['Total: 124', 'Top scorer: Zoya'], msg: 'For the team given, print Total: 124 and Top scorer: Zoya.' }],
        ['Uses loops and return', { t: 'uses', what: ['def', 'for', 'return', 'dict'], msg: 'Loop with for player in team: inside each function.' }],
      ],
      solution: 'team = [\n    {"name": "Riya", "runs": 45},\n    {"name": "Kabir", "runs": 12},\n    {"name": "Zoya", "runs": 67},\n]\n\ndef total_runs(team):\n    total = 0\n    for player in team:\n        total += player["runs"]\n    return total\n\ndef top_scorer(team):\n    best = team[0]\n    for player in team:\n        if player["runs"] > best["runs"]:\n            best = player\n    return best["name"]\n\nprint("Total:", total_runs(team))\nprint("Top scorer:", top_scorer(team))\n',
      explain: 'Looping over records and keeping a running total or a “best so far” is how every leaderboard works.',
      hints: ['total_runs: total = 0, then for player in team: total += player["runs"], then return total.', 'top_scorer: best = team[0], then if player["runs"] > best["runs"]: best = player. Return best["name"].'],
    },
    {
      code: 'class Player:\n    def __init__(self, name):\n        self.name = name\n        self.runs = 0\n\n    def hit(self, r):\n        self.runs += r\n\np = Player("Arjun")\np.hit(4)\np.hit(6)\nprint(p.name, p.runs)',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['Arjun 10', 'Arjun 6', 'Arjun 0', 'p 10'],
      answer: 0,
      why: 'runs starts at 0 in __init__, then hit adds 4 and 6, so Arjun has 10 runs.',
      title: 'Predict the output: the batting object',
    },
    {
      order: 'Put the lines of a class program in order',
      steps: ['class Pet:', 'def __init__(self, name):', 'self.name = name', 'def feed(self):', 'moti = Pet("Moti")', 'moti.feed()'],
      why: 'The class and its methods come first. Then we build an object from the class, and only then can we call its methods.',
      title: 'Build the blueprint',
    },
    {
      py: 'Project: Virtual pet! Write a class Pet. In __init__(self, name) set hunger, happiness and energy to 5. Methods: feed() lowers hunger by 2 (never below 0); play() adds 2 happiness, takes 2 energy and adds 1 hunger; sleep() adds 3 energy; status() prints a line like `Moti | Hunger: 5 | Happiness: 5 | Energy: 5`. Ask for the pet’s name, then loop: show the status, ask for a command (feed, play, sleep or quit) and call the right method. Any other command prints `Unknown command`.',
      title: 'Project: virtual pet',
      mode: 'project',
      starter: '# Virtual Pet\n# Made by: (your name)\n\nclass Pet:\n    def __init__(self, name):\n        self.name = name\n        self.hunger = 5\n        # add happiness and energy\n\n    def feed(self):\n        pass\n\n    def status(self):\n        print(f"{self.name} | Hunger: {self.hunger}")\n\npet = Pet(input("Name your pet: "))\n',
      inputs: ['Moti', 'feed', 'quit'],
      goals: [
        ['Feeding lowers hunger to 3', { t: 'output', contains: ['Hunger: 5', 'Hunger: 3'], inputs: ['Moti', 'feed', 'quit'], msg: 'Show the status before every command. After feed, hunger goes from 5 to 3.' }],
        ['Playing changes happiness and energy', { t: 'output', contains: ['Happiness: 7', 'Energy: 3'], inputs: ['Moti', 'play', 'quit'], msg: 'play() adds 2 happiness and takes away 2 energy.' }],
        ['Unknown commands get a message', { t: 'output', contains: ['Unknown command'], inputs: ['Moti', 'dance', 'quit'], msg: 'For any other command, print Unknown command.' }],
        ['Uses a class and a game loop', { t: 'uses', what: ['class', 'def', 'while', 'input', 'if', 'elif'], msg: 'Use class Pet with methods, and a while loop that ends on quit.' }],
      ],
      solution: L7_PET,
      requirements: ['A Pet class with name, hunger, happiness and energy attributes', 'feed, play and sleep methods that change the attributes', 'A status method that prints all the numbers', 'A game loop that asks for commands until quit', 'An Unknown command message for anything else', 'Bonus: a mood method that returns how the pet feels'],
      reflection: 'Why is a class a good way to store a pet, instead of four separate variables?',
      explain: 'Your pet is an object: it remembers its own data and knows its own actions. Big games are built from objects like this.',
      hints: ['feed: self.hunger = max(0, self.hunger - 2). play: three lines that change self.happiness, self.energy and self.hunger.', 'The loop: while playing: pet.status(), cmd = input(...), then if / elif for each command and else: print("Unknown command").'],
    },
    {
      py: 'Debug it! This program should print `Moti 3` (the pet’s name and its hunger after one feed). It has two bugs about self. Fix them.',
      title: 'Debug it: the forgetful pet',
      phase: 'probe',
      starter: 'class Pet:\n    def __init__(self, name):\n        name = name\n        self.hunger = 5\n\n    def feed():\n        self.hunger -= 2\n\npet = Pet("Moti")\npet.feed()\nprint(pet.name, pet.hunger)\n',
      goals: [
        ['Runs without errors', { t: 'noError', msg: 'Every method needs self as its first parameter, and attributes are stored on self.' }],
        ['Prints Moti 3', { t: 'output', contains: ['Moti 3'], msg: 'The pet should remember its name, and feeding makes hunger 3.' }],
      ],
      solution: 'class Pet:\n    def __init__(self, name):\n        self.name = name\n        self.hunger = 5\n\n    def feed(self):\n        self.hunger -= 2\n\npet = Pet("Moti")\npet.feed()\nprint(pet.name, pet.hunger)\n',
      explain: 'name = name only changes a temporary variable; self.name = name stores it on the pet. And methods must accept self.',
      hints: ['Read the error: feed() takes 0 arguments but 1 was given. What is the hidden argument?', 'After that, AttributeError: the pet has no name. Store it with self.name = name.'],
    },
  ],
  teacher: {
    explain: 'Real programs store many records with the same shape. A list of dictionaries is a table: each dictionary is one row, and every row has the same keys. Looping over it lets us total, search and rank. A class goes one step further: it is a blueprint that bundles data (attributes) with actions (methods). __init__ runs when an object is built, and self means “this object”, so each pet keeps its own numbers. Keep classes simple today: attributes and methods only.',
    analogy: 'A class is like the design of a Tamagotchi toy in a factory. The design says every toy has hunger and happiness and a feed button. Each toy that comes off the line (an object) has its own numbers, and pressing feed on yours does not feed your friend’s.',
    vocab: [
      ['record', 'One item of data with several parts, like one player’s dictionary.'],
      ['list of dictionaries', 'A table of records: one dictionary per row.'],
      ['class', 'A blueprint that describes data and actions together.'],
      ['object', 'One real thing built from a class, like Pet("Moti").'],
      ['attribute', 'A value an object remembers, like self.hunger.'],
      ['method', 'A function inside a class, called like pet.feed().'],
    ],
    demo: '1) Type the team list with three dictionaries and print team[0]["name"]. 2) Loop and print each player; then total the runs. 3) Write the top-scorer loop and ask the class to predict the winner. 4) Type class Pet: with __init__ setting self.name and self.hunger; make two pets and print both names. 5) Add def feed(self): and call moti.feed(); print both pets’ hunger to show only Moti changed. 6) Delete self from feed and show the TypeError; put it back.',
    unplugged: 'Pet Factory (5 min game): the teacher draws a “Pet blueprint” card on the board with three attributes (hunger, happiness, energy) and three buttons (feed, play, sleep). Three learners each “become” a pet object with their own name and start every number at 5 on paper. The class calls “Moti.feed()!” or “Bijli.play()!” and only that pet updates its numbers. Ask: why didn’t the other pets change?',
    prompts: [
      ['What does team[1]["runs"] mean?', 'The runs of the second player in the list.'],
      ['How do you find the top scorer?', 'Keep the best so far and replace it when a player has more runs.'],
      ['What is the difference between a class and an object?', 'The class is the blueprint; an object is one thing built from it.'],
      ['What does self mean inside a method?', 'The object the method was called on.'],
      ['When does __init__ run?', 'Every time a new object is created, like Pet("Moti").'],
    ],
    support: 'Give the pet starter with __init__ and status complete, so learners write only feed, play, sleep and the loop. Provide a card: method = def name(self): … called with object.name().',
    stretch: 'Make a list of two pets and let the player choose which one to look after, or add a day counter and make the pet grumpy if hunger reaches 10.',
    mis: [
      ['A method does not need self', 'Python passes the object in automatically, so every method needs self first.'],
      ['name = name inside __init__ saves the name', 'Only self.name = name stores it on the object.'],
      ['Changing one object changes all of them', 'Each object has its own attributes.'],
      ['team["runs"] gives every player’s runs', 'team is a list: pick a player first, team[0]["runs"], or loop.'],
    ],
    successCriteria: ['I can store and loop over records in a list of dictionaries.', 'I can find a total and a top value in a list of records.', 'I can write a class with __init__, attributes and methods.', 'I can create objects and call their methods.'],
    homework: 'Teach someone at home to look after your virtual pet. Then add one new method they suggest, like bath() or trick().',
    exit: 'In class Pet, which line stores the name on the pet: name = name or self.name = name? Why?',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Pet Factory', doing: 'Play Pet Factory (unplugged): learners become pet objects and update only their own numbers when called.' },
      { minutes: 5, stage: 'Hook and video', doing: 'Show the hook. Chat poll: “Name a pet for our class object!” Play the video with captions; pause at “A class is a blueprint”.' },
      { minutes: 10, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone types the cricket team sheet and the Player class. Thumbs check: “Did Meera reach 10 runs?”' },
      { minutes: 8, stage: 'Challenge, predict and order', doing: 'Team manager challenge, the batting object prediction and the class line order. Quick competition: first correct order in the chat wins.' },
      { minutes: 15, stage: 'Virtual pet in breakout pairs', doing: 'Pair programming in breakout rooms: one partner writes the methods, the other writes the game loop; swap and test with feed, play, dance and quit.' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the forgetful pet”. The winner explains what self does.' },
      { minutes: 7, stage: 'Pet show-and-tell', doing: 'Three learners introduce their pet live; the class types commands in the chat and the owner runs them. Vote for the happiest pet.' },
      { minutes: 4, stage: 'Wrap-up and exit ticket', doing: 'Fist-to-five on the success criteria. Exit ticket: self.name question.' },
    ],
  },
  files: [{ name: 'team_sheet.py', title: 'Build-along: cricket team sheet', audience: 'student', content: L7_TEAM }],
});

// ─────────────────────────────────────────────────────────────
// Lesson 8 · Capstone: Battle Arena
// ─────────────────────────────────────────────────────────────
const L8_FIGHTERS = `# Battle Arena: fighters and one attack
import random

hero = {"name": "Veer", "hp": 100, "attack": 12}
goblin = {"name": "Goblin", "hp": 40, "attack": 8}

def attack(attacker, defender):
    damage = random.randint(attacker["attack"] - 4, attacker["attack"] + 4)
    defender["hp"] = max(0, defender["hp"] - damage)
    print(f"{attacker['name']} hits {defender['name']} for {damage}!")
    return damage

def show_stats(fighter):
    print(f"{fighter['name']}: {fighter['hp']} HP")

attack(hero, goblin)
show_stats(goblin)
attack(goblin, hero)
show_stats(hero)`;

const L8_ARENA = `# Battle Arena
# Made by: Meera
import random

def roll_damage(low, high):
    return random.randint(low, high)

def apply_damage(hp, damage):
    return max(0, hp - damage)

def heal_hp(hp, amount, max_hp):
    return min(max_hp, hp + amount)

def show_stats(player, enemy):
    print(f"{player['name']}: {player['hp']}/{player['max_hp']} HP, potions: {player['potions']}")
    print(f"{enemy['name']}: {enemy['hp']} HP")

enemies = [
    {"name": "Goblin", "hp": 45, "low": 4, "high": 9},
    {"name": "Stone Golem", "hp": 60, "low": 3, "high": 7},
    {"name": "Fire Bat", "hp": 35, "low": 6, "high": 11},
]

print("=== BATTLE ARENA ===")
player = {"name": input("Name your hero: ").strip(), "hp": 100, "max_hp": 100, "potions": 3}
enemy = random.choice(enemies)
print(f"A wild {enemy['name']} appears!")

turn = 1
while player["hp"] > 0 and enemy["hp"] > 0:
    print(f"--- Turn {turn} ---")
    show_stats(player, enemy)
    move = input("attack or heal? ").strip().lower()
    if move == "attack":
        damage = roll_damage(8, 15)
        enemy["hp"] = apply_damage(enemy["hp"], damage)
        print(f"You strike for {damage} damage!")
    elif move == "heal":
        if player["potions"] > 0:
            player["potions"] -= 1
            player["hp"] = heal_hp(player["hp"], 25, player["max_hp"])
            print("You drink a potion. Glug glug!")
        else:
            print("No potions left!")
    else:
        print("Unknown move! You trip over your own feet.")

    if enemy["hp"] > 0:
        hit = roll_damage(enemy["low"], enemy["high"])
        player["hp"] = apply_damage(player["hp"], hit)
        print(f"The {enemy['name']} hits you for {hit}!")
    turn += 1

if player["hp"] > 0:
    print(f"Victory! {player['name']} defeated the {enemy['name']}!")
else:
    print(f"Defeat! The {enemy['name']} was too strong this time.")
print("GAME OVER")`;

const ATTACKS = Array(30).fill('attack') as string[];

export const P8 = lesson(8, {
  title: 'Capstone: Battle Arena',
  objective: 'Design, build and playtest a turn-based text battle game with fighter stats in dictionaries, functions for attack and heal, random damage, a game loop and win or lose endings.',
  concept: 'game design, functions, data',
  minutes: 60,
  intro: 'It is capstone time! Today you design and build your own turn-based Battle Arena game.',
  hook: ['code', 'enemy = {"name": "Goblin", "hp": 12}\nenemy["hp"] = max(0, enemy["hp"] - 15)\nprint(enemy["name"], "HP:", enemy["hp"])', 'Goblin HP: 0'],
  cards: [
    { emoji: '🗂️', title: 'Stats live in dictionaries', body: 'Each fighter is a dictionary, like {"name": "Goblin", "hp": 45}. A list of enemy dictionaries lets random.choice pick a surprise opponent. Changing enemy["hp"] changes that fighter’s health.' },
    { emoji: '⚔️', title: 'Functions for every action', body: 'roll_damage, apply_damage and heal_hp each do one job and return a number. max(0, hp - damage) stops health going below zero. min(max_hp, hp + amount) stops healing above the maximum.' },
    { emoji: '🔁', title: 'The game loop', body: 'while player["hp"] > 0 and enemy["hp"] > 0: keeps the battle going. Each turn shows the stats, asks for a move, and then the enemy strikes back. When either health reaches zero, the loop ends.' },
    { emoji: '🏁', title: 'Win, lose and balance', body: 'After the loop, an if decides victory or defeat. Then playtest it. If the game is too easy or too hard, change the numbers: that is called balancing.' },
  ],
  scenes: [
    {
      kind: 'code',
      heading: 'Fighters are dictionaries',
      lang: 'python',
      code: 'hero = {"name": "Veer", "hp": 100, "potions": 3}\nenemies = [\n    {"name": "Goblin", "hp": 45},\n    {"name": "Fire Bat", "hp": 35},\n]\nenemy = random.choice(enemies)\nprint(f"A wild {enemy[\'name\']} appears!")',
      output: 'A wild Fire Bat appears!',
      say: ['Every fighter keeps its stats in a dictionary, with the same keys for each one.', 'Random choice picks one enemy from the list, so every battle can be different.'],
    },
    {
      kind: 'code',
      heading: 'Small functions, big game',
      lang: 'python',
      code: 'def apply_damage(hp, damage):\n    return max(0, hp - damage)\n\ndef heal_hp(hp, amount, max_hp):\n    return min(max_hp, hp + amount)\n\nprint(apply_damage(10, 15))\nprint(heal_hp(90, 25, 100))',
      output: '0\n100',
      say: ['Apply damage never lets health fall below zero, thanks to max.', 'Heal never goes above the maximum health, thanks to min.'],
    },
    {
      kind: 'code',
      heading: 'One turn of the battle',
      lang: 'python',
      code: 'move = input("attack or heal? ")\nif move == "attack":\n    damage = roll_damage(8, 15)\n    enemy["hp"] = apply_damage(enemy["hp"], damage)\n    print(f"You strike for {damage} damage!")',
      output: 'attack or heal? attack\nYou strike for 11 damage!',
      say: ['The player chooses a move, and the program calls the right functions.', 'The damage is random, so every swing feels a little different.'],
    },
    {
      kind: 'code',
      heading: 'The loop and the ending',
      lang: 'python',
      code: 'while hero["hp"] > 0 and enemy["hp"] > 0:\n    take_turn()\n\nif hero["hp"] > 0:\n    print("Victory!")\nelse:\n    print("Defeat!")\nprint("GAME OVER")',
      output: 'Victory!\nGAME OVER',
      say: ['The loop keeps going only while both fighters are still standing.', 'After the loop, one if statement decides whether you won or lost.'],
    },
    {
      kind: 'steps',
      heading: 'Design, build, playtest, balance',
      tool: 'Paper and Python Lab',
      steps: ['Design your hero, 3 enemies and their stats on paper', 'Write and test apply_damage and heal_hp', 'Code one turn: show stats, ask a move, enemy hits back', 'Wrap it in the game loop and add the endings', 'Playtest five battles and note who wins', 'Balance the numbers so the game is fair and exciting'],
      say: ['Game designers plan their fighters and numbers before writing any code.', 'Then they playtest again and again, and tweak the numbers until the battle feels fair.'],
    },
  ],
  build: {
    title: 'Build along: fighters and one attack',
    intro: 'Build the core of the arena together: two fighters and an attack function. Your capstone grows from this file.',
    steps: [
      { title: 'Two fighters', text: 'Type import random, then hero = {"name": "Veer", "hp": 100, "attack": 12} and goblin = {"name": "Goblin", "hp": 40, "attack": 8}.' },
      { title: 'The attack function', text: 'Type def attack(attacker, defender): with damage = random.randint(attacker["attack"] - 4, attacker["attack"] + 4).' },
      { title: 'Take the damage', text: 'Add defender["hp"] = max(0, defender["hp"] - damage), print who hit whom, and return damage.', tip: 'The function changes the dictionary you pass in, so the defender really loses health.' },
      { title: 'Show the stats', text: 'Write show_stats(fighter) that prints the name and HP. Call attack(hero, goblin) and show_stats(goblin).' },
      { title: 'Plan your arena', text: 'On paper, design your hero, three enemies with HP and damage ranges, and the moves the player can choose.' },
    ],
  },
  acts: [
    {
      py: 'Battle helpers. Write attack(attacker, defender, damage) that takes damage off defender["hp"] (never below 0) and returns the defender’s new HP. Write heal(fighter, amount) that adds amount to fighter["hp"] (never above fighter["max_hp"]) and returns the new HP.',
      title: 'Python Lab: attack and heal',
      starter: 'def attack(attacker, defender, damage):\n    defender["hp"] = defender["hp"] - damage\n    return defender["hp"]\n\ndef heal(fighter, amount):\n    fighter["hp"] = fighter["hp"] + amount\n    return fighter["hp"]\n\nhero = {"name": "Hero", "hp": 90, "max_hp": 100}\ngoblin = {"name": "Goblin", "hp": 30, "max_hp": 30}\nprint(attack(hero, goblin, 40))\nprint(heal(hero, 20))\n',
      goals: [
        ['Attack takes away HP', { t: 'func', name: 'attack', cases: [{ args: [{ name: 'Hero', hp: 100 }, { name: 'Goblin', hp: 30 }, 12], expect: 18 }, { args: [{ name: 'Hero', hp: 100 }, { name: 'Goblin', hp: 30 }, 40], expect: 0 }], msg: 'attack with 40 damage on 30 HP must return 0, not -10. Use max(0, …).' }],
        ['Heal never goes over the maximum', { t: 'func', name: 'heal', cases: [{ args: [{ name: 'Hero', hp: 90, max_hp: 100 }, 20], expect: 100 }, { args: [{ name: 'Hero', hp: 50, max_hp: 100 }, 20], expect: 70 }], msg: 'heal from 90 by 20 with max_hp 100 must return 100. Use min(fighter["max_hp"], …).' }],
        ['Uses functions with dictionaries', { t: 'uses', what: ['def', 'return', 'dict'], msg: 'Change the dictionary inside each function and return the new HP.' }],
      ],
      solution: 'def attack(attacker, defender, damage):\n    defender["hp"] = max(0, defender["hp"] - damage)\n    return defender["hp"]\n\ndef heal(fighter, amount):\n    fighter["hp"] = min(fighter["max_hp"], fighter["hp"] + amount)\n    return fighter["hp"]\n\nhero = {"name": "Hero", "hp": 90, "max_hp": 100}\ngoblin = {"name": "Goblin", "hp": 30, "max_hp": 30}\nprint(attack(hero, goblin, 40))\nprint(heal(hero, 20))\n',
      explain: 'max and min keep numbers inside fair limits. Every game uses this trick for health, money and scores.',
      hints: ['max(0, x) gives x, unless x is below 0, then it gives 0.', 'min(100, x) gives x, unless x is above 100, then it gives 100.'],
    },
    {
      code: 'hp = 20\nfor dmg in [5, 8, 9]:\n    hp = max(0, hp - dmg)\nprint(hp)',
      lang: 'python',
      ask: 'What does this program print?',
      options: ['0', '-2', '2', '20'],
      answer: 0,
      why: '20 − 5 = 15, 15 − 8 = 7, and 7 − 9 would be −2, but max(0, …) stops it at 0.',
      title: 'Predict the output: the last hit',
    },
    {
      order: 'Put one turn of the battle in order',
      steps: ['Show both fighters’ stats', 'Ask the player for a move', 'Do the player’s move (attack or heal)', 'If the enemy still has HP, it hits back', 'Add 1 to the turn counter', 'Loop again while both have HP left'],
      why: 'The player needs to see the stats before choosing, and the enemy only strikes back if it is still standing.',
      title: 'Plan a battle turn',
    },
    {
      py: 'Project: Battle Arena! First ask for your hero’s name. Store the player’s stats in a dictionary (hp 100, max_hp 100, potions) and pick an enemy at random from a list of enemy dictionaries (keep enemy HP at 60 or less). Write roll_damage(low, high), apply_damage(hp, damage) (never below 0) and heal_hp(hp, amount, max_hp) (never above max_hp). In a game loop, show the stats and ask `attack or heal`. Attack does random damage of 8 or more; heal uses a potion. Anything else prints `Unknown move`. If the enemy survives, it hits back. End with a victory or defeat message and then `GAME OVER`.',
      title: 'Project: Battle Arena',
      mode: 'project',
      starter: '# Battle Arena\n# Made by: (your name)\nimport random\n\ndef roll_damage(low, high):\n    return random.randint(low, high)\n\ndef apply_damage(hp, damage):\n    # never below 0\n    pass\n\ndef heal_hp(hp, amount, max_hp):\n    # never above max_hp\n    pass\n\nenemies = [\n    {"name": "Goblin", "hp": 45, "low": 4, "high": 9},\n]\n\nplayer = {"name": input("Name your hero: "), "hp": 100, "max_hp": 100, "potions": 3}\nenemy = random.choice(enemies)\n',
      inputs: ['Veer', ...ATTACKS],
      goals: [
        ['apply_damage stops at 0', { t: 'func', name: 'apply_damage', cases: [{ args: [10, 15], expect: 0 }, { args: [50, 12], expect: 38 }], msg: 'apply_damage(10, 15) → 0 and apply_damage(50, 12) → 38. Use max(0, hp - damage).' }],
        ['heal_hp stops at the maximum', { t: 'func', name: 'heal_hp', cases: [{ args: [90, 20, 100], expect: 100 }, { args: [40, 25, 100], expect: 65 }], msg: 'heal_hp(90, 20, 100) → 100. Use min(max_hp, hp + amount).' }],
        ['A battle of attacks ends', { t: 'output', contains: ['GAME OVER'], inputs: ['Veer', ...ATTACKS], msg: 'Keep attacking and the battle must end with a win or lose message and GAME OVER.' }],
        ['Unknown moves are handled', { t: 'output', contains: ['Unknown move'], inputs: ['Veer', 'dance', ...ATTACKS], msg: 'If the player types something else, print Unknown move.' }],
        ['Uses random, functions and a game loop', { t: 'uses', what: ['random', 'def', 'return', 'while', 'input', 'dict', 'list'], msg: 'Use dictionaries for stats, a list of enemies, random, functions and a while loop.' }],
      ],
      solution: L8_ARENA,
      requirements: ['Player and enemy stats stored in dictionaries, with a list of at least 3 enemies', 'roll_damage, apply_damage and heal_hp functions that return numbers', 'A game loop that runs while both fighters have HP', 'attack and heal moves, with limited potions', 'An Unknown move message for anything else', 'Victory and defeat endings, then GAME OVER'],
      reflection: 'Play five battles. How many did you win? Which number did you change to balance the game, and why?',
      explain: 'You designed and built a complete turn-based battle game from data, functions and a loop. That is real game development!',
      hints: ['apply_damage: return max(0, hp - damage). heal_hp: return min(max_hp, hp + amount).', 'The loop: while player["hp"] > 0 and enemy["hp"] > 0: then show stats, ask the move, use if / elif / else, and let the enemy hit back if enemy["hp"] > 0.'],
    },
    {
      py: 'Debug it! This mini battle should keep hitting the goblin until its HP is 0, then print `The goblin is defeated in ... turns!`. Right now it never ends. Fix the two bugs, and make sure enemy_hp never goes below 0.',
      title: 'Debug it: the goblin that would not fall',
      phase: 'probe',
      starter: 'import random\n\nenemy_hp = 30\nturns = 0\nwhile enemy_hp > 0:\n    damage = random.randint(5, 10)\n    enemy_hp - damage\n    turns += 1\nprint(f"The goblin is defeated in {turn} turns!")\n',
      goals: [
        ['The battle ends', { t: 'output', contains: ['defeated in'], msg: 'Store the new HP: enemy_hp = … Otherwise the loop never ends.' }],
        ['HP ends at exactly 0', { t: 'var', name: 'enemy_hp', equals: 0, msg: 'Use max(0, enemy_hp - damage) so HP never goes below 0.' }],
      ],
      solution: 'import random\n\nenemy_hp = 30\nturns = 0\nwhile enemy_hp > 0:\n    damage = random.randint(5, 10)\n    enemy_hp = max(0, enemy_hp - damage)\n    turns += 1\nprint(f"The goblin is defeated in {turns} turns!")\n',
      explain: 'enemy_hp - damage works out an answer and throws it away. You must store it. And {turn} was a typo for {turns}.',
      hints: ['Does the line enemy_hp - damage change enemy_hp? Nothing is stored!', 'Once the loop ends, read the NameError: is the variable called turn or turns?'],
    },
  ],
  teacher: {
    explain: 'The capstone combines the whole course. Fighter stats live in dictionaries and enemies in a list, so random.choice can pick one. Small functions do one job and return a number: roll_damage, apply_damage (max keeps HP at 0 or above) and heal_hp (min keeps HP at max or below). A while loop runs the battle while both fighters have HP, and an if after the loop decides the ending. Give time for design on paper first and for playtesting and balancing at the end.',
    analogy: 'The game is like a cricket match with an umpire. The dictionaries are the scoreboard, the functions are the umpire’s rules (out, four, six), and the game loop is the overs being bowled until the match is decided.',
    vocab: [
      ['HP', 'Hit points: a fighter’s health. At 0, they are defeated.'],
      ['turn-based', 'Players take turns, one action at a time.'],
      ['game loop', 'The loop that repeats each turn until the game ends.'],
      ['max() / min()', 'Give the bigger or smaller of two numbers; used to keep values in limits.'],
      ['balancing', 'Changing numbers so a game is fair and fun.'],
      ['playtest', 'Playing your own game to find bugs and boring parts.'],
    ],
    demo: '1) Show the design sheet: hero stats, three enemies, moves. 2) Type apply_damage and heal_hp and test them with (10, 15) and (90, 20, 100). 3) Type the player and enemy dictionaries and random.choice(enemies). 4) Code one turn without a loop: show stats, ask move, attack, enemy hits back. Run it twice. 5) Wrap it in while player["hp"] > 0 and enemy["hp"] > 0: and add the ending. 6) Play a full battle live, then change the enemy damage to show balancing.',
    unplugged: 'Paper Battle (5 min game): in pairs, one learner is the hero (100 HP, 3 potions) and the other is a Goblin (45 HP). Take turns rolling a real or online dice: hero damage is dice + 8, goblin damage is dice + 3, a potion heals 25. Keep HP on paper and never go below 0. After two minutes, ask: what repeated every turn, and when did the battle stop? That is the game loop.',
    prompts: [
      ['Why store stats in a dictionary?', 'All of a fighter’s values stay together under clear names like hp and potions.'],
      ['What does max(0, hp - damage) protect against?', 'HP going below zero.'],
      ['What is the loop condition for the battle?', 'Both fighters have HP above 0.'],
      ['Why does the enemy only hit back if its HP is above 0?', 'A defeated enemy cannot attack.'],
      ['What is balancing and how do you do it?', 'Changing numbers like HP and damage until the game is fair; you playtest and adjust.'],
    ],
    support: 'Provide the build-along file and the helper functions finished. A first goal is one enemy and attack-only; add heal and the enemy list after it works.',
    stretch: 'Add a Player class with attack and heal methods, a special move that can miss (random chance), or a tournament of three enemies in a row with a for loop.',
    mis: [
      ['enemy_hp - damage changes enemy_hp', 'You must store the result: enemy_hp = enemy_hp - damage.'],
      ['The loop condition should use or', 'Use and: the battle continues only while BOTH have HP.'],
      ['Random games cannot be tested', 'Test the helper functions with fixed numbers and playtest many times.'],
      ['A function cannot change a dictionary passed to it', 'Changing a key inside the function changes the same dictionary outside.'],
    ],
    successCriteria: ['I can store game stats in dictionaries and a list.', 'I can write functions that return damage and healing within limits.', 'I can build a game loop with win and lose endings.', 'I can playtest my game and balance its numbers.'],
    homework: 'Play your Battle Arena with two people at home. Ask what would make it more exciting, add one new move or enemy, and write down your balance changes.',
    exit: 'Your hero has 6 HP and the goblin hits for 9. What should apply_damage(6, 9) return, and why?',
    plan: [
      { minutes: 5, stage: 'Warm-up game: Paper Battle', doing: 'Play Paper Battle in pairs with a dice. Ask what repeated every turn and when it stopped: that is the game loop.' },
      { minutes: 5, stage: 'Hook, video and design', doing: 'Show the hook and play the capstone video. Thumbs poll: “Who wants a dragon in their arena?” Learners fill in the design sheet: hero, 3 enemies, moves.' },
      { minutes: 8, stage: 'Live demo and build-along', doing: 'Run the live demo, then everyone builds fighters and one attack. Thumbs check: “Did your goblin lose HP?”' },
      { minutes: 5, stage: 'Helpers, predict and order', doing: 'Attack and heal challenge, the last-hit prediction and the battle-turn order. Quick competition: first correct order in the chat wins.' },
      { minutes: 18, stage: 'Build the Battle Arena', doing: 'Learners build the full arena in breakout rooms. Halfway check-in: one full turn works. Teacher visits each room and asks “What happens when HP hits 0?”' },
      { minutes: 6, stage: 'Debug race', doing: 'Race to fix “the goblin that would not fall”. The winner explains why the loop never ended.' },
      { minutes: 9, stage: 'Playtest swap and show-and-tell', doing: 'Pairs playtest each other’s arena three times and suggest one balance change. Back together, two learners run a battle live while the class cheers every hit.' },
      { minutes: 4, stage: 'Submit and exit ticket', doing: 'Learners submit the project with a reflection. Exit ticket: apply_damage(6, 9).' },
    ],
  },
  project: {
    title: 'Battle Arena',
    brief: 'Design and build a turn-based text battle game where your hero fights a random enemy using attack and heal, with stats in dictionaries and a function for every action.',
    requirements: ['Player and enemy stats in dictionaries, with a list of at least 3 enemies', 'Functions for damage and healing that return numbers within limits', 'Random damage and a randomly chosen enemy', 'A game loop that runs while both fighters have HP', 'attack and heal moves, limited potions and an Unknown move message', 'Victory and defeat endings, then GAME OVER'],
    milestones: ['Design sheet done: hero, 3 enemies with HP and damage, and moves', 'apply_damage and heal_hp tested with fixed numbers', 'One full turn works: stats, move, enemy hits back', 'The full battle loop ends with a win or a loss; a friend has playtested and you balanced one number'],
    rubric: [
      { criterion: 'Program works', levels: ['Crashes or never ends', 'One turn works but the battle does not end properly', 'Full battles end with the right winner every time', 'Works perfectly and handles odd input and empty potions'] },
      { criterion: 'Data and functions', levels: ['No dictionaries or functions', 'Some stats in variables; one function', 'Stats in dictionaries, enemy list and helper functions that return values', 'Clean functions (or a class) with no repeated code and clear names'] },
      { criterion: 'Game design and balance', levels: ['No choices for the player', 'Attack only; the game is always won or always lost', 'Attack and heal with random damage; the game feels fair', 'Extra moves or enemies, and balance changes explained from playtests'] },
      { criterion: 'Testing and presentation', levels: ['Never tested; no comments', 'Tested once; few comments', 'Helpers tested and code commented; clear messages each turn', 'Playtested by others, improved, and presented with a short design explanation'] },
    ],
    extensions: ['Add a Player class with attack and heal methods', 'Add a special move that does big damage but can miss', 'Fight three enemies in a row and count the wins'],
  },
  files: [{ name: 'battle_fighters.py', title: 'Build-along: fighters and one attack', audience: 'student', content: L8_FIGHTERS }],
});
