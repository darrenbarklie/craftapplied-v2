var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    //path: __dirname,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
  },
  module: {
    loaders: [
      { // JSX Loader //
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { // Stylesheet Loader //
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: /flexboxgrid/
      },
      { // Image Loader //
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file-loader?name=assets/images/[name].[ext]',
        include: path.join(__dirname, 'src'),
        exclude: [
          path.resolve(__dirname, "src/assets/fonts")
        ]
      },
      { // Fonts Loader //
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
        include: [
          path.resolve(__dirname, "src/assets/fonts")
        ],
      }
    ]
  }
};
