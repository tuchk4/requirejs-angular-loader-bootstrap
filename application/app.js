define(function(require) {

  require('modules/user/user-includes');
  require('modules/router/router-includes');
  require('modules/application/application-includes');

  var ng = require('angular');

  var name = 'my-app';
  var app = ng.module(name, [
    'router',
    'application',
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
