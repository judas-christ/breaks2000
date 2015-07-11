var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var rimraf = require('rimraf');

var config = {
  ie8Support: true,
  mobileFirst: true,
  exportUninitialize: true
};

gulp.task('clean', function(done) {
  rimraf('breaks2000*.js', done);
});

gulp.task('build', ['clean'], function() {
  return gulp.src('src/*.js')
    .pipe($.uglify({
      output: {
        beautify: true
      },
      compress: {
        drop_console: true,
        global_defs: {
          MOBILE_FIRST: config.mobileFirst,
          IE8_SUPPORT: config.ie8Support,
          EXPORT_UNINITIALIZE: config.exportUninitialize
        },
        dead_code: true
      },
      mangle: false
    }))
    .pipe($.header('/*! <%= pkg.name %> <%= pkg.version %> */\n', {
      pkg: require('./package.json')
    }))
    .pipe(gulp.dest('.'))
    .pipe($.uglify({
      preserveComments: 'some'
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['clean', 'build']);
