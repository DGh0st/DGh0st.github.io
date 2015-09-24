document.onscroll = function(){navbarmove()};
document.onwheel = function(){navbarmove()};
function navbarmove(){
        if(window.scrollY>=document.getElementById("mainbody").offsetTop){
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("navbar").style.position = "fixed";
    } else {
            document.getElementById("navbar").style.top = document.getElementById("mainbody").style.top;
            document.getElementById("navbar").style.position = "absolute";
    }
}

function openHome(){
	document.getElementsByClassName('about')[0].style.display='none';
	document.getElementsByClassName('projects')[0].style.display='none';
	document.getElementsByClassName('home')[0].style.display='block';
	document.getElementsByClassName('intro-header')[0].style.backgroundImage='url(img/code-2.jpg)';
	document.getElementById("headerTitle").innerHTML = "DGh0st";
	document.getElementById("headerDescription").innerHTML = "iOS Runtime Modification Developer";
	document.getElementById("navProjects").style.backgroundImage = 'none';
	document.getElementById("navAbout").style.backgroundImage = 'none';
	document.getElementById("navHome").style.backgroundImage = 'url(img/nav-bar-button-active.png)';
	document.getElementsByClassName('intro-divider')[0].style.width = '30%';
}

function openProjects(){
	document.getElementsByClassName('home')[0].style.display='none';
	document.getElementsByClassName('about')[0].style.display='none';
	document.getElementsByClassName('projects')[0].style.display='block';
	document.getElementsByClassName('intro-header')[0].style.backgroundImage='url(img/code.jpg)';
	document.getElementById("headerTitle").innerHTML = "Projects";
	document.getElementById("headerDescription").innerHTML = "\"Time is not money because it never returns.\" - Amit Abraham";
	document.getElementById("navAbout").style.backgroundImage = 'none';
	document.getElementById("navHome").style.backgroundImage = 'none';
	document.getElementById("navProjects").style.backgroundImage = 'url(img/nav-bar-button-active.png)';
	document.getElementsByClassName('intro-divider')[0].style.width = '30%';
}

function openAbout(){
	document.getElementsByClassName('home')[0].style.display='none';
	document.getElementsByClassName('projects')[0].style.display='none';
	document.getElementsByClassName('about')[0].style.display='block';
	document.getElementsByClassName('intro-header')[0].style.backgroundImage='url(img/code-1.jpg)';
	document.getElementById("headerTitle").innerHTML = "About Me";
	document.getElementById("headerDescription").innerHTML = "\"If efficiency is saving energy, isn't laziness just another word for efficiency?\" - me (maybe)";
	document.getElementById("navProjects").style.backgroundImage = 'none';
	document.getElementById("navHome").style.backgroundImage = 'none';
	document.getElementById("navAbout").style.backgroundImage = 'url(img/nav-bar-button-active.png)';
	document.getElementsByClassName('intro-divider')[0].style.width = '40%';
}