function Alert(time = 5000) {
    var alert = document.querySelector("#alert");
    alert.style.display = "block";
    alert.innerHTML = '<div class="alertBox"><i class="fa-regular fa-circle-check"></i><p>کد بازیابی با موفقیت برای شما ارسال شد !</p><div id="status-bar"><div id="status--bar"></div></div></div>';
    var statusBar = document.querySelector("#status--bar")
    var bar = 100;
    var progress = setInterval(function () {
        statusBar.style.width = bar + "%";
        bar -= (100 / (time / 10));
    }, 10);
    setTimeout(function () {
        alert.style.display = "none";
        clearInterval(progress);
    }, time);
}