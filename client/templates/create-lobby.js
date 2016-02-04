Template.createLobby.events({
	"submit .newLobby": function (event) {
		event.preventDefault();

		var name = event.target.name.value;
		var password = event.target.password.value;

		Meteor.call("newLobby", name, password);

		Router.go('home');
	}
});