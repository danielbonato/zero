// Desenvolvido por Daniel Bonato
// danielbonato@gmail.com

'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json']
      },
      js: {
        files: [
          '<%= config.app %>/assets/src/js/**/*.js',
          ],
        options: {
          livereload: true
        },
        tasks: ['uglify']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      styles: {
        files: ['<%= config.app %>/assets/src/less/**/*.less'],
        tasks: ['less', 'cssmin', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/**/*.php',
          '<%= config.app %>/**/*.html',
          '<%= config.app %>/assets/src/js/**/*.js',
          '<%= config.app %>/assets/src/less/**/*.less'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      production: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.app %>/assets/dist/*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
      },
      less: { 
        src: '<%= config.app %>/assets/dist/css/zero.css',
        dest: '<%= config.app %>/assets/dist/css/zero.css'
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care
    // of minification. These next options are pre-configured if you do not
    cssmin: {
      production: {
        files: {
          '<%= config.app %>/assets/dist/css/zero.css': [
            '<%= config.app %>/assets/dist/css/**/*.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= config.app %>/assets/dist/js/main.js': [
            '<%= config.app %>/assets/src/js/main.js'
          ]
        }
      }
    },
    concat: {
      allJS: {
        files: {
          '<%= config.app %>/assets/dist/js/allJS.js': [
          '<%= config.app %>/vendor/js/jquery.min.js',
          '<%= config.app %>/vendor/js/bootstrap.min.js'
          ]
        }
      }
    },


    // LESS
    less: {
      production: {
        files: {
          '<%= config.app %>/assets/dist/css/zero.css': [
          
            '<%= config.app %>/assets/src/less/**/*.less',
            
            // Exclui os media queries 
            '!' + '<%= config.app %>/assets/src/less/**/*' + '*landscape.less',
            '!' + '<%= config.app %>/assets/src/less/**/*' + '*tablet.less',
            '!' + '<%= config.app %>/assets/src/less/**/*' + '*desktop.less',
            '!' + '<%= config.app %>/assets/src/less/**/*' + '*wide.less'
            ]
        }
      },
    },

    // COPY FONTS
    copy: {
      fonts: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>/assets/src/fonts/',
          dest: '<%= config.app %>/assets/dist/fonts/',
          src: [
            './**/*.eot',
            './**/*.svg',
            './**/*.ttf',
            './**/*.woff',
            './**/*.woff2'
          ]
        }]
      }
    },
  });


  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });


  grunt.registerTask('build', [
    'clean:production',
    'copy',
    'less',
    'cssmin',
    'autoprefixer',
    'concat',
    'uglify',
    'watch'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
