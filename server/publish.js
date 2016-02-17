Meteor.publish('lobbies', function() {
	return Lobbies.find();
});
Meteor.publish('ideas', function() {
	return Ideas.find();
});