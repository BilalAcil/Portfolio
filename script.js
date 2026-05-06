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

// ===== LANGUAGE SWITCHER =====
const btnDe = document.getElementById('lang-de');
const btnEn = document.getElementById('lang-en');

function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    if (el.getAttribute('translate') === 'no') return;
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  btnDe.classList.toggle('active', lang === 'de');
  btnEn.classList.toggle('active', lang === 'en');

  localStorage.setItem('lang', lang);
}

btnDe.addEventListener('click', () => setLang('de'));
btnEn.addEventListener('click', () => setLang('en'));

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

// ===== PROJECTS DATA =====
const projectsData = [
  {
    tab: '1. Pokédex',
    duration: { de: 'Dauer: 1 Woche', en: 'Duration: 1 week' },
    blocks: [
      {
        heading: { de: 'Über das Projekt', en: 'About the project' },
        text: { de: 'Interaktives Pokémon-Trainer-Register zur strukturierten und benutzerfreundlichen Darstellung von Pokémon-Daten.', en: 'Interactive Pokémon trainer registry designed for the structured and user-friendly presentation of Pokémon data.' }
      },
      {
        heading: { de: 'Wie ich meinen Arbeitsprozess organisiert habe', en: 'How I organised my work process' },
        headingClass: 'h4-bottom',
        text: { de: 'Modularer Entwicklungsansatz mit wiederverwendbaren Komponenten, einheitlichen Namenskonventionen und Fokus auf sauberen, wartbaren Code.', en: 'Modular development approach with reusable components, consistent naming conventions, and a focus on clean, maintainable code.' }
      },
      {
        heading: { de: 'Was ich gelernt habe', en: 'What I have learnt' },
        headingClass: 'h4-bottom',
        text: { de: 'Ich habe meine Fähigkeiten in den Bereichen Projektstruktur, wiederverwendbare Komponenten und das Schreiben von sauberem, wartbarem Code verbessert.', en: 'Improved my skills in project structure, reusable components, and writing clean, maintainable code.' }
      }
    ],
    techs: ['HTML.png', 'JS.png', 'CSS.png'],
    img: 'Pokedex.png',
    live: '#',
    github: '#'
  },
  {
    tab: '2. Join',
    duration: { de: 'Dauer: 5 Wochen', en: 'Duration: 5 weeks' },
    blocks: [
      {
        heading: { de: 'Über das Projekt', en: 'About the project' },
        text: { de: 'Ein Projektmanagement-Tool zur Visualisierung von Aufgaben und Verantwortlichkeiten im Team mit Fokus auf übersichtliche Statusverwaltung und klare Aufgabenverteilung.', en: 'A project management tool for visualizing tasks and responsibilities within the team, focusing on clear status management and task allocation.' }
      },
      {
        heading: { de: 'Wie ich meinen Arbeitsprozess organisiert habe', en: 'How I organised my work process' },
        headingClass: 'h4-bottom',
        text: { de: 'Klare Aufgabenverteilung über Git-Branches und regelmäßige Abstimmungen im Team. Strukturierter Code mit Fokus auf Lesbarkeit und konsistente Namenskonventionen.', en: 'Clear task distribution via Git branches and regular team check-ins. Structured code with a focus on readability and consistent naming conventions.' }
      },
      {
        heading: { de: 'Meine Gruppenarbeitserfahrung', en: 'My group work experience' },
        headingClass: 'h4-bottom',
        text: { de: 'Team von 4 Personen. Gemeinsame Entwicklung einer Web-App mit geteilter Verantwortung für Frontend und Firebase-Anbindung – mit enger Zusammenarbeit über Git.', en: 'Team of 4 people. Collaborative development of a web app with shared responsibility for the frontend and Firebase integration – with close cooperation via Git.' }
      }
    ],
    techs: ['HTML.png', 'JS.png', 'CSS.png', 'Git.png', 'Firebase.png'],
    img: 'Join.png',
    live: '#',
    github: '#'
  },
  {
    tab: '3. El Pollo Loco',
    duration: { de: 'Dauer: 3 Wochen', en: 'Duration: 3 weeks' },
    blocks: [
      {
        heading: { de: 'Über das Projekt', en: 'About the project' },
        text: { de: 'Ein Jump-and-Run-Spiel mit eigener Spiellogik, Animationen und Gegnern – entwickelt mit JavaScript und objektorientierter Programmierung.', en: 'A jump-and-run game with custom game logic, animations and enemies — built with JavaScript and object-oriented programming.' }
      },
      {
        heading: { de: 'Wie ich meinen Arbeitsprozess organisiert habe', en: 'How I organised my work process' },
        headingClass: 'h4-bottom',
        text: { de: 'Klare Klassenstruktur mit getrennten Verantwortlichkeiten für Spieler, Gegner und Umgebung. Schrittweise Entwicklung von der Grundmechanik bis zur fertigen Spielerfahrung.', en: 'Clear class structure with separated responsibilities for player, enemies and environment. Step-by-step development from core mechanics to a complete game experience.' }
      },
      {
        heading: { de: 'Meine Gruppenarbeitserfahrung', en: 'My group work experience' },
        headingClass: 'h4-bottom',
        text: { de: 'Objektorientierung in der Praxis: Vererbung, Kapselung und wiederverwendbare Klassen. Außerdem ein tiefes Verständnis für Game Loops, Kollisionserkennung und Animationssteuerung.', en: 'OOP in practice: inheritance, encapsulation and reusable classes. Plus a deep understanding of game loops, collision detection and animation control.' }
      }
    ],
    techs: ['HTML.png', 'JS.png', 'CSS.png'],
    img: 'El-Pollo-Loco.png',
    live: '#',
    github: '#'
  },
  {
    tab: '4. DA Bubble',
    blocks: [
      {
        heading: { de: 'Über das Projekt', en: 'About the project' },
        text: { de: 'Ein Business Chat Client für die geschäftliche Teamkommunikation – entwickelt im Team mit Angular, TypeScript und Firebase mit Fokus auf Echtzeit-Messaging und einer intuitiven Benutzeroberfläche.', en: 'A business chat client for professional team communication – built with Angular, TypeScript and Firebase, focusing on real-time messaging and an intuitive user interface.' }
      }
    ],
    techs: ['Angular.png', 'TS.png', 'Firebase.png'],
    img: null,
    live: null,
    github: null
  }
];

