
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

