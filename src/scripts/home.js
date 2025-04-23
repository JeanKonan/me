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
  