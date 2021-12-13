//webpack的配置文件
//引入path包
const path = require('path');

//commonjs语法
module.exports = {
  //入口
  entry:'./src/main.js',
  //出口
  output:{
    path:path.resolve(__dirname,'dist'),//绝对路径
    filename:"bundle.js"
  },
  //模块
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 1)css-loader 只负责将css文件进行加载
        // 2)style-loader负责将样式添加到DOM中
        // 3)使用多个loader时，是从右向左
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        parser: {
          dataurlCondition: {
            maxSize: 8192
          }
        }
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },


    ],
  },
}