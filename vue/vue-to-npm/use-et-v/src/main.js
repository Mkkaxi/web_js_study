import Vue from 'vue'
import App from './App.vue'
import EtVerifyCode from 'et-v'

Vue.use(EtVerifyCode)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
