//es6模块化
import {add,mul} from './mathUtils';
console.log(add(10,15));
console.log(mul(10,15));

//commonJs的模块化规范
const {name,age,height} = require('./info.js');
console.log(name);
console.log(age);
console.log(height);