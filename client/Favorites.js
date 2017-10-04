Template.Favorites.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('remedies');
	});
});


Template.Favorites.helpers({
	remedies: ()=> {
		return Remedies.find({inFav: true});
	}
});
