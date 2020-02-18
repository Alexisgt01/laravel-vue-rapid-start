<template>
    <div class="loader-layout">
        <v-progress-circular class="custom-center" size="100" indeterminate color="blue"></v-progress-circular>
    </div>
</template>

<script>
    export default {
        name: "loader",
    }
</script>

<style scoped>
    .loader-layout {
        width: 100vw;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.6);
        position: fixed;
        z-index: 999999999999;
        top: 0;
        left: 0;
    }

    .custom-center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
