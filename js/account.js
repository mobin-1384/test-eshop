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
var newpassword = document.querySelector("#newpassword");
if (showPass != null) {
    showPass.addEventListener('change', function () {
        if (this.checked) {
            if (passwordRe == null) {
                password.type = "text";
            } else if (newpassword == null) {
                password.type = "text";
                passwordRe.type = "text";
            } else {
                password.type = "text";
                passwordRe.type = "text";
                newpassword.type = "text";
            }
        } else {
            if (passwordRe == null) {
                password.type = "password";
            } else if (newpassword == null) {
                password.type = "password";
                passwordRe.type = "password";
            } else {
                password.type = "password";
                passwordRe.type = "password";
                newpassword.type = "password";
            }
        }
    });
}

var reCodeBtn = document.querySelector("#reCode");
if (reCodeBtn != null) {
    reCodeBtn.addEventListener("click", function () {
        var doneCodeBtn = document.querySelector("#doneCode");
        var reCodeLable = document.querySelector("#reCodeLable");
        var reCodeInp = document.querySelector("#reCodeInp");
        reCodeBtn.style.display = "none";
        doneCodeBtn.style.display = "block";
        reCodeLable.style.display = "flex";
        reCodeInp.style.display = "block";
        var text = "کد بازیابی با موفقیت برای شما ارسال شد !";
        Alert(5000, "success", text);
    });
}

var doneCode = document.querySelector("#doneCode");
if (doneCode != null) {
    doneCode.addEventListener("click", function () {
        window.open("./changePass.html", "_parent");
    });
}

// Send Ticket 

var selectBox = document.querySelector("#tSubject");
if (selectBox != null) {
    selectBox.addEventListener("change", function () {
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

// show response Ticket

function showResponseTxt(elem) {
    elem.children[1].classList.toggle("openDropDown");
    elem.nextElementSibling.classList.toggle("ResponseTxtActive");
}

// edit profile

function saveProfile() {
    var proName = document.querySelector("#proName");
    var proNumber = document.querySelector("#proPhone");
    if (proName.value == "" || proNumber.value == "") {
        var completeSave = "لطفا فیلد‌هایی که ستاره قرمز دارند را تکمیل کنید !";
        Alert(5000, "danger", completeSave);
    }
    else {
        var doneSave = "اطلاعات شما با موفقیت ذخیره شد !";
        Alert(5000, "success", doneSave)
    }
}

// edit address

function saveAddress() {
    var addProvince = document.querySelector("#addProvince");
    var addCity = document.querySelector("#addCity");
    if (addProvince.value == "" || addCity.value == "") {
        var completeSave = "لطفا فیلد‌هایی که ستاره قرمز دارند را تکمیل کنید !";
        Alert(5000, "danger", completeSave);
    }
    else {
        var doneSave = "آدرس شما با موفقیت ذخیره شد !";
        Alert(5000, "success", doneSave)
    }
}