<template>
    <v-app>
        <router-view>

        </router-view>
    </v-app>
</template>

<script>
    /**
     * Here the instance for all layout
     */
    import {check} from "@/api/auth";

    export default {
        name: "views",
        created() {
            let self = this;
            check().then((r) => {
                if (r.auth) {
                    this.$store.dispatch('auth/add', r);
                    if(!self.$route.meta.auth) {
                        this.$router.push('/dashboard');
                    }
                } else {
                    this.$store.dispatch('auth/remove');
                    this.$router.push('/login');
                }
            })
        },
    }
</script>
