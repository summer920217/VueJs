export default {
  template:`
  <div>
    <h1>{{message}}</h1>
    <button @click='btnClick'>按钮</button>
  </div>
  `,
  data(){
    return {
      message:'我是vue/app.js里的子组件'
    }
  },
  methods:{
    btnClick(){
      console.log('单击了按钮');
    }
  }
}