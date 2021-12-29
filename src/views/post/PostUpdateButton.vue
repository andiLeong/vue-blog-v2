<template>
  <button type="button" @click.prevent="goToEdit()" class="go-back-btn">
    update
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const router = useRouter();

function goToEdit() {
  router.push({ name: 'posts.edit', params: { slug: props.slug } });
}
</script>
