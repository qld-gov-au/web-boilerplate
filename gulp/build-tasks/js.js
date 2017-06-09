'use-strict';

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (gulp, plugins, config, webpack) {
  return function (cb) {
    let src = [
      `${config.basepath.src}/**/*.js`,
      `!_*.js`,
    ];

    let dest = {
      base: `${config.basepath.build}`,
      ext: `${config.versionName}/js`,
    };

    let webpackSettings = {
      output: {
        filename: 'qg-main.js',
      },
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015'],
          },
        }],
      },
    };

    if (type === 'build') {
      webpackSettings.devtool = 'source-map';
    } else if (type === 'release') {
      webpackSettings.plugins = [
        new UglifyJSPlugin(),
      ];
    }

    return gulp.src(src)
      .pipe(webpack(webpackSettings))
      .pipe(gulp.dest(config.basepath.build));
  };
};