// Admin: every student on one screen. Create logins in bulk, assign courses from the course
// library (self-paced, or live in a class group with a teacher), reset passwords, and track
// progress, attendance and the next live class.
import { useMemo, useState } from 'react';
import { api, useApi } from '../../lib/api.ts';
import { Link } from '../../lib/router.tsx';
import { Badge, Button, Card, Empty, Field, Input, Modal, Notice, PageHeader, ProgressBar, Select, Spinner, Textarea, toast } from '../../components/ui.tsx';

type Mode = 'self_paced' | 'live';
const MODE_LABEL: Record<Mode, string> = { self_paced: 'Self-paced', live: 'Live classes' };
const when = (iso: string | null) => (iso ? new Date(iso).toLocaleString(undefined, { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) : '—');
const ago = (iso: string | null) => {
  if (!iso) return 'Never';
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400_000);
  return d <= 0 ? 'Today' : d === 1 ? 'Yesterday' : `${d} days ago`;
};
const loginMessage = (c: { name: string; login: string; password: string }) =>
  `Hi ${c.name.split(' ')[0]}! Here is your Kitabash login.\nWebsite: ${location.origin}/login\nUsername: ${c.login}\nPassword: ${c.password}\nPlease keep your password private.`;
const copy = async (text: string, what = 'Copied') => {
  try {
    await navigator.clipboard.writeText(text);
    toast(what);
  } catch {
    toast('Could not copy: select the text and copy it instead', 'bad');
  }
};

/** Course + mode + (for live) class group picker, shared by "Add students" and "Assign course". */
function CoursePicker({ courses, value, onChange }: { courses: any[]; value: { courseId: string; mode: Mode; batchId: string }; onChange: (v: { courseId: string; mode: Mode; batchId: string }) => void }) {
  const course = courses.find((c) => c.id === value.courseId);
  const subjects = [...new Set(courses.map((c) => c.subject || 'Other'))];
  return (
    <div className="grid gap-3">
      <Field label="Course (from the course library)">
        <Select value={value.courseId} onChange={(e) => onChange({ ...value, courseId: e.target.value, batchId: '' })}>
          <option value="">No course yet</option>
          {subjects.map((s) => (
            <optgroup key={s} label={s}>
              {courses.filter((c) => (c.subject || 'Other') === s).map((c) => (
                <option key={c.id} value={c.id}>{c.title} · {c.lessons} lessons</option>
              ))}
            </optgroup>
          ))}
        </Select>
      </Field>
      {course && (
        <fieldset className="grid gap-2">
          <legend className="mb-1 text-sm font-semibold">How will they learn it?</legend>
          {(['self_paced', 'live'] as Mode[]).map((m) => (
            <label key={m} className={`flex cursor-pointer gap-3 rounded-2xl border px-4 py-3 ${value.mode === m ? 'border-accent bg-accent-soft' : 'border-line'}`}>
              <input type="radio" name="mode" checked={value.mode === m} onChange={() => onChange({ ...value, mode: m })} className="mt-1" />
              <span>
                <span className="font-semibold">{MODE_LABEL[m]}</span>
                <span className="block text-sm text-muted">{m === 'self_paced' ? 'Videos, activities and projects at their own speed. No teacher or class times.' : 'Joins a class group: a teacher, a schedule and live classes, plus the same lessons between classes.'}</span>
              </span>
            </label>
          ))}
        </fieldset>
      )}
      {course && value.mode === 'live' && (
        course.batches.length ? (
          <Field label="Class group (sets the teacher and class times)">
            <Select value={value.batchId} onChange={(e) => onChange({ ...value, batchId: e.target.value })}>
              <option value="">Choose a class group…</option>
              {course.batches.map((b: any) => (
                <option key={b.id} value={b.id} disabled={b.members >= b.capacity}>
                  {b.name} · {b.teacher || 'no teacher yet'}{b.schedule_note ? ` · ${b.schedule_note}` : ''} · {b.members}/{b.capacity}{b.members >= b.capacity ? ' (full)' : ''}
                </option>
              ))}
            </Select>
          </Field>
        ) : (
          <Notice tone="warn" icon="users">
            This course has no class group yet. <Link to="/classes" className="font-semibold underline">Create one on the Classes page</Link> (choose the teacher and schedule there), then come back.
          </Notice>
        )
      )}
    </div>
  );
}

