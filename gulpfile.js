var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var ts = require("gulp-typescript"),
    tsconfigPath = "tsconfig.json";

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

gulp.task("ts-scripts", function () {
    gulp.src("public/**/*.ts")
        .pipe(ts(ts.createProject(tsconfigPath)))
        .pipe(gulp.dest("www/scripts"));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', ['jshint', 'build-css', 'ts-scripts'], function () {
    gulp.watch(['public/**/*.js', 'parser/**/*.js'], ['jshint']);
    gulp.watch('assets/partials/*.scss', ['build-css']);
    gulp.watch('public/**/*.js', ['ts-scripts']);
});

