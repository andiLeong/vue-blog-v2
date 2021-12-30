<template>
  <div id="app" class="container">
    <Uploader
      :options="{
        baseURL: 'http://vue-uploader.test:8000/api',
         maxConcurrentUploads: 2
      }"

      :handlers="{
        'video/mp4': {
          endpoint: 'uploads/video'
        }
      }"
    />
  </div>
</template>


<script setup>
  import Uploader from '@/uploader/components/Uploader'
</script>
