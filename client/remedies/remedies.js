//Meteor.subscribe('remedies');

Template.Remedies.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('remedies');
	});
});

Template.Remedies.helpers({
	remedies: ()=> {
		return Remedies.find({});
	}
});
Template.Remedies.events({
	'click .new-remedy': () => {
		Session.set('newRemedy', true);
	}
});
