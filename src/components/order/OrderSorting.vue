<template>
  <div class="flex items-center">
    <p @click.prevent="sortBy(column)" class="cursor-pointer">
      {{ column }}
    </p>

    <div class="pl-2" v-if="column === sortedColumn">
      <span v-if="sort.direction === 'asc'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <p class="sr-only">up</p>
      </span>

      <span v-if="sort.direction === 'desc'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <p class="sr-only">down</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['column', 'sortedColumn'],
  emits: ['sort', 'sortedColumn'],
  data() {
    return {
      sort: {
        order_by: 'id',
        direction: 'desc',
      },
    };
  },
  methods: {
    sortBy(key, direction = 'desc') {
      this.sort.order_by = key;
      this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc';

      this.$emit('sort', this.sort);
      this.$emit('sortedColumn', key);
    },
  },
};
</script>
