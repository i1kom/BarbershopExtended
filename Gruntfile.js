module.exports = function(grunt) {
 grunt.loadNpmTasks('grunt-browser-sync');
 grunt.loadNpmTasks('grunt-contrib-less');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-postcss');
 grunt.loadNpmTasks('grunt-contrib-htmlmin');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-copy'); 
 grunt.loadNpmTasks('grunt-contrib-clean');
 
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
    postcss: {
		style: {
		  options: {
		  autoprefixer: { grid: true },
		  map: {
			inline: true,
		  },
		processors: [
			  require('autoprefixer')([
          ">= 5%",
		  "ie 10"
        ])
			]
		  }
		},
		dist: {
		    files: {
			  "../Build(BSE)/css/style.css": "css/style.css"
			}
		}
    },
	htmlmin: {                                    
		dist: {                                      // Target
			options: {                                 // Target options
				removeComments: true,
				collapseWhitespace: true
			},
			files: {                                   // Dictionary of files
				'../Build(BSE)/index.html': 'index.html',     // 'destination': 'source'
			}
		}
	},
	uglify: {
		dist: {
			src: [
				'js/*.js', // Все JS в папке libs // Конкретный файл
			],
			dest: '../Build(BSE)/js/script.js',
		}
	},
	watch: {
      styles: {
        files: ['less/**/*.less', '*.html'], 
        tasks: ['htmlmin', 'less', 'postcss', 'copy'],
        options: {
          nospawn: true,
		  livereload: false
        }
      }
    },
	copy: {
		main: {
			files: [
			  // includes files within path and its sub-directories
				{
					expand: true, 
					src: [
						'fonts/**.{woff,woff2}',
						'images/**'
						], 
					dest: '../Build(BSE)/'
				}
			],
		},
	},
	/*clean: {
		build: ['../Build(BSE)/**'],
	},*/
	browserSync: {
		bsFiles: {
			src : [
				'css/*.css',
				'*.html'
				]
		},
		options: {
			watchTask: true,
			notify: false,
			server: {
				baseDir: "../Build(BSE)/"
			}
		}
	}
});
 
	grunt.registerTask('default', [/*'clean',*/'less', 'postcss', 'htmlmin', 'uglify', 'copy', 'browserSync', 'watch']);
};