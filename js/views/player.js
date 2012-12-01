define([
    'jquery',
    'underscore',
    'backbone',
    'views/resource',
    'text!templates/player.html'
], function($, _, Backbone, ResourceView, playerTemplate){

    var PlayerView = Backbone.View.extend({
        tagName: "div",
        className: "player",

        initialize: function(){
            this.model.bind('change', this.render, this);
        },

        render: function(){
            this.$el.empty();
            this.$el.append(_.template( playerTemplate, { player: this.model } ));

            var resourceView = new ResourceView({ model: this.model.get('resource') });
            this.$el.find('.resource').append(resourceView.render());

            return this.el;
        }
    });

    return PlayerView;
});
