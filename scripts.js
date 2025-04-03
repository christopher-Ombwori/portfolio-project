
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const titles = ["Graphic Designer", "Software Engineer"];
let index = 0; // Index of the current title
let charIndex = 0; // Index of the current character in the title
let isDeleting = false; // Whether the text is being deleted
const typingSpeed = 100; // Typing speed in milliseconds
const deletingSpeed = 50; // Deleting speed in milliseconds
const delayBetweenTitles = 1000; // Delay before switching to the next title

const animatedText = document.getElementById("animated-text");

function typeEffect() {
const currentTitle = titles[index];
if (isDeleting) {
// Remove characters
animatedText.textContent = currentTitle.substring(0, charIndex--);
} else {
// Add characters
animatedText.textContent = currentTitle.substring(0, charIndex++);
}

// Determine the next step
if (!isDeleting && charIndex === currentTitle.length) {
// Pause at the end of the word
setTimeout(() => (isDeleting = true), delayBetweenTitles);
} else if (isDeleting && charIndex === 0) {
// Move to the next title
isDeleting = false;
index = (index + 1) % titles.length; // Cycle through titles
}

// Adjust speed based on typing or deleting
const speed = isDeleting ? deletingSpeed : typingSpeed;
setTimeout(typeEffect, speed);
}

// Start the typing effect
typeEffect();

