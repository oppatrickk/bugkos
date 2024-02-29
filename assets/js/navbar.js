$(document).ready(function () {
    var navbar = $('.navbar-scroll');
    var logoImage = $('#logoImage');
    var wordmarkImage = $('#wordmarkImage');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            navbar.addClass('navbar-shadow navbar-shrink');
            logoImage.removeClass('logo-grow');
            logoImage.addClass('logo-shrink');
            wordmarkImage.removeClass('logo-grow hide');
            wordmarkImage.addClass('logo-shrink show');
        } else {
            navbar.removeClass('navbar-shadow navbar-shrink');
            logoImage.addClass('logo-grow');
            logoImage.removeClass('logo-shrink');
            wordmarkImage.addClass('logo-grow hide');
            wordmarkImage.removeClass('logo-shrink show');
        }
    });
});
