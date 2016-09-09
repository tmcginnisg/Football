Ext.define('Football.model.GameViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.game',

data: {
  game: {
    record: {
      'id': '1' ,
      'WeekRecUid': '1',
      'WeekDesc': 'Week 1',
      'HomeTeamRecUid': '1' ,
      'HomeTeamName': 'Philadelphia Eagles',
      'AwayTeamRecUid': '2' ,
      'AwayTeamName': 'Baltimore Ravens',
      'WinnerRecUid': null
    }
  }
}
});
