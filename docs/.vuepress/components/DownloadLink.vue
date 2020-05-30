<template>
    <a :href="link" class="btn btn-success mr-2" download target="_blank">Descargar {{type.toUpperCase()}}</a>
</template>

<script>
    export default {
        name: "download-link",
        props: ['code', 'type'],
        computed: {
            link() {
                return `https://raw.githubusercontent.com/EliuTimana/SunatCatalogos/master/data/08/${this.code}.${this.type}`;
            }
        }
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
