//webpack的配置文件
//引入path包
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

//commonjs语法
module.exports = {
  //入口
  entry:'./src/main.js',
  //出口
  output:{
    path:path.resolve(__dirname,'../dist'),//绝对路径
    filename:"bundle.js"
  },
  //模块
  module: {
    rules: [
      //css文件
      {
        test: /\.css$/i,
        // 1)css-loader 只负责将css文件进行加载
        // 2)style-loader负责将样式添加到DOM中
        // 3)使用多个loader时，是从右向左
        use: ["style-loader", "css-loader"],
      },
      //less文件
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      //图片资源
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        parser: {
          dataurlCondition: {
            maxSize: 8192
          }
        }
      },
      //es6->es5:babel-loader
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
      //vue文件
      {
        test:/\.vue$/,
        use:['vue-loader']
      }

    ],
  },
  //解决路径问题
  resolve:{
    extensions:['.js','.css','.vue'],//省略扩展名
    alias:{//使用runtime-compiler模式构建vue
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  //plugin插件
  plugins:[
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归vampire所有'),
    new htmlWebpackPlugin({
      template:'./index.html'
    }),
  ],
}