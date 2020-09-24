myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 1) {
        myID.className = "slide show"
    }
};

window.addEventListener("scroll", myScrollFunc);