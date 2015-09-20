document.onscroll = function(){navbarmove()};
function navbarmove(){
        if(window.scrollY>=document.getElementById("mainbody").offsetTop){
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("navbar").style.position = "fixed";
    } else {
            document.getElementById("navbar").style.top = document.getElementById("mainbody").style.top;
            document.getElementById("navbar").style.position = "absolute";
    }
}

function openProjects(){
	document.getElementsByClassName('home')[0].style.display='none';
	document.getElementsByClassName('about')[0].style.display='none';
	document.getElementsByClassName('projects')[0].style.display='block';
	document.getElementsByClassName('intro-header')[0].style.backgroundImage='url(img/code.jpg)';
}

function openAbout(){
	document.getElementsByClassName('home')[0].style.display='none';
	document.getElementsByClassName('projects')[0].style.display='none';
	document.getElementsByClassName('about')[0].style.display='block';
	document.getElementsByClassName('intro-header')[0].style.backgroundImage='url(img/wooddesk.jpeg)';
}