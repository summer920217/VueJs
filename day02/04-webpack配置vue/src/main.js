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

// 5.使用vue进行开发
//版本1：vue默认模式
/*
  import Vue from 'vue';
  const app = new Vue({
    el:'#app',
    template:`
    <div>
      <h1>{{message}}</h1>
      <button @click='btnClick'>按钮</button>  
    </div>
    `,
    data:{
      message:'你好呀！'
    },
    methods:{
      btnClick(){
        console.log('按钮单击了');
      }
    }
  })
*/

//版本2：抽取成一个子组件
/*  
  import Vue from 'vue';

  //抽取成一个子组件
  const App = {
    template:`
    <div>
      <h1>{{message}}</h1>
      <button @click='btnClick'>按钮</button>
    </div>
    `,
    data(){
      return {
        message:'我是子组件'
      }
    },
    methods:{
      btnClick(){
        console.log('单击了按钮');
      }
    }
  }

  new Vue({
    el:'#app',
    template:'<App></App>',
    components:{
      App
    }
  })

*/

//版本2-2: 子组件提取到一个vue/.js文件里
/*
  import Vue from 'vue';
  import App from './vue/app.js';

  new Vue({
    el:'#app',
    template:'<App></App>',
    components:{
      App
    }
  })
*/


// 版本3：使用vue模块文件 vue/app.vue文件
import Vue from 'vue';
import App from './vue/app.vue';
new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})








