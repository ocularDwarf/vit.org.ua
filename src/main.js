// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import VueNotifications from 'vue-notification'
// import options from './system/notificationsOption'
import BootstrapVue from 'bootstrap-vue'
import { sync } from 'vuex-router-sync'
import { routes } from './router'
import store from './store/index'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

export const router = new VueRouter({
  mode: 'history',
  routes
})

sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
