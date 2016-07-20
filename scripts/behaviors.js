
// expose the behaviors on a shared namespace - we won't need all of this when using a module system
App.Behaviors = {};
Marionette.Behaviors.behaviorsLookup = function () {
  return App.Behaviors;
};
