module.exports = function( grunt ) {

	grunt.initConfig( {

		// Import package manifest
		pkg: grunt.file.readJSON( "package.json" ),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.repository.url %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: [ "src/bourne.js" ],
				dest: "dist/bourne.js"
			}
		},

		// Lint definitions
		jshint: {
			files: [ "src/bourne.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			dist: {
				src: [ "src/bourne.js" ],
				dest: "src/bourne.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

        // Simple server
        serve: {
            'path': './dev'
        },

		watch: {
			files: [ "src/*", "style/*", "style/core/*", "test/**/*" ],
			tasks: [ "default" ]
		}

	} );

	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );	
	grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-serve" );
	
	grunt.registerTask( "lint", [ "jshint" ] );
	grunt.registerTask( "build", [ "concat", "uglify" ] );
	grunt.registerTask( "default", [ "jshint", "build" ] );
};