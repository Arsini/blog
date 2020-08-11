<template>
    <div>
        <!-- <el-button type="primary" @click="aaa">主要按钮</el-button> -->
        <ul>
            <li v-for="n in 100" :key="n">{{ n }}</li>
        </ul>
    </div>
</template>

<script>
    import mixin from './mixin'
    export default {
        mixins: [mixin],
    }
</script>

<style lang="postcss" scoped>

</style>