// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'

//add plugin
// import { AlertPlugin, ToastPlugin } from 'vux'

// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)

//me add


Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},
  {
    path: '/login',
    component: resolve => {
      require(['./views/login.vue'], resolve)
    }
  },
]

const router = new VueRouter({
  routes
})




FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
