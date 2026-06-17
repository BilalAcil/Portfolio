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
