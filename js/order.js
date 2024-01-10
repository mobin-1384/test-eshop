
// ============ MY ORDERS ============

var orderPartHeader = document.querySelector(".sectionHeader");
if (orderPartHeader != null) {
    var orderPartTitle = orderPartHeader.children;
    for (let i = 0; i < orderPartTitle.length; i++) {
        orderPartTitle[i].addEventListener("click", function(){
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
