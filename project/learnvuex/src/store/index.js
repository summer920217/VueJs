import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)
// 2. 创建对象
const store = new Vuex.Store({
  state:{
    counter:100,
    stus:[
      {id:110,name:'炎柱·炼狱杏寿郎',age:15},
      {id:111,name:'岩柱·悲鸣屿行冥',age:18},
      {id:112,name:'风柱·不死川实弥',age:14},
      {id:113,name:'水柱·富冈义勇',age:17},
      {id:114,name:'蛇柱·伊黑小芭内',age:13},
      {id:114,name:'霞柱·时透无一郎',age:16},
      {id:114,name:'恋柱·甘露寺蜜璃',age:13},
      {id:114,name:'音柱·宇髓天元',age:15},
      {id:114,name:'虫柱·蝴蝶忍',age:16}
    ],
    person:{
      name:'吾咔呼世晴',
      age:30,
      gender:'男'
    }
  },
  mutations:{//同步
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    // 乘法：乘以任意数值
    mul(state,payload){ 
      console.log(payload)//{type: 'mul', num: 5}
      state.counter *= payload.num
    },
    //添加对象
    addUser(state,payload){
      state.stus.push(payload)
    },
    //修改值
    updatePerson(state){
      state.person.name = '东野圭吾' 
      state.person.country = 'japan' 
      state.person.height = 175 

      Vue.set(state.person,'address','东京')
      delete state.person.age
      Vue.delete(state.person,'gender')
    }
  },
  actions:{//异步

  },
  getters:{// 等同于computed
    //获取counter的2次方
    powerCounter(state){
      return Math.pow(state.counter,2)
    }, 
    // 获取年龄》15的人
    more15stu(state){
      return state.stus.filter(s=> s.age>15)
    },
    // 获取年龄》15的人的数目
    more15stuLen(state,getters){
      return getters.more15stu.length
    },
    //获取 指定年龄的学生信息
    getStuById(state){
      return age=>{
        return state.stus.filter(s=>s.age>age)
      }
    }

  },
  modules:{

  }
})
// 3.导出store对象
export default store