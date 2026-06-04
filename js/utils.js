history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// ===== HERO NAME WIDTH SYNC =====
function syncHeroNameWidth() {
  const name = document.querySelector('.hero-name');
  const title = document.querySelector('.hero-title');
  if (!name || !title) return;
  name.style.width = title.offsetWidth + 'px';
}

document.fonts.ready.then(syncHeroNameWidth);
window.addEventListener('resize', syncHeroNameWidth);

// ===== SPRING SCROLL =====
function springScroll(targetY, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  function easeOutBack(t) {
    const c1 = 0.65;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  }

  function step(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeOutBack(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// ===== EMAILJS =====
if (window.emailjs) {
  emailjs.init('5tl1HsbrJ1MBW_ume');
}

