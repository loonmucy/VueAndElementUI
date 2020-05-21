import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/common.css'

// import VueRouter from 'vue-router'
// import test from '@/components/test.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
// import home from '@/components/home.vue'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes: [
//     {path:'/',name:'home',component:home},
//     {path:'/test',name:'test',component:test},
//     {path:'/HelloWorld',name:'HelloWorld',component:HelloWorld}
//   ]
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
