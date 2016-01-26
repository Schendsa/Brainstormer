// This code only runs on the server
Meteor.publish("lobbies", function () {
	return Lobbies.find({
		$or: [
			{ private: {$ne: true} },
			{ owner: this.userId }
		]
	});
});