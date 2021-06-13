const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}



$(document).ready(function () {

    

    

    // owl-crousel for blog
    $('.owl .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl .owl-navigation .owl-nav-prev'), $('.owl .owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    $('.owl2 .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl2 .owl-navigation .owl-nav-prev'), $('.owl2 .owl-navigation .owl-nav-next')],
        responsive: responsive
    });
   $('.owl3 .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl3 .owl-navigation .owl-nav-prev'), $('.owl3 .owl-navigation .owl-nav-next')],
        responsive: responsive
    });
       $('.owl4 .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl4 .owl-navigation .owl-nav-prev'), $('.owl4 .owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to scroll top
   document.getElementById("toTop").onclick=function(){
       window.scrollTo({ top: 0, behavior: 'smooth' });
   }

    // AOS Instance
    AOS.init();

});