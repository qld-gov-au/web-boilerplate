'use strict';

module.exports = function (gulp, plugins, config) {
  return function (cb) {
    const target = [
      `${config.basepath.web_template}/swe/assets/${config.basepath.template_version}/**/*`,
    ];

    if (config.localAssets === true) {
      return gulp.src(target, { dot: true })
        .pipe(plugins.include({ hardFail: true }))
        .on('error', console.log)
        .pipe(gulp.dest(`${config.basepath.build}/assets/${config.basepath.template_version}/`));
    } else {
      return false;
    }
  };
};
