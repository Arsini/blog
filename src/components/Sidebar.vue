<template>
    <aside class="sidebar">
        <ul>
            <li v-for="n in 10" :key="n">{{ n }}</li>
        </ul>
    </aside>
</template>

<script>
    export default {
        
    }
</script>

<style lang="postcss" scoped>
    .sidebar{
        width: 306px;
        border: 1px solid #ddd;
        background-color: #fff;
    }
</style>