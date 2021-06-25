import Swiper, { Pagination, Navigation } from "swiper";

Swiper.use([Pagination, Navigation]);

const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  navigation: {
    prevEl: ".slider--button_prev",
    nextEl: ".slider--button_next",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});
