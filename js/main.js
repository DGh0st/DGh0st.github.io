document.onscroll = function(){navbarmove()};
document.onwheel = function(){navbarmove()};
document.onresize = function(){changeNavFontSize()};
document.onload = function(){changeNavFontSize()};

function navbarmove() {
    if (window.scrollY >= document.getElementById("mainbody").offsetTop) {
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("navbar").style.position = "fixed";
    } else {
            document.getElementById("navbar").style.top = document.getElementById("mainbody").style.top;
            document.getElementById("navbar").style.position = "absolute";
    }
}