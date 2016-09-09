Ext.define('Football.view.game.Game', {
    extend: 'Ext.panel.Panel'
    ,requires: [
      'Football.model.GameViewModel'
      ,'Football.view.game.GameController'
      ,'Football.ajga.BindableRadioGroup'
    ]

    ,xtype: 'gameRadioGroup'
    ,viewModel: {
      type: 'game'
    }

    ,controller: 'game'

    ,items: [ {
      xtype: 'bindableradiogroup'
      // width: 400,
      ,bind: {
        radioValue: '{game.record.selectedWinner}'
      }

      ,defaults: {
        //name: 'game1',
        margin: '0 15 0 0',
        disabledCls: null
      }

      //,radioName: 'game1'
      ,columns: 1
      ,items: [{
        inputValue: 'A'
        ,bind: {
          boxLabel: '{game.record.AwayTeamName}'
        }
        ,listeners: {
          focus: 'onFocus'
        }
        //,width: 60
      },{
        inputValue: 'H'
        ,bind: {
          boxLabel: '{game.record.HomeTeamName}'
        }
        //,width: 50
      }]

      ,listeners: {
        focus: function(t) {
          console.log(t.radioName);
        }
      }
    }]
});
