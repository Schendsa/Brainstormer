Template.profiles.events({
	"click .infoblock": function (event) {
		if (Meteor.userId() != this.profile._id) {
			throw new Meteor.Error("not-authorized");
		} else {
			var userinfo = document.getElementsByName("userinfo");
			userinfo[0].disabled = false;
		}

	},

	"submit .infoblock": function (event) {
		if (Meteor.userId() != this.profile._id) {
			throw new Meteor.Error("not-authorized");
		} else {
			event.preventDefault();

			var newinfoblock = event.target.userinfo.value;

			Meteor.call("changeInfoBlock", newinfoblock, this.profile._id);

			var userinfo = document.getElementsByName("userinfo");
			userinfo[0].disabled = true;
		}
	}
});