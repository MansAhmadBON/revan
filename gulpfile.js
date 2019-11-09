const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglifycss = require('gulp-uglifycss');
const image = require('gulp-image');

function img(){
    return gulp.src('src/assets/images/**')
               .pipe(image({
                    pngquant: true,
                    optipng: false,
                    zopflipng: true,
                    jpegRecompress: false,
                    mozjpeg: true,
                    guetzli: false,
                    gifsicle: true,
                    svgo: true,
                    concurrent: 10,
                    quiet: true
                }))
                .pipe(gulp.dest('./build/assets/img'));
}


function style(){
    return gulp.src('./src/scss/**/*.scss')
               .pipe(sourcemaps.init())
               .pipe(sass())
               .pipe(autoprefixer({
                    overrideBrowserslist: ['last 2 versions'],
                    cascade: false
                }))
               .pipe(uglifycss())
               .pipe(sourcemaps.write())
               .pipe(gulp.dest('./build/css'))
               .pipe(browserSync.stream())
}


function scripts(){
    return gulp.src('./src/js/*.js')
               .pipe(gulp.dest('./build/js'))
               .pipe(browserSync.stream());
}


function watch(){
    browserSync.init({
        server: {
            baseDir: './build'
        }
    })
    gulp.watch('./src/scss/**/*.scss', style)
    gulp.watch('./src/js/*.js', scripts)
    gulp.watch('./build/*.html').on('change', browserSync.reload)
    
}

exports.img = img;
exports.scripts = scripts;
exports.style = style;
exports.start = watch;