import '@/style/reset.css'
import '@/style/common.css'
import 'flex.css'
import Vue from 'vue'
import MainStore from './store/Main'
import navGuards from '@/lib/navigation_guards'
import ajaxInterceptors from '@/lib/ajaxInterceptors'
import axios from 'axios'
const mainStore = new MainStore()
export default function(router, App){
    navGuards(router, mainStore)
    ajaxInterceptors()
    Vue.config.productionTip = false
    Vue.prototype.$http = axios
    Vue.prototype.$mainStore = mainStore
    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')
}