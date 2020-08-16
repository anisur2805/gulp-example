var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify-es').default,
    cleancss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('admin-css', function() {
    return gulp.src('admin/assets/build/styles/*.scss' )
        .pipe(sourcemaps.init())
        .pipe( sass() )
        .pipe( cleancss() )
        .pipe(sourcemaps.write(''))
        .pipe( gulp.dest('admin/assets/dist/css' ) );
} );

gulp.task('guest-css', function() {
    return gulp.src('guest/assets/build/styles/*.scss' )
        .pipe(sourcemaps.init())
        .pipe( sass() )
        .pipe( cleancss() )
        .pipe(sourcemaps.write(''))
        .pipe( gulp.dest('guest/assets/dist/css' ) );
} );

gulp.task('users-css', function() {
    return gulp.src('users/assets/build/styles/*.scss' )
        .pipe(sourcemaps.init())
        .pipe( sass() )
        .pipe( cleancss() )
        .pipe(sourcemaps.write(''))
        .pipe( gulp.dest('users/assets/dist/css' ) );
} );

gulp.task('watch', function() {
    gulp.watch('admin/assets/build/styles/**/*.scss', gulp.series('admin-css'));
    gulp.watch('guest/assets/build/styles/**/*.scss', gulp.series('guest-css'));
    gulp.watch('users/assets/build/styles/**/*.scss', gulp.series('users-css'));

    // gulp.watch('admin/assets/build/scripts/*.js',gulp.series('js'));
});