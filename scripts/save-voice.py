# Decode a Speko audio.synthesize result file into <out>.wav  (usage: save-voice.py result.txt out.wav)
import json, base64, sys
d = json.load(open(sys.argv[1]))
open(sys.argv[2], 'wb').write(base64.b64decode(d['audio_base64']))
print(sys.argv[2], d['duration_seconds'], 's', d['provider'], d['model'])
