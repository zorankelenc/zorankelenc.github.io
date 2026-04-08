document.addEventListener('DOMContentLoaded', function () {
    function trackClick(category, label) {
        if (typeof gtag === 'function') {
            gtag('event', 'click', {
                event_category: category,
                event_label: label,
                transport_type: 'beacon'
            });
        }
    }

    // Navigation links
    document.querySelectorAll('[data-nav-link], nav a, header a[href^="#"]').forEach(function (el) {
        el.addEventListener('click', function () {
            trackClick('navigation', el.textContent.trim() || el.getAttribute('href'));
        });
    });

    // Hero CTA buttons
    document.querySelectorAll('#domov a[href^="#"]').forEach(function (el) {
        el.addEventListener('click', function () {
            trackClick('hero_cta', el.textContent.trim());
        });
    });

    // Service cards
    document.querySelectorAll('#storitve .grid article, #storitve .grid > div').forEach(function (el) {
        el.addEventListener('click', function () {
            var heading = el.querySelector('h3, h4, p');
            trackClick('service', heading ? heading.textContent.trim() : 'service_card');
        });
    });

    // "Povpraševanje" CTA in services section
    document.querySelectorAll('#storitve a[href="#kontakt"]').forEach(function (el) {
        el.addEventListener('click', function () {
            trackClick('cta', 'povprasevanje_storitve');
        });
    });

    // Video play
    document.querySelectorAll('#video button').forEach(function (el) {
        el.addEventListener('click', function () {
            trackClick('video', 'play_video');
        });
    });

    // Gallery image clicks
    document.querySelectorAll('#galerija article button').forEach(function (el) {
        el.addEventListener('click', function () {
            var title = el.querySelector('p');
            trackClick('gallery', title ? title.textContent.trim() : 'gallery_image');
        });
    });

    // Contact form submission
    var contactForm = document.querySelector('#kontakt form');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            trackClick('form', 'contact_form_submit');
        });
    }

    // Turnstile / "Pošlji sporočilo" button
    document.querySelectorAll('#kontakt button[type="button"]').forEach(function (el) {
        if (el.textContent.trim().indexOf('Po') === 0) {
            el.addEventListener('click', function () {
                trackClick('form', 'send_message_click');
            });
        }
    });

    // Phone links
    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
        el.addEventListener('click', function () {
            trackClick('contact', 'phone_call');
        });
    });

    // Email links
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
        el.addEventListener('click', function () {
            trackClick('contact', 'email_click');
        });
    });

    // Footer navigation links
    document.querySelectorAll('footer a[href^="#"]').forEach(function (el) {
        el.addEventListener('click', function () {
            trackClick('footer_navigation', el.textContent.trim());
        });
    });

    // Scroll-to-top button
    var scrollTopBtn = document.querySelector('button[aria-label="Na vrh"]');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            trackClick('navigation', 'scroll_to_top');
        });
    }

    // Mobile call FAB
    var mobileFab = document.querySelector('a[aria-label="Pokličite nas"]');
    if (mobileFab) {
        mobileFab.addEventListener('click', function () {
            trackClick('contact', 'mobile_call_fab');
        });
    }
});
