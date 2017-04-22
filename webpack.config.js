var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var filename = 'bundle.js'
var apiUrl = 'http://localhost:3000';
var plugins = []

if (process.env.NODE_ENV === 'production') {
  filename = 'bundle.min.js'
  apiUrl = 'https://api.edifybot.com'
  
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  )
}

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
    filename: filename
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  },
  plugins: plugins.concat([
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(apiUrl)
      }
    })
  ])
}