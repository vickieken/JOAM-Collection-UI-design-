// for the header slide

let currentSlide = 1;

const slides = document.querySelectorAll('.headImg');

// for the dark and light mode toggle 

const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");

console.log(modeToggle);

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].style.animation = "none";

//     void slides[currentSlide].offsetWidth;
//     slides[currentSlide].style.animation = null;
// } 

// setInterval(nextSlide, 5000);

modeToggle.addEventListener("click", ()=> {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
})
