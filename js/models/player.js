define([
    'underscore',
    'backbone',
    'models/resource'
], function(_, Backbone, Resource){

    var Player = Backbone.Model.extend({
        defaults: {
            id: null,
            team: null,
            nickname: '',
            kills: 0,
            deaths: 0,
            resource: null
        },

        initialize: function() {
            this.set('resource', new Resource());
        },

        addKill: function() {
            this.set('kills', this.get('kills') + 1);
            this.get('team').addKill();
        },

        addDeath: function() {
            this.set('deaths', this.get('deaths') + 1);
            this.get('team').addDeath();
        }
    });

  return Player;
});
