// 配置路由相关信息

// 导入模块/插件
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 懒加载
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)
// 2.创建VueRouter对象
const routes = [
  {
    path:"",
    redirect:'/home',//重定向
    // component:Home
  },
  {
    path:'/home',
    meta:{
      title:'首页1'
    },
    component:Home,
    children:[
      // {
      //   path:'',
      //   redirect:'news'
      // },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path:'/about',
    meta:{
      title:'关于'
    },
    component:About
  },
  {
    path:'/user/:userid',
    meta:{
      title:'用户'
    },
    component:User
  },
  {
    path:'/profile',
    meta:{
      title:'个人中心'
    },
    component:Profile
  },
]
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode:'history',
  linkActiveClass:'active'
})


// 路由守卫
//前置守卫(guard) --- 跳转前
router.beforeEach((to,from,next)=>{
  next();
  // console.log(to);
  document.title = to.matched[0].meta.title
})

// 后置钩子(hook) --- 跳转后
router.afterEach((to,from)=>{
  // console.log('hook');
})








// 3.将router对象导出 传入Vue实例中应用
export default router 