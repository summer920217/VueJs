//生产模式
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

const {merge} = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig,{
  plugins:[
    new uglifyJsPlugin()
  ],
})