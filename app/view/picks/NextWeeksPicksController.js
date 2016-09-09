Ext.define('Football.view.picks.NextWeeksPicksController', {
    extend: 'Ext.app.ViewController',

    requires: [

    ],

    alias: 'controller.nxtWksPicksController',

    initialized: false,

    onBeforeRender: function() {
      var me = this,
        vm = this.getViewModel(),
        view = this.getView(),
        nxtWkStore = vm.getStore('nextWkGamesStoreId');

        if(!me.initialized) {
          me.initialize();
        }
    },

    initialize: function() {
      var me = this,
        vm = me.getViewModel(),
        games = vm.getStore('games'),
        view = me.getView();

        me.gameNbr = 1;

      games.each(function(game){
        var gpanel = Ext.create('Football.view.game.Game',{
          defaults: {
            name: 'game'+me.gameNbr
          },
          radioName: 'game'+me.gameNbr
        });
        gpanel.getViewModel().set('game.record', game);
        me.view.add(gpanel);
        me.gameNbr++;
      });
    }
});
