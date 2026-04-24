// ===== LANGUAGE SWITCHER =====
const btnDe = document.getElementById('lang-de');
const btnEn = document.getElementById('lang-en');

function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);

  // Update nav links & translatable elements
  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    if (el.getAttribute('translate') === 'no') return;
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

// ===== TYPING EFFECT =====
const typingEl = document.querySelector('.location-text span');
const locationIcon = document.getElementById('location-icon');

const typingData = [
  { text: 'Bilal Acil', icon: 'assets/images/Bilal_Acil_Titel.png' },
  { text: 'Based in Ingolstadt', icon: 'assets/icons/Location.png' },
  { text: 'Web Developer', icon: 'assets/icons/Web Developer.png' },
  { text: 'Clean Code', icon: 'assets/icons/Clean Code.png' },
  { text: 'Modern Design', icon: 'assets/icons/Modern Design.png' },
  { text: 'User First', icon: 'assets/icons/User First.png' },
  { text: 'Always Learning', icon: 'assets/icons/Always Learning.png' },
  { text: 'Building Solutions', icon: 'assets/icons/Building Solutions.png' },
];

let tIndex = 0;
let cIndex = 0;
let deleting = false;

function type() {
  const { text, icon } = typingData[tIndex];

  if (deleting) {
    cIndex--;
    typingEl.textContent = text.slice(0, cIndex);
    if (cIndex === 0) {
      deleting = false;
      tIndex = (tIndex + 1) % typingData.length;
      locationIcon.style.opacity = '0';
      setTimeout(() => {
        locationIcon.src = typingData[tIndex].icon;
        locationIcon.style.opacity = '1';
      }, 150);
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 40);
  } else {
    cIndex++;
    typingEl.textContent = text.slice(0, cIndex);
    if (cIndex === text.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 80);
  }
}

type();

// ===== PROJECTS TABS =====
const projectTabs = document.querySelectorAll('.project-tab');
const projectPanels = document.querySelectorAll('.project-panel');

projectTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const index = parseInt(tab.dataset.tab);
    projectTabs.forEach(t => t.classList.remove('active'));
    projectPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    projectPanels[index].classList.add('active');
  });
});
