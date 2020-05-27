<template>
    <v-row>
        <v-col>
            <datatable controller="post" :headers="headers"></datatable>
        </v-col>
    </v-row>
</template>

<script>
    import datatable from "@/components/commons/datatable";

    export default {
        name: "home",
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
                            model: 'post',
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
                        value: 'title',
                        head: 'header.title',
                        item: 'item.title',

                        meta: {
                            model: 'post',
                            table: 'title',
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
                            model: 'post',
                            table: 'created_at',
                            value: '',
                        }
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
