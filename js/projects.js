document.onload = function(){init()};

var iosprojects = [
			'<div class = "tweak-hidden"><h3>UndoRotation</h3><img src="img/UndoRotation.png"><br><a href="https://www.github.com/DGh0st/UndoRotation">GitHub</a><center><h5>Undo last rotation and/or lock orientation.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=undorotationDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.undorotation">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>WhiteListSwitcherClose</h3><img src="img/WhitelistSwitcher.gif"><br><a href="https://www.github.com/DGh0st/WhiteListSwitcherClose">GitHub</a><center><h5>Whitelist applications instead of closing.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=whitelistswitchercloseDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.whitelistswitcher">DGh0st Beta Repo</a></h5></center></div>',
		    '<div class = "tweak-hidden"><h3>AlertClose</h3><img src="img/AlertClose.png"><br><a href="https://www.github.com/DGh0st/AlertClose">GitHub</a><center><h5>Display an alert when closing applications.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=alertcloseDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.alertclose">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>AppSwitcherCurrentOrig</h3><img src="img/AppSwitchCurent.gif"><br><a href="https://www.github.com/DGh0st/AppSwitchCurrentOrig">GitHub</a><center><h5>Open App Switcher to current app.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=appswitchcurrentDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.appswitchcurrentOrig">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>CenterObey</h3><img src="img/CenterObey.gif"><br><a href="https://www.github.com/DGh0st/CenterObey">GitHub</a><center><h5>Make CC and NC obey finger position.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.centerobey">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>DarkAuxo</h3><img src="img/DarkAuxo.png"><br><a href="https://www.github.com/DGh0st/DarkAuxo">GitHub</a><center><h5>Make Auxo LE (including regular CC) dark.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.darkauxo">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>DefaultPage</h3><img src="img/DefaultPage.gif"><br><a href="https://www.github.com/DGh0st/DefaultPage">GitHub</a><center><h5>Set a custom default home screen page.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.defaultpage">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>DelayVolChange</h3><img src="img/DelayVolChange.png"><br><a href="https://www.github.com/DGh0st/DelayVolChange">GitHub</a><center><h5>Prevents first volume press to take effect.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=delayvolchangeDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.delayvolchange">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>DVirtualHome</h3><img src="img/DVirtualHome.png"><br><a href="https://www.github.com/DGh0st/DVirtualHome">GitHub</a><center><h5>My attempt at making virtual home for iOS 10.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.dvirtualhome">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>EnhancedSwitcherClose</h3><img src="img/EnhancedSwitcherClose.png"><br><a href="https://www.github.com/DGh0st/EnhancedSwitcherClose">GitHub</a><center><h5>Display view underneath the swiped application.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=enhancedswitchercloseDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.enhancedswitcherclose">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>HomeCardIconLabel</h3><img src="img/HomeCardIconLabel.png"><br><a href="https://www.github.com/DGh0st/HomeCardIconLabel">GitHub</a><center><h5>Add icon and label to the homescreen card.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=homecardiconlabelDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.homecardiconlabel">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NCClearText</h3><img src="img/NCClearText.png"><br><a href="https://www.github.com/DGh0st/NCClearText">GitHub</a><center><h5>Set custom text for the NC Clear text.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.nccleartext">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NoHomeTapOnHS</h3><img src="img/NoHomeTapOnHS.png"><br><a href="https://www.github.com/DGh0st/NoHomeTapOnHS">GitHub</a><center><h5>Disable the home button taps on homescreen.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.nohometaponhs">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NoLSNotificationBlur</h3><img src="img/NoLSNotificationBlur.png"><br><a href="https://www.github.com/DGh0st/NoLSNotificationBlur">GitHub</a><center><h5>Remove blur when notification is received.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.nolsnotificationblur">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NoLSNotificationSeparators</h3><img src="img/NoLSNotificationSeparators.png"><br><a href="https://www.github.com/DGh0st/NoLSNotificationSeparators">GitHub</a><center><h5>Remove lockscreen notification separators.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.nolsnotificationseparators">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NoUpsideDown</h3><img src="img/NoUpsideDown.png"><br><a href="https://www.github.com/DGh0st/NoUpsideDown">GitHub</a><center><h5>Disable UpsideDown Orientation throughout IOS.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=noupsidedownDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.noupsidedown">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>ProductivityReminder</h3><img src="img/ProductivityReminder.png"><br><a href="https://www.github.com/DGh0st/ProductivityReminder">GitHub</a><center><h5>Be reminded to get back to work.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.productivityreminder">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>ReachOffset</h3><img src="img/ReachOffset.png"><br><a href="https://www.github.com/DGh0st/ReachOffset">GitHub</a><center><h5>Set a custom reachability height/offset.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=reachoffsetDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.reachoffset">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>ShiftTopSwitcher</h3><img src="img/ShiftTopSwitcher.png"><br><a href="https://www.github.com/DGh0st/ShiftTopSwitcher">GitHub</a><center><h5>Shift the top application in the switcher.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.shifttopswitcher">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>SwitcherControls</h3><img src="img/SwitcherControls.png"><br><a href="https://www.github.com/DGh0st/SwitcherControls">GitHub</a><center><h5>My attempt at making multi-center for iOS 10.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=switchercontrolsDp">BigBoss</a></h5></center></div>',
		];

var shouldAutoSlide = true;
var i = 0;
var isAnimating = false;

