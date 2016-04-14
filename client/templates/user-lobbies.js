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

Template.userlobbies.events({ 
"click .delete": function () {
		if (confirm("Are you sure you want to delete this lobby?") == true) {
        	Meteor.call("deleteLobby", this._id);
    	}
	}
});