document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menuList = document.getElementById('menu-list');
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('header nav ul');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    toggleButton.addEventListener('click', function() {
        menuList.classList.toggle('hidden');
        const expanded = !menuList.classList.contains('hidden');
        toggleButton.textContent = expanded ? 'Hide Menu' : 'Show Menu';
        toggleButton.setAttribute('aria-expanded', expanded);
    });

    navToggle.addEventListener('click', function() {
        const open = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', open);
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formStatus.textContent = 'Message sent! Thank you for reaching out.';
        contactForm.reset();
    });
});
