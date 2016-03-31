if (Meteor.isClient) {
	Meteor.subscribe("lobbies");
}

Template.home.helpers({
	lobbies: function() {
		return Lobbies.find( { privacy: 0 } );
	} 
});

Template.home.events({ 

	"click .delete": function () {
		if (confirm("Are you sure you want to delete this lobby?") == true) {
        	Meteor.call("deleteLobby", this._id);
    	}
	},

	"click .checkaccess": function () {
		if (this.password == "") 
		{
			window.location = "/lobbies/" + this._id;
		} 
		else 
		{
			var submitpassword = prompt("Please enter the password for this lobby");
			
			if (submitpassword == this.password) 
			{
				window.location = "/lobbies/" + this._id;
			};
		}
	}

});