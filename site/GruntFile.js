/* 
	This is the Grunt Workflow for Spotful Style
	Author: Simon Gooder
	Version: 0.4
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
		      port: 4000
		    },
		    foo: 'bar' // Apparently this is necessary
		},
		// Watch for changes in .scss files, & autoprefix them css
		watch: {
			sass: {
				files:'blog/_scss/**/*.scss',
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
	            sourceMapEmbed: true,
	            sourceMapContents: true,
	            outputStyle: 'compressed',
	        },
	        dist: {
	            files: {
	                'blog/assets/css/main.css': '_scss/main.scss'
	            }
	        }
		},
		// Browser Sync Config
		browserSync: {
		  default_options: {
		    bsFiles: {
		      // watch these files for change
		      src: [
		        "blog/assets/css/*.css",
		        "_site/*.html"
		      ]
		    },
		    options: {
		      watchTask: true,
		      // The index file to serve
		      proxy: "http://localhost:4000/index.html",
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
		    	  'blog/assets/css/main.css' : 'blog/assets/css/main.css'
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
