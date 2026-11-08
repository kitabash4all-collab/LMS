// Admin: website enquiries (leads), outgoing messages, and weekly parent reports.
import { useState } from 'react';
import { api, useApi } from '../../lib/api.ts';
import { Badge, Button, Card, Empty, Notice, Select, Spinner, Textarea, toast } from '../../components/ui.tsx';

const STATUSES = [
  { id: 'new', label: 'New' },
  { id: 'contacted', label: 'Contacted' },
  { id: 'trial_booked', label: 'Trial booked' },
  { id: 'enrolled', label: 'Enrolled' },
  { id: 'lost', label: 'Not interested' },
] as const;
const KIND_LABEL: Record<string, string> = { trial: 'Free trial', teacher: 'Teacher', school: 'School' };

export function Leads() {
  const [status, setStatus] = useState('');
  const [kind, setKind] = useState('');
  const qs = new URLSearchParams(Object.entries({ status, kind }).filter(([, v]) => v)).toString();
  const { data, loading, reload } = useApi<{ leads: any[]; counts: Record<string, number> }>(`/api/admin/leads${qs ? `?${qs}` : ''}`, [qs]);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const update = async (id: string, body: any) => {
    try {
      await api(`/api/admin/leads/${id}`, { method: 'PATCH', body });
      toast('Lead updated');
      reload();
    } catch (e) {
      toast((e as Error).message, 'bad');
    }
  };
  if (loading && !data) return <Spinner />;
  const counts = data?.counts || {};
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <Badge key={s.id} tone={s.id === 'new' ? 'accent' : s.id === 'enrolled' ? 'good' : 'neutral'}>
              {s.label}: {counts[s.id] || 0}
            </Badge>
          ))}
        </div>
        <span className="flex-1" />
        <div className="w-44">
          <Select aria-label="Filter by status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All statuses</option>
            {STATUSES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </Select>
        </div>
        <div className="w-40">
          <Select aria-label="Filter by type" value={kind} onChange={(e) => setKind(e.target.value)}>
            <option value="">All types</option>
            <option value="trial">Free trial</option>
            <option value="teacher">Teacher</option>
            <option value="school">School</option>
          </Select>
        </div>
      </div>
      {!data?.leads.length ? (
        <Empty title="No enquiries yet" icon="users">Enquiries from the website’s free-trial, teacher and school forms appear here.</Empty>
      ) : (
        data.leads.map((l) => (
          <Card key={l.id} className="p-5">
            <div className="flex flex-wrap items-start gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-black">{l.name}</span>
                  <Badge tone="teach">{KIND_LABEL[l.kind] || l.kind}</Badge>
                  {l.consent_whatsapp ? <Badge tone="good">WhatsApp OK</Badge> : <Badge>No WhatsApp consent</Badge>}
                </div>
                <p className="mt-1 text-sm text-muted">
                  {[l.phone && `+${l.phone}`, l.email, l.country, l.child_age && `age ${l.child_age}`, l.preferred_time].filter(Boolean).join(' · ')}
                </p>
                {l.interest && <p className="mt-1 text-sm"><span className="font-semibold">Interested in:</span> {l.interest}</p>}
                <p className="mt-1 text-xs text-muted">Received {l.created_at} · from {l.source || 'direct'}</p>
              </div>
              <div className="w-44">
                <Select aria-label={`Status for ${l.name}`} value={l.status} onChange={(e) => update(l.id, { status: e.target.value })}>
                  {STATUSES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
                </Select>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-end gap-2">
              <Textarea aria-label={`Notes about ${l.name}`} className="min-h-[44px] flex-1" placeholder="Notes: call outcome, trial date…" value={notes[l.id] ?? l.notes} onChange={(e) => setNotes({ ...notes, [l.id]: e.target.value })} />
              <Button size="sm" onClick={() => update(l.id, { notes: notes[l.id] ?? l.notes })}>Save note</Button>
              {l.phone && (
                <a className="text-sm font-semibold text-accent-ink underline" href={`https://wa.me/${l.phone}`} target="_blank" rel="noopener noreferrer">
                  Open in WhatsApp
                </a>
              )}
            </div>
          </Card>
        ))
      )}
    </div>
  );
}

const KIND_NAME: Record<string, string> = { weekly_report: 'Weekly report', lead_trial: 'Trial enquiry', lead_teacher: 'Teacher applicant', lead_school: 'School enquiry' };

