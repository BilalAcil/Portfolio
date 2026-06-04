// ===== LEGAL NOTICE ELEMENTS =====
const legalNotice = document.getElementById('legal-notice');
const legalBack = document.getElementById('legal-back');
const footerLegal = document.querySelector('.footer-legal');
const mainSections = ['why-me', 'my-skills', 'my-projects', 'references', 'contact']
  .map(cls => document.querySelector('.' + cls));

// ===== SCROLL ANCHORS =====
function getScrollTarget(hash) {
  const el = document.querySelector(hash);
  if (!el) return 0;
  return el.getBoundingClientRect().top + window.scrollY;
}

document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    if (legalNotice.classList.contains('active')) closeLegal();
    const hash = link.getAttribute('href');
    let y = getScrollTarget(hash);
    if (window.innerWidth > 1000 && (hash === '#skills' || hash === '#projects')) {
      y -= 104;
    }
    if (y) springScroll(y);
  });
});

// ===== ACTIVE NAV LINK (SCROLL SPY) =====
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.7 });

['home', 'why-me', 'skills', 'projects', 'contact'].forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// Talk button scroll to contact
const talkButton = document.querySelector('.talk-button-container img');
if (talkButton) {
  talkButton.addEventListener('click', () => {
    springScroll(getScrollTarget('#contact'));
  });
}

const talkButtonMobile = document.querySelector('.talk-button-mobile img');
if (talkButtonMobile) {
  talkButtonMobile.addEventListener('click', () => {
    springScroll(getScrollTarget('#contact'));
  });
}

// ===== REFERENCES SCROLLBAR FADE =====
const refCards = document.querySelector('.references-cards');
if (refCards) {
  let scrollFadeTimer;
  refCards.addEventListener('scroll', () => {
    refCards.classList.add('scrolling');
    clearTimeout(scrollFadeTimer);
    scrollFadeTimer = setTimeout(() => {
      refCards.classList.remove('scrolling');
    }, 500);
  });

  if (window.innerWidth <= 700 && window.innerWidth > 650) {
    refCards.scrollLeft = (refCards.scrollWidth - refCards.clientWidth) / 2;
  }
}

