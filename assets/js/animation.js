function shrinkImage() {
    var imageContainer = document.querySelector('.shrink-container');
    imageContainer.classList.toggle('shrink');
}

document.addEventListener('DOMContentLoaded', function () {
    const descriptionBoxes = document.querySelectorAll('.description-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, { threshold: 0.5 });

    descriptionBoxes.forEach(box => {
        observer.observe(box);
    });
});
