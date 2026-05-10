console.log("Portfolio Website Loaded");

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = '0.3s';
    });
});
