<template>
    <v-app>
        <router-view>

        </router-view>
    </v-app>
</template>

<script>
    /**
     * Here the instance
     */
    import {check} from "@/api/auth";

    export default {
        name: "views",
        created() {
            check().then((r) => {
                if (r.auth) {
                    this.$store.dispatch('auth/add', r);
                    this.$router.push('/dashboard');
                } else {
                    this.$store.dispatch('auth/remove');
                    this.$router.push('/login');
                }
            })
        },
    }
</script>
