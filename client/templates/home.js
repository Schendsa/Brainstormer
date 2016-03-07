if (Meteor.isClient) {
	Meteor.subscribe("lobbies");
}

Template.home.helpers({
	lobbies: function() {
		return Lobbies.find();
	}
});

Template.home.events({

});