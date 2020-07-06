export default function (router) {
    router.beforeEach((to, from, next) => {
        const isLogin = window.sessionStorage.getItem('tokenInfo')
        if(!isLogin){
            if(to.path === '/login'){
                next()
            } else {
                next('/login')
            }
        }
        next()
    })
}