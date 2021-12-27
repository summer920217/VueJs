<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/1-1.png">
        <img slot="item-icon-active" src="./assets/img/tabbar/1-11.png">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/2-1.png">
        <img slot="item-icon-active" src="./assets/img/tabbar/2-11.png">
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/3-1.png">
        <img slot="item-icon-active" src="./assets/img/tabbar/3-11.png">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/4-1.png">
        <img slot="item-icon-active" src="./assets/img/tabbar/4-11.png">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBarItem from './components/tabbar/TabBarItem.vue'
import TabBar from './components/tabbar/TabBar.vue'
export default {
  components: { TabBar, TabBarItem },
  name: 'App',
 
}
</script>

<style>

</style>
