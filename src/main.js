import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

import Vue2filters from "vue2-filters"
Vue.use(Vue2filters)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
