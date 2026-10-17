/* ArcAxis – Sprache (DE/EN), ohne Cookies; die Wahl liegt nur im lokalen Speicher */
(() => {
  "use strict";
  const EN = {
    "skip": "Skip to content", "nav.l": "Services", "nav.b": "Examples", "nav.a": "Request a project",
    "hero.e": "ArcAxis · Software solutions", "hero.h": "Software, made to measure.",
    "hero.l": "ArcAxis plans, builds and runs software solutions – from the first idea to the first paying user.",
    "hero.c1": "See examples", "hero.c2": "Request a project",
    "l.e": "What we do", "l.h": "Everything a finished solution needs.",
    "l1.h": "Web applications", "l1.p": "Fast, multilingual and usable on any device.",
    "l2.h": "AI features", "l2.p": "Evaluation, analysis and text – with clear guardrails and traceable results.",
    "l3.h": "Reports and PDF", "l3.p": "Results you can pass on, in your brand’s look.",
    "l4.h": "Access and payment", "l4.p": "Tokens, subscriptions or one-off purchases – including invoicing and order handling.",
    "l5.h": "Automation", "l5.p": "Manual routines become processes that run by themselves.",
    "l6.h": "Operations and care", "l6.p": "Hosting, monitoring and further development, so it works when users arrive.",
    "b.e": "Examples", "b.h": "Three products, built entirely by us.",
    "b.l": "We took each from idea to operation: interface, evaluation, payment, running it.", "b.go": "Take a look →",
    "b1.t": "Web · AI · payment", "b1.p": "A structured AI assessment for situations, teams and organisations – with report, team rounds and token access in three languages.",
    "b2.t": "Web · reports · orders", "b2.p": "A diagnosis tool for professional football clubs – with a PDF for the board, an automatically generated short report and order management.",
    "b3.t": "App · AI · security", "b3.p": "A journal app with AI-assisted reflection – built with a focus on privacy and security.",
    "a.e": "Your project", "a.h": "Want one too?",
    "a.l": "Do you have an idea, a process that could run better, or a product that does not exist yet? Get in touch.",
    "a.d": "Typical projects", "s.d": "How it works",
    "t1.b": "Specialist tools and diagnosis tools", "t1.t": "Questions in, result and report out.",
    "t2.b": "Customer and member areas", "t2.t": "With access, payment and history.",
    "t3.b": "Evaluations with AI", "t3.t": "Texts, analyses and reports that stay traceable.",
    "t4.b": "Automation", "t4.t": "Requests, orders and reports without manual work.",
    "t5.b": "Prototypes", "t5.t": "See a new product idea as a running version, quickly.",
    "s1.b": "Conversation", "s1.t": "We understand your idea and your goal.",
    "s2.b": "Concept", "s2.t": "Scope, flow and result on one page.",
    "s3.b": "Prototype", "s3.t": "A running version you can try yourself.",
    "s4.b": "Operation", "s4.t": "Launch, maintenance and further development.",
    "ask.h": "Get in touch.", "ask.p": "Describe in a few sentences what it is about. You will receive a proposal after a first conversation.",
    "fit": "For companies, clubs and associations, self-employed people and founders.",
    "ab.e": "Who is behind it", "ab.p": "ArcAxis is a development studio in Munich. You talk directly to the person who builds your solution: Selim M. Ayrilmaz.",
    "f.i": "Imprint", "f.p": "Privacy",
  };
  const orig = new WeakMap();
  const store = (() => { try { const k = "__t"; localStorage.setItem(k, "1"); localStorage.removeItem(k); return localStorage; } catch { return null; } })();
  const detect = () => {
    const q = new URLSearchParams(location.search).get("lang"); if (q === "de" || q === "en") return q;
    try { const s = store && store.getItem("ax.lang"); if (s === "de" || s === "en") return s; } catch { /* ignore */ }
    return (navigator.language || "de").toLowerCase().startsWith("de") ? "de" : "en";
  };
  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (!orig.has(el)) orig.set(el, el.textContent);
      const v = lang === "en" ? EN[el.dataset.i18n] : orig.get(el);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    if (lang === "en") document.title = "ArcAxis – Software, made to measure"; else document.title = "ArcAxis – Softwarelösungen nach Maß";
  }
  let lang = detect();
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => { lang = b.dataset.lang; try { store && store.setItem("ax.lang", lang); } catch { /* ignore */ } apply(lang); }));
  apply(lang);
})();
