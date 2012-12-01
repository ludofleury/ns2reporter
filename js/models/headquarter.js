define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var Headquarter = Backbone.Model.extend({
        defaults: {
            name: '',
            status: 'none'
        }
    });

  return Headquarter;
});
