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

// Close the menu when any link is clicked (only in mobile view)
function closeMenuOnClick() {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.querySelector('.menu-toggle');

    // Only close the menu in mobile view
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
        toggleButton.textContent = '☰'; // Reset to hamburger icon
    }
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

const Contact = document.getElementById('Contact');
const result = document.getElementById('result');

Contact.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(Contact);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            Contact.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
