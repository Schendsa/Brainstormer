Template.lobbies.helpers({
	ideas: function() {
		return Ideas.find({lobbyId: this.lobby._id});
	}
});

Template.lobbies.events({
  "submit .newIdea": function (event) {
    event.preventDefault();

    var name = event.target.text.value;
    var lobbyId = this.lobby._id;

    Meteor.call("newIdea", name, lobbyId);

    event.target.text.value = "";
  }
});