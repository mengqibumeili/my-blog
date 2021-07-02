import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artical from '../components/artical.vue'
import Login from '../components/login.vue'
import Detail from '../components/detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/artical',
    children:[
      {path:'/artical',component:Artical},
      {path:'/detail',component:Detail},

    ]
  },
  {path:'/login',component:Login},
 
 
]

const router = new VueRouter({
  routes
})

export default router
