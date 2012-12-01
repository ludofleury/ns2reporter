define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var Structure = Backbone.Model.extend({
        defaults: {
            id: null,
            name: '',
            cost: 0,
            status: 'dropped'
        },

        initialize: function() {
        }
    });

  return Structure;
});
