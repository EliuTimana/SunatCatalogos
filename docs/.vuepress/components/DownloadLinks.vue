<template>
    <div class="my-3">
        <download-link :code="code" type="json"></download-link>
        <download-link :code="code" type="csv"></download-link>
        <download-link :code="code" type="sql"></download-link>
    </div>
</template>

<script>
    import DownloadLink from "./DownloadLink";

    export default {
        name: "download-links",
        components: {DownloadLink},
        props: ['code']
    }
</script>

<style scoped lang="scss">
</style>
