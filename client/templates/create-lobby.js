Template.createLobby.events({
	"submit .newLobby": function (event) {
		event.preventDefault();

		var name = event.target.name.value;
		var password = event.target.password.value;
		
		var checkprivacy = document.getElementById("privatelobby").checked;

		if(checkprivacy)
      	{
         var privatelobby = 1;
      	} else {
      	 var privatelobby = 0;
      	}

		console.log(privatelobby);

		Meteor.call("newLobby", name, password, privatelobby);

		Router.go('home');
	}
});