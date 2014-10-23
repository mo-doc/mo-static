var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('less',function(){
    gulp.src('./static/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./static/css/'));

    gulp.src('./static/less/img/**/*.*')
     .pipe(gulp.dest('./static/img'));
});

gulp.task('watch','',function(){
    gulp.watch('./static/**/*.less', function(event) {
        gulp.start('less');
    });
});

gulp.task('default',['less']);
