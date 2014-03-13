/**
 * Create angular module
 */
define(function(require) {
  var ng = require('angular');

  require('angular-route');

  var module = ng.module('router', ['ngRoute']);

  return module;
});
