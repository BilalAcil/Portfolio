// ===== LEGAL NOTICE =====
(function () {
  const el = document.getElementById('legal-date');
  if (!el) return;
  const now = new Date();
  const lang = currentLang();
  el.textContent = now.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
})();

document.getElementById('nav-logo').addEventListener('click', () => {
  if (legalNotice.classList.contains('active')) closeLegal();
  springScroll(0);
});

function closeLegal() {
  legalNotice.classList.remove('active');
  mainSections.forEach(s => s.classList.remove('d-none'));
  springScroll(0);
}

footerLegal.addEventListener('click', e => {
  e.preventDefault();
  if (legalNotice.classList.contains('active')) {
    closeLegal();
  } else {
    mainSections.forEach(s => s.classList.add('d-none'));
    legalNotice.classList.add('active');
    setLang(currentLang());
    requestAnimationFrame(() => springScroll(legalNotice.offsetTop));
  }
});

legalBack.addEventListener('click', closeLegal);

