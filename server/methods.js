Meteor.methods({
	newLobby: function (lobbyName, lobbyPassword) {
		Lobbies.insert({
			name: lobbyName,
			password: lobbyPassword
		});
	},

	deleteLobby: function (lobbyId) {
		Lobbies.remove(lobbyId);
	},

	newIdea: function (ideaName, listId) {
		Idea.insert({
			name: ideaName,
			listId: listId
		});
	}
});