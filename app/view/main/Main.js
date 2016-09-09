/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Football.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Football.view.main.MainController',
        'Football.view.main.MainModel',
		    'Football.view.main.ModifiableGrid',
        'Football.view.main.Overview',
        'Football.view.picks.NextWeeksPicks'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    items: [{
      xtype: 'tabpanel',
      items: [{
        title: 'Overview'
      },{
        title: 'Next Weeks Picks',
        xtype: 'nxtWksPicks'
      }]



    }]
});
