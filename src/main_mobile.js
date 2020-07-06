import Vue from 'vue'
import App from './views_mobile/App.vue'
import { mobile } from './router'
import store from './store'
import { Button } from 'vant';
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router: mobile,
  store,
  render: h => h(App)
}).$mount('#app')
