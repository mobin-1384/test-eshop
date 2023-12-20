function Alert(time = 5000, status, text) {
    var icon = "";
    var color = "";
    if (status == "danger") {
        icon = '<i id="alert-icon" class="fa-regular fa-circle-xmark"></i>';
        color = "#dc3545";
    } else if (status == "success") {
        icon = '<i id="alert-icon" class="fa-regular fa-circle-check"></i>';
        color = "#2eb353";
    } else if (status == "info") {
        icon = '<i id="alert-icon" class="fa-solid fa-circle-info"></i>';
        color = "#17a2b8";
    } else if (status == "warning") {
        icon = '<i id="alert-icon" class="fa-regular fa-circle-question"></i>';
        color = "#ffc107";
    }
    var alert = document.querySelector("#alert");
    alert.style.display = "block";
    alert.innerHTML = `<div class="alertBox">${icon}<p>${text}</p><div id="status-bar"><div id="status--bar"></div></div></div>`;
    document.querySelector("#alert-icon").style.color = color;
    document.querySelector("#status--bar").style.backgroundColor = color;
    var statusBar = document.querySelector("#status--bar");
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