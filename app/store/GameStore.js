Ext.define('Football.store.GameStore', {
	extend: 'Ext.data.Store',
	requires: [
		'Football.model.GameModel'
	],

	model: 'Football.model.GameModel'

	,storeId: 'gameStoreId'

	,data: [{
		'id': '1' ,
		'WeekRecUid': '1',
		'WeekDesc': 'Week 1',
		'HomeTeamRecUid': '1' ,
		'HomeTeamName': 'Philadelphia Eagles',
		'AwayTeamRecUid': '2' ,
		'AwayTeamName': 'Baltimore Ravens',
		'WinnerRecUid': null
	},{
		'id': '2' ,
		'WeekRecUid': '1' ,
		'WeekDesc': 'Week 1',
		'HomeTeamRecUid': '3' ,
		'HomeTeamName': 'New York Jets',
		'AwayTeamRecUid': '4' ,
		'AwayTeamName': 'New England Patriots',
		'WinnerRecUid': null
	},{
		'id': '3' ,
		'WeekRecUid': '1' ,
		'WeekDesc': 'Week 1',
		'HomeTeamRecUid': '5' ,
		'HomeTeamName': 'Buffalo Bills',
		'AwayTeamRecUid': '6' ,
		'AwayTeamName': 'Carolina Panthers',
		'WinnerRecUid': null
	}]

/*
	proxy: {
		type: 'jsonp',
		callbackKey: 'GameCallback',
		url: 'http://localhost:8081/football/getGames',
		useDefaultXhrHeader: false,
		reader: {
			type: 'json',
			rootProperty: 'games'
		}
	},

	autoLoad: true
*/
});
