var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('less',function(){
    gulp.src('./static/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./static/css/'));
});

gulp.task('watch','',function(){
    gulp.watch('./static/**/*.less', function(event) {
        gulp.start('less');
    });
});

gulp.task('default',['less']);
