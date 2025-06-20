// Wait for both DOM and WordPress to be fully loaded
window.addEventListener('load', function() {
    console.log('Window fully loaded');
    
    if (typeof gsap === 'undefined') {
        console.error('GSAP not available');
        return;
    }

    // Target the intro title - updated selector to match actual HTML
    const introTitle = document.querySelector('#intro-ssom-section .has-x-large-font-size');
    console.log('Intro title found:', introTitle);
    
    if (!introTitle) {
        console.error('Intro title not found');
        return;
    }

    // Create container for staff
    const staffContainer = document.createElement('div');
    staffContainer.className = 'music-staff-container';
    staffContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
        background: transparent;
    `;
    
    // Insert container at the start of the title's parent
    const titleParent = introTitle.parentElement;
    titleParent.style.position = 'relative';
    titleParent.insertBefore(staffContainer, introTitle);
    console.log('Staff container created and inserted');

    // Create the five lines of the staff
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'staff-line';
        line.style.cssText = `
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #000;
            opacity: 0.1;
            top: ${i * 15 + 10}px;
        `;
        staffContainer.appendChild(line);
    }
    console.log('Staff lines created');
}); 