var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});



var swiper = new Swiper('.swiper-container-2', {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
