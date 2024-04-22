// for the header slide

let currentSlide = 1;

const slides = document.querySelectorAll('.headImg');

// for the dark and light mode toggle 

const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");

const categoryBtn = document.querySelector(".category-btn");
const category = document.querySelector(".category");
const caretDownEl = document.querySelector(".fa-caret-down");

console.log(modeToggle);

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].style.animation = "none";

//     void slides[currentSlide].offsetWidth;
//     slides[currentSlide].style.animation = null;
// } 

// setInterval(nextSlide, 5000);

const isDarkMode = localStorage.getItem('darkMode') === 'true';

// set initial dark mode state
if(isDarkMode) {
    body.classList.add('dark');
}

modeToggle.addEventListener("click", ()=> {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    const isDarkModeEnabled = body.classList.contains('dark')
    localStorage.setItem('darkMode', isDarkModeEnabled);
    
});

// category button
categoryBtn.addEventListener("click", ()=> {
    category.classList.toggle("show");
    caretDownEl.classList.toggle("rotate");
});
