/**
 * Load all dependencies for module
 */
define(function(require) {

  var module = require('module!@');

  /**
   * Include controllers
   */
  require('controller!beer');


  /**
   * Require configs
   */
  require('config!main')(module);
});
