
// App.Collapsible = Marionette.Behavior.extend({ // register the behavior for a module system
App.Behaviors.Collapsible = Marionette.Behavior.extend({ // register the behavior on the lookup path

  defaults: {
    toggleElements: []
  },

  events: {
    // collapsibleTrigger is expected at the owning view's ui hash
    'click @ui.collapsibleTrigger': '_toggle'
  },

  modelEvents: {
    'change:timesCollapsed': '_modelChanged'
  },

  onRender: function () {
    this._toggle();
  },


  isExpanded: function () {
    return this.$el.is('.view-expanded') && !this.$el.is('.view-collapsed');
  },


  _toggle: function () {
    var collapsing = this.isExpanded();
    this._toggleClasses(collapsing);
    this._toggleElements(!collapsing);
    this._triggerEvents(collapsing);
  },

  _toggleClasses: function (collapsing) {
    this.$el.toggleClass('view-collapsed', !!collapsing);
    this.$el.toggleClass('view-expanded', !collapsing);
  },

  _toggleElements: function (hide) {
    var toggleElementsSelector = this.options.toggleElements.join(',');
    this.$(toggleElementsSelector).toggle(!!hide);
  },

  _triggerEvents: function (collapsing) {
    var eventName = collapsing ? 'behavior:collapsible:collapse' : 'behavior:collapsible:expand';
    this.view.trigger(eventName);
  },

  _modelChanged: function (model, val) {
    (val % 2 === 0) && this.$el.css('color', '#900') || this.$el.css('color', '#666');
  }

});












