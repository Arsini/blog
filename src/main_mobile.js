import Vue from 'vue'
import App from './views/app/App_mobile.vue'
import { mobile as router } from './router'
import store from './store'
import { Button } from 'vant';
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
