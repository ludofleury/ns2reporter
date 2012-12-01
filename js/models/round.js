define([
    'underscore',
    'backbone',
    'collections/teams',
    'collections/players'
], function(_, Backbone, Teams, Players){

    var Round = Backbone.Model.extend({
        defaults: {
            teams: null,
            players: null
        },

        initialize: function() {
            this.set('players', new Players());
            this.set('teams', new Teams());
            this.get('teams').add([{id: 'marines'}, {id: 'kharaa'}]);
        },

        setMarines: function(name) {
            this.getMarines().set('name', name);
        },

        getMarines: function() {
            return this.get('teams').get('marines');
        },

        setKharaa: function(name) {
            this.getKharaa().set('name', name);
        },

        getKharaa: function() {
            return this.get('teams').get('kharaa');
        },

        addMarines: function(player) {
            player.set('team', this.getMarines());

            this.addPlayer(player);
            this.getMarines().addPlayer(player);
        },

        addKharaa: function(player) {
            player.set('team', this.getKharaa());

            this.addPlayer(player);
            this.getKharaa().addPlayer(player);
        },

        addPlayer: function(player) {
            this.get('players').add(player);
        },

        kill: function(attackerId, targetId) {
            var attacker = this.get('players').get(attackerId);
            var target = this.get('players').get(targetId);

            if (!attacker || !target || (attacker.get('team') == target.get('team'))) {
                throw 'Invalid kill';
            }

            attacker.addKill();
            target.addDeath();
        }
    });

  return Round;
});
