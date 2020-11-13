<template>
    <div>
        <ul flex>
            <router-link 
                v-for="item in nav" 
                :key="item.path" 
                :to="item.path" 
                class="nav_box"
                tag="li"
            >{{ item.name }}</router-link>
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