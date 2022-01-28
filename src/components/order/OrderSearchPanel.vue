<template>
  <form class="space-y-3 my-6" @submit.prevent="submit">
    <h3 class="text-lg leading-6 font-medium text-gray-900">Search Pennel</h3>

    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <BaseInput
          labelClass="form-label"
          placeHolder="Search order number"
          class="mt-1 form-input"
          label="Number"
          type="text"
          v-model="search.number"
        />
      </div>

      <div class="sm:col-span-3">
        <BaseInput
          labelClass="form-label"
          placeHolder="Search customer"
          class="mt-1 form-input"
          label="Customer"
          type="text"
          v-model="search.customer"
        />
      </div>

      <div class="sm:col-span-2">
        <BaseSelect
          labelClass="form-label"
          class="mt-1 form-select"
          :options="status"
          v-model="search.status"
          label="Status"
        />
      </div>

      <div class="sm:col-span-2">
        <BaseSelect
          labelClass="form-label"
          class="mt-1 form-select"
          :options="country"
          v-model="search.country"
          label="Country"
        />
      </div>

      <div class="sm:col-span-2">
        <BaseSelect
          labelClass="form-label"
          class="mt-1 form-select"
          :options="perPage"
          v-model="search.per_page"
          label="display per page"
        />
      </div>
    </div>

    <!-- {{ search }} -->

    <div class="pt-1">
      <div class="flex justify-end">
        <button
          type="button"
          @click.prevent="reset"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Reset
        </button>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import BaseInput from '@/components/forms/BaseInput.vue';
import BaseSelect from '@/components/forms/BaseSelect.vue';

export default {
  components: {
    BaseInput,
    BaseSelect,
  },

  emits: ['search-query', 'reset-query'],
  data() {
    return {
      search: {
        per_page: 10,
        country: null,
        customer: null,
        number: null,
        status: null,
      },
      perPage: [10, 50, 100, 200],
      country: ['American', 'China', 'Russia', 'Maylasia', 'Singapore'],
      status: ['shipped', 'delivered', 'unshipped', 'received'],
    };
  },

  computed: {},

  methods: {
    reset() {
      this.search = {
        per_page: 10,
        country: null,
        customer: null,
        number: null,
        status: null,
      };

      this.$emit('reset-query');
    },

    submit() {
      let search = Object.fromEntries(
        Object.entries(this.search).filter(([_, v]) => v != null)
      );

      if (search.per_page == 10) {
        delete search.per_page;
      }

      if (Object.keys(search).length === 0) {
        return;
      }

      this.$emit('search-query', search);
    },
  },
};
</script>
