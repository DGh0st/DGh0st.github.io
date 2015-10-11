window.onload = function(){init()};
var iosprojects = ['<div class = "tweak"><h3>WhiteListSwitcherClose</h3><img src="img/WhitelistSwitcher.gif"><br><a href="https://www.github.com/DGh0st/WhiteListSwitcherClose">GitHub</a><h5>Whitelist applications to become irremovable from the switcher and also blacklist applications to be restartable instead of closed.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=whitelistswitchercloseDp">BigBoss</a></h5></div>',
		    '<div class = "tweak"><h3>AlertClose</h3><img src="img/AlertClose.png"><br><a href="https://www.github.com/DGh0st/AlertClose">GitHub</a><h5>Display an alert stylesheet while closing applications.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=alertcloseDp">BigBoss</a></h5></div>',
                    '<div class = "tweak"><h3>AppSwitcherCurrentOrig</h3><img src="img/AppSwitchCurent.gif"><br><a href="https://www.github.com/DGh0st/AppSwitchCurrentOrig">GitHub</a><h5>Open App Switcher to current instead of last app. Official version called AppSwitchCurrent.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=appswitchcurrentDp">BigBoss</a>, <a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://DGh0st.github.io/">DGh0st Beta Repo</a></h5></div>',
                    '<div class = "tweak"><h3>DarkAuxo</h3><img src="img/DarkAuxo.png"><br><a href="https://www.github.com/DGh0st/DarkAuxo">GitHub</a><h5>Makes Auxo LE dark, works with regular Control Center.</h5><h5>Repo: <a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://DGh0st.github.io/">DGh0st Beta Repo</a></h5></div>',
                    '<div class = "tweak"><h3>DefaultPage</h3><img src="img/DefaultPage.gif"><br><a href="https://www.github.com/DGh0st/DefaultPage">GitHub</a><h5>Set a custom default home screen page.</h5><h5>Repo: <a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://DGh0st.github.io/">DGh0st Beta Repo</a></h5></div>',
                    '<div class = "tweak"><h3>DelayVolChange</h3><img src="img/DelayVolChange.png"><br><a href="https://www.github.com/DGh0st/DelayVolChange">GitHub</a><h5>Prevents the first volume press to actually effect the volume.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=delayvolchangeDp">BigBoss</a></h5></div>',
                    '<div class = "tweak"><h3>NCClearText</h3><img src="img/NCClearText.png"><br><a href="https://www.github.com/DGh0st/NCClearText">GitHub</a><h5>Set a custom text for the Notification Center Clear text.</h5><h5>Repo: <a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://DGh0st.github.io/">DGh0st Beta Repo</a></h5></div>',
                    '<div class = "tweak"><h3>NoUpsideDown</h3><img src="img/NoUpsideDown.png"><br><a href="https://www.github.com/DGh0st/NoUpsideDown">GitHub</a><h5>Disable UpsideDown Orientation throughout IOS.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=noupsidedownDp">BigBoss</a></h5></div>',
                    '<div class = "tweak"><h3>ReachOffset</h3><img src="img/ReachOffset.png"><br><a href="https://www.github.com/DGh0st/ReachOffset">GitHub</a><h5>Set a custom reachability height/offset.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=reachoffsetDp">BigBoss</a></h5></div>'];
var shouldAutoSlide = true;
var i = 1;
var animating = false;
function previous(){
	shouldAutoSlide = false;
	var div = document.getElementById("projects-slide");
	div.children[3].style.animation = "fadeOutToRight 1s 0.5";
	if(--i <= 0){
		i = iosprojects.length;
	}
	div.innerHTML = iosprojects[i % iosprojects.length];
	div.innerHTML += iosprojects[(i + 1) % iosprojects.length];
	div.innerHTML += iosprojects[(i + 2) % iosprojects.length];
	div.innerHTML += iosprojects[(i + 3) % iosprojects.length];
	setInterval(function() {shouldAutoSlide = true;}, 500000);
	div.children[3].style.animation = "slideFromLeft 1s 1";
	div.children[2].style.animation = "slideFromLeft 1s 1";
	div.children[1].style.animation = "slideFromLeft 1s 1";	
	div.children[0].style.animation = "fadeInFromLeft 1s 1";
}

function next(){
	shouldAutoSlide = false;
	var div = document.getElementById("projects-slide");
	div.children[0].style.animation = "fadeOutToRight 1s 1";
	if(++i > iosprojects.length - 1){
		i = 1;
	}
	div.innerHTML = iosprojects[i % iosprojects.length];
	div.innerHTML += iosprojects[(i + 1) % iosprojects.length];
	div.innerHTML += iosprojects[(i + 2) % iosprojects.length];
	div.innerHTML += iosprojects[(i + 3) % iosprojects.length];
	setInterval(function() {shouldAutoSlide = true;}, 500000);
	div.children[3].style.animation = "fadeInFromRight 1s 1";
	div.children[2].style.animation = "slideFromRight 1s 1";
	div.children[1].style.animation = "slideFromRight 1s 1";	
	div.children[0].style.animation = "slideFromRight 1s 1";
}

function fadeSlides(){

}

var autoSlide = setInterval(autoSlideNext, 10000);

function autoSlideNext() {
	if(shouldAutoSlide){
		if(++i > iosprojects.length - 1){
			i = 0;
		}
		var div = document.getElementById("projects-slide");
		div.innerHTML = iosprojects[(i + 3) % iosprojects.length];
		div.innerHTML = iosprojects[(i + 2) % iosprojects.length] + div.innerHTML;
		div.innerHTML = iosprojects[(i + 1) % iosprojects.length] + div.innerHTML;
		div.innerHTML = iosprojects[i % iosprojects.length] + div.innerHTML;
		div.children[3].style.animation = "fadeInFromRight 1s 1";
		div.children[2].style.animation = "slideFromRight 1s 1";
		div.children[1].style.animation = "slideFromRight 1s 1";	
		div.children[0].style.animation = "slideFromRight 1s 1";
  	}
}

function init(){
	var div = document.getElementById("projects-slide");
	div.innerHTML = iosprojects[i % iosprojects.length];
	div.innerHTML += iosprojects[(i + 1) % iosprojects.length];
	div.innerHTML += iosprojects[(i + 2) % iosprojects.length];
	div.innerHTML += iosprojects[(i + 3) % iosprojects.length];
};