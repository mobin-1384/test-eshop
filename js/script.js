

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
});

document.getElementsByClassName("owl-prev")[0].innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
document.getElementsByClassName("owl-next")[0].innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

// Amazing Offer Slider

var splide = new Splide('.splide', {
    drag: 'free',
    direction: 'rtl',
});

splide.mount();

// Best 

// and down 

function beRed(element) {
    // var heart = document.getElementById("addToHeart");
    if (element.classList != "heartActive") {
        element.innerHTML = '<i class="fa-solid fa-heart"></i>';
        element.classList.add("heartActive");
    } else {
        element.innerHTML = '<i class="fa-regular fa-heart"></i>';
        element.classList.remove("heartActive");
    }
}

function showDes(element) {
    var bestItem = element.parentElement.parentElement;
    var bestTop = bestItem.children[0];
    if (element.classList != "activeBar") {
        element.classList.add("activeBar");
        element.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
        bestTop.children[0].style.display = "none";
        bestTop.children[1].style.display = "none";
        bestTop.children[2].style.display = "block";
        setTimeout(showDes, 20000, element);
    } else {
        element.classList.remove("activeBar");
        element.innerHTML = '<i class="fa-solid fa-bars"></i>';
        bestTop.children[0].style.display = "flex";
        bestTop.children[1].style.display = "flex";
        bestTop.children[2].style.display = "none";
    }
}

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
    // responsive : {
    //     0 : {
    //         items : 1,
    //     } ,
    //     700 : {
    //         items : 2,
    //     } ,
    //     1100 : {
    //         items : 3,
    //     } ,
    //     1800 : {
    //         items : 5,
    //     }
    // },
});

// best slider

var bestSelling = $('.best');

bestSelling.owlCarousel({
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
        300 : {
            items : 2,
        } ,
        800 : {
            items : 3,
        } ,
        1024 : {
            items : 4,
        } ,
        1280 : {
            items : 5,
        } ,
        1500 : {
            items : 6,
        }
    },
});
