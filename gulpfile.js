var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var mqpacker = require("css-mqpacker");
var cssminify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var run = require("run-sequence");
var del = require("del");



gulp.task("style", function(done) {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
    done();
});



gulp.task("serve", function(done) {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", gulp.series("style"));
  gulp.watch("*.html").on("change", () => {
    server.reload();
    done();
  });

  done();
});


