/* ArcAxis – Sprache (DE/EN), ohne Cookies; die Wahl liegt nur im lokalen Speicher */
(() => {
  "use strict";
  const EN = Object.assign({},{"strukturcheck.f0": "Analysis modes", "strukturcheck.f1": "Languages", "strukturcheck.f2": "Cookies", "strukturcheck.t0": "Web application", "strukturcheck.t1": "AI evaluation", "strukturcheck.t2": "Payment", "strukturcheck.t3": "Team features", "strukturcheck.t4": "PDF reports", "strukturcheck.o": "Structured AI analysis for situations, teams and organisations.", "goalconnect.f0": "Questions to a finding", "goalconnect.f1": "Languages", "goalconnect.f2": "Click to the PDF", "goalconnect.t0": "Web application", "goalconnect.t1": "PDF reports", "goalconnect.t2": "AI short report", "goalconnect.t3": "Order management", "goalconnect.t4": "Automation", "goalconnect.o": "Structural diagnosis for professional football clubs – from findings to the board PDF.", "core.f0": "Languages", "core.f1": "Core, one thought", "core.t0": "App", "core.t1": "AI reflection", "core.t2": "Privacy", "core.t3": "Security", "core.o": "A calm emotion journal with AI-assisted reflection.", "goalcamp.f0": "Scores", "goalcamp.f1": "on every story", "goalcamp.t0": "Web platform", "goalcamp.t1": "Live data", "goalcamp.t2": "News with sources", "goalcamp.t3": "Analysis", "goalcamp.t4": "Multilingual", "goalcamp.o": "Football platform: fixtures, live scores, news and analysis.", "rakehound.f0": "Environments: staging and production", "rakehound.f1": "Reports and views", "rakehound.t0": "Web application", "rakehound.t1": "API", "rakehound.t2": "Tracking", "rakehound.t3": "Reporting", "rakehound.t4": "Staging & production", "rakehound.o": "Affiliate platform: tracking, commission models, payouts and reports.", "rake.priv": "Internal · not public", "quoten.o": "Odds comparison: market average from 47 bookmaker sources, own model, ten sports.", "rh.e": "ArcAxis · Selected work", "rh.h": "References.", "rh.s": "Six products. All in operation.", "re.t": "Enquiries", "re.p": "Enquiries by e-mail:", "f.h": "Home"},{
    "skip": "Skip to content", "h": "Software.", "sub": "ArcAxis · Munich", "wt": "Selected work",
    "r1": "Structural analysis", "r2": "Club diagnosis", "r3": "Journal",
    "n": "Enquiries by e-mail only:", "f.r": "References", "f.i": "Imprint", "f.p": "Privacy",
  });
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
    document.title = "ArcAxis";
  }
  let lang = detect();
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => { lang = b.dataset.lang; try { store && store.setItem("ax.lang", lang); } catch { /* ignore */ } apply(lang); }));
  apply(lang);
})();
