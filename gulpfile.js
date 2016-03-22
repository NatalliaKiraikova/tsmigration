var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('build-css', function () {
    return gulp.src('assets/partials/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css/'));
});

// configure the jshint task
gulp.task('jshint', function () {
    return gulp.src(['public/**/*.js',
            'parser/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', ['jshint', 'build-css'], function () {
    gulp.watch(['public/**/*.js', 'parser/**/*.js'], ['jshint']);
    gulp.watch('assets/partials/*.scss', ['build-css']);
});