function previous() {
	if (isAnimating) {
		return;
	}
	
	isAnimating = true;
	shouldAutoSlide = false;
	var div = document.getElementById("projects-slide");
	if(--i <= 0){
		i = iosprojects.length - 1;
	}
	
	div.children[2].children[4].style.animation = "fadeOutText 0.20s 1";
	setTimeout(function() {
		div.innerHTML = iosprojects[i % iosprojects.length];
		div.innerHTML += iosprojects[(i + 1) % iosprojects.length];
		div.innerHTML += iosprojects[(i + 2) % iosprojects.length];
		div.innerHTML += iosprojects[(i + 3) % iosprojects.length];
		div.innerHTML += iosprojects[(i + 4) % iosprojects.length];
		setInterval(function() {shouldAutoSlide = true;}, 500000);
		div.children[4].className = "tweak-hidden";
		div.children[4].style.animation = "fadeOutFromleft 0.5s 1";
		div.children[3].className = "tweak-small";
		div.children[3].style.animation = "slideFromLeftToSmaller 0.5s 1";
		div.children[2].className = "tweak-animating";
		div.children[2].style.animation = "slideFromLeftToBigger 0.5s 1";
		div.children[1].className = " tweak-small";
		div.children[1].style.animation = "fadeInFromLeft 0.5s 1";
		div.children[0].className = "tweak-hidden";
		setTimeout(function() {
			isAnimating = false;
			div.children[2].className = "tweak";
			div.children[2].children[4].style.animation = "fadeInText 0.20s 1";
		}, 500);
	}, 200);
}

function next() {
	if (isAnimating) {
		return;
	}

	isAnimating = true;
	shouldAutoSlide = false;
	var div = document.getElementById("projects-slide");
	if(++i > iosprojects.length - 1) {
		i = 0;
	}

	div.children[2].children[4].style.animation = "fadeOutText 0.20s 1";
	setTimeout(function() {
		div.innerHTML = iosprojects[(i + 4) % iosprojects.length];
		div.innerHTML = iosprojects[(i + 3) % iosprojects.length] + div.innerHTML;
		div.innerHTML = iosprojects[(i + 2) % iosprojects.length] + div.innerHTML;
		div.innerHTML = iosprojects[(i + 1) % iosprojects.length] + div.innerHTML;
		div.innerHTML = iosprojects[i % iosprojects.length] + div.innerHTML;
		setInterval(function() {shouldAutoSlide = true;}, 500000);
		div.children[0].className = "tweak-hidden";
		div.children[0].style.animation = "fadeOutFromRight 0.5s 1";
		div.children[1].className = "tweak-small";
		div.children[1].style.animation = "slideFromRightToSmaller 0.5s 1";
		div.children[2].className = "tweak-animating";
		div.children[2].style.animation = "slideFromRightToBigger 0.5s 1";
		div.children[3].className = "tweak-small";
		div.children[3].style.animation = "fadeInFromRight 0.5s 1";
		div.children[4].className = "tweak-hidden";
		setTimeout(function() {
			isAnimating = false;
			div.children[2].className = "tweak";
			div.children[2].children[4].style.animation = "fadeInText 0.20s 1";
		}, 500);
	}, 200);
}

var autoSlide = setInterval(autoSlideNext, 10000);

function autoSlideNext() {
	if (isAnimating) {
		return;
	}
	
	if(shouldAutoSlide) {
		isAnimating = true;
		var div = document.getElementById("projects-slide");
		if(++i > iosprojects.length - 1){
			i = 0;
		}

		div.children[2].children[4].style.animation = "fadeOutText 0.20s 1";
		setTimeout(function() {
			div.innerHTML = iosprojects[(i + 4) % iosprojects.length];
			div.innerHTML = iosprojects[(i + 3) % iosprojects.length] + div.innerHTML;
			div.innerHTML = iosprojects[(i + 2) % iosprojects.length] + div.innerHTML;
			div.innerHTML = iosprojects[(i + 1) % iosprojects.length] + div.innerHTML;
			div.innerHTML = iosprojects[i % iosprojects.length] + div.innerHTML;
			div.children[0].className = "tweak-hidden";
			div.children[0].style.animation = "fadeOutFromRight 0.5s 1";
			div.children[1].className = "tweak-small";
			div.children[1].style.animation = "slideFromRightToSmaller 0.5s 1";
			div.children[2].className = "tweak-animating";
			div.children[2].style.animation = "slideFromRightToBigger 0.5s 1";
			div.children[3].className = "tweak-small";
			div.children[3].style.animation = "fadeInFromRight 0.5s 1";
			div.children[4].className = "tweak-hidden";
			setTimeout(function() {
				isAnimating = false;
				div.children[2].className = "tweak";
				div.children[2].children[4].style.animation = "fadeInText 0.20s 1";
			}, 500);
		}, 200);
  	}
}

var weeks = ['week1', 'week2'];

function changeWeek(week) {
	for (var i = 0; i < weeks.length; i++) {
		document.getElementById(weeks[i]).style = "display: none;";
	}
	document.getElementById(weeks[week]).style = "display: block;";

	var links = document.getElementsByClassName("weeks-tab")[0].children;
	for (var i = 0; i < links.length; i++) {
		links[i].className = "";
	}

	links[week].className = "selected";
}

function init() {
	var div = document.getElementById("projects-slide");
	iosprojects[i % iosprojects.length].className = "tweak-hidden";
	div.innerHTML = iosprojects[i % iosprojects.length];
	iosprojects[(i + 1) % iosprojects.length].className = "tweak-small";
	div.innerHTML += iosprojects[(i + 1) % iosprojects.length];
	iosprojects[(i + 2) % iosprojects.length].className = "tweak";
	div.innerHTML += iosprojects[(i + 2) % iosprojects.length];
	iosprojects[(i + 3) % iosprojects.length].className = "tweak-small";
	div.innerHTML += iosprojects[(i + 3) % iosprojects.length];
	iosprojects[(i + 4) % iosprojects.length].className = "tweak-hidden";
	div.innerHTML += iosprojects[(i + 4) % iosprojects.length];
}