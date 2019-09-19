$(function () {
    // Smooth scrolling
    $("#navbarSupportedContent a.nav-link").on('click', function (event) {
        $('#navbarSupportedContent').collapse('hide');

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});