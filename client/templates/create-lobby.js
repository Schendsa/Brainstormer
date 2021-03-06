Template.createLobby.events({
	"submit .newLobby": function (event) {
		event.preventDefault();

		var userId = Meteor.userId();
		var userName = Meteor.user().emails[0].address;
		var name = event.target.name.value;
		var description = event.target.description.value;
		var password = event.target.password.value;
		
		var checkprivacy = document.getElementById("privatelobby").checked;


		if(checkprivacy)
      	{
         var privatelobby = 1;
      	} else {
      	 var privatelobby = 0;
      	}

		Meteor.call("newLobby", userId, userName, name, description, password, privatelobby);


		Router.go('home');
	}
});