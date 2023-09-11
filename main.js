"use strict";

const BtnServices = document.querySelector(".menu-list a");
const SectionServices = document.querySelector(".seção-serviços");

BtnServices.addEventListener("click", function () {
    SectionServices.scrollIntoView({
        behavior: "smooth",
    });
});

const slides = document.querySelectorAll(".slider");
const btnLeft = document.querySelector(".button-arrow-left");
const btnRight = document.querySelector(".button-arrow-right");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
    slides.forEach(function (e, i) {
        (e.style.transform = `translateX(${100 * (i - slide)}%)`)
    });
};

const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
};

const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
};

const init = function () {
    goToSlide(0);
};
init();

const Temporizador = setInterval(function(){
    nextSlide()
},8000)

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);
