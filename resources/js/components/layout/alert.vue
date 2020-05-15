<template>
    <div style="position: fixed; bottom: 10px; right: 10px; z-index: 999999">
        <transition-group name="list">
            <v-alert class="alert-item" border="top" v-for="(a, i) in alert" :key="a" dark
                :color="a.color + ' darken-1'">
                {{a.text}}
            </v-alert>
        </transition-group>
    </div>
</template>

<script>
    /* eslint-disable no-console */
    export default {
        name: "alert",
        computed: {
            alert() {
                return this.$store.state.events.alert;
            },
        },
    }
</script>

<style scoped>
    .alert-item {
        width: 230px;
        max-height: fit-content;
        right: 50px;
    }


    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
