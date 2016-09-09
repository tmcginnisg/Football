/**
 * A template of a controller for a form that creates a new record.
 * When implementing make sure to change the following:
 * <ul>
 * <li>name</li>
 * <li>alias</li>
 * <li>the store name in the onSubmit function</li>
 * </ul>
 */
Ext.define('Football.view.main.ModifiableGridController', {
    extend: 'Ext.app.ViewController',
	
	alias: 'controller.modifiablegridcontroller',
	
	addEntry: function() {
		var me = this, 
			store = me.getView().store,
			rowediting = me .getView().rowediting;
		
		// cancel any active edit
		rowediting.cancelEdit();
		
		var record = Ext.create('football.model.TeamModel');
		
		store.add(record);
		rowediting.startEdit(store.count()-1, 0);
	}
});
