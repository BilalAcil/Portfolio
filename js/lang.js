// ===== LANGUAGE SWITCHER =====
const btnDe = document.getElementById('lang-de');
const btnEn = document.getElementById('lang-en');

function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    if (el.getAttribute('translate') === 'no') return;
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });

  document.querySelectorAll('[data-src-de][data-src-en]').forEach(el => {
    el.src = el.getAttribute(`data-src-${lang}`);
  });

  btnDe.classList.toggle('active', lang === 'de');
  btnEn.classList.toggle('active', lang === 'en');

  const mBtnDe = document.getElementById('mobile-lang-de');
  const mBtnEn = document.getElementById('mobile-lang-en');
  if (mBtnDe) mBtnDe.classList.toggle('active', lang === 'de');
  if (mBtnEn) mBtnEn.classList.toggle('active', lang === 'en');

  localStorage.setItem('lang', lang);
}

btnDe.addEventListener('click', () => setLang('de'));
btnEn.addEventListener('click', () => setLang('en'));

