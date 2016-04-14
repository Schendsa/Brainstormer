Meteor.methods({

	newLobby: function (userId, lobbyName, lobbyPassword, privateLobby) {

		Lobbies.insert({
			userId: userId,
			name: lobbyName,
			password: lobbyPassword,
			privacy: privateLobby,
			createdAt: Date()
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
	},

	renameLobby: function(newTitle, lobbyId) {
		Lobbies.update(lobbyId, {
			$set: {name: newTitle}
		});
	}
});