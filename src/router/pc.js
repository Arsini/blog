export default [
    {
        path: `/home`,
        name: 'home',
        component: () => import(/* webpackChunkName: "pc-home" */`../views/home/Home_pc`)
    },
    {
        path: `/word`,
        name: 'word',
        component: () => import(/* webpackChunkName: "pc-word" */`../views/word/Word_pc`)
    },
    {
        path: `/login`,
        name: 'login',
        component: () => import(/* webpackChunkName: "pc-login" */`../views/login/Login_pc`)
    }
]

//() => import(/* webpackChunkName: "[request]" */`../views_pc/${name}`)
//r => require.ensure([], () => r(require(`../views_pc/${name}`)), 'home')