if (Meteor.isClient) {
	Meteor.subscribe("lobbies");
}

Template.home.created = function() {
	this.lobbies = new ReactiveVar( Lobbies.find( { $or: [ { privacy: 0 }, { userId: Meteor.userId() } ] } ) );
}

Template.home.helpers({
	lobbies: function() {
		return Template.instance().lobbies.get();
	}
});

Template.home.events({
	"submit .search": function (event, template) {
		event.preventDefault();

		var searchValue = event.target.search.value;

		if (searchValue != '') {
			template.lobbies.set( Lobbies.find( 
				{
					$and: [ 
						{ $or: [ { privacy: 0 }, { userId: Meteor.userId() } ] },
						{ $or: [ { name: new RegExp(searchValue) }, { description: new RegExp(searchValue) }, { _id: searchValue }, { userName: searchValue } ] }
					]
				}
			));
		} else {
			template.lobbies.set( Lobbies.find( { $or: [ { privacy: 0 }, { userId: Meteor.userId() } ] } ) );
		};
		
		//Meteor.call('searchLobbies', searchValue);

		Router.go('home');
	},

	"click .checkaccess": function () {

		if (this.password == "") {
			window.location = "/lobbies/" + this._id;
		} else {
			var submitpassword = prompt("Please enter the password for this lobby");
			
			if (submitpassword == this.password) {
				window.location = "/lobbies/" + this._id;
			};
		}
	}

        if (this.password == "") {
            window.location = "/lobbies/" + this._id;
        } else {
            var submitpassword = prompt("Please enter the password for this lobby");


            if (submitpassword == this.password) {
                window.location = "/lobbies/" + this._id;
            };
        }
    },

    "click .createdby": function () {
		window.location = "/user/" + this.userId;
    }
});