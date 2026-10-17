/* ArcAxis – Sprache (DE/EN), ohne Cookies; die Wahl liegt nur im lokalen Speicher */
(() => {
  "use strict";
  const EN = {
    "skip": "Skip to content", "h": "Software.", "sub": "ArcAxis · Munich", "wt": "Selected work",
    "r1": "Structural analysis", "r2": "Club diagnosis", "r3": "Journal",
    "n": "Enquiries by e-mail only:", "f.i": "Imprint", "f.p": "Privacy",
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
    document.title = "ArcAxis";
  }
  let lang = detect();
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => { lang = b.dataset.lang; try { store && store.setItem("ax.lang", lang); } catch { /* ignore */ } apply(lang); }));
  apply(lang);
})();
