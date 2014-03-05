module.exports = function(grunt) {

    var shared = {
        libs: [
            'angular-resource',
            'moment',
            'angular-cache',
            'angular-route',
            'jquery',
            'tv4'
        ],
        pathes: {
            'requirejs': '../bower_components/requirejs/require',
            'requirejs-text': '../bower_components/requirejs-text/text'
        }
    };

    var applicationBootScript = './application/boot.js';
    var baseUrl = './application';
    var requireJsLib = '../bower_components/requirejs/require';
    var built = {
        shared: 'build/shared.js',
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
            shared: {
                options: {
                    baseUrl: baseUrl,
                    logLevel: 2, //WARNING
                    out: built.shared,
                    // optimize: 'none',
                    optimize: 'uglify2',
                    uglify2: uglify2Options,
                    // generateSourceMaps: true, //<-uncomment this line to enable source mapping
                    preserveLicenseComments: false,
                    mainConfigFile: applicationBootScript,
                    include: shared.libs,
                    paths: shared.pathes
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
                    exclude: shared.libsg
                }
            }
        },

        less: {
            main: {
                options: {
                    compress: true,
                    ieCompat: false,
                    cleancss: true
                },
                files: {
                    '../Style/main.css': '../Style/main.less'
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
                title: 'Analytics'
            },
            app: {
                src: ['app/modules/**/*.js']
            }
        },

        jshint: {
            app: ['app/**/*.js']
        },

        compress: {
            node_modules: {
                options: {
                    archive: 'bin/node_modules.zip'
                },
                files: [{
                    src: ['./node_modules/**', './node_modules/.bin/*'],
                    dest: '/'
                }]
            }
        },

        clean: {
            app: {
                files: {
                    dest: 'build/**/*.js'
                }
            }
        },

        watch: {
            docs: {
                files: ['app/**/*.*'],
                tasks: ['docs'],
                options: {
                    atBegin: true,
                    livereload: true
                }
            },
            styles: {
                files: ['../Style/**/*.less'],
                tasks: ['less:main'],
                options: {
                    atBegin: true,
                    livereload: true
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
    // grunt.loadNpmTasks('grunt-contrib-TASKNAME');

    grunt.registerTask('default', ['requirejs:app', 'requirejs:shared']);
    grunt.registerTask('prod', ['clean', 'requirejs:app', 'requirejs:shared']);
    grunt.registerTask('pack', ['compress:node_modules']);
    grunt.registerTask('lint', ['jshint:app']);
    grunt.registerTask('docs', ['ngdocs']);
    grunt.registerTask('servedocs', ['connect:docs', 'watch:docs']);
    grunt.registerTask('styles', ['watch:styles']);
};