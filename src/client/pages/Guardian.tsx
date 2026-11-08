import { useEffect, useState } from 'react';
import { api, useApi } from '../lib/api.ts';
import { Badge, Button, Card, Empty, Field, Input, Notice, PageHeader, ProgressBar, Spinner, toast } from '../components/ui.tsx';

/** Saved weekly reports, newest first. */
function WeeklyReports() {
  const { data } = useApi<any[]>('/api/guardian/reports');
  const [open, setOpen] = useState<string | null>(null);
  if (!data) return null;
  return (
    <Card className="mb-6 p-6">
      <h2 className="mb-1 text-xl font-black">Weekly reports</h2>
      <p className="mb-3 text-sm text-muted">A summary of each week, made every Sunday evening. It only lists what your child actually did.</p>
      {!data.length ? (
        <p className="text-sm text-muted">Your first report will appear here after Sunday.</p>
      ) : (
        <ul className="divide-y divide-line">
          {data.map((r) => {
            const rep = r.report || {};
            return (
              <li key={r.id} className="py-3">
                <button type="button" className="flex w-full flex-wrap items-center gap-2 text-left" aria-expanded={open === r.id} onClick={() => setOpen(open === r.id ? null : r.id)}>
                  <span className="min-w-0 flex-1">
                    <span className="font-semibold">{rep.childName} · week {String(r.week).split('-W')[1]}</span>
                    <span className="block text-sm text-muted">{r.summary}</span>
                  </span>
                  <Badge tone="teach">{open === r.id ? 'Hide' : 'Open'}</Badge>
                </button>
                {open === r.id && (
                  <div className="mt-3 grid gap-4 text-sm md:grid-cols-2">
                    <section>
                      <h3 className="mb-1 font-bold">Lessons completed</h3>
                      {rep.lessonsCompleted?.length ? <ul className="list-disc pl-5">{rep.lessonsCompleted.map((l: any, i: number) => <li key={i}>{l.lesson} <span className="text-muted">({l.course})</span></li>)}</ul> : <p className="text-muted">None this week.</p>}
                      <h3 className="mt-3 mb-1 font-bold">Live classes</h3>
                      <p>{rep.classes?.scheduled ? `${rep.classes.attended} of ${rep.classes.scheduled} attended` : 'No live classes scheduled this week.'}</p>
                    </section>
                    <section>
                      <h3 className="mb-1 font-bold">Teacher feedback</h3>
                      {rep.feedback?.length ? <ul className="space-y-1">{rep.feedback.map((f: any, i: number) => <li key={i} className="rounded-xl bg-sunk p-2"><span className="text-xs font-bold text-muted">{f.activity}</span><p>{f.comment}</p></li>)}</ul> : <p className="text-muted">No new feedback this week.</p>}
                      {rep.nextClass && <p className="mt-3"><span className="font-bold">Next class:</span> {rep.nextClass.title}, {new Date(rep.nextClass.starts_at).toLocaleString(undefined, { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })}</p>}
                    </section>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
}

/** How the parent wants to receive reports and messages. */
function ContactPreferences() {
  const { data, reload } = useApi<any>('/api/guardian/contact');
  const [form, setForm] = useState<any>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (data) setForm({ phone: data.phone, whatsapp: data.whatsapp, emailReports: data.emailReports });
  }, [data]);
  if (!data || !form) return null;
  const save = async () => {
    setBusy(true);
    try {
      await api('/api/guardian/contact', { method: 'PATCH', body: form });
      toast('Preferences saved');
      reload();
    } catch (e) {
      toast((e as Error).message, 'bad');
    } finally {
      setBusy(false);
    }
  };
  return (
    <Card className="mb-6 p-6">
      <h2 className="mb-3 text-xl font-black">How we contact you</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex items-start gap-3 rounded-2xl border border-line p-4">
          <input type="checkbox" className="mt-1 size-5" checked={form.emailReports} onChange={(e) => setForm({ ...form, emailReports: e.target.checked })} />
          <span>
            <span className="block font-semibold">Weekly report by email</span>
            <span className="text-sm text-muted">Sent to {data.email}.{!data.channels?.email && ' Email sending is not switched on yet, so reports appear here only for now.'}</span>
          </span>
        </label>
        <div className="rounded-2xl border border-line p-4">
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 size-5" checked={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.checked })} />
            <span>
              <span className="block font-semibold">Weekly report on WhatsApp</span>
              <span className="text-sm text-muted">Only if you tick this. Untick it here any time to stop.{!data.channels?.whatsapp && ' WhatsApp sending is not switched on yet.'}</span>
            </span>
          </label>
          <Field label="WhatsApp number" className="mt-3">
            <Input type="tel" value={form.phone} placeholder="+91 98765 43210" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </Field>
        </div>
      </div>
      <Button variant="primary" className="mt-4" busy={busy} onClick={save}>Save preferences</Button>
    </Card>
  );
}

export function GuardianHome() {
  const { data: res, loading, reload } = useApi<{ children: any[]; classes: any[] }>('/api/guardian');
  if (loading || !res) return <Spinner />;
  const data = res.children;
  const now = Date.now();
  const setConsent = async (k: any, ai: boolean, audio: boolean, recording: boolean = k.consent_recording) => {
    await api('/api/guardian/consent', { body: { studentId: k.id, ai, audio, recording } });
    toast('Permissions updated');
    reload();
  };
  return (
    <>
      <PageHeader eyebrow="Guardian" title="Your child’s learning">
        See progress and teacher feedback, and choose which features your child can use.
      </PageHeader>
      {data.length > 0 && <WeeklyReports />}
      <ContactPreferences />
      {!data.length && <Empty title="No learners linked yet">Ask the school administrator to link your account to your child.</Empty>}
      {res.classes.length > 0 && (
        <Card className="mb-6 p-6">
          <h2 className="mb-3 text-xl font-black">Live classes</h2>
          <ul className="divide-y divide-line text-sm">
            {res.classes.map((c: any, i: number) => {
              const past = c.status === 'ended' || new Date(c.starts_at).getTime() < now - 3 * 3600_000;
              return (
                <li key={i} className="flex flex-wrap items-center gap-2 py-2.5">
                  <span className="min-w-0 flex-1">
                    <span className="font-semibold">{c.title}</span>
                    <span className="block text-muted">{c.child} · {c.course_title} · {new Date(c.starts_at).toLocaleString(undefined, { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })}</span>
                  </span>
                  {c.status === 'live' ? <Badge tone="bad">Live now</Badge> : past ? (c.seconds ? <Badge tone="good">Attended · {Math.max(1, Math.round(c.seconds / 60))} min</Badge> : <Badge tone="warn">Missed</Badge>) : <Badge tone="teach">Upcoming</Badge>}
                </li>
              );
            })}
          </ul>
        </Card>
      )}
      <div className="space-y-6">
        {data.map((k) => (
          <Card key={k.id} className="p-6">
            <h2 className="text-2xl font-black">{k.name}</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <section>
                <h3 className="mb-3 font-bold">Progress</h3>
                {k.courses.map((c: any) => (
                  <div key={c.title} className="mb-3">
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="font-semibold">{c.title}</span>
                      <span className="text-muted">
                        {c.done}/{c.total}
                      </span>
                    </div>
                    <ProgressBar value={c.done} max={c.total} label={c.title} />
                  </div>
                ))}
                <h3 className="mt-5 mb-2 font-bold">Recent teacher feedback</h3>
                {k.feedback.length ? (
                  <ul className="space-y-2 text-sm">
                    {k.feedback.map((f: any, i: number) => (
                      <li key={i} className="rounded-xl bg-sunk p-3">
                        <span className="text-xs font-bold text-muted">{f.activity}</span>
                        <p>{f.comment}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted">No feedback yet.</p>
                )}
              </section>
              <section>
                <h3 className="mb-3 font-bold">Permissions</h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 rounded-2xl border border-line p-4">
                    <input type="checkbox" className="mt-1 size-5" checked={k.consent_ai} onChange={(e) => setConsent(k, e.target.checked, k.consent_audio)} />
                    <span>
                      <span className="block font-semibold">AI learning helper</span>
                      <span className="text-sm text-muted">An AI chat that gives hints about lessons. It is told not to collect personal details; questions are stored without your child’s name and deleted after the retention period. Safety concerns are flagged to teachers.</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 rounded-2xl border border-line p-4">
                    <input type="checkbox" className="mt-1 size-5" checked={k.consent_audio} onChange={(e) => setConsent(k, k.consent_ai, e.target.checked)} />
                    <span>
                      <span className="block font-semibold">Microphone & camera</span>
                      <span className="text-sm text-muted">For speaking practice (recordings stay in the browser and are never uploaded) and for live video classes with the teacher. When this is off, your child can still watch, listen and use the class chat.</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 rounded-2xl border border-line p-4">
                    <input type="checkbox" className="mt-1 size-5" checked={k.consent_recording} onChange={(e) => setConsent(k, k.consent_ai, k.consent_audio, e.target.checked)} />
                    <span>
                      <span className="block font-semibold">Class recordings for quality checks</span>
                      <span className="text-sm text-muted">Off unless you switch it on. A class can only be recorded when every child’s parent has allowed it, and everyone sees a “Recording” sign while it runs. Recordings are watched only by Kitabash staff checking teaching quality and safety, never shared or used for marketing, and are deleted automatically after 30 days. You can switch this off at any time; a recording in progress then stops.</span>
                    </span>
                  </label>
                </div>
                {k.consented_at && <p className="mt-2 text-xs text-muted">Last updated {k.consented_at}</p>}
                <Notice className="mt-4">To export or delete your child’s data, contact the school administrator.</Notice>
              </section>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
