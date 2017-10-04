Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('remedies');
	});
});


Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Remedies.find({inFav: true});
	}
});