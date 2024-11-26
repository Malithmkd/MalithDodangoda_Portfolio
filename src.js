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

// Close the menu when any link is clicked
function closeMenuOnClick() {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.querySelector('.menu-toggle');

    // Hide the menu and reset the button to hamburger icon
    navLinks.style.display = 'none';
    toggleButton.textContent = '☰';
}

// Attach the click event listener to all nav items
function setupNavLinkListeners() {
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach((link) => {
        link.addEventListener('click', closeMenuOnClick);
    });
}

// Adjust the menu display based on window size
function handleResize() {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.querySelector('.menu-toggle');

    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex'; // Always show menu in full view
        toggleButton.style.display = 'none'; // Hide the hamburger menu
    } else {
        navLinks.style.display = 'none'; // Hide menu by default in mobile view
        toggleButton.style.display = 'block'; // Show the hamburger menu
        toggleButton.textContent = '☰'; // Reset to hamburger icon
    }
}

// Initialize event listeners on page load
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', () => {
    handleResize();
    setupNavLinkListeners();
});






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

