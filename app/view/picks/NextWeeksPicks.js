Ext.define('Football.view.picks.NextWeeksPicks', {
    extend: 'Ext.container.Container',

    requires: [
      'Football.model.NextWeeksPicksViewModel'
    ],

    itemId: 'nxtWksPicksPanelId',
    xtype: 'nxtWksPicks',
    layout: {
      type: 'column'
    },
    title: 'Next Weeks Picks',
    controller: 'nxtWksPicksController',
    viewModel: {
        type: 'nxtWksPicksViewModel'
    },
    listeners: {
      beforeRender: 'onBeforeRender'
    }
});
