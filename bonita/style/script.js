$(document).ready(function () {
    $('.how-works-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay:true,
        autoplayTimeout: 7000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            }
        }
    });
});

