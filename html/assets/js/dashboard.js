// =================  SIDEBAR  =================
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
    sidebar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
    // Hide sidebar after animation completes
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 400); // Same duration as the animation
});

// ================= THEME TOGGLER =================
const themeToggler = document.querySelector('.theme-toggler');

// Function to set theme
const setTheme = (theme) => {
    document.body.classList.toggle('dark-theme-variables', theme === 'dark');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active', theme === 'light');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active', theme === 'dark');
    localStorage.setItem('theme', theme);
}

// Event listener for theme toggler
themeToggler.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-theme-variables') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Load theme from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});


// ================= PROFILE MENU =================
const profilePhoto = document.querySelector('#profile-photo');
const profileMenu = document.querySelector('#profile-menu');

profilePhoto.addEventListener('click', () => {
    profileMenu.classList.toggle('show');
});

// Close profile menu if clicked outside
window.addEventListener('click', e => {
    if (e.target !== profilePhoto && e.target !== profileMenu && !profileMenu.contains(e.target)) {
        profileMenu.classList.remove('show');
    }
});


// ================= ANIMATED STATS =================
const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
      const endValue = parseInt(stat.innerHTML.replace(/,/g, ''), 10);
      stat.innerHTML = '0'; // Start from 0
      animateValue(stat, 0, endValue, 1500);
  });
});