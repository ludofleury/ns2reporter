define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/structure.html'
], function($, _, Backbone, structureTemplate){

    var StructureView = Backbone.View.extend({
        tagName: "div",
        className: "structure",

        initialize: function(){
            this.model.bind('change', this.render, this);
        },

        render: function(){
            this.$el.empty();
            this.$el.append(_.template( structureTemplate, { structure: this.model } ));

            return this.el;
        }
    });

    return StructureView;
});
