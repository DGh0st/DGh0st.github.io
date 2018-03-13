document.addEventListener('scroll', displayScrollToTop);
document.addEventListener('wheel', displayScrollToTop);
window.addEventListener('load', function() { 
	displayScrollToTop();
	removeCydiaRepoLinks();
});

function toggleBar() {
	Array.prototype.forEach.call(document.getElementsByClassName('underNavBar'), function(element) {
		var lastElement = document.getElementById('last-nav-element');
		var maxHeight = lastElement.offsetTop + 48;
		if (element.style.height != undefined && element.style.height != "" && element.style.height != "0px") {
			element.style.height = "0px";
		} else {
			element.style.height = maxHeight + "px";
		}
	});
}

function displayScrollToTop() {
	var element = document.getElementsByClassName('backToTop')[0];
	if (element != undefined) {
		if (window.scrollY > 400) {
			element.style.transform = "translateX(0px)";
			element.style.MozTransform = "translateX(0px)";
			element.style.msTransform = "translateX(0px)";
			element.style.OTransform = "translateX(0px)";
			element.style.webkitTransform = "translateX(0px)";
		} else {
			element.style.transform = "translateX(200%)";
			element.style.MozTransform = "translateX(200%)";
			element.style.msTransform = "translateX(200%)";
			element.style.OTransform = "translateX(200%)";
			element.style.webkitTransform = "translateX(200%)";
		}
	}
}

function backToTop() {
	var velocity = 10;
	var int = setInterval(function() {
		window.scrollTo(window.scrollX, window.scrollY - velocity);
		velocity += 10;
		if (window.scrollY < 5) {
			clearInterval(int);
			window.scrollTo(window.scrollX, 0);
		}
	}, 20);
	history.pushState("", document.title, window.location.pathname + window.location.search);
}

function removeCydiaRepoLinks() {
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	if (!iOS) {
		var navbarRepoLinks = document.getElementsByClassName("cydia_repo");
		for (var i = 0; i < navbarRepoLinks.length; i++) {
			var link = navbarRepoLinks[i];
			link.href = "javascript:void(0)";
			link.onclick = function() {
				alert("This link only works on iOS, please open the website on your device or add \"https://DGh0st.github.io/\" repo manually through cydia.");
			};
		}
	}
}