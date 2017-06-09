/* 
	This is the Grunt Workflow for small projects
	Author: Simon Gooder
	Version: 0.7
*/

'use strict';

//  Grunt Module
module.exports = function(grunt) {

	// Time that shiz
	require('time-grunt')(grunt);

	// Configuration
	grunt.initConfig({

        // Variables for the path
        path: {
            dist: 'dist/',
            dev: 'site/'
        },
		
		// Get Meta Data
		pkg : grunt.file.readJSON('package.json'),

		// Rolls a webserver on `grunt server`
		web_server: {
		    options: {
		      cors: true,
		      port: 7000
		    },
		    foo: 'bar' // Apparently this is necessary
		},
		// Watch for changes in .scss files, & autoprefix them css
		watch: {
			sass: {
				files:'<%= path.dev %>scss/**/*.scss',
				tasks:['sass', 'postcss'],
			},
			gruntfile: {
			  	files: ['Gruntfile.js']
			}
		},
        // Clear the dist folder
        clean: ['<%= path.dist %>*'],
        // Minification
        uglify: {
            smush_it_up: {
                files: {
                    '<%= path.dist %>slimstarterkit.min.js': ['<%= path.dev %>js/*.js']
                }
            }
        },
        copy: {
            copy_it_over: {
                src: ['<%= path.dev %>index.html', '<%= path.dev %>css/*'],
                dest:'<%= path.dist %>',
                expand: true,
                flatten: true,
                filter: 'isFile'
            }
        },
		// Compile Sass
		sass: {
	        options: {
	            sourceMap: true,
	            sourceMapEmbed: false,
	            sourceMapContents: true,
	            outputStyle: 'compressed',
	        },
	        dist: {
	            files: {
	                '<%= path.dev %>css/main.css': '<%= path.dev %>scss/main.scss',
                    '<%= path.dev %>css/theme.css': '<%= path.dev %>scss/theme.scss'
	            }
	        }
		},
		// Browser Sync Config
		browserSync: {
		  default_options: {
		    bsFiles: {
		      // watch these files for change
		      src: [
		        "<%= path.dev %>css/*.css",
		        "<%= path.dev %>*.html",
		        "<%= path.dev %>partials/*.html"
		      ]
		    },
		    options: {
		      watchTask: true,
		      // The index file to serve
		      proxy: "http://localhost:7000/<%= path.dev %>index.html",
		    }
		  }
		},
		// Postcss / Autoprefixer config
		postcss: {
		    options: {
		      map: false,
		      processors: [
		        require('autoprefixer')({
		        	browsers: ['> 1%', 'Explorer 10']
		        })
		      ]
		    },
		    dist: {
		    	files: {
		    	  '<%= path.dev %>css/main.css' : '<%= path.dev %>css/main.css',
                  '<%= path.dev %>css/theme.css' : '<%= path.dev %>css/theme.css'
		    	}
		    }
		},

	});

	// Load Tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-web-server');
	grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-uglify');   
    grunt.loadNpmTasks('grunt-contrib-copy');   
    grunt.loadNpmTasks('grunt-contrib-clean');                                      

	// Default task(s).
  	grunt.registerTask('dev', ['browserSync','postcss','watch']);
  	grunt.registerTask('server', ['web_server']);
    grunt.registerTask('build', ['clean', 'uglify', 'copy']);

};
