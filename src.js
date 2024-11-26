document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = 'link-to-service-page.html';
    });
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.25
};


function toggleMenu() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the menu display
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        toggleButton.textContent = '☰'; // Hamburger icon
    } else {
        navLinks.style.display = 'flex';
        toggleButton.textContent = '✖'; // Close (X) icon
    }
}

// Adjust the menu display based on window size
function handleResize() {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.querySelector('.menu-toggle');

    if (window.innerWidth > 768) {
        // Ensure the menu is always visible in full view
        navLinks.style.display = 'flex';
        toggleButton.style.display = 'none'; // Hide the hamburger menu
    } else {
        // In mobile view, hide the menu and show the hamburger button
        navLinks.style.display = 'none';
        toggleButton.style.display = 'block';
        toggleButton.textContent = '☰'; // Reset to hamburger icon
    }
}

// Attach the resize event listener
window.addEventListener('resize', handleResize);

// Call handleResize on page load to initialize the proper state
handleResize();





const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

