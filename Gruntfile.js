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

  var applicationBootScript = './application/boot.js';
  var baseUrl = './application';
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
    },

    connect: {
      docs: {
        options: {
          base: ['docs'],
          port: 9010,
          debug: true,
          open: true,
          livereload: true
        }
      }
    },

    ngdocs: {
      options: {
        dest: 'docs',
        html5Mode: false,
        title: 'My docs'
      },
      app: {
        src: ['application/modules/**/*.js']
      }
    },

    jshint: {
      app: ['application/**/*.js']
    },

    closureLint: {
      app:{
        closureLinterPath :'',
        command: 'gjslint',
        src: [ 'application/**' ],
        options: {
          stdout: true,
          strict: true
        }
      }
    },
    closureFixStyle: {
      app:{
        closureLinterPath : '',
        command: 'fixjsstyle',
        src: [ 'application/**' ],
        options: {
          stdout: true,
          strict: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-closure-linter');

  grunt.registerTask('default', ['requirejs:app', 'requirejs:vendors']);
  grunt.registerTask('lint', ['jshint:app']);
  grunt.registerTask('docs', ['ngdocs']);
  grunt.registerTask('servedocs', ['connect:docs', 'watch:docs']);

  grunt.registerTask('checkstyle', ['closureLint:app']);
  grunt.registerTask('fixstyle', ['closureFixStyle:app']);
};