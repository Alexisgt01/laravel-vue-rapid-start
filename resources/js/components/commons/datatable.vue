<template>
    <v-card>
        <v-data-table hide-default-footer :items-per-page="limit" v-if="render" :headers="headers" :items="items"
            class="elevation-1">

            <template v-for="(head, i) in headers" v-slot:[headers[i].head]="{header}">

                <p :key="i" class="pointer subtitle-2 mt-4" v-if="head.is_sortable"
                    @click.prevent="sortBy(`${header.meta.model}__${header.meta.table}`)">
                    {{header.text}}
                    <v-icon class="ml-2">{{icon[`${header.meta.model}__${header.meta.table}`]}}</v-icon>
                </p>

                <p :key="i" class="subtitle-2 mt-4" v-else>
                    {{header.text}} </p>
                <v-text-field dense hide-details full-width v-if="head.meta.model"
                    :prepend-inner-icon="i === 0 ? 'fa fa-search' : ''" v-model="head.meta.value"
                    type="text"></v-text-field>
            </template>
            <template v-for="(head, i) in headers" v-slot:[headers[i].item]="{item}">
                <div :key="i">

                    <p v-if="head.is_date">
                        {{moment(item[head.value]).format('DD-MM-YYYY HH:mm')}} </p>

                    <p v-else-if="head.is_status">
                        <v-chip class="ma-2" :color="item[head.value].color" dark>
                            {{item[head.value].title}}
                        </v-chip>
                    </p>
                    <p v-else-if="head.is_nullable">
                        {{item[head.meta.model] ? item[head.meta.model][head.meta.table] : ''}} </p>

                    <p v-else-if="head.is_route" class="indigo--text darken-4 pointer" @click="addPage({
                        name: item[head.value],
                        route: head.route + item.id,
                    })">
                        {{typeof item[head.value] === "undefined" ? item[head.meta.model][head.meta.table] : item[head.value]}} </p>

                    <p class="indigo--text darken-4 pointer" @click="addPage({
                        name: item[head.value],
                        route: route+item.id,
                    })" v-else-if="head.is_tooltips && !head.is_user && !head.is_date">
                        <v-tooltip color="white" max-width="350px" bottom>
                            <template v-slot:activator="{ on }">
							    <span v-on="on" class="indigo--text darken-4 pointer">{{item[head.value]}}
							</span>
                            </template>
                            <component :is="cardComponent" :data="item"></component>
                        </v-tooltip>
                    </p>

                    <p v-else>
                        {{typeof item[head.value] === "undefined" ? item[head.meta.model][head.meta.table] : item[head.value]}} </p>
                </div>
            </template>
        </v-data-table>
        <!-- Pagination -->
        <v-row class="ma-0 pa-6 border-top" style="background-color: white;" justify="space-between">
            <v-col md="4">
                <v-select :items="pageCounter" v-model="limit" :menu-props="{ top: true, offsetY: true }"
                    :label="__('commons.form.per_page')"></v-select>
            </v-col>
            <v-col md="6">
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </v-col>
        </v-row>
        <!-- / Pagination -->
    </v-card>
</template>

<script>
    import {mapActions} from 'vuex';
    import Crud from '@/api/crud';
    import moment from 'moment';

    export default {
        name: "datatable",
        props: {
            headers: {
                type: Array,
                required: true,
            },
            controller: {
                type: String,
                required: true,
            },
            cardComponent: {
                type: String,
                required: false,
            },
            route: {
                type: String,
                required: false,
            }
        },
        data() {
            return {
                render: false,
                items: null,
                pageCounter: [5, 10, 30, 50, 100],
                limit: 30,
                pageCount: 0,
                page: 1,
                sort: `${this.$props.controller}__created_at`,
                direction: 'desc',
                icon: {},
                result: [],
            }
        },
        watch: {
            page: {
                handler() {
                    this.getList(this.query());
                },
            },
            limit: {
                handler() {
                    this.page = 1;
                    this.getList(this.query());
                },
            },
            headers: {
                async handler(val) {
                    let query = this.query();
                    this.result = [];
                    let name;
                    val.forEach((el, i) => {
                        if (el.meta.value.length !== 0) {
                            name = `search__${el.meta.model}__${el.meta.table}`;
                            query[name] = el.meta.value;
                        }
                    });
                    this.getList(query);
                },
                deep: true,
            }
        },
        created() {
            this.getList(this.query());
        },
        methods: {
            moment,
            query() {
                return {
                    page: this.page,
                    limit: this.limit,
                    sort: this.sort,
                    direction: this.direction,
                }
            },
            ...mapActions('routes', [
                'addPage',
            ]),
            sortBy(table) {
                this.sort = table;
                this.icon = {};
                if (this.direction === 'desc') {
                    this.icon[table] = 'fa fa-sort-up';
                    this.direction = 'asc';
                } else {
                    this.direction = 'desc';
                    this.icon[table] = 'fa fa-sort-down';
                }
                this.getList(this.query());
            },
            async getList(query) {
                let controller = new Crud(this.$props.controller);
                await controller.list(query).then((r) => {
                    this.pageCount = parseInt(r.items.last_page);
                    this.limit = parseInt(r.items.per_page);
                    this.items = r.items.data;
                    this.render = true;
                }).catch((e) => {
                    this.showError(e);
                })
            }
        }
    }
</script>

<style scoped></style>
