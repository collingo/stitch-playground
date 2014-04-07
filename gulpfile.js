var gulp = require('gulp');
var browserify = require('gulp-browserify');
var jshint = require('gulp-jshint');

var jsFiles = [
	'gulpfile.js',
	'src/**/*.js'
];

gulp.task('default', ['lint', 'build', 'watch']);

gulp.task("watch", function() {
	gulp.watch(jsFiles, [
		'lint',
		'build'
	]);
});

gulp.task('lint', function() {
	return gulp.src(jsFiles)
		.pipe(jshint({
			evil: true
		}))
		.pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
	gulp.src('src/index.js')
		.pipe(browserify({
		  debug : true
		}))
		.pipe(gulp.dest('www'));
});

gulp.task('copy', function() {
	gulp.src('./src/**/*', {base: './src'})
		.pipe(gulp.dest('./www/'));
});

gulp.task('build', ['copy', 'scripts']);