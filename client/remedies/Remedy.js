Template.Remedy.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.Remedy.helpers({
	updateRemedyId: function() {
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});


Template.Remedy.events({ 
	'click .toggle-fav': function() {
		console.log('click');
		Meteor.call('toggleFavItem', this._id, this.inFav);
	},
	'click .fa-trash': function() {
		//console.log(this);
		Meteor.call('deleteRemedy', this._id);
	},
	'click .fa-pencil': function(event, template) {
		//Session.set('editMode', !Session.get('editMode'));
		template.editMode.set(!template.editMode.get());
	}

});

