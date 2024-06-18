const path = require('path');
module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'module.js'),
  output: {
    library: 'FormioPrettyCheckboxes',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: 'formio-pretty-checkboxes.js',
  },
  plugins: [],
  module: {},
  mode: 'development',
  performance: { hints: false },
  externals: {
    '@formio/js': 'Formio'
  }
};
