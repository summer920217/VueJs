<template>
  <div>
    <h3>我是Home页</h3>
    <p>哈哈哈哈哈</p>

    <!-- 子路由 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">新闻详情</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return {
      path:'/home/news'
    }
  },
  // 生命周期 钩子 (函数)
  created() {
    console.log('home created')
  },
  destroyed() {
    console.log('home destroyed')
  },
  // activated 和deactivated,
  // - 只有该组件被保持了状态,使用了keep-alive时，才有效
  activated() {// 在keep-alive时可用 记录活动状态 【获取焦点】
    console.log('-----home activated-----')
    console.log('-----> '+this.path)
    this.$router.push(this.path)
  },
  deactivated() {// 失去活动状态 【失去焦点】
    console.log('--- deactivated-----')
  },
  beforeRouteLeave (to, from, next) {
    //更新存储 路由
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }




}
</script>
<style>
  
</style>