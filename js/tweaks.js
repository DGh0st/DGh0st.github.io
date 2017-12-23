window.onresize = function() { fixFirefoxResize(); }

function displayAllTweaks() {
	var showcaseTweaksElement = document.getElementsByClassName('runtime_modifications')[0];
	document.getElementsByClassName('modifications')[0].style.transform = "translateX(-120%)";
	showcaseTweaksElement.style.transform = "translateX(-20.5%)";
	var suppressedElements = document.getElementsByClassName('suppressed');
	setTimeout(function() {
		var offset = 0;
		Array.prototype.forEach.call(suppressedElements, function(element) {
			setTimeout(function() {
				element.style.display = "inline-block";
				setTimeout(function() {
					element.style.opacity = 1;
					element.style.transform = "translateY(0%) scaleX(1.0)";
				}, 50);
			}, offset * 100);
			offset += 1;
		});
	}, 250);
}

function hideAllTweaks() {
	var showcaseTweaksElement = document.getElementsByClassName('runtime_modifications')[0];
	var modificationsElement = document.getElementsByClassName('modifications')[0];
	scrollToElement(modificationsElement.offsetTop - 50);
	var suppressedElements = document.getElementsByClassName('suppressed');
	var elementsRemoved = 0;
	var offset = suppressedElements.length;
	Array.prototype.forEach.call(suppressedElements, function(element) {
		setTimeout(function() {
			element.style.opacity = 0;
			element.style.transform = "translateY(-15%) scaleX(0.0)";
			setTimeout(function() {
				elementsRemoved += 1;
				if (elementsRemoved == suppressedElements.length - 2) {
					modificationsElement.style.transform = "translateX(0%)";
					showcaseTweaksElement.style.transform = "translateX(0%)";
				}
				element.style.display = "none";
			}, 350);
		}, offset * 50);
		offset -= 1;
	});
}

function scrollToElement(elementOffset) {
	var velocity = 50;
	var int = setInterval(function() {
		window.scrollBy(0, -velocity);
		if (window.scrollY - elementOffset < velocity) {
			clearInterval(int);
			window.scrollTo(window.scrollX, elementOffset);
		}
	}, 20);
}

var maxTries = 10;

function fixFirefoxResize() {
	var int = setInterval(function() {
		var element = document.getElementsByClassName('allTweaks')[0];
		maxTries -= 1;
		if (element.style.height == "0px" || element.style.height == undefined || element.style.height == "") {
			clearInterval(int);
			element.style.left = "0px";
		} else if (maxTries == 0) {
			clearInterval(int);
		}
	}, 250);
}