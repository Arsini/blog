export default [
    {
        path: `/home`,
        name: 'home',
        component: () => import(/* webpackChunkName: "pc-home" */`../views/home/Home_pc`)
    }
]

//() => import(/* webpackChunkName: "[request]" */`../views_pc/${name}`)
//r => require.ensure([], () => r(require(`../views_pc/${name}`)), 'home')