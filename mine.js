// Function to show the corresponding section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// JavaScript for automatic sliding of projects
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none'; // Hide all slides
    });
    slides[currentSlide].style.display = 'block'; // Show the current slide
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide, loop back after the last one
}

// Start the sliding effect every 3 seconds, only on the projects page
setInterval(() => {
    if (document.getElementById('projects').style.display === 'block') {
        showSlide();
    }
}, 3000);

// Initially show the first slide (if Projects is the first section shown)
showSlide();

// By default, show the Home section
showSection('home');

// Function to handle the Buy button click
function buyScript(projectName) {
    alert(`You have chosen to buy ${projectName}. We will contact you soon.`);
    // Optionally, you can redirect to a payment page or show a modal
    // window.location.href = "payment-page.html";  // Example: Redirect to a payment page
}
