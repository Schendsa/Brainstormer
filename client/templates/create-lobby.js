Template.createLobby.events({
	"submit .newLobby": function (event) {
		event.preventDefault();

		var userId = Meteor.userId();
		var name = event.target.name.value;
		var password = event.target.password.value;

		Meteor.call("newLobby", userId, name, password);

		Router.go('home');
	}
});