// ===== PROJECTS RENDER =====
function renderProjects() {
  const tabsEl = document.getElementById('project-tabs');
  const panelsEl = document.getElementById('project-panels');

  projectsData.forEach((project, i) => {
    // Tab button
    const btn = document.createElement('button');
    btn.className = 'project-tab' + (i === 0 ? ' active' : '');
    btn.dataset.tab = i;
    btn.textContent = project.tab;
    tabsEl.appendChild(btn);

    // Blocks HTML
    const blocksHTML = project.blocks.map((block, j) => {
      const hClass = block.headingClass ? ` class="${block.headingClass}"` : '';
      const header = j === 0
        ? `<div class="project-div">
            <h4 data-de="${block.heading.de}" data-en="${block.heading.en}"${hClass}></h4>
            ${project.duration ? `<span class="project-duration" data-de="${project.duration.de}" data-en="${project.duration.en}"></span>` : ''}
          </div>`
        : `<h4 data-de="${block.heading.de}" data-en="${block.heading.en}"${hClass}></h4>`;

      return `<div class="project-block">
        <div class="project-dot"></div>
        <div>
          ${header}
          <p data-de="${block.text.de}" data-en="${block.text.en}"></p>
        </div>
      </div>`;
    }).join('');

    // Tech icons HTML
    const techsHTML = project.techs.map(t =>
      `<img src="./assets/icons/technologie icons/${t}" alt="${t.replace('.png', '')}">`
    ).join('');

    // Screenshot HTML
    const screenshotHTML = project.img
      ? `<img src="./assets/images/${project.img}" alt="${project.tab}">`
      : `<span>Coming soon...</span>`;

    // Buttons HTML
    const buttonsHTML = [
      project.live ? `<a href="${project.live}" class="btn-live">Live Test</a>` : '',
      project.github ? `<a href="${project.github}" class="btn-gh">GitHub</a>` : ''
    ].join('');

    // Full panel HTML
    panelsEl.innerHTML += `
      <div class="project-panel${i === 0 ? ' active' : ''}">
        <div class="panel-left">${blocksHTML}</div>
        <div class="panel-right">
          <div class="panel-tech">
            <span>Technologies</span>
            <div class="tech-icons">${techsHTML}</div>
          </div>
          <div class="panel-screenshot${project.img ? '' : ' panel-screenshot--soon'}">${screenshotHTML}</div>
          <div class="panel-buttons">${buttonsHTML}</div>
        </div>
      </div>`;
  });

  // Tab switching
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
}

