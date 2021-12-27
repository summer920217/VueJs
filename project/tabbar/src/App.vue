<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/css/base.css');
#tab-bar{
  background: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0;right: 0;
  bottom: 0;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.08);
}
.tab-bar-item{
  flex-grow: 1;
  text-align: center;
  height: 49px;
}
</style>
