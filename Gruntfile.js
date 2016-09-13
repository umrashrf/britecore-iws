'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    injector: {
      options: {
      },
      local_dependencies: {
        options: {
          destFile: 'index.html',
          addRootSlash: false
        },
        files: [{
          expand: true,
          cwd: 'libs',
          src: ['*/*.*']
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-injector');

  // Default task(s).
  grunt.registerTask('default', ['injector']);
};
