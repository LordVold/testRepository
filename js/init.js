(function ($) {
    // init slick slider
    const slider = $(".main__top-title-slider");
    $(slider).slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,

        autoplay: true,
        autoplaySpeed: 5500,
    });
    slider.on('wheel', (function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));
}(jQuery));

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__lang-wrapper').toggleClass('hiden');
        $('.header__search').toggleClass('hiden');
    });

    $('.header__search').click(function (event) {
        $('.header__search-wrapper').addClass('search');
    });

    $('.header__search-span-wrapper').click(function (event) {
        $('.header__search-wrapper').removeClass('search');
    });
});
