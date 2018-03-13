window.addEventListener('resize', fixFirefoxResize);
window.addEventListener('load', function() {
	addProject('Play_Mafia', 'iOS_Runtime_Modifications');
	addProject('SuperMonsterEscaper703', 'Play_Mafia');
	addProject('Hexagon_Fort', 'SuperMonsterEscaper703');
	addProject('Snake_Game', 'iOS_Applications');
	addProject('Nerd', 'Game_A_Week_Challenge');
});

var projects = {
	'Play_Mafia' : {
		id: 'Play_Mafia',
		name: 'PlayMafia',
		descriptionsBeforeImages: [
			'PlayMafia is multi-player web game based on the party game "Mafia." The idea was created for a team of seven members in a honors course at University Of Illinois at Urbana-Champaign.',
			'We successfully deployed our server on <a href="https://www.digitalocean.com/">DigitalOcean</a> and made use of <a href="http://flask.pocoo.org/">flask</a> to create and run matches. Additionally, I designed the communication system and implemented several roles for the gameplay.',
			'The website for the game has since been taken down so there is no place to play it.'
		],
		images: null,
		descriptionsAfterImages: null,
		links: [
			{
				groupName: 'Source Code:',
				link: 'https://github.com/DGh0st/Mafia-Game-Manager',
				linkName: 'GitHub',
				iconClasses: 'fa fa-github',
			}
		]
	},
	'SuperMonsterEscaper703' : {
		id: 'SuperMonsterEscaper703',
		name: 'SuperMonsterEscaper703',
		descriptionsBeforeImages: [
			'SuperMonsterEscaper703 is a 2D single-player top down maze escape game where you play as a monster. You have to escape the demons using magical spells that are spread throughout the maze.',
			'The game was developed for <a href="http://ludumdare.com/compo/ludum-dare-33/?action=preview&uid=56330">ludum dare game jam 33</a> when the theme was "You are a monster".'
		],
		images: [
			'img/SuperMonsterEscaper703Title.jpg',
			'img/SuperMonsterEscaper703Play.jpg'
		],
		descriptionsAfterImages: null,
		links: [
			{
				groupName: 'Web links:',
				link: 'https://www.kongregate.com/games/Brelx/super-monster-escaper-703',
				linkName: 'Kongregate',
				iconClasses: 'fa fa-gamepad'
			},
			{
				groupName: 'Download links:',
				link: 'https://www.dropbox.com/s/1pbutdo0c0jnvvi/SuperMonsterEscaper703_Data.zip?dl=0',
				linkName: 'Dropbox (zipped)',
				iconClasses: 'fa fa-dropbox'
			},
			{
				groupName: 'Source Code:',
				link: 'https://github.com/DGh0st/SuperMonsterEscaper703',
				linkName: 'GitHub',
				iconClasses: 'fa fa-github'
			}
		]
	},
	'Hexagon_Fort' : {
		id: 'Hexagon_Fort',
		name: 'Hexagon Fort',
		descriptionsBeforeImages: [
			'Hexagon Fort is a 2D single-player tower defense/offense game against an easy computer (AI). The game contains three upgradeable towers which are basic tower, spraying tower and healing tower. The basic tower shoots enemy minions at a steady rate with a big range. The spraying tower, on the other hand, shoots in multiple directions but has very small range. The healing tower shoots around like a sprinkler and heals your ally minions.',
			'It was developed using <a href="http://www.sfml-dev.org/index.php">Simple and Fast Multimedia Library (SFML)</a> to get a better understanding of SFML for future projects.'
		],
		images: [
			'img/HexagonFortTitle.jpg',
			'img/HexagonFortPause.jpg',
			'img/HexagonFortPlay.jpg'
		],
		descriptionsAfterImages: null,
		links: [
			{
				groupName: 'Download links:',
				link: 'https://www.dropbox.com/s/b963an1wt2414tf/Hexagon%20Fort.zip?dl=0',
				linkName: 'Dropbox (zipped)',
				iconClasses: 'fa fa-dropbox'
			},
			{
				groupName: '',
				link: 'https://www.dropbox.com/sh/nz71qjoi42g3kdq/AAChYdcA4sEs6iZH0VmSZ07fa?dl=0',
				linkName: 'Dropbox (unzipped)',
				iconClasses: 'fa fa-dropbox'
			},
			{
				groupName: 'Source Code:',
				link: 'https://github.com/DGh0st/Hexagon-Fort',
				linkName: 'GitHub',
				iconClasses: 'fa fa-github'
			}
		]
	},
	'Snake_Game' : {
		id: 'Snake_Game',
		name: 'Snake Game',
		descriptionsBeforeImages: [
			'This is the classic snake game with the addition of a bomb that I used to learn the basics of SFML. The bomb that will kill the snake if the head of the snake is inside the range when it detonates. If the bomb detonates when the body of the snake is inside the range then the snake\'s tail will be chopped to that point.'
		],
		images: [
			'img/SnakeTitle.jpg',
			'img/SnakePlay.jpg',
			'img/SnakeGameOver.jpg'
		],
		descriptionsAfterImages: null,
		links: [
			{
				groupName: 'Source Code:',
				link: 'https://github.com/DGh0st/SnakeGame',
				linkName: 'GitHub',
				iconClasses: 'fa fa-github'
			}
		]
	},
	'Nerd' : {
		id: 'Nerd',
		name: 'Nerd',
		descriptionsBeforeImages: [
			'Nerd is a 2D top down single-player frogger like game where characters are based on different nerd types. The idea was created as a course project for team of three members in a software design class at University of Illinois at Chicago.',
			'It is developed using Java\'s Swing graphics.'
		],
		images: [
			'img/NerdTitle.jpg',
			'img/NerdPlay.jpg',
			'img/NerdGameOver.jpg'
		],
		descriptionsAfterImages: [
			'We never got to creating a distributable jar file for this project, but you can still compile and run the game through the source code.'
		],
		links: [
			{
				groupName: 'Source Code:',
				link: 'https://github.com/DGh0st/Nerd',
				linkName: 'GitHub',
				iconClasses: 'fa fa-github'
			}
		]
	}
};

