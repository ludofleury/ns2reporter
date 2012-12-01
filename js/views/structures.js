define([
    'jquery',
    'underscore',
    'backbone',
    'views/structure',
    'text!templates/structures.html'
], function($, _, Backbone, StructureView, structuresTemplate){

    var StructuresView = Backbone.View.extend({
        tagName: "div",
        className: "structures row6",

        initialize: function(){
            this.structures = {};

            _(this).bindAll('add', 'remove');

            this.collection.bind('add', this.add);
            this.collection.bind('remove', this.remove);
        },

        add: function(structure){
            this.structures[structure.get('id')] = new StructureView({ id: structure.get('id'), model: structure });
            this.$el.append(this.structures[structure.get('id')].render());
        },

        remove: function(structure){
            this.structures[structure.get('id')].remove();
        },

        render: function(){
            this.$el.empty();
            this.$el.append(_.template( structuresTemplate ));

            this.collection.each(function(structure) {
                this.add(structure);
            }, this);

            return this.el;
        }
    });

    return StructuresView;
});
