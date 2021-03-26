import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import { component } from 'vue/types/umd'
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
//通过Vue.use(插件)来安装其他插件
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  }

  ,
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About

  },

]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router