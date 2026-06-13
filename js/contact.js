// ===== PRIVACY POLICY =====
const privacyPolicy = document.getElementById('privacy-policy');
const privacyTrigger = document.getElementById('privacy-trigger');
const privacyBack = document.getElementById('privacy-back');

function closePrivacy() {
  privacyPolicy.classList.remove('active');
  mainSections.forEach(s => s.classList.remove('d-none'));
  springScroll(getScrollTarget('#contact'));
}

privacyTrigger.addEventListener('click', e => {
  e.preventDefault();
  mainSections.forEach(s => s.classList.add('d-none'));
  privacyPolicy.classList.add('active');
  requestAnimationFrame(() => springScroll(privacyPolicy.offsetTop));
});

privacyBack.addEventListener('click', closePrivacy);

// ===== FORM VALIDATION =====
const form = document.getElementById('contact-form');
const originalFormHTML = form.innerHTML;
let sendBtn = form.querySelector('.btn-send');
let privacyCheckbox = document.getElementById('privacy');

const validators = {
  name: v => v.trim().length >= 2,
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  message: v => v.trim().length >= 10,
};

const errorTexts = {
  de: {
    name: 'Mind. 2 Zeichen lang.',
    email: 'Ungültige E-Mail-Adresse.',
    message: 'Mind. 10 Zeichen lang.',
    privacy: 'Bitte Datenschutzerklärung akzeptieren.',
  },
  en: {
    name: 'Min. 2 characters long.',
    email: 'Invalid email address.',
    message: 'Min. 10 characters long.',
    privacy: 'Please accept the privacy policy.',
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

function areFieldsValid() {
  return validators.name(form.name.value)
    && validators.email(form.email.value)
    && validators.message(form.message.value);
}

function showPrivacyError() {
  const box = privacyCheckbox.closest('.form-checkbox');
  let err = box.querySelector('.field-error');
  if (!err) {
    err = document.createElement('span');
    err.className = 'field-error';
    box.appendChild(err);
  }
  err.textContent = errorTexts[currentLang()].privacy;
  privacyCheckbox.classList.add('input-error');
}

function clearPrivacyError() {
  const box = privacyCheckbox.closest('.form-checkbox');
  const err = box.querySelector('.field-error');
  if (err) err.textContent = '';
  privacyCheckbox.classList.remove('input-error');
}

function updateSendBtn() {
  const active = areFieldsValid();
  sendBtn.disabled = !active;
  sendBtn.classList.toggle('btn-disabled', !active);
}

function initFormFields() {
  sendBtn = form.querySelector('.btn-send');
  privacyCheckbox = document.getElementById('privacy');
  updateSendBtn();

  ['name', 'email', 'message'].forEach(name => {
    form[name].addEventListener('blur', () => {
      validateField(form[name]);
      updateSendBtn();
    });
  });

  privacyCheckbox.addEventListener('change', () => {
    if (privacyCheckbox.checked) clearPrivacyError();
  });
}

function restoreForm() {
  form.innerHTML = originalFormHTML;
  setLang(currentLang());
  initFormFields();
}

initFormFields();

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!areFieldsValid()) {
    updateSendBtn();
    return;
  }
  if (!privacyCheckbox.checked) {
    showPrivacyError();
    return;
  }
  clearPrivacyError();

  if (!window.emailjs) {
    const errMsg = currentLang() === 'de'
      ? 'E-Mail-Service nicht verfÃ¼gbar. Bitte versuche es spÃ¤ter erneut.'
      : 'Email service is not available. Please try again later.';
    alert(errMsg);
    return;
  }

  sendBtn.disabled = true;
  const originalText = sendBtn.textContent;
  sendBtn.textContent = currentLang() === 'de' ? 'Sende...' : 'Sending...';

  const templateParams = {
    Name: form.name.value,
    Email: form.email.value,
    Nachricht: form.message.value,
    to_email: 'kontakt@bilal-acil.de'
  };

  emailjs.send('service_ijq716l', 'template_fi4djrc', templateParams, '5tl1HsbrJ1MBW_ume')
    .then(() => {
      emailjs.send('service_ijq716l', 'template_9fbnu2q', {
        to_email: form.email.value,
        to_name: form.name.value,
      }, '5tl1HsbrJ1MBW_ume');

      const lang = currentLang();
      const successMsg = lang === 'de'
        ? 'Danke! Deine Nachricht wurde erfolgreich gesendet.'
        : 'Thank you! Your message has been sent successfully.';
      form.innerHTML = `<div class="form-success">${successMsg}</div>`;
      setTimeout(restoreForm, 5000);
    })
    .catch(error => {
      console.error('EmailJS send error:', error);
      const lang = currentLang();
      const errorDetails = error && (error.text || error.statusText || error.message || JSON.stringify(error));
      const failMsg = lang === 'de'
        ? `Beim Senden ist ein Fehler aufgetreten. Bitte versuche es noch einmal.\n${errorDetails}`
        : `An error occurred while sending. Please try again.\n${errorDetails}`;
      alert(failMsg);
      sendBtn.disabled = false;
      sendBtn.textContent = originalText;
    });
});

