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
  }
}