function addProject(name, previousElementName) {
	var sectionTemplate = document.getElementById("templateSection");
	var section = sectionTemplate.cloneNode(true);
	var projectInfo = projects[name];
	section.id = projectInfo.id;
	section.appendChild(getProjectDiv(projectInfo));
	var beforeElement = document.getElementById(previousElementName);
	beforeElement.parentNode.insertBefore(section, beforeElement.nextSibling);
}

function getProjectDiv(projectInfo) {
	var projectDivTemplate = document.getElementById("templateProject");
	var projectDiv = projectDivTemplate.cloneNode(true);
	projectDiv.id = "";
	var projectTitleH2 = projectDiv.getElementsByClassName("project_title")[0];
	projectTitleH2.innerHTML = projectInfo.name;
	var projectDescriptionDiv = projectDiv.getElementsByClassName("project_description")[0];
	if (projectInfo.descriptionsBeforeImages != null) {
		var projectDescriptionPTemplate = document.getElementById("templateProjectDescription");
		for (var i = 0; i < projectInfo.descriptionsBeforeImages.length; i++) {
			var projectDescriptionP = projectDescriptionPTemplate.cloneNode(true);
			projectDescriptionP.id = "";
			projectDescriptionP.innerHTML = projectInfo.descriptionsBeforeImages[i];
			projectDescriptionDiv.appendChild(projectDescriptionP);
		}
	} else {
		projectDescriptionDiv.style.display = "none";
	}
	var projectImagesDiv = projectDiv.getElementsByClassName("project_images")[0];
	if (projectInfo.images != null) {
		var projectImageTemplate = document.getElementById("templateImageCard");
		for (var i = 0; i < projectInfo.images.length; i++) {
			var projectImage = projectImageTemplate.cloneNode(true);
			projectImage.id = "";
			var img = projectImage.getElementsByTagName("img")[0];
			img.src = projectInfo.images[i];
			projectImagesDiv.appendChild(projectImage);
		}
	} else {
		projectImagesDiv.style.display = "none";
	}
	var projectDescriptionDiv2 = projectDiv.getElementsByClassName("project_description")[1];
	if (projectInfo.descriptionsAfterImages != null) {
		var projectDescriptionPTemplate = document.getElementById("templateProjectDescription");
		for (var i = 0; i < projectInfo.descriptionsAfterImages.length; i++) {
			var projectDescriptionP = projectDescriptionPTemplate.cloneNode(true);
			projectDescriptionP.id = "";
			projectDescriptionP.innerHTML = projectInfo.descriptionsAfterImages[i];
			projectDescriptionDiv2.appendChild(projectDescriptionP);
		}
	} else {
		projectDescriptionDiv2.style.display = "none";
	}
	var projectLinks = projectDiv.getElementsByClassName("project_links")[0];
	if (projectInfo.links != null) {
		var linkTemplate = document.getElementById("templateDownloadLink");
		for (var i = 0; i < projectInfo.links.length; i++) {
			var projectLink = linkTemplate.cloneNode(true);
			projectLink.id = "";
			var linkGroupName = projectLink.getElementsByClassName("download_link_group_name")[0];
			linkGroupName.innerHTML = projectInfo.links[i].groupName;
			var link = projectLink.getElementsByClassName("download_link")[0];
			link.href = projectInfo.links[i].link;
			var icons = link.getElementsByClassName("download_link_icon")[0];
			icons.classList = projectInfo.links[i].iconClasses;
			var linkName = link.getElementsByClassName("download_link_name")[0];
			linkName.innerHTML = projectInfo.links[i].linkName;
			projectLinks.appendChild(projectLink);
		}
	}
	return projectDiv;
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