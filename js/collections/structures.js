define([
    'underscore',
    'backbone',
    'models/structure'
], function(_, Backbone, Structure){

    var StructureCollection = Backbone.Collection.extend({
        model: Structure
    });

    return StructureCollection;
});
