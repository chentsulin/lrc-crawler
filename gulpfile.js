var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var jshint = plugins.jshint;
var jsdoc  = plugins.jsdoc;
var mocha  = plugins.mocha;

// plugins.changed
// plugins.notify
// plugins.if
// plugins.exec

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('lint', function() {
    return gulp.src('./lib/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('build', [ 'lint' ]);