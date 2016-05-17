(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: '/app/templates/video-backround/video-background.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));