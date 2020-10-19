<template>
    <div>
        <ul flex>
            <router-link to="/pan" class="nav_box">上传下载</router-link>
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
.nav_box{
    width: 300px;
    height: 300px;
    background-color: #fff;
    cursor: pointer;
    margin: 20px;
}
</style>