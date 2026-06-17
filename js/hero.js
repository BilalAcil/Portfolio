// ===== TYPING EFFECT =====
const typingEl = document.querySelector('.location-text span');
const locationIcon = document.getElementById('location-icon');

const typingDataEN = [
  { text: 'Bilal Acil',          icon: 'assets/images/Bilal_Acil_Titel.png' },
  { text: 'Based in Ingolstadt', icon: 'assets/icons/Location.png' },
  { text: 'Web Developer',       icon: 'assets/icons/Web Developer.png' },
  { text: 'Clean Code',          icon: 'assets/icons/Clean Code.png' },
  { text: 'Modern Design',       icon: 'assets/icons/Modern Design.png' },
  { text: 'User First',          icon: 'assets/icons/User First.png' },
  { text: 'Always Learning',     icon: 'assets/icons/Always Learning.png' },
  { text: 'Building Solutions',  icon: 'assets/icons/Building Solutions.png' },
];

const typingDataDE = [
  { text: 'Bilal Acil',          icon: 'assets/images/Bilal_Acil_Titel.png' },
  { text: 'In Ingolstadt',       icon: 'assets/icons/Location.png' },
  { text: 'Webentwickler',       icon: 'assets/icons/Web Developer.png' },
  { text: 'Clean Code',          icon: 'assets/icons/Clean Code.png' },
  { text: 'Modernes Design',     icon: 'assets/icons/Modern Design.png' },
  { text: 'Nutzerzentriert',     icon: 'assets/icons/User First.png' },
  { text: 'Stets am Lernen',     icon: 'assets/icons/Always Learning.png' },
  { text: 'Ideen umsetzen',      icon: 'assets/icons/Building Solutions.png' },
];

let tIndex = 0;
let cIndex = 0;
let deleting = false;
let typingTimer = null;

function getTypingData() {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  return lang === 'de' ? typingDataDE : typingDataEN;
}

function type() {
  const { text, icon } = getTypingData()[tIndex];

  if (deleting) {
    cIndex--;
    typingEl.textContent = text.slice(0, cIndex);
    if (cIndex === 0) {
      deleting = false;
      tIndex = (tIndex + 1) % getTypingData().length;
      locationIcon.style.opacity = '0';
      setTimeout(() => {
        locationIcon.src = getTypingData()[tIndex].icon;
        locationIcon.style.opacity = '1';
      }, 150);
      typingTimer = setTimeout(type, 400);
      return;
    }
    typingTimer = setTimeout(type, 40);
  } else {
    cIndex++;
    typingEl.textContent = text.slice(0, cIndex);
    if (cIndex === text.length) {
      deleting = true;
      typingTimer = setTimeout(type, 1800);
      return;
    }
    typingTimer = setTimeout(type, 80);
  }
}

new MutationObserver(() => {
  clearTimeout(typingTimer);
  tIndex = 0;
  cIndex = 0;
  deleting = false;
  typingEl.textContent = '';
  locationIcon.src = getTypingData()[0].icon;
  type();
}).observe(document.documentElement, { attributeFilter: ['data-lang'] });

type();

// ===== MARIO-PILZ: HERO-CONTENT WAECHST AUF GROSSEN MONITOREN =====
(function () {
  const hero = document.querySelector('.hero');
  const content = document.querySelector('.hero-content');
  if (!hero || !content) return;

  const TOP_GAP = 40;   // etwas Luft nach oben lassen
  const MAX_SCALE = 1.5; // nicht uebertreiben

  function computeScale() {
    // Natuerliche (unskalierte) Masse messen – offsetSize ignoriert transform
    const natH = content.offsetHeight;
    const natW = content.offsetWidth;
    if (!natH || !natW) return 1;

    const availH = hero.clientHeight - TOP_GAP;
    const scaleH = availH / natH;
    const scaleW = window.innerWidth / natW; // nicht breiter als das Fenster

    let scale = Math.min(scaleH, scaleW, MAX_SCALE);
    return scale > 1.02 ? scale : 1; // nur wachsen, wenn sich's lohnt
  }

  function applyScale() {
    content.style.setProperty('--hero-scale', computeScale().toFixed(3));
  }

  // Erst nach der Flying-Circle-Animation (2.7s Delay + 2.4s Dauer = 5.1s)
  setTimeout(applyScale, 5100);

  // Bei Groessenaenderung neu berechnen (debounced)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(applyScale, 150);
  });
})();

