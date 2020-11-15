import flvjs from 'flv.js'
export default {
    props:[],
    data(){
        return{
            list: [],
            current: '神探夏洛克',
            flvPlayer: ''
        }
    },
    
    created(){
        this.getVideo()
    },

    beforeDestroy(){
        
    },

    methods:{
        getVideo(){
            this.$http.get(`/video`).then(res => {
                this.list = res.list
            })
        },
        play(arg){
            const { fileName } = arg
            const fileArr = fileName.split('.')
            this.current = fileArr[0]
            var videoElement = document.getElementById('videoElement');
            this.flvPlayer = flvjs.createPlayer({
                type: fileArr[1],
                url: `/uploads/video/${fileName}`
            })
            this.flvPlayer.attachMediaElement(videoElement);
            this.flvPlayer.load();
            //     this.flvPlayer.play();
        }
    }
}