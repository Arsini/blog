export default function (router, store) {
    router.beforeEach((to, from, next) => {
        console.log(to)
        console.log(from)
        console.log(store)
        next()
    })
}