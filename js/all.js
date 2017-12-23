function overlayImage(imageElement) {
	var div = document.getElementById('overlayImage');
	div.style.display = "block";

	var img = document.getElementById('overlayImg');
	img.src = imageElement.src;
}

function removeOverlayImage() {
	var div = document.getElementById('overlayImage');
	div.style.display = "none";

	var img = document.getElementById('overlayImg');
	img.src = '';
}