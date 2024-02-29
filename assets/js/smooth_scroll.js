document.addEventListener('DOMContentLoaded', function () {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Add event listener for click event on nav links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            const offsetTop = section.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add event listener for scroll event
    window.addEventListener('scroll', function () {
        // Get the current scroll position with offset value
        const scrollPosition = window.scrollY + 160;

        // Check each section's position and add or remove active class accordingly
        navLinks.forEach(function (link) {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
