define(function(require) {

  require('modules/router/router-includes');
  require('modules/app/app-includes');
  require('modules/user/user-includes');

  var ng = require('angular');

  var name = 'my-app';
  var app = ng.module(name, [
    'router',
    'app',
    'user'
  ]);

  ng.element(document)
    .ready(function()
      {
        var root = ng.element(document.querySelector('#' + name));

        ng.bootstrap(root, [name]);
        console.timeEnd('application loading');
      });
});
