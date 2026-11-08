// Flagship course: Money Smart · Level 1 (Financial Literacy, Grades 3–6, Beginner).
// Real-life Indian money for ages 8–11: rupees and change at the kirana, needs and wants, budgets and
// the three jars, saving for goals, smart shopping, UPI safety, and a capstone mini market stall.
// Every 45-minute class has a hands-on play-money activity and a budget simulation or counting game.
import type { FlagshipCourse } from '../types.ts';
import { M1, M2, M3, M4 } from './m1.ts';
import { M5, M6, M7, M8 } from './m2.ts';

export const MONEY_3_5_BEGINNER: FlagshipCourse = {
  key: 'financial-literacy--3-5--beginner@2',
  replaces: 'financial-literacy--3-5--beginner',
  subject: 'Financial Literacy',
  band: '3-5',
  level: 'Beginner',
  title: 'Money Smart · Level 1',
  tagline: 'Count rupees, make change, plan a budget, save for a goal, shop smart, stay safe with UPI, and run your own mini market stall.',
  description:
    'A hands-on first money course for children aged 8 to 11, set in everyday Indian life: the kirana shop, pocket money, school trips, birthdays, Diwali shopping and UPI payments. Module 1 covers the basics: where money came from (barter to coins, notes and digital money), counting rupees and making change like a shopkeeper, needs and wants and what every choice really costs, and making a weekly budget with Spend, Save and Share jars, ending with a project to plan a birthday party on ₹2,000. Module 2 makes children smart with money: setting a savings goal and tracking it on a chart, comparing prices and unit prices, seeing through offers and ads, checking bills and change, understanding UPI, QR codes and cards, and the safety rules (never share a PIN or OTP, always ask a grown-up, spot fake prizes). The capstone is a class market where every child plans a pretend stall, works out cost, price and profit, makes a poster and pitch, and sells with play money. Every lesson has a short narrated video, a play-money follow-along, budget simulations with a live balance bar, sorting, matching and ordering games, a new-situation challenge, a printable activity sheet and a teacher script.',
  intro: 'Become Money Smart! Count it, plan it, save it, and keep it safe. 🪙',
  theme: 'meadow',
  ages: [8, 11],
  grade: 'Grades 3–6',
  tutor: [
    'Sikka',
    'A cheerful, patient money coach for children aged 8 to 11. Uses short sentences, rupee examples from Indian daily life (kirana shops, pocket money, festivals, school trips) and play money. Helps children count up to make change, sort needs and wants, balance a budget, work out savings weeks and unit prices, and always reminds them that a PIN or OTP is never shared and that a grown-up handles any real payment. Never asks how much money a child’s family has or earns, and never gives advice on real investments, betting or crypto.',
  ],
  tools: [
    'A device with a browser for the lesson video and activities',
    'Printed play money (sheet in lessons 1 and 8) or paper slips with values written on them',
    'Three jars, cups or envelopes for Spend, Save and Share (lesson 3)',
    'Paper, pencil, colours and squared paper for charts and posters',
    'A few packets from the kitchen for price detective (lesson 6, optional)',
    'The downloadable activity sheet for each lesson',
  ],
  outcomes: [
    'Explain how money replaced barter, and name Indian coins and notes',
    'Count rupees from the biggest note down and make change by counting up',
    'Sort needs from wants and explain what a choice costs (what you give up)',
    'Make a weekly budget that adds up, using Spend, Save and Share jars',
    'Plan a ₹2,000 party: must-haves first, savings kept, nice-to-haves that fit',
    'Set a savings goal with a price and a date, work out the weeks and track it',
    'Compare prices and simple unit prices, judge offers and spot ad tricks',
    'Check a bill and count change before leaving a shop',
    'Explain simply what UPI, QR codes and cards do, and follow the money safety rules',
    'Spot scam messages and always tell a grown-up',
    'Work out cost, price and profit, and run a pretend market stall with play money',
  ],
  prereq: ['Can add and subtract numbers up to 1,000 (with play money for support).', 'No device skills needed beyond tapping and typing numbers.'],
  style: 'Short, lively classes built around play money and real Indian situations: a no-device warm-up game, a short narrated video, a live teacher demo with a planted mistake to catch, a follow-along with play money, budget simulations with a live balance bar, team sorting and ordering games, a new-situation challenge and a show-and-tell. Every lesson ends with something to keep: a shop counter game, a T-chart, three jars, a party plan, a savings chart, a price detective table, a safety poster or a market stall.',
  notes: 'Lessons are 45 minutes, live and online or in class. Play money only: print the play money sheet before lessons 1 and 8 (or use paper slips). Prices in the course are simple, realistic practice prices; real prices vary by city, so accept sensible ranges and say so. Never ask what a child’s family owns, earns or gives as pocket money: everyone uses the same practice amounts (₹100, ₹200, ₹500, ₹1,000, ₹2,000). Projects in lessons 4 and 8 arrive in the review queue with the rubric. Festival examples centre on Diwali; invite children to share the festivals their families celebrate. Next: Money Smart · Level 2.',
  safety: 'Play money and pretend shops only: children never make real payments, and never see, type or share a real PIN, OTP, password or card number. Lesson 7 teaches that banks never ask for a PIN or OTP, that you never need a PIN to receive money, and that any online payment is done by a grown-up. No real investments, betting, lotteries, gaming purchases or crypto are discussed. Teachers never ask about family income or pocket money amounts; if a child shares a worrying real story (such as money lost to a scam), listen kindly and inform their grown-up after class.',
  nextCourse: 'Money Smart · Level 2 (banks, interest and a mini business)',
  modules: [
    {
      title: 'Module 1 · Money basics',
      summary: 'Where money came from, counting rupees and making change, needs and wants, and a weekly budget with three jars. Project: plan a birthday party on ₹2,000.',
      bigQuestion: 'How do I count, choose and plan, so my money goes where I really want it to?',
      lessons: [M1, M2, M3, M4],
    },
    {
      title: 'Module 2 · Smart with money',
      summary: 'Saving for a goal, smart shopping (unit price, offers, ads, bills), digital money and safety, and a capstone mini market stall with cost, price and profit.',
      bigQuestion: 'How can I save, shop, stay safe and even earn, like a smart grown-up?',
      lessons: [M5, M6, M7, M8],
    },
  ],
};
