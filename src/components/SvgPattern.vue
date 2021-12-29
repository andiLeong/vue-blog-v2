<template>
  <svg
    :class="props.class"
    :width="props.width"
    :height="props.height"
    fill="none"
    :viewBox="props.viewBox"
  >
    <defs>
      <slot />
    </defs>
    <rect :width="props.width" :height="props.height" :fill="props.fillUrl" />
  </svg>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  class: {
    type: String,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  viewBox: {
    // type:Number,
    required: true,
  },
  fillUrl: {
    type: String,
    required: true,
  },
});
</script>
