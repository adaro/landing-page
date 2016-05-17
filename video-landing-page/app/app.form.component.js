(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-form',
      templateUrl: '/app/templates/sign-up-form/sign-up-form.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));