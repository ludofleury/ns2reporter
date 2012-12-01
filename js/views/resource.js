define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/resource.html'
], function($, _, Backbone, resourceTemplate){

    var ResourceView = Backbone.View.extend({
        tagName: "span",
        className: "resource",

        initialize: function(){
            this.model.bind('change', this.render, this);
        },

        render: function(){
            this.$el.empty();
            this.$el.append(_.template( resourceTemplate, { resource: this.model } ));

            return this.el;
        }
    });

    return ResourceView;
});
