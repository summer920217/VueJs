<template>
  <div>
    <h3>person</h3>
    <p style="color:blue">{{$store.state.person}}</p>
    <h3>{{$store.state.counter}}</h3>
    <h3>counter的2倍：{{$store.getters.powerCounter}}</h3>
    <h3>computed：{{powCounter}} </h3>

     <h3>counter的2倍：{{$store.getters.powerCounter}}</h3>
    <div>
      <h3>年龄大于15的柱: 数目->{{$store.getters.more15stuLen}}</h3>
      <table border="1" bordercolor='blue' cellspacing=0 cellpadding=8>
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
      <table border="1" bordercolor='blue' cellspacing=0 cellpadding=8>
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