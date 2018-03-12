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