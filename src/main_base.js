import '@/style/reset.css'
import 'flex.css'
import Vue from 'vue'
import store from './store'
import navGuards from '@/lib/navigation_guards'
export default function(router, App){
    Vue.config.productionTip = false
    navGuards(router, store)
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
}