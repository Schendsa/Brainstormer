Meteor.methods({
	newLobby: function (lobbyName, lobbyPassword) {
		Lobbies.insert({
			name: lobbyName,
			password: lobbyPassword
		});
	},

	deleteLobby: function (lobbyId) {
		Lobbies.remove(lobbyId);
	}
});