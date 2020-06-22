const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'module.js'),
  output: {
    library: 'formio-pretty-checkboxes',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: 'formio-pretty-checkboxes.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "formio-pretty-checkboxes.css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader?-url',
          'sass-loader',
        ]
      }
    ]
  },
  mode: 'development',
  performance: { hints: false },
  externals: {
    formiojs: 'Formio'
  }
};
