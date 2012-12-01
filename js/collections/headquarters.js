define([
    'underscore',
    'backbone',
    'models/headquarter'
], function(_, Backbone, Headquarter){

    var HeadquarterCollection = Backbone.Collection.extend({
        model: Headquarter
    });


    return HeadquarterCollection;
});
