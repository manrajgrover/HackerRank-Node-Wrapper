/*
* @Author: Manraj Singh
* @Date:   2016-06-18 01:42:54
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-18 20:18:05
*/

var gulp = require('gulp');
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
 
gulp.task('browser', function() {
  browserify({ debug: true })
    .transform(babelify)
    .require("./Example/test.js", { entry: true })
    .bundle()
    .on('error',gutil.log)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./Example/source'));
});
 
gulp.task('watch',function() {
  gulp.watch(['./*.js'],['browser'])
});
 
gulp.task('default', ['browser','watch']);