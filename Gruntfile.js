module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {

      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    },
    watch: {
      all: {
        files: ['public/sass/style.scss', 'public/css/style.css', 'public/js/script.js'],
        tasks: ['sass','csslint','jshint']
      }
    },
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'public/css/style.css': 'public/sass/style.scss'    // 'destination': 'source'

      }
      }
    },
    csslint: {

      lax: {
        options: {
          import: false,
          'order-alphabetical' :false
        },
        src: ['public/css/*.css','!*.min.css']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'public/js/*.js'],
      options:{
        esversion : 6
    }
  });

  // Load the plugin that provides the "uglify" task.
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-csslint');
     grunt.loadNpmTasks('grunt-contrib-jshint');



  // Default task(s).
    grunt.registerTask('default', ['watch']); //run this using grunt test
    grunt.registerTask('ugly', ['uglify','cssmin','imagemin']);

};
