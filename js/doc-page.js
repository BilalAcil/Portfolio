// ===== STANDALONE DOC PAGES (Legal Notice / Privacy Policy) =====
(function () {
  const savedLang = localStorage.getItem('lang') || 'en';

  function refreshDate(lang) {
    const el = document.getElementById('legal-date');
    if (!el) return;
    el.textContent = new Date().toLocaleDateString(
      lang === 'de' ? 'de-DE' : 'en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
  }

  setLang(savedLang);
  refreshDate(savedLang);

  document.getElementById('lang-de').addEventListener('click', () => refreshDate('de'));
  document.getElementById('lang-en').addEventListener('click', () => refreshDate('en'));

  // ===== BURGER MENU (Mobil) =====
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeBurgerMenu() {
    mobileMenu.classList.add('closing');
    mobileMenu.addEventListener('animationend', () => {
      mobileMenu.classList.remove('active', 'closing');
    }, { once: true });
    burgerBtn.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burgerBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('active');
    if (isOpen) {
      mobileMenu.classList.remove('closing');
      mobileMenu.classList.add('active');
      burgerBtn.classList.add('open');
      burgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      closeBurgerMenu();
    }
  });

  // Mobile-Sprachschalter
  const mobileLangDe = document.getElementById('mobile-lang-de');
  const mobileLangEn = document.getElementById('mobile-lang-en');
  if (mobileLangDe) mobileLangDe.addEventListener('click', () => { setLang('de'); refreshDate('de'); closeBurgerMenu(); });
  if (mobileLangEn) mobileLangEn.addEventListener('click', () => { setLang('en'); refreshDate('en'); closeBurgerMenu(); });

  // Mobile-Nav-Links: Menü schließen (Navigation zur Startseite läuft normal)
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeBurgerMenu);
  });

  // Footer icon hover swap
  document.querySelectorAll('.footer-right img[data-hover]').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;
    new Image().src = hoverSrc;
    const link = img.closest('.footer-icon');
    if (!link) return;
    link.addEventListener('mouseenter', () => { img.src = hoverSrc; });
    link.addEventListener('mouseleave', () => { img.src = originalSrc; });
  });
})();
