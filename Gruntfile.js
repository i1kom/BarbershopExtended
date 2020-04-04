module.exports = function(grunt) {
 grunt.loadNpmTasks('grunt-contrib-less');

 
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style.css": "less/style.less" 
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], 
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });
 
  grunt.registerTask('default', ['less', 'watch']);
};