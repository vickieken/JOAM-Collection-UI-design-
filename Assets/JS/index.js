let currentSlide = 1;

const slides = document.querySelectorAll('.headImg');

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.animation = "none";

    void slides[currentSlide].offsetWidth;
    slides[currentSlide].style.animation = null;
} 

setInterval(nextSlide, 5000);