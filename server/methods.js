Meteor.methods({
	newLobby: function (userId, lobbyName, lobbyDescription, lobbyPassword, privateLobby) {
		Lobbies.insert({
			userId: userId,
			name: lobbyName,
			description: lobbyDescription,
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
	},

	renameLobby: function(newTitle, lobbyId) {
		Lobbies.update(lobbyId, {
			$set: {name: newTitle}
		});
	},

	searchLobbies: function(searchValue) {
		Lobbies.find( { name: searchValue } );
	}
});