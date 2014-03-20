module.exports = function(grunt) {

  var vendors = {
    list: [
      'angular-route',
      'requirejs',
      'requirejs-text'
    ],
    paths: {
      'requirejs': '../bower_components/requirejs/require',
      'requirejs-text': '../bower_components/requirejs-text/text'
    }
  };

  var applicationBootScript = './app/boot.js';
  var baseUrl = './app';
  var built = {
    vendors: 'build/vendors.js',
    app: 'build/app.js'
  };

  var uglify2Options = {
    compress: {
      evaluate: true,
      drop_debugger: true,
      dead_code: true
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      vendors: {
        options: {
          baseUrl: baseUrl,
          logLevel: 2, //WARNING
          out: built.vendors,
          // optimize: 'none',
          optimize: 'uglify2',
          uglify2: uglify2Options,
          // generateSourceMaps: true, //<-uncomment this line to enable source mapping
          preserveLicenseComments: false,
          mainConfigFile: applicationBootScript,
          include: vendors.list,
          paths: vendors.paths
        }
      },
      app: {
        options: {
          baseUrl: baseUrl,
          logLevel: 2, //WARNING
          out: built.app,
          // optimize: 'none',
          optimize: 'uglify2',
          uglify2: uglify2Options,
          // generateSourceMaps: true, //<-uncomment this line to enable source mapping
          preserveLicenseComments: false,
          mainConfigFile: applicationBootScript,
          name: 'boot',
          exclude: vendors.list,
          paths: vendors.paths
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', ['requirejs:app', 'requirejs:vendors']);

};