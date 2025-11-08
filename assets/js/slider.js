const swiper = new Swiper(".testimonialSlider", {
  // autoplay: {
  //   delay: 5000,
  // },

  speed: 5000,
  allowTouchMove: false,
  freeMode: true,
  centerInsufficientSlides: true,
  centeredSlidesBounds: true,
  controller: {
    inverse: true,
  },

  // loop: true,

  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
