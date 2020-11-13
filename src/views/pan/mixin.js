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
        del(fileName, folder){
            this.loading = true
            this.$http.get(`/pan/delete?fileName=${fileName}&folder=${folder}`).then(res => {
                this.files = res.list
                this.loading = false
            })
        },
        downFile(name){
            window.open(`/pan/download?fileName=${name}`)
        }
    }
}