<template>
    <section class="max-w-7xl mx-auto mt-10">
        <AppTableLayout>
            <template v-slot:title>
                <h2 class="text-gray-600 mb-10">Datatable example</h2>
            </template>
            <AppTable>
                <template v-slot:th>
                  <th scope="col" class="table-heading" v-for="column in columns" :key="column">
                    {{column}}
                  </th>
                </template>

                <template v-slot:tb>
                    <tr class="bg-white" v-for="order in orders" :key="order.id">
                        <td class="table-data">
                            {{ order.id }}
                        </td>

                        <td class="table-data">
                            {{ order.number }}
                        </td>

                        <td class="table-data">
                            {{ order.total_price }}
                        </td>

                        <td class="table-data">
                            {{ order.paid }}
                        </td>
                        
                        <td class="table-data">
                            {{ order.status }}
                        </td>

                        <td class="table-data">
                            {{ order.customer }}
                        </td>

                        <td class="table-data">
                            {{ order.country }}
                        </td>
                    </tr>
                </template>

                <template v-slot:footer>
                    <p>Here's some contact info</p>
                </template>
            </AppTable>
        </AppTableLayout>
    </section>
</template>

<script>
import Paginator from '@/components/Paginator.vue';
import AppTable from '@/components/AppTable.vue';
import AppTableLayout from '@/components/AppTableLayout.vue';
    export default {
        components:{
            AppTableLayout,AppTable,Paginator
        },
        data () {
            return {
                endpoint:'',
                editing: {
                    id: null,
                    form: {},
                    errors: []
                },
                sort: {
                    key: 'id',
                    order: 'asc'
                },
                columns: [
                    'id',
                    'number',
                    'Price',
                    'Payment',
                    'Status',
                    'Customer',
                    'Country',
                ],
                per_page: 10,
                orders: [],
                selected: []
            }
        },
        computed: {
            filteredRecords () {
                let data = this.response.records
                return data
            }
        },
        methods: {
            fetch () {
                return axios.get(`${this.endpoint}`).then((response) => {
                    this.orders = response.data.data
                });
            },
            getQueryParameters() {
                return {
                    per_page: this.per_page,
                }
            },
            sortBy (key) {
                this.sort.key = key
                this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc'
            },
            edit (record) {
                this.editing.errors = []
                this.editing.id = record.id
                this.editing.form = _.pick(record, this.response.updatable)
            },
            update () {
                axios.patch(`${this.endpoint}/${this.editing.id}`, this.editing.form).then(() => {
                    this.getRecords().then(() => {
                        this.editing.id = null
                        this.editing.form = null
                    })
                }).catch((error) => {
                    if (error.response.status === 422) {
                        this.editing.errors = error.response.data
                    }
                })
            },
            
            destroy (record) {
                if (!window.confirm(`Are you sure you want to delete this?`)) {
                    return
                }

                axios.delete(`${this.endpoint}/${record}`).then(() => {
                    this.getRecords()

                    if (this.selected.length) {
                        this.toggleSelectAll()
                    }
                })
            },

            toggleSelectAll () {
                if (this.selected.length > 0) {
                    this.selected = []
                    return
                }

                this.selected = _.map(this.filteredRecords, 'id')
            }
        },
        mounted () {
            this.fetch()
        }
    }
</script>
