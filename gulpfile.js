const gulp = require('gulp');
const webpack = require('webpack-stream');


var concat = require('gulp-concat'),
    order = require('gulp-order');

var jsSources = ['js/*.js'],
    outputCSSDir = 'css',
    outputJSDir = 'js',
    outputDir = './public/js';

gulp.task('default', function () {
  return gulp
    .src('src/assets/js/index.js')
    .pipe(
      webpack({
          optimization: {
            minimize: false,
            mangleExports: false,
            moduleIds: false
          }
      })
    )
    .pipe(gulp.dest('public/js'));
});


gulp.task('js', function() {
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
		.pipe(concat('file.js'))
		.pipe(gulp.dest(outputDir));
});
