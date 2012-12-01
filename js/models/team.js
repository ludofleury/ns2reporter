define([
    'underscore',
    'backbone',
    'models/resource',
    'collections/structures',
    'collections/players'
], function(_, Backbone, Resource, Structures, Players){

    var Team = Backbone.Model.extend({
        defaults: {
            id: '',
            name: '',
            resource: null,
            structures: null,
            players: null,
            kills: 0,
            deaths: 0
        },

        initialize: function() {
            this.set('resource', new Resource());
            this.set('structures', new Structures());
            this.set('players', new Players());
        },

        addKill: function() {
            this.set('kills', this.get('kills') + 1);
        },

        addDeath: function() {
            this.set('deaths', this.get('deaths') + 1);
        },

        addPlayer: function(player) {
            this.get('players').add(player);
        },

        addResource: function(credit) {
            this.get('resource').add(credit);
        },

        dropStructure: function(structure) {
            this.get('structures').add(structure);
            this.get('resource').spend(structure.get('cost'));
        }
    });

    return Team;
});
