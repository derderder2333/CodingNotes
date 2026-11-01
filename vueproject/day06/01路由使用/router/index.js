import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router=new VueRouter({
  routes:[
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ],
  linkActiveClass:'active',
  linkExactActiveClass:'exact-active',
})

export default router