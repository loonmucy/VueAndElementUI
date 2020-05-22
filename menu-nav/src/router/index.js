import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home.vue'
import layout from '@/layout.vue'
import page1 from '@/pages/page1/Index.vue'
import page2 from '@/pages/page2/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {path:'/',name:'home',component:home,label:'首页',id:'01'},
      {path:'/page1',name:'page1',component:page1,label:'页面1',id:'05'},
      {path:'/zujian',name:'zujian', label:'组件',component:layout,id:'06',children:[
        {path:'/zujian/page2',name:'page2',component:page2,label:'page2',id:'0601'}
      ]},
    ]
  })

export default router