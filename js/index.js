function left() {
    document.getElementById("button1").classList.add("active__on");
    document.getElementById("button2").classList.remove("active__on");
    document.getElementById("button3").classList.remove("active__on");
    document.getElementById("gruzov").style.display = "block";
    document.getElementById("rasxodi").style.display = "none";
    document.getElementById("dostavka").style.display = "none";
    document.getElementById("dostavka").style.display = "none";
    
}

function center() {
    document.getElementById("button2").classList.add("active__on");
    document.getElementById("button1").classList.remove("active__on");
    document.getElementById("button3").classList.remove("active__on");
    document.getElementById("rasxodi").style.display = "block";
    document.getElementById("gruzov").style.display = "none"
    document.getElementById("dostavka").style.display = "none"
}

function right() {
    document.getElementById("button3").classList.add("active__on");
    document.getElementById("button1").classList.remove("active__on");
    document.getElementById("button2").classList.remove("active__on");
    document.getElementById("dostavka").style.display = "block";
    document.getElementById("rasxodi").style.display = "none"
    document.getElementById("gruzov").style.display = "none"
}