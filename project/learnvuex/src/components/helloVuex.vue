<template>
  <div>
    <h3>{{$store.state.counter}}</h3>
  </div>
</template>

<script>
export default {
  name:'helloVuex',
  props:{
    counter:{
      type:Number
    }
  }

}
</script>

<style scoped>

</style>