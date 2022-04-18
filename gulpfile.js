const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const jsmin = require("gulp-jsmin");
const del = require("del");

//Delete

function delbuild() {
  return del("build");
}

exports.delbuild = delbuild;

//HTML
function html() {
  return gulp.src("source/**/**/*.html")
    .pipe(plumber())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"))
    .pipe(sync.stream())
}

exports.html = html;

//JS

function js() {
  return gulp.src("source/js/*.js")
    .pipe(plumber())
    .pipe(jsmin())
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream())
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
    .pipe(sync.stream())
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
      baseDir: 'build'
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
  gulp.watch("source/css/*.css", gulp.series("styles"));
  gulp.watch("source/**/**/*.html", gulp.series("html"));
  gulp.watch("source/js/*.js", gulp.series("js"));
}

exports.build = gulp.series(delbuild, html, js, images, styles);

exports.start = gulp.series(server, watcher)
