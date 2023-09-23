const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
let slideInterval;

// Function to show the current slide
function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[slideIndex].classList.add('active');
}

// Function to navigate to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Function to navigate to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Function to start automatic slide transition
function startSlideShow() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 2000); // Change the interval time (in milliseconds) as needed
}

// Function to stop automatic slide transition
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
  prevSlide();
  stopSlideShow();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  stopSlideShow();
});

// Show the initial slide and start automatic slide transition
showSlide(currentSlide);
startSlideShow();