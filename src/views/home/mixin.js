export default {
    data(){
        return{
            nav:[
                {
                   path: '/pan',
                   name: '上传下载'
                },
                {
                    path: '/video',
                    name: '视频'
                 }
            ]
        }
    },
    methods:{
        aaa(){
            console.log(this.test)
        }
    }
}