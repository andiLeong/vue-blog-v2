<template>
  <!-- baseURL: 'http://localhost:8000/api', -->

  <div class="max-w-7xl mx-auto mt-10 px-4">
    <Uploader
      :options="{
        baseURL: 'https://api.andiliang.com/api',
        maxConcurrentUploads: 2,
      }"
      :handlers="{
        'image/jpg': {
          endpoint: 'files',
        },
        'image/jpeg': {
          endpoint: 'files',
        },
        'image/png': {
          endpoint: 'files',
        },
      }"
    />
  </div>
</template>

<script setup>
import Uploader from '@/components/uploader/components/Uploader.vue';
</script>
