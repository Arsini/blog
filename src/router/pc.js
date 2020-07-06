export default [
    {
        path: `/home`,
        name: 'home',
        component: () => import(/* webpackChunkName: "pc-home" */`../views_pc/Home`)
    },
    {
        path: `/login`,
        name: 'Login',
        component: () => import(/* webpackChunkName: "pc-login" */`../views_pc/Login`)
    }
]

//() => import(/* webpackChunkName: "[request]" */`../views_pc/${name}`)
//r => require.ensure([], () => r(require(`../views_pc/${name}`)), 'home')