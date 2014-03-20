define(function(require) {

  require('modules/foo/foo-includes');
  require('modules/bar/bar-includes');
  require('modules/application/application-includes');

  var ng = require('angular');

  var name = 'my-app';
  var app = ng.module(name, [
    'application',
    'foo',
    'bar'
  ]);

  ng.element(document)
    .ready(function()
      {
        var root = ng.element(document.querySelector('#' + name));

        ng.bootstrap(root, [name]);
        console.timeEnd('application loading');
      });
});
