<template>
    <div id="root" flex>
        <Sidebar class="scrollbar"/>
        <section class="scrollbar" flex-box='1'>
            <router-view />
        </section>
    </div>
</template>

<script>
    import Sidebar from '@/components/Sidebar'
    export default {
        components:{
            Sidebar
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
    }
    
</style>