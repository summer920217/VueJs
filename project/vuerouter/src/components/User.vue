<template>
  <div>
    <h3>我是User页面</h3>
    <p>哈哈哈哈哈哈哈哈哈</p>
    <h3><mark>{{userid}}</mark></h3>
    <h3><mark>{{$route.params.userid}}</mark></h3>
  </div>
</template>
<script>
export default {
  name:"User",
  computed:{
    userid(){
      return this.$route.params.userid;
    }
  },
  created() {
    console.log('created user')
  },
}
</script>

<style scoped>
  
</style>