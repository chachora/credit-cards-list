const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: 'public/index.html',
});

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'web'),
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'whatwg-fetch',
    './index.jsx',
  ],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.join(__dirname, 'web/dist'),
    publicPath: '/',
    filename: '[hash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'web/public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), htmlWebpackPlugin],
};
