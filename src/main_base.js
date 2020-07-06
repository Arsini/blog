import '@/style/reset.css'
import 'flex.css'
import Vue from 'vue'
import store from './store'
import navGuards from '@/lib/navigation_guards'
import ajaxInterceptors from '@/lib/ajaxInterceptors'
import axios from 'axios'
export default function(router, App){
    navGuards(router, store)
    ajaxInterceptors()
    Vue.config.productionTip = false
    Vue.prototype.$http = axios
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
}