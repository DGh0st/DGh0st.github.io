var i = 0;
var iosprojectslist = ["projects_one", "projects_two", "projects_three"];
var shouldAutoSlide = true;

function previous(){
	shouldAutoSlide = false;
	var temp = i % 3;
	var div = document.getElementById(iosprojectslist[temp]);
	temp = (--i) < 0 ? i = 2: i % 3;
	var div2 = document.getElementById(iosprojectslist[temp]);
	div.className = "projects-ios-hide";
	div2.className = "projects-ios";
	setInterval(function() {shouldAutoSlide = true;}, 1000000);
}

function next(){
	shouldAutoSlide = false;
	var temp = i % 3;
	var div = document.getElementById(iosprojectslist[temp]);
	temp = (++i) > 2 ? i = 0: i % 3;
	var div2 = document.getElementById(iosprojectslist[temp]);
	div2.className = "projects-ios"
	div.className = "projects-ios-hide";
	setInterval(function() {shouldAutoSlide = true;}, 1000000);
}

var autoSlide = setInterval(function() {
	if(shouldAutoSlide){
		var temp = i % 3;
		var div = document.getElementById(iosprojectslist[temp]);
		temp = (++i) > 2 ? i = 0: i % 3;
		var div2 = document.getElementById(iosprojectslist[temp]);
		div.className = "projects-ios-hide";
		div2.className = "projects-ios"
  	}
}, 30000);