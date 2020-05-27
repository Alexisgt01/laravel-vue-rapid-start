<template>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" app>
        <v-list dense>
            <v-list-item v-for="(item, i) in items"
                @click="item.is_logout ? signout() : addPage({name: item.name, route: item.path})" :key="i" link>
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        {{ item.name }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "navigation",
        data() {
            return {
                items: [],
            }
        },
        created() {
            this.getRoutes();
            this.pushLogout();
        },
        methods: {
            pushLogout() {
                this.items.push({
                    name: 'Logout',
                    icon: 'fas fa-sign-out-alt',
                    is_logout: true,
                })
            },
            signout() {
                this.$store.dispatch('auth/logout').then((r) => {
                    this.showSuccess(r);
                    this.$router.push('/login');
                });
            },
            ...mapActions('routes', [
                'addPage'
            ]),

            getRoutes() {
                this.$router.options.routes.forEach((el) => {
                    el.children.forEach((el) => {
                        if (el.meta && el.meta.in_nav) {
                            this.items.push(el);
                        }
                    })
                })
            }
        },
    }
</script>

<style scoped>

</style>
