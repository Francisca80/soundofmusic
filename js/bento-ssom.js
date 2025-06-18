// Wait for both DOM and WordPress to be fully loaded
window.addEventListener('load', function() {
    console.log('Window fully loaded');
    
    if (typeof gsap === 'undefined') {
        console.error('GSAP not available');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Target the bento section
    const bentoSection = document.querySelector('.bento-ssom');
    console.log('Bento section found:', bentoSection);
    
    if (!bentoSection) {
        console.error('Bento section not found');
        return;
    }

    // Get all the bento items
    const bentoItems = bentoSection.querySelectorAll('.bento-item');
    console.log('Bento items found:', bentoItems.length);

    // Create animation timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: bentoSection,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Animate each item
    bentoItems.forEach((item, index) => {
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
            duration: 0.5,
            ease: "power2.out",
            delay: index * 0.2, // Stagger the animations
            onComplete: () => {
                // Ensure text colors are preserved after animation
                if (item.classList.contains('bento-black-block')) {
                    const textElements = item.querySelectorAll('.bento-white-text');
                    textElements.forEach(el => {
                        el.style.setProperty('color', '#fff', 'important');
                    });
                }
            }
        });
    });

    // Add a ScrollTrigger to handle text color on scroll
    ScrollTrigger.create({
        trigger: bentoSection,
        start: "top 80%",
        onEnter: () => {
            const blackBlock = bentoSection.querySelector('.bento-black-block');
            if (blackBlock) {
                const textElements = blackBlock.querySelectorAll('.bento-white-text');
                textElements.forEach(el => {
                    el.style.setProperty('color', '#fff', 'important');
                });
            }
        }
    });

    console.log('Animation timeline created');
}); 