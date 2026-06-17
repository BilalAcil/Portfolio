// ===== PROJECTS DATA =====
const projectsData = [
  {
    tab: '1. Pokédex',
    techNames: ['HTML', 'JavaScript', 'CSS'],
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
    img: 'Pokedex.webp',
    live: 'https://pokedex.bilal-acil.de',
    github: 'https://github.com/BilalAcil/pokedex'
  },
  {
    tab: '2. Join',
    techNames: ['HTML', 'CSS', 'JavaScript', 'Git', 'Supabase'],
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
    live: 'https://join.bilal-acil.de',
    github: 'https://github.com/BilalAcil/Join'
  },
  {
    tab: '3. El Pollo Loco',
    techNames: ['HTML', 'JavaScript', 'CSS'],
    duration: { de: 'Dauer: 3 Wochen', en: 'Duration: 3 weeks' },
    blocks: [
      {
        heading: { de: 'Über das Projekt', en: 'About the project' },
        text: { de: 'Ein Jump-and-Run-Spiel mit eigener Spiellogik, Animationen und Gegnern – entwickelt mit JavaScript und objektorientierter Programmierung.', en: 'A jump-and-run game with custom game logic, animations and enemies – built with JavaScript and object-oriented programming.' }
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
    live: 'https://elpolloloco.bilal-acil.de',
    github: 'https://github.com/BilalAcil/El-Pollo-Loco'
  },
  {
    tab: '4. DA Bubble',
    tabShort: { de: '4. Laufendes Projekt', en: '4. Ongoing Project' },
    techNames: ['Angular', 'TypeScript', 'Supabase'],
    blocks: [
      {
        heading: { de: 'Über das Projekt', en: 'About the project' },
        text: { de: 'An diesem Projekt arbeite ich aktuell. Mit Fokus auf sauberer Planung, wartbarem Code und durchdachter Umsetzung lerne ich dabei kontinuierlich neue Technologien und verbessere meine Fähigkeiten Schritt für Schritt.', en: 'This is a project I am currently working on. With a focus on clean planning, maintainable code and a well-thought-out execution, I keep learning new technologies and continually improve my skills.' }
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
    const tabFullHTML = project.tabShort
      ? `<span data-de="${project.tabShort.de}" data-en="${project.tabShort.en}">${project.tabShort.en}</span>`
      : project.tab;
    const tabShortHTML = project.tabShort
      ? `<span class="tab-short-label" data-de="${project.tabShort.de}" data-en="${project.tabShort.en}">${project.tabShort.en}</span>`
      : `<span class="tab-short-num">${i + 1}.</span> <span class="tab-short-label" data-de="Projekt" data-en="Project">Project</span>`;
    btn.innerHTML = `<span class="tab-full">${tabFullHTML}</span><span class="tab-short">${tabShortHTML}</span>`;
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

    // Mobile header HTML (name + tech text + duration)
    const techText = project.techNames ? project.techNames.join(', ') : '';
    const mobileNameHTML = project.tabShort
      ? `data-de="${project.tabShort.de}" data-en="${project.tabShort.en}">${project.tabShort.en}`
      : `>${project.tab.replace(/^\d+\.\s*/, '')}`;
    const mobileHeaderHTML = `<div class="panel-header-mobile">
      <h3 class="panel-project-name" ${mobileNameHTML}</h3>
      ${techText ? `<span data-de="Technologien: ${techText}" data-en="Technologies: ${techText}"></span>` : ''}
      ${project.duration ? `<span data-de="${project.duration.de}" data-en="${project.duration.en}"></span>` : ''}
    </div>`;
    const mobileTechTextHTML = techText ? `<div class="panel-tech-text" data-de="Technologien: ${techText}" data-en="Technologies: ${techText}"></div>` : '';
    const mobileDurationTextHTML = project.duration ? `<div class="panel-duration-text" data-de="${project.duration.de}" data-en="${project.duration.en}"></div>` : '';

    // Screenshot HTML
    const screenshotHTML = project.img
      ? `<img src="./assets/images/${project.img}" alt="${project.tab}">`
      : `<img src="./assets/images/comin-soon-img.png" alt="Coming soon">`;

    // Buttons HTML
    const buttonsHTML = [
      project.live ? `<a href="${project.live}" class="btn-live" target="_blank" rel="noopener">Live Test</a>` : '',
      project.github ? `<a href="${project.github}" class="btn-gh" target="_blank" rel="noopener">GitHub</a>` : ''
    ].join('');

    // Full panel HTML
    panelsEl.innerHTML += `
      <div class="project-panel${i === 0 ? ' active' : ''}">
        <div class="panel-left">${blocksHTML}</div>
        <div class="panel-right">
          ${mobileHeaderHTML}
          <div class="panel-tech">
            <span>Technologies</span>
            <div class="tech-icons">${techsHTML}</div>
          </div>
          ${mobileTechTextHTML}
          ${mobileDurationTextHTML}
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

// Restore saved language – must run after renderProjects()
const savedLang = localStorage.getItem('lang') || 'en';
setLang(savedLang);

