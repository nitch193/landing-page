let slidePosition = 1;
SlideShow(slidePosition);

let contactFormBtn = document.getElementById("contact-button");
let formSubmitBtn = document.getElementById("form-submit");
const form = document.querySelector(".form");

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  let i;
  let slides = document.getElementsByClassName("Containers");
  let circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

contactFormBtn.addEventListener("click", () => {
  const initial = document.querySelector(".show");
  initial.classList.remove("show");
  initial.classList.add("hidden");
  form.classList.remove("hidden");
  form.classList.add("show-form");
});

formSubmitBtn.addEventListener("click", () => {
  const afterSubmitDiv = document.getElementById("after");
  form.classList.add("hidden");
  form.classList.remove("show-form");
  afterSubmitDiv.classList.remove("hidden");
  afterSubmitDiv.classList.add("show");
});

let slideIndex = 1;
showSlides(slideIndex);

function reviewPlusSlides(n) {
  showSlides((slideIndex += n));
}

function reviewCurrentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("review-container");
  let dots = document.getElementsByClassName("review-dots");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
