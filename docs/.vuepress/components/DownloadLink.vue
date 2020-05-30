<template>
    <a :href="link" class="link-button">{{link}}</a>
</template>

<script>
    export default {
        name: "download-link",
        props: ['link']
    }
</script>

<style scoped lang="scss">
    .link-button {
        display: inline-block;
        padding: 10px 15px;
        background-color: #2196F3;
        color: white;
        text-decoration: none !important;
        border-radius: 5px;

        &:hover {
            background-color: #2e85cb;
            transition: 0.9s;
        }
    }
</style>
