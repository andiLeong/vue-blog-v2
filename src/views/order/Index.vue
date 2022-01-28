<template>
  <section class="max-w-7xl mx-auto mt-10">
    <!-- {{ queryString }} -->
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
        <OrderDeletion :id="selected" @deleted="deleted" :endpoint="endpoint" />
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
              @sort="getherQuery"
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
              <input type="checkbox" :value="order.id" v-model="selected" />
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
                :class="
                  order.paid == 1
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

<script>
import Paginator from '@/components/Paginator.vue';
import AppTable from '@/components/AppTable.vue';
import OrderSearchPanel from '@/components/order/OrderSearchPanel.vue';
import AppTableLayout from '@/components/AppTableLayout.vue';
import OrderSorting from '@/components/order/OrderSorting.vue';
import OrderDeletion from '@/components/order/OrderDeletion.vue';
import _ from 'lodash';

export default {
  components: {
    AppTableLayout,
    AppTable,
    Paginator,
    OrderSearchPanel,
    OrderSorting,
    OrderDeletion,
  },
  data() {
    return {
      endpoint: '/api/order',
      defaultSortColumn: 'id',
      columns: [
        'id',
        'number',
        'price',
        'paid',
        'status',
        'customer',
        'country',
      ],
      per_page: 10,
      orders: [],
      pagination: {},
      page: this.$route.query.page || 1,
      selected: [],
      queryString: {},
      showPannel: false,
    };
  },
  computed: {},
  methods: {
    fetch(page, query = '') {
      return axios
        .get(`${this.endpoint}?page=${page}&${query}`)
        .then((response) => {
          this.orders = response.data.data;
          this.pagination = response.data;
          delete this.pagination.data;
        });
    },

    getherQuery(query) {
      Object.assign(this.queryString, query);
      this.fetch(this.page, this.toQueryString(this.queryString));
    },

    toQueryString(query) {
      return new URLSearchParams(query).toString();
    },

    resetQuery() {
      this.queryString = {};
      this.fetch(this.page);
    },

    switchPage(page) {
      this.$router.replace({
        name: 'order.index',
        query: {
          page,
        },
      });
    },

    setDefaultSortColumn(column) {
      this.defaultSortColumn = column;
    },

    deleted() {
      if (this.selected.length) {
        this.toggleSelectAll();
      }

      this.fetch(this.$route.query.page, this.toQueryString(this.queryString));
    },

    toggleSelectAll() {
      if (this.selected.length > 0) {
        this.selected = [];
        return;
      }

      this.selected = _.map(this.orders, 'id');
    },
  },

  watch: {
    '$route.query.page'(page, prevPage) {
      this.fetch(page, this.toQueryString(this.queryString));
    },
  },

  created() {
    this.fetch(this.page);
  },
};
</script>
