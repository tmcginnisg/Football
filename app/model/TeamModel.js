Ext.define('Football.model.TeamModel', {
    extend: 'Ext.data.Model',
    
	alias: 'model.teammodel',
	
    fields: [
		{ name: 'id', type: 'int' },
		{ name: 'name', type: 'string' },
		{ name: 'selected', type: 'int' }
	]
});