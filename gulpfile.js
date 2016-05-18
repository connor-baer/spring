// Include plugins
var gulp = require('gulp'),
	shell = require('gulp-shell'),
	browserSync = require('browser-sync').create(),
	jshint = require('gulp-jshint'),
  plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

// Task for building blog when something changed:
gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'},notify: false,reloadDelay: 2000,injectChanges: false});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['scripts', 'build', 'serve']);


gulp.task('scripts', function () {
  return gulp.src('assets/scripts.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(rename("scripts.min.js"))
  .pipe(gulp.dest('assets'))
});