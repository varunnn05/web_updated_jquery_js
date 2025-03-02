$(document).ready(function() {
    // Fade-in effect for sections when scrolling
    $(window).on('scroll', function() {
        $('.fade-in').each(function() {
            let elementTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height();
            if (windowBottom > elementTop) {
                $(this).addClass('visible');
            }
        });
    });

    // Toggle navigation menu for mobile view
    $('.menu-toggle').click(function() {
        $('nav ul').slideToggle();
    });

    // Change background color of header on scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    // Show tooltip when hovering over product images
    $('.product img').hover(
        function() {
            let tooltip = $('<div class="tooltip">View Details</div>');
            $('body').append(tooltip);
            tooltip.css({
                top: $(this).offset().top - 30,
                left: $(this).offset().left + $(this).width() / 2 - tooltip.width() / 2
            }).fadeIn();
        },
        function() {
            $('.tooltip').remove();
        }
    );
});
