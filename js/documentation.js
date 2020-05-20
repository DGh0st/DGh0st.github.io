window.addEventListener('DOMContentLoaded', function() {
	// remove first empty line from code block
	var codeBlock = document.getElementsByTagName("code");
	for (var i = 0; i < codeBlock.length; i++) {
		var text = codeBlock[i].firstChild.nodeValue;
		codeBlock[i].firstChild.nodeValue = text.replace(/^\n+|\n+$/g, "");
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