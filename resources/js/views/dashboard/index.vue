<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <datatable controller="user" :headers="headers"></datatable>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import datatable from "@/components/commons/datatable";

    export default {
        name: "index",
        components: {
            datatable,
        },
        data() {
            return {
                headers: [
                    {
                        text: 'ID',
                        align: 'center',
                        // sort client side
                        sortable: false,
                        // sort server side
                        is_sortable: true,
                        //value
                        value: 'id',
                        // head = header.value
                        head: 'header.id',
                        // item = item.value
                        item: 'item.id',

                        meta: {
                            // table model for search and sort
                            model: 'user',
                            // table col for search and sort
                            table: 'id',
                            // search value (bind): must be empty
                            value: '',
                        }
                    },
                    {
                        text: 'Name',
                        align: 'center',
                        sortable: false,
                        is_sortable: true,
                        value: 'name',
                        head: 'header.name',
                        item: 'item.name',

                        // is route
                        is_route: true,
                        // route link
                        route: '/user/', // + id
                        meta: {
                            model: 'user',
                            table: 'name',
                            value: '',
                        }
                    },
                    {
                        text: 'Date',
                        align: 'center',
                        sortable: false,
                        is_sortable: true,
                        value: 'created_at',
                        head: 'header.created_at',
                        item: 'item.created_at',

                        // is date
                        is_date: true,
                        meta: {
                            model: 'user',
                            table: 'created_at',
                            value: '',
                        }
                    },
                ]
            }
        }
    }
</script>

<style>

</style>

