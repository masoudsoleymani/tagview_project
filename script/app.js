myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 0) {
        myID.className = "slide show"
    }
};

window.addEventListener("scroll", myScrollFunc);