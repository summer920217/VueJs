import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)
// 2. 创建对象
const store = new Vuex.Store({
  state:{
    counter:100
  },
  mutations:{//同步
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
  },
  actions:{//异步

  },
  getters:{

  },
  modules:{

  }
})
// 3.导出store对象
export default store