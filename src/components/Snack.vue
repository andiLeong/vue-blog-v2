<template>
  <div class="fixed w-full top-0 left-0 flex justify-center">
    <transition name="snack">
      <div
        class="text-white px-8 py-2 rounded-lg text-sm mt-6"
        :class="getType"
        v-if="snack"
      >
        {{ snack }}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    type: {
      default: 'primary',
    },
  },

  computed: {
    ...mapGetters({
      snack: 'snack/snack',
    }),
    getType() {
      if (this.type === 'success') {
        return 'bg-gradient-to-r from-teal-500 to-teal-300';
      }

      if (this.type === 'danger') {
        return 'bg-gradient-to-r from-rose-400 to-rose-300';
      }

      if (this.type === 'warning') {
        return 'bg-gradient-to-r from-amber-500 to-amber-300';
      }
      return 'bg-gradient-to-r from-sky-500 to-sky-300';
    },
  },
};
</script>
