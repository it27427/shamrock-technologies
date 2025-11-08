const swiper = new Swiper(".testimonialSlider", {
  autoplay: {
    delay: 5000,
  },
  allowTouchMove: false,
  centeredSlides: true,
  controller: {
    inverse: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
