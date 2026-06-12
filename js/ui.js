// ===== MOBILE BURGER MENU =====
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLangDe = document.getElementById('mobile-lang-de');
const mobileLangEn = document.getElementById('mobile-lang-en');

function closeBurgerMenu() {
  mobileMenu.style.animation = 'none';
  mobileMenu.offsetHeight;
  mobileMenu.style.animation = '';
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
    mobileMenu.style.animation = 'none';
    mobileMenu.offsetHeight;
    mobileMenu.style.animation = '';
    mobileMenu.classList.add('active');
    burgerBtn.classList.add('open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  } else {
    closeBurgerMenu();
  }
});

mobileLangDe.addEventListener('click', () => { setLang('de'); closeBurgerMenu(); });
mobileLangEn.addEventListener('click', () => { setLang('en'); closeBurgerMenu(); });

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    closeBurgerMenu();
    if (legalNotice.classList.contains('active')) {
      legalNotice.classList.remove('active');
      mainSections.forEach(s => s.classList.remove('d-none'));
    }
    if (privacyPolicy.classList.contains('active')) {
      privacyPolicy.classList.remove('active');
      mainSections.forEach(s => s.classList.remove('d-none'));
    }
    const y = getScrollTarget(link.getAttribute('href'));
    if (y) springScroll(y);
  });
});

// ===== FOOTER ICON HOVER IMAGES =====
const footerIconImages = document.querySelectorAll('.footer-right img[data-hover]');
footerIconImages.forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;
  const preload = new Image();
  preload.src = hoverSrc;

  const parentLink = img.closest('.footer-icon');
  if (!parentLink) return;

  parentLink.addEventListener('mouseenter', () => { img.src = hoverSrc; });
  parentLink.addEventListener('mouseleave', () => { img.src = originalSrc; });
  parentLink.addEventListener('focus', () => { img.src = hoverSrc; });
  parentLink.addEventListener('blur', () => { img.src = originalSrc; });
});
