<template>
    <div :key="key.global" v-if="render">
        <navigation></navigation>
        <bar></bar>
        <alert></alert>
        <loader v-if="loader"></loader>
        <v-content>
            <v-container class="fill-height" fluid>
                <router-view :key="key.router + $route.params.id"/>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import {checkAuth} from "../directive/permissions";
    import navigation from "@/components/layout/navigation";
    import bar from "@/components/layout/bar";
    import {mapActions, mapState} from 'vuex';
    import routes from '@/routes';
    import Vue from 'vue';
    import loader from "@/components/layout/loader";
    import alert from "../components/layout/alert";
    import api from '@/api';

    export default {
        name: "index",
        components: {
            navigation,
            bar,
            alert,
            loader
        },
        computed: {
            ...mapState('events', {
                key: 'key',
            })
        },
        data: () => ({
            dialog: false,
            drawer: null,
            loader: false,
            render: false,
        }),
        created() {

            let self = this;
            checkAuth().then((r) => {
                if (r) self.render = true;
            });

            this.interceptor();


            if (localStorage.user && localStorage.token) {

                Vue.prototype.$auth = JSON.parse(localStorage.user);

                /**
                 * Init tab with current page
                 */
                this.addPage({
                    name: routes.currentRoute.name,
                    route: routes.currentRoute.path,
                });
            }
        },
        methods: {
            ...mapActions('routes', [
                'addPage'
            ]),

            interceptor() {
                let self = this;

                api.interceptors.request.use(function (r) {
                    self.loader = true;
                    return r;
                });

                api.interceptors.response.use(function (r) {
                    self.loader = false;
                    return r;
                }, function (e) {
                    self.loader = false;
                    self.showError(e);
                    return Promise.reject(e);
                });
            }
        }

    }
</script>

<style>
    .v-data-table-header th {
        padding: 0 !important;
    }

    th .v-icon.v-icon {
        font-size: 18px !important;
    }

    .sidebar {
        max-height: calc(100vh - 202px);
        overflow-y: scroll;
        position: sticky;
        top: 100px;
    }

    .pointer {
        cursor: pointer;
    }

    .border-left {
        border-left: 1px solid rgba(0, 0, 0, 0.12);
    }

    .border-right {
        border-right: 1px solid rgba(0, 0, 0, 0.12);
    }

    .border-top {
        border-top: 1px solid rgba(0, 0, 0, 0.12);
    }

    .border-bottom {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }

</style>
