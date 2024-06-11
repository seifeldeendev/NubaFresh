let tooglei = document.querySelector(".toogle-i");
let phonelist = document.querySelector(".phone-list");
let closex = document.querySelector(".close-x");

tooglei.addEventListener("click", function () {
  phonelist.classList.add("active");
});

closex.addEventListener("click", function () {
  phonelist.classList.remove("active");
});

let scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});
scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let index = 0;

function next() {
  slides = document.querySelectorAll(".slide-container");
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides = document.querySelectorAll(".slide-container");
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

setInterval(next, 10000);

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.pageYOffset > 50) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});
