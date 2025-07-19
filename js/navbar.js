document.addEventListener('DOMContentLoaded', function() {
    // Dropdown menu functionality
    document.querySelectorAll('.nav-item.dropdown').forEach(item => {
        item.addEventListener('click', function (e) {
            const menu = this.querySelector('.dropdown-menu');
            // Toggle display for dropdown menu
            if (menu) {
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
            // Prevent default link behavior if it's a dropdown toggle
            if (this.querySelector('.nav-link').getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // Mobile menu toggle functionality
    const navbarToggle = document.createElement('button');
    navbarToggle.classList.add('navbar-toggle');
    navbarToggle.innerHTML = '&#9776;'; // Hamburger icon
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.prepend(navbarToggle); // Add toggle button to the navbar

        navbarToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.toggle('active');
            }
        });
    }
});
