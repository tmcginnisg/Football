/**
* A grid that can add new records and/or edit existing records and/or delete records.
* These features can be activated by setting isInsertable, isEditable, and isDeleteable.
 */
Ext.define('Football.view.main.ModifiableGrid', {
	extend: 'Ext.grid.Panel',
	requires: [
		'Football.store.TeamStore'
	],
	
	xtype: 'modifiableGrid',
	
	reference: 'taskeditgrid',
	
	config: {
		currentPhase: null
	},
	
	publishes: ['currentPhase'],

	bind: {
		currentPhase: '{currentPhase}',
		store: '{phases}'
	},
	
	isEditable: false,
	
	isInsertable: false,
	
	isDeleteable: false,
	
	rowediting: null,
	
	plugins: [{
		ptype: 'rowediting',
		pluginId: 'taskEditPlugin',
        autoCancel: false
		/*,
		listeners: {
			canceledit: function(editor, context, eOpts) {
				Ext.Msg.alert('', 'Canceled');
			}
		}
		*/
    }],
	
	dockedItems: [{
		dock: 'top',
		xtype: 'toolbar',
		items: [{
			tooltip: 'Add new Time Entry',
			text: 'Add Time Entry',
			listeners: {
				click: 'onAddTaskEditGridEntry'
			}
		}]
	}],
	
	columns: [{ 
		text: 'Id', 
		dataIndex: 'id'
	},{ 
		text: 'Team', 
		dataIndex: 'name',
		flex: 1
	},{
		xtype: 'actioncolumn',
		menuDisabled: true,
		sortable: false,
		width: 50,
		items: [{
			tooltip: 'Delete Task',
			handler: 'onDeleteTask'
		}]
	}],
	
	listeners: {
		scope: 'this',
		select: 'onTaskSelect'
	},
	
	onTaskSelect: function(grid, phase) {
		this.setCurrentPhase(phase);
	},
	
	constructor: function(config) {
		
		this.callParent();
		this.rowediting = this.plugins[0];
		
		if(!this.isInsertable) {
			var dockedItems = this.getDockedItems('toolbar', true);
			dockedItems[0].hide();
		}
		
		if(!this.isEditable) {
			var plugin = this.getPlugin('taskEditPlugin');
			plugin.disable();
		}
	}
	
});