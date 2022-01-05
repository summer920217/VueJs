<template>
  <div>
    <h3>{{$store.state.counter}}</h3>
    <h3>counter的2倍：{{$store.getters.powerCounter}}</h3>
    <h3>computed：{{powCounter}} </h3>
  </div>
</template>

<script>
export default {
  name:'helloVuex',
  props:{
    counter:{
      type:Number
    }
  },
  computed:{
    powCounter(){//只在当前页有效
      return Math.pow(this.$store.state.counter,2)
    }
  }

}
</script>

<style scoped>

</style>