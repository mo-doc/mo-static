var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var tpl = require('gulp-tpl2mod');
var path = require('path')

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

gulp.task('tpl2mod',function(){
  gulp.src(path.join(__dirname, 'app/**/*.html'))
      .pipe(tpl({
        prefix: 'module.exports='
      }))
      .pipe(gulp.dest("app"));
});

gulp.task('default',['less',"tpl2mod"]);
