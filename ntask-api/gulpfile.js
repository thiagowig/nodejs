var gulp = require('gulp');
var gulpUglify = require('gulp-uglify');

gulp.task('default', function() {
    gulp.src('*/*.js')    
      .pipe(gulpUglify())
      .pipe(gulp.dest('minjs'))
});