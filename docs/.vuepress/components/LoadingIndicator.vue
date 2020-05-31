<template>
    <div>
        <div class="overlay d-flex justify-content-center align-items-center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoadingIndicator"
    }
</script>

<style scoped>

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        background-color: rgba(255, 255, 255, 0.7);
    }
</style>
