window.addEventListener('load', function() {
	var anchor = window.location.hash;
	if (anchor.length > 0) {
		anchor = anchor.substr(1);

		function tryScrollToElement() {
			var element = document.getElementById(anchor);
			if (element != undefined && element != null)
				element.scrollIntoView();
			else 
				setTimeout(tryScrollToElement, 25);
		}
		setTimeout(tryScrollToElement, 25);
	} else {
		setTimeout(function() {
			var page = sessionStorage.getItem('page');
			if (page != null && page === document.getElementsByClassName("highlighted-nav")[0].href)
				window.scrollTo(sessionStorage.getItem('scrollX'), sessionStorage.getItem('scrollY'));
		}, 25);
	}
});
window.addEventListener('beforeunload', function() {
	sessionStorage.setItem('page', document.getElementsByClassName("highlighted-nav")[0].href);
	sessionStorage.setItem('scrollY', window.scrollY);
	sessionStorage.setItem('scrollX', window.scrollX);
})

function overlayImage(imageElement) {
	var div = document.getElementById('overlayImage');
	div.style.display = "block";

	var img = document.getElementById('overlayImg');
	img.src = imageElement.src;

	document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

function removeOverlayImage(event) {
	var div = document.getElementById('overlayImage');
	if (event == null || event.target === div) {
		div.style.display = "none";

		var img = document.getElementById('overlayImg');
		img.src = '';

		document.getElementsByTagName('body')[0].style.overflow = "unset";
	}
}