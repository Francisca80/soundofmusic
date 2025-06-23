document.addEventListener('DOMContentLoaded', function () {
  let testimonialSwiper = null;
  
  function initTestimonialSlider() {
    // Destroy existing swiper if it exists
    if (testimonialSwiper) {
      testimonialSwiper.destroy(true, true);
    }
    
    if (typeof Swiper !== 'undefined') {
      testimonialSwiper = new Swiper('.testimonial-slider', {
        loop: true,
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
          dynamicBullets: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 50,
            centeredSlides: false,
          }
        },
        on: {
          init: function() {
            checkTextTruncation();
          },
          resize: function() {
            checkTextTruncation();
          },
          slideChange: function() {
            // Reset all expanded texts when slide changes
            const allTexts = document.querySelectorAll('.testimonial-text.expanded');
            const allButtons = document.querySelectorAll('.testimonial-expand-btn');
            
            allTexts.forEach(text => {
              text.classList.remove('expanded');
            });
            
            allButtons.forEach(btn => {
              btn.textContent = 'Lees meer';
            });
            
            // Check truncation for new slide
            setTimeout(checkTextTruncation, 100);
          }
        }
      });
    }
  }
  
  // Check if text is truncated and show/hide expand button accordingly
  function checkTextTruncation() {
    const testimonialTexts = document.querySelectorAll('.testimonial-text');
    
    testimonialTexts.forEach(textElement => {
      const expandBtn = textElement.parentElement.querySelector('.testimonial-expand-btn');
      if (expandBtn) {
        // Reset line clamp to check actual height
        textElement.style.webkitLineClamp = '4';
        textElement.style.lineClamp = '4';
        
        // Force reflow
        textElement.offsetHeight;
        
        // Check if text is actually truncated
        const isTruncated = textElement.scrollHeight > textElement.clientHeight;
        expandBtn.style.display = isTruncated ? 'inline-block' : 'none';
      }
    });
  }
  
  // Initialize slider on page load
  initTestimonialSlider();
  
  // Reinitialize on window resize with debounce
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      initTestimonialSlider();
    }, 250);
  });
  
  // Reinitialize on orientation change
  window.addEventListener('orientationchange', function() {
    setTimeout(function() {
      initTestimonialSlider();
    }, 500);
  });
});

// Function to toggle testimonial text expansion
function toggleTestimonial(button) {
  const textContainer = button.parentElement;
  const text = textContainer.querySelector('.testimonial-text');
  const isExpanded = text.classList.contains('expanded');
  
  if (isExpanded) {
    text.classList.remove('expanded');
    text.style.webkitLineClamp = '4';
    text.style.lineClamp = '4';
    button.textContent = 'Lees meer';
  } else {
    text.classList.add('expanded');
    text.style.webkitLineClamp = 'unset';
    text.style.lineClamp = 'unset';
    button.textContent = 'Lees minder';
  }
} 