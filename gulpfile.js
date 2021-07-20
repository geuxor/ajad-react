const gulp = require('gulp');
const fs = require('fs');
const del = require('del');
const $ = require('gulp-load-plugins')();

// Utility to ignore unnecessary files
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!node_modules{,/**}',
    '!cypress/videos{,/**}',
    '!cypress/screenshots{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store',
    '!**/node_modules{,/**}'
  ]);
}

// JavaScript and JSON linter
function lint () {
  return gulp
    .src(addDefSrcIgnore(['**/*.js', '**/*.json']), { dot: true })
    .pipe($.eslint({ dotfiles: true }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}

// Remove solutions from exercises
function removeSolutions () {
  del.sync('dist');
  return gulp
    .src(addDefSrcIgnore(['**', '!**/REMOVE{,/**}']), { dot: true })
    .pipe(
      $.replace(
        /^\s*(\/\/|<!--|\/\*)\s*REMOVE-START[\s\S]*?REMOVE-END\s*(\*\/|-->)?\s*$/gm,
        ''
      )
    )
    .pipe(gulp.dest('dist'));
}

// Prepare for distribution to students
function updateConfigForSlave (done) {
  let npmConfig = require('./package.json');
  npmConfig = JSON.stringify(npmConfig, null, 2)
    .replace(/-master/g, '')
    .replace(/REMOVE/g, '.')
    .replace(/\/\.\./g, '');
  fs.writeFileSync('dist/package.json', npmConfig);

  done();
}

// Lint all files
exports.lint = lint;

// Prepare for distribution to students
exports.dist = gulp.series(
  removeSolutions,
  updateConfigForSlave
);
