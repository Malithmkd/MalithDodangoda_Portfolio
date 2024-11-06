document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = 'link-to-service-page.html';
    });
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


