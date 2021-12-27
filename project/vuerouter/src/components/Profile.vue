<template>
  <div>
    <h3>我的个人中心</h3>
    <p>{{$route.query}}</p>
    <p>name: {{$route.query.name}}</p>
    <p>age: {{$route.query.age}}</p>
  </div>
</template>

<script>
export default {
  name:'Profile',
  created() {
    console.log('created profile')
  },
}
</script>

<style scoped>

</style>