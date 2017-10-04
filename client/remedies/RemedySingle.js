Template.RemedySingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRemedy', id);
	
	});
});

Template.RemedySingle.helpers({
	remedy: ()=> {
		var id = FlowRouter.getParam('id');
		return Remedies.findOne({_id: id});
	}
});