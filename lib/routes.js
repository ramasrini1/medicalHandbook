if(Meteor.isClient){
	Accounts.onLogin(function() {
		FlowRouter.go('remedy-book');
	});
	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}


FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name:'home',
	action(){
		if (Meteor.userId()){
			FlowRouter.go('remedy-book');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/remedy-book', {
	name:'remedy-book',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Remedies'} );
	}
});

FlowRouter.route('/remedy/:id', {
	name:'remedy',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main:'RemedySingle' });
	}
});

FlowRouter.route('/favorites', {
	name:'favorites',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main:'Favorites' });
	}
});

FlowRouter.route('/shopping-list', {
	name:'shopping-list',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main:'ShoppingList' });
	}
});

