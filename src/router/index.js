// 路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artical from '../components/artical.vue'
import Login from '../components/login.vue'
import Detail0 from '../components/detail0.vue'
import Detail1 from '../components/detail1.vue'
import Detail2 from '../components/detail2.vue'
import Detail3 from '../components/detail3.vue'
import Detail4 from '../components/detail4.vue'
import Ueditor from '../ueditor.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/artical',
    children:[
      {path:'/artical',component:Artical},
      {path:'/detail0',component:Detail0},
      {path:'/detail1',component:Detail1},
      {path:'/detail2',component:Detail2},
      {path:'/detail3',component:Detail3},
      {path:'/detail4',component:Detail4},
      {path:'/ueditor',component:Ueditor},

    ]
  },
  {path:'/login',component:Login},
 
 
]

const router = new VueRouter({
  routes
})

export default router