renderProjects();

// Restore saved language — must run after renderProjects()
const savedLang = localStorage.getItem('lang') || 'en';
setLang(savedLang);

// ===== SCROLL ANCHORS =====
const scrollAnchors = {
  '#why-me': 650,
  '#skills': 1200,
  '#projects': 1900,
  '#contact': 3500,
};

document.querySelector('.scroll-indicator img').addEventListener('click', () => {
  springScroll(scrollAnchors['#why-me']);
});

document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const y = scrollAnchors[link.getAttribute('href')];
    if (y !== undefined) springScroll(y);
  });
});

// ===== PRIVACY OVERLAY =====
const privacyOverlay = document.getElementById('privacy-overlay');
const privacyTrigger = document.getElementById('privacy-trigger');
const privacyClose = document.getElementById('privacy-close');

privacyTrigger.addEventListener('click', e => {
  e.preventDefault();
  privacyOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});

privacyClose.addEventListener('click', () => {
  privacyOverlay.classList.remove('open');
  document.body.style.overflow = '';
});

privacyOverlay.addEventListener('click', e => {
  if (e.target === privacyOverlay) {
    privacyOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ===== FORM VALIDATION =====
const form = document.getElementById('contact-form');
const sendBtn = form.querySelector('.btn-send');
const privacyCheckbox = document.getElementById('privacy');

const validators = {
  name: v => v.trim().length >= 2,
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  message: v => v.trim().length >= 10,
};

const errorTexts = {
  de: {
    name: 'Bitte gib deinen Namen ein (mind. 2 Zeichen).',
    email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    message: 'Deine Nachricht muss mind. 10 Zeichen lang sein.',
  },
  en: {
    name: 'Please enter your name (at least 2 characters).',
    email: 'Please enter a valid email address.',
    message: 'Your message must be at least 10 characters long.',
  }
};

function currentLang() {
  return document.documentElement.getAttribute('data-lang') || 'en';
}

function showError(field, msg) {
  const group = field.closest('.form-group');
  let err = group.querySelector('.field-error');
  if (!err) {
    err = document.createElement('span');
    err.className = 'field-error';
    group.appendChild(err);
  }
  err.textContent = msg;
  field.classList.add('input-error');
}

function clearError(field) {
  const group = field.closest('.form-group');
  const err = group.querySelector('.field-error');
  if (err) err.textContent = '';
  field.classList.remove('input-error');
}

function validateField(field) {
  const name = field.name;
  if (!validators[name]) return true;
  const valid = validators[name](field.value);
  valid ? clearError(field) : showError(field, errorTexts[currentLang()][name]);
  return valid;
}

function isFormValid() {
  return validators.name(form.name.value)
    && validators.email(form.email.value)
    && validators.message(form.message.value)
    && privacyCheckbox.checked;
}

function updateSendBtn() {
  const active = isFormValid();
  sendBtn.disabled = !active;
  sendBtn.classList.toggle('btn-disabled', !active);
}

updateSendBtn();

['name', 'email', 'message'].forEach(name => {
  form[name].addEventListener('blur', () => {
    validateField(form[name]);
    updateSendBtn();
  });
});

privacyCheckbox.addEventListener('change', updateSendBtn);

form.addEventListener('submit', e => {
  e.preventDefault();
  const lang = currentLang();
  const successMsg = lang === 'de'
    ? 'Danke! Deine Nachricht wurde erfolgreich gesendet.'
    : 'Thank you! Your message has been sent successfully.';
  form.innerHTML = `<div class="form-success">${successMsg}</div>`;
});

// ===== LEGAL NOTICE =====
const legalNotice = document.getElementById('legal-notice');
const legalBack = document.getElementById('legal-back');
const footerLegal = document.querySelector('.footer-legal');
const mainSections = ['why-me', 'my-skills', 'my-projects', 'references', 'contact']
  .map(cls => document.querySelector('.' + cls));

footerLegal.addEventListener('click', e => {
  e.preventDefault();
  mainSections.forEach(s => s.classList.add('d-none'));
  legalNotice.classList.add('active');
  setLang(currentLang());
  springScroll(0);
});

legalBack.addEventListener('click', () => {
  legalNotice.classList.remove('active');
  mainSections.forEach(s => s.classList.remove('d-none'));
  springScroll(0);
});
