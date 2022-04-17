const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      order = require('gulp-order');

function js(cb) {
  var files = [
	  './src/assets/js/jquery-2.1.4.js',
	  './src/assets/js/jquery.easing.1.3.js',
	  './src/assets/js/bootstrap-3.3.5.js',
	  './src/assets/js/jquery.waypoints-4.0.0.js',
	  './src/assets/js/sticky-4.0.1.js',
	  './src/assets/js/jquery.stellar-0.6.2.js',
	  './src/assets/js/hoverIntent-r7.js',
		'./src/assets/js/superfish.js',
	  './src/assets/js/jquery.magnific-popup-0.9.9.js',
	  './src/assets/js/main.js',
    './src/assets/js/modernizr-2.6.2.js'
	];

	return gulp
		.src(files)
		.pipe(concat('scripts.js'))
  	.pipe(uglify({mangle: false}))
		.pipe(gulp.dest('./public/js'));

  cb();
}

exports.js = js;
exports.default = gulp.series(js);
