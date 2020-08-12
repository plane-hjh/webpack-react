const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 打包构建单入口配置  
  entry: path.resolve(__dirname, '../src/index.js'),
  // 打包输出文件路径
  output: {
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}