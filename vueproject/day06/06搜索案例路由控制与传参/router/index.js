import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFind from '@/views/NotFind'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  mode:'history',
  routes: [
    {path: '/', redirect: '/home'}, // 重定向
    { path: '/home', component: Home },
    { name:'ss',path: '/search/:words?', component: Search },
    {path:'*',component:NotFind} // 404页面
  ]
})

export default router