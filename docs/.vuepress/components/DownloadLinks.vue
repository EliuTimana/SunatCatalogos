<template>
    <div class="links-container">
        <download-link link="Descargar Json"></download-link>
        <download-link link="Descargar SQL"></download-link>
    </div>
</template>

<script>
    import DownloadLink from "./DownloadLink";

    export default {
        name: "download-links",
        components: {DownloadLink},
        props: ['links']
    }
</script>

<style scoped lang="scss">
    .links-container {
        margin: 1em;
    }
</style>
