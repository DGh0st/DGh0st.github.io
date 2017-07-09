document.onload = function(){init()};

var iosprojects = [
			'<div class = "tweak-hidden"><h3>UndoRotation</h3><img src="img/UndoRotation.png"><br><a href="https://www.github.com/DGh0st/UndoRotation">GitHub</a><center><h5>Whenever you rotate your device, a button will be displayed on the screen allowing you to either undo rotation, lock orientation or both.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=undorotationDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.undorotation">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>WhiteListSwitcherClose</h3><img src="img/WhitelistSwitcher.gif"><br><a href="https://www.github.com/DGh0st/WhiteListSwitcherClose">GitHub</a><center><h5>Create a whitelist of applications that will make applications irremovable, restart or launch when you try to close it via application switcher.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=whitelistswitchercloseDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.whitelistswitcher">DGh0st Beta Repo</a></h5></center></div>',
		    '<div class = "tweak-hidden"><h3>AlertClose</h3><img src="img/AlertClose.png"><br><a href="https://www.github.com/DGh0st/AlertClose">GitHub</a><center><h5>Display an alert with option to close, relaunch, dismiss switcher and cancel when you swipe application up through application switcher.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=alertcloseDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.alertclose">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>AppSwitcherCurrentOrig</h3><img src="img/AppSwitchCurent.gif"><br><a href="https://www.github.com/DGh0st/AppSwitchCurrentOrig">GitHub</a><center><h5>Opens the app switcher to the current application instead of the last application. Official version is named AppSwitcherCurrent.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=appswitchcurrentDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.appswitchcurrentOrig">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>CenterObey</h3><img src="img/CenterObey.gif"><br><a href="https://www.github.com/DGh0st/CenterObey">GitHub</a><center><h5>Makes Control Center and Notification Center obey based on finger position. The page corresponding to finger position will open.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.centerobey">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>DarkAuxo</h3><img src="img/DarkAuxo.png"><br><a href="https://www.github.com/DGh0st/DarkAuxo">GitHub</a><center><h5>Makes Control Center and Notification Center (iOS 8 and 9 only) dark (including tweaks like AuxoLE).</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.darkauxo">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>DefaultPage</h3><img src="img/DefaultPage.gif"><br><a href="https://www.github.com/DGh0st/DefaultPage">GitHub</a><center><h5>Set the default homescreen page to go to on home button click and set the default page to download new applications on.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.defaultpage">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>DelayVolChange</h3><img src="img/DelayVolChange.png"><br><a href="https://www.github.com/DGh0st/DelayVolChange">GitHub</a><center><h5>This tweak makes it so that volume is only changed when the HUD is visible so the first volume press does not effect the volume level.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=delayvolchangeDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.delayvolchange">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>DVirtualHome</h3><img src="img/DVirtualHome.png"><br><a href="https://www.github.com/DGh0st/DVirtualHome">GitHub</a><center><h5>Brings virtual home to iOS 10. Tap your home button instead of pressing it and add haptic feedback.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.dvirtualhome">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>EnhancedSwitcherClose</h3><img src="img/EnhancedSwitcherClose.png"><br><a href="https://www.github.com/DGh0st/EnhancedSwitcherClose">GitHub</a><center><h5>Display a view behind the swiped application in the switcher with unique actions at different vertical offset.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=enhancedswitchercloseDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.enhancedswitcherclose">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>FloatingDock</h3><img src="img/FloatingDock.png"><br><a href="https://www.github.com/DGh0st/FloatingDock">GitHub</a><center><h5>Gives the dock a floating look and makes the corners round. Works in portrait and landscape mode.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.floatingdock">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>HideCCSwitchBackground</h3><img src="img/HideCCSwitchBackground.png"><br><a href="https://www.github.com/DGh0st/HideCCSwitchBackground">GitHub</a><center><h5>Remove the background of buttons in the CC. Requires removal of white overlay if flipswitch not installed.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.hideccswitchbackground">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>HomeCardIconLabel</h3><img src="img/HomeCardIconLabel.png"><br><a href="https://www.github.com/DGh0st/HomeCardIconLabel">GitHub</a><center><h5>Add home icon and label to the homescreen card. Change icon by replacing icons at /Library/Application Support/HomeCardIconLabel</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=homecardiconlabelDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.homecardiconlabel">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>InvisibleHomeCard</h3><img src="img/InvisibleHomeCard.png"><br><a href="https://www.github.com/DGh0st/InvisibleHomeCard">GitHub</a><center><h5>Make the homescreen card invisible inside app switcher to get the perception that it has been removed.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.invisblehomecard">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NCClearText</h3><img src="img/NCClearText.png"><br><a href="https://www.github.com/DGh0st/NCClearText">GitHub</a><center><h5>Set the Notification\'s "clear" and Notification Center\'s "No Notification" text to custom text from the settings application.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.nccleartext">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NoHomeTapOnHS</h3><img src="img/NoHomeTapOnHS.png"><br><a href="https://www.github.com/DGh0st/NoHomeTapOnHS">GitHub</a><center><h5>Disable the home button taps and presses on the homesceen to not animate to the default homescreen page.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.nohometaponhs">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NoLSNotificationBlur</h3><img src="img/NoLSNotificationBlur.png"><br><a href="https://www.github.com/DGh0st/NoLSNotificationBlur">GitHub</a><center><h5>Remove the lockscren blur that is displayed underneath default lockscreen when there are notifications.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.nolsnotificationblur">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NoLSNotificationSeparators</h3><img src="img/NoLSNotificationSeparators.png"><br><a href="https://www.github.com/DGh0st/NoLSNotificationSeparators">GitHub</a><center><h5>Remove the separators at the top and bottom of notifications list view when there are notifications on the lockscreen.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.nolsnotificationseparators">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>NoUpsideDown</h3><img src="img/NoUpsideDown.png"><br><a href="https://www.github.com/DGh0st/NoUpsideDown">GitHub</a><center><h5>This tweaks will disable the upside down orientation throughout iOS. No more worrying about your device turning upside down.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=noupsidedownDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.noupsidedown">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>ProductivityReminder</h3><img src="img/ProductivityReminder.png"><br><a href="https://www.github.com/DGh0st/ProductivityReminder">GitHub</a><center><h5>Display an alert x minutes after application open to be reminded to get back to work and configure minutes via settings application.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.productivityreminder">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>ReachOffset</h3><img src="img/ReachOffset.png"><br><a href="https://www.github.com/DGh0st/ReachOffset">GitHub</a><center><h5>Customize many settings related to the reachability offset and adds ability to customize offset based on time between clicks.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=reachoffsetDp">BigBoss</a>, <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.reachoffset">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>SCAppShortcuts</h3><img src="img/SCAppShortcuts.png"><br><a href="https://www.github.com/DGh0st/SCAppShortcuts">GitHub</a><center><h5>Add another section to SwitcherControls. This section contains a list of application which can be launched.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.scappshortcuts">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>SCTextSection</h3><img src="img/SCTextSection.png"><br><a href="https://www.github.com/DGh0st/SCTextSection">GitHub</a><center><h5>Add another section to SwitcherControls. This section contains custom text which can be modified via settings application.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.sctextsection">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>ShiftTopSwitcher</h3><img src="img/ShiftTopSwitcher.png"><br><a href="https://www.github.com/DGh0st/ShiftTopSwitcher">GitHub</a><center><h5>Shifts the top application in the deck switcher so it seems the app switcher is open to current application.</h5><h5>Repo: <a href="https://dgh0st.github.io/Files/?p=com.dgh0st.shifttopswitcher">DGh0st Beta Repo</a></h5></center></div>',
            '<div class = "tweak-hidden"><h3>SwitcherControls</h3><img src="img/SwitcherControls.png"><br><a href="https://www.github.com/DGh0st/SwitcherControls">GitHub</a><center><h5>Brings multi-center to iOS 10. Have access to various control center sections while using deck switcher.</h5><h5>Repo: <a href="http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=switchercontrolsDp">BigBoss</a></h5></center></div>',
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
	if(--i < 0){
		i = iosprojects.length - 1;
	}
	
	div.children[2].children[4].style.animation = "fadeOutText 0.10s 1";
	setTimeout(function() {
		div.innerHTML = iosprojects[i % iosprojects.length];
		div.innerHTML += iosprojects[(i + 1) % iosprojects.length];
		div.innerHTML += iosprojects[(i + 2) % iosprojects.length];
		div.innerHTML += iosprojects[(i + 3) % iosprojects.length];
		div.innerHTML += iosprojects[(i + 4) % iosprojects.length];
		setTimeout(function() {shouldAutoSlide = true;}, 330000);
		div.children[4].className = "tweak-hidden";
		div.children[4].style.animation = "fadeOutFromleft 0.33s 1";
		div.children[3].className = "tweak-small";
		div.children[3].style.animation = "slideFromLeftToSmaller 0.33s 1";
		div.children[2].className = "tweak-animating";
		div.children[2].style.animation = "slideFromLeftToBigger 0.33s 1";
		div.children[1].className = " tweak-small";
		div.children[1].style.animation = "fadeInFromLeft 0.33s 1";
		div.children[0].className = "tweak-hidden";
		setTimeout(function() {
			isAnimating = false;
			div.children[2].className = "tweak";
			div.children[2].children[4].style.animation = "fadeInText 0.10s 1";
		}, 330);
	}, 100);
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

	div.children[2].children[4].style.animation = "fadeOutText 0.10s 1";
	setTimeout(function() {
		div.innerHTML = iosprojects[(i + 4) % iosprojects.length];
		div.innerHTML = iosprojects[(i + 3) % iosprojects.length] + div.innerHTML;
		div.innerHTML = iosprojects[(i + 2) % iosprojects.length] + div.innerHTML;
		div.innerHTML = iosprojects[(i + 1) % iosprojects.length] + div.innerHTML;
		div.innerHTML = iosprojects[i % iosprojects.length] + div.innerHTML;
		setTimeout(function() {shouldAutoSlide = true;}, 330000);
		div.children[0].className = "tweak-hidden";
		div.children[0].style.animation = "fadeOutFromRight 0.33s 1";
		div.children[1].className = "tweak-small";
		div.children[1].style.animation = "slideFromRightToSmaller 0.33s 1";
		div.children[2].className = "tweak-animating";
		div.children[2].style.animation = "slideFromRightToBigger 0.33s 1";
		div.children[3].className = "tweak-small";
		div.children[3].style.animation = "fadeInFromRight 0.33s 1";
		div.children[4].className = "tweak-hidden";
		setTimeout(function() {
			isAnimating = false;
			div.children[2].className = "tweak";
			div.children[2].children[4].style.animation = "fadeInText 0.10s 1";
		}, 330);
	}, 100);
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

		div.children[2].children[4].style.animation = "fadeOutText 0.10s 1";
		setTimeout(function() {
			div.innerHTML = iosprojects[(i + 4) % iosprojects.length];
			div.innerHTML = iosprojects[(i + 3) % iosprojects.length] + div.innerHTML;
			div.innerHTML = iosprojects[(i + 2) % iosprojects.length] + div.innerHTML;
			div.innerHTML = iosprojects[(i + 1) % iosprojects.length] + div.innerHTML;
			div.innerHTML = iosprojects[i % iosprojects.length] + div.innerHTML;
			div.children[0].className = "tweak-hidden";
			div.children[0].style.animation = "fadeOutFromRight 0.33s 1";
			div.children[1].className = "tweak-small";
			div.children[1].style.animation = "slideFromRightToSmaller 0.33s 1";
			div.children[2].className = "tweak-animating";
			div.children[2].style.animation = "slideFromRightToBigger 0.33s 1";
			div.children[3].className = "tweak-small";
			div.children[3].style.animation = "fadeInFromRight 0.33s 1";
			div.children[4].className = "tweak-hidden";
			setTimeout(function() {
				isAnimating = false;
				div.children[2].className = "tweak";
				div.children[2].children[4].style.animation = "fadeInText 0.10s 1";
			}, 330);
		}, 100);
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