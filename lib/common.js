import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Remedies = new Mongo.Collection('remedies');

//Ingredient = new SimpleSchema({
 //   name: {
  //      type: String
   // },
    //amount: {
     //   type: String
    //}
//});


RemedySchema = new SimpleSchema({
    name: {
        label: "Name",
        type: String
    },
    desc: {
        label: "Description",
        type: String
    },

    ingredients: { type: Array },
    'ingredients.$': { type: Object  },
    'ingredients.$.name': {    type: String  },
    'ingredients.$.amount': {    type: String  },

    inFav: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type:"hidden"
        }
    },

    author: {
        type: String,
        label: "Author",
        autoform: {
            type: "hidden"
        },
        autoValue: function(){
            return this.userId;
        },
    },
    createdAt: {
        type: Date,
        label: "CreatedAt",
        autoform: {
            type: "hidden"
        },
        autoValue: function() {
            return new Date();
        },
    }
});

Remedies.attachSchema(RemedySchema);