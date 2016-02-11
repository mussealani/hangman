module.exports = function (grunt) {
  [
     "grunt-contrib-watch",
     "grunt-sass",
     "grunt-contrib-jshint",
     ].forEach( function(task) {
       grunt.loadNpmTasks(task);
     });

     grunt.initConfig({
      watch: {
        script: {
          files: ['js/main.js']
        },
        css: {
          files: ['**/*.scss'],
          tasks: ['sass']
        }
      },

      jshint: {
        all: ['**/*.js'],
      },

      sass: {
        dist: {
          files: {
            'css/style.css' : 'sass/style.scss'
          }
        }
      },

    });

     grunt.registerTask('default', ['watch', 'sass']);
};

