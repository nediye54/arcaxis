/* Referenzen: sanftes Einblenden, leichtes Kippen der Fenster, Lichtschein am Zeiger – nur bei feinem Zeiger und ohne reduzierte Bewegung */
(() => {
  "use strict";
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window && !calm) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((el) => io.observe(el));
  } else els.forEach((el) => el.classList.add("in"));
  if (calm || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const glow = document.querySelector(".glow");
  let raf = 0, mx = 0, my = 0;
  addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY;
    if (!raf) raf = requestAnimationFrame(() => { raf = 0; if (glow) { glow.style.setProperty("--mx", mx + "px"); glow.style.setProperty("--my", my + "px"); } });
  }, { passive: true });
  document.querySelectorAll("[data-tilt]").forEach((st) => {
    st.addEventListener("pointermove", (e) => {
      const r = st.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      st.style.setProperty("--ry", (x * 7).toFixed(2) + "deg");
      st.style.setProperty("--rx", (-y * 5).toFixed(2) + "deg");
    });
    st.addEventListener("pointerleave", () => { st.style.setProperty("--ry", "0deg"); st.style.setProperty("--rx", "0deg"); });
  });
})();
