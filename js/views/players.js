define([
    'jquery',
    'underscore',
    'backbone',
    'views/player',
    'text!templates/players.html'
], function($, _, Backbone, PlayerView, playersTemplate){

    var PlayersView = Backbone.View.extend({
        tagName: "div",
        className: "players span6",

        initialize: function(){
            this.players = {};

            _(this).bindAll('add', 'remove');

            this.collection.bind('add', this.add);
            this.collection.bind('remove', this.remove);
        },

        add: function(player){
            this.players[player.get('id')] = new PlayerView({ id: player.get('id'), model: player });
            this.$el.append(this.players[player.get('id')].render());
        },

        remove: function(player){
            this.players[player.get('id')].remove();
        },

        render: function(){
            this.$el.empty();
            this.$el.append(_.template( playersTemplate ));

            this.collection.each(function(player) {
                this.add(player);
            }, this);

            return this.el;
        }
    });

    return PlayersView;
});
