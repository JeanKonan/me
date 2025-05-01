// script.js

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Example enhancement: delay scroll on hero button click
const projectBtn = document.querySelector('button[onclick*="projects"]');
const contactBtn = document.querySelector('button[onclick*="contact"]');

if (projectBtn && contactBtn) {
    projectBtn.addEventListener('click', () => scrollToSection('projects'));
    contactBtn.addEventListener('click', () => scrollToSection('contact'));
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('is_stuck');
    } else {
      header.classList.remove('is_stuck');
    }
  });
  
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const hero = document.querySelector('.hero');

hero.style.minHeight = `calc(100vh - ${headerHeight}px)`;

const heroHeight = hero.offsetHeight;
const heroWidth = `100vw`;

document.querySelector('#bg_img').style.height = heroHeight;
document.querySelector('#bg_img').style.width = heroWidth;