/* ================
// Required Plugins
// ============= */

var gulp = require('gulp'),
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
    svgSprite = require('gulp-svg-sprite'),
    autoprefixer = require('autoprefixer'),
    handlebars = require('gulp-compile-handlebars'),
    tap = require('gulp-tap'),
    fs = require("fs"),
    path = require("path");


/* ================
// Setup Environment
// ============= */

var dist = 'dist/',
    src = 'src/',
    assets = 'assets/'
    production = true;

var options = minimist(process.argv.slice(2));

if (options.production) production = true;


/* ================
// Compile Sass
// ============= */

gulp.task('sass', function() {

    var plugins = [
        autoprefixer({ browsers: ['> 0.5%', 'ie > 10'], cascade: false })
    ];

    return gulp
        .src('scss/main.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(cssnano())
        .pipe(gulp.dest(dist + 'css'))
        .pipe(browserSync.stream());
});

/* ================
// Compile JS
// ============= */

gulp.task('js', function() {

    return gulp.src([
        'src/js/**/*.js'
    ])
    .pipe(concat('site.js'))
    .pipe(gulpif(production, uglify({
        mangle: false
    })))
    .pipe(gulpif(production, extReplace('.min.js')))
    .pipe(gulp.dest(dist + 'js'))
    .pipe(browserSync.stream());
});


/* ================
// Move files
// ============= */

gulp.task('move-templates', function() {
    return gulp.src([
        'src/**/*.html',
        'src/**/*.json',
        '!src/**/data.json'
    ])
    .pipe(gulp.dest(dist))
})

gulp.task('move-assets', function () {
    return gulp.src([
        'src/assets/**',
        '!src/assets/img'
    ])
    .pipe(gulp.dest(dist + assets))
})


/* ================
// Compile Handlebars Templates
// ============= */
gulp.task('compile-templates', function () {

    var templateData = JSON.parse(fs.readFileSync("src/data.json"));
    var theFileName;

    options = {
        //ignorePartials: true, 
        batch: ['./src/partials'],
        helpers: {
            url: function (str) {
                return str.replace(/\s+/g, '-').toLowerCase();
            },
            filename: function () {
                return theFileName
            }
        }
    }

    return gulp.src('src/*.hbs')
        .pipe(tap(function (file, t) {
            var fullPath = path.basename(file.path);
            var trimPath = fullPath.replace(".hbs", ".html");
            theFileName = trimPath;
        }))
        .pipe(handlebars(templateData, options))
        .pipe(extReplace('.html'))
        .pipe(gulp.dest(dist));
});


/* ================
// Optimize Images
// ============= */

gulp.task('images', function() {

    try {
        return gulp.src('src/assets/img/**/*')
            .pipe(changed(dist + 'assets/img'))
            .pipe(imagemin())
            .pipe(gulp.dest(dist + 'assets/img'))
            .pipe(browserSync.stream());
    } catch (e) {
        console.error("Image minification failed. Error: ", e)
    }

});


/* ================
// Create Sprite
// ============= */

gulp.task('sprite', function() {

    return gulp.src('src/assets/svg/*.svg')
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

    .pipe(gulp.dest(dist + 'assets/svg'))
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

    del.sync([
        'dist/**',
        '!dist',
        '!dist/js',
        '!dist/css'
    ]);

});


/* ================
// Watch Files
// ============= */

gulp.task('watch', function() {

    gulp.watch('package.json', ['reset', 'build']);
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/assets/img/**/*', ['images']);
    gulp.watch(['src/**/*.hbs', 'src/**/data.json'], ['compile-templates', 'reload']);
    // gulp.watch('src/svg/*', ['sprite']);
    gulp.watch(['src/**/*.html', 'src/**/*.hbs', 'src/**/*.json'], ['move-templates', 'reload']);
    gulp.watch(['src/assets/**', '!src/assets/img'], ['move-assets', 'reload'])

});


/* ================
// Gulp Task Sets
// ============= */

gulp.task('build', [
    'clean',
    'images',
    'sass',
    'move-templates',
    'move-assets',
    'js'
]);

gulp.task('default', [
    'build',
    'compile-templates',
    'reload',
    'watch',
    'browser-sync'
]);