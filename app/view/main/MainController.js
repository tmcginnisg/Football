Ext.define('Football.view.main.MainController', {
    extend: 'Ext.app.ViewController'

    ,requires: [
        'Ext.window.MessageBox',
        'Football.view.picks.NextWeeksPicks',
        'Football.view.picks.NextWeeksPicksController',
        'Football.view.main.OvController'
    ]

    ,alias: 'controller.main'

    ,nxtWkPicksPanel: null
    ,overviewPanel: null
    ,currentPanel: null

    ,onClickOverview: function(t, eOpts) {
      var me = this;
      if(me.overviewPanel) {
        me.swapPanels(me.overviewPanel);
      }
    }
    ,onClickNextWeeksPicks: function(t, eOpts) {
      var me = this,
        view = me.getView();

      if(me.nxtWkPicksPanel) {
        me.swapPanels(me.nxtWkPicksPanel);
      } else {
        // this didn't work for some reason
        //me.nxtWkPicksPanel = new Football.view.picks.NextWeeksPicks();

        me.nxtWkPicksPanel = Ext.create('Ext.form.Panel', {
          region: 'center',
          itemId: 'nxtWksPicksPanelId',
          xtype: 'panel',
          layout: {
            type: 'column'
          },
          title: 'Next Weeks Picks',
          reference: 'gamesPanel',
          controller: 'nxtWksPicksController',
          viewModel: {
              type: 'nxtWksPicksViewModel'
          },
          listeners: {
            beforeRender: 'onBeforeRender'
          }
        });

        me.overviewPanel = me.currentPanel = me.lookupReference('overviewPanelRef');
        me.swapPanels(me.nxtWkPicksPanel);
      }
    }

    ,swapPanels: function(n) {
      var me = this,
        view = me.getView(),
        old = null;

      old = view.remove(me.currentPanel.getItemId(), false);
      view.add(n);
      me.currentPanel = n;
    }

    ,onBeforeRenderGamesPanel: function(t, eOpts) {
      var vm = this.getViewModel()
        ,weeks = vm.getStore('weekStoreId');
    }

    ,displayNxtWksPicks: function(records) {
      var me = this;


    }
});
