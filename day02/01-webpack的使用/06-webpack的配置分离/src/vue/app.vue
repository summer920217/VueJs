<template>
  <div>
    <h1>{{message}}</h1>
    <button @click='btnClick'>新的按钮123</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './cpn';

export default {
  data(){
    return {
      message:'我是vue/app.vue里的子组件'
    }
  },
  methods:{
    btnClick(){
      console.log('单击了按钮');
    }
  },
  components:{
    Cpn
  }

}
</script>

<style scoped>
  h1{
    color:green;
    text-decoration: underline;
  }
</style>