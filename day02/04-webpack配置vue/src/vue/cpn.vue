<template>
  <div>
    <p>--------我是分割线--------------------</p>
    <p>{{message}}</p>
    <p>--------我是分割线--------------------</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:'我是cpn组件'
    }
  }
}
</script>

<style scoped>
  p{background:pink;}
</style>