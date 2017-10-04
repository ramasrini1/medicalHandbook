import { Mongo } from 'meteor/mongo';

//import SimpleSchema from 'simpl-schema';
//SimpleSchema.extendOptions(['autoform']);
//Recipes = new Mongo.Collection('recipes');

//Recipes.attachSchema(RecipeSchema);

Remedies.allow({
    insert:function(userId, doc){
        return !!userId;
    },
    update:function(userId, doc){
        return !!userId;
    }

});

Meteor.methods({
	toggleFavItem: function(id, currentState){
		Remedies.update(id, {
			$set:{
				inFav: !currentState
			}
		});
	},
	deleteRemedy:function(id){
		Remedies.remove(id);
	}
});
