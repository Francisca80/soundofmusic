<?php

/**
 * Title: Hero Section
 * Slug: soundofmusic/hero
 * Categories: custom
 * Description: A hero section with large title and call-to-action buttons.
 * Block Types: core/post-content 
 */
?>

<!-- wp:group {"layout":{"type":"constrained","contentSize":"1200px"},"style":{"spacing":{"padding":{"top":"4rem","bottom":"6rem","left":"2rem","right":"2rem"}}}} -->
<div class="wp-block-group" style="padding-top:4rem;padding-bottom:6rem;padding-left:2rem;padding-right:2rem">
  <!-- wp:heading {"level":1,"textColor":"primary","style":{"typography":{"fontSize":"clamp(3rem, 8vw, 8rem)","fontFamily":"var(--wp--preset--font-family--inter)","fontWeight":"900","lineHeight":"0.9","letterSpacing":"-0.02em"},"spacing":{"margin":{"bottom":"2rem"}}}} -->
  <h1 class="wp-block-heading has-primary-color has-text-color fade-in-left" style="font-size:clamp(3rem, 8vw, 8rem);font-family:var(--wp--preset--font-family--inter);font-weight:900;line-height:0.9;letter-spacing:-0.02em;margin-bottom:2rem">STUDIO<br>SOUND OF<br>MUSIC</h1>
  <!-- /wp:heading -->

  <!-- wp:paragraph {"textColor":"text","style":{"typography":{"fontSize":"1.125rem","fontFamily":"var(--wp--preset--font-family--inter)","lineHeight":"1.5"},"spacing":{"margin":{"bottom":"3rem"}}}} -->
  <p class="has-text-color has-text-color" style="font-size:1.125rem;font-family:var(--wp--preset--font-family--inter);line-height:1.5;margin-bottom:3rem">Leer gitaar spelen bij dé gitaarschool van Nieuwegein en omstreken<br>(Vianen, IJsselstein, Houten, Utrecht)</p>
  <!-- /wp:paragraph -->

  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left","flexWrap":"wrap"},"style":{"spacing":{"blockGap":"1rem"}}} -->
  <div class="wp-block-buttons" style="gap:1rem">
    <!-- wp:button {"backgroundColor":"secondary","textColor":"primary","style":{"border":{"radius":"0.5rem"},"typography":{"fontFamily":"var(--wp--preset--font-family--inter)","fontSize":"1rem","fontWeight":"500"},"spacing":{"padding":{"top":"1rem","bottom":"1rem","left":"2rem","right":"2rem"}}}} -->
    <div class="wp-block-button"><a class="wp-block-button__link has-primary-color has-secondary-background-color has-text-color has-background" style="font-family:var(--wp--preset--font-family--inter);font-size:1rem;font-weight:500;padding-top:1rem;padding-bottom:1rem;padding-left:2rem;padding-right:2rem;border-radius:0.5rem">Kies jouw gitaarles</a></div>
    <!-- /wp:button -->
    <!-- wp:button {"backgroundColor":"primary","textColor":"text-secondary","style":{"border":{"radius":"0.5rem"},"typography":{"fontFamily":"var(--wp--preset--font-family--inter)","fontSize":"1rem","fontWeight":"500"},"spacing":{"padding":{"top":"1rem","bottom":"1rem","left":"2rem","right":"2rem"}}}} -->
    <div class="wp-block-button"><a class="wp-block-button__link has-text-secondary-color has-primary-background-color has-text-color has-background" style="font-family:var(--wp--preset--font-family--inter);font-size:1rem;font-weight:500;padding-top:1rem;padding-bottom:1rem;padding-left:2rem;padding-right:2rem;border-radius:0.5rem">Neem contact op</a></div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->

</div>
<!-- /wp:group -->