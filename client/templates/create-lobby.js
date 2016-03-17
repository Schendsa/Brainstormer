Template.createLobby.events({
	"submit .newLobby": function (event) {
		event.preventDefault();

		var userId = Meteor.userId();
		var name = event.target.name.value;
		var password = event.target.password.value;
		
		var checkprivacy = document.getElementById("privatelobby").checked;


		if(checkprivacy)
      	{
         var privatelobby = 1;
      	} else {
      	 var privatelobby = 0;
      	}

		Meteor.call("newLobby", userId, name, password,  privatelobby);


		Router.go('home');
	}
});