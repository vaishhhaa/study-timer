let timers = JSON.parse(localStorage.getItem('timers')) || [];
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

function saveData() {
  localStorage.setItem('timers', JSON.stringify(timers));
  localStorage.setItem('sessions', JSON.stringify(sessions));
}

// Modify the renderTimers function in script.js
// In renderTimers function - Update the progress calculation
function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Load theme immediately on page load
  loadTheme();
  
function renderTimers() {
  const timersDiv = document.getElementById('timers');
  timersDiv.innerHTML = '';

  timers.forEach((timer, index) => {
    const timerEl = document.createElement('div');
    timerEl.className = 'timer';
    
    // Calculate COMPLETED percentage instead of remaining
    const progressWidth = ((timer.duration - timer.remaining) / timer.duration) * 100;

    timerEl.innerHTML = `
      <strong>${timer.title}</strong><br>
      ${timer.remaining > 0 ? `Time Left: ${formatTime(timer.remaining)}` : '✅ Complete'}<br>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${progressWidth}%"></div>
        <div class="progress-text">${Math.round(progressWidth)}%</div>
      </div>
      <button onclick="startTimer(${index})" ${timer.remaining === 0 ? 'disabled' : ''}>Start</button>
      <button onclick="stopTimer(${index})">Stop</button>
      <button onclick="resetTimer(${index})">Reset</button>
      <button onclick="deleteTimer(${index})">Delete</button>
    `;
    timersDiv.appendChild(timerEl);
  });
}// In renderTimers function - Update the progress calculation
function renderTimers() {
  const timersDiv = document.getElementById('timers');
  timersDiv.innerHTML = '';

  timers.forEach((timer, index) => {
    const timerEl = document.createElement('div');
    timerEl.className = 'timer';
    
    // Calculate COMPLETED percentage instead of remaining
    const progressWidth = ((timer.duration - timer.remaining) / timer.duration) * 100;

    timerEl.innerHTML = `
      <strong>${timer.title}</strong><br>
      ${timer.remaining > 0 ? `Time Left: ${formatTime(timer.remaining)}` : '✅ Complete'}<br>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${progressWidth}%"></div>
        <div class="progress-text">${Math.round(progressWidth)}%</div>
      </div>
      <button onclick="startTimer(${index})" ${timer.remaining === 0 ? 'disabled' : ''}>Start</button>
      <button onclick="stopTimer(${index})">Stop</button>
      <button onclick="resetTimer(${index})">Reset</button>
    `;
    timersDiv.appendChild(timerEl);
  });
}// In renderTimers function - Update the progress calculation
function renderTimers() {
  const timersDiv = document.getElementById('timers');
  timersDiv.innerHTML = '';

  timers.forEach((timer, index) => {
    const timerEl = document.createElement('div');
    timerEl.className = 'timer';
    
    // Calculate COMPLETED percentage instead of remaining
    const progressWidth = ((timer.duration - timer.remaining) / timer.duration) * 100;

    timerEl.innerHTML = `
      <strong>${timer.title}</strong><br>
      ${timer.remaining > 0 ? `Time Left: ${formatTime(timer.remaining)}` : '✅ Complete'}<br>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${progressWidth}%"></div>
        <div class="progress-text">${Math.round(progressWidth)}%</div>
      </div>
      <button onclick="startTimer(${index})" ${timer.remaining === 0 ? 'disabled' : ''}>Start</button>
      <button onclick="stopTimer(${index})">Stop</button>
      <button onclick="resetTimer(${index})">Reset</button>
    `;
    timersDiv.appendChild(timerEl);
  });
}// In renderTimers function - Update the progress calculation
function renderTimers() {
  const timersDiv = document.getElementById('timers');
  timersDiv.innerHTML = '';

  timers.forEach((timer, index) => {
    const timerEl = document.createElement('div');
    timerEl.className = 'timer';
    
    // Calculate COMPLETED percentage instead of remaining
    const progressWidth = ((timer.duration - timer.remaining) / timer.duration) * 100;

    timerEl.innerHTML = `
      <strong>${timer.title}</strong><br>
      ${timer.remaining > 0 ? `Time Left: ${formatTime(timer.remaining)}` : '✅ Complete'}<br>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${progressWidth}%"></div>
        <div class="progress-text">${Math.round(progressWidth)}%</div>
      </div>
      <button onclick="startTimer(${index})" ${timer.remaining === 0 ? 'disabled' : ''}>Start</button>
      <button onclick="stopTimer(${index})">Stop</button>
      <button onclick="resetTimer(${index})">Reset</button>
    `;
    timersDiv.appendChild(timerEl);
  });
}// In renderTimers function - Update the progress calculation
function renderTimers() {
  const timersDiv = document.getElementById('timers');
  timersDiv.innerHTML = '';

  timers.forEach((timer, index) => {
    const timerEl = document.createElement('div');
    timerEl.className = 'timer';
    
    // Calculate COMPLETED percentage instead of remaining
    const progressWidth = ((timer.duration - timer.remaining) / timer.duration) * 100;

    timerEl.innerHTML = `
      <strong>${timer.title}</strong><br>
      ${timer.remaining > 0 ? `Time Left: ${formatTime(timer.remaining)}` : '✅ Complete'}<br>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${progressWidth}%"></div>
        <div class="progress-text">${Math.round(progressWidth)}%</div>
      </div>
      <button onclick="startTimer(${index})" ${timer.remaining === 0 ? 'disabled' : ''}>Start</button>
      <button onclick="stopTimer(${index})">Stop</button>
      <button onclick="resetTimer(${index})">Reset</button>
    `;
    timersDiv.appendChild(timerEl);
  });
}// In renderTimers function - Update the progress calculation
function renderTimers() {
  const timersDiv = document.getElementById('timers');
  timersDiv.innerHTML = '';

  timers.forEach((timer, index) => {
    const timerEl = document.createElement('div');
    timerEl.className = 'timer';
    
    // Calculate COMPLETED percentage instead of remaining
    const progressWidth = ((timer.duration - timer.remaining) / timer.duration) * 100;

    timerEl.innerHTML = `
      <strong>${timer.title}</strong><br>
      ${timer.remaining > 0 ? `Time Left: ${formatTime(timer.remaining)}` : '✅ Complete'}<br>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${progressWidth}%"></div>
        <div class="progress-text">${Math.round(progressWidth)}%</div>
      </div>
      <button onclick="startTimer(${index})" ${timer.remaining === 0 ? 'disabled' : ''}>Start</button>
      <button onclick="stopTimer(${index})">Stop</button>
      <button onclick="resetTimer(${index})">Reset</button>
    `;
    timersDiv.appendChild(timerEl);
  });
}// In renderTimers function - Update the progress calculation
function renderTimers() {
    const timersDiv = document.getElementById('timers');
    timersDiv.innerHTML = '';
  
    timers.forEach((timer, index) => {
      const timerEl = document.createElement('div');
      timerEl.className = 'timer';
  
      // Calculate COMPLETED percentage instead of remaining
      const progressWidth = ((timer.duration - timer.remaining) / timer.duration) * 100;
  
      // Check if timer is running
      const isRunning = intervalIds[index] !== null && intervalIds[index] !== undefined;
  
      timerEl.innerHTML = `
        <strong>${timer.title}</strong><br>
        ${timer.remaining > 0 ? `Time Left: ${formatTime(timer.remaining)}` : '✅ Complete'}<br>
        <div class="progress-container">
          <div class="progress-bar" style="width: ${progressWidth}%"></div>
          <div class="progress-text">${Math.round(progressWidth)}%</div>
        </div>
        <button onclick="startTimer(${index})" 
          ${timer.remaining === 0 || isRunning ? 'disabled' : ''}>Start</button>
        <button onclick="stopTimer(${index})"
          ${!isRunning ? 'disabled' : ''}>Stop</button>
        <button onclick="resetTimer(${index})">Reset</button>
        <button onclick="deleteTimer(${index})">Delete</button>
      `;
      timersDiv.appendChild(timerEl);
    });
  }
  
  

