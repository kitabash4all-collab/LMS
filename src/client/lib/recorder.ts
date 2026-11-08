// Teacher-side class recorder (for quality and safety audits).
// Records this browser tab (the class as the teacher sees and hears it) plus the teacher's
// microphone, and uploads it to Kitabash in 10-second pieces while the class runs.
import { api, ApiError } from './api.ts';

export type RecorderStatus = 'idle' | 'starting' | 'recording' | 'stopping';

export class ClassRecorder {
  status: RecorderStatus = 'idle';
  error = '';
  private rec: MediaRecorder | null = null;
  private display: MediaStream | null = null;
  private audioCtx: AudioContext | null = null;
  private recId = '';
  private seq = 0;
  private queue: Promise<void> = Promise.resolve();
  private listeners = new Set<() => void>();

  constructor(private sessionId: string) {}

  static supported() {
    return typeof window !== 'undefined' && 'MediaRecorder' in window && !!navigator.mediaDevices && 'getDisplayMedia' in navigator.mediaDevices;
  }

  on(fn: () => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  private emit() {
    for (const fn of this.listeners) fn();
  }
  private set(status: RecorderStatus, error = this.error) {
    this.status = status;
    this.error = error;
    this.emit();
  }

  async start(mic: MediaStream | null) {
    if (this.status !== 'idle') return;
    this.set('starting', '');
    try {
      // Ask the server first: it refuses if any child's parent hasn't allowed recording.
      const { id } = await api<{ id: string }>(`/api/live/${this.sessionId}/recordings`, { method: 'POST' });
      this.recId = id;
      this.seq = 0;
      try {
        this.display = await navigator.mediaDevices.getDisplayMedia({
          video: { frameRate: 15 },
          audio: true,
          // Chrome: offer "this tab" first so the class itself is recorded.
          ...({ preferCurrentTab: true, selfBrowserSurface: 'include', systemAudio: 'include' } as any),
        });
      } catch (e) {
        await api(`/api/live/${this.sessionId}/recordings/${this.recId}/stop`, { method: 'POST' }).catch(() => {});
        throw new Error('Recording needs you to choose this tab to share. Nothing was recorded.');
      }
      const tracks: MediaStreamTrack[] = [...this.display.getVideoTracks()];
      const sources = [this.display, mic].filter((s): s is MediaStream => !!s && s.getAudioTracks().length > 0);
      if (sources.length) {
        this.audioCtx = new AudioContext();
        const dest = this.audioCtx.createMediaStreamDestination();
        for (const s of sources) this.audioCtx.createMediaStreamSource(new MediaStream(s.getAudioTracks())).connect(dest);
        tracks.push(...dest.stream.getAudioTracks());
      }
      const mimeType = ['video/webm;codecs=vp8,opus', 'video/webm;codecs=vp9,opus', 'video/webm'].find((t) => MediaRecorder.isTypeSupported(t)) || '';
      this.rec = new MediaRecorder(new MediaStream(tracks), { ...(mimeType ? { mimeType } : {}), videoBitsPerSecond: 600_000, audioBitsPerSecond: 64_000 });
      this.rec.ondataavailable = (e) => {
        if (e.data.size) this.upload(e.data);
      };
      this.rec.onstop = () => void this.finish();
      // Browser's own "Stop sharing" button ends the recording too.
      this.display.getVideoTracks()[0]?.addEventListener('ended', () => void this.stop());
      this.rec.start(10_000);
      this.set('recording');
    } catch (e) {
      this.cleanup();
      this.set('idle', (e as Error).message);
    }
  }

  private upload(blob: Blob) {
    const seq = this.seq++;
    this.queue = this.queue.then(async () => {
      if (!this.recId) return;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          await api(`/api/live/${this.sessionId}/recordings/${this.recId}/chunk?seq=${seq}`, { method: 'PUT', raw: blob, headers: { 'content-type': 'video/webm' } });
          return;
        } catch (e) {
          // The server stopped the recording (parent withdrew permission, size limit): stop here too.
          if (e instanceof ApiError && (e.status === 403 || e.status === 413 || e.status === 404)) {
            this.error = e.message;
            this.recId = '';
            this.rec?.state === 'recording' && this.rec.stop();
            return;
          }
          await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
        }
      }
    });
  }

  async stop() {
    if (this.status !== 'recording' || !this.rec) return;
    this.set('stopping');
    if (this.rec.state !== 'inactive') this.rec.stop(); // fires the last piece, then onstop → finish()
    else await this.finish();
    await new Promise<void>((resolve) => {
      const off = this.on(() => this.status === 'idle' && (off(), resolve()));
      if ((this.status as RecorderStatus) === 'idle') (off(), resolve());
    });
  }

  private async finish() {
    await this.queue;
    if (this.recId) await api(`/api/live/${this.sessionId}/recordings/${this.recId}/stop`, { method: 'POST' }).catch(() => {});
    this.cleanup();
    this.set('idle');
  }

  private cleanup() {
    this.display?.getTracks().forEach((t) => t.stop());
    void this.audioCtx?.close().catch(() => {});
    this.display = null;
    this.audioCtx = null;
    this.rec = null;
    this.recId = '';
  }
}
