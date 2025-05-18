(() => {
  const menuButtons = document.querySelectorAll('nav ul.menu button');
  const sections = document.querySelectorAll('main section');
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');
  const profileIcon = document.getElementById('profile-icon');

  const profileForm = document.getElementById('profile-form');
  const usernameInput = profileForm.querySelector('#username');
  const profilePicInput = profileForm.querySelector('#profile-pic-input');
  const profilePicPreview = profileForm.querySelector('img.profile-pic');
  const progressBarInner = profileForm.querySelector('.progress-bar-inner');

  const gamesList = document.querySelector('#games .game-list');
  const gameDetails = document.querySelector('#games .game-details');

  const subscriptionButtons = document.querySelectorAll('#premium .subscription-options button');
  const paymentForm = document.getElementById('payment-form');
  const paymentSuccess = document.querySelector('#premium .payment-success');
  const paymentError = document.querySelector('#premium .payment-error');

  const chatForm = document.getElementById('chat-form');
  const chatInput = chatForm.querySelector('#chat-input');
  const messagesContainer = document.querySelector('#chat .messages');

  const statsToggleBtn = document.querySelector('#settings .stats-toggle');
  const statsContent = document.querySelector('#settings .stats-content');

  let currentSection = 'home';
  let selectedPlan = null;
  let progressPercent = 40;
  let messages = [];

  function showSection(id) {
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.classList.add('active');
        sec.setAttribute('tabindex', '0');
        sec.focus();
      } else {
        sec.classList.remove('active');
        sec.setAttribute('tabindex', '-1');
      }
    });
    menuButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === id);
      btn.setAttribute('aria-current', btn.dataset.target === id ? 'page' : 'false');
    });
    if (mainMenu.classList.contains('show')) {
      toggleMobileMenu(false);
    }
    currentSection = id;
    
    if (id === 'premium') {
      paymentSuccess.textContent = '';
      paymentError.textContent = '';
      paymentForm.hidden = !selectedPlan;
    } else {
      paymentForm.hidden = true;
    }
    if (id !== 'games') {
      gameDetails.textContent = '';
      const gameButtons = gamesList.querySelectorAll('li');
      gameButtons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
    }
  }

  function toggleMobileMenu(show) {
    if (show === undefined) {
      show = !mainMenu.classList.contains('show');
    }
    if (show) {
      mainMenu.classList.add('show');
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
    } else {
      mainMenu.classList.remove('show');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }

  function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('atmprofile')) || {};
    usernameInput.value = profile.username || '';
    if (profile.profilePic) {
      profilePicPreview.src = profile.profilePic;
      profilePicPreview.hidden = false;
      profilePicPreview.setAttribute('aria-hidden', 'false');
    } else {
      profilePicPreview.hidden = true;
      profilePicPreview.setAttribute('aria-hidden', 'true');
    }
    progressBarInner.style.width = (profile.progressPercent ?? progressPercent) + '%';
  }
  function saveProfile(e) {
    e.preventDefault();
    const username = usernameInput.value.trim() || 'Kind';
    const profilePic = profilePicPreview.src || '';
    const progress = progressPercent;
    const profile = { username, profilePic, progressPercent: progress };
    localStorage.setItem('atmprofile', JSON.stringify(profile));
    alert('Profil gespeichert!');
  }
  function handleProfilePicInput(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      profilePicPreview.src = ev.target.result;
      profilePicPreview.hidden = false;
      profilePicPreview.setAttribute('aria-hidden', 'false');
    };
    reader.readAsDataURL(file);
  }
  function gameClickHandler(e) {
    if (!e.target.matches('li[data-game]')) return;
    const game = e.target.dataset.game;
    gamesList.querySelectorAll('li').forEach(li => {
      li.setAttribute('aria-pressed', li === e.target ? 'true' : 'false');
    });
    let description = '';
    let reward = '';
    if (game === 'pacman') {
      description = 'Pac-Man ist ein klassisches Spiel, das Aufmerksamkeit und Reaktionsvermögen fördert.';
      reward = 'Belohnung: Bis zu 5 Sterne pro Level.';
    } else if (game === 'memory') {
      description = 'Memory trainiert das Gedächtnis und die Konzentration.';
      reward = 'Belohnung: Bis zu 3 Sterne pro Runde.';
    } else {
      description = 'Spielbeschreibung wird geladen...';
    }
    gameDetails.innerHTML = '<p>' + description + '</p><p class="reward">' + reward + '</p>';
  }
  function selectPlan(e) {
    if (!e.target.matches('button[data-plan]')) return;
    subscriptionButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    selectedPlan = e.target.dataset.plan;
    paymentForm.hidden = false;
    paymentSuccess.textContent = '';
    paymentError.textContent = '';
  }
  function paymentSubmit(e) {
    e.preventDefault();
    const cardNumber = paymentForm['card-number'].value.trim();
    const ccv = paymentForm['ccv'].value.trim();
    const expiry = paymentForm['expiry-date'].value.trim();
    if (!cardNumber || !ccv || !expiry) {
      paymentError.textContent = 'Bitte alle Felder korrekt ausfüllen.';
      paymentSuccess.textContent = '';
      return;
    }
    paymentSuccess.textContent = `Zahlung für ${selectedPlan} abgeschlossen. Danke!`;
    paymentError.textContent = '';
    paymentForm.hidden = true;
  }
  function chatSend(e) {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (text === '') return;
    const msg = { speaker: 'kind', text, timestamp: Date.now() };
    messages.push(msg);
    renderMessages();
    chatInput.value = '';
  }
  function renderMessages() {
    messagesContainer.innerHTML = '';
    messages.forEach(m => {
      const div = document.createElement('div');
      div.className = 'message';
      const d = new Date(m.timestamp);
      div.textContent = `[${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}] ${m.text}`;
      messagesContainer.appendChild(div);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  function toggleStats() {
    const isVisible = statsContent.classList.toggle('show');
    statsContent.hidden = !isVisible;
    statsToggleBtn.setAttribute('aria-pressed', isVisible.toString());
    statsToggleBtn.setAttribute('aria-expanded', isVisible.toString());
  }

  profileIcon.addEventListener('click', () => {
    showSection('profile');
  });
  profileIcon.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showSection('profile');
    }
  });
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showSection(btn.dataset.target);
    });
  });
  menuToggle.addEventListener('click', () => {
    toggleMobileMenu();
  });
  menuToggle.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu();
    }
  });
  gamesList.addEventListener('click', gameClickHandler);
  gamesList.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      gameClickHandler({target: e.target});
    }
  });
  subscriptionButtons.forEach(btn => {
    btn.addEventListener('click', selectPlan);
  });
  paymentForm.addEventListener('submit', paymentSubmit);
  chatForm.addEventListener('submit', chatSend);

