// Kitabash Academy — subjects, the request form and how it is sent.
(function () {
  "use strict";
  var CFG = window.ACADEMY_CONFIG || {};
  var WA = String(CFG.whatsappNumber || "").replace(/\D/g, "");
  var KEY = String(CFG.web3formsKey || "").trim();

  // Areas and subjects. Edit freely; the cards and the form both read this list.
  var CATEGORIES = [
    { id: "tech", name: "Coding, AI & Technology", cls: "c-tech", icon: "</>",
      blurb: "From first Scratch games to Python, web apps, data structures and AI agents.",
      subjects: ["Scratch / Scratch Junior", "Python", "Java", "C / C++", "JavaScript & Web Development", "App Development (MIT App Inventor / Flutter)", "Data Structures & Algorithms", "Artificial Intelligence & Machine Learning", "Data Science & Analytics", "Prompt Engineering", "AI-Assisted Website Creation", "No-code Automation & AI Agents", "Robotics & Micro:bit", "Minecraft Education (MakeCode)", "Excel & Google Sheets", "Interview / placement coding prep"] },
    { id: "eng", name: "Engineering Subjects", cls: "c-eng", icon: "⚙",
      blurb: "First-year subjects, core branch subjects, projects and GATE, explained step by step.",
      subjects: ["Engineering Mathematics", "Engineering Physics", "Engineering Chemistry", "Engineering Mechanics", "Engineering Drawing / CAD", "Basic Electrical Engineering", "Basic Electronics", "Digital Electronics", "Analog Circuits", "Signals & Systems", "Communication Systems", "Microprocessors & Embedded Systems", "Control Systems", "Power Systems & Machines", "Thermodynamics", "Fluid Mechanics", "Strength of Materials", "Theory of Machines", "Manufacturing Processes", "Structural Analysis", "Surveying & Geotechnics", "Computer Networks", "Operating Systems", "Database Management Systems", "Theory of Computation & Compilers", "Computer Organisation & Architecture", "Final-year project guidance", "GATE preparation"] },
    { id: "acad", name: "School Academics", cls: "c-acad", icon: "∑",
      blurb: "Maths, science and English for KG to Class 12 across CBSE, ICSE, IGCSE and state boards.",
      subjects: ["Mathematics", "Science", "Physics", "Chemistry", "Biology", "English", "Environmental Studies (EVS)", "Social Studies", "Computer Science (school)", "Logical Reasoning", "Critical Thinking & Problem Solving", "Olympiad Preparation", "Homework & Revision Support", "CBSE board exam prep", "ICSE / ISC board exam prep", "Cambridge IGCSE", "JEE / NEET foundation"] },
    { id: "lang", name: "Language & Communication", cls: "c-lang", icon: "Aa",
      blurb: "Speak, read and write with confidence, from neat handwriting to stage-ready speaking.",
      subjects: ["Spoken English", "English Grammar & Vocabulary", "Handwriting & Penmanship", "Reading Comprehension", "Creative Writing", "Storytelling", "Public Speaking", "Debate & Communication", "Presentation Skills", "Interview & GD preparation", "IELTS / TOEFL preparation"] },
    { id: "life", name: "Life & Financial Skills", cls: "c-life", icon: "₹",
      blurb: "Money sense, study habits and safe online life for children and young adults.",
      subjects: ["Financial Literacy", "Saving & Budgeting", "Needs vs Wants", "Money Management", "Financial Decision-Making", "Entrepreneurship", "Digital Citizenship & Online Safety", "Study Skills & Time Management"] },
    { id: "pro", name: "AI for Professionals", cls: "c-pro", icon: "★",
      blurb: "Practical AI for your job: prompts, workflows, policy and pilots for 20 industries.",
      subjects: ["HR", "Sales", "Marketing", "Education & Teaching", "Customer Support", "Finance & Accounting", "Healthcare", "Legal", "Operations & Supply Chain", "Real Estate", "Small Business", "Software & IT", "Banking", "Insurance", "Retail & E-commerce", "Manufacturing", "Hospitality", "Government & Public Sector", "Media & Content", "Agriculture"] },
    { id: "other", name: "Something else", cls: "c-other", icon: "?",
      blurb: "Can't find it? Tell us what you need and we'll find the right mentor.",
      subjects: [] }
  ];
  var OTHER = "Other (type it below)";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (text != null) n.textContent = text;
    return n;
  }

  // ── Category cards ─────────────────────────────────────────
  var cats = $("#cats");
  CATEGORIES.forEach(function (c) {
    var card = el("article", { "class": "cat " + c.cls });
    var top = el("div", { "class": "cat-top" });
    top.appendChild(el("span", { "class": "cat-ico", "aria-hidden": "true" }, c.icon));
    top.appendChild(el("h3", null, c.name));
    card.appendChild(top);
    card.appendChild(el("p", null, c.blurb));
    if (c.subjects.length) {
      var ul = el("ul", { "class": "tags" });
      var show = 8;
      c.subjects.slice(0, show).forEach(function (s) { ul.appendChild(el("li", null, s)); });
      if (c.subjects.length > show) ul.appendChild(el("li", { "class": "more" }, "+" + (c.subjects.length - show) + " more"));
      card.appendChild(ul);
    }
    var b = el("a", { "class": "btn", href: "#request", "data-cat": c.id }, c.id === "other" ? "Describe your need" : "Request help in this area");
    card.appendChild(b);
    cats.appendChild(card);
  });
  cats.addEventListener("click", function (e) {
    var a = e.target.closest("[data-cat]");
    if (!a) return;
    catSel.value = a.getAttribute("data-cat");
    fillSubjects();
    clearInvalid(catSel);
    setTimeout(function () { (subjSel.disabled ? $("#otherSubject") : subjSel).focus({ preventScroll: true }); }, 400);
  });

  // ── Form: dependent fields ────────────────────────────────
  var form = $("#needForm");
  var errBox = $("#formError"), btn = $("#submitBtn");
  var catSel = $("#category"), subjSel = $("#subject");
  CATEGORIES.forEach(function (c) { catSel.appendChild(el("option", { value: c.id }, c.name)); });

  function fillSubjects() {
    var c = CATEGORIES.filter(function (x) { return x.id === catSel.value; })[0];
    subjSel.innerHTML = "";
    if (!c) {
      subjSel.appendChild(el("option", { value: "" }, "Choose an area first"));
      subjSel.disabled = true;
    } else {
      subjSel.disabled = false;
      subjSel.appendChild(el("option", { value: "" }, c.subjects.length ? "Choose a subject" : "Type it below"));
      c.subjects.forEach(function (s) { subjSel.appendChild(el("option", { value: s }, s)); });
      subjSel.appendChild(el("option", { value: OTHER }, OTHER));
      if (!c.subjects.length) subjSel.value = OTHER;
    }
    toggleOther();
  }
  function toggleOther() {
    $("#otherSubjectField").hidden = subjSel.value !== OTHER;
  }
  catSel.addEventListener("change", fillSubjects);
  subjSel.addEventListener("change", toggleOther);

  var learner = $("#learnerType");
  function toggleLearner() {
    var v = learner.value;
    var school = v === "School student" || v === "Parent (asking for my child)";
    $("#gradeField").hidden = !school;
    $("#boardField").hidden = !school;
    $("#branchField").hidden = v !== "College / engineering student";
    $("#workField").hidden = v !== "Working professional";
  }
  learner.addEventListener("change", toggleLearner);

  var details = $("#details");
  details.addEventListener("input", function () { $("#detailsCount").textContent = details.value.length; });

  // ── Validation ────────────────────────────────────────────
  function markInvalid(node) { (node.closest(".field") || node).classList.add("invalid"); node.setAttribute("aria-invalid", "true"); }
  function clearInvalid(node) { var f = node.closest(".field") || node; f.classList.remove("invalid"); node.removeAttribute("aria-invalid"); }
  form.addEventListener("input", function () { errBox.hidden = true; });
  form.addEventListener("input", function (e) { clearInvalid(e.target); if (e.target.name === "help_type") $(".chips").classList.remove("invalid"); if (e.target.id === "consent") $(".consent").classList.remove("invalid"); });
  form.addEventListener("change", function (e) { clearInvalid(e.target); if (e.target.name === "help_type") $(".chips").classList.remove("invalid"); if (e.target.id === "consent") $(".consent").classList.remove("invalid"); });

  function visible(node) { return !node.closest("[hidden]"); }

  function validate() {
    var problems = [];
    var first = null;
    function bad(node, msg) { markInvalid(node); problems.push(msg); if (!first) first = node; }
    var f = form.elements;
    if (f.name.value.trim().length < 2) bad(f.name, "your name");
    if (!learner.value) bad(learner, "who the learner is");
    if (visible($("#grade")) && !$("#grade").value) bad($("#grade"), "the class / grade");
    if (visible($("#courseYear")) && !$("#courseYear").value.trim()) bad($("#courseYear"), "your course and year");
    if (!catSel.value) bad(catSel, "an area");
    else if (!subjSel.value) bad(subjSel, "a subject");
    if (visible($("#otherSubject")) && !$("#otherSubject").value.trim()) bad($("#otherSubject"), "the subject name");
    if (!form.querySelector('input[name="help_type"]:checked')) { $(".chips").classList.add("invalid"); problems.push("the kind of help"); if (!first) first = form.querySelector('input[name="help_type"]'); }
    if (details.value.trim().length < 15) bad(details, "a short description (at least 15 characters)");
    var digits = f.phone.value.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) bad(f.phone, "a valid phone number");
    var em = f.email.value.trim();
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) bad(f.email, "a valid email (or leave it empty)");
    if (!$("#consent").checked) { $(".consent").classList.add("invalid"); problems.push("your consent to be contacted"); if (!first) first = $("#consent"); }
    return { ok: !problems.length, problems: problems, first: first };
  }

  // ── Collect + send ────────────────────────────────────────
  function refId() {
    var d = new Date();
    var p = function (n) { return String(n).padStart(2, "0"); };
    var rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
    return "KA-" + String(d.getFullYear()).slice(2) + p(d.getMonth() + 1) + p(d.getDate()) + "-" + rnd;
  }

  function collect() {
    var f = form.elements;
    var cat = CATEGORIES.filter(function (x) { return x.id === catSel.value; })[0];
    var subject = subjSel.value === OTHER ? $("#otherSubject").value.trim() : subjSel.value;
    var code = f.country_code.value === "other" ? "" : f.country_code.value + " ";
    var rows = [
      ["Name", f.name.value.trim()],
      ["Learner", learner.value],
      ["Class / grade", visible($("#grade")) ? f.grade.value : ""],
      ["Board", visible($("#grade")) ? f.board.value : ""],
      ["Course / year", visible($("#courseYear")) ? f.course_year.value.trim() : ""],
      ["Role / industry", visible(f.role) ? f.role.value.trim() : ""],
      ["Area", cat ? cat.name : ""],
      ["Subject", subject],
      ["Kind of help", (form.querySelector('input[name="help_type"]:checked') || {}).value || ""],
      ["Level", f.level.value],
      ["Timeline", f.timeline.value],
      ["Format", f.format.value],
      ["Language", f.language.value],
      ["Phone / WhatsApp", code + f.phone.value.trim()],
      ["Email", f.email.value.trim()],
      ["City", f.city.value.trim()],
      ["Contact via", f.contact_via.value],
      ["Best time", f.contact_time.value],
      ["Requirement", details.value.trim()]
    ].filter(function (r) { return r[1]; });
    return { rows: rows, subject: subject, area: cat ? cat.name : "", name: f.name.value.trim(), email: f.email.value.trim() };
  }

  function asText(ref, data) {
    return "New learning request " + ref + "\n\n" + data.rows.map(function (r) { return r[0] + ": " + r[1]; }).join("\n");
  }
  function waLink(text) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(text); }

  function sendWeb3Forms(ref, data) {
    var payload = {
      access_key: KEY,
      subject: "Kitabash Academy request " + ref + ": " + data.subject + " (" + data.name + ")",
      from_name: "Kitabash Academy website",
      botcheck: form.elements.botcheck.checked
    };
    if (data.email) payload.replyto = data.email;
    payload["Reference"] = ref;
    data.rows.forEach(function (r) { payload[r[0]] = r[1]; });
    return fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (j) {
        if (!res.ok || j.success === false) throw new Error(j.message || ("HTTP " + res.status));
        return j;
      });
    });
  }

  function showError(msg, link) {
    errBox.textContent = msg;
    if (link) { errBox.appendChild(document.createTextNode(" ")); var a = el("a", { href: link.href, target: "_blank", rel: "noopener" }, link.label); errBox.appendChild(a); }
    errBox.hidden = false;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errBox.hidden = true;
    var v = validate();
    if (!v.ok) {
      showError("Please add " + v.problems.join(", ") + ".");
      if (v.first) v.first.focus();
      return;
    }
    if (form.elements.botcheck.checked) return; // a bot filled the hidden box
    var ref = refId(), data = collect(), text = asText(ref, data);

    if (!KEY) {
      // Not connected to an email service yet: hand the request over WhatsApp or email instead.
      if (WA) { window.open(waLink(text), "_blank", "noopener"); showDone(ref, data, text, true); return; }
      if (CFG.contactEmail) { location.href = "mailto:" + CFG.contactEmail + "?subject=" + encodeURIComponent("Learning request " + ref) + "&body=" + encodeURIComponent(text); showDone(ref, data, text, true); return; }
      showError("This form isn't connected yet. Site owner: add your Web3Forms key or WhatsApp number in config.js.");
      return;
    }

    btn.disabled = true; btn.textContent = "Sending…";
    sendWeb3Forms(ref, data).then(function () {
      showDone(ref, data, text, false);
    }).catch(function () {
      showError("Sorry, we couldn't send your request. Please check your internet and try again.",
        WA ? { href: waLink(text), label: "Or send it on WhatsApp →" } : null);
    }).then(function () { btn.disabled = false; btn.textContent = "Send my request"; });
  });

  function showDone(ref, data, text, viaHandoff) {
    $("#doneName").textContent = data.name.split(" ")[0];
    $("#doneRef").textContent = ref;
    var dl = $("#doneSummary"); dl.innerHTML = "";
    data.rows.filter(function (r) { return ["Area", "Subject", "Kind of help", "Phone / WhatsApp", "Email", "Contact via"].indexOf(r[0]) > -1; })
      .forEach(function (r) { dl.appendChild(el("dt", null, r[0])); dl.appendChild(el("dd", null, r[1])); });
    var wa = $("#doneWhatsapp");
    if (WA) { wa.href = waLink(text); wa.hidden = false; wa.textContent = viaHandoff ? "Open WhatsApp again" : "Also send on WhatsApp"; }
    form.hidden = true;
    var done = $("#done"); done.hidden = false;
    window.scrollTo({ top: done.getBoundingClientRect().top + window.scrollY - 88, behavior: "instant" });
    done.focus({ preventScroll: true });
  }

  $("#another").addEventListener("click", function () {
    form.reset(); fillSubjects(); toggleLearner();
    $("#detailsCount").textContent = "0";
    $("#done").hidden = true; form.hidden = false;
    form.elements.name.focus();
  });

  // ── Contact details from config ───────────────────────────
  var foot = $("#footContact"), alt = $("#altContact");
  if (CFG.contactPhone) foot.appendChild(el("a", { href: "tel:" + CFG.contactPhone.replace(/[^\d+]/g, "") }, "📞 " + CFG.contactPhone));
  if (CFG.contactEmail) foot.appendChild(el("a", { href: "mailto:" + CFG.contactEmail }, "✉ " + CFG.contactEmail));
  if (WA) {
    var hello = "Hi Kitabash Academy, I'd like help with learning.";
    foot.appendChild(el("a", { href: waLink(hello), target: "_blank", rel: "noopener" }, "💬 WhatsApp us"));
    var f = $("#waFloat"); f.href = waLink(hello); f.hidden = false;
    alt.appendChild(el("p", { "class": "muted small" }, "Prefer chatting? Message us directly:"));
    alt.appendChild(el("a", { "class": "btn btn-whatsapp", href: waLink(hello), target: "_blank", rel: "noopener" }, "Chat on WhatsApp"));
    alt.hidden = false;
  }
  $("#year").textContent = new Date().getFullYear();
})();
