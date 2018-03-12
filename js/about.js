var skills = {
	'languagesAndTools' : [
		"C++",
		"C",
		"Java",
		"Objective-C",
		"HTML",
		"CSS",
		"Javascript",
		"Python",
		"Swift",
		"Unreal Engine",
		"Visual Studio",
		"C#"
	]
};

function addLanguages() {
	var containerDiv = document.getElementsByClassName('languages_and_tools')[0];
	var listContainer = containerDiv.getElementsByTagName('ul')[0];
	var languageTemplate = document.getElementById('languageTemplate');
	Array.prototype.forEach.call(skills['languagesAndTools'], function(languageOrTool) {
		var language = languageTemplate.cloneNode(true);
		language.id = "languageOrTool" + languageOrTool;
		language.innerHTML = languageOrTool;
		listContainer.insertBefore(language, languageTemplate);
	});
}