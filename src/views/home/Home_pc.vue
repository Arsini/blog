<template>
    <div class="home">
        <a href="/#/word" target="_blank">word</a>
        <p @click="$mainStore.changeText">{{ $mainStore.text }}</p>
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