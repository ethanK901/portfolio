const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__links');
const currentYearEl = document.getElementById('currentYear');

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('is-open');
    }
  });
}
