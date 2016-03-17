if (Meteor.isClient) {
	Meteor.subscribe("lobbies");
}

Template.home.created = function() {
	this.lobbies = new ReactiveVar( Lobbies.find());
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

		if (searchValue != "") {
			template.lobbies.set( Lobbies.find({name: searchValue}) );
		} else {
			template.lobbies.set( Lobbies.find() );
		}

		Router.go('home');
	}
});