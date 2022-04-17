const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require('gulp-rename');
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const jsmin = require("gulp-jsmin");

//HTML
function html() {
  return gulp.src("source/**/**/*.html")
    .pipe(plumber())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"))
}

exports.html = html;

//JS

function js() {
  return gulp.src("source/js/*.js")
    .pipe(plumber())
    .pipe(jsmin())
    .pipe(gulp.dest("build/js"))
}

exports.js = js;

// Styles

function styles() {
  return gulp.src("source/css/style.css")
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(gulp.dest("build/css"))
}

exports.styles = styles;

//Image

const images = () => {
  return gulp.src("source/img/**/*.{ico,jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.images = images;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/css/*.css").on("change", sync.reload);
  gulp.watch("source/**/**/*.html").on("change", sync.reload);
  gulp.watch("source/js/*.js").on("change", sync.reload);
}

exports.build = gulp.series(
  html, js, images, styles
);

exports.start = gulp.series(server, watcher)
