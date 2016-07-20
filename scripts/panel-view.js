
App.PanelView = Marionette.ItemView.extend({

  template: function () {
    return _.template(tpl.get('panel-view'))
  },

  className: 'panel',

  ui: {
    // this property is required by our behavior
    collapsibleTrigger: '.header'
  },

  behaviors: {
    Collapsible: {
      // behaviorClass is for use with a js module system (e.g. require.js)
      // behaviorClass: App.Collapsible,
      toggleElements: ['.content']
    }
  },

  onRender: function () {
    // these events are triggered from the behavior, on the view's event proxy, so anyone on
    // that channel can listen to them (here, the view is listening to its own events)
    this.listenTo(this, 'behavior:collapsible:collapse', this._onCollapse);
    this.listenTo(this, 'behavior:collapsible:expand', this._onExpand);
  },

  _onCollapse: function () {
    console.log('[behavior:collapsible:collapse] caught!');
    // behaviors can listen to changes in the view's model as well
    this.model.set('timesCollapsed', this.model.get('timesCollapsed') + 1);
  },

  _onExpand: function () {
    console.log('[behavior:collapsible:expand] caught!');
  }

});
