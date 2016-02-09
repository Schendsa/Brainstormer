Router.configure({
	layoutTemplate: 'appBody',

	notFoundTemplate: 'appNotFound',

	loadingTemplate: 'loading',

	waitOn: function () {
		Meteor.subscribe('lobbies');
		Meteor.subscribe('idea');
	}
});

Router.route('home', {
	path: '/'
});

Router.route('/createLobby');

Router.route('lobbies', {
	path: '/lobby/:_id',
	data: function () {
		return Lobbies.findOne(this.params._id);
	},
	action: function () {
		this.render();
	}
});