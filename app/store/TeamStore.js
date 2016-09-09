Ext.define('Football.store.TeamStore', {
	extend: 'Ext.data.Store',
	requires: [
		'Football.model.TeamModel'
	],
	
	model: 'Football.model.TeamModel',

	proxy: {
		type: 'jsonp',
		callbackKey: 'teamCallback',
		url: 'http://localhost:8081/football/getTeams',
		useDefaultXhrHeader: false,
		reader: {
			type: 'json',
			rootProperty: 'teams'
		}
	},

	autoLoad: true
});