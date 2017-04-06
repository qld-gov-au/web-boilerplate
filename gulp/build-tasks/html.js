'use strict';

module.exports = function (gulp, plugins, config) {
  return function (cb) {
    const target = [
      `${config.basepath.src}/**/*.html`,
    ].concat(config.build.excludes);

    let projectAssets = new RegExp('="/assets/_project/', 'g');
    return gulp.src(target, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      // .pipe(plugins.replace(projectAssets, `="/assets/${config.versionName}/`))
      .on('error', console.log)
      .pipe(gulp.dest(config.basepath.build));
  };
};
