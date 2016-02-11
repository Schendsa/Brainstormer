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

	newIdea: function (ideaName, lobbyId) {
		Ideas.insert({
			name: ideaName,
			lobbyId: lobbyId
		});
	}
});