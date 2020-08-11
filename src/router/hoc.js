//高阶组件（没有用上）
export default (Comp) => ({
    components: {
        Comp,
    },
    created(){
        console.log(123)
    },
    render(h) {
        return h(Comp, {})
    }
})