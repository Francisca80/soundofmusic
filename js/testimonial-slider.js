document.addEventListener('DOMContentLoaded', function () {
  let testimonialSwiper = null;
  let previousIndex = 0;
  
  function initTestimonialSlider() {
    // Destroy existing swiper if it exists
    if (testimonialSwiper) {
      testimonialSwiper.destroy(true, true);
    }
    
    if (typeof Swiper !== 'undefined') {
      testimonialSwiper = new Swiper('.testimonial-slider', {
        loop: true,
        loopedSlides: 4,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        effect: 'slide',
        speed: 600,
        allowTouchMove: true,
        grabCursor: true,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
        on: {
          init: function() {
            previousIndex = this.realIndex;
            checkTextTruncation();
          },
          slideChangeTransitionEnd: function() {
            // Only reset when actually looping from last to first
            if (this.realIndex === 0 && previousIndex === 3) {
              resetExpandedTexts();
            }
            previousIndex = this.realIndex;
          }
        }
      });
    }
  }
  
  // Initialize slider
  initTestimonialSlider();
  
  // Reinitialize on window resize
  window.addEventListener('resize', function() {
    setTimeout(initTestimonialSlider, 100);
  });
  
  // Reset expanded texts smoothly
  function resetExpandedTexts() {
    const texts = document.querySelectorAll('.testimonial-text');
    const buttons = document.querySelectorAll('.testimonial-expand-btn');
    
    texts.forEach(text => {
      text.classList.remove('expanded');
      text.style.webkitLineClamp = '4';
      text.style.lineClamp = '4';
    });
    
    buttons.forEach(btn => {
      btn.textContent = 'Lees meer';
      btn.style.display = 'none';
    });
    
    // Check truncation after a brief delay
    requestAnimationFrame(() => {
      checkTextTruncation();
    });
  }
  
  // Check if text is truncated
  function checkTextTruncation() {
    const texts = document.querySelectorAll('.testimonial-text');
    
    texts.forEach(text => {
      const container = text.parentElement;
      const btn = container.querySelector('.testimonial-expand-btn');
      
      if (btn && !text.classList.contains('expanded')) {
        // Reset to check height
        text.style.webkitLineClamp = '4';
        text.offsetHeight;
        
        // Check if truncated
        const isTruncated = text.scrollHeight > text.clientHeight;
        
        // Show/hide button
        btn.style.display = isTruncated ? 'inline-block' : 'none';
      }
    });
  }
  
  // Function to expand text
  function toggleTestimonial(button) {
    const container = button.parentElement;
    const text = container.querySelector('.testimonial-text');
    
    // Expand the text
    text.classList.add('expanded');
    text.style.webkitLineClamp = 'unset';
    text.style.lineClamp = 'unset';
    
    // Hide the button
    button.style.display = 'none';
  }
  
  // Make function globally available
  window.toggleTestimonial = toggleTestimonial;
}); 