
// ============ MY ORDERS ============

var orderPartHeader = document.querySelector(".sectionHeader");
if (orderPartHeader != null) {
    var orderPartTitle = orderPartHeader.children;
    for (let i = 0; i < orderPartTitle.length; i++) {
        orderPartTitle[i].addEventListener("click", function () {
            document.querySelector(".orderActive").classList.remove("orderActive");
            this.classList.add("orderActive");
        })
    }
}

// ============ MY ITEMS ============

function addToCart(elem) {
    console.log(elem);
    var text = "محصول مورد نظر با موفقیت به سبد خرید اضافه شد !";
    Alert(5000, "success", text);
}

// ============= SEARCH PAGE ============

// var searchInp = document.querySelector("#searchInp");
// searchInp.addEventListener("keydown", function(){
//     console.log(searchInp.value);
// })

function searchBox(elem) {
    if (elem.value != "") {
        document.querySelector("#cleanSerchBox").style.display = "block";
    } else {
        document.querySelector("#cleanSerchBox").style.display = "none";
    }
}

function cleanSerchBox(elem) {
    document.querySelector("#searchInp").value = "";
    elem.style.display = "none";
}

// ============= PRODUCTS ============

function beRed(element) {
    // var heart = document.getElementById("addToHeart");
    if (element.classList[1] != "heartActive") {
        element.innerHTML = '<i class="fa-solid fa-heart"></i>';
        element.classList.add("heartActive");
    } else {
        element.innerHTML = '<i class="fa-regular fa-heart"></i>';
        element.classList.remove("heartActive");
    }
}

// ============= CART ============

function plusItem(elem) {
    var quantityIndicator = elem.nextElementSibling;
    var quantityString = quantityIndicator.innerHTML;
    var quantity = Number(quantityString);
    var total = quantity += 1;
    quantityIndicator.innerHTML = total;
}

function minusItem(elem) {
    var quantityIndicator = elem.previousElementSibling;
    var quantityString = quantityIndicator.innerHTML;
    var quantity = Number(quantityString);
    if (quantity == 1) {
        elem.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    } else {
        var total = quantity -= 1;
        quantityIndicator.innerHTML = total;
    }
}

function deleteItemBtn(elem) {
    elem.parentNode.parentNode.remove();
}

// ============= PRODUCT DETAIL PAGE ============

var bestSelling = $('.pdPic');

bestSelling.owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
    autoplay: false,
    dots: true,
    nav: false,
});