/**
 * Load all dependencies for module
 */
define(function(require) {

  require('module!application');

  /**
   * Include providers
   */
  require('service!providers.spinner');
});
