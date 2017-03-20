/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});
const CleanPlugin = new CleanWebpackPlugin(['public']);
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });
const UglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });
const DedupePlugin = new webpack.optimize.DedupePlugin();
const CommonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] });

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'manifest.json' },
  { from: 'favicon.ico' },
  { from: 'sw.js' },
  { from: 'src/images/icons', to: 'images' },
]);

const ExtractText = new ExtractTextPlugin('styles.css');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './src/index.js',
  },
  output: {
    path: 'public',
    filename: '[name].js',
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
        ),
      },
      {
        test: /.(png|woff(2)?|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [CleanPlugin, DefinePlugin, HTMLWebpackPluginConfig, UglifyPlugin, DedupePlugin,
    ExtractText, CopyWebpackPluginConfig, CommonChunksPlugin],
};
