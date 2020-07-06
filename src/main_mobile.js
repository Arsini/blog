import Vue from 'vue'
import initMain from './main_base'
import { mobile as router } from './router'
import App from './views/app/App_mobile.vue'
import { Button } from 'vant';
Vue.use(Button);

initMain(router, App)