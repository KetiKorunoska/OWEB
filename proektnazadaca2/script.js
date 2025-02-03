$(document).ready(function () {
    let $menu = $('#menu-btn');
    let $navbar = $('.navbar');
    let $header = $('.header');

    
    $menu.click(function () {
        $(this).toggleClass('fa-times');
        $navbar.toggleClass('active');
    });

    
    $('#login-btn').click(function () {
        $('.login-form-container').toggleClass('active');
    });

    
    $('#close-login-form').click(function () {
        $('.login-form-container').removeClass('active');
    });

    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }

        
        $menu.removeClass('fa-times');
        $navbar.removeClass('active');
    });

    
    $(window).on('load', function () {
        if ($(this).scrollTop() > 0) {
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }
    });

    
    $('.home').on('mousemove', function (e) {
        $('.home-parallax').each(function () {
            let speed = $(this).data('speed');
            let x = (window.innerWidth - e.pageX * speed) / 90;
            let y = (window.innerHeight - e.pageY * speed) / 90;

            $(this).css('transform', `translateX(${y}px) translateY(${x}px)`);
        });
    });
});
