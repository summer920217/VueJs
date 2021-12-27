<template>
    <div class="tab-bar-item">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :class="{active:isActive}">
        <slot name="item-text"></slot>
      </div>
      <!-- <img src="../../assets/img/tabbar/1-1.png"> -->
      <!-- 首页 -->
    </div>
</template>

<script>
export default {
  name:'TabBarItem',
  data() {
    return {
      isActive:true
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

.active{color:#1296db;}
</style>