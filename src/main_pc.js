import '@/style/reset.css'
import 'flex.css'
import Vue from 'vue'
import App from './views/app/App_pc.vue'
import { pc as router } from './router'
import store from './store'
import { Button } from 'element-ui'
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
