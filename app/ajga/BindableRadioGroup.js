// This extends RadioGroup object to publish a new property called radioValue
// which is data value of the selected radioButton. The normal getValue()
// behavior returns an object containing a key:value pair of the name of the
// selected radioButton and the inputValue of that radioButton (like {buttonName: 'Y'})
// which can't be bound to a data model easily. This BindableRadioGroup publishes
// the data value ('Y') so it can be bound esily, and updates the RadioGroup value
// object with the correct key:value pair.
//
// radioName: is required and must be the same as the name on the inner radioButtons

Ext.define('Football.ajga.BindableRadioGroup', {
  extend: 'Ext.form.RadioGroup',
  xtype: 'bindableradiogroup',
  radioName: '',
  local: true,
  isBindableRadioGroup: true,
  config:{
    radioValue: null
  },
  publishes: 'radioValue',
  checkChange: function() {
    var value = this.getValue(),
      v = value[this.radioName];
    if (!Ext.isArray(v)) {
      this.setRadioValue(v);
    }
  },
  updateRadioValue: function (v) {
    var val = {};
    val[this.radioName] = v;
    this.setValue(val);
  }
});
