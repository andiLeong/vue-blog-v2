<template>
    <section class="max-w-7xl mx-auto mt-10">
         {{ queryString }}
        <!-- {{ selected }} -->
        <AppTableLayout>
            <template v-slot:title>
                <h2 class="text-gray-600">Datatable example</h2>

                <div class="my-2">
                    <button
                        class="go-back-btn"
                        @click.prevent="this.showPannel = !this.showPannel"
                    >
                        {{ showPannel ? 'hide pennel' : 'open pennel' }}
                    </button>
                </div>

                <template v-if="showPannel">
                    <OrderSearchPanel
                        @search-query="getherQuery"
                        @reset-query="resetQuery"
                    />
                </template>
            </template>

            <div class="my-2 ml-2" v-if="selected.length > 0">
                <OrderDeletion :id="selected" @deleted="deleted" :endpoint="endpoint"/>
            </div>

            <AppTable>
                <template v-slot:th>
                    <th class="table-heading">
                        <input
                            type="checkbox"
                            @change="toggleSelectAll"
                            :checked="orders.length === selected.length"
                        />
                    </th>

                    <th
                        scope="col"
                        class="table-heading"
                        v-for="column in columns"
                        :key="column"
                    >
                        <OrderSorting
                            :column="column"
                            :sortedColumn="defaultSortColumn"
                            @sort="orderQuery"
                            @sortedColumn="setDefaultSortColumn"
                        />
                    </th>
                    <th>
                        <p class="sr-only">delete</p>
                    </th>
                </template>

                <template v-slot:tb>
                    <tr
                        :class="index % 2 == 0 ? 'bg-white' : 'bg-gray-100'"
                        v-for="(order, index) in orders"
                        :key="order.id"
                    >
                        <td class="table-data">
                            <input type="checkbox" :value="order.id" v-model="selected"/>
                        </td>

                        <td class="table-data">
                            {{ order.id }}
                        </td>

                        <td class="table-data">
                            {{ order.number }}
                        </td>

                        <td class="table-data">
                            {{ order.price }}
                        </td>

                        <td class="table-data">
                            <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                                :class="order.paid == 1
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-red-100 text-red-700'
                              "
                            >
                            {{ order.paid == 1 ? 'YES' : 'NO' }}
                            </span>
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

                        <td class="table-data">
                            <OrderDeletion
                                :id="order.id"
                                @deleted="deleted"
                                :endpoint="endpoint"
                            />
                        </td>
                    </tr>
                </template>
            </AppTable>
        </AppTableLayout>

        <div class="my-4">
            <Paginator
                :perSection="3"
                v-if="pagination.current_page"
                :pagination="pagination"
                @switched-page="switchPage"
            />
        </div>
    </section>
</template>

<script setup>
import Paginator from '@/components/Paginator.vue';
import AppTable from '@/components/AppTable.vue';
import OrderSearchPanel from '@/components/order/OrderSearchPanel.vue';
import AppTableLayout from '@/components/AppTableLayout.vue';
import OrderSorting from '@/components/order/OrderSorting.vue';
import OrderDeletion from '@/components/order/OrderDeletion.vue';
import _ from 'lodash';
import {ref, watch} from "vue";
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const endpoint = ref('/api/order')
const defaultSortColumn = ref('id')
const columns = ref([
    'id',
    'number',
    'price',
    'paid',
    'status',
    'customer',
    'country',
])
const per_page = ref(10)
const orders = ref([])
const pagination = ref({})
const page = ref(route.query.page || 1)
const selected = ref([])
const queryString = ref({})
const sortQuery = ref('')
const showPannel = ref(false)

function fetch(page, query = '') {
    return axios
        .get(`${endpoint.value}?page=${page}&${query}`)
        .then((response) => {
            orders.value = response.data.data;
            pagination.value = response.data;
            delete pagination.value.data;
        });
}

function orderQuery(query){
    sortQuery.value = query
    fetch(page.value, toQueryString(queryString.value));
}

function getherQuery(query) {
    Object.assign(queryString.value, query);
    fetch(page.value, toQueryString(queryString.value));
}

function toQueryString(query) {
    if(sortQuery.value === ''){
        return new URLSearchParams(query).toString();
    }
    return new URLSearchParams(query).toString() + '&' + sortQuery.value;
}

function resetQuery() {
    queryString.value = {};
    sortQuery.value = '';
    fetch(page.value);
}

function switchPage(page) {
    router.replace({
        name: 'order.index',
        query: {
            page,
        },
    });
}

function setDefaultSortColumn(column) {
    defaultSortColumn.value = column;
}

function deleted() {
    if (selected.value.length) {
        toggleSelectAll();
    }

    fetch(route.query.page, toQueryString(queryString.value));
}

function toggleSelectAll() {
    if (selected.value.length > 0) {
        selected.value = [];
        return;
    }
    selected.value = _.map(orders.value, 'id');
}

watch(
    () => route.query.page,
    page => fetch(page, toQueryString(queryString.value))
)

fetch(page.value);

</script>
