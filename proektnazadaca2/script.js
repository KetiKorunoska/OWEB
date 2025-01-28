$(document).ready(function () {
    let $menu = $('#menu-btn');
    let $navbar = $('.navbar');
    let $header = $('.header');

    // Toggle navbar and menu icon on menu click
    $menu.click(function () {
        $(this).toggleClass('fa-times');
        $navbar.toggleClass('active');
    });

    // Toggle login form on login button click
    $('#login-btn').click(function () {
        $('.login-form-container').toggleClass('active');
    });

    // Close login form
    $('#close-login-form').click(function () {
        $('.login-form-container').removeClass('active');
    });

    // Add/remove active class on header during scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }

        // Reset navbar and menu icon on scroll
        $menu.removeClass('fa-times');
        $navbar.removeClass('active');
    });

    // Add/remove active class on header when the page loads
    $(window).on('load', function () {
        if ($(this).scrollTop() > 0) {
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }
    });

    // Parallax effect for home section
    $('.home').on('mousemove', function (e) {
        $('.home-parallax').each(function () {
            let speed = $(this).data('speed');
            let x = (window.innerWidth - e.pageX * speed) / 90;
            let y = (window.innerHeight - e.pageY * speed) / 90;

            $(this).css('transform', `translateX(${y}px) translateY(${x}px)`);
        });
    });
});
