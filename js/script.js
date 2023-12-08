

// News Item Slider

var mainSlider = $('#news-item-slider')

mainSlider.owlCarousel({

    rtl: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
})

document.getElementsByClassName("owl-prev")[0].innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
document.getElementsByClassName("owl-next")[0].innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

// Amazing Offer Slider

var splide = new Splide('.splide', {
    drag: 'free',
    direction: 'rtl',
});

splide.mount();


// Main Article Slider

var mainArticleSlider = $('#main_article')

mainArticleSlider.owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive : {
        0 : {
            items : 1,
        } ,
        600 : {
            items : 2,
        } ,
        1000 : {
            items : 3,
        } ,
        1200 : {
            items : 5,
        }
    },
})