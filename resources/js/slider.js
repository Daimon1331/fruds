$('.slider1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev-slider1" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next-slider1" aria-label="Next" type="button"></button>',
});

$('.slider1-mob').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev-slider1-mob" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next-slider1-mob" aria-label="Next" type="button"></button>',
});

$('.slider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'slider-dots',
    prevArrow: '<button class="slick-prev-slider2" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next-slider2" aria-label="Next" type="button"></button>',
});

$('.slider3').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'slider-dots',
    prevArrow: '<button class="slick-prev-slider3" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next-slider3" aria-label="Next" type="button"></button>',
});

$('.next-slider1-mob').click(function () {
    $(".slider1-mob").slick('slickNext');
});

$('.prev-slider1-mob').click(function () {
    $(".slider1-mob").slick('slickPrev');
});

$('.next-slider2').click(function () {
    $(".slider2").slick('slickNext');
});

$('.next-slider3').click(function () {
    $(".slider3").slick('slickNext');
});

$('.menu-button').click(function () {
    $(".mob-nav").show();
    $(".menu-button").hide();
    $(".menu-cross").show();
    $("body").toggleClass("hidden");
});
$('.menu-cross, .mob-nav a').click(function () {
    $(".mob-nav").hide();
    $(".menu-button").show();
    $(".menu-cross").hide();
    $("body").toggleClass("hidden");
});


$('.apple-radius').click(function () {
    let openradius = $(this).attr('data-id');
    console.log(openradius)
    $("#applesvg"+openradius).toggleClass("hide");
    $("#img-hide"+openradius).toggleClass("hide");
    $("#bottlesvg"+openradius).toggleClass("show");
    $("#fruct"+openradius).toggleClass("show");
    $("#big-img"+openradius).toggleClass("resize");
});


$('.nav-header a, .arrow-down a').click(function () {
    let scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top - 100
        }, 500);
    }
});

$('#preloader').fadeOut(1000,function(){$(this).remove();});
