// JavaScript source code
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("headerh1").style.fontSize = "18px";
        document.getElementById("headerh1").style.padding = "0px";
        document.getElementById("headerh1").style.lineHeight = "32px";
        document.getElementById("navlink").style.margin = "0px";
        document.getElementById("navlink").style.fontSize = "14px";
        document.getElementsByClassName("listlink")[0].style.padding = "5px";
        document.getElementsByClassName("listlink")[1].style.padding = "5px";
        document.getElementsByClassName("listlink")[2].style.padding = "5px";
        document.getElementsByClassName("listlink")[3].style.padding = "5px";

    } else {
        document.getElementById("headerh1").style.fontSize = "32px";
        document.getElementById("headerh1").style.padding = "10px";
        document.getElementById("headerh1").style.lineHeight = "36px";
        document.getElementById("navlink").style.margin = "16px 0px 16px 55%";
        document.getElementById("navlink").style.fontSize = "16px";
        document.getElementsByClassName("listlink")[0].style.padding = "15px";
        document.getElementsByClassName("listlink")[1].style.padding = "15px";
        document.getElementsByClassName("listlink")[2].style.padding = "15px";
        document.getElementsByClassName("listlink")[3].style.padding = "15px";
    }
}