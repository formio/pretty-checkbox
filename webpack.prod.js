const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'formio-pretty-checkboxes.min.js';
module.exports = config;
