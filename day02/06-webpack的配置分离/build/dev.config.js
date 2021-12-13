//开发模式配置
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig,{
  //本地服务器
  "devServer":{
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    hot:true
  },
  mode:'development'
})