// Jahr im Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

// Mobile Navigation
function toggleNav() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("nav-open");
}

// Scroll Reveal
const revealEls = Array.from(document.querySelectorAll(".reveal"));
function handleReveal() {
  const trigger = window.innerHeight * 0.85;
  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) el.classList.add("visible");
  });
}
window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Fake submit
function fakeSubmit() {
  const note = document.getElementById("cta-note");
  const email = document.getElementById("email");
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  note.textContent = "Danke! Dein (fiktiver) Session‑Link wurde generiert.";
  note.style.color = "#e4d3ff";
}
