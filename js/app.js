define([
    'jquery',
    'underscore',
    'backbone',
    'models/round',
    'models/player',
    'models/structure',
    'views/round'
], function($, _, Backbone, Round, Player, Structure, RoundView){

    var initialize = function(){

        var round = new Round();
        round.setMarines('Frenchy');
        round.setKharaa('Froggy');

        var roundView = new RoundView({ model: round });
        $('#container').append(roundView.render());

        round.addMarines(new Player({id: 11, nickname: 'ludo'}));
        round.addMarines(new Player({id:12, nickname: 'perig'}));
        round.addKharaa(new Player({id:21, nickname: 'tonio'}));
        round.addKharaa(new Player({id:22, nickname: 'cécile'}));
        round.kill(11, 21);
        round.kill(11, 21);
        round.kill(22, 12);
        round.getMarines().addResource(50);
        round.getKharaa().addResource(50);
        round.getMarines().dropStructure(new Structure({id: 1, name: 'armory', cost: 10}));
        round.getMarines().dropStructure(new Structure({id: 2, name: 'observatory', cost: 15}));
    };

    return {
        initialize: initialize
    };
});
