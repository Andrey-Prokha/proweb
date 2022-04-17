let slideIndex = 1;
let slides = document.querySelectorAll(".slider__item");
let dots = document.querySelectorAll(".dots__item");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let k;
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (k = 0; k < slides.length; k++) {
    slides[k].className = slides[k].className.replace(" slider__item--current", "")
  }
  for (k = 0; k < dots.length; k++) {
    dots[k].className = dots[k].className.replace("dots__item--current", "");
  }
  slides[slideIndex - 1].className += " slider__item--current";
  dots[slideIndex - 1].className += " dots__item--current";
}
