document.addEventListener('DOMContentLoaded', function () {
  // --- Burger-Menü (Hamburger) ---
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');
  menuToggle.addEventListener('click', function () {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainMenu.classList.toggle('open');
  });
  menuToggle.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      menuToggle.click();
      e.preventDefault();
    }
  });

  // --- Navigation zwischen den Seiten/Sections ---
  const navButtons = document.querySelectorAll('nav button[data-target]');
  const sections = document.querySelectorAll('main section');
  navButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sections.forEach(sec => {
        if (sec.id === btn.dataset.target) {
          sec.classList.add('active');
          sec.style.display = '';
        } else {
          sec.classList.remove('active');
          sec.style.display = 'none';
        }
      });
      navButtons.forEach(b => b.removeAttribute('aria-current'));
      btn.setAttribute('aria-current', 'page');
    });
  });
  // Zu Beginn nur die aktive Section anzeigen
  sections.forEach(sec => {
    if (!sec.classList.contains('active')) sec.style.display = 'none';
  });

  // --- Profil-Icon Dummy ---
  const profileIcon = document.getElementById('profile-icon');
  if(profileIcon){
    profileIcon.addEventListener('click', function () {
      alert('Profil-Funktion kommt bald!');
    });
  }

  // --- Live-Buttons ---
  const liveBtn = document.getElementById('live-audio-btn');
  const waveBtn = document.getElementById('wave-btn');
  const liveStatus = document.getElementById('live-audio-status');
  const waveAnim = document.getElementById('wave-animation');
  if (liveBtn) {
    liveBtn.addEventListener('click', function () {
      liveStatus.textContent = 'LIVE verbunden!';
      waveBtn.hidden = false;
    });
  }
  if (waveBtn) {
    waveBtn.addEventListener('click', function () {
      waveAnim.hidden = false;
      setTimeout(() => {
        waveAnim.hidden = true;
      }, 2000);
    });
  }

  // --- Statistik-Anzeige ---
  const statsToggle = document.querySelector('.stats-toggle');
  const statsContent = document.getElementById('stats-content');
  if (statsToggle && statsContent) {
    statsToggle.addEventListener('click', function () {
      const expanded = statsToggle.getAttribute('aria-expanded') === 'true';
      statsToggle.setAttribute('aria-expanded', String(!expanded));
      statsContent.hidden = expanded;
      statsContent.setAttribute('aria-hidden', String(expanded));
    });
  }

  // --- Kurs-Hinzufügen ---
  const addCourseBtn = document.getElementById('add-course-btn');
  const userCourses = document.getElementById('user-courses');
  if (addCourseBtn && userCourses) {
    addCourseBtn.addEventListener('click', function () {
      const title = document.getElementById('lesson-title').value.trim();
      const wordDe = document.getElementById('word-de').value.trim();
      const wordTi = document.getElementById('word-ti').value.trim();
      const imgUrl = document.getElementById('img-url').value.trim();
      if (!title || !wordDe || !wordTi) {
        alert('Bitte alle Felder ausfüllen!');
        return;
      }
      const div = document.createElement('div');
      div.className = 'user-course';
      div.innerHTML =
        `<strong>${title}</strong>: <span>${wordDe}</span> – <span>${wordTi}</span>` +
        (imgUrl ? `<br><img src="${imgUrl}" alt="${wordDe}" style="max-width:80px;">` : '');
      userCourses.appendChild(div);
      document.getElementById('lesson-title').value = '';
      document.getElementById('word-de').value = '';
      document.getElementById('word-ti').value = '';
      document.getElementById('img-url').value = '';
    });
  }

  // --- Chat-Formular (Dummy-Funktion) ---
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const messages = document.querySelector('.messages');
  if (chatForm && chatInput && messages) {
    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const msg = chatInput.value.trim();
      if (!msg) return;
      const div = document.createElement('div');
      div.textContent = msg;
      messages.appendChild(div);
      chatInput.value = '';
    });
  }

  // --- Audio-Buttons (funktioniert nur mit vorhandenen Audio-Dateien) ---
  window.playAudio = function (word) {
    const lang = document.getElementById('audio-lang')?.value || 'deutsch';
    const audioSrc = `audio/${lang}/${word}.mp3`; // Passe DEN PFAD an deine Dateien an!
    const audio = new Audio(audioSrc);
    audio.play().catch(() => {
      alert('Audio nicht gefunden!');
    });
  };

  // --- Einstellungen speichern (localStorage) ---
  document.getElementById('notifications-toggle')?.addEventListener('change', function () {
    localStorage.setItem('notifications', this.checked ? 'on' : 'off');
  });
  document.getElementById('profile-visibility')?.addEventListener('change', function () {
    localStorage.setItem('profileVisible', this.checked ? 'on' : 'off');
  });
  document.getElementById('audio-lang')?.addEventListener('change', function () {
    localStorage.setItem('audioLang', this.value);
  });
  // Einstellungen beim Laden wiederherstellen
  if (localStorage.getItem('notifications') === 'on')
    document.getElementById('notifications-toggle').checked = true;
  if (localStorage.getItem('profileVisible') === 'on')
    document.getElementById('profile-visibility').checked = true;
  if (localStorage.getItem('audioLang'))
    document.getElementById('audio-lang').value = localStorage.getItem('audioLang');
});
