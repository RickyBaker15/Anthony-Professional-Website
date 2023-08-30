// JavaScript source code
// When the user scrolls down 50px from the top of the document, resize the header's font size
const windowInnerWidth = window.innerWidth;

if (windowInnerWidth > 800) {
    window.onscroll = function () { scrollFunction() };
}

function scrollFunction() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {

            document.getElementById("headert").style.width = "100%";


            document.getElementById("headerh1").innerHTML = "AL";
            document.getElementById("headerh1").style.margin = "0px";

            document.getElementById("navlink").style.margin = "0px";


 

        } else {

            document.getElementById("headert").style.width = "100%";

            document.getElementById("headerh1").innerHTML = "Anthony's Website";
            document.getElementById("headerh1").style.margin = "15px";

            document.getElementById("navlink").style.margin = "15px";
            document.getElementById("navlink").style.marginLeft = "55%";


            
        }
}