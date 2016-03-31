Router.configure({
	layoutTemplate: 'appBody',

	notFoundTemplate: 'appNotFound',

	loadingTemplate: 'loading',

	waitOn: function () {
		Meteor.subscribe('lobbies');
		Meteor.subscribe('ideas');
	}
});

Router.route('home', {
	path: '/'
});

Router.route('/createLobby');

Router.route('/userlobbies');

Router.route('lobbies', {
	path: '/lobbies/:_id',
	data: function () {
		return {lobby: Lobbies.findOne(this.params._id)};
	},
	action: function () {
		this.render();
	}
});