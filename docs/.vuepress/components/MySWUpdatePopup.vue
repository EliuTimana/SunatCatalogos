<template>
    <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
        <div v-if="enabled" class="my-sw-update-popup border border-primary"> {{ message }}<br>
            <button @click="reload" class="btn btn-success">{{ buttonText }}</button>
        </div>
    </SWUpdatePopup>
</template>

<script>
    import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

    export default {
        components: {SWUpdatePopup}
    }
</script>

<style>
    .my-sw-update-popup {
        text-align: right;
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #fff;
        font-size: 20px;
        padding: 10px;
    }
</style>
