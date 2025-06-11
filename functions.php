<?php
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

    // Load Google Fonts: Inter and Manrope
    wp_enqueue_style(
        'child-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Manrope:wght@400;700&display=swap',
        [],
        null
    );

    wp_enqueue_style('child-style', get_stylesheet_uri(), ['parent-style', 'child-google-fonts']);
});
