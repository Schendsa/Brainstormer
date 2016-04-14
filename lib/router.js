Router.configure({
	layoutTemplate: 'appBody',

	notFoundTemplate: 'appNotFound',

	loadingTemplate: 'loading',

	waitOn: function () {
		Meteor.subscribe('users');
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
		return {lobby: Lobbies.findOne( { _id: this.params._id })};
	},
	action: function () {
		this.render();
	}
});

Router.route('profiles', {
	path: '/user/:_id',
	data: function () {
		return {profile: Meteor.users.findOne( { _id: this.params._id }, { password: 0 } )};
	},
	action: function () {
		this.render();
	}
});