document.addEventListener('mousemove', function (event) {
    const pointer = document.querySelector('.pointer');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    pointer.style.left = mouseX - pointer.offsetWidth / 2 + 'px';
    pointer.style.top = mouseY - pointer.offsetHeight / 2 + 'px';
});







document.addEventListener("DOMContentLoaded", function() {
    function setupSlideshow(slideshowClass) {
        let currentIndex = 0;
        const slideshow = document.querySelector(slideshowClass);
        const slides = slideshow.querySelectorAll('.slide');
        const totalSlides = slides.length;
        
        const slideCounter = slideshow.querySelector('.slide-counter');
        const currentSlideElement = slideCounter.querySelector('.current-slide');
        const totalSlideElement = slideCounter.querySelector('.total-slides');
        
        currentSlideElement.textContent = currentIndex + 1;
        totalSlideElement.textContent = totalSlides;

        slides[currentIndex].classList.add('active');

        slideshow.querySelector('.right-arrow').addEventListener('click', function() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalSlides;
            slides[currentIndex].classList.add('active');
            currentSlideElement.textContent = currentIndex + 1;
        });

        slideshow.querySelector('.left-arrow').addEventListener('click', function() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            slides[currentIndex].classList.add('active');
            currentSlideElement.textContent = currentIndex + 1;
        });
    }

    setupSlideshow('.paragraph-slideshow-backstory');
    setupSlideshow('.paragraph-slideshow-care');
    setupSlideshow('.paragraph-slideshow-characters');
    setupSlideshow('.paragraph-slideshow-generations');
});


