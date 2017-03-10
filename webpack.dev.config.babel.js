/* eslint-disable */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  eslint: {
    configFile: './.eslintrc',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      {
        test: /.(png|woff(2)?|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
};