// Initialisierung von Variablen
let startTime = Date.now(); // Zeit, wenn die Seite geladen wird
let totalTimeInMinutes = 0; // Gesamte Spielzeit in Minuten
let levelsAchieved = 5; // Beispiel für erreichte Level
let rewards = 23; // Beispiel für Belohnungen

// Funktion, um die Zeit zu aktualisieren und in Stunden anzuzeigen
function updateTime() {
  totalTimeInMinutes = Math.floor((Date.now() - startTime) / 1000 / 60); // Umrechnung in Minuten
  let totalTimeInHours = (totalTimeInMinutes / 60).toFixed(2); // Umrechnung in Stunden mit 2 Dezimalstellen
  document.getElementById('total-play-time').textContent = totalTimeInHours;
}

// Setze das Intervall, um die Zeit jede Minute zu aktualisieren
setInterval(updateTime, 60000); // Aktualisierung alle 60 Sekunden (1 Minute)

// Toggle-Funktion für die Statistiken
const statsToggleBtn2 = document.querySelector('.stats-toggle');
const statsContent2 = document.getElementById('stats-content');

function toggleStats2() {
  const isExpanded = statsToggleBtn2.getAttribute('aria-expanded') === 'true';
  statsContent2.hidden = isExpanded;
  statsToggleBtn2.setAttribute('aria-expanded', !isExpanded);
}

// Event Listener für das Anzeigen der Statistiken
statsToggleBtn2.addEventListener('click', toggleStats2);
statsToggleBtn2.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleStats2();
  }
});






  profilePicInput.addEventListener('change', handleProfilePicInput);
  profileForm.addEventListener('submit', saveProfile);
  showSection('home');
  loadProfile();
  renderMessages();

          
          //Leute hinzufügen lassen//
  document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-course-btn');
  const courseContainer = document.getElementById('user-courses');

  // Kurse aus localStorage laden
  const loadCourses = () => {
    const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    savedCourses.forEach(course => renderCourse(course));
  };

  // Kurs rendern (anzeigen)
  const renderCourse = ({ title, wordDe, wordTi, imgUrl }) => {
    const lessonDiv = document.createElement('div');
    lessonDiv.className = 'lesson';
    lessonDiv.innerHTML = `
      <h3>${title}</h3>
      <ul class="vocab-list">
        <li>
          ${imgUrl ? `<img src="${imgUrl}" alt="${wordDe}" />` : ''}
          <span>${wordDe} – ${wordTi}</span>
          <button onclick="alert('🔊 (${wordTi}) – Audio coming soon')">🔊</button>
          <button class="delete-btn" title="Delete">🗑️</button>
        </li>
      </ul>
    `;

    //  Löschen
    lessonDiv.querySelector('.delete-btn').addEventListener('click', () => {
      courseContainer.removeChild(lessonDiv);
      deleteCourse({ title, wordDe, wordTi, imgUrl });
    });

    courseContainer.appendChild(lessonDiv);
  };

  // Kurs speichern
  const saveCourse = (course) => {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
  };

  // Kurs löschen
  const deleteCourse = (courseToDelete) => {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    const filtered = courses.filter(c =>
      c.title !== courseToDelete.title ||
      c.wordDe !== courseToDelete.wordDe ||
      c.wordTi !== courseToDelete.wordTi
    );
    localStorage.setItem('courses', JSON.stringify(filtered));
  };

  // ➕ Kurs hinzufügen
  addBtn.addEventListener('click', () => {
    const title = document.getElementById('lesson-title').value.trim();
    const wordDe = document.getElementById('word-de').value.trim();
    const wordTi = document.getElementById('word-ti').value.trim();
    const imgUrl = document.getElementById('img-url').value.trim();

    if (!title || !wordDe || !wordTi) {
      alert('Please fill in all fields!');
      return;
    }

    const newCourse = { title, wordDe, wordTi, imgUrl };
    renderCourse(newCourse);
    saveCourse(newCourse);

    // Eingabefelder leeren
    document.getElementById('lesson-title').value = '';
    document.getElementById('word-de').value = '';
    document.getElementById('word-ti').value = '';
    document.getElementById('img-url').value = '';
  });

  // Lade vorhandene Kurse beim Start
  loadCourses();
});

})();