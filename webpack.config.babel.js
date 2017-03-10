/* eslint-disable */

import devConfig from './webpack.dev.config.babel.js';
import prodConfig from './webpack.prod.config.babel.js';

let config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = prodConfig;
    break;
  default:
    config = devConfig;
    break;
}

module.exports = config;
