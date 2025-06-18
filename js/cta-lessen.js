// Wait for both DOM and WordPress to be fully loaded
window.addEventListener('load', function() {
    console.log('Window fully loaded');
    
    if (typeof gsap === 'undefined') {
        console.error('GSAP not available');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Target the CTA section
    const ctaSection = document.querySelector('.cta-lessen');
    console.log('CTA section found:', ctaSection);
    
    if (!ctaSection) {
        console.error('CTA section not found');
        return;
    }

    // Get all the CTA items
    const ctaItems = ctaSection.querySelectorAll('.cta-item');
    console.log('CTA items found:', ctaItems.length);

    // Create animation timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ctaSection,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Animate each item
    ctaItems.forEach((item, index) => {
        // Alternate between left and right
        const direction = index % 2 === 0 ? -100 : 100;
        
        // Set initial state
        gsap.set(item, {
            x: direction,
            opacity: 0
        });

        // Add to timeline
        tl.to(item, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2, // Stagger the animations
            onComplete: () => {
                // Ensure text colors are preserved after animation
                const whiteBlock = item.closest('.cta-white-block');
                if (whiteBlock) {
                    const textElements = whiteBlock.querySelectorAll('.has-text-color');
                    textElements.forEach(el => {
                        if (el.classList.contains('has-black-color')) {
                            el.style.setProperty('color', '#000', 'important');
                        }
                    });
                }
            }
        });
    });

    // Add a ScrollTrigger to handle text color on scroll
    ScrollTrigger.create({
        trigger: ctaSection,
        start: "top 80%",
        onEnter: () => {
            const whiteBlock = ctaSection.querySelector('.cta-white-block');
            if (whiteBlock) {
                const textElements = whiteBlock.querySelectorAll('.has-text-color');
                textElements.forEach(el => {
                    if (el.classList.contains('has-black-color')) {
                        el.style.setProperty('color', '#000', 'important');
                    }
                });
            }
        }
    });

    console.log('Animation timeline created');
}); 