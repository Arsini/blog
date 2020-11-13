import Vue from 'vue'
import initMain from './main_base'
import { pc as router } from './router'
import App from './views/app/App_pc.vue'
import { Button, Upload, Loading, Table, TableColumn, Progress } from 'element-ui'
Vue.use(Button)
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Progress);
Vue.use(Loading.directive)
initMain(router, App)
