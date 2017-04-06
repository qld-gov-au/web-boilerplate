'use strict';

const gulp            = require('gulp');
const del             = require('del');
const runSequence     = require('run-sequence');
const plugins         = require('gulp-load-plugins')();

let config          = require('./gulp/gulp-config.js');

// Project quick configuration
config.localAssets = true;

/* CLEAN TASKS */
gulp.task('clean-build', (cb) => {
  return del([config.basepath.build], cb);
});
gulp.task('clean-release', (cb) => {
  return del([config.basepath.release], cb);
});

/* BUILD TASKS */
gulp.task('html', require('./gulp/build-tasks/html')(gulp, plugins, config));
gulp.task('qgwt-includes', require('./gulp/build-tasks/qgwt-includes')(gulp, plugins, config));
gulp.task('qgwt-project', require('./gulp/build-tasks/qgwt-project')(gulp, plugins, config));
// gulp.task('scss', require('./gulp/build-tasks/scss')(gulp, plugins, config));
// gulp.task('js', require('./gulp/build-tasks/js')(gulp, plugins, config));
// gulp.task('otherAssets', require('./gulp/build-tasks/other-assets')(gulp, plugins, config));

gulp.task('build', ['html', 'qgwt-includes', 'qgwt-project' /*, 'scss', 'js', 'other-assets', */]);

/*
gulp.task('default', ['build']);
gulp.task('build:clean', (cb) => {
  runSequence('clean-build', 'build:hardfail', cb);
});
*/
