define([
    'underscore',
    'backbone',
    'models/team'
], function(_, Backbone, Team){

    var TeamCollection = Backbone.Collection.extend({
        model: Team
    });

    return TeamCollection;
});
