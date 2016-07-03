/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  registerPostCSSPlugin('postcss-import');
  registerPostCSSPlugin('postcss-cssnext');

  var app = new EmberApp(defaults, {
    styleProcessorOptions: {
      processors: [{
        type: 'postcss',
        plugins: POSTCSS_PLUGINS
      }],
      extension: 'css'
    },
    svg: {
      optimize: {
        plugins: [
          { removeDoctype: true },
          { removeViewBox: true },
          { removeTitle: true },
          { removeDesc: true }
        ]
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};

const POSTCSS_PLUGINS = [];

function registerPostCSSPlugin(moduleName, options) {
  POSTCSS_PLUGINS.push({
    module: require(moduleName),
    options: options
  });
}
