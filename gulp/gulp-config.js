'use strict';

module.exports = {
  basepath: {
    src: 'src',
    build: 'build',
    release: 'release',
    test: 'test',
    node_modules: 'node_modules',
    web_template: 'node_modules/web-template-release',
    template_version: 'v3',
  },
  build: {
    excludes: [
      '!**/_DELETE*/**/*',
      '!**/_DELETE*',
      '!**/_old*/**/*',
      '!**/_old*',
    ],
    htmlPartials: {
      flatten: false, // Import linked partials to create flat HTML files
      transform: false, // Turn this on to change the partial to what is displayed below
      link: '<!--#include virtual="/assets/includes/header/coat-of-arms.html"-->', // Partial include
    },
    useScss: false,
  },
};
