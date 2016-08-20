var gulp = require('gulp');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');

gulp.task('scripts', function() {
    console.log('Running my fucking script');
});

gulp.task('minify', function() {
    gulp.src('*/*.js')    
      .pipe(uglify())
      .pipe(gulp.dest('minjs'));
});

gulp.task('default', ['scripts', 'minify']);


gulp.task('watch', function() {
    gulp.watch('*/*.js', ['scripts']);
});

gulp.task('lint', function() {
    return gulp.src('routes/indexRoute.js')    
               .pipe(eslint())
               .pipe(eslint.format())
               .pipe(eslint.failOnError());
});