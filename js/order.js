
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


function showMoreDetail(elem) {
    elem.classList.remove("productOptionHidden");
    elem.children[1].style.display = "none";
    elem.children[0].children[0].style.display = "inline";
    elem.removeAttribute("onclick");
}

function closeMoreDetail(elem) {
    elem.parentNode.parentNode.classList.add("productOptionHidden");
    elem.style.display = "none";
    elem.parentNode.nextElementSibling.style.display = "block";
    setTimeout(() => {
        elem.parentNode.parentNode.setAttribute("onclick", "showMoreDetail(this)");
    }, 10);
}

var bestRelated = $('.bestRelated');

bestRelated.owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        440: {
            items: 2,
        },
        800: {
            items: 3,
        },
        1024: {
            items: 4,
        },
        1280: {
            items: 5,
        },
        1500: {
            items: 6,
        }
    },
});

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

// ============= COMMENTS ============

function newComment(elem) {
    elem.children[0].children[1].classList.add("BtnDeActive");
    elem.children[0].children[2].classList.remove("BtnDeActive");
    elem.removeAttribute("onclick");
    document.querySelector("#newCommentForm").style.display = "flex";
    elem.children[0].children[0].innerHTML = "نظر خود را بنویسید !";
    elem.classList.remove("newCommentHover");
}

function closeNewComment(elem) {
    elem.previousElementSibling.classList.remove("BtnDeActive");
    elem.classList.add("BtnDeActive");
    document.querySelector("#newCommentForm").style.display = "none";
    setTimeout(() => {
        elem.parentElement.parentElement.setAttribute("onclick", "newComment(this)");
        elem.parentElement.parentElement.classList.add("newCommentHover");
    }, 10);
    elem.previousElementSibling.previousElementSibling.innerHTML = "ثبت نظر جدید";
}

function newReply() {
    var newCommentTag = document.querySelector(".newComment");
    newComment(newCommentTag);
    newCommentTag.children[0].children[0].innerHTML = "پاسخ خود را بنویسید !";
    document.querySelector(".CommentItem").scrollIntoView();
    document.querySelector("#cmtText").focus();
}

if (document.querySelector(".replyLine") != null) {
    var replyLine = document.querySelectorAll(".replyLine");
    for (let i = 0; i < replyLine.length; i++) {
        var lastElem = replyLine[i].parentElement.previousElementSibling.children[0];
        var divHeight = replyLine[i].parentElement.clientHeight;

        if (lastElem.classList[0] == "replyLine") {
            lastElemHeight = lastElem.parentElement.clientHeight + 1.56;
            console.log(lastElemHeight / 2);
            replyLine[i].style.height = `${(lastElemHeight / 2) + (divHeight / 2) + 19}px`;
            replyLine[i].style.top = `-${(lastElemHeight / 2) + 17}px`;
        } else {
            replyLine[i].style.height = `${(divHeight / 2) + 19.56}px`;
            replyLine[i].style.top = "-18px";
        }
    }
}
