Meteor.publish('lobbies', function() {
  return Lobbies.find();
});
Meteor.publish('idea', function() {
	return Idea.find();
});