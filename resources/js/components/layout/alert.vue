<template>
    <v-snackbar :color="color + ' darken-2'" :timeout="5000" v-model="show">
        {{text}}
    </v-snackbar>
</template>

<script>
    /* eslint-disable no-console */
    export default {
        name: "alert",
        computed: {
            show() {
                return this.$store.state.events.alert.show;
            },
            text() {
                return this.$store.state.events.alert.text;
            },
            color() {
                return this.$store.state.events.alert.color;
            }
        },
    }
</script>

<style scoped></style>
