function left() {
    document.getElementById("gruzov").style.display = "block";
    document.getElementById("rasxodi").style.display = "none";
    document.getElementById("dostavka").style.display = "none";
}

function center() {
    document.getElementById("rasxodi").style.display = "block";
    document.getElementById("gruzov").style.display = "none"
    document.getElementById("dostavka").style.display = "none"
}

function right() {
    document.getElementById("dostavka").style.display = "block";
    document.getElementById("rasxodi").style.display = "none"
    document.getElementById("gruzov").style.display = "none"
}