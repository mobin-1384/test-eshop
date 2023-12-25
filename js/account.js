// ===============ACCOUNT================

// Call us drop down menu 

function dropDown(elem) {
    elem.classList.toggle("removeBorderBottom");
    // elem.nextElementSibling.style.display="flex";
    elem.nextElementSibling.classList.toggle("activeDropDown");
    let dropDown_i = elem.children[1];
    dropDown_i.classList.toggle("openDropDown");
}

// Singup

var showPass = document.querySelector("#showPass");
var password = document.querySelector("#password");
var passwordRe = document.querySelector("#passwordRe");
if (showPass != null) {
    showPass.addEventListener('change' ,function(){
        if (passwordRe == null) {
            if (this.checked) {
                password.type = "text";
            } else {
                password.type = "password";
            }
        } else {
            if (this.checked) {
                password.type = "text";
                passwordRe.type = "text";
            } else {
                password.type = "password";
                passwordRe.type = "password";
            }
        }
    });
}

var reCodeBtn = document.querySelector("#reCode");
if (reCodeBtn != null) {
    reCodeBtn.addEventListener("click", function(){
        var doneCodeBtn = document.querySelector("#doneCode");
        var reCodeLable = document.querySelector("#reCodeLable");
        var reCodeInp = document.querySelector("#reCodeInp");
        reCodeBtn.style.display="none";
        doneCodeBtn.style.display="block";
        reCodeLable.style.display="flex";
        reCodeInp.style.display="block";
        var text = "کد بازیابی با موفقیت برای شما ارسال شد !";
        Alert(5000, "success", text);
    });
}

var doneCode = document.querySelector("#doneCode");
if (doneCode != null) {
    doneCode.addEventListener("click", function(){
        window.open("./changePass.html", "_parent");
    });
}

// Send Ticket 

var selectBox = document.querySelector("#tSubject");
if (selectBox != null) {
    selectBox.addEventListener("change", function(){
        var selected_index = selectBox.selectedIndex;
        if (selected_index == 1) {
            document.querySelector("#divSubject").style.display = "block";
        } else {
            document.querySelector("#divSubject").style.display = "none";
        }
    })
}

function sendTicket() {
    var doneTicket = "تیکت با موفقیت ارسال شد !";
    Alert(5000, "success", doneTicket)
}