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
      // js 文件处理
      {
        test: /\.js|jsx$/i,
        use: [
          {
            // cacheDirectory 缓存
            loader: 'babel-loader?cacheDirectory=true'
          }
        ],
        // 排除node_modules目录
        exclude: /node_modules/
      },
      // css文件处理
      {
        test: /\.(le|c)ss$/,
        // loader 从右向左解析
        // less-loader 处理less 文件， postcss-loader 处理兼容问题
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
      },
      // 图片字体文件等处理
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240, //10K
              esModule: false
            }
          }
        ],
        exclude: /node_modules/
      },
      // 处理html中的文件
      {
        test: /.html$/,
        use: 'html-withimg-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}