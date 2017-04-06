'use strict';

module.exports = function (gulp, plugins, config) {
  return function (cb) {
    let target = [];
    // This needs to change once RC3 is rolled out
    if (config.localAssets === true) {
      target = [`${config.basepath.web_template}/swe/assets/includes/**/*.html`];
    } else {
      target = [`${config.basepath.web_template}/swe/assets/includes/**/*.html`];
    }

    return gulp.src(target, { dot: true })
      .pipe(plugins.include({ hardFail: true }))
      .on('error', console.log)
      .pipe(gulp.dest(`${config.basepath.build}/assets/includes/`));
  };
};
