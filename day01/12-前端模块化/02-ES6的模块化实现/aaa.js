var name = '小明';
var flag = true;
function sum(num1,num2){
  return num1 + num2;
}

console.log('小明');

// 1. 导出方式1:对象
export {
  flag,sum
}


// 2. 导出方式2：变量
export var school = '南京大学';
export var city = '南京';


// 3. 导出方式3：函数/类
export function mul(num1,num2){
  return num1 * num2;
}

export class Person{
  run(){
    console.log('在奔跑');
  }
}

// 4. 导出方式4：export default 只能有一个
const country = 'china';
// 导出一个属性
// export default country;
// 导出一个具名函数
// export default function list(){
//   console.log('列表');
// }
// 导出一个匿名函数
export default function (){
  console.log('表格');
}
