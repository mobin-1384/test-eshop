// ===============ACCOUNT================

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
        progressBar();
    });
}

function progressBar() {
    var alert = document.querySelector("#alert");
    var statusBar = document.querySelector("#status--bar")
    alert.style.display = "block";
    var bar = 100;
    var progress = setInterval(function(){
        statusBar.style.width= bar+"%";
        bar -= (100 / (5000 / 10));
    },10);
    setTimeout(function(){
        alert.style.display = "none";
        clearInterval(progress);
    },5000);
}
