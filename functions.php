<?php
/**
 * Enqueue parent theme styles and Google Fonts
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

    // Load Google Fonts: Inter and Manrope
    wp_enqueue_style(
        'child-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Manrope:wght@400;700&display=swap',
        [],
        null
    );

    wp_enqueue_style('child-style', get_stylesheet_uri(), ['parent-style', 'child-google-fonts'], filemtime(get_stylesheet_directory() . '/style.css'));

    // Enqueue GSAP
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js', array(), '3.12.5', true);
    wp_enqueue_script('gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js', array('gsap'), '3.12.5', true);

    // Enqueue animations
    wp_enqueue_script('hero-animate', get_stylesheet_directory_uri() . '/js/hero-animate.js', array('gsap', 'gsap-scrolltrigger'), wp_get_theme()->get('Version'), true);
    wp_enqueue_script('music-notes', get_stylesheet_directory_uri() . '/js/music-notes.js', array('gsap'), wp_get_theme()->get('Version'), true);
    wp_enqueue_script('bento-ssom', get_stylesheet_directory_uri() . '/js/bento-ssom.js', array('gsap', 'gsap-scrolltrigger'), wp_get_theme()->get('Version'), true);

    // Enqueue Swiper for testimonial slider
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true);
    wp_enqueue_script('testimonial-slider', get_stylesheet_directory_uri() . '/js/testimonial-slider.js', array('swiper'), null, true);

});

/**
 * Register custom block pattern category
 */
add_action('init', function () {
    register_block_pattern_category('custom', [
        'label' => __('Custom', 'soundofmusic')
    ]);
});

// Register and enqueue scripts
function soundofmusic_scripts() {
    // Enqueue main stylesheet with cache-busting
    wp_enqueue_style('soundofmusic-style', get_stylesheet_uri(), array(), filemtime(get_stylesheet_directory() . '/style.css'));
    
    // CTA Lessen Animation
    wp_enqueue_script(
        'cta-lessen-animation',
        get_template_directory_uri() . '/js/cta-lessen.js',
        array('gsap', 'scrolltrigger'),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'soundofmusic_scripts');

