// Teacher portal ("My work") and the admin's view of every teacher.
// Calendar, classes taken, punctuality, earnings (worked out by the pay rules) and leave.
import { useState, type FormEvent } from 'react';
import { api, useApi } from '../lib/api.ts';
import { Link } from '../lib/router.tsx';
import { Badge, Button, Card, Empty, Field, Icon, Input, Modal, Notice, PageHeader, Select, Spinner, Textarea, toast } from '../components/ui.tsx';

const TZ = 'Asia/Kolkata';
const time = (iso: string) => new Date(iso).toLocaleTimeString('en-IN', { timeZone: TZ, hour: 'numeric', minute: '2-digit' });
const dateTime = (iso: string) => new Date(iso).toLocaleString('en-IN', { timeZone: TZ, weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
const rupees = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');
const monthLabel = (m: string) => new Date(m + '-01T00:00:00Z').toLocaleDateString('en-IN', { month: 'long', year: 'numeric', timeZone: 'UTC' });
const shiftMonth = (m: string, by: number) => {
  const [y, mo] = m.split('-').map(Number);
  const d = new Date(Date.UTC(y, mo - 1 + by, 1));
  return d.toISOString().slice(0, 7);
};
export const thisMonth = () => new Date(Date.now() + 330 * 60_000).toISOString().slice(0, 7);
const todayIST = () => new Date(Date.now() + 330 * 60_000).toISOString().slice(0, 10);

type Tone = 'neutral' | 'good' | 'bad' | 'warn' | 'accent' | 'teach';
export const STATUS: Record<string, { label: string; tone: Tone; dot: string }> = {
  on_time: { label: 'On time', tone: 'good', dot: 'bg-emerald-500' },
  late: { label: 'Late', tone: 'warn', dot: 'bg-amber-500' },
  very_late: { label: 'Very late', tone: 'bad', dot: 'bg-rose-500' },
  missed: { label: 'Missed', tone: 'bad', dot: 'bg-rose-600' },
  cancelled: { label: 'Cancelled', tone: 'neutral', dot: 'bg-slate-400' },
  on_leave: { label: 'On leave', tone: 'teach', dot: 'bg-violet-500' },
  upcoming: { label: 'Upcoming', tone: 'accent', dot: 'bg-sky-500' },
  live: { label: 'Live now', tone: 'accent', dot: 'bg-sky-600' },
};
const LEAVE_TONE: Record<string, Tone> = { pending: 'warn', approved: 'good', declined: 'bad', cancelled: 'neutral' };
const KIND: Record<string, string> = { planned: 'Planned', sick: 'Sick', emergency: 'Emergency' };
const LEVEL: Record<string, string> = { certified: 'Certified', senior: 'Senior', specialist: 'Specialist' };

function statusText(s: any) {
  const base = STATUS[s.status]?.label || s.status;
  if ((s.status === 'late' || s.status === 'very_late') && s.lateMin != null) return `${base} · ${s.lateMin} min`;
  return base;
}

export function MonthPicker({ month, onChange }: { month: string; onChange: (m: string) => void }) {
  return (
    <div className="flex items-center gap-1">
      <Button size="sm" variant="ghost" icon="arrowL" aria-label="Previous month" onClick={() => onChange(shiftMonth(month, -1))} />
      <span className="min-w-36 text-center font-bold">{monthLabel(month)}</span>
      <Button size="sm" variant="ghost" icon="arrowR" aria-label="Next month" onClick={() => onChange(shiftMonth(month, 1))} />
      {month !== thisMonth() && <Button size="sm" variant="ghost" onClick={() => onChange(thisMonth())}>This month</Button>}
    </div>
  );
}

function Tile({ label, value, hint, tone }: { label: string; value: string | number; hint?: string; tone?: 'good' | 'bad' | 'warn' }) {
  const color = tone === 'good' ? 'text-emerald-600' : tone === 'bad' ? 'text-rose-600' : tone === 'warn' ? 'text-amber-600' : '';
  return (
    <Card className="p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</div>
      <div className={`mt-1 text-2xl font-black ${color}`}>{value}</div>
      {hint && <div className="mt-0.5 text-xs text-muted">{hint}</div>}
    </Card>
  );
}

export function SummaryTiles({ s }: { s: any }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
      <Tile label="Classes taken" value={s.held} hint={`of ${s.scheduled} scheduled${s.upcoming ? ` · ${s.upcoming} still to come` : ''}`} />
      <Tile label="On time" value={s.onTimePct == null ? '—' : `${s.onTimePct}%`} hint={s.avgLateMin != null ? `average start ${s.avgLateMin} min after time` : 'no classes yet'} tone={s.onTimePct == null ? undefined : s.onTimePct >= 90 ? 'good' : s.onTimePct >= 75 ? 'warn' : 'bad'} />
      <Tile label="Late starts" value={s.late + s.veryLate} hint={`${s.veryLate} more than 10 min (unpaid)`} tone={s.veryLate ? 'bad' : s.late ? 'warn' : undefined} />
      <Tile label="Missed" value={s.missed} hint={`${s.onLeave} on approved leave · ${s.cancelled} cancelled`} tone={s.missed ? 'bad' : undefined} />
      <Tile label="Earnings" value={rupees(s.earnings)} hint={`${s.studentsTaught} student attendances`} tone="good" />
    </div>
  );
}

export function Calendar({ month, sessions, leave }: { month: string; sessions: any[]; leave: any[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const [y, m] = month.split('-').map(Number);
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const lead = (new Date(Date.UTC(y, m - 1, 1)).getUTCDay() + 6) % 7; // Monday first
  const byDay: Record<string, any[]> = {};
  for (const s of sessions) (byDay[s.day] ||= []).push(s);
  const leaveOn = (d: string) => leave.find((l) => (l.status === 'approved' || l.status === 'pending') && l.start_date <= d && l.end_date >= d);
  const today = todayIST();
  const cells = [...Array(lead).fill(null), ...Array.from({ length: days }, (_, i) => `${month}-${String(i + 1).padStart(2, '0')}`)];
  const picked = open ? byDay[open] || [] : [];
  return (
    <Card className="p-4">
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => <div key={d}>{d}</div>)}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const list = byDay[d] || [];
          const lv = leaveOn(d);
          return (
            <button
              key={d}
              type="button"
              onClick={() => setOpen(d)}
              className={`min-h-16 rounded-lg border p-1 text-left text-xs transition hover:border-accent ${d === today ? 'border-[var(--accent)] ring-1 ring-[var(--accent)]' : 'border-line'} ${lv ? (lv.status === 'approved' ? 'bg-violet-500/10' : 'bg-amber-500/10') : ''}`}
              aria-label={`${d}: ${list.length} classes${lv ? `, leave ${lv.status}` : ''}`}
            >
              <div className="font-bold">{Number(d.slice(8))}</div>
              <div className="mt-0.5 flex flex-wrap gap-0.5">
                {list.slice(0, 6).map((s) => <span key={s.id} title={`${time(s.startsAt)} ${s.title}: ${statusText(s)}`} className={`size-2 rounded-full ${STATUS[s.status]?.dot || 'bg-slate-400'}`} />)}
              </div>
              {list.length > 0 && <div className="mt-0.5 hidden text-[10px] text-muted sm:block">{list.length} class{list.length > 1 ? 'es' : ''}</div>}
              {lv && <div className="text-[10px] font-semibold text-violet-600">{lv.status === 'approved' ? 'Leave' : 'Leave?'}</div>}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
        {Object.entries(STATUS).map(([k, v]) => (
          <span key={k} className="inline-flex items-center gap-1"><span className={`size-2 rounded-full ${v.dot}`} />{v.label}</span>
        ))}
        <span>Times are India time (IST).</span>
      </div>
      <Modal open={!!open} onClose={() => setOpen(null)} title={open ? new Date(open + 'T00:00:00Z').toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }) : ''}>
        {!picked.length ? <p className="text-muted">No classes on this day.</p> : (
          <ul className="space-y-2">
            {picked.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center gap-2 rounded-lg border border-line p-3">
                <span className="font-bold">{time(s.startsAt)}</span>
                <span className="min-w-0 flex-1">{s.title} <span className="text-muted">· {s.batch}</span></span>
                <Badge tone={STATUS[s.status]?.tone}>{statusText(s)}</Badge>
                {(s.status === 'upcoming' || s.status === 'live') && <Link to={`/live/${s.id}`} className="text-sm font-semibold text-accent">Open</Link>}
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </Card>
  );
}

export function SessionsTable({ sessions }: { sessions: any[] }) {
  const done = sessions.filter((s) => !['upcoming', 'live'].includes(s.status));
  if (!done.length) return <Empty title="No classes yet this month" icon="clock">Classes appear here once their time has passed.</Empty>;
  return (
    <Card className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-xs uppercase text-muted">
          <tr>
            <th className="p-3">Class</th>
            <th className="p-3">Scheduled</th>
            <th className="p-3">Punctuality</th>
            <th className="p-3">Students</th>
            <th className="p-3 text-right">Pay</th>
          </tr>
        </thead>
        <tbody>
          {done.map((s) => (
            <tr key={s.id} className="border-t border-line">
              <td className="p-3"><div className="font-semibold">{s.title}</div><div className="text-xs text-muted">{s.batch} · {s.durationMin} min</div></td>
              <td className="whitespace-nowrap p-3">{dateTime(s.startsAt)}</td>
              <td className="p-3">
                <Badge tone={STATUS[s.status]?.tone}>{statusText(s)}</Badge>
                {s.endedEarly && <Badge tone="warn" className="ml-1">Ended early</Badge>}
              </td>
              <td className="p-3">{['on_time', 'late', 'very_late'].includes(s.status) ? `${s.present} of ${s.enrolled}` : '—'}</td>
              <td className="p-3 text-right"><div className="font-bold">{rupees(s.pay)}</div>{s.payNote && <div className="text-xs text-muted">{s.payNote}</div>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export function LeaveTable({ leave, onCancel, onDecide }: { leave: any[]; onCancel?: (id: string) => void; onDecide?: (id: string, status: 'approved' | 'declined') => void }) {
  if (!leave.length) return <p className="text-sm text-muted">No leave requests yet.</p>;
  const today = todayIST();
  return (
    <Card className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-xs uppercase text-muted">
          <tr>
            {onDecide && <th className="p-3">Teacher</th>}
            <th className="p-3">Dates</th>
            <th className="p-3">Type</th>
            <th className="p-3">Reason</th>
            <th className="p-3">Classes affected</th>
            <th className="p-3">Status</th>
            <th className="p-3" />
          </tr>
        </thead>
        <tbody>
          {leave.map((l) => (
            <tr key={l.id} className="border-t border-line">
              {onDecide && <td className="p-3 font-semibold">{l.teacher}</td>}
              <td className="whitespace-nowrap p-3">{l.start_date === l.end_date ? l.start_date : `${l.start_date} → ${l.end_date}`}<div className="text-xs text-muted">{l.days} day{l.days > 1 ? 's' : ''}</div></td>
              <td className="p-3">{KIND[l.kind] || l.kind}</td>
              <td className="max-w-xs p-3 text-muted">{l.reason || '—'}</td>
              <td className="p-3">{l.classes_affected}</td>
              <td className="p-3"><Badge tone={LEAVE_TONE[l.status]}>{l.status}</Badge>{l.decided_by_name && <div className="text-xs text-muted">by {l.decided_by_name}</div>}</td>
              <td className="whitespace-nowrap p-3 text-right">
                {onCancel && (l.status === 'pending' || (l.status === 'approved' && l.start_date > today)) && <Button size="sm" variant="ghost" onClick={() => onCancel(l.id)}>Cancel</Button>}
                {onDecide && l.status !== 'cancelled' && (
                  <span className="inline-flex gap-1">
                    {l.status !== 'approved' && <Button size="sm" variant="primary" onClick={() => onDecide(l.id, 'approved')}>Approve</Button>}
                    {l.status !== 'declined' && <Button size="sm" variant="ghost" onClick={() => onDecide(l.id, 'declined')}>Decline</Button>}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

function LeaveForm({ onDone }: { onDone: () => void }) {
  const [f, setF] = useState({ start_date: '', end_date: '', kind: 'planned', reason: '' });
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api('/api/teach/leave', { method: 'POST', body: { ...f, end_date: f.end_date || f.start_date } });
      toast('Leave request sent');
      setF({ start_date: '', end_date: '', kind: 'planned', reason: '' });
      onDone();
    } catch (err) {
      toast((err as Error).message, 'bad');
    } finally {
      setBusy(false);
    }
  };
  return (
    <Card as="form" onSubmit={submit} className="space-y-3 p-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="First day"><Input type="date" required value={f.start_date} onChange={(e) => setF({ ...f, start_date: e.target.value })} /></Field>
        <Field label="Last day" hint="Leave empty for one day"><Input type="date" min={f.start_date} value={f.end_date} onChange={(e) => setF({ ...f, end_date: e.target.value })} /></Field>
        <Field label="Type">
          <Select value={f.kind} onChange={(e) => setF({ ...f, kind: e.target.value })}>
            <option value="planned">Planned</option>
            <option value="sick">Sick</option>
            <option value="emergency">Emergency</option>
          </Select>
        </Field>
      </div>
      <Field label="Reason (optional)"><Textarea maxLength={500} value={f.reason} onChange={(e) => setF({ ...f, reason: e.target.value })} /></Field>
      <p className="text-xs text-muted">Policy: ask for planned leave at least 7 days ahead. For sick or emergency leave, tell us as early as you can. Classes on approved leave days are not counted as missed.</p>
      <Button variant="primary" busy={busy} type="submit">Request leave</Button>
    </Card>
  );
}

function Upcoming({ sessions }: { sessions: any[] }) {
  const next = sessions.filter((s) => s.status === 'upcoming' || s.status === 'live').slice(0, 6);
  if (!next.length) return <p className="text-sm text-muted">No more classes scheduled this month.</p>;
  return (
    <ul className="space-y-2">
      {next.map((s) => (
        <li key={s.id}>
          <Card className="flex flex-wrap items-center gap-x-3 gap-y-1 p-3">
            <Icon name="clock" />
            <span className="font-bold">{dateTime(s.startsAt)}</span>
            {s.status === 'live' && <Badge tone="accent">Live now</Badge>}
            <Link to={`/live/${s.id}`} className="ml-auto font-semibold text-accent">Open class</Link>
            <span className="basis-full text-sm sm:pl-8">{s.title} <span className="text-muted">· {s.batch} · {s.enrolled} students</span></span>
          </Card>
        </li>
      ))}
    </ul>
  );
}

const bytes = (n: number) => (n > 1e9 ? `${(n / 1e9).toFixed(1)} GB` : `${Math.max(0.1, n / 1e6).toFixed(1)} MB`);

/** Instructor's own portal. */
export function MyWork() {
  const [month, setMonth] = useState(thisMonth());
  const { data, loading, reload } = useApi<any>(`/api/teach/me?month=${month}`, [month]);
  const cancel = async (id: string) => {
    try {
      await api(`/api/teach/leave/${id}`, { method: 'DELETE' });
      toast('Leave request cancelled');
      reload();
    } catch (e) {
      toast((e as Error).message, 'bad');
    }
  };
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Teacher portal" title="My work" actions={<MonthPicker month={month} onChange={setMonth} />}>
        Your timetable, the classes you have taken, punctuality, earnings and leave. Worked out automatically from the live classes.
      </PageHeader>
      {loading && !data ? <Spinner /> : data && (
        <>
          <SummaryTiles s={data.summary} />
          <p className="text-sm text-muted">
            Level: <strong>{LEVEL[data.profile.level]}</strong> · class rate {rupees(data.profile.rate)}. Earnings include the full-batch bonus (+₹20 for each student present above 5, up to +₹100) and +₹50 for classes starting between 10 pm and 7 am IST. A class started more than 10 minutes late is unpaid; ending more than 10 minutes early pays half. Trial, renewal and certification bonuses are added by the admin at payout. Statements are sent on the 1st and paid by the 7th.
          </p>
          <section className="space-y-2">
            <h2 className="text-lg font-black">Coming up</h2>
            <Upcoming sessions={data.sessions} />
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-black">Calendar</h2>
            <Calendar month={month} sessions={data.sessions} leave={data.leave} />
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-black">Classes, punctuality and pay</h2>
            <SessionsTable sessions={data.sessions} />
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-black">Leave</h2>
            <LeaveForm onDone={reload} />
            <LeaveTable leave={data.leave} onCancel={cancel} />
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-black">Recordings of my classes</h2>
            <p className="text-sm text-muted">Classes you record are kept for {data.retentionDays} days for quality checks, then deleted automatically. Only Kitabash admins can watch them.</p>
            {!data.recordings.length ? <p className="text-sm text-muted">No recordings.</p> : (
              <ul className="space-y-1 text-sm">
                {data.recordings.map((r: any) => <li key={r.id}>{dateTime(new Date(r.starts_at).toISOString())} · {r.title} · {bytes(Number(r.bytes))} · deleted on {String(r.expires_at).slice(0, 10)}</li>)}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
}

/** Admin: every teacher this month, levels, leave approvals, payout file and recordings. */
export function TeachersAdmin() {
  const [month, setMonth] = useState(thisMonth());
  const { data, loading, reload } = useApi<any>(`/api/admin/teachers?month=${month}`, [month]);
  const [openId, setOpenId] = useState<string | null>(null);
  const decide = async (id: string, status: 'approved' | 'declined') => {
    try {
      await api(`/api/admin/leave/${id}`, { method: 'PATCH', body: { status } });
      toast(`Leave ${status}`);
      reload();
    } catch (e) {
      toast((e as Error).message, 'bad');
    }
  };
  const setProfile = async (id: string, body: any) => {
    try {
      await api(`/api/admin/teachers/${id}`, { method: 'PATCH', body });
      toast('Saved');
      reload();
    } catch (e) {
      toast((e as Error).message, 'bad');
    }
  };
  if (loading && !data) return <Spinner />;
  const teachers = data?.teachers || [];
  const total = teachers.reduce((a: number, t: any) => a + t.summary.earnings, 0);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <MonthPicker month={month} onChange={setMonth} />
        <span className="flex-1" />
        <span className="text-sm">Class pay this month: <strong>{rupees(total)}</strong></span>
        <a className="inline-flex items-center gap-1 rounded-lg border border-line px-3 py-2 text-sm font-semibold" href={`/api/admin/teachers/payout.csv?month=${month}`} download>
          <Icon name="download" size={16} /> Payout sheet (CSV)
        </a>
      </div>
      {data?.pendingLeave?.length > 0 && (
        <section className="space-y-2">
          <h3 className="font-black">Leave waiting for a decision</h3>
          <LeaveTable leave={data.pendingLeave} onDecide={decide} />
        </section>
      )}
      {!teachers.length ? <Empty title="No teachers yet" icon="users">Add people with the Instructor role, then give them a class group.</Empty> : (
        <Card className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase text-muted">
              <tr>
                <th className="p-3">Teacher</th>
                <th className="p-3">Level and rate</th>
                <th className="p-3">Classes</th>
                <th className="p-3">On time</th>
                <th className="p-3">Late / very late</th>
                <th className="p-3">Missed</th>
                <th className="p-3 text-right">Earnings</th>
                <th className="p-3" />
              </tr>
            </thead>
            <tbody>
              {teachers.map((t: any) => (
                <tr key={t.id} className="border-t border-line">
                  <td className="p-3"><div className="font-semibold">{t.name}</div><div className="text-xs text-muted">{t.email}</div></td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-44">
                        <Select aria-label={`Level for ${t.name}`} value={t.profile.level} onChange={(e) => setProfile(t.id, { level: e.target.value })}>
                          <option value="certified">Certified ₹400</option>
                          <option value="senior">Senior ₹500</option>
                          <option value="specialist">Specialist ₹600</option>
                        </Select>
                      </div>
                      <RateInput t={t} onSave={(rate) => setProfile(t.id, { rate })} />
                    </div>
                  </td>
                  <td className="p-3">{t.summary.held}<span className="text-muted"> / {t.summary.scheduled}</span></td>
                  <td className="p-3">{t.summary.onTimePct == null ? '—' : `${t.summary.onTimePct}%`}</td>
                  <td className="p-3">{t.summary.late} / {t.summary.veryLate}</td>
                  <td className="p-3">{t.summary.missed ? <Badge tone="bad">{t.summary.missed}</Badge> : 0}</td>
                  <td className="p-3 text-right font-bold">{rupees(t.summary.earnings)}</td>
                  <td className="p-3 text-right"><Button size="sm" onClick={() => setOpenId(t.id)}>Details</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
      <Notice icon="coin">
        Earnings are class pay worked out from the live classes using the pay rules. Add trial, renewal, certification and training-call bonuses by hand in the payout sheet. Classes run on an outside link (Zoom or Meet) are only counted once the teacher starts them in Kitabash.
      </Notice>
      <Recordings />
      <Modal open={!!openId} onClose={() => setOpenId(null)} title="Teacher details" wide>
        {openId && <TeacherDetail id={openId} month={month} onDecide={async (id, s) => (await decide(id, s), undefined)} />}
      </Modal>
    </div>
  );
}

function RateInput({ t, onSave }: { t: any; onSave: (rate: number | null) => void }) {
  const [v, setV] = useState(t.profile.customRate ? String(t.profile.rate) : '');
  return (
    <div className="w-28">
      <Input
        aria-label={`Custom class rate for ${t.name}`}
        placeholder="Custom ₹"
        inputMode="numeric"
        value={v}
        onChange={(e) => setV(e.target.value.replace(/\D/g, ''))}
        onBlur={() => {
          const next = v ? Number(v) : null;
          if (next !== (t.profile.customRate ? t.profile.rate : null)) onSave(next);
        }}
      />
    </div>
  );
}

function TeacherDetail({ id, month, onDecide }: { id: string; month: string; onDecide: (id: string, s: 'approved' | 'declined') => Promise<void> }) {
  const { data, loading, reload } = useApi<any>(`/api/admin/teachers/${id}?month=${month}`, [id, month]);
  if (loading && !data) return <Spinner />;
  if (!data) return null;
  return (
    <div className="space-y-4">
      <div>
        <div className="text-lg font-black">{data.teacher.name}</div>
        <div className="text-sm text-muted">{data.teacher.email} · {LEVEL[data.profile.level]} · {rupees(data.profile.rate)} a class · {monthLabel(month)}</div>
      </div>
      <SummaryTiles s={data.summary} />
      <Calendar month={month} sessions={data.sessions} leave={data.leave} />
      <SessionsTable sessions={data.sessions} />
      <h3 className="font-black">Leave records</h3>
      <LeaveTable leave={data.leave} onDecide={async (lid, s) => (await onDecide(lid, s), reload())} />
    </div>
  );
}

function Recordings() {
  const { data, reload } = useApi<any>('/api/admin/recordings');
  const [watch, setWatch] = useState<any | null>(null);
  const del = async (r: any) => {
    if (!window.confirm(`Delete the recording of "${r.title}" now? This cannot be undone.`)) return;
    try {
      await api(`/api/admin/recordings/${r.id}`, { method: 'DELETE' });
      toast('Recording deleted');
      reload();
    } catch (e) {
      toast((e as Error).message, 'bad');
    }
  };
  return (
    <section className="space-y-2">
      <h3 className="font-black">Class recordings (audit)</h3>
      <p className="text-sm text-muted">
        Recorded only with every child’s parent permission. Kept for {data?.retentionDays ?? 30} days, then deleted automatically. Each time a recording is opened it is written to the audit log.
      </p>
      {!data?.recordings?.length ? <p className="text-sm text-muted">No recordings.</p> : (
        <Card className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase text-muted">
              <tr><th className="p-3">Class</th><th className="p-3">Teacher</th><th className="p-3">Size</th><th className="p-3">Deleted on</th><th className="p-3" /></tr>
            </thead>
            <tbody>
              {data.recordings.map((r: any) => (
                <tr key={r.id} className="border-t border-line">
                  <td className="p-3"><div className="font-semibold">{r.title}</div><div className="text-xs text-muted">{r.batch} · {dateTime(new Date(r.starts_at).toISOString())}</div></td>
                  <td className="p-3">{r.teacher || '—'}</td>
                  <td className="p-3">{bytes(Number(r.bytes))}{r.status === 'recording' && <Badge tone="bad" className="ml-1">Recording</Badge>}</td>
                  <td className="p-3">{String(r.expires_at).slice(0, 10)}</td>
                  <td className="whitespace-nowrap p-3 text-right">
                    <Button size="sm" icon="play" onClick={() => setWatch(r)}>Watch</Button>
                    <Button size="sm" variant="ghost" icon="trash" aria-label="Delete recording" onClick={() => del(r)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
      <Modal open={!!watch} onClose={() => setWatch(null)} title={watch ? `Recording: ${watch.title}` : ''} wide>
        {watch && (
          <div className="space-y-2">
            <video className="w-full rounded-lg bg-black" src={`/api/admin/recordings/${watch.id}/video`} controls autoPlay playsInline />
            <p className="text-xs text-muted">For quality and safety checks only. Do not download, copy or share.</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
