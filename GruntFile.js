/* 
	This is the Grunt Workflow for small projects
	Author: Simon Gooder
	Version: 0.5
*/

'use strict';

//  Grunt Module
module.exports = function(grunt) {

	// Time that shiz
	require('time-grunt')(grunt);

	// Configuration
	grunt.initConfig({
		
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
				files:'site/scss/**/*.scss',
				tasks:['sass', 'postcss'],
			},
			gruntfile: {
			  	files: ['Gruntfile.js']
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
	                'site/css/main.css': 'site/scss/main.scss',
                    'site/css/theme.css': 'site/scss/theme.scss'
	            }
	        }
		},
		// Browser Sync Config
		browserSync: {
		  default_options: {
		    bsFiles: {
		      // watch these files for change
		      src: [
		        "site/css/*.css",
		        "site/*.html",
		        "site/partials/*.html"
		      ]
		    },
		    options: {
		      watchTask: true,
		      // The index file to serve
		      proxy: "http://localhost:7000/site/index.html",
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
		    	  'site/css/main.css' : 'site/css/main.css',
                  'site/css/theme.css' : 'site/css/theme.css'
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

	// Default task(s).
  	grunt.registerTask('default', ['browserSync','postcss','watch']);
  	grunt.registerTask('server', ['web_server']);
};
