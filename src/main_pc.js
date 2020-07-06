import Vue from 'vue'
import App from './views_pc/App.vue'
import { pc } from './router'
import store from './store'
import { Button } from 'element-ui'
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router: pc,
  store,
  render: h => h(App)
}).$mount('#app')
