import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/css/reset.styl'
import '../static/css/plugin.styl'

Vue.config.productionTip = false

import { Toast } from '@/common/js/plugin'

Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