function renderSessions() {
  const sessionsDiv = document.getElementById('sessions');
  sessionsDiv.innerHTML = '';

  sessions.forEach(session => {
    const sessionEl = document.createElement('div');
    sessionEl.className = 'session';
    sessionEl.innerText = `${session.date} - ${session.title} - Studied ${formatTime(session.studied)}`;
    sessionsDiv.appendChild(sessionEl);
  });
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

let intervalIds = [];

function startTimer(index) {
  if (intervalIds[index]) return; // Already running

  intervalIds[index] = setInterval(() => {
    if (timers[index].remaining > 0) {
      timers[index].remaining--;
      saveData();
      renderTimers();
    } else {
      stopTimer(index);
      alert(`${timers[index].title} timer finished!`);
    }
  }, 1000);
}

function stopTimer(index) {
  if (intervalIds[index]) {
    clearInterval(intervalIds[index]);
    intervalIds[index] = null;
    saveData();
    renderTimers();
  }
}

function resetTimer(index) {
  stopTimer(index);
  timers[index].remaining = timers[index].duration;
  saveData();
  renderTimers();
}

document.getElementById('add-timer').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const totalSeconds = (hours * 3600) + (minutes * 60);

  if (title && totalSeconds > 0) {
    timers.push({
      title: title,
      duration: totalSeconds,
      remaining: totalSeconds
    });
    saveData();
    renderTimers();
  }
});

function resetAllTimersAtMidnight() {
  const now = new Date();
  const msUntilMidnight = (
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) - now
  );

  setTimeout(() => {
    timers.forEach(timer => {
      timer.remaining = timer.duration;
    });
    saveData();
    renderTimers();
    resetAllTimersAtMidnight(); // Set again for next day
  }, msUntilMidnight);
}

// Initial load
renderTimers();
renderSessions();
resetAllTimersAtMidnight();

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    saveTheme();
    updateThemeToggleButton();
  });
  
  function saveTheme() {
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  }
  
  function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    }
    updateThemeToggleButton();
  }
  
  function updateThemeToggleButton() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    
    if (isDarkMode) {
      themeIcon.className = 'fa-regular fa-sun'; // Light icon for dark mode (to indicate user can switch to light)
    } else {
      themeIcon.className = 'fa-solid fa-moon';  // Moon icon for light mode (to indicate user can switch to dark)
    }
  }

  function deleteTimer(index) {
    stopTimer(index); // Stop if running
    timers.splice(index, 1); // Remove from array
    intervalIds.splice(index, 1); // Remove interval ID
    saveData(); // Save updated timers
    renderTimers(); // Refresh the view
  }