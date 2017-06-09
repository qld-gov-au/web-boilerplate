'use-strict';

module.exports = function (gulp, plugins, config, destFolder = 'assets', type = 'build') {
  return function (cb) {
    let src = [
      `${config.basepath.src}/assets/_project/_blocks/*.scss`,
      '!**/_*.scss',
    ];

    return gulp.src(src)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.plumber())
      .pipe(plugins.sass({
        includePaths: [config.basepath.src],
      }))
      .on('error', plugins.sass.logError)
      .pipe(plugins.autoprefixer({
        browsers: plugins.supportedBrowser,
        cascade: false,
      }))
      .pipe(gulp.dest(config.basepath.build));
  };
};
