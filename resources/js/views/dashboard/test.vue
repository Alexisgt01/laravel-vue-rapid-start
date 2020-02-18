<template>
    <div>
        I'm a page test <br> Shortcode: <br> alt+x = close page <br> p = previous page <br> n = next page <br>

        <v-btn class="mt-2" color="primary" @click="showAlertText('alert', 'primary')">show alert</v-btn>
        <br>
        <v-btn class="mt-2" color="error" @click="showError({message: 'error'})">show error</v-btn>
        <br>
        <v-btn class="mt-2" color="success" @click="showSuccess({message: 'success'})">show success</v-btn>

    </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>
