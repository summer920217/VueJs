<template>
  <div id="app">
    <div>当前计数：{{$store.state.counter}}</div>
    <button @click="addtion">+1</button>
    <button @click="substraction">-1</button>

    <helloVuex :counter="counter"></helloVuex>
  </div>
</template>

<script>
import helloVuex from './components/helloVuex.vue'
export default {
  name: 'App',
  components:{helloVuex},
  data() {
    return {
      counter:0
    }
  },
  methods: {
    addtion(){
      this.$store.commit('increment')
    },
    substraction(){
      this.$store.commit('decrement')
    }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
