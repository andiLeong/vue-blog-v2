<template>
  <button
      type="submit"
      :disabled="loading"
      :class="{ 'cursor-not-allowed ': loading }"
      class="primary-btn"
  >
    <LoadingIndicator
        v-if="loading"
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    />
    {{ loading ? saving : notSaving }}
  </button>
</template>

<script setup>
import LoadingIndicator from "@/components/LoadingIndicator.vue"
const props = defineProps({
  loading: Boolean,
  saving: {
    default:'Saving'
  },
  notSaving: {
    default:'Save'
  },
})
</script>