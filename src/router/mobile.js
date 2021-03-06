export default [
    {
        path: `/home`,
        name: 'home',
        component: () => import(/* webpackChunkName: "mobile-home" */`../views/home/Home_mobile`)
    },
    {
        path: `/word`,
        name: 'word',
        component: () => import(/* webpackChunkName: "mobile-word" */`../views/word/Word_mobile`)
    },
    {
        path: `/login`,
        name: 'login',
        component: () => import(/* webpackChunkName: "mobile-login" */`../views/login/Login_mobile`)
    },
    {
        path: `/pan`,
        name: 'pan',
        component: () => import(/* webpackChunkName: "mobile-pan" */`../views/pan/pan_mobile`)
    }
]

//() => import(/* webpackChunkName: "[request]" */`../views_pc/${name}`)
//r => require.ensure([], () => r(require(`../views_pc/${name}`)), 'home')