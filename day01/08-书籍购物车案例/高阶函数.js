

/* 编程范式： 
  - 命令式编程: 第一步做什么，第二步做什么...,一步一步命令计算机做什么事情
  - 声明式编程: 比如我们的各种指令 v-for自动遍历
*/

/*编程范式：
  - 面向对象编程（第一公民：对象）
  - 函数式编程（第一公民：函数）
*/ 

// 高阶函数
// filter/map/reduce
const nums = [10,20,111,222,444,40,50];

//1. filter函数的使用
// filter中的回调函数有一个要求：必须返回一个boolean值
// - true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// - false:当范湖false时，函数内部会自动过滤掉这次n 

let newNums = nums.filter(function(n){
  return n < 100;//只返回小于100的数组成的新数组
});
console.log(newNums);//[10, 20, 40, 50]

// 2. map函数的使用
let new2Nums = newNums.map(function(n){
  return n * 2
});
console.log(new2Nums);//[20, 40, 80, 100]

// 3. reduce函数的额使用
// reduce作用对数组中所有的内容进行汇总
let total = new2Nums.reduce(function(preValue,n){
  return preValue + n;
},0);
console.log(total);//240

/*    preValue    n
第一次：0         20
第二次：20        40
第三次：60        80
第四次：140       100   
结果：240
*/

//-----上述合并操作-----------
const nums2 = [10,20,111,222,444,40,50];
/*
let total2 = nums2.filter(function(n){
  return n < 100
}).map(function(n){
  return n * 2;
}).reduce(function(preValue,n){
  return preValue + n; 
},0);

console.log(total2);//240
*/

let total3 = nums2.filter(n => n < 100).map(n => n * 2).reduce((prev,n) => prev + n);
console.log(total3);//240



/*
// 1.需求：取出所有小于100的数字
let newNum = [];
for(let n of nums){
  if(n<100){
    newNums.push(n)
  }
}

// 2.需求：将所有小于100的数字进行转化：全部*2
let new2Nums = [];
for(let n of newNums){
  new2Nums.push(n*2);
}
console.log(new2Nums);

// 3.需求：将所有new2Nums数字相加，得到最终的结果
let total = 0;
for(let n of new2Nums){
 total += n;
}
console.log(total);

*/


