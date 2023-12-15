// ===============ACCOUNT================

// Singup

var showPass = document.querySelector("#showPass");
var password = document.querySelector("#password");
var passwordRe = document.querySelector("#passwordRe");
showPass.addEventListener('change' ,function(){
    if (this.checked) {
        password.type = "text";
        passwordRe.type = "text";
    } else {
        password.type = "password";
        passwordRe.type = "password";
    }
});