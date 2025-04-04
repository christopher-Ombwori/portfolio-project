
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
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modalContainer = document.getElementById('modal-container');
    const closeModalBtn = document.getElementById('close-modal');
    const readMoreBtn = document.getElementById('read-more-btn');


    // Open modal when "Read More" is clicked
    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        modalContainer.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', function() {
        modalContainer.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside
    modalContainer.addEventListener('click', function(e) {
        if (e.target === modalContainer) {
            modalContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
            modalContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
