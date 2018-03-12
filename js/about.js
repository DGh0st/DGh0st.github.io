var skills = {
	'languagesAndTools' : [
		{
			name: "C++",
			iconClass: "devicon-cplusplus-plain-wordmark"
		},
		{
			name:"C",
			iconClass: "devicon-c-plain-wordmark"
		},
		{
			name: "Java",
			iconClass: "devicon-java-plain-wordmark"
		},
		{
			name: "Objective-C",
			iconClass: null
		},
		{
			name: "Git",
			iconClass: "devicon-git-plain"
		},
		{
			name: "Debian",
			iconClass: "devicon-debian-plain-wordmark"
		},
		{
			name: "Linux",
			iconClass: "devicon-linux-plain",
		},
		{
			name: "HTML",
			iconClass: "devicon-html5-plain-wordmark"
		},
		{
			name: "CSS",
			iconClass: "devicon-css3-plain-wordmark"
		},
		{
			name: "Javascript",
			iconClass: "devicons devicons-javascript_shield"
		},
		{
			name: "JQuery",
			iconClass: "devicon-jquery-plain-wordmark"
		},
		{
			name: "Bootstrap",
			iconClass: "devicon-bootstrap-plain-wordmark"
		},
		{
			name: "Python",
			iconClass: "devicon-python-plain-wordmark"
		},
		{
			name: "Swift",
			iconClass: "devicons devicons-swift"
		},
		{
			name: "Unreal Engine",
			iconClass: null
		},
		{
			name: "Visual Studio",
			iconClass: "devicon-visualstudio-plain"
		},
		{
			name: "IntelliJ",
			iconClass: "devicon-intellij-plain"
		},
		{
			name: "C#",
			iconClass: "devicon-csharp-plain-wordmark"
		}
	]
};

function addLanguages() {
	var containerDiv = document.getElementsByClassName('languages_and_tools')[0];
	var listContainer = containerDiv.getElementsByTagName('ul')[0];
	var languageTemplate = document.getElementById('languageTemplate');
	Array.prototype.forEach.call(skills['languagesAndTools'], function(languageOrTool) {
		var language = languageTemplate.cloneNode(true);
		language.id = "languageOrTool" + languageOrTool.name;
		if (languageOrTool.iconClass != null) {
			var icon = language.getElementsByTagName("i")[0];
			icon.classList = languageOrTool.iconClass;
		} else {
			language.innerHTML = languageOrTool.name;
		}
		language.addEventListener("mouseenter", function() {
			language.style.color = "grey";
		});
		language.addEventListener("mouseleave", function() {
			language.style.color = "unset";
		});
		listContainer.insertBefore(language, languageTemplate);
	});
}