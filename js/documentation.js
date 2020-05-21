window.addEventListener('DOMContentLoaded', function() {
	// remove first empty line from code block
	var codeBlocks = document.getElementsByTagName("code");
	for (var i = 0; i < codeBlocks.length; i++) {
		var text = codeBlocks[i].firstChild.nodeValue;
		codeBlocks[i].firstChild.nodeValue = text.replace(/^\n+|\n+$/g, "");
	}

	// add ids for all referenceName
	var referenceNames = document.getElementsByClassName("referenceName");
	for (var i = 0; i < referenceNames.length; i++) {
		var referenceName = referenceNames[i];
		if (referenceName.id == "" && !referenceName.classList.contains("api-name")) {
			var referenceTitleText = referenceName.getElementsByTagName("span")[0].textContent;
			referenceName.id = referenceTitleText.replace(/^[^a-z]+|[^\w]+/gi, "_");
		}
	}
});

function copyToClipboard(button) {
	var link =  window.location.origin + window.location.pathname;
	if (button.parentNode.id != "" && button.parentNode.id != undefined && button.parentNode.id != null)
		link += "#" + button.parentNode.id;
	var dummyTextArea = document.createElement('textarea');
	dummyTextArea.value = link;
	dummyTextArea.style.position = 'absolute';
	dummyTextArea.style.left = '-9999px';
	document.body.appendChild(dummyTextArea);
	dummyTextArea.select();
	document.execCommand('copy');
	document.body.removeChild(dummyTextArea);
}