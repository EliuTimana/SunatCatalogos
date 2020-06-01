<template>
    <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
        <div v-if="enabled" class="my-sw-update-popup border border-primary rounded bg-light">{{ message }}
            <div class="d-flex justify-content-center pt-2">
                <button @click="reload" class="btn btn-success">{{ buttonText }}</button>
            </div>
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
