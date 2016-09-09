Ext.define('Football.store.WeekStore', {
	extend: 'Ext.data.Store',
	requires: [
		'Football.model.WeekModel'
	],

	model: 'Football.model.WeekModel',

	storeId: 'weekStoreId',
	
	data: [{
		"id": 1,
		"season": 2016,
		"week": 1,
		"startDate": '2016-09-08',
		"endDate": '2016-09-14'
	}]
/*
	proxy: {
		type: 'jsonp',
		callbackKey: 'weekCallback',
		url: 'http://localhost:8081/football/getWeeks',
		useDefaultXhrHeader: false,
		reader: {
			type: 'json',
			rootProperty: 'weeks'
		}
	},

	autoLoad: true
	*/
});
