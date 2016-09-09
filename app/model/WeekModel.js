Ext.define('Football.model.WeekModel', {
    extend: 'Ext.data.Model',
    
	alias: 'model.weekmodel',
	
    fields: [
		{ name: 'id', type: 'int' },
		{ name: 'season', type: 'int' },
		{ name: 'week', type: 'int' },
		{ name: 'startdate', type: 'date' },
		{ name: 'enddate', type: 'date' }
	]
});