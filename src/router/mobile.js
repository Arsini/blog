export default [
    {
        path: `/Home`,
        name: 'home',
        component: () => import(/* webpackChunkName: "mobile-home" */`../views/home/Home_mobile`)
    }
]

//() => import(/* webpackChunkName: "[request]" */`../views_pc/${name}`)
//r => require.ensure([], () => r(require(`../views_pc/${name}`)), 'home')