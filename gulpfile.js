// Include plugins
const gulp = require('gulp');

const shell = require('gulp-shell');

const browserSync = require('browser-sync').create();

const plumber = require('gulp-plumber');

const rename = require('gulp-rename');

const uglify = require('gulp-uglify');

// Task for building blog when something changed:
gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', () => {
  browserSync.init({
    server: { baseDir: '_site/' },
    notify: false,
    reloadDelay: 2000,
    injectChanges: false
  });
  // Reloads page when some of the already built files changed:
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['scripts', 'build', 'serve']);

gulp.task('scripts', () =>
  gulp
    .src('assets/scripts.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('assets'))
);
