const gulp = require('gulp')
const theo = require('gulp-theo');
 
// Transform design/props.yml to dist/props.scss:
gulp.task('tokens:scss', () =>
  gulp.src('src/tokens/tokens.yml')
    .pipe(theo({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('src/sass'))
)

gulp.task('default', function(){
    gulp.watch('src/tokens/**/*.yml', gulp.series('tokens:scss'));
});