/** Messages written by the portal, sent by a person from a normal WhatsApp account with one tap. */
function WhatsAppQueue({ onChange }: { onChange: () => void }) {
  const [view, setView] = useState<'pending' | 'sent'>('pending');
  const { data, reload } = useApi<any[]>(`/api/admin/whatsapp-queue?status=${view}`, [view]);
  const [openId, setOpenId] = useState<string | null>(null);
  const mark = async (id: string, status: 'sent' | 'dismissed' | 'pending') => {
    try {
      await api(`/api/admin/whatsapp-queue/${id}`, { method: 'PATCH', body: { status } });
      reload();
      onChange();
    } catch (e) {
      toast((e as Error).message, 'bad');
    }
  };
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast('Message copied');
    } catch {
      toast('Copy failed: select the text and copy it', 'bad');
    }
  };
  return (
    <Card className="p-5">
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-black">WhatsApp to send</h3>
        <span className="flex-1" />
        <div className="flex gap-1">
          <Button size="sm" variant={view === 'pending' ? 'primary' : 'secondary'} onClick={() => setView('pending')}>To send</Button>
          <Button size="sm" variant={view === 'sent' ? 'primary' : 'secondary'} onClick={() => setView('sent')}>Sent</Button>
        </div>
      </div>
      <p className="mb-3 text-sm text-muted">
        Each message is written for you. Tap <b>Open in WhatsApp</b>: WhatsApp opens with the message filled in, on your phone or WhatsApp Web, and you press Send. Then tick it off. Only people who opted in appear here.
      </p>
      {!data ? (
        <Spinner />
      ) : !data.length ? (
        <p className="text-sm text-muted">{view === 'pending' ? 'Nothing to send right now.' : 'No messages sent yet.'}</p>
      ) : (
        <ul className="divide-y divide-line">
          {data.map((m) => (
            <li key={m.id} className="py-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">{m.name || `+${m.phone}`}</span>
                <Badge tone="teach">{KIND_NAME[m.kind] || m.kind}</Badge>
                <span className="text-xs text-muted">+{m.phone} · {view === 'pending' ? m.created_at : `sent ${m.done_at}`}</span>
              </div>
              <button type="button" className="mt-1 block w-full text-left text-sm text-muted" aria-expanded={openId === m.id} onClick={() => setOpenId(openId === m.id ? null : m.id)}>
                <span className={openId === m.id ? 'whitespace-pre-wrap text-ink' : 'line-clamp-2'}>{m.body}</span>
              </button>
              {view === 'pending' ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  <a className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-sm font-bold text-white" href={m.link} target="_blank" rel="noopener noreferrer">Open in WhatsApp</a>
                  <Button size="sm" onClick={() => mark(m.id, 'sent')}>Mark as sent</Button>
                  <Button size="sm" onClick={() => copy(m.body)}>Copy text</Button>
                  <Button size="sm" onClick={() => mark(m.id, 'dismissed')}>Don’t send</Button>
                </div>
              ) : (
                <Button size="sm" className="mt-2" onClick={() => mark(m.id, 'pending')}>Move back to “To send”</Button>
              )}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export function Messages() {
  const { data, reload } = useApi<{ channels: { email: string | null; whatsapp: string | null }; pending: number; recent: any[] }>('/api/admin/messages');
  const [busy, setBusy] = useState(false);
  const [confirmSend, setConfirmSend] = useState(false);
  const run = async (send: boolean) => {
    setBusy(true);
    try {
      const r = await api('/api/admin/reports/weekly', { body: { send } });
      toast(`Week ${r.week}: ${r.created} new reports${send ? `, ${r.sent} sent, ${r.queued} ready to send on WhatsApp, ${r.skipped} skipped, ${r.failed} failed` : ''}`);
      setConfirmSend(false);
      reload();
    } catch (e) {
      toast((e as Error).message, 'bad');
    } finally {
      setBusy(false);
    }
  };
  if (!data) return <Spinner />;
  const ch = data.channels;
  return (
    <div className="space-y-4">
      <Card className="p-5">
        <h3 className="mb-2 text-lg font-black">Channels</h3>
        <div className="flex flex-wrap gap-2">
          <Badge tone={ch.email ? 'good' : 'warn'}>Email: {ch.email || 'not set up'}</Badge>
          <Badge tone={ch.whatsapp ? 'good' : 'warn'}>WhatsApp: {ch.whatsapp === 'manual' ? 'one-tap from your phone' : ch.whatsapp || 'off'}</Badge>
          {data.pending > 0 && <Badge tone="accent">{data.pending} WhatsApp to send</Badge>}
        </div>
        {!ch.email && (
          <Notice className="mt-3">
            Email is not set up yet, so emails are recorded below as “skipped” and weekly reports stay in each parent’s account. Set EMAIL_PROVIDER in the hosting settings to send them.
          </Notice>
        )}
      </Card>
      {ch.whatsapp && <WhatsAppQueue onChange={reload} />}
      <Card className="p-5">
        <h3 className="mb-1 text-lg font-black">Weekly parent reports</h3>
        <p className="mb-3 text-sm text-muted">Made automatically every Sunday evening (India time) for every linked parent, then sent by the channels each parent chose. Running it again in the same week only adds reports that are missing.</p>
        <div className="flex flex-wrap gap-2">
          <Button busy={busy} onClick={() => run(false)}>Make this week’s reports (don’t send)</Button>
          {!confirmSend ? (
            <Button variant="primary" onClick={() => setConfirmSend(true)}>Make and send now…</Button>
          ) : (
            <>
              <Button variant="primary" busy={busy} onClick={() => run(true)}>Yes, send to parents</Button>
              <Button onClick={() => setConfirmSend(false)}>Cancel</Button>
            </>
          )}
        </div>
      </Card>
      <Card className="overflow-x-auto p-5">
        <h3 className="mb-2 text-lg font-black">Recent messages</h3>
        {!data.recent.length ? (
          <p className="text-sm text-muted">Nothing sent yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted">
                <th className="pb-2">When</th>
                <th>To</th>
                <th>Type</th>
                <th>Channel</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {data.recent.map((n) => (
                <tr key={n.id} className="border-t border-line align-top">
                  <td className="py-1.5 whitespace-nowrap text-muted">{n.created_at}</td>
                  <td>{n.user_name || n.lead_name || '—'}<span className="block text-xs text-muted">{n.recipient}</span></td>
                  <td>{n.kind}</td>
                  <td>{n.channel}</td>
                  <td>
                    <Badge tone={n.status === 'sent' ? 'good' : n.status === 'failed' ? 'bad' : 'warn'}>{n.status}</Badge>
                    <span className="block max-w-xs text-xs text-muted">{n.detail}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
}
