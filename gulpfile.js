/*
* @Author: Manraj Singh
* @Date:   2016-06-18 01:42:54
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-18 16:59:00
*/

var gulp = require('gulp');
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
 
gulp.task('es6', function() {
  browserify({ debug: true })
    .transform(babelify)
    .require("./test.js", { entry: true })
    .bundle()
    .on('error',gutil.log)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./source'));
});
 
gulp.task('watch',function() {
  gulp.watch(['./*.js'],['es6'])
});
 
gulp.task('default', ['es6','watch']);