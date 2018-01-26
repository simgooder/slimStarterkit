/* ================
// Required Plugins
// ============= */

var gulp = require('gulp'),
    fs = require('fs'),
    reload = require('require-reload')(require),
    packageJSON = require('./package.json'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    minimist = require('minimist'),
    gulpif = require('gulp-if'),
    cached = require('gulp-cached'),
    changed = require('gulp-changed'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    cssnano = require('gulp-cssnano'),
    extReplace = require('gulp-ext-replace'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    svgSprite = require('gulp-svg-sprite');


/* ================
// Setup Environment
// ============= */

var dist = 'dist/',
    base = './' + dist,
    min = '',
    production = true;

var options = minimist(process.argv.slice(2));

if (options.base) base = './';
if (options.min) min = '.min';
if (options.production) production = true;


/* ================
// Compile Sass
// ============= */

gulp.task('sass', function() {

    return gulp.src('src/scss/main.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dist + 'css'))
        .pipe(browserSync.stream())
        .pipe(gulpif(production, postcss([
            require('autoprefixer')({
                browsers: [
                    '> 0.5%',
                    'last 2 versions'
                ],
                cascade: false
            })
        ])))
        .pipe(gulpif(production, cssnano()))
        //.pipe(gulpif(production, extReplace('.min.css')))
        .pipe(gulpif(production, gulp.dest(dist + 'css')))
        .pipe(gulpif(production, browserSync.stream()));

});


/* ================
// Compile JS
// ============= */

gulp.task('js', function() {

    return gulp.src([
        'src/js/**/*.js'
    ])
    .pipe(concat('site.js'))
    //.pipe(gulp.dest(dist + 'js'))
    .pipe(browserSync.stream())
    .pipe(gulpif(production, uglify({
        mangle: false
    })))
    .pipe(gulpif(production, extReplace('.min.js')))
    .pipe(gulpif(production, gulp.dest(dist + 'js')))
    .pipe(gulpif(production, browserSync.stream()));

});


/* ================
// Compile JS
// ============= */

gulp.task('move-templates', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest(dist))
})


/* ================
// Optimize Images
// ============= */

gulp.task('images', function() {

    return gulp.src('src/img/**/*')
        .pipe(changed(dist + 'images'))
        .pipe(imagemin())
        .pipe(gulp.dest(dist + 'images'))
        .pipe(browserSync.stream());

});


/* ================
// Create Sprite
// ============= */

gulp.task('sprite', function() {

    return gulp.src('src/svg/*.svg')
        .pipe(svgSprite({
        mode: {
            inline: true,
            symbol: {
            dest: dist
            }
        },
        svg: {
            xmlDeclaration: false,
            doctypeDeclaration: false,
            dimensionAttributes: false
        }
    }))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());

});


/* ================
// Sync Changes
// ============= */

gulp.task('browser-sync', function() {

    browserSync.init({
        logPrefix: packageJSON.name,
        ui: false,
        server: {
            baseDir: './dist'
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
                padding: '4px 8px',
                fontSize: '12px',
                borderBottomLeftRadius: '0'
            }
        }
  });

});

gulp.task('reload', function() {

	browserSync.reload();

});


/* ================
// Reset Build
// ============= */

gulp.task('reset', function() {

    try {
        packageJSON = reload('./package.json');
    } catch (e) {
        console.error("Failed to reload package.json! Error: ", e);
    }

});


/* ================
// Clean Dist
// ============= */

gulp.task('clean', function() {

    del([
        '*.html',
        'dist/**',
        '!dist',
        '!dist/svg',
        '!dist/svg/**'
    ]);

});


/* ================
// Watch Files
// ============= */

gulp.task('watch', function() {

    gulp.watch(['package.json'], ['reset', 'build']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/img/**/*', ['images']);
    gulp.watch('src/svg/*', ['sprite']);
    gulp.watch('src/**/*.html', ['move-templates', 'reload']);

});


/* ================
// Gulp Task Sets
// ============= */

gulp.task('build', [
    'images',
    'sprite',
    'sass',
    'js'
]);

gulp.task('default', [
    'build',
    'watch',
    'browser-sync'
]);