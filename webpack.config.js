var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  },
  plugins: PROD ? [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}