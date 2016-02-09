Template.lobbies.events({
  "submit .newIdea": function (event) {
    event.preventDefault();

    var name = event.target.name.value;
    var listId = list._id;

    Meteor.call("newIdea", name, listId);
  }
});