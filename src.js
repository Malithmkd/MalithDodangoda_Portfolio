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

