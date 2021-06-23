import Swiper, { Pagination, Navigation } from 'swiper';

Swiper.use([Pagination, Navigation]);

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  navigation: {
    prevEl: '.swiper-button-prev-custom',
    nextEl: '.swiper-button-next-custom',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});