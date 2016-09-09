/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Football.view.main.MainModel', {
    extend: 'Ext.app.ViewModel'

    ,requires: [
      'Football.store.GameStore'
    ]

    ,alias: 'viewmodel.main'

    ,data: {
        name: 'Football'
        ,week: '1'
    }

    ,stores: {
      games: 'gameStoreId'
      ,weeks: 'weekStoreId'
    }
});
