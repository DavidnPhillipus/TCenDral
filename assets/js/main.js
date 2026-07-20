const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link, .nav__contact');
const sections = document.querySelectorAll('section[id]');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    navToggle.setAttribute('aria-expanded', 'true');
  });
}

if (navClose && navMenu) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
}

const closeMenu = () => {
  navMenu?.classList.remove('show-menu');
  navToggle?.setAttribute('aria-expanded', 'false');
};

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1150) {
      closeMenu();
    }
  });
});

const setActiveLink = () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentHash = window.location.hash;

  navLinks.forEach((link) => {
    link.classList.remove('active-link');
  });

  if (currentPath === 'about.html') {
    document.querySelector('.nav__link[href="about.html"]')?.classList.add('active-link');
  } else if (currentPath === 'work.html') {
    document.querySelector('.nav__link[href="work.html"]')?.classList.add('active-link');
  } else if (currentPath === 'services.html') {
    document.querySelector('.nav__link[href="services.html"]')?.classList.add('active-link');
  } else if (currentPath === 'skills.html') {
    document.querySelector('.nav__link[href="skills.html"]')?.classList.add('active-link');
  } else {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);

      if (currentHash === `#${sectionId}` || (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)) {
        link?.classList.add('active-link');
      }
    });

    document.querySelector('.nav__link[href="#home"]')?.classList.add('active-link');
  }
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('hashchange', setActiveLink);
window.addEventListener('resize', () => {
  if (window.innerWidth > 1150) {
    closeMenu();
  }
});
setActiveLink();

const year = document.querySelector('.year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const heroSlides = document.querySelectorAll('.hero__slide');
if (heroSlides.length > 0) {
  let slideIndex = 0;

  setInterval(() => {
    heroSlides.forEach((slide) => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % heroSlides.length;
    heroSlides[slideIndex].classList.add('active');
  }, 5000);
}

const workPanelSlides = document.querySelectorAll('.workpage-panel__slide');

if (workPanelSlides.length > 0) {
  let workPanelIndex = 0;

  setInterval(() => {
    workPanelSlides.forEach((slide) => slide.classList.remove('active'));
    workPanelIndex = (workPanelIndex + 1) % workPanelSlides.length;
    workPanelSlides[workPanelIndex].classList.add('active');
  }, 5000);
}

/* Domain showcase — the continuous sliding marquee is pure CSS (see .domain-marquee__track
   animation in styles.css), so no JS is needed to drive it. */