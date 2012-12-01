define([
    'jquery',
    'underscore',
    'backbone',
    'views/teams',
    'text!templates/round.html'
], function($, _, Backbone, TeamsView ,roundTemplate){

    var RoundView = Backbone.View.extend({
        tagName: "div",
        className: "round",

        initialize: function(){
            this.teamViews = {};
        },

        render: function(){
            this.$el.empty();

            this.teams = new TeamsView({ collection: this.model.get('teams') });
            this.$el.append(this.teams.render());

            return this.el;
        }
    });

    return RoundView;
});
