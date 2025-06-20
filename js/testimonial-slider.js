document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonial-slider', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 32,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: 'slide',
      speed: 800
    });
  }
}); 