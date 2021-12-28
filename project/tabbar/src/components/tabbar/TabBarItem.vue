<template>
    <div class="tab-bar-item" @click="tabbarclick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="active">
        <slot name="item-text"></slot>
      </div>
      <!-- <img src="../../assets/img/tabbar/1-1.png"> -->
      <!-- 首页 -->
    </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:String
  },
  data() {
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      // console.log(this.path);
      // console.log(this.$route.path);
      // 若：目标路由和当前路由一致,才处于活跃状态
      return this.$route.path.indexOf(this.path) !== -1
    },
    active(){
      // console.log(this.isActive)
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    tabbarclick(){
      // console.log('click')
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>
.tab-bar-item{
  flex-grow: 1;
  text-align: center;
  height: 49px;
  display: flex;
  flex-direction: column;
}
.tab-bar-item img{
  vertical-align: middle;
  width: 24px;
  margin:3px auto 2px;
}

/* .active{color:#1296db;} */
</style>