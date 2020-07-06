import '@/style/reset.css'
import 'flex.css'
import '@/lib/rem'
import Vue from 'vue'
import App from './views/app/App_mobile.vue'
import { mobile as router } from './router'
import store from './store'
import navGuards from '@/lib/navigation_guards'
import { Button } from 'vant';
Vue.use(Button);
navGuards(router, store)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
