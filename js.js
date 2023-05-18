"use strict";
const slide = document.querySelector(".slider");
const slideHeader = document.querySelectorAll(".slider__main");
const slideLine = document.querySelector(".slider__line");

const btnNext = document.querySelector(".btnPrev");
const btnPrev = document.querySelector(".btnNext");

let sliderCount = 0;
let sliderWidth = slide.offsetWidth;
console.log(sliderWidth);

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

function nextSlide() {
  sliderCount++;

  if (sliderCount >= slideHeader.length) {
    sliderCount = 0;
  }
  console.log(sliderCount);
  roleSlider();
}

function prevSlide() {
  sliderCount--;
  console.log(sliderCount);
  if (sliderCount < 0) {
    sliderCount = slideHeader.length - 1;
  }
  roleSlider();
}

function roleSlider() {
  slideLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

