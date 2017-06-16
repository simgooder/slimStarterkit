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

        projectConfig: require('./Grunt.config'),
		
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
		// Watch for changes in .scss files, & autoprefix them
		watch: {
			sass: {
                files: '<%= projectConfig.dev %>/scss/**/*.scss',
                tasks: ['sass:dev', 'postcss:dev'],
            },
            js: {
                files: '<%= projectConfig.dev %>/*.js'
            },
            html: {
                files: '<%= projectConfig.dev %>/*.html'
            }
		},
        // Clear the dist folder
        clean: ['<%= projectConfig.dist %>'],
        // Minification
        uglify: {
            smush_it_up: {
                files: {
                    '<%= projectConfig.dist %>/slimstarterkit.min.js': ['<%= projectConfig.dev %>/js/*.js']
                }
            }
        },
        copy: {
            copy_it_over: {
                src: ['<%= projectConfig.index %>', '<%= projectConfig.dev %>/css/*'],
                dest:'<%= projectConfig.dist %>',
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
	            outputStyle: 'compressed'
	        },
	        dev: {
                files: {
                    '<%= projectConfig.temp %>/main.css' : '<%= projectConfig.dev %>/scss/main.scss',
                    '<%= projectConfig.temp %>/theme.css' : '<%= projectConfig.dev %>/scss/theme.scss'
                }
            },
            dist: {
                files: {
                    '<%= projectConfig.temp %>/main.css' : '<%= projectConfig.dev %>/scss/main.scss',
                    '<%= projectConfig.temp %>/theme.css' : '<%= projectConfig.dev %>/scss/theme.scss'
                }
            }
		},
		// Browser Sync Config
		browserSync: {
            dev: {
                bsFiles: {
                    // Refresh on these changes...
                    src: [
                        '<%= projectConfig.dev %>/**/*.js',
                        '<%= projectConfig.dev %>/*.html',
                        '<%= projectConfig.dev %>/css/*.css'
                    ]
                },
                options: {
                    server: {
                        baseDir: '<%= projectConfig.dev %>'
                    },
                    watchTask: true,
                    browser: "<%= projectConfig.browser %>"
                    // The index file to serve
                    //proxy: "http://localhost:7000/<%= projectConfig.index %>",
                }
            }
        },
		// Postcss / Autoprefixer config
		postcss: {
		    options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['> 0.5%', 'Explorer 10']
                    })
                ]
		    },
		    dev: {
                files: {
                    '<%= projectConfig.dev %>/css/main.css' : '<%= projectConfig.temp %>/main.css',
                    '<%= projectConfig.dev %>/css/theme.css' : '<%= projectConfig.temp %>/theme.css'
                }
            },
            dist: {
                files: {
                    '<%= projectConfig.dist %>/css/main.css' : '<%= projectConfig.temp %>/main.css',
                    '<%= projectConfig.dist %>/css/theme.css' : '<%= projectConfig.temp %>/theme.css'
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
  	grunt.registerTask('dev', [
        'sass:dev',
        'postcss:dev',
        'browserSync:dev',
        'watch'
    ]);

  	grunt.registerTask('server', [
          'web_server'
    ]);

    grunt.registerTask('build', [
        'clean', 
        'uglify', 
        'copy',
        'sass:dist',
        'postcss:dist'
    ]);

};
