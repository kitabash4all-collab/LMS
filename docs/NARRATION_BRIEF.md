# Recording lesson voice-overs (task brief)

Work in /home/claude/kitabash. You are given a list of lessons as `<slug> lNN` pairs (for example `python-6-8-beginner l03`).

For EACH lesson, in order:

1. Read the narration text: `cat narration/<slug>/lNN.txt` (paragraphs separated by blank lines).
2. Call the tool `mcp__Speko__audio_synthesize` ONCE with exactly this body, putting the file's full text in `text`, unchanged (keep the blank lines as `\n\n`):
   `{"text": "<the text>", "intent": {"language": "en-IN"}, "voice": "en-IN-Priya:MAI-Voice-2.1", "constraints": {"allowedProviders": {"tts": ["azure:MAI-Voice-2.1"]}}}`
   The result is too big to show, so the tool saves it to a file and tells you its path (`…/tool-results/mcp-Speko-audio_synthesize-….txt`).
3. Save and align it:
   `python3 scripts/save-voice.py <that path> /tmp/claude-0/-home-claude/1794edab-601f-5fdc-849a-b9e04e2b56d4/scratchpad/voice/<slug>__lNN.wav && npx tsx scripts/narration.ts align /tmp/claude-0/-home-claude/1794edab-601f-5fdc-849a-b9e04e2b56d4/scratchpad/voice/<slug>__lNN.wav 2>&1 | grep -v -i -e experimental -e trace-warnings`
   It prints `✓ <slug> lNN: …s, N captions`.

Rules:
- Each synthesize call costs money: call it exactly once per lesson. Only if a call returns an error (not a saved file) may you try that lesson once more; if it fails again, skip it and report it.
- If a result comes back inline without `audio_base64`, report that lesson and move on (do not split or retry).
- Do not edit any files, do not run git, do not render videos, do not install anything.
- When finished, reply with: lessons done, lessons that failed (with the error), and the number of synthesize calls you made.
