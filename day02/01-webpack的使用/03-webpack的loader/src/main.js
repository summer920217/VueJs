//1. es6模块化
import {add,mul} from './js/mathUtils';
console.log(add(10,15));
console.log(mul(10,15));

//2. commonJs的模块化规范
const {name,age,height} = require('./js/info.js');
console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')


// 4.依赖less文件
require('./css/special.less')