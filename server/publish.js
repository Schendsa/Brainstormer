Meteor.publish('lobbies', function() {
	return Lobbies.find();
});
Meteor.publish('ideas', function() {
	return Ideas.find();
});
Meteor.publish('users', function() {
	return Meteor.users.find();
});