const swiper = new Swiper(".testimonialSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  centeredSlides: true,
  rewind: true,
  slidesPerView: 1,
  spaceBetween: 20,
  watchOverflow: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: false,
    disabledClass: "swiper-button-disabled",
  },
});
