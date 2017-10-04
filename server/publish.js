Meteor.publish('remedies', function(){
	return Remedies.find({author: this.userId});
});

Meteor.publish('singleRemedy', function(id){
	check(id, String);
	return Remedies.find({_id: id});
});