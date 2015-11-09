/* 
	This is the Grunt Workflow for Spotful Style
	Author: Simon Gooder
	Todo: grunt-concurrent
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
		      port: 8000
		    },
		    foo: 'bar' // Apparently this is necessary
		},
		// Watch for changes in .scss files, & autoprefix them css
		watch: {
			sass: {
				files:'site/scss/**/*.scss',
				tasks:['sass', 'postcss'],
			},
			bake: {
		        files: [ 'site/templates/*.html' ],
		        tasks: ['bake'],
		    }
		},
		// Compile Sass
		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'site/css/main.css': 'site/scss/main.scss'
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
		        "site/*.html"
		      ]
		    },
		    options: {
		      watchTask: true,
		      // The index file to serve
		      proxy: "http://localhost:8000/site/index.html",
		    }
		  }
		},
		// Postcss / Autoprefixer config
		postcss: {
		    options: {
		      map: false,
		      processors: [
		        require('autoprefixer')({
		        	browsers: ['> 1%', 'Explorer 8']
		        })
		      ]
		    },
		    dist: {
		    	files: {
		    	  'site/css/main.css' : 'site/css/main.css'
		    	}
		    }
		},
		bake: {
	        your_target: {

	            files: {
	                "site/index.html" : "site/templates/index.html"
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
	grunt.loadNpmTasks( 'grunt-bake');

	// Default task(s).
  	grunt.registerTask('default', ['bake','browserSync','postcss','watch']);
  	grunt.registerTask('server', ['web_server']);
};
