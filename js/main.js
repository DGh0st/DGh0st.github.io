document.onscroll = function(){navbarmove();}
document.onwheel = function(){navbarmove();}
window.onresize = function(){navbarmove();}
window.onload = function(){navbarmove();}

function navbarmove() {
    reinit();
    if (window.scrollY >= document.getElementById("mainbody").offsetTop) {
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("navbar").style.position = "fixed";
    } else {
            document.getElementById("navbar").style.top = document.getElementById("mainbody").style.top;
            document.getElementById("navbar").style.position = "absolute";
    }
}

function reinit() {
	var navHeight = document.getElementById("navbar").offsetHeight;
	document.getElementById("mainbody").style.paddingTop = navHeight + "px";
}