Meteor.methods({
	newLobby: function (lobbyName, lobbyPassword, privateLobby) {
		Lobbies.insert({
			name: lobbyName,
			password: lobbyPassword,
			privacy: privateLobby
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