import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '@/components/test.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import home from '@/components/home.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {path:'/',name:'home',component:home},
      {path:'/test/:id',name:'test',component:test},
      {path:'/HelloWorld',name:'HelloWorld',component:HelloWorld},
      {path:'*',name:'NotFound',component:NotFound}
    ]
  })

export default router