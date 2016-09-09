Ext.define('Football.model.GameModel', {
    extend: 'Ext.data.Model',

	alias: 'model.gamemodel',

    fields: [
		{ name: 'id', type: 'int' },
		{ name: 'WeekRecUid', type: 'int' },
    { name: 'WeekDesc', type: 'string' },
		{ name: 'HomeTeamRecUid', type: 'int' },
    { name: 'HomeTeamName', type: 'string' },
		{ name: 'AwayTeamRecUid', type: 'int' },
    { name: 'AwayTeamName', type: 'string' },
		{ name: 'WinnerRecUid', type: 'int' }
	]
});
