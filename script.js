document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    items.forEach((item) => observer.observe(item));
  });
  let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const slideWidth = document.querySelector('.carousel-item').offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Optional: Automatically change slides every 3 seconds
setInterval(() => moveSlide(1), 3000);
