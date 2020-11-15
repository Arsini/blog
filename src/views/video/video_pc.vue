<template>
    <div class="video" flex>
        <!-- <video src="/uploads/video/test2.mp4" width="1280px" height="720px" controls/> -->
        <!-- <video id="videoElement" width="1024" height="576" controls></video> -->
        <div class="left">
            <video id="videoElement" width="860" height="484" controls></video>
            <ul flex class="ep">
                <li v-for="n in 30" :key="n">{{ n }}</li>
            </ul>
            <h3 class="name">《{{ current }}》</h3>
            <p class="des">简介：不久的未来，人类的世界早已拥挤不堪，迈向星河、寻找新家园的行动迫在眉捷。正当一切有条不紊的推进之时，月相异动，脚下的大地爆发了长达数十年剧烈的地质变化，人类在这场浩劫中所剩无几。当天地逐渐恢复平静，人们从废墟和深渊中重新踏上了这片熟悉而又陌生的大地。习惯了...</p>
        </div>
        <div class="right" flex-box='1'>
            <ul class="video_content" flex>
                <li v-for="item in list" :key="item.fileName" flex-box='1' @click="play(item)">
                    <div class="video_box">
                        <img src="">
                        <p>{{ item.fileName }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import mixin from './mixin'
    export default {
        mixins: [mixin],
        data() {
            return {
            }
        },
        created(){
            
        },
    }
</script>

<style lang="postcss" scoped>
.video{
    video{
        border: none;
    }
    background-color: #fff;
    .left,.right{
        padding: 20px
    }
    .left{
        width: 900px;
    }
    .right{
        overflow-y: auto;
    }
    .ep{
        flex-wrap: wrap;
        width: 870px;
        padding-top: 16px;
        li{
            width: 52px;
            border: 1px solid #ddd;
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            text-align: center;
            line-height: 40px
        }
    }
    .name{
        font-size: 24px;
        color: #00a1d6;
        text-indent: -10px;
        margin: 10px 0 10px 0;
    }
    .des{
        color: #99a2aa;
        line-height: 20px;
    }
    .video_content{
        flex-wrap: wrap;
        li{
            cursor: pointer;
            width: 20%;
            max-width: 20%;
            padding: 5px;
            padding-top: 0;
            
        }
    }
    .video_box{
        background-color: #ddd;
        p{
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
    }
}

</style>