# Writing a Kitabash flagship course (Round 1 brief)

You are writing ONE complete flagship course for Kitabash, an online live-class academy (India first, families worldwide). The format already exists and is used by the Scratch courses. Read these files first, in full:

- `src/lib/library/flagship/types.ts` — the course/lesson/activity/scene types (note the new `AiAct` Prompt Lab, the `chat` and `steps` video scenes, and `files` project files)
- `src/lib/library/flagship/kit.ts` — the `lesson(n, {...})` helper you must use (it generates the video script, worksheet and timed plan from your content unless you write them)
- `src/lib/library/types.ts` — `HookSpec` (the 3-second hook: only these shapes) and `ActSpec` (mcq, code, sort, order, match, blanks, write, speak)
- `src/lib/library/flagship/scratch-6-8/index.ts` and `src/lib/library/flagship/scratch-6-8/m1.ts` — a finished course to copy the style and depth from
- `src/lib/python/checks.ts` (PyCheck types) and the header of `src/lib/python/interp.ts` (what the in-browser Python supports) — only if your course uses Python Lab (`py`) activities

## What every lesson must have (the checker enforces most of this)

- 60-minute lesson (`minutes: 60`), title, objective (one sentence, learner-facing), concept (2–4 words), a valid `hook`.
- 3–5 Learn `cards` (emoji, title, plain-language body of 2–3 short sentences; code cards may use `blocks` only for Scratch — for Python put code in a `code` video scene and in the card body).
- Extra video `scenes` so the video is 2–4 minutes and actually SHOWS the skill: for Python use `code` scenes (code + output); for AI use `chat` scenes (a real-looking prompt and a realistic, honest reply) and `steps` scenes (click-by-click in the real tool). Each `say` line is one caption sentence (8–20 words), spoken by a narrator — write it to be read aloud, friendly and clear.
- A `build` (type-along / follow-along) with 4–6 steps.
- 4–6 activities (`acts`) including at least one Perform and one Probe (`phase: 'probe'`), and at least one hands-on activity: Python Lab (`py`) for Python, Prompt Lab (`ai`) for AI courses. Mix in sort / order / match / mcq so the class is a game, not a lecture.
- `teacher`: explain (what to say, 3–5 sentences), analogy, vocab (4–6 pairs), demo (exact live demo, step by step, what to click/type and what to point out), unplugged (a no-device warm-up GAME, 5 minutes), prompts (4–6 question/expected-answer pairs), support, stretch, mis (3–4 misconception/fix pairs), successCriteria (3–4 "I can …"), homework, exit (exit ticket question). Write a hand-made `plan` (array of {minutes, stage, doing}) that adds up to exactly 60 and includes interactive moments by name: a game, a poll / thumbs check, pair or breakout work, a show-and-tell, a quick competition. A teacher should be able to run the class from this plan alone.
- `project` on the module-ending lessons (lessons 4 and 8): title, brief, 4–6 requirements, 3–4 milestones, a 4-criterion rubric (4 levels each), 3 extensions. Smaller lessons still end with something the learner keeps (say so in the build or a project-mode activity).
- `files`: downloadable project files for every lesson.
  - Python: the checker auto-adds starter + solution files for `mode: 'project'` Python Lab activities; also add a `.py` file for the build-along (student) where useful.
  - AI courses: a student "project kit" `.md` per lesson (the prompt templates, checklists and a worked example) and, where useful, a teacher `.md` (demo script with the exact prompts to type live and what to say if the AI gives a wrong answer).

## Truthfulness and safety (non-negotiable)

- Never invent features, prices or statistics. Say "free plan" only for tools that genuinely have one (ChatGPT, Gemini, Claude, Copilot, Perplexity, Canva, NotebookLM, Teachable Machine all have free use as of 2026). Do not quote prices or model names/versions. Menus change: describe steps generally ("open a new chat", "attach the file with the paperclip / + button").
- Age rules (Oct 2026): ChatGPT 13+ and under-18s need a parent's permission; Gemini 13+ (younger only via a parent's Family Link); Microsoft Copilot 13+; Perplexity 13+ with a parent accepting terms; Claude is 18+ only. Teachable Machine needs no account. For learners under 13 the teacher demonstrates on the shared screen, and learners use the Kitabash AI helper (in the lesson, with parent consent) — never ask a child to create an account. Never tell learners under 18 to use Claude.
- Privacy rule repeated in every AI lesson: never paste real names, phone numbers, addresses, passwords, Aadhaar/PAN, or private documents into an AI tool. Adults: never paste confidential company or client data into a personal AI account.
- AI makes mistakes ("hallucinations"): every AI lesson includes checking the output. Honest use: label AI-made work, no cheating on homework, no fake reviews, no deepfakes of real people.
- Branding: "Kitabash" only (never "Kitabash Kids"). Use Indian context naturally (₹, UPI, cricket, monsoon, Diwali, Hindi/English) with neutral names (Aarav, Meera, Zoya, Kabir, Riya, Arjun). Keep it inclusive.

## Quality bar

Think WhiteHat Jr / Codingal: every class builds a real, fun project; the learner leaves with something to show their parents. Use short sentences and plain words (ages 11–16: Grade 6 reading level; adults: no jargon, explain any term the first time). Make it lively: challenges, races, "spot the mistake", "AI or human?", before/after comparisons, real Indian examples.

## Done means

`npx tsx scripts/check-flagship.ts <your course key prefix>` prints ✓ with no issues, and `npx tsc --noEmit -p tsconfig.server.json` is clean. Only create/edit files inside your course folder (`src/lib/library/flagship/<folder>/`). Replace the placeholder `index.ts` completely. Split lessons into `m1.ts` (lessons 1–4) and `m2.ts` (lessons 5–8). Do not run git, do not edit any other file, do not install packages.

## Round 2 additions

- **Web Lab** (`web` activity, `WebAct` in types.ts): starter HTML, goals as `[label, WebCheck]` (see `src/lib/web/checks.ts`: `tag`, `text`, `css`, `contains`, and `source` = the code contains strings such as `addEventListener` or `<script>`), a model `solution` page that passes every goal, `explain`, `hints`; `mode: 'project'` adds `requirements` + `reflection`. The checker verifies the solution passes and a challenge starter does not. Web projects automatically get starter/solution `.html` downloads.
- **Budget simulation** (`budget` activity, `BudgetAct`): `budget`, `title`, `prompt`, `items: [name, cost][]`, `required` (indexes of essentials), optional `minSavings`, `why`. Use ₹ amounts that make sense for Indian children.
- **Speaking** (`speak` ActSpec from `src/lib/library/types.ts`): a phrase/task to say aloud + a checklist the learner ticks; counts as the lesson's hands-on activity for English courses (still add games and a Probe).
- Video captions (`say` lines) are also read by the narrator voice: write them as plain spoken sentences — no emoji, arrows or symbols in `say` lines (cards and steps may use them). Keep code in `code` scenes, not in captions.
- Levels 2 build on Level 1 of the same track: read the Level 1 course folder first so you don't repeat it, and pick up where it ended.
