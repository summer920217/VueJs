// 1.导入{}中定义的变量
/*
import {flag,sum} from './aaa.js';

if(flag){
  console.log('小明是天才，哈哈哈');
  console.log(sum(20,30));
}

// 2.直接导入export定义的变量
import {school,city} from './aaa.js';

console.log(school);
console.log(city);

// 3.导入 export的function
import {mul,Person} from './aaa.js';

console.log(mul(20,30));

var p = new Person();
p.run();


//4. 导入默认的 可以自定义名字接收
// import coun from './aaa.js';
// console.log(coun);

import fun1 from './aaa.js';
fun1();

console.log('------------');

*/
//5. 导入所有
// import {flag,sum,mul} from './aaa.js';
// console.log(flag);
import * as obj from './aaa.js';
console.log(obj.flag);
console.log(obj.sum(10,20));


