const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      order = require('gulp-order'),
      sass = require('gulp-sass')(require('sass'));

const jsFiles = [
	'./src/assets/js/jquery-2.1.4.js',
	'./src/assets/js/jquery.easing.1.3.js',
	'./src/assets/js/bootstrap-3.3.5.js',
	'./src/assets/js/jquery.waypoints-4.0.0.js',
	'./src/assets/js/sticky-4.0.1.js',
	'./src/assets/js/hoverIntent-r7.js',
	'./src/assets/js/superfish.js',
	'./src/assets/js/jquery.magnific-popup-0.9.9.js',
	'./src/assets/js/main.js',
  './src/assets/js/modernizr-2.6.2.js'
];

const cssFiles = [
  './src/assets/sass/animate.css',
  './src/assets/sass/icomoon.css',
  './src/assets/sass/bootstrap.scss',
  './src/assets/sass/superfish.css',
  './src/assets/sass/magnific-popup.css',
  './src/assets/sass/style.scss'
];

function js(cb) {
	return gulp
		.src(jsFiles)
		.pipe(concat('scripts.js'))
  	.pipe(uglify({mangle: false}))
		.pipe(gulp.dest('./public/assets'));

  cb();
}

function css(cb) {
  return gulp
    .src(cssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/assets'));
}


let all = gulp.parallel(js, css);

exports.js = js;
exports.css = css;
exports.watch = function() {
  return gulp.watch('./src/assets/**/*', { events: 'all', ignoreInitial: false }, all);
}
exports.default = all;
