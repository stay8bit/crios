'use strict';

// variables
var
	gulp = require('gulp'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	concatCss = require('gulp-concat-css'),
	cssnano = require('gulp-cssnano'),
	notify = require('gulp-notify'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');


// static server
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: "./build/"
		}
	});
});

// html
gulp.task('html', function () {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./build/'));
});


// css
gulp.task('css', function () {
	return gulp.src('./src/sass/*.sass')
		.pipe(sass())
		.on('error', notify.onError())
		.pipe(concatCss("styles.min.css"))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css/'));
});

// js
gulp.task('js', function () {
	return gulp.src('./src/script/*.js')
		.pipe(gulp.dest('./build/script/'));
});

// images
gulp.task('img', function () {
	return gulp.src('./src/images/*.*')
		.pipe(gulp.dest('./build/images/'));
});


// watcher
gulp.task('watch', function () {
	gulp.watch('./src/*.html', ['html', browserSync.reload]);
	gulp.watch('./src/sass/*.sass', ['css', browserSync.reload]);
	gulp.watch('./src/script/*.js', ['js', browserSync.reload]);
	gulp.watch('./src/images/*.*', ['img', browserSync.reload]);
});


// default task
gulp.task('default', ['html', 'css', 'js', 'img', 'browser-sync', 'watch']);