function Credentials({ rows, onClose }: { rows: { name: string; login: string; password: string; course?: string }[]; onClose: () => void }) {
  const csv = ['Name,Username,Password,Course', ...rows.map((r) => [r.name, r.login, r.password, r.course || ''].map((x) => `"${x.replace(/"/g, '""')}"`).join(','))].join('\n');
  const download = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `kitabash-logins-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };
  return (
    <Modal open onClose={onClose} title={rows.length === 1 ? 'Login details' : `${rows.length} logins created`} wide>
      <Notice tone="warn" icon="shield" className="mb-4">
        Passwords are shown only now. Copy or download them before closing. Share each student’s details only with that student or their parent.
      </Notice>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button icon="download" onClick={download}>Download CSV</Button>
        <Button icon="copy" onClick={() => copy(rows.map(loginMessage).join('\n\n'), 'All login messages copied')}>Copy all messages</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-muted"><th className="py-2 pr-3">Name</th><th className="pr-3">Username</th><th className="pr-3">Password</th><th /></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.login} className="border-t border-line">
                <td className="py-2 pr-3 font-semibold">{r.name}</td>
                <td className="pr-3 font-mono">{r.login}</td>
                <td className="pr-3 font-mono">{r.password}</td>
                <td className="text-right"><Button size="sm" icon="copy" onClick={() => copy(loginMessage(r), `Message for ${r.name} copied`)}>Copy message</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 text-right"><Button variant="primary" onClick={onClose}>Done</Button></div>
    </Modal>
  );
}

function AddStudents({ courses, onDone }: { courses: any[]; onDone: (created: any[]) => void }) {
  const [text, setText] = useState('');
  const [pick, setPick] = useState({ courseId: '', mode: 'self_paced' as Mode, batchId: '' });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const rows = text.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
    const [name, login] = l.split(',').map((x) => x.trim());
    return { name, login: login || undefined };
  });
  const save = async () => {
    setErr('');
    setBusy(true);
    try {
      const course = pick.courseId ? { courseId: pick.courseId, mode: pick.mode, ...(pick.mode === 'live' ? { batchId: pick.batchId } : {}) } : {};
      const r = await api('/api/admin/students/bulk', { body: { students: rows.map((x) => ({ ...x, ...course })) } });
      onDone(r.created);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="grid gap-4">
      <Field label="Students, one per line" hint="Write: Name, username. Leave out the username and one is made from the name. Children can use a username instead of an email.">
        <Textarea rows={6} value={text} onChange={(e) => setText(e.target.value)} placeholder={'Aarav Sharma, aarav.s\nMeera Iyer\nZoya Khan, zoya.k'} />
      </Field>
      <CoursePicker courses={courses} value={pick} onChange={setPick} />
      {err && <Notice tone="bad">{err}</Notice>}
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-muted">{rows.length} student{rows.length === 1 ? '' : 's'}</span>
        <Button variant="primary" icon="plus" busy={busy} disabled={!rows.length || (!!pick.courseId && pick.mode === 'live' && !pick.batchId)} onClick={save}>
          Create {rows.length || ''} login{rows.length === 1 ? '' : 's'}
        </Button>
      </div>
    </div>
  );
}

function AssignCourse({ student, courses, onDone }: { student: any; courses: any[]; onDone: () => void }) {
  const [pick, setPick] = useState({ courseId: '', mode: 'self_paced' as Mode, batchId: '' });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const save = async () => {
    setErr('');
    setBusy(true);
    try {
      await api(`/api/admin/students/${student.id}/courses`, { body: { courseId: pick.courseId, mode: pick.mode, ...(pick.mode === 'live' ? { batchId: pick.batchId } : {}) } });
      toast(`Course assigned to ${student.name}`);
      onDone();
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="grid gap-4">
      <CoursePicker courses={courses} value={pick} onChange={setPick} />
      <p className="text-sm text-muted">Already assigned? Choosing it again changes how they learn it (self-paced ↔ live) and keeps their progress.</p>
      {err && <Notice tone="bad">{err}</Notice>}
      <div className="text-right">
        <Button variant="primary" busy={busy} disabled={!pick.courseId || (pick.mode === 'live' && !pick.batchId)} onClick={save}>Assign course</Button>
      </div>
    </div>
  );
}

export function Students() {
  const { data, loading, reload } = useApi<any>('/api/admin/students');
  const [q, setQ] = useState('');
  const [mode, setMode] = useState<'' | Mode>('');
  const [courseId, setCourseId] = useState('');
  const [teacher, setTeacher] = useState('');
  const [adding, setAdding] = useState(false);
  const [assign, setAssign] = useState<any>(null);
  const [creds, setCreds] = useState<any[] | null>(null);
  const students: any[] = data?.students || [];
  const courses: any[] = data?.courses || [];
  const teachers = useMemo(() => [...new Set(students.flatMap((s) => s.teachers))].sort(), [students]);
  const shown = students.filter(
    (s) =>
      (!q || `${s.name} ${s.login}`.toLowerCase().includes(q.toLowerCase())) &&
      (!mode || s.courses.some((c: any) => c.mode === mode)) &&
      (!courseId || s.courses.some((c: any) => c.courseId === courseId)) &&
      (!teacher || s.teachers.includes(teacher)),
  );
  if (loading || !data) return <Spinner />;
  const live = students.filter((s) => s.courses.some((c: any) => c.mode === 'live')).length;
  const selfPaced = students.filter((s) => s.courses.some((c: any) => c.mode === 'self_paced')).length;
  const inactive = students.filter((s) => s.courses.length && (!s.lastActive || Date.now() - new Date(s.lastActive).getTime() > 7 * 86400_000)).length;
  const unassign = async (s: any, c: any) => {
    if (!confirm(`Remove ${c.title} from ${s.name}? Their progress is kept if you assign it again.`)) return;
    await api(`/api/admin/students/${s.id}/courses/${c.courseId}`, { method: 'DELETE' });
    toast('Course removed');
    reload();
  };
  const resetPw = async (s: any) => {
    if (!confirm(`Make a new password for ${s.name}? Their old password stops working and they are signed out.`)) return;
    setCreds([await api(`/api/admin/students/${s.id}/password`, { method: 'POST' })]);
  };
  return (
    <>
      <PageHeader eyebrow="People" title="Students" actions={<Button variant="primary" icon="plus" onClick={() => setAdding(true)}>Add students</Button>}>
        Create logins, assign courses from the library as self-paced or live, and track everyone’s progress and classes.
      </PageHeader>
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ['Students', students.length],
          ['Learning live', live],
          ['Self-paced', selfPaced],
          ['Inactive 7+ days', inactive],
        ].map(([l, n]) => (
          <Card key={l as string} className="p-4">
            <p className="text-sm text-muted">{l}</p>
            <p className="text-2xl font-black">{n}</p>
          </Card>
        ))}
      </div>
      <div className="mb-4 grid gap-2 sm:grid-cols-4">
        <Input placeholder="Search name or username" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search students" />
        <Select value={mode} onChange={(e) => setMode(e.target.value as any)} aria-label="Learning mode">
          <option value="">Self-paced and live</option>
          <option value="self_paced">Self-paced only</option>
          <option value="live">Live only</option>
        </Select>
        <Select value={courseId} onChange={(e) => setCourseId(e.target.value)} aria-label="Course">
          <option value="">All courses</option>
          {courses.filter((c) => students.some((s) => s.courses.some((x: any) => x.courseId === c.id))).map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
        </Select>
        <Select value={teacher} onChange={(e) => setTeacher(e.target.value)} aria-label="Teacher">
          <option value="">All teachers</option>
          {teachers.map((t) => <option key={t}>{t}</option>)}
        </Select>
      </div>
      {!students.length ? (
        <Empty title="No students yet" icon="users">Use “Add students” to create their logins.</Empty>
      ) : (
        <div className="grid gap-3">
          {shown.map((s) => (
            <Card key={s.id} className="p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-bold">{s.name} {s.disabled && <Badge tone="bad">Disabled</Badge>}</p>
                  <p className="font-mono text-xs text-muted">{s.login}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" icon="plus" onClick={() => setAssign(s)}>Assign course</Button>
                  <Button size="sm" icon="key" onClick={() => resetPw(s)}>New password</Button>
                </div>
              </div>
              <div className="mt-3 grid gap-2">
                {s.courses.length ? s.courses.map((c: any) => (
                  <div key={c.courseId} className="grid items-center gap-2 rounded-xl bg-sunk px-3 py-2 sm:grid-cols-[1fr_auto_10rem_auto]">
                    <span className="text-sm font-semibold">{c.title}</span>
                    <span className="flex flex-wrap gap-1">
                      <Badge tone={c.mode === 'live' ? 'teach' : 'accent'}>{MODE_LABEL[c.mode as Mode]}</Badge>
                      {c.mode === 'live' && <Badge>{c.batchName ? `${c.batchName} · ${c.teacher || 'no teacher'}` : 'no class group'}</Badge>}
                    </span>
                    <span className="flex items-center gap-2 text-xs text-muted">
                      <ProgressBar value={c.done} max={c.total || 1} label={`${c.title} progress`} className="flex-1" /> {c.done}/{c.total}
                    </span>
                    <button className="text-xs text-muted underline" onClick={() => unassign(s, c)}>Remove</button>
                  </div>
                )) : <p className="text-sm text-muted">No courses assigned.</p>}
              </div>
              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
                <span>Last active: <b className="text-ink">{ago(s.lastActive)}</b></span>
                {s.classesHeld > 0 && <span>Live classes attended: <b className="text-ink">{s.classesAttended} of {s.classesHeld}</b></span>}
                {s.nextClass && <span>Next class: <b className="text-ink">{when(s.nextClass)}</b></span>}
              </p>
            </Card>
          ))}
          {!shown.length && <Empty title="No students match these filters" icon="search" />}
        </div>
      )}
      <Modal open={adding} onClose={() => setAdding(false)} title="Add students" wide>
        {adding && <AddStudents courses={courses} onDone={(created) => { setAdding(false); setCreds(created); reload(); }} />}
      </Modal>
      <Modal open={!!assign} onClose={() => setAssign(null)} title={assign ? `Assign a course to ${assign.name}` : ''} wide>
        {assign && <AssignCourse student={assign} courses={courses} onDone={() => { setAssign(null); reload(); }} />}
      </Modal>
      {creds && <Credentials rows={creds} onClose={() => setCreds(null)} />}
    </>
  );
}
