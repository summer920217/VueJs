<template>
  <div id="app">
    <h2>----------App-----------</h2>
    <div>当前计数：{{$store.state.counter}}</div>
    <button @click="addtion">+1</button>
    <button @click="substraction">-1</button>

    <!-- getters -->
    <h3>counter的2倍：{{$store.getters.powerCounter}}</h3>
    <div>
      <h3>年龄大于15的柱: 数目->{{$store.getters.more15stuLen}}</h3>
      <table border="1" bordercolor='red' cellspacing=0 cellpadding=8>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
        <tr v-for="(v,k) in $store.getters.more15stu">
          <!-- {{v}} -->
          <td v-for="value in v">
            {{value}}
          </td>
        </tr>
      </table>
    </div>

    <div>
      <h3>年龄大于指定值16的柱</h3>
      <table border="1" bordercolor='red' cellspacing=0 cellpadding=8>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
        <tr v-for="(v,k) in $store.getters.getStuById(16)">
          <!-- {{v}} -->
          <td v-for="value in v">
            {{value}}
          </td>
        </tr>
      </table>
    </div>

    <hr>
    <h2>----------helloVuex-----------</h2>
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
