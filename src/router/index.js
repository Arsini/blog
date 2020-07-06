import Vue from 'vue'
import VueRouter from 'vue-router'
// import Hoc from './hoc';
// import Home from '../views_pc/Home.vue'
Vue.use(VueRouter)
const routesPC = [
    {
        path: '/',
        redirect: '/home'
    },
    // {
    //     path: `/home`,
    //     name: 'Home',
    //     component: Hoc(Home)//() => import(`../views_pc/Home.vue`)
    // }
]
const routesMoblie = [
    {
        path: '/',
        redirect: '/home'
    },
]
const routerName = ['Home']
for (let i = 0; i < routerName.length; i++) {
    const name = routerName[i];
    routesPC.push({
        path: `/${name.toLowerCase()}`,
        name,
        component: () => import(`../views_pc/${name}.vue`)
    })
    routesMoblie.push({
        path: `/${name.toLowerCase()}`,
        name,
        component: () => import(`../views_mobile/${name}.vue`)
    })
}
export const pc = new VueRouter({
    routes: routesPC
})
export const mobile = new VueRouter({
    routes: routesMoblie
})

