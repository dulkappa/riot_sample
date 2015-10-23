var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

gulp.task('html', function() {
  gulp
  .src('src/index.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('browserify', function() {
  browserify({ entries: ['src/app.js'] })
  .transform(riotify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('server', ['browserify', 'html'], function() {
  gulp
  .src('dist')
  .pipe(webserver({
    livereload: true,
    directoryListining: true,
    open: true
  }));
});

gulp.task('default', ['server']);
