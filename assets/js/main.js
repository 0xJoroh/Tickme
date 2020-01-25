$(() => {
    //navbar animation on scroll
    $(window).on('scroll', () => {
        var navmenu = $('#navbar');
        if ($(window).scrollTop() < 30) {
            navmenu.removeClass("on-scroll");
        } else {
            navmenu.addClass('on-scroll');
        }
    });

    //Smooth Scrolling
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    //toggle filters
    $("#toggle-filters").click(() => $("#filters").toggleClass("d-none"));
});