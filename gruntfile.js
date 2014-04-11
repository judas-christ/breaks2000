module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
					}
				},
				src: ['src/responsive2000.js'],
				dest: 'dist/responsive2000.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
};