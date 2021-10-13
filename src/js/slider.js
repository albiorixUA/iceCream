var slides = document.querySelectorAll('#reviews__slides .reviews__slide');
var buttonsContainer = document.querySelector('#reviews__buttons');
var slidesButtons = [];

var currentSlide = 0;
var slideInterval = null;

createSlidesButtons();

function createSlidesButtons() {
  slides.forEach((slide, i) => {
    let button = document.createElement('button');
    button.style.display = 'inline-block';
    if (i === 0) {
      button.classList.add('reviews__button-home');
    } else {
      button.classList.add('reviews__button');
    }
    if (currentSlide === i) {
      button.classList.add('reviews__button-active');
    }
    button.setAttribute('data-slide-index', i);
    button.onclick = () => goToSlide(i);
    slidesButtons.push(button);
    buttonsContainer.appendChild(button);
  });
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slidesButtons[currentSlide].classList.remove('reviews__button-active');
  slides[currentSlide].className = 'reviews__slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'reviews__slide showing';
  slidesButtons[currentSlide].classList.add('reviews__button-active');
}

function pauseSlideshow() {
  clearInterval(slideInterval);
}

function playSlideshow() {
  slideInterval = setInterval(nextSlide, 2000);
}