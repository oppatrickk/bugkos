function shrinkImage() {
    // 
    // Hero Section
    // 

    var imageContainer = document.querySelector('.shrink-container');
    imageContainer.classList.toggle('shrink');
}

document.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, { threshold: 0.5 });

    //
    // About section
    // 

    const descriptionBoxes = document.querySelectorAll('.description-box');

    descriptionBoxes.forEach(box => {
        observer.observe(box);
    });

    //
    // Services Section
    // 

    const servicesBoxes = document.querySelectorAll('.services-box');

    servicesBoxes.forEach(box => {
        observer.observe(box);
    });

    var iconContainers = document.querySelectorAll('.services-icon');

    function handleScroll() {
        iconContainers.forEach(function (container) {
            var rect = container.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                container.classList.add('big');
            } else {
                container.classList.remove('big');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

});

