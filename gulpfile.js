var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var pug = require('gulp-pug');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

gulp.task('pug', function() {
  gulp
  .src('src/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('dist/'));
});

gulp.task('browserify', function() {
  browserify({ entries: ['src/app.js'] })
  .transform(riotify, { 'template': 'pug', 'ext': 'tag.pug' })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('server', ['browserify', 'pug'], function() {
  gulp
  .src('dist')
  .pipe(webserver({
    host: 'localhost',
    port: '7000',
    livereload: true,
    directoryListining: true,
    open: true
  }));
});

gulp.task('default', ['server']);
