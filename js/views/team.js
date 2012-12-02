define([
    'jquery',
    'underscore',
    'backbone',
    'views/resource',
    'views/players',
    'views/structures',
    'text!templates/team.html'
], function($, _, Backbone, ResourceView, PlayersView, StructuresView, teamTemplate){

    var TeamView = Backbone.View.extend({
        tagName: "div",
        className: "team row well",

        initialize: function(){
            this.model.bind('change:kills', this.renderStatus, this);
            this.model.bind('change:deaths', this.renderStatus, this);
        },

        renderStatus: function() {
            this.$el.find('.kills').html('<i class="icon-screenshot icon-white"></i> ' + this.model.get('kills'));
            this.$el.find('.deaths').html('<i class="icon-ban-circle icon-white"></i> ' + this.model.get('deaths'));
        },

        render: function(){
            console.log('rendering team');
            this.$el.empty();
            this.$el.append(_.template( teamTemplate, { team: this.model } ));

            this.resource = new ResourceView({ model: this.model.get('resource') });
            this.$el.find('.resource').append(this.resource.render());

            this.players = new PlayersView({ collection: this.model.get('players') });
            this.$el.append(this.players.render());

            this.structures = new StructuresView({ collection: this.model.get('structures') });
            this.$el.append(this.structures.render());

            return this.el;
        }
    });

    return TeamView;
});
