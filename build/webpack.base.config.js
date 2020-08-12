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
        test: /\.js|jsx$/i,
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')({
                  "overrideBrowserslist": [
                    ">0.25%",
                    "not dead"
                  ]
                })
              ]
            }
          }
        }, 'less-loader'],
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