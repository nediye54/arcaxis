/* ArcAxis – Sprache (DE/EN), ohne Cookies; die Wahl liegt nur im lokalen Speicher */
(() => {
  "use strict";
  const EN = {
    "skip": "Skip to content", "nav.m": "Method", "nav.w": "Tools", "nav.a": "Your own tool",
    "hero.e": "ArcAxis · Software from theory", "hero.h": "From theory to a working tool.",
    "hero.l": "ArcAxis builds analysis tools grounded in a clear body of thought: structured questions in, a traceable diagnosis out.",
    "hero.c1": "The tools", "hero.c2": "Request your own tool",
    "m.e": "What connects them", "m.h": "One theory. Many applications.",
    "m.l": "strukturcheck, GoalConnect and Core look different and share one foundation: the Moral des Gleichgewichts (Morality of Balance). It describes how a system tips when one of eight forces prevails at the expense of another.",
    "p1.h": "Model first.", "p1.p": "Every tool follows the same, publicly documented model. Terms, scales and questions are fixed before the first line of code is written.",
    "p2.h": "Then the question.", "p2.p": "A few targeted questions instead of long forms. The answers become an assessment: what prevails, what is displaced, what follows.",
    "p3.h": "Carefully built.", "p3.p": "Clear texts, multilingual, no cookies and no tracking. Results you can pass on: as a report, as a PDF, with concrete next steps.",
    "w.e": "Three tools, one foundation", "w.h": "What exists so far.", "w.go": "Take a look →",
    "w1.t": "Web · AI-assisted", "w1.p": "For people, teams and organisations. Describe a situation, see in seconds which force prevails – and what to do next.",
    "w2.t": "Web · club diagnosis", "w2.p": "For professional football clubs. Five questions about decision structure – with findings, levels of action and a PDF for the board.",
    "w3.t": "Journal · AI-assisted", "w3.p": "For everyday life. A calm emotion journal that uses AI-assisted reflection to help you recognise your own balance.",
    "a.e": "For your field", "a.h": "Want one too?",
    "a.l": "You have a model, a procedure or a method – so far living in heads, slides or spreadsheets? ArcAxis turns it into a tool that others can use on their own.",
    "a.d": "What we deliver", "s.d": "How it works",
    "d1.b": "Sharpening the model.", "d1.t": "Terms, scales and questions that hold up.",
    "d2.b": "Building the evaluation.", "d2.t": "Rules, AI or both – with clear guardrails and traceable results.",
    "d3.b": "The interface.", "d3.t": "Web application, multilingual, fast and accessible.",
    "d4.b": "The result.", "d4.t": "Report and PDF in your brand’s look.",
    "d5.b": "Operations.", "d5.t": "Hosting, payment and support – up to the first paying user and beyond.",
    "s1.b": "Conversation", "s1.t": "We understand your model and your goal.",
    "s2.b": "Concept", "s2.t": "Questions, evaluation and result on one page.",
    "s3.b": "Prototype", "s3.t": "A working tool you can try yourself.",
    "s4.b": "Operation", "s4.t": "Launch, maintenance and further development.",
    "ask.h": "Get in touch.", "ask.p": "Describe in a few sentences what it is about. You will receive a proposal after a first conversation.",
    "fit": "A good fit for researchers and authors with their own model, consultancies, associations and clubs, coaches and specialists with a procedure that still runs by hand.",
    "ab.e": "Who is behind it", "ab.p": "ArcAxis is run by Selim M. Ayrilmaz, author of the Moral des Gleichgewichts and developer of the tools. ArcAxis is a small studio in Munich: few projects, built with care.",
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
    if (lang === "en") document.title = "ArcAxis – Analysis tools from theory"; else document.title = "ArcAxis – Analysewerkzeuge aus Theorie";
  }
  let lang = detect();
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => { lang = b.dataset.lang; try { store && store.setItem("ax.lang", lang); } catch { /* ignore */ } apply(lang); }));
  apply(lang);
})();
