// ===== LANGUAGE SWITCHER =====
const btnDe = document.getElementById('lang-de');
const btnEn = document.getElementById('lang-en');

function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);

  // Update nav links & translatable elements
  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Update active button
  btnDe.classList.toggle('active', lang === 'de');
  btnEn.classList.toggle('active', lang === 'en');

  localStorage.setItem('lang', lang);
}

btnDe.addEventListener('click', () => setLang('de'));
btnEn.addEventListener('click', () => setLang('en'));

// Restore saved language
const savedLang = localStorage.getItem('lang') || 'en';
setLang(savedLang);
