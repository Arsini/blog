export default [
    {
        path: `/home`,
        name: 'home',
        component: () => import(/* webpackChunkName: "mobile-home" */`../views/home/Home_mobile`)
    },
    {
        path: `/login`,
        name: 'login',
        component: () => import(/* webpackChunkName: "mobile-home" */`../views/login/Login_mobile`)
    }
]

//() => import(/* webpackChunkName: "[request]" */`../views_pc/${name}`)
//r => require.ensure([], () => r(require(`../views_pc/${name}`)), 'home')