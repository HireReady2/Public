document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(document.querySelectorAll(".carousel-slide"));
    const btnPrev = document.querySelector(".carousel-btn.prev");
    const btnNext = document.querySelector(".carousel-btn.next");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        const slideWidth = track.offsetWidth; 
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    btnNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides; 
        updateCarousel();
    });

    btnPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);

    updateCarousel();
});

