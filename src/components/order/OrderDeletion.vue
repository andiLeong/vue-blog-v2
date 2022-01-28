<template>
  <button class="text-sky-300 underline" type="button" @click.prevent="destroy">
    Delete
  </button>
</template>

<script>
export default {
  props: ['id', 'endpoint'],
  emits: ['deleted'],
  data() {
    return {};
  },
  methods: {
    destroy() {
      if (!window.confirm(`Are you sure you want to delete this?`)) {
        return;
      }

      axios.delete(`${this.endpoint}/${this.id}`).then(() => {
        this.$emit('deleted');
      });
    },
  },
};
</script>
