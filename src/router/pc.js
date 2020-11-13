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
    },
    {
        path: `/pan`,
        name: 'pan',
        component: () => import(/* webpackChunkName: "pc-pan" */`../views/pan/pan_pc`)
    },
    {
        path: `/video`,
        name: 'video',
        component: () => import(/* webpackChunkName: "pc-video" */`../views/video/video_pc`)
    },
]

//() => import(/* webpackChunkName: "[request]" */`../views_pc/${name}`)
//r => require.ensure([], () => r(require(`../views_pc/${name}`)), 'home')