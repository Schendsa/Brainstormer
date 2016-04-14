Template.lobbies.helpers({
	ideas: function() {
		return Ideas.find({lobbyId: this.lobby._id});
	},
  lobbyname: function() {
    return this.lobby.name;
  },
  description: function() {
    return this.lobby.description;
  }
});

Template.lobbies.events({
  "submit .new-idea": function (event) {
    event.preventDefault();

    var name = event.target.text.value;
    var lobbyId = this.lobby._id;

    Meteor.call("newIdea", name, lobbyId);

    event.target.text.value = "";
  },

  "click .delete-idea": function (event) {
    var ideaId = this.ideas._id;

    Meteor.call("deleteIdea", ideaId);
  },

  "click .lobby-name": function (event) {
    if (Meteor.userId() != this.lobby.userId) {
      throw new Meteor.Error("not-authorized");
    } else {
      var lobbytitle = document.getElementsByName("lobbytitle");
      lobbytitle[0].disabled = false;
    }
  },

  "submit .lobby-name": function (event) {
    if (Meteor.userId() != this.lobby.userId) {
      throw new Meteor.Error("not-authorized");
    } else {
      event.preventDefault();

      var newtitle = event.target.lobbytitle.value;

      Meteor.call("renameLobby", newtitle, this.lobby._id);

      var lobbytitle = document.getElementsByName("lobbytitle");
      lobbytitle[0].disabled = true;
    }
  },

  "click .delete": function (event) {
    if (Meteor.userId() != this.lobby.userId) {
      throw new Meteor.Error("not-authorized");
    } else {
      Meteor.call("deleteLobby", this.lobby._id);

      Router.go('home');
    }
  }
});