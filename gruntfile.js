module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			dist: ['dist']
		},
		uglify: {
			dist: {
				options: {
					banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n',
					compress: {
						drop_console: true,
						global_defs: {
							MOBILE_FIRST: true,
							IE8_SUPPORT: true
						},
						dead_code: true
					},
					mangle: true
				},
				src: ['src/breaks2000.js'],
				dest: 'dist/breaks2000.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean', 'uglify']);
};