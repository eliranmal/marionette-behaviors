
// app initialization

App.addRegions({
  appRegion: '#app'
});

App.Router = Marionette.AppRouter.extend({
  appRoutes: {
    '': 'main'
  }
});

App.Controller = Marionette.Controller.extend({
  main: function() {
    var model = new Backbone.Model({
      timesCollapsed: 0
    });
    var view = new App.PanelView({
      model: model
    });
    App.appRegion.show(view);
  }
});

App.on("start", function() {

  tpl.loadTemplates(['panel-view'], function() {
    App.controller = new App.Controller();
    App.router = new App.Router({
      controller: App.controller
    });
    Backbone.history.start();
  });

});



// utils

var tpl = {
  templates: {},
  loadTemplates: function(names, callback) {
    var that = this;
    var loadTemplate = function(index) {
      var name = names[index];
      $.get('partials/' + name + '.html', function(data) {
        that.templates[name] = data;
        index++;
        if (index < names.length) {
          loadTemplate(index);
        } else {
          callback();
        }
      });
    }
    loadTemplate(0);
  },
  get: function(name) {
    return this.templates[name];
  }
};























