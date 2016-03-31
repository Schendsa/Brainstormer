if (Meteor.isClient) {
	Meteor.subscribe("lobbies");
}

Template.userlobbies.helpers({
	lobbies: function() {
		var currentLogUser = Meteor.userId();
		console.log(currentLogUser);
		return Lobbies.find( { userId: currentLogUser } );
	} 
});