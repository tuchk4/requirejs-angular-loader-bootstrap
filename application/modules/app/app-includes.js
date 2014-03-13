/**
 * Load all dependencies for module
 */
define(function(require) {

  require('./app');

  /**
   * Include providers
   */
  require('./src/providers/spinner');
});
