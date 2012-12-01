define([
    'jquery',
    'underscore',
    'backbone',
    'views/team',
    'text!templates/teams.html'
], function($, _, Backbone, TeamView, teamsTemplate){

    var TeamsView = Backbone.View.extend({
        tagName: "div",
        className: "teams",

        initialize: function(){
            this.teams = {};

            _(this).bindAll('add', 'remove');

            this.collection.bind('add', this.add);
            this.collection.bind('remove', this.remove);
        },

        add: function(team){
            this.teams[team.get('id')] = new TeamView({ id: team.id, model: team });
            this.$el.append(this.teams[team.get('id')].render());
        },

        remove: function(team){
            this.teams[team.get('id')].remove();
        },

        render: function(){
            this.$el.empty();
            this.$el.append(_.template( teamsTemplate ));

            this.collection.each(function(team) {
                this.add(team);
            }, this);

            return this.el;
        }
    });

    return TeamsView;
});
