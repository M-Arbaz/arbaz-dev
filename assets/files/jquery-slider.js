
$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: [ "<span class='owl-next'>&#10094;</span>", "<span class='owl-prev'>&#10095;</span>"],
        responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },  
                1400: {
                    items: 3
                }
            }
      });
});