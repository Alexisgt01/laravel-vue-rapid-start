<template>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
        <v-app-bar-nav-icon @click.stop="expendDrawer"/>

        <v-spacer></v-spacer>
        <template v-slot:extension>
            <v-tabs class="mt-4 ml-2" background-color="transparent">
                <v-chip v-for="(tab, n) in open" :key="n" :to="{ path: tab.route }" color="primary" class="ml-2" small
                    @click.native="pageName = tab.name">{{tab.name}}
                    <v-icon class="ml-2" size="12" @click.native.prevent="closePage(tab.route)">fa fa-times</v-icon>
                </v-chip>
            </v-tabs>
        </template>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">Laravel-vue SPA Starter</span>
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import hotkeys from 'hotkeys-js';

    export default {
        name: "bar",
        data() {
            return {
                next_page: '',
                close_page: '',
                previous_page: '',
                continue: false,
            }
        },
        computed: {
            ...mapGetters('routes', {
                open: 'open',
            }),

            ...mapGetters('config', {
                shortcodeKey: 'shortcodeKey',
            }),
        },
        mounted() {

            let self = this;
            hotkeys('alt+x', () => {
                self.closePage(self.$route.fullPath);
            });
            /**
             * Shortcode event "n"
             * check the tab position relative to others and push accordingly to right
             * @params {object} event - event emit
             **/
            hotkeys('n', function (event) {
                // Prevent the default refresh event under WINDOWS system
                event.preventDefault();
                setTimeout(function () {
                    let allTab = self.open;
                    let countTab = self.open.length;
                    let currentRoute = self.$route.path;
                    let currentTab = allTab.find(o => o.route === currentRoute);
                    let currentIndex = allTab.indexOf(currentTab);
                    if (countTab - 1 !== currentIndex) {
                        let nextRoute = allTab[currentIndex + 1].route;
                        self.$router.push(nextRoute);
                    }
                }, 80);
            });
            /**
             * Shortcode event "p"
             * check the tab position relative to others and push accordingly to left
             * @params {object} event - event emit
             **/
            hotkeys('p', function (event) {
                // Prevent the default refresh event under WINDOWS system
                event.preventDefault();
                setTimeout(function () {
                    let allTab = self.open;
                    let countTab = self.open.length;
                    let currentRoute = self.$route.path;
                    let currentTab = allTab.find(o => o.route === currentRoute);
                    let currentIndex = allTab.indexOf(currentTab);
                    if (currentIndex !== 0 && countTab > 1) {
                        let previousRoute = allTab[currentIndex - 1].route;
                        self.$router.push(previousRoute);
                    }
                }, 80);
            });
        },
        methods: {
            expendDrawer() {
                this.$emit('expendDrawer')
            },

            ...mapActions('config', [
                'initConfig'
            ]),
            /**
             * Close the selected tab
             */
            ...mapActions('routes', [
                'closePage',
            ])
        }
    }
</script>

<style scoped>

</style>
