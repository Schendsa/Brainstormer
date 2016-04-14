Meteor.methods({
	newLobby: function (userId, userName, lobbyName, lobbyDescription, lobbyPassword, privateLobby) {
		Lobbies.insert({
			userId: userId,
			userName: userName,
			name: lobbyName,
			description: lobbyDescription,
			password: lobbyPassword,
			privacy: privateLobby
		});
	},

	deleteLobby: function (lobbyId) {
		Lobbies.remove(lobbyId);
	},

	deleteIdea: function (ideaId) {
		Ideas.remove(ideaId);
	},

	newIdea: function (ideaName, lobbyId) {
		Ideas.insert({
			name: ideaName,
			lobbyId: lobbyId
		});
	},

	renameLobby: function(newTitle, lobbyId) {
		Lobbies.update({_id: lobbyId}, {
			$set: {name: newTitle}
		});
	},

	searchLobbies: function(searchValue) {
		Lobbies.find( { name: searchValue } );
	},

	changeInfoBlock: function(newInfoBlock, userId) {
		Meteor.users.update({_id: userId}, {
			$set: {infoblock: newInfoBlock}
		});
	}
});