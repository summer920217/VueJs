<template>
  <div id="app">
    <div>当前计数：{{counter}}</div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>

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
