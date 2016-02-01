Router.configure({
	layoutTemplate: 'appBody',

	notFoundTemplate: 'appNotFound',

	loadingTemplate: 'loading',

	waitOn: function () {
		Meteor.subscribe('lobbies');
	}
});

Router.route('home', {
	path: '/'
});