import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// VueRouter
Vue.use(VueRouter)
import routes from './routes.js'

// VueResource
Vue.use(VueResource)

// Define Routes
const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')