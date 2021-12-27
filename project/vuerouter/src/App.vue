<template>
  <div>
    <!-- --------------跳转链接------------------- -->
    <!-- <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link> -->
    
    <!-- 路由跳转1 -->
    <router-link to="/home" tag="button" >首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link v-bind:to="'/user/'+userid" tag="button">用户</router-link>
    <!-- query传参 -->
    <router-link :to="{path:'/profile',query:{name:'佐仓·千代',age:13}}" tag="button">我的</router-link>
    <router-link to="/profile?name=apple&age=18" tag="button">我的2</router-link>
    <router-link :to="'/profile?name='+userid" tag="button">我的3</router-link>
    <hr>
    <!-- 路由跳转2 -->
    <!-- <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button> -->
    <button @click="profileclick">我的(query)</button>

    <!-- ---------------显示------------------ -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userid:'野琦',
      username:'御子柴'
    }
  },
  methods: {
    homeclick(){
      this.$router.push('/home')
    },
    aboutclick(){
      this.$router.push('/about')
    },
    profileclick(){
      // this.$router.push('./profile?name=御子柴&age=16')
      // this.$router.push('./profile?name='+this.username)
      this.$router.push({
        path:'/profile',
        query:{
          name:''
        }
      })
    }
  },
}
</script>

<style>
  .active{
    color:#fff;background: red;
    border:1px solid red;outline: 0;
  }
</style>
