<template>
  <div v-for="item in items" :key="item.id">
    <slot name="item" v-bind:item="item" />
  </div>

  <slot name="loading" />

  <div v-if="items.length" v-observe-visibility="handleScrolledToBottom"></div>
</template>

<script>
export default {
  emits: ['refetch'],
  props: {
    items: {
      required: true,
      type: Array,
    },
  },

  data() {
    return {
      page: 1,
    };
  },

  methods: {
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return;
      }

      console.log('bottom');
      this.page++;

      this.$emit('refetch', this.page);
    },
  },
};
</script>
