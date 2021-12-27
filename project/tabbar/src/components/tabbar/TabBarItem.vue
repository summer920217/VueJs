<template>
    <div class="tab-bar-item">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
      <!-- <img src="../../assets/img/tabbar/1-1.png"> -->
      <!-- 首页 -->
    </div>
</template>

<script>
export default {
  name:'TabBarItem'
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
</style>