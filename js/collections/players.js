define([
    'underscore',
    'backbone',
    'models/player'
], function(_, Backbone, Player){

    var PlayerCollection = Backbone.Collection.extend({
        model: Player
    });

    return PlayerCollection;
});
