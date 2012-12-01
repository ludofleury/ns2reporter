define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var Resource = Backbone.Model.extend({
        defaults: {
            current: 0,
            total: 0
        },

        add: function(credit) {
            this.set('current', this.get('current') + credit);
            this.set('total', this.get('total') + credit);
        },

        spend: function(credit) {
            this.set('current', this.get('current') - credit);
        }
    });

    return Resource;
});
