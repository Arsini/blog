export default {
    name: 'pan',
    props:[],
    data(){
        return{
            files: [],
            loading: false,
        }
    },
    
    created(){
        this.getFiles()
    },

    beforeDestroy(){
        
    },

    methods:{
        getFiles(){
            this.loading = true
            this.$http.get('/pan/getFiles').then(res => {
                this.files = res.list
                this.loading = false
            })
        },
        del(){
            this.$http.get('/pan/delete').then(() => {
                this.getFiles()
            })
        }
    }
}