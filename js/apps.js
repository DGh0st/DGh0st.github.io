var apps = {
	'iOSApplications':[
		{
			name: 'Tipster',
			description: 'Tip calculator application for iOS.',
			image: 'https://raw.githubusercontent.com/DGh0st/Tipster/master/Tipster.gif',
			github: 'https://www.github.com/DGh0st/Tipster'
		},
		{
			name: 'Flixer',
			description: 'A movies app using the <a href="http://docs.themoviedb.apiary.io/#">The Movie Database API</a>.',
			image: 'http://imgur.com/KK0Lisc.gif',
			github: 'https://www.github.com/DGh0st/Flixer'
		},
		{
			name: 'Yelp',
			description: 'A yelp search app using the <a href="http://www.yelp.com/developers/documentation/v2/search_api">Yelp API</a>.',
			image: 'http://imgur.com/uDGPnmT.gif',
			github: 'https://www.github.com/DGh0st/Yelp'
		},
		{
			name: 'Tweety',
			description: 'A basic twitter app to read and compose tweets using the <a href="https://apps.twitter.com/">Twitter API</a>.',
			image: 'http://imgur.com/KCoNsJe.gif',
			github: 'https://www.github.com/DGh0st/Tweety'
		},
		{
			name: 'SnapSync',
			description: 'A photo sharing app using Parse as its backend.',
			image: 'http://imgur.com/6HfI8X1.gif',
			github: 'https://www.github.com/DGh0st/SnapSync'
		}
	]
};

function addiOSApplications() {
	var appsContainer = document.getElementsByClassName('iOS-Applications')[0];
	var appTemplate = document.getElementById('appTemplate');
	Array.prototype.forEach.call(apps['iOSApplications'], function(appDict) {
		var app = appTemplate.cloneNode(true);
		app.id = "app" + appDict['name'];
		var card = app.getElementsByClassName('card')[0];
		var img = card.getElementsByTagName('img')[0];
		img.src = appDict['image'];
		var infoDiv = card.getElementsByClassName('info')[0];
		var descriptionDiv = infoDiv.firstElementChild;
		descriptionDiv.getElementsByClassName('name')[0].innerHTML = appDict['name'];
		descriptionDiv.getElementsByTagName('p')[0].innerHTML = appDict['description'];
		var githubLink = infoDiv.getElementsByClassName("links")[0].firstElementChild.firstElementChild;
		githubLink.href = appDict['github'];
		appsContainer.insertBefore(app, appTemplate);
	});
}