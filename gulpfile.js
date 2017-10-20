//https://gist.github.com/markbrown4/11359901
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var autoprefix = require('gulp-autoprefixer');
var defineModule = require('gulp-define-module');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var exec = require('child_process').exec;
var bs = require('browser-sync').create(); // create a browser sync instance.

var paths = {
  scripts: {
    src:  'assets/scripts/**/*.js',
    dest: 'static/javascripts'
  },
  styles: {
    src:  'assets/scss/**/*.scss',
    dest: 'static/stylesheets'
  },
  templates: {
    src:  'assets/templates/*.hbs',
    dest: './'
  }
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(bs.reload({stream: true}));;
});
gulp.task('templates', function () {
    var resumeData = require('./assets/scripts/resumeData.js').data;
    var options = {
    //         ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false 
    //         partials : {
    //             footer : '<footer>the end</footer>'
    //         },
    //         batch : ['./assets/templates/partials'],
    //         helpers : {
    //             capitals : function(str){
    //                 return str.toUpperCase();
    //             }
    //         }
    };
    return gulp.src(paths.templates.src)
        .pipe(handlebars(resumeData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(paths.templates.dest))
        .pipe(bs.reload({stream: true}));;
});
gulp.task('styles', function() {
  return gulp.src(paths.styles.src)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefix(['last 2 versions', "ie 8"]))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(bs.reload({stream: true}));;
});

gulp.task('watch',['browser-sync'], function() {
    gulp.watch('./assets/**/*.*', ['generate-pdf'])
        .on('change', bs.reload);
});

// PDF Generation
gulp.task('generate-pdf',['styles', 'scripts', 'templates'], function (cb) {
    exec('electron-pdf ~/Documents/Resume/hello.html  ~/Documents/Resume/output.pdf',
         function (err, stdout, stderr) {
             console.log(stdout);
             console.log(stderr);
             cb(err);
         });
});
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('default', [ 'styles',
                       'scripts',
                       'templates',
                       'watch',
                       'generate-pdf',
                       'browser-sync' ]);
