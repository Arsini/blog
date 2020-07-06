<template>
    <div>
        pc home
        <el-button type="primary" @click="aaa">主要按钮</el-button>
    </div>
</template>

<script>
    import mixin from '@/mixin/home'
    export default {
        mixins: [mixin]
    }
</script>

<style lang="postcss" scoped>

</style>