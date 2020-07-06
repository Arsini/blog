import Vue from 'vue'
import VueRouter from 'vue-router'
import pcArr from './pc'
import mobileArr from './mobile'
Vue.use(VueRouter)
const routesBase = [
    {
        path: '/',
        redirect: '/home'
    },
]
const routesPC = [
    ...routesBase,
    ...pcArr,
]
const routesMobile = [
    ...routesBase,
    ...mobileArr,
]
export const pc = new VueRouter({
    routes: routesPC
})
export const mobile = new VueRouter({
    routes: routesMobile
})

