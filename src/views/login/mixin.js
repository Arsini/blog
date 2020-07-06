export default {
    props:[],
    data(){
        return{
            validCode: ''
        }
    },
    
    created(){
        this.getValidCode()
    },

    beforeDestroy(){
        
    },

    methods:{
        getValidCode() {
            this.$http.get(`/api/user/validate`,{
                responseType: 'arraybuffer'
            }).then(res => {
                // 转换
                let codeImg =
                    "data:image/png;base64," +
                    btoa(
                        new Uint8Array(res).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ""
                        )
                    );
                this.validCode = codeImg;
            });
        },
    }
}