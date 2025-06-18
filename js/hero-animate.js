document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.error('GSAP not available');
        return;
    }

    // Get the hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroParagraph = document.querySelector('.hero-section p');
    const heroButtons = document.querySelector('.hero-section .wp-block-buttons');

    if (!heroTitle) {
        console.error('Hero title not found');
        return;
    }

    // Split the title text into spans while preserving line breaks
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    const lines = text.split('<br>');
    
    lines.forEach((line, lineIndex) => {
        const lineDiv = document.createElement('div');
        lineDiv.style.lineHeight = '0.5'; // Match the original line height
        const words = line.split(' ');
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.marginRight = '0.2em'; // Add space between words
            const chars = word.split('');
            chars.forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                charSpan.style.display = 'inline-block';
                wordSpan.appendChild(charSpan);
            });
            lineDiv.appendChild(wordSpan);
        });
        heroTitle.appendChild(lineDiv);
        if (lineIndex < lines.length - 1) {
            const br = document.createElement('br');
            br.style.display = 'block';
            br.style.marginBottom = '0.1em'; // Reduce space between lines
            heroTitle.appendChild(br);
        }
    });

    // Create animation timeline
    const tl = gsap.timeline({
        defaults: {
            ease: 'power2.out'
        }
    });

    // Animate title characters
    tl.from(heroTitle.querySelectorAll('span span'), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.05
    });

    // Animate paragraph
    if (heroParagraph) {
        tl.from(heroParagraph, {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, "-=0.5");
    }

    // Animate buttons
    if (heroButtons) {
        tl.from(heroButtons, {
            opacity: 0,
            y: 30,
            duration: 0.8
        }, "-=0.3");
    }
}); 