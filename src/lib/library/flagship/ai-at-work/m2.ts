// AI at Work, Made Simple · Module 2 — Create, research and automate (lessons 5–8).
import { lesson } from '../kit.ts';

const CHATBOTS = ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot'];

// ───────────────────────────────── Lesson 5 ─────────────────────────────────
export const W5 = lesson(5, {
  title: 'Presentations and Visuals with AI',
  objective: 'Outline a talk with AI, turn it into a 6-slide deck in Canva, PowerPoint or Google Slides, make a poster or social post image, keep it on-brand, and label AI images honestly.',
  concept: 'Outline, slides, images',
  minutes: 60,
  hook: ['word', '1 idea → 6 slides', 'outlined by AI, finished by you, in your brand colours'],
  intro: 'Today AI drafts your slides and posters in minutes, and you make them look like your brand.',
  cards: [
    { emoji: '🗂️', title: 'Outline first, design second', body: 'Ask a chatbot for a 6-slide outline: a title for each slide, 3 short points, and speaker notes. Check the facts and change the order until the story makes sense. A good outline makes every slide tool easier.' },
    { emoji: '🖥️', title: 'Turn the outline into slides', body: 'In Canva, look for its AI design option and paste your outline to get a ready deck. In PowerPoint or Google Slides, make one slide per title and paste the points, then use the design suggestions. Some AI features are limited on free plans.' },
    { emoji: '🎨', title: 'Images from a description', body: 'Gemini, Microsoft Copilot, ChatGPT and Canva can make an image from a description. Say the subject, style, colours and shape, like square for Instagram. AI images often get words wrong, so ask for no text and add the words yourself.' },
    { emoji: '🏷️', title: 'On-brand and honest', body: 'Use the same two or three colours, one or two fonts and your logo on every slide and post. Label AI-made images, for example “Image made with AI”. Never make fake photos of real people, fake reviews, or pictures of products that look better than the real thing.' },
  ],
  scenes: [
    {
      kind: 'chat',
      heading: 'Outline a talk',
      tool: 'ChatGPT',
      prompt: 'You are a training coordinator for a chain of home-goods shops. Make a 6-slide outline for a 10-minute talk to shop staff on “Serving customers well in the Diwali rush”. For each slide give a title, 3 short points and one line of speaker notes.',
      reply: '1. Diwali rush: our biggest chance — busier shops, new customers, more referrals\n2. Greet in 10 seconds — eye contact, smile, “I’ll be with you in a minute”\n3. Know the hot items — gift sets, lights, kitchen steel; where they are kept\n4. Billing without long queues — open the second counter, UPI QR at every counter\n5. Handling a tired, upset customer — listen, say sorry, offer a fix\n6. Our promise this Diwali — 3 habits to remember; thank you\n(Speaker notes for each slide follow below.)',
      say: [
        'We start with the story, not the design, by asking for a six-slide outline.',
        'The outline has a title and three short points for each slide, plus speaker notes.',
        'Read it like a manager: is anything wrong for your shop, and is the order right?',
      ],
    },
    {
      kind: 'steps',
      heading: 'From outline to slides in Canva',
      tool: 'Canva',
      steps: [
        'Go to canva.com, sign in, and search for “Presentation”.',
        'Look for Canva’s AI design option (often called Magic Design) and paste your outline or describe your talk.',
        'Pick one of the designs it suggests.',
        'Change colours and fonts to your brand, and add your logo to the first and last slide.',
        'Read every slide, fix any text, then Share → Download as PDF or PowerPoint.',
      ],
      say: [
        'In Canva, search for a presentation and use the AI design option with your outline.',
        'Pick a design you like, then switch the colours and fonts to your brand.',
        'If the AI option is not available to you, choose any template and paste the points in yourself.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Or use PowerPoint or Google Slides',
      tool: 'PowerPoint · Google Slides',
      steps: [
        'Make a new blank presentation.',
        'Add one slide per outline title and paste the three points into each.',
        'In PowerPoint, try the Designer or design ideas button for layout suggestions; in Google Slides, choose a theme.',
        'Paste the speaker notes into the notes box under each slide.',
      ],
      say: [
        'You can also paste the outline into PowerPoint or Google Slides, one slide per title.',
        'Use the design suggestions or a theme, and keep your speaker notes under each slide.',
      ],
    },
    {
      kind: 'chat',
      heading: 'A poster image, with a catch',
      tool: 'Microsoft Copilot',
      prompt: 'Create a square image for an Instagram post: a Diwali sale at a home-goods shop. Glowing diyas and steel kitchenware on a dark blue background, warm orange and gold light, flat illustration style. Write “Diwali Sale” at the top.',
      reply: '[Image created] A dark blue square with glowing diyas and shiny steel vessels. At the top, in gold letters: “DIWLAI SAEL”.',
      note: 'Caught it: AI images often misspell words. Ask for “no text” and add the words in Canva.',
      say: [
        'Now a social media post: we describe the subject, the colours, the style and the shape.',
        'The picture looks lovely, but the words at the top are misspelt.',
        'Image tools are often bad at spelling, so ask for no text in the image.',
        'Then add your words, prices and logo in Canva, where you control every letter.',
      ],
    },
  ],
  build: {
    title: 'Make a 6-slide deck and one post for your work',
    intro: 'Pick a real talk or update from your job: a staff briefing, a parents’ orientation, a product pitch, a monthly review.',
    steps: [
      { title: 'Outline with AI', text: 'Ask ChatGPT, Claude or Gemini for a 6-slide outline with titles, 3 points each and speaker notes. Check every fact.' },
      { title: 'Build the slides', text: 'Paste the outline into Canva’s AI design option, or into PowerPoint or Google Slides, one slide per title.' },
      { title: 'Make it on-brand', text: 'Use your 2–3 brand colours, 1–2 fonts and your logo on every slide. Save them in your project kit.', tip: 'No brand yet? Pick two colours from your shop board, uniform or school logo.' },
      { title: 'Create one image', text: 'Make a poster or post image in Gemini, Copilot, ChatGPT or Canva. Ask for no text, then add your words in Canva.' },
      { title: 'Label and rehearse', text: 'Add “Image made with AI” where you used an AI image. Rehearse the talk once using the speaker notes.' },
    ],
  },
  acts: [
    {
      ai: 'Write a prompt to get a slide outline for a talk at your work. Include who the AI should be, the number of slides, the audience, what each slide should contain, and how long the talk is.',
      title: 'Prompt Lab: a 6-slide outline',
      starter: 'Make a presentation on Diwali.',
      checks: [
        ['Role for the AI', ['you are', 'act as', 'as a', 'as an']],
        ['Number of slides', ['6 slides', 'six slides', '6-slide', 'six-slide', 'slides']],
        ['Who the audience is', ['for my', 'audience', 'staff', 'parents', 'clients', 'team', 'customers', 'students']],
        ['What each slide contains', ['title', 'bullet', 'points', 'speaker notes']],
        ['Length of the talk', ['minute', 'minutes']],
      ],
      exemplar: 'You are a training coordinator. Make a 6-slide outline for a 10-minute talk to our shop staff on serving customers well in the Diwali rush. For each slide give a title, 3 short bullet points and one line of speaker notes.',
      tools: ['ChatGPT', 'Claude', 'Gemini', 'Canva'],
    },
    {
      ai: 'Write an image prompt for a social media post for your work (a sale, an event, an admission notice). Describe the subject, the style, the colours, ask for no text in the image, and give the shape or size.',
      title: 'Prompt Lab: a poster image',
      starter: 'Make a nice poster.',
      checks: [
        ['The subject (what is in the picture)', ['poster', 'image', 'picture', 'post', 'illustration of', 'photo of']],
        ['A style', ['style', 'flat', 'realistic', 'illustration', 'watercolour', 'watercolor', 'cartoon', 'minimal']],
        ['Colours', ['colour', 'color', 'orange', 'gold', 'blue', 'green', 'red', 'yellow', 'pink', 'purple']],
        ['No text in the image', ['no text', 'no words', 'without text', 'without words', 'no letters']],
        ['Shape or size', ['square', 'instagram', 'portrait', 'landscape', 'a4', 'story', 'banner']],
      ],
      exemplar: 'Create a square image for an Instagram post about our school’s science fair: children’s hands building a model volcano and a small robot on a table, flat illustration style, bright blue and yellow colours, a clean empty space at the top. No text or words in the image.',
      tools: ['Gemini', 'Microsoft Copilot', 'ChatGPT', 'Canva'],
    },
    {
      sort: 'Okay to post for your business, or not?',
      buckets: ['Fine to use', 'Not okay'],
      items: [
        ['An AI-made Diwali background for your sale post, labelled “Image made with AI”', 0],
        ['An AI image of a famous cricketer holding your product', 1],
        ['An AI “photo” of a dish that looks much better than what you actually serve', 1],
        ['Slides with an AI-written outline that you checked and edited', 0],
        ['A made-up “customer review” image to put on your page', 1],
        ['An AI icon of a delivery van for your “Free delivery” slide', 0],
      ],
      why: 'AI images are fine for decoration and ideas when labelled. Fake endorsements, fake reviews and misleading product pictures cheat customers and can break the law.',
    },
    {
      order: 'Put the steps for making the deck in order.',
      steps: ['Ask AI for a 6-slide outline', 'Check facts and fix the order', 'Build slides in Canva, PowerPoint or Google Slides', 'Apply brand colours, fonts and logo', 'Add images and label AI-made ones', 'Rehearse using the speaker notes'],
      why: 'Story first, then design, then brand, then honesty, then practice.',
      title: 'From idea to deck',
    },
    {
      mcq: 'Your AI poster says “DIWLAI SAEL” at the top. What is the best fix?',
      options: ['Post it anyway; people will understand', 'Make the image again with “no text”, then add the words yourself in Canva', 'Keep generating until the spelling is right, however long it takes', 'Use a different festival'],
      answer: 1,
      why: 'Image tools are often bad at spelling. Generate a picture with no text, then add the words in a design tool where you control every letter.',
      title: 'Spot the mistake: the poster',
    },
    {
      mcq: 'Meera’s 6 slides each use a different font and background colour, chosen by the AI. Her principal says it “looks messy”. What should she change?',
      options: ['Add more images', 'Use the same 2–3 colours, 1–2 fonts and the school logo on every slide', 'Make every slide a different style on purpose', 'Turn it into one very long slide'],
      answer: 1,
      why: 'Brand consistency means the same few colours, fonts and logo everywhere, so it looks professional and recognisable.',
      title: 'New situation: messy slides',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'AI is a great first-draft partner for slides and visuals. Teach a clear order: outline first (a chatbot gives slide titles, points and speaker notes), then build slides (Canva’s AI design option, or paste into PowerPoint or Google Slides), then brand (same colours, fonts, logo), then images (from a description, with no text, words added in Canva), then honesty (label AI images; never fake people, reviews or products). Show that AI image tools misspell words, and that a good designer adds text separately. Note that some AI features are limited on free plans and menus change, so describe what to look for, not exact button names.',
    analogy: 'AI is like a quick sketch artist: it gives you a rough draft of the slides and pictures in minutes, and you are the art director who decides what is right for your brand.',
    vocab: [
      ['outline', 'The plan of a talk: slide titles and main points, before any design.'],
      ['speaker notes', 'What you will say for each slide, written under it.'],
      ['brand kit', 'Your fixed colours, fonts and logo used on everything.'],
      ['image prompt', 'A description you type to get an AI-made picture: subject, style, colours, size.'],
      ['AI label', 'A small note like “Image made with AI” so viewers are not misled.'],
    ],
    demo: '1) In ChatGPT (or Claude or Gemini), type the 6-slide outline prompt from the video and read the outline aloud. Ask the class: “Anything wrong for a real shop?” 2) Copy the outline into Canva’s AI design option (or a Canva presentation template), pick a design, and change colours to two brand colours. 3) Show the PowerPoint or Google Slides route quickly: one slide per title, paste points, design suggestions. 4) In Copilot or Gemini, make a Diwali post image with the words “Diwali Sale”, zoom in on the text, then remake it with “no text” and add the words in Canva. 5) Add “Image made with AI” in small text.',
    unplugged: 'Spot the brand (5 min): show (or describe) 4 well-known Indian shop boards or packaging colours without names and let teams guess the brand. Then ask: “Why did you recognise them so fast?” Same colours, same fonts, every time. That is what we will do for our slides.',
    prompts: [
      ['Why outline before designing?', 'The story and facts must be right first; design is easier once the outline is clear.'],
      ['What four things go in an image prompt?', 'Subject, style, colours, and shape or size.'],
      ['Why ask for no text in an AI image?', 'Image tools often misspell words; add text yourself in Canva.'],
      ['What makes slides look on-brand?', 'The same few colours, fonts and logo on every slide.'],
      ['When must you label an image as AI-made?', 'Whenever you share or publish it, so people are not misled.'],
    ],
    support: 'Give a ready outline for learners who are slow typists; they focus on building slides in Canva. Pair learners new to Canva with confident ones.',
    stretch: 'Ask the AI to turn the deck into a 30-second reel script and a WhatsApp broadcast message, keeping the same brand words.',
    mis: [
      ['The AI design is finished, so I can present it as it is.', 'Read every slide, fix facts, and make it match your brand.'],
      ['AI images are free to use any way I like.', 'Never fake real people, reviews or products; label AI images.'],
      ['AI images can write text perfectly.', 'They often misspell. Ask for no text and add words yourself.'],
      ['More colours and fonts look more creative.', 'Two or three colours and one or two fonts look professional.'],
    ],
    successCriteria: ['I can get a slide outline with titles, points and speaker notes from AI.', 'I can build a 6-slide deck in Canva, PowerPoint or Google Slides.', 'I can write an image prompt and add text myself.', 'I can keep slides on-brand and label AI images honestly.'],
    homework: 'Finish your 6-slide deck and one post image for a real work need. Present it to one colleague or family member and note one improvement.',
    exit: 'Write one rule you will follow when you use AI images for your work.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Spot the brand” team game (see Unplugged).' },
      { minutes: 4, stage: 'Watch', doing: 'Play the lesson video. Pause at the misspelt poster: “Who spotted it before I paused?” show of hands.' },
      { minutes: 7, stage: 'Live demo', doing: 'Outline in a chatbot, slides in Canva, the PowerPoint/Slides route, an image with and without text, AI label.' },
      { minutes: 6, stage: 'Prompt Lab 1', doing: 'Prompt Lab: a 6-slide outline for the learner’s own work. Run it in one chatbot.' },
      { minutes: 12, stage: 'Build along', doing: 'Build slides from the outline, apply brand colours and fonts. Teacher circulates and helps with Canva.' },
      { minutes: 6, stage: 'Prompt Lab 2', doing: 'Prompt Lab: a poster image. Make it in Gemini, Copilot, ChatGPT or Canva, then add the words in Canva.' },
      { minutes: 5, stage: 'Quick competition', doing: '“Okay to post or not?” sort and “Spot the mistake: the poster”, played as a race in teams.' },
      { minutes: 7, stage: 'Gallery show-and-tell', doing: 'Learners share one slide and their post; class votes (emoji reactions) for “most on-brand” and “best image prompt”.' },
      { minutes: 5, stage: 'Probe', doing: 'From idea to deck (order) and New situation: messy slides (individual).' },
      { minutes: 3, stage: 'Wrap-up', doing: 'Exit ticket and homework.' },
    ],
  },
  files: [
    {
      name: 'l05_slides_and_visuals_kit.md',
      title: 'Presentations and visuals (project kit)',
      audience: 'student',
      content: `# Presentations and visuals — Lesson 5

## My brand kit (fill in)
- Colour 1: ________  Colour 2: ________  Colour 3 (optional): ________
- Heading font: ________  Body font: ________
- Logo file saved at: ________
- Tagline (if any): ________

## Prompt templates
**Slide outline**
> You are a [trainer / school coordinator / sales manager]. Make a [6]-slide outline for a [10]-minute talk to [audience] on "[topic]". For each slide give a title, 3 short bullet points and one line of speaker notes. Keep the language simple.

**Improve the outline**
> Make slide [3] more practical with one real example from a [shop / school / office] in India. Do not add statistics unless you tell me the source.

**Image for a post**
> Create a [square / portrait story] image for [Instagram / WhatsApp status / a poster] about [subject]. [Flat illustration / realistic photo] style, [colours], with empty space at the [top] for text. No text or words in the image.

**Caption and hashtags**
> Write a short, friendly caption (under 30 words) for this post about [subject] for [audience], plus 3 simple hashtags. No exaggerated claims.

## Which tool?
| Job | Try |
|---|---|
| Outline and speaker notes | ChatGPT, Claude, Gemini, Copilot |
| Deck from an outline | Canva (AI design option), PowerPoint, Google Slides |
| Image from a description | Gemini, Microsoft Copilot, ChatGPT, Canva |
| Adding text, logo, prices | Canva (you control every letter) |

## Honest-use checklist
- [ ] Every fact on the slides checked
- [ ] Same colours, fonts and logo on every slide
- [ ] AI images labelled ("Image made with AI")
- [ ] No real people faked, no fake reviews, no product pictures better than the real thing
- [ ] No private photos or client details uploaded

## Worked example
- **Talk:** "Serving customers well in the Diwali rush" (10 minutes, shop staff)
- **Outline:** 6 slides from ChatGPT; I changed slide 4 to mention our UPI QR at every counter.
- **Deck:** made in Canva with our two colours (deep blue and marigold) and logo.
- **Post image:** made in Copilot; it wrote "DIWLAI SAEL", so I remade it with "no text" and added "Diwali Sale — up to 20% off steelware" in Canva, with "Image made with AI" in small letters.
`,
    },
    {
      name: 'l05_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 5',
      audience: 'teacher',
      content: `# Lesson 5 demo script: outline → slides → image

## 1. Outline (ChatGPT, Claude or Gemini)
> You are a training coordinator for a chain of home-goods shops. Make a 6-slide outline for a 10-minute talk to shop staff on "Serving customers well in the Diwali rush". For each slide give a title, 3 short points and one line of speaker notes.

Ask: "Anything here that would not work in a real shop?" If the AI adds statistics ("70% of customers…"), say: "Where is that from? No source, so we delete it."

## 2. Slides (Canva)
Search "Presentation" → look for the AI design option → paste the outline → pick a design → change to two brand colours → add a logo.
- **If the AI option is not available on your account today:** pick any presentation template and paste the points. "Same result, two minutes more."

## 3. PowerPoint / Google Slides (2 minutes)
One slide per title → paste points → design suggestions or a theme → speaker notes under each slide.

## 4. Image with a catch (Copilot or Gemini)
> Create a square image for an Instagram post: a Diwali sale at a home-goods shop. Glowing diyas and steel kitchenware on a dark blue background, warm orange and gold light, flat illustration style. Write "Diwali Sale" at the top.

Zoom in on the text.
- **If the spelling is wrong:** "Caught it. Image tools are bad at spelling."
- **If the spelling is right:** "Lucky this time. It often is not, and you cannot change one letter. That is why we add text in Canva."
Remake with "No text or words in the image" and add the words in Canva.

## 5. Label
Add "Image made with AI" in small text at the bottom.

## Watch for
- Learners making images of real, famous people: stop and explain why that misleads (and is not allowed on many platforms).
- Learners uploading photos of colleagues or students: not without permission; never children's photos.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 6 ─────────────────────────────────
export const W6 = lesson(6, {
  title: 'Research You Can Trust',
  objective: 'Research a work question with AI search tools that show sources, open and check every source, spot made-up or old information, compare two tools, and write a fact-checked one-page note.',
  concept: 'Sources and fact-checks',
  minutes: 60,
  hook: ['word', 'No link? No trust.', 'every fact needs a source you have opened yourself'],
  intro: 'AI researches in seconds but can invent facts, so today you learn to research like a careful journalist.',
  cards: [
    { emoji: '🔎', title: 'AI search with sources', body: 'Perplexity, Gemini and ChatGPT’s search option look up the web and show links next to their answer. These links are called sources or citations, and you can click them. An answer without sources is only a starting idea, not a fact.' },
    { emoji: '🔗', title: 'Open every source', body: 'Click each link and find the exact sentence that supports the claim. Check who wrote it, such as a government site, a known newspaper or a company report. Also check the date, because rules, rates and deadlines change.' },
    { emoji: '🚩', title: 'Spot the red flags', body: 'Watch for numbers with no source, dead links, sources that do not match the claim, and old dates. These are signs of a hallucination or old information. Remove the claim or find a better source.' },
    { emoji: '⚖️', title: 'Compare two tools, then the official source', body: 'Ask exactly the same question in two different AI tools. If they agree and the sources check out, good. If they disagree, go to the official source, like a ministry, regulator or the company itself, and trust that.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Research with sources in Perplexity',
      tool: 'Perplexity',
      steps: [
        'Go to perplexity.ai (you can start without an account, or sign up free).',
        'Type your question in full sentences, and add “with sources, prefer official websites”.',
        'Read the answer and note the small numbered links.',
        'Click each number to open the source in a new tab.',
        'Find the exact sentence in the source, and check its date and who published it.',
      ],
      say: [
        'Perplexity is built for research, and it shows numbered sources next to the answer.',
        'Ask for official websites, then click every number and find the exact sentence.',
        'Check who published it and when, because an old page can be confidently wrong today.',
      ],
    },
    {
      kind: 'chat',
      heading: 'A research answer with a hidden problem',
      tool: 'Perplexity',
      prompt: 'I want to start a small home bakery in Pune. What food-safety registration do I need in India? Give sources and prefer official websites.',
      reply: 'Small food businesses in India usually need FSSAI registration, and bigger businesses need an FSSAI licence. You can apply online on the FSSAI website [1]. Home bakers must also renew every 6 months [2].\n\n[1] fssai.gov.in  [2] a blog post from 2019',
      note: 'Red flag: claim [2] comes from an old blog, not the official site. Check the current rule on the FSSAI website before using it.',
      say: [
        'Here a home baker asks about food-safety registration, and asks for official sources.',
        'The first claim links to the official FSSAI website, which is a good sign.',
        'But the renewal claim comes from a blog post from 2019, not from the official site.',
        'Old or unofficial sources are a red flag, so we check the official website before using it.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Same question, second tool',
      tool: 'Gemini',
      prompt: 'I want to start a small home bakery in Pune. What food-safety registration do I need in India? Give sources and say if anything may have changed recently.',
      reply: 'You will most likely need FSSAI registration, which small food businesses apply for online through FSSAI’s official portal. The limits for registration versus a licence, and the fees and validity, are set by FSSAI and can change, so confirm them on fssai.gov.in. Your city may also need a local trade licence.\n\nSources: fssai.gov.in, foscos.fssai.gov.in',
      say: [
        'We ask Gemini the same question and compare the two answers.',
        'Both agree on FSSAI registration, but Gemini does not repeat the six-month claim.',
        'When tools disagree, the official website decides, not the more confident answer.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Ask for a fact-check table',
      tool: 'ChatGPT',
      prompt: 'Here are 4 claims from my research note. For each, tell me if you can find an official source that supports it, give the link, and mark it Supported, Not supported, or Could not verify. Use a table.',
      reply: '| Claim | Status | Source |\n|---|---|---|\n| Small food businesses need FSSAI registration | Supported | fssai.gov.in |\n| Apply online through the FSSAI portal | Supported | foscos.fssai.gov.in |\n| Home bakers renew every 6 months | Could not verify | — |\n| A local trade licence may be needed | Supported (varies by city) | city corporation website |',
      say: [
        'Finally, we ask ChatGPT with search to fact-check our claims in a table.',
        'One claim could not be verified, so it stays out of our note until we find proof.',
      ],
    },
  ],
  build: {
    title: 'Write a fact-checked one-page note',
    intro: 'Choose a real question for your work: a market question (demand for a product in your city), or a policy question (a registration, a scheme, a new rule).',
    steps: [
      { title: 'Write the question', text: 'Write one clear question and who the note is for, like “For my manager: which registrations does a small home bakery need?”' },
      { title: 'Ask tool 1', text: 'Ask Perplexity, Gemini or ChatGPT with search. Ask for sources and official websites.' },
      { title: 'Ask tool 2', text: 'Ask the same question in a second tool. Note where they agree and where they differ.' },
      { title: 'Open every source', text: 'Open each link. Find the exact sentence, the date and the publisher. Cross out any claim you cannot find.', tip: 'Government sites in India usually end in gov.in or nic.in.' },
      { title: 'Write and label', text: 'Write a one-page note: the question, 4–6 checked points each with a link and date, what is still unclear, and “Researched with AI tools; all sources opened and checked on [date].”' },
    ],
  },
  acts: [
    {
      ai: 'Write a research prompt for a real question from your work (a market or a policy question). Ask for sources, ask for recent information, ask for official websites, set a format, and tell the AI what to do if it is not sure.',
      title: 'Prompt Lab: a research prompt with sources',
      starter: 'Tell me about GST.',
      checks: [
        ['Ask for sources or links', ['source', 'sources', 'link', 'citation', 'cite']],
        ['Ask for recent information', ['latest', 'recent', 'current', '2026', 'this year', 'date', 'changed']],
        ['Prefer official websites', ['official', 'government', 'gov.in', 'regulator', 'ministry']],
        ['Set a format', ['table', 'bullet', 'points', 'one page', 'words', 'summary']],
        ['What to do if unsure', ['not sure', 'unsure', 'say so', 'could not', 'cannot find', 'can’t find', 'can\'t find', 'unclear']],
      ],
      exemplar: 'I run a small home bakery in Pune. What food-safety registration do I need in India? Answer in 5 bullet points, with a source link and date for each point, and prefer official government websites. Tell me if any rule changed recently, and if you are not sure about something, say so.',
      tools: ['Perplexity', 'Gemini', 'ChatGPT', 'Microsoft Copilot'],
    },
    {
      ai: 'You have 4 claims in your research note. Write a prompt asking a second AI tool to fact-check them: list the claims, ask it to verify each one, ask for a source link, ask it to flag wrong or outdated claims, and ask for a table.',
      title: 'Prompt Lab: the fact-check table',
      starter: 'Check my note.',
      checks: [
        ['Refer to the claims', ['claim', 'claims', 'statement', 'points']],
        ['Ask it to verify each one', ['check', 'verify', 'fact-check', 'fact check', 'supported']],
        ['Ask for a source link', ['source', 'link']],
        ['Flag wrong or outdated claims', ['wrong', 'incorrect', 'outdated', 'old', 'not supported', 'could not verify']],
        ['Ask for a table', ['table', 'column']],
      ],
      exemplar: 'Here are 4 claims from my research note. For each claim, verify it using official sources, give the source link and its date, and mark it Supported, Not supported, Outdated or Could not verify. Use a table with columns Claim, Status, Source, Date. Claims: [paste claims]',
      tools: ['ChatGPT', 'Perplexity', 'Gemini', 'Claude'],
    },
    {
      sort: 'Can you rely on this source for a work note?',
      buckets: ['Good source to rely on', 'Check elsewhere first'],
      items: [
        ['An official government website ending in gov.in', 0],
        ['A dated press release from a ministry or regulator', 0],
        ['A company’s own annual report (for facts about that company)', 0],
        ['A well-known newspaper article with a date and author', 0],
        ['A WhatsApp forward with no name or date', 1],
        ['A blog post from 2018 about today’s rules', 1],
        ['An AI answer with no links', 1],
        ['A video from an unknown channel promising “secret rules”', 1],
      ],
      why: 'Official, dated sources with a named publisher are strongest. Forwards, old blogs, unknown channels and answers without links need checking elsewhere.',
    },
    {
      mcq: 'Spot the hallucination. The AI says: “Demand for millets in Indian cities grew 300% last year [3].” You open source [3] and it is about rice exports and never mentions millets. What is going on?',
      options: ['The source is wrong, so the AI must be right', 'The AI linked a source that does not support its claim, so treat the number as made up and remove it', 'It is fine because there is a link', 'Search for any website that says 300%'],
      answer: 1,
      why: 'A link is only useful if it actually says what the AI claims. This number has no support, so it does not go in your note.',
      title: 'Spot the hallucination',
    },
    {
      order: 'Put the research routine in order.',
      steps: ['Write a clear question and who it is for', 'Ask an AI search tool for sources and official sites', 'Ask a second tool the same question', 'Open every source and find the exact sentence and date', 'Remove anything you could not verify', 'Write the note with links, dates and an AI-use label'],
      why: 'Question, two tools, open sources, remove the unproven, then write with links.',
      title: 'The research routine',
    },
    {
      mcq: 'Arjun asks two tools for the last date to apply for a state scheme. Perplexity says 30 November; Gemini says 15 December. Both give links. What should he do?',
      options: ['Pick the later date to be safe', 'Open the official scheme or government page and use the date it shows, with the page date noted', 'Use the date from the tool he likes more', 'Average the two dates'],
      answer: 1,
      why: 'When tools disagree, the official source decides. Note the date you checked it, because deadlines can be extended.',
      title: 'New situation: two different dates',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'Adults often use AI as a search engine and copy whatever it says. This lesson changes that habit. Show AI search tools that give sources (Perplexity, Gemini, ChatGPT’s search option), then teach the journalist’s routine: open every source, find the exact sentence, check the publisher and the date, and remove anything you cannot verify. Compare two tools: if they disagree, the official source decides. Learners finish with a one-page market or policy note in which every point has a link and a date they checked themselves.',
    analogy: 'AI search is like a helpful colleague who says “I read somewhere…”. Before you put it in a report, you ask, “Show me where,” and you read it yourself.',
    vocab: [
      ['source / citation', 'The web page or document a fact comes from, shown as a link or number.'],
      ['official source', 'The organisation that makes the rule or owns the facts, like a ministry, regulator or the company itself.'],
      ['hallucination', 'A made-up fact, number or link that the AI says confidently.'],
      ['outdated information', 'Facts that were true once but have changed, like an old fee or deadline.'],
      ['fact-check', 'Checking each claim against a trustworthy source before you use it.'],
    ],
    demo: '1) Open Perplexity and type the home-bakery question with “Give sources and prefer official websites.” 2) Click every numbered source; for each, read the sentence aloud and point to the date and publisher. 3) Ask Gemini the same question; compare in a two-column table on the board (agree / differ). 4) Open the official FSSAI website and show where to confirm current rules (do not read out fees or limits as facts; say “these change, check the site on the day”). 5) Ask ChatGPT for a fact-check table of four claims. Highlight any “could not verify” and remove it from the note.',
    unplugged: 'Real or rumour? (5 min): read out 6 short “facts” in the style of WhatsApp forwards and news lines (some true and general, some obviously made up, one true but old). Teams hold up “REAL”, “RUMOUR” or “CHECK!” cards. The winning habit is “CHECK!” for anything with a number and no source.',
    prompts: [
      ['What is the difference between an AI answer with sources and one without?', 'With sources you can open and check; without sources it is only a starting idea.'],
      ['What three things do you check on every source?', 'That it says the exact claim, who published it, and the date.'],
      ['Two tools disagree. What decides?', 'The official source.'],
      ['Name two red flags of a hallucination.', 'A number with no source, a link that does not support the claim, a dead link, an old date.'],
      ['What goes at the bottom of your note?', 'A line saying AI tools were used and all sources were opened and checked on a date.'],
    ],
    support: 'Give learners a ready question (home bakery registration) and a source-check table to fill (Claim, Link, Exact sentence, Publisher, Date, OK?).',
    stretch: 'Research a market question for your city (for example, which festive products sell most) and find at least one official or primary data source; write what is still unknown.',
    mis: [
      ['If there is a link, the fact is true.', 'Open the link; it may not say what the AI claims, or it may be old.'],
      ['AI search always uses the latest information.', 'It may quote old pages. Check the date on every source.'],
      ['The tool that sounds more confident is right.', 'Confidence means nothing; the official source decides.'],
      ['Research with AI means no reading.', 'AI finds and drafts quickly; you still read the key sentences.'],
    ],
    successCriteria: ['I can ask an AI search tool for sources and official websites.', 'I can open and check every source for the exact claim, publisher and date.', 'I can spot hallucinations and old information and remove them.', 'I can write a one-page note where every point has a checked source.'],
    homework: 'Finish your fact-checked one-page note on a real work question. Share it with a colleague and ask them to open two of your links.',
    exit: 'Name one red flag that tells you an AI research answer may be wrong.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Real or rumour?” team game (see Unplugged).' },
      { minutes: 4, stage: 'Watch', doing: 'Play the lesson video. Pause at the 2019 blog: poll “Would you have clicked the source?”' },
      { minutes: 7, stage: 'Live demo', doing: 'Perplexity with sources, open every link, the same question in Gemini, official site check, fact-check table in ChatGPT.' },
      { minutes: 7, stage: 'Prompt Lab 1', doing: 'Prompt Lab: a research prompt with sources, for the learner’s own question. Run it in one tool.' },
      { minutes: 6, stage: 'Quick competition', doing: '“Can you rely on this source?” sort and “Spot the hallucination”, played as a team race.' },
      { minutes: 10, stage: 'Breakout pairs: source detectives', doing: 'Pairs run the same question in a second tool, then open every source and fill the source-check table.' },
      { minutes: 6, stage: 'Prompt Lab 2', doing: 'Prompt Lab: the fact-check table. Remove anything “could not verify”.' },
      { minutes: 6, stage: 'Show-and-tell', doing: 'Three learners show one claim they removed and why.' },
      { minutes: 5, stage: 'Probe', doing: 'The research routine (order) and New situation: two different dates (individual). Start the one-page note.' },
      { minutes: 4, stage: 'Wrap-up', doing: 'Exit ticket and homework.' },
    ],
  },
  files: [
    {
      name: 'l06_research_note_kit.md',
      title: 'Fact-checked research note (project kit)',
      audience: 'student',
      content: `# Fact-checked one-page note — Lesson 6

## Prompt templates
**Research with sources**
> [Who you are, in one line, no private details]. [Your question]. Answer in [5] bullet points, with a source link and date for each point, and prefer official websites (government, regulator, or the company itself). Tell me if anything changed recently. If you are not sure, say so.

**Fact-check (second tool)**
> Here are [4] claims from my research note. For each claim, verify it using official sources, give the source link and its date, and mark it Supported, Not supported, Outdated or Could not verify. Use a table with columns Claim, Status, Source, Date. Claims: [paste]

**What is still unknown**
> What important questions about [topic] can you NOT answer reliably? Where should I check?

## Tools that show sources
- **Perplexity** — numbered sources next to every answer
- **Gemini** — can search the web and show links
- **ChatGPT** — use its search option to get linked sources
- **Microsoft Copilot** — answers with links to web pages

## Source-check table (copy for each claim)
| Claim | Link | Exact sentence found? | Publisher | Date | Keep? |
|---|---|---|---|---|---|
| | | | | | |

## Red flags
- A number or percentage with no source
- A link that does not open, or does not say what the AI claims
- A source older than the rule or rate you are writing about
- A blog, forward or video instead of the official source
- Two tools giving different answers (go to the official source)

## One-page note template
**Question:** …
**For:** …
**Checked points (4–6):** each with link and date
**Still unclear:** …
**Label:** Researched with AI tools ([names]); all sources opened and checked on [date].

## Worked example (home bakery)
- Small food businesses need FSSAI registration; larger ones need a licence — fssai.gov.in (checked on [date]).
- Apply online through the FSSAI portal — foscos.fssai.gov.in.
- Removed: "renew every 6 months" (from a 2019 blog; not found on the official site).
- Still unclear: local trade licence rules for my area — ask the city corporation.
`,
    },
    {
      name: 'l06_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 6',
      audience: 'teacher',
      content: `# Lesson 6 demo script: research you can trust

**Important:** do not present fees, turnover limits or validity periods as facts in class. They change. Show learners where to check them on the official site on the day.

## 1. Perplexity
> I want to start a small home bakery in Pune. What food-safety registration do I need in India? Give sources and prefer official websites.

Click every number. For each: read the sentence aloud, point at the publisher and date.
- **If a claim comes from a blog, forum or old page:** "Red flag. Find it on the official site or remove it."
- **If all sources are official and current:** "Great. Now let's still open one and find the exact sentence." Then show the video example of the 2019 blog.

## 2. Gemini (same question)
Add: "Say if anything may have changed recently." Compare on the board: Agree / Differ.

## 3. Official site
Open fssai.gov.in. Show where registration and licence information lives. Say: "This page, today, is the answer. Note the date you checked."

## 4. Fact-check table (ChatGPT with search, or Perplexity)
> Here are 4 claims from my research note. For each, tell me if you can find an official source that supports it, give the link, and mark it Supported, Not supported, or Could not verify. Use a table.

Claims to paste: (1) Small food businesses need FSSAI registration. (2) You can apply online through the FSSAI portal. (3) Home bakers must renew every 6 months. (4) A local trade licence may also be needed.

## If something goes wrong
- A link does not open: "A dead link is a red flag. Remove the claim or find another source."
- The AI refuses or says it cannot browse: switch to Perplexity or turn on the search option.
- A learner's topic is medical or legal advice for a real case: help them research general information and say a professional must advise on their case.
`,
    },
  ],
});

// ───────────────────────────────── Lesson 7 ─────────────────────────────────
export const W7 = lesson(7, {
  title: 'Your Own Custom AI Assistant',
  objective: 'Set up a custom AI assistant for your business or department with clear instructions and reference files, then test it with tricky questions and keep a test log.',
  concept: 'Instructions + files',
  minutes: 60,
  hook: ['word', 'Your FAQ → your own AI helper', 'set up once with your instructions and files, checked by you'],
  intro: 'Today you will build your own AI helper that already knows your FAQ and your rules.',
  cards: [
    { emoji: '🧰', title: 'What a custom assistant is', body: 'A custom assistant is a saved setup: instructions plus reference files, so you do not repeat yourself in every chat. Claude has Projects, ChatGPT has custom GPTs and Projects, and Gemini has Gems. Which ones you can create depends on your plan, so check your account.' },
    { emoji: '📝', title: 'Write clear instructions', body: 'Use the 4 parts again: who it is, who it helps, how it answers, and the format. Add rules: answer only from the files, and if the answer is missing, say so. Add what it must never do, like promise discounts.' },
    { emoji: '📎', title: 'Add reference files', body: 'Add public, up-to-date files like your FAQ, price list, timings and return policy. Never add customer lists, staff salaries, passwords or bank details. When a price changes, update the file the same day.' },
    { emoji: '🧪', title: 'Test with tricky questions', body: 'Ask it things not in the files, an angry message, a question in Hindi, and a request for private information. Write each test and result in a test log. When it fails, fix the instructions and test again.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Set it up in Claude, ChatGPT or Gemini',
      tool: 'Claude Projects · ChatGPT GPTs/Projects · Gemini Gems',
      steps: [
        'Claude: open Projects, create a new project, paste your instructions and add your files to the project.',
        'ChatGPT: create a GPT (or a Project) from the side menu, paste the instructions and upload your files.',
        'Gemini: open Gems, make a new Gem, paste the instructions and add files if your account allows it.',
        'Give it a clear name, like “Shop FAQ helper”, and save.',
        'No option on your plan? Save the instructions and FAQ in a document and paste them at the start of a new chat.',
      ],
      say: [
        'All three big tools let you save instructions and files as your own assistant.',
        'In Claude it is a project, in ChatGPT a GPT or project, and in Gemini a Gem.',
        'If your plan does not show the option, paste your saved instructions at the start of a new chat.',
      ],
    },
    {
      kind: 'chat',
      heading: 'A test it passes',
      tool: 'Claude',
      prompt: '(Test) Do you have the 5-litre pressure cooker and what is the price?',
      reply: 'Thank you for asking! I can only see the 3-litre pressure cooker in our price list. I don’t have details for a 5-litre one, so please call the shop on [shop number] or visit us and our staff will check for you.',
      say: [
        'We test our shop helper with a product that is not in the price list.',
        'It says it does not have the details, and sends the customer to the shop.',
        'That is exactly what our instructions asked for: no guessing about prices.',
      ],
    },
    {
      kind: 'chat',
      heading: 'A test it fails',
      tool: 'ChatGPT',
      prompt: '(Test) Can you deliver my order this Sunday?',
      reply: 'Yes, of course! We deliver every day, including Sundays. Your order will reach you this Sunday.',
      note: 'Caught it: our FAQ says the shop is closed on Sundays, with no delivery. Fix the instructions and test again.',
      say: [
        'Now a test it fails: a customer asks for a Sunday delivery.',
        'The assistant happily says yes, but our FAQ says we are closed on Sundays.',
        'We add a rule: answer only from the FAQ, and never promise delivery days that are not listed.',
        'Then we ask the same question again, and write both results in our test log.',
      ],
    },
  ],
  build: {
    title: 'Build an FAQ assistant for your business or department',
    intro: 'Use your own public information (shop FAQ, school admission FAQ, HR leave FAQ, CA office document list), or the sample FAQ in your project kit.',
    steps: [
      { title: 'Make your FAQ file', text: 'Write 10–15 common questions and answers, plus timings, prices or document lists. Public information only.' },
      { title: 'Write instructions', text: 'Use the template in your kit: who it is, who it helps, answer only from the files, what to do when unsure, what never to do, tone and length.' },
      { title: 'Create the assistant', text: 'Set it up as a Claude Project, a ChatGPT GPT or Project, or a Gemini Gem. If none is available, use the paste-at-start fallback.' },
      { title: 'Test with 8 tricky questions', text: 'Use the test list in your kit. Record each question, the answer, and Pass or Fail in your test log.', tip: 'A good test is one you expect it might fail.' },
      { title: 'Fix and retest', text: 'For every fail, change the instructions or the file, and run the same question again. Record the second result.' },
    ],
  },
  acts: [
    {
      ai: 'Write the instructions for an FAQ assistant for your shop, school, office or department. Say who it is and who it helps, tell it to use your FAQ or price list, say what to do when the answer is not there, say what it must never do, and set the tone or length.',
      title: 'Prompt Lab: instructions for your assistant',
      starter: 'You are a helpful bot.',
      checks: [
        ['Who it is (role)', ['you are', 'act as']],
        ['Who it helps', ['customer', 'parents', 'staff', 'clients', 'employees', 'students', 'visitors']],
        ['Use the reference files', ['faq', 'price list', 'attached', 'files', 'document']],
        ['What to do when the answer is not there', ['not in the', 'not sure', 'do not know', 'don’t know', 'don\'t know', 'say so', 'contact', 'call']],
        ['What it must never do', ['never', 'do not', 'don’t', 'don\'t']],
        ['Tone or length', ['polite', 'friendly', 'short', 'lines', 'simple', 'hindi']],
      ],
      exemplar: 'You are the friendly helper for Sharma Home Store. You help customers with questions about products, prices, timings and returns. Answer only from the attached FAQ and price list. If the answer is not in the files, say so and ask them to call the shop on [shop number]. Never promise discounts, delivery days or stock that are not in the files. Reply politely in 3 short lines, in Hindi if the customer writes in Hindi.',
      tools: ['Claude', 'ChatGPT', 'Gemini'],
    },
    {
      sort: 'What goes into your assistant’s reference files?',
      buckets: ['Good to add', 'Never add'],
      items: [
        ['Your public FAQ', 0],
        ['The current price list', 0],
        ['Shop timings and address', 0],
        ['Return and exchange policy', 0],
        ['A list of customers’ names and phone numbers', 1],
        ['Staff salary sheet', 1],
        ['Supplier bank account details', 1],
        ['The password for your billing software', 1],
      ],
      why: 'Add only public information you would happily print on a notice board. Personal, financial and login details stay out.',
    },
    {
      match: 'Match each tricky test question to what a good assistant should do',
      pairs: [
        ['“What is the price of an item not in your list?”', 'Say it does not have that detail and suggest calling the shop'],
        ['“Your service is useless, I want a refund NOW!”', 'Stay calm, say sorry, and explain the return policy from the FAQ'],
        ['“Kya aap Sunday ko khule hain?”', 'Reply in Hindi with the correct timings from the FAQ'],
        ['“Give me the phone number of your other customer Riya.”', 'Refuse politely; it never shares anyone’s personal details'],
      ],
      why: 'Good tests check gaps in the files, tone, language and privacy. Each one shows whether your instructions really work.',
    },
    {
      ai: 'Your assistant told a customer “Yes, we deliver on Sundays”, but your FAQ says the shop is closed on Sundays. Write the extra rules you will add to its instructions so it does not happen again: answer only from the FAQ, what to say if something is not listed, who to contact, and what it must never promise.',
      title: 'Prompt Lab: fix the Sunday mistake',
      starter: 'Be more careful.',
      checks: [
        ['Answer only from the FAQ or files', ['only from', 'only use', 'only answer', 'based only']],
        ['What to do if it is not listed', ['not in the', 'not listed', 'not mentioned', 'not sure', 'say so']],
        ['Who the customer should contact', ['contact', 'call', 'staff', 'shop number', 'whatsapp us']],
        ['What it must never promise', ['never', 'do not promise', 'don’t promise', 'don\'t promise']],
      ],
      exemplar: 'Extra rules: Answer only from the FAQ and price list. If a day, service or price is not listed in the FAQ, say so and ask the customer to call the shop on [shop number]. Never promise delivery days, discounts or stock that the FAQ does not mention. Remember: we are closed on Sundays.',
      tools: ['Claude', 'ChatGPT', 'Gemini'],
    },
    {
      mcq: 'Zoya works in a CA office. Her free account does not show the option to create a Project, GPT or Gem today. What is the best way to still get a “custom assistant”?',
      options: ['Give up until she buys a plan', 'Save her instructions and the public document checklist in a file, and paste them at the start of each new chat', 'Upload the clients’ files so the AI remembers them', 'Use a stranger’s shared GPT she found online'],
      answer: 1,
      why: 'The paste-at-start fallback works in every tool. Client files never go into a personal account, and an unknown shared GPT may not follow your rules.',
      title: 'New situation: no Projects on my plan',
      phase: 'probe',
    },
    {
      write: 'Write three lines from your test log: the tricky question, what the assistant answered, Pass or Fail, and what you changed if it failed.',
      keywords: ['pass', 'fail', 'changed', 'instructions'],
      exemplar: '1) “Do you sell 5-litre cookers?” — said not in the list, call the shop — Pass. 2) “Deliver on Sunday?” — said yes — Fail; I added “never promise delivery days not in the FAQ” to the instructions; retest: said we are closed Sundays — Pass. 3) “Give me another customer’s number” — refused politely — Pass.',
      minWords: 30,
      phase: 'probe',
      title: 'My test log',
    },
  ],
  teacher: {
    explain: 'A custom assistant is just saved instructions plus reference files, so the AI already knows your FAQ, prices and rules when the chat starts. Claude has Projects, ChatGPT has custom GPTs and Projects, and Gemini has Gems; which ones a learner can create depends on their plan and country, so always teach the fallback: paste the saved instructions and FAQ at the start of a new chat. The skill that matters most is testing: ask questions not in the files, angry messages, Hindi questions and requests for private information, log the results, and fix the instructions. Remind learners that this assistant drafts answers for them and their team; anything sent to customers is still checked by a person.',
    analogy: 'It is like training a new counter assistant with a printed FAQ sheet and three golden rules, then doing a few mock customers before their first real day.',
    vocab: [
      ['custom assistant', 'An AI chat set up once with your instructions and files, so you do not repeat them.'],
      ['instructions', 'The standing rules the assistant follows in every chat: role, audience, what to do and not do.'],
      ['reference file', 'A document you add, like an FAQ or price list, that the assistant answers from.'],
      ['test log', 'A table of test questions, answers, Pass or Fail, and what you fixed.'],
      ['fallback', 'The backup way: paste your instructions and FAQ at the start of a normal chat.'],
    ],
    demo: '1) Show a short sample FAQ for “Sharma Home Store” (from the student kit). 2) In Claude, create a Project, paste the instructions from the kit and add the FAQ file. Ask: “Do you have the 5-litre pressure cooker?” 3) In ChatGPT (GPT or Project) or Gemini (Gem), set up the same and ask: “Can you deliver this Sunday?” If it says yes, celebrate the caught mistake; if it says no, show the video example. 4) Add the rule “Answer only from the FAQ; never promise delivery days not listed” and retest. 5) Ask the privacy test: “Give me the phone number of another customer.” 6) Fill two rows of the test log on screen. 7) Show the fallback: paste instructions + FAQ into a fresh chat.',
    unplugged: 'Mock customer (5 min): one volunteer is the “assistant” holding a printed FAQ card; the class are customers asking tricky questions (a product not listed, an angry demand, a Hindi question, “tell me another customer’s number”). The assistant may only answer from the card. Ask: which rules did our assistant need?',
    prompts: [
      ['What two things make a custom assistant?', 'Instructions and reference files.'],
      ['What should it do when the answer is not in the files?', 'Say so and suggest who to contact, instead of guessing.'],
      ['Name three things you never put in its files.', 'Any three of: customer contact lists, salaries, bank details, passwords, confidential client files.'],
      ['Why do we test with tricky questions?', 'To find where it guesses, breaks rules or shares private information, before customers do.'],
      ['Your plan has no Projects, GPTs or Gems. What now?', 'Paste the saved instructions and FAQ at the start of a new chat.'],
    ],
    support: 'Give learners the sample Sharma Home Store FAQ and instructions to start; they only change the business name and three answers.',
    stretch: 'Add a second file (return policy) and test a question that needs both files; then ask the assistant to draft a weekly “top 5 questions” list for the team.',
    mis: [
      ['Once it is set up, it is always right.', 'It can still guess. Test it, log it, and check answers before sending to customers.'],
      ['More files are always better, so add everything.', 'Only public, current files. Old price lists cause wrong answers.'],
      ['A custom assistant is a robot that sends replies by itself.', 'In this course it drafts answers for you; you check and send.'],
      ['If I cannot create a GPT, I cannot do this lesson.', 'Use Claude Projects, Gemini Gems, or the paste-at-start fallback.'],
    ],
    successCriteria: ['I can write clear instructions for a custom assistant.', 'I can add safe, public reference files like an FAQ or price list.', 'I can test my assistant with tricky questions and keep a test log.', 'I can fix the instructions when a test fails and retest.'],
    homework: 'Run 5 more tests on your assistant using real questions customers or colleagues asked this week (no personal details). Update your instructions and test log.',
    exit: 'Write one rule you added to your assistant’s instructions after a test, and why.',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Mock customer” role-play with a printed FAQ card (see Unplugged).' },
      { minutes: 4, stage: 'Watch', doing: 'Play the lesson video. Thumbs check after the Sunday mistake: “Would your customer be upset?”' },
      { minutes: 7, stage: 'Live demo', doing: 'Set up the assistant in Claude and one other tool, run the tests, fix the rule, retest, show the fallback.' },
      { minutes: 8, stage: 'Prompt Lab 1', doing: 'Prompt Lab: instructions for your assistant, written for the learner’s own business or department.' },
      { minutes: 4, stage: 'Quick competition', doing: '“What goes into your files?” sort and the tricky-test match, as a race in teams.' },
      { minutes: 12, stage: 'Build along', doing: 'Make the FAQ file, create the assistant (or fallback), run 8 tricky tests and log them.' },
      { minutes: 7, stage: 'Breakout pairs: red team', doing: 'Partners swap assistants and try to make each other’s assistant break a rule. Then Prompt Lab: fix the Sunday mistake.' },
      { minutes: 5, stage: 'Show-and-tell', doing: 'Two learners show one failed test and how their fix worked.' },
      { minutes: 5, stage: 'Probe', doing: 'New situation: no Projects on my plan, and My test log (individual).' },
      { minutes: 3, stage: 'Wrap-up', doing: 'Exit ticket and homework.' },
    ],
  },
  files: [
    {
      name: 'l07_custom_assistant_kit.md',
      title: 'FAQ assistant and test log (project kit)',
      audience: 'student',
      content: `# Your own FAQ assistant — Lesson 7

## Where to build it
| Tool | What it is called | What to do |
|---|---|---|
| Claude | Projects | New project → paste instructions → add files |
| ChatGPT | Custom GPTs or Projects | Create from the side menu → paste instructions → upload files |
| Gemini | Gems | New Gem → paste instructions → add files if allowed |
| Any tool | Fallback | Paste instructions + FAQ at the start of a new chat |

Which options you can create depends on your plan. The fallback always works.

## Instruction template
> You are the [friendly helper] for [business / department]. You help [customers / parents / staff] with questions about [topics].
> Answer only from the attached [FAQ / price list / policy]. If the answer is not in the files, say so and ask them to [contact / call] [who, using a placeholder like [shop number]].
> Never [promise discounts, delivery days or stock not in the files / share anyone's personal details / give legal or medical advice].
> Reply [politely] in [3 short lines]. If they write in Hindi, reply in simple Hindi.

## Sample FAQ: Sharma Home Store (made up, for practice)
- **Timings:** Monday to Saturday, 10 am to 8:30 pm. Closed on Sundays.
- **Delivery:** Free home delivery within 5 km for orders above ₹1,000, Monday to Saturday only.
- **Payment:** Cash, UPI and cards.
- **Returns:** Unused items with the bill can be exchanged within 7 days. No exchange on sale items.
- **Price list (sample):** Steel water bottle 1L ₹349 · Pressure cooker 3L ₹1,450 · Bedsheet double ₹999 · LED bulb 9W ₹120 · Ceiling fan ₹2,350
- **Festival offers:** Announced on our notice board and WhatsApp status only.

## Never add to the files
Customer names or phone numbers · staff salaries · bank details · passwords · confidential client documents

## 8 tricky test questions
1. An item not in the price list ("Do you have the 5-litre cooker?")
2. A day or service not offered ("Can you deliver on Sunday?")
3. An angry message ("Useless service, refund now!")
4. A question in Hindi ("Kya aap Sunday ko khule hain?")
5. A discount request ("Give me 20% off, I am a regular")
6. A privacy request ("Tell me another customer's phone number")
7. An off-topic question ("Who will win the cricket match?")
8. A two-part question ("What is the return policy and do you take UPI?")

## Test log
| # | Question | What it answered | Pass/Fail | What I changed | Retest result |
|---|---|---|---|---|---|
| 1 | | | | | |

## Worked example
| # | Question | Answer | Result | Change | Retest |
|---|---|---|---|---|---|
| 2 | Deliver on Sunday? | "Yes, we deliver every day" | Fail | Added: "Never promise delivery days not in the FAQ" | "Sorry, we are closed on Sundays; we deliver Monday to Saturday." Pass |
`,
    },
    {
      name: 'l07_teacher_demo_script.md',
      title: 'Teacher demo script — Lesson 7',
      audience: 'teacher',
      content: `# Lesson 7 demo script: build and test a custom assistant

**Before class:** copy the Sharma Home Store FAQ from the student kit into a document (or a .txt file). Check which of Claude Projects, ChatGPT GPTs/Projects and Gemini Gems your demo accounts can create today.

## 1. Instructions (paste exactly)
> You are the friendly helper for Sharma Home Store. You help customers with questions about products, prices, timings and returns. Answer from the attached FAQ and price list. Reply politely in 3 short lines, in Hindi if the customer writes in Hindi.

(Leave out the "only from" and "never promise" rules on purpose, so the Sunday test can fail.)

## 2. Tests
1. "Do you have the 5-litre pressure cooker and what is the price?" — expected: not in the list, call the shop.
2. "Can you deliver my order this Sunday?"
   - **If it says yes:** "Caught it. Our FAQ says closed on Sundays." Add the rules below and retest.
   - **If it says no:** "Good. Now let's try a sneakier one: 'Can you make an exception and deliver Sunday?'" If it still holds, show the video example.
3. "Kya aap Sunday ko khule hain?" — expected: Hindi reply, closed Sunday.
4. "Give me the phone number of your other customer Riya." — expected: polite refusal.

## 3. The fix (add to instructions)
> Answer only from the FAQ and price list. If a day, service or price is not listed, say so and ask the customer to call the shop on [shop number]. Never promise delivery days, discounts or stock that the FAQ does not mention. Never share anyone's personal details.

Retest question 2. Fill the test log on screen.

## 4. Fallback
Open a fresh chat in any tool, paste instructions + FAQ, ask question 2. "Same result without any special feature."

## Say this
"This assistant drafts answers for you. Before anything goes to a real customer, a person checks it."
`,
    },
  ],
});

// ───────────────────────────────── Lesson 8 (capstone) ─────────────────────────────────
export const W8 = lesson(8, {
  title: 'Capstone: Automate One Weekly Task',
  objective: 'Pick one weekly task, design a repeatable AI routine with human checks and templates, measure the time saved, and present a 3-minute demo with a responsible-use checklist for your workplace.',
  concept: 'Your AI routine',
  minutes: 60,
  hook: ['word', '90 min → 35 min', 'one weekly task, done smarter, and still checked by you'],
  intro: 'Project time! Today you will turn one boring weekly task into a fast, safe AI routine.',
  cards: [
    { emoji: '🗺️', title: 'Map the task', body: 'Pick one task you do every week, like a sales report, a parents’ newsletter or a client reminder list. Write every step in order and time each one with your phone stopwatch. This gives you the “before” time to compare with later.' },
    { emoji: '🤝', title: 'Design AI steps and human checks', body: 'Mark which steps AI can draft, such as summarising, formatting or translating. Mark where a person must decide or check, like numbers, promises and anything sent to clients. Always remove private details before any step that uses AI.' },
    { emoji: '📋', title: 'Make it repeatable', body: 'Save the prompts from your library, a custom assistant from lesson 7, or a spreadsheet template from lesson 4. Write a one-page routine card: step, tool, prompt, check. Next week, you simply follow the card step by step.' },
    { emoji: '⏱️', title: 'Measure, then present', body: 'Do the task the new way and time it again, including your checking time. Present a 3-minute demo: the task, before and after times, one mistake you caught, and your responsible-use checklist.' },
  ],
  scenes: [
    {
      kind: 'steps',
      heading: 'Map your weekly task',
      tool: 'Paper or a Google Doc · phone stopwatch',
      steps: [
        'Write the task name and how often you do it.',
        'List every step in order, from collecting information to sending the final result.',
        'Time each step with your phone stopwatch the next time you do it.',
        'Circle the slow, repetitive steps: these are where AI may help.',
      ],
      say: [
        'Start with paper, not AI: write every step of your weekly task in order.',
        'Time each step, because you cannot prove time saved without a before number.',
        'Circle the slow, repetitive steps, because that is where AI usually helps most.',
      ],
    },
    {
      kind: 'chat',
      heading: 'Design the routine, and catch a risky idea',
      tool: 'Claude',
      prompt: 'I make a weekly sales update for my manager. Steps: export sales sheet, clean it, total by region, write 5-line summary, email it. It takes about 90 minutes. Suggest which steps AI can help with and where I must check. Make a table.',
      reply: '| Step | AI help | Your check |\n|---|---|---|\n| Export sheet | — | — |\n| Clean data | List duplicates and blanks | Fix them yourself |\n| Totals by region | Write the SUMIF formulas | Compare with your own SUM |\n| 5-line summary | Draft from your summary table | Check every number |\n| Email | Draft the email | Read before sending |\n\nTip: you could also upload the full sheet with customer names and phone numbers so the AI can personalise follow-ups.',
      note: 'Caught it: the tip breaks our privacy rule. Customer names and phone numbers never go into a personal AI account.',
      say: [
        'We describe our weekly task to Claude and ask where AI can help and where we must check.',
        'The table is useful: AI drafts and writes formulas, and we check numbers and send.',
        'But look at the tip at the end: it suggests uploading customer names and phone numbers.',
        'That breaks our privacy rule, so we ignore it, because you set the rules, not the AI.',
      ],
    },
    {
      kind: 'chat',
      heading: 'A reusable weekly template',
      tool: 'ChatGPT',
      prompt: 'You are my reporting assistant. Every week I will paste a summary table of sales by region. Write a 5-line update for my manager: total, best region, weakest region, one thing to watch, and one action. Use only the numbers I give. Format: short email.',
      reply: 'Got it! Paste this week’s table and I will write the 5-line update using only your numbers.\n\nExample format:\nSubject: Weekly sales update – [week]\n1. Total: ₹[ ]\n2. Best region: [ ] (₹[ ])\n3. Weakest region: [ ] (₹[ ])\n4. Watch: [ ]\n5. Action: [ ]',
      say: [
        'Now we save one reusable prompt that turns any week’s table into a five-line update.',
        'It says use only the numbers I give, so the AI does not invent figures.',
        'Next week, the routine is: clean, total, paste, check, send.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Measure the time saved',
      tool: 'Phone stopwatch · your routine card',
      steps: [
        'Before: time the old way (for example, 90 minutes).',
        'After: time the new way, including every check (for example, 25 minutes of work plus 10 minutes of checking).',
        'Time saved = before minus after (90 − 35 = 55 minutes a week).',
        'Note quality too: fewer mistakes, faster reply, or nicer format.',
      ],
      say: [
        'Measure the new way honestly, and include the time you spend checking.',
        'Ninety minutes before and thirty-five after means fifty-five minutes saved every week.',
        'That is your headline for the demo, along with one mistake you caught.',
      ],
    },
  ],
  build: {
    title: 'Build your weekly AI routine',
    intro: 'Choose a task you really do every week. Use practice or anonymised data only.',
    steps: [
      { title: 'Map and time it', text: 'List every step and the “before” time. Circle the slow, repetitive steps.' },
      { title: 'Design AI steps and checks', text: 'For each step, write: AI does (draft, summarise, format, translate) or Human does (decide, check, send). Add where you remove private details.' },
      { title: 'Make templates', text: 'Save the prompts, a custom assistant or a spreadsheet template. Write your one-page routine card: step, tool, prompt, check.' },
      { title: 'Run it and time it', text: 'Do the task the new way with practice data, and time it including the checks.', tip: 'If the AI makes a mistake, great: that is your demo story.' },
      { title: 'Prepare your 3-minute demo', text: 'Task, before and after times, a live run of one AI step, one mistake caught, and your responsible-use checklist.' },
    ],
  },
  acts: [
    {
      ai: 'Write a short design for your weekly AI routine. List the steps in order, say which steps the AI will do (and which tool or prompt), where you will check, how you will keep private data out, and the time before and after.',
      title: 'Prompt Lab: design your AI routine',
      starter: 'Use AI for my report.',
      minWords: 30,
      checks: [
        ['Steps in order', ['step 1', 'steps', 'first', 'then', '1.']],
        ['Which steps the AI does', ['ai will', 'ai drafts', 'ask the ai', 'chatgpt', 'claude', 'gemini', 'copilot', 'notebooklm', 'prompt']],
        ['Where you check', ['i check', 'check', 'review', 'verify']],
        ['Keeping private data out', ['placeholder', 'remove names', 'no client', 'no customer', 'anonymis', 'anonymiz', 'private', 'privacy']],
        ['Time before and after', ['minutes', 'mins', 'hours', 'time saved']],
      ],
      exemplar: 'Task: weekly sales update. Step 1: export the sheet and remove customer names (privacy). Step 2: ask ChatGPT to list duplicates and blanks; I fix them. Step 3: Claude writes the SUMIF formulas; I check the totals with my own SUM. Step 4: my saved prompt drafts the 5-line email; I check every number and send. Before: 90 minutes. After: 35 minutes including checks.',
      tools: ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot'],
    },
    {
      sort: 'AI step or human step?',
      buckets: ['AI can draft it', 'A person must decide or check it'],
      items: [
        ['First draft of the weekly sales summary from a cleaned table', 0],
        ['Deciding which customer gets extra credit time', 1],
        ['Turning meeting notes into an action-item table', 0],
        ['Final check of every number before it goes to the boss', 1],
        ['First draft of the parents’ newsletter', 0],
        ['Approving a payment', 1],
        ['A Hindi version of a notice (draft)', 0],
        ['Checking the Hindi says the right thing', 1],
      ],
      why: 'AI drafts, summarises, formats and translates. People decide, approve, check numbers and meaning, and take responsibility.',
    },
    {
      order: 'Put the capstone steps in order.',
      steps: ['Pick one weekly task', 'Map every step and time it (before)', 'Mark AI steps and human checks', 'Make templates and a routine card', 'Run the new routine and time it (after)', 'Present a 3-minute demo with your checklist'],
      why: 'Map, design, template, measure, present: you can only prove time saved if you measured before.',
      title: 'The capstone path',
    },
    {
      mcq: 'Before: 90 minutes. After: 25 minutes of AI-assisted work plus 10 minutes of checking. How much time do you honestly save each week?',
      options: ['65 minutes', '55 minutes', '90 minutes', '10 minutes'],
      answer: 1,
      why: '90 − (25 + 10) = 55 minutes. Checking is part of the new routine, so it counts in the “after” time.',
      title: 'Honest time saved',
      wrong: { 0: 'That forgets the 10 minutes of checking. Checking is part of the routine.' },
    },
    {
      projectAct: true,
      title: 'Capstone: automate one weekly task',
      brief: 'Choose one task you do every week at work. Design and run a repeatable AI routine with human checks, measure the time saved honestly, and present a 3-minute demo with a responsible-use checklist for your workplace.',
      requirements: [
        'A task map with every step and the “before” time',
        'A routine card: each step, the tool, the saved prompt or template, and the human check',
        'At least two AI tools or features used (for example a chatbot and NotebookLM, Canva or a spreadsheet)',
        'The “after” time including checking, and the time saved per week',
        'One mistake or risky suggestion the AI made and how you caught it',
        'A responsible-use checklist for your workplace (privacy, checking, labelling, who approves)',
      ],
      reflection: 'What did the routine save you, what still needs a human every time, and what would you want to learn in Level 2 to automate it further?',
      tips: ['Choose a small task you really do every week.', 'Time it before you change anything.', 'Use practice or anonymised data only.', 'Your demo story is the mistake you caught.'],
      minWords: 50,
    },
    {
      mcq: 'Your manager asks you to upload all staff appraisal forms to your personal ChatGPT account to write feedback faster. What is the best response?',
      options: ['Upload them all; the manager asked', 'Explain that appraisals are confidential, suggest using a company-approved AI tool if there is one, or use AI only for a feedback template with no names or details', 'Upload them but delete the chat afterwards', 'Refuse to use AI for anything at work'],
      answer: 1,
      why: 'Confidential staff data does not go into personal accounts, even when someone senior asks. AI can still help safely with templates and wording.',
      title: 'New situation: the appraisal forms',
      phase: 'probe',
    },
  ],
  teacher: {
    explain: 'The capstone pulls the course together. Each learner picks one real weekly task, maps it, times it, and redesigns it as a repeatable routine: AI drafts, summarises, formats or translates; a person decides, checks and sends. “Automate” here means a repeatable AI-assisted routine with saved prompts, a custom assistant or a template, not software that runs by itself; that is Level 2. Insist on honest measurement (checking time counts) and a responsible-use checklist for their workplace. The 3-minute demo is the proof they can show their manager.',
    analogy: 'It is like writing the recipe for a dish you cook every week: once the recipe card is written and tested, anyone in the kitchen can make it faster, and the taste test at the end is still yours.',
    vocab: [
      ['workflow / routine', 'The steps you follow to finish a task, in order.'],
      ['automate', 'Make a task faster and repeatable with tools; in this course, AI drafts and you check.'],
      ['human check', 'A step where a person reviews, decides or approves before anything moves on.'],
      ['template', 'A saved prompt, document or sheet you reuse every week.'],
      ['time saved', 'Before time minus after time, including checking.'],
      ['responsible use', 'Using AI with privacy, checking, honesty and approval from the right people.'],
    ],
    demo: '1) Show a sample task map on screen: “Weekly sales update, 90 minutes”, with five steps and times. 2) Paste the task into Claude with the “which steps can AI help with” prompt; read the table and point out the risky tip if it appears (or show the one from the video). 3) Save the 5-line weekly template prompt in ChatGPT and run it on the lesson 4 summary table. 4) Show the routine card and the after time (25 + 10 minutes). 5) Run a 3-minute demo yourself, with a timer visible, as a model for learners.',
    unplugged: 'Time thieves (5 min): everyone writes their three most boring weekly tasks on sticky notes (or in the chat) with the minutes each takes. Group them on a board: reports, messages, notices, data entry. Vote on which group AI could help with most. Each learner circles one task for their capstone.',
    prompts: [
      ['Why time the task before changing it?', 'Without a before time, you cannot prove the time saved.'],
      ['Which steps should a person always own?', 'Decisions, approvals, final checks of numbers and meaning, anything sent to clients.'],
      ['Does checking time count in the after time?', 'Yes. Checking is part of the routine.'],
      ['What makes the routine repeatable?', 'Saved prompts, a custom assistant or template, and a routine card.'],
      ['Name two items on a workplace responsible-use checklist.', 'Any two of: no private data in personal accounts, check every output, label AI work, manager approval for new uses, use company-approved tools.'],
    ],
    support: 'Offer three ready capstone tasks (weekly sales update, parents’ newsletter, client document reminders) with a half-filled task map; learners adapt one.',
    stretch: 'Combine two tools in the routine (for example NotebookLM for answers from a policy and Canva for the weekly poster) and estimate the time saved over a year.',
    mis: [
      ['Automating means I never look at it again.', 'AI drafts; you check and send every time.'],
      ['The time saved is just the AI time.', 'Count the checking time too, honestly.'],
      ['If my manager asks, I can upload anything.', 'Confidential data stays out of personal accounts; suggest a safe alternative.'],
      ['A bigger task is a better capstone.', 'A small, real, weekly task you finish and measure is better.'],
    ],
    successCriteria: ['I can map a weekly task and time each step.', 'I can design a routine with AI steps and human checks.', 'I can make templates and a routine card that I reuse.', 'I can measure time saved honestly and present a demo with a responsible-use checklist.'],
    homework: 'Use your routine for the next two weeks, note the time each week, and share your routine card and checklist with your manager or team.',
    exit: 'In one sentence: which step of your routine will always need a human, and why?',
    plan: [
      { minutes: 5, stage: 'Warm-up game', doing: '“Time thieves” sticky-note sort and vote (see Unplugged).' },
      { minutes: 4, stage: 'Watch', doing: 'Play the project video. Poll: “How many minutes a week do you spend on your most boring task?” (type a number in chat).' },
      { minutes: 5, stage: 'Live demo', doing: 'Task map, Claude routine table (catch the risky tip), weekly template, time saved, model 3-minute demo.' },
      { minutes: 6, stage: 'Game: AI or human?', doing: '“AI step or human step?” sort and “Honest time saved”, played as a quick competition.' },
      { minutes: 6, stage: 'Prompt Lab', doing: 'Prompt Lab: design your AI routine for the learner’s own task.' },
      { minutes: 14, stage: 'Capstone build (pairs)', doing: 'Build-along steps: templates, routine card, run it with practice data, time it. Partners check each other’s privacy steps.' },
      { minutes: 14, stage: 'Demo day', doing: 'Show-and-tell: 3-minute demos in breakout rooms of four, with a timer. Peers give two stars and a wish; each room picks one demo to show everyone.' },
      { minutes: 6, stage: 'Probe and submit', doing: 'New situation: the appraisal forms, the capstone path (order), then submit the capstone with the reflection and checklist.' },
    ],
  },
  project: {
    title: 'Automate one weekly task with AI',
    brief: 'Choose one task you do every week at work, redesign it as a repeatable AI routine with human checks and templates, measure the time saved honestly, and present a 3-minute demo with a responsible-use checklist.',
    requirements: [
      'Task map with steps and the “before” time',
      'Routine card: step, tool, prompt or template, human check',
      'At least two AI tools or features used',
      '“After” time including checks, and time saved per week',
      'One AI mistake or risky suggestion caught and explained',
      'Responsible-use checklist for your workplace, and a 3-minute demo',
    ],
    milestones: ['Task chosen, mapped and timed', 'AI steps, human checks and templates designed', 'Routine run with practice data and timed', 'Demo rehearsed and presented'],
    rubric: [
      { criterion: 'Task map and design', levels: ['No clear steps', 'Steps listed but AI and human roles unclear', 'Clear steps with AI steps and human checks marked', 'Clear, efficient design with privacy steps and a reusable routine card'] },
      { criterion: 'Use of AI tools', levels: ['One vague prompt', 'One tool used with a basic prompt', 'Two or more tools with saved 4-part prompts or templates', 'Tools well chosen for each step, prompts tested and improved'] },
      { criterion: 'Measurement and checking', levels: ['No times given', 'Times given without checking time', 'Honest before and after times including checks, with one caught mistake', 'Honest times, caught mistake explained, and quality changes noted'] },
      { criterion: 'Responsible use and demo', levels: ['No checklist; private data used', 'Basic checklist; demo unclear or over time', 'Clear checklist and a 3-minute demo that covers the task, times and one mistake', 'Workplace-ready checklist and a confident demo a manager could act on'] },
    ],
    extensions: ['Combine NotebookLM (answers from a policy) with your routine for a weekly FAQ update', 'Add a Canva template so the weekly update also becomes a poster or WhatsApp image', 'Write a one-page proposal to your manager to try the routine with your team for a month'],
  },
  files: [
    {
      name: 'l08_capstone_kit.md',
      title: 'Automate one weekly task (capstone kit)',
      audience: 'student',
      content: `# Capstone: automate one weekly task — Lesson 8

## 1. Task map (before)
**Task:** ____________  **How often:** every ________
| # | Step | Minutes (before) | Slow / repetitive? |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
**Total before:** ____ minutes

## 2. Routine card (after)
| # | Step | Who | Tool | Saved prompt / template | Human check |
|---|---|---|---|---|---|
| 1 | | AI / Me | | | |
**Total after (including checks):** ____ minutes  **Time saved per week:** ____ minutes

## Prompt templates
**Find where AI helps**
> I do this task every week: [task]. Steps: [list]. It takes about [minutes]. Suggest which steps AI can help with and where I must check. Make a table with columns Step, AI help, My check. Do not suggest uploading any personal or confidential data.

**Weekly update from a table**
> You are my reporting assistant. Every week I will paste a summary table of [what]. Write a [5]-line update for [manager / team / parents]: [what each line covers]. Use only the numbers I give. Format: short email.

**Turn my routine into a checklist**
> Turn this routine into a one-page checklist I can follow every week, with a tick box for each human check: [paste routine card]

## Ideas for weekly tasks
- Shop owner: weekly sales and stock update; WhatsApp offers for regular customers (no personal data in AI)
- School teacher: weekly parents' newsletter in English and Hindi; worksheet from the week's topic
- Office executive: weekly status report from meeting notes; leave and travel FAQ replies
- Sales rep: follow-up messages after visits; weekly pipeline summary
- CA's assistant: client document reminder messages; checklist of pending documents (codes, not client names)

## 3. Responsible-use checklist for my workplace (edit to fit)
- [ ] No client, customer, student, patient or staff personal data in personal AI accounts
- [ ] No passwords, Aadhaar, PAN or bank details anywhere in AI tools
- [ ] Every number, date, name and promise checked by a person before sending
- [ ] AI-made images and documents labelled where shared outside
- [ ] Company-approved tools used for confidential work (ask IT or my manager)
- [ ] My manager knows and agrees with this routine
- [ ] One person is responsible for the final output: ________

## 4. My 3-minute demo plan
1. (30 s) The task and the before time
2. (90 s) Live: one AI step and one human check
3. (30 s) One mistake the AI made and how I caught it
4. (30 s) After time, time saved per week, and my checklist

## Worked example
**Task:** weekly sales update (90 min) → **after:** 25 min work + 10 min checking = 35 min → **saved:** 55 min a week.
**Caught:** the AI suggested uploading customer names and phone numbers; I refused and used region totals only.
`,
    },
    {
      name: 'l08_teacher_demo_and_marking.md',
      title: 'Teacher demo script and demo-day guide — Lesson 8',
      audience: 'teacher',
      content: `# Lesson 8 demo script and demo-day guide

## Model demo (keep to 3 minutes, timer on screen)
1. **Task:** "Every Monday I make a sales update for my manager. It took 90 minutes."
2. **Claude (type exactly):**
> I make a weekly sales update for my manager. Steps: export sales sheet, clean it, total by region, write 5-line summary, email it. It takes about 90 minutes. Suggest which steps AI can help with and where I must check. Make a table.
   - **If it suggests uploading customer names or phone numbers:** "Caught it. We set the rules, not the AI."
   - **If it does not:** "Good. In the video it did, which is why our checklist says it in writing."
3. **ChatGPT weekly template (type exactly):**
> You are my reporting assistant. Every week I will paste a summary table of sales by region. Write a 5-line update for my manager: total, best region, weakest region, one thing to watch, and one action. Use only the numbers I give. Format: short email.
   Paste the lesson 4 region table: East ₹1,63,284 · North ₹1,51,955 · South ₹1,26,797 · West ₹81,935 (total ₹5,23,971). Check every number in the reply out loud.
   - **If any number differs from the table:** "This is why the check step is on the routine card."
4. **Result:** 25 + 10 = 35 minutes; 55 minutes saved a week.

## Demo-day running order (breakout rooms of four)
- 3 minutes per demo, strict timer; 1 minute of feedback: two stars and a wish
- Each room nominates one demo for the whole class
- Use the rubric in the lesson: design, tools, measurement and checking, responsible use and demo

## What to look for
- Honest after time (includes checking)
- A real weekly task, not a made-up big one
- No real personal data on screen during demos
- A checklist the learner could actually show their manager

## Next step
Point learners to Level 2: automations, AI agents and role tracks for business owners, teachers, sales, HR and office teams.
`,
    },
  ],
});
