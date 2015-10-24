var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var jade = require('gulp-jade');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

gulp.task('jade', function() {
  gulp
  .src('src/index.jade')
  .pipe(jade())
  .pipe(gulp.dest('dist/'));
});

gulp.task('browserify', function() {
  browserify({ entries: ['src/app.js'] })
  .transform(riotify, { 'template': 'jade' })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('server', ['browserify', 'jade'], function() {
  gulp
  .src('dist')
  .pipe(webserver({
    livereload: true,
    directoryListining: true,
    open: true
  }));
});

gulp.task('default', ['server']);
