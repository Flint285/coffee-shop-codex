document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menuList = document.getElementById('menu-list');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    toggleButton.addEventListener('click', function() {
        menuList.classList.toggle('hidden');
        toggleButton.textContent = menuList.classList.contains('hidden') ? 'Show Menu' : 'Hide Menu';
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formStatus.textContent = 'Message sent! Thank you for reaching out.';
        contactForm.reset();
    });
});
