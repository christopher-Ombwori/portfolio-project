// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Typing Effect (unchanged)
const titles = ["Graphic Designer", "Software Engineer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTitles = 1000;
const animatedText = document.getElementById("animated-text");

function typeEffect() {
    const currentTitle = titles[index];
    animatedText.textContent = currentTitle.substring(0, charIndex);
    
    if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => isDeleting = true, delayBetweenTitles);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % titles.length;
    }

    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-container');
    const triggers = document.querySelectorAll('[data-modal]');
    const closers = document.querySelectorAll('[data-close-modal]');

    // Open modal
    document.querySelector('a[href="#modal-container"]').addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    document.getElementById('close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Start typing effect
typeEffect();