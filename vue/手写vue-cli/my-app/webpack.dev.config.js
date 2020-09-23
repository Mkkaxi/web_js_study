const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css|styl$/,
        use: [
          process.env.NODE_ENV != 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          // MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    // 确保引入了这个插件
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      allChunks: true
    })

  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: '8080',
    open: true,
    hot: true
  }
}