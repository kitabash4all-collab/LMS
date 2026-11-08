// Kitabash public website. Plain JavaScript, no build step.
// Courses come live from the portal (/api/public/catalog: published courses only);
// enquiries are saved to the portal (/api/public/leads) and appear under Admin → Leads.
(function () {
  "use strict";
  const $ = (s, el) => (el || document).querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  const BANDS = [
    { id: "K-2", label: "Ages 5–7", grades: "KG–Grade 2" },
    { id: "3-5", label: "Ages 8–10", grades: "Grades 3–5" },
    { id: "6-8", label: "Ages 11–13", grades: "Grades 6–8" },
    { id: "9-12", label: "Ages 14–17", grades: "Grades 9–12" },
    { id: "Adult", label: "Adults", grades: "18+" },
  ];
  const CATS = {
    "Language & Communication": { short: "English & Communication", hue: "--c-lang" },
    "Academic Learning": { short: "Academics", hue: "--c-acad" },
    "School Board Curriculum": { short: "School boards", hue: "--c-board" },
    "Life & Financial Skills": { short: "Money & Life skills", hue: "--c-life" },
    "Coding, AI & Technology": { short: "Coding & AI", hue: "--c-tech" },
    "AI for Professionals": { short: "AI for work (adults)", hue: "--c-pro" },
  };
  const LEVELS = ["Beginner", "Intermediate", "Advanced"];
  const state = { band: "", cat: "", q: "", lvl: "", shown: 24 };
  let COURSES = [];
  let WHATSAPP = "";

  // ---------- Courses ----------
  function mix(list) {
    const lv = { Beginner: 0, Intermediate: 1, Advanced: 2 };
    const groups = {};
    list.slice().sort((a, b) => (lv[a.l] || 0) - (lv[b.l] || 0)).forEach((c) => (groups[c.c] = groups[c.c] || []).push(c));
    const keys = Object.keys(groups), out = [];
    while (out.length < list.length) keys.forEach((k) => { const x = groups[k].shift(); if (x) out.push(x); });
    return out;
  }
  function chip(container, value, label, count, key) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip";
    b.setAttribute("aria-pressed", String(state[key] === value));
    b.innerHTML = esc(label) + (count != null ? "<small>" + count + "</small>" : "");
    b.addEventListener("click", () => { state[key] = value; state.shown = 24; render(); });
    container.appendChild(b);
  }
  function buildFilters() {
    const fb = $("#f-band"), fc = $("#f-cat");
    fb.querySelectorAll(".chip").forEach((n) => n.remove());
    fc.querySelectorAll(".chip").forEach((n) => n.remove());
    chip(fb, "", "All ages", null, "band");
    BANDS.forEach((b) => { if (COURSES.some((c) => c.b === b.id)) chip(fb, b.id, b.label, null, "band"); });
    const inBand = COURSES.filter((c) => !state.band || c.b === state.band);
    chip(fc, "", "All subjects", inBand.length, "cat");
    const cats = Object.keys(CATS).concat([...new Set(inBand.map((c) => c.c))].filter((k) => !CATS[k]));
    cats.forEach((k) => { const n = inBand.filter((c) => c.c === k).length; if (n) chip(fc, k, (CATS[k] || { short: k }).short, n, "cat"); });
  }
  function matches(c) {
    if (state.band && c.b !== state.band) return false;
    if (state.cat && c.c !== state.cat) return false;
    if (state.lvl && c.l !== state.lvl) return false;
    if (state.q) {
      const hay = (c.t + " " + c.s + " " + c.d + " " + c.c).toLowerCase();
      if (!state.q.toLowerCase().split(/\s+/).every((w) => hay.includes(w))) return false;
    }
    return true;
  }
  function card(c) {
    const cat = CATS[c.c] || { short: c.c, hue: "--c-board" };
    const band = BANDS.find((b) => b.id === c.b);
    const li = LEVELS.indexOf(c.l);
    const el = document.createElement("article");
    el.className = "course"; el.tabIndex = 0;
    el.setAttribute("role", "button"); el.setAttribute("aria-expanded", "false");
    el.style.setProperty("--hue", "var(" + cat.hue + ")");
    el.style.setProperty("--soft", "var(" + cat.hue + "-soft)");
    el.innerHTML =
      '<div class="meta"><span class="tag cat">' + esc(cat.short) + "</span>" + (band ? '<span class="tag">' + esc(band.label) + "</span>" : "") + "</div>" +
      "<h3>" + esc(c.t) + "</h3>" +
      '<div class="sub">' + esc(c.s) + "</div>" +
      (li >= 0 ? '<div class="ladder" aria-label="Level ' + (li + 1) + " of 3: " + esc(c.l) + '">' + LEVELS.map((_, i) => '<b class="' + (i <= li ? "on" : "") + '"></b>').join("") + "<span>" + esc(c.l) + "</span></div>" : "") +
      '<p class="d">' + esc(c.d) + "</p>" +
      '<div class="more">' +
      (c.o && c.o.length ? "<strong>Your child will be able to:</strong><ul>" + c.o.map((o) => "<li>" + esc(o) + "</li>").join("") + "</ul>" : "") +
      '<span class="sub">' + (band ? esc(band.grades) + " · " : "") + c.n + " lessons · live batch or self-paced</span>" +
      '<button class="go" type="button">Book a free trial for this course</button></div>';
    const toggle = () => el.setAttribute("aria-expanded", el.getAttribute("aria-expanded") === "true" ? "false" : "true");
    el.addEventListener("click", (e) => { if (e.target.closest(".go")) { pickCourse(c); return; } toggle(); });
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    return el;
  }
  function render() {
    buildFilters();
    const list = COURSES.filter(matches);
    const grid = $("#grid");
    grid.innerHTML = "";
    if (!list.length) grid.innerHTML = '<div class="empty" style="grid-column:1/-1">No courses match. Try another age, subject or word.</div>';
    list.slice(0, state.shown).forEach((c) => grid.appendChild(card(c)));
    $("#count").textContent = "Showing " + Math.min(state.shown, list.length) + " of " + list.length + " courses";
    $("#more").hidden = list.length <= state.shown;
  }
  $("#more").addEventListener("click", () => { state.shown += 24; render(); });
  $("#q").addEventListener("input", (e) => { state.q = e.target.value.trim(); state.shown = 24; render(); });
  $("#lvl").addEventListener("change", (e) => { state.lvl = e.target.value; state.shown = 24; render(); });

  // ---------- Plans ----------
  const PLANS = {
    inr: [
      { name: "Self-paced", price: "₹299", per: "/month", alt: "or ₹2,499 a year", feats: ["Every course in the library, any time", "AI helper with parent consent", "Worksheets and progress reports"], cta: "Start free" },
      { name: "Live level", price: "₹2,499", per: "/level", alt: "8 live classes, about ₹312 a class", feats: ["One course level, 2 classes a week", "Batch of 6–10 with a real teacher", "Self-paced access to that course"], cta: "Book a free trial" },
      { name: "Live membership", price: "₹2,199", per: "/month", alt: "billed quarterly (₹6,597), or ₹2,499 monthly", feats: ["8 live classes every month", "Moves up levels automatically", "Full self-paced library included"], cta: "Book a free trial", pop: true },
      { name: "Level path", price: "₹6,999", per: "/3 levels", alt: "Beginner to Advanced, 24 live classes", feats: ["Save about 7% on three levels", "Same batch and teacher where possible", "Teacher report after each level"], cta: "Book a free trial" },
    ],
    usd: [
      { name: "Self-paced", price: "$6.99", per: "/month", alt: "or $59 a year", feats: ["Every course in the library, any time", "AI helper with parent consent", "Worksheets and progress reports"], cta: "Start free" },
      { name: "Live level", price: "$99", per: "/level", alt: "8 live classes, about $12.40 a class", feats: ["One course level, 2 classes a week", "Batch of 6–10 with a real teacher", "Self-paced access to that course"], cta: "Book a free trial" },
      { name: "Live membership", price: "$83", per: "/month", alt: "billed quarterly ($249), or $89 monthly", feats: ["8 live classes every month", "Moves up levels automatically", "Full self-paced library included"], cta: "Book a free trial", pop: true },
      { name: "Level path", price: "$269", per: "/3 levels", alt: "Beginner to Advanced, 24 live classes", feats: ["Save about 9% on three levels", "Same batch and teacher where possible", "Teacher report after each level"], cta: "Book a free trial" },
    ],
  };
  const ADDONS = {
    inr: [["Private 1:1 class (45 min)", "₹799"], ["Adult AI course, per level", "₹3,999"], ["Free trial class", "₹0"]],
    usd: [["Private 1:1 class (45 min)", "$25"], ["Adult AI course, per level", "$149"], ["Free trial class", "$0"]],
  };
  const OFFERS = {
    inr: [["Founding families: first 3 months", "30% off"], ["Second child", "10% off"], ["Refer a friend (both families)", "₹500 off"]],
    usd: [["Founding families: first 3 months", "30% off"], ["Second child", "10% off"], ["Refer a friend (both families)", "$6 off"]],
  };
  const FINE = {
    inr: "No GST or extra charges added at checkout. Founding-families offer for the first 100 families only. Full refund if you cancel before the second class.",
    usd: "Paid in US dollars by card or PayPal. Founding-families offer for the first 100 families only. Full refund if you cancel before the second class.",
  };
  function renderPlans(cur) {
    $("#plans-grid").innerHTML = PLANS[cur].map((p) =>
      '<div class="plan' + (p.pop ? " pop" : "") + '"><h3>' + p.name + '</h3><div class="price">' + p.price + " <small>" + p.per + '</small></div><p class="alt">' + p.alt + "</p><ul>" +
      p.feats.map((f) => "<li>" + f + "</li>").join("") + '</ul><a class="btn ' + (p.pop ? "btn-primary" : "btn-ghost") + '" href="#trial">' + p.cta + "</a></div>").join("");
    $("#addons").innerHTML = ADDONS[cur].map((r) => "<div><span>" + r[0] + "</span><b>" + r[1] + "</b></div>").join("");
    $("#offers").innerHTML = OFFERS[cur].map((r) => "<div><span>" + r[0] + "</span><b>" + r[1] + "</b></div>").join("");
    $("#fine").textContent = FINE[cur];
    document.querySelectorAll(".toggle button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cur === cur)));
  }
  document.querySelectorAll(".toggle button").forEach((b) => b.addEventListener("click", () => {
    renderPlans(b.dataset.cur);
    try { localStorage.setItem("kb-cur", b.dataset.cur); } catch (e) { /* storage blocked */ }
  }));

  // ---------- Enquiry form ----------
  const form = $("#form");
  const ageSel = $("#f-age");
  ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "Adult (18+)"].forEach((a) => { const o = document.createElement("option"); o.textContent = a; ageSel.appendChild(o); });
  ageSel.value = "9";
  function setKind(kind) {
    $("#f-kind").value = kind;
    $("#row-child").hidden = kind !== "trial";
    $("#interest-label").textContent = kind === "teacher" ? "Subjects you can teach" : kind === "school" ? "School or centre, and programme" : "Interested in";
    $("#submit").textContent = kind === "teacher" ? "Apply to teach" : kind === "school" ? "Ask for a proposal" : "Request a free trial class";
  }
  function pickCourse(c) {
    setKind("trial");
    $("#f-interest").value = c.t;
    const ages = { "K-2": "6", "3-5": "9", "6-8": "12", "9-12": "15", Adult: "Adult (18+)" };
    if (ages[c.b]) ageSel.value = ages[c.b];
    $("#trial").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  $("#teach-cta").addEventListener("click", () => setKind("teacher"));
  $("#school-cta").addEventListener("click", () => setKind("school"));
  document.querySelectorAll('a[href="#trial"]').forEach((a) => { if (a.id !== "teach-cta" && a.id !== "school-cta") a.addEventListener("click", () => setKind("trial")); });

  function source() {
    const p = new URLSearchParams(location.search);
    const utm = ["utm_source", "utm_medium", "utm_campaign"].map((k) => p.get(k)).filter(Boolean).join(" / ");
    let ref = "";
    try { ref = document.referrer ? new URL(document.referrer).hostname : ""; } catch (e) { ref = ""; }
    return (utm || ref || "direct").slice(0, 200);
  }
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = $("#status");
    status.className = "note";
    const data = {
      kind: $("#f-kind").value,
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      country: form.country.value,
      child_age: $("#f-kind").value === "trial" ? ageSel.value : "",
      interest: form.interest.value.trim(),
      preferred_time: $("#f-kind").value === "trial" ? form.preferred_time.value : "",
      consent_whatsapp: form.consent.checked,
      source: source(),
      website: form.website.value,
    };
    if (!data.name) { status.className = "note err"; status.textContent = "Please add your name."; form.name.focus(); return; }
    if (!data.phone && !data.email) { status.className = "note err"; status.textContent = "Please add a WhatsApp number or an email address so we can reply."; form.phone.focus(); return; }
    const btn = $("#submit");
    btn.disabled = true;
    try {
      const res = await fetch("/api/public/leads", { method: "POST", headers: { "content-type": "application/json", "x-kitabash": "1" }, body: JSON.stringify(data) });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out.error || "Something went wrong. Please try again.");
      status.className = "note ok";
      status.textContent = "Thank you, " + data.name.split(" ")[0] + ". We have your request and will reply " + (data.phone && data.consent_whatsapp ? "on WhatsApp" : data.email ? "by email" : "soon") + ".";
      form.reset();
      ageSel.value = "9";
      setKind("trial");
    } catch (err) {
      status.className = "note err";
      status.textContent = err.message;
    } finally {
      btn.disabled = false;
    }
  });

  // ---------- Load data ----------
  let cur = "inr";
  try { cur = localStorage.getItem("kb-cur") || "inr"; } catch (e) { cur = "inr"; }
  renderPlans(PLANS[cur] ? cur : "inr");
  setKind("trial");

  const video = $("#promo");
  if (video) {
    video.addEventListener("loadedmetadata", () => { $("#video").hidden = false; });
    video.addEventListener("error", () => { $("#video").hidden = true; });
  }

  // ---------- Tracks ----------
  const TRACK_HUE = { coding: "--c-tech", genai: "--c-board", "ai-at-work": "--c-pro", english: "--c-lang", money: "--c-life" };
  function renderTracks(tracks) {
    const box = $("#track-list");
    if (!box) return;
    const live = (tracks || []).filter((t) => t.levels.some((l) => l.live));
    if (!live.length) { $("#tracks").hidden = true; return; }
    box.innerHTML = live.map((t) => {
      const hue = TRACK_HUE[t.id] || "--c-tech";
      const levels = t.levels.filter((l) => l.live);
      return '<article class="track" style="--hue:var(' + hue + ');--soft:var(' + hue + '-soft)">' +
        '<span class="ages">' + (/\d/.test(t.ages) ? "Ages " : "") + esc(t.ages) + " · " + levels.length + " level" + (levels.length > 1 ? "s" : "") + "</span>" +
        "<h3>" + esc(t.name) + "</h3><p>" + esc(t.summary) + "</p>" +
        '<ol class="tl">' + levels.map((l) => '<li><span class="st">' + esc(l.stage) + '</span><span class="nm">' + esc(l.title) + " <small>Ages " + esc(l.ages) + " · " + l.lessons + " classes" + (l.builds.length ? " · builds: " + esc(l.builds.slice(0, 3).join(", ")) : "") + "</small></span></li>").join("") +
        (t.next ? '<li class="soon"><span class="st">Next</span><span class="nm">' + esc(t.next) + " <small>In development</small></span></li>" : "") + "</ol>" +
        '<div class="tools">' + t.tools.map((x) => '<span class="tag">' + esc(x) + "</span>").join("") + "</div>" +
        '<a class="btn btn-primary" href="#trial" data-track="' + esc(t.name) + '">Try a free class</a></article>';
    }).join("");
    box.querySelectorAll("[data-track]").forEach((a) => a.addEventListener("click", () => {
      const f = document.querySelector('#trial [name="interest"]');
      if (f) f.value = a.getAttribute("data-track");
    }));
  }

  fetch("/api/public/catalog")
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error("catalog"))))
    .then((data) => {
      renderTracks(data.tracks);
      COURSES = mix(data.courses || []);
      WHATSAPP = (data.contact && data.contact.whatsapp) || "";
      document.querySelectorAll(".js-count").forEach((n) => (n.textContent = String(COURSES.length)));
      document.querySelectorAll(".js-subjects").forEach((n) => (n.textContent = String(data.subjects || "")));
      $("#interests").innerHTML = [...new Set(COURSES.map((c) => c.s))].sort().map((s) => '<option value="' + esc(s) + '">').join("");
      if (WHATSAPP) {
        const wa = $("#wa");
        wa.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hi Kitabash, I'd like to know more about your classes.");
        wa.hidden = false;
      }
      render();
    })
    .catch(() => {
      $("#count").textContent = "Courses could not be loaded right now. Please refresh the page.";
    });
})();
