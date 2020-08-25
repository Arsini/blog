<template>
    <header flex='main:justify'>
        <div class="header_bg"></div>
        <!--  -->
        <router-link to="/home" class="home pointer">
            <i class="iconfont icon-home"></i>
        </router-link>
        <!--  -->
        <div
            @click="login"
            class="online_state pointer"
            flex='cross:center'
        >
            <i></i>
            <span>{{ onlineState }}</span>
        </div>
    </header>
</template>

<script>
    import mixin from './mixin'
    export default {
        mixins: [mixin],
        data(){
            return{

            }
        }
    }
</script>

<style lang="postcss" scoped>
    header{
        height: 50px;
        padding:0 10px;
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .header_bg{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-image: url(~@/img/header_bg.png);
        background-position: top center;
        filter: blur(2px);
    }
    .home,.online_state{
        z-index: 1;
    }
    .online_state{
        height: 100%;
        i{
            width: 14px;
            height: 14px;
            background-color: #ddd;
            border-radius: 50%;
            margin-right: 6px;
        }
    }
    .home{
        color: #fff;
        padding-top: 6px;
        i{
            font-size: 32px;
        }
    }
</style>