<template>
    <div id="root" flex='dir:top'>
        <PageHeader flex-box='0'/>
        <section class="scrollbar" flex-box='1'>
            <router-view class="page_view"/>
        </section>
    </div>
</template>

<script>
    import PageHeader from '@/components/header/Header_pc'
    export default {
        components:{
            PageHeader
        },
    }
</script>
<style>
    html,body{
        font-size: 14px;
    }
</style>
<style lang="postcss" scoped>
    #root{
        height: 100%;
        background-image: url(~@/img/bg.png);
        background-position: top center;
    }
    .page_view{
        min-height: 100%;
        background-color: #fff;
    }
</style>