<template>
    <div v-for="index in generatedArray" :key="index">
        <PostsSkeleton />
        <!-- <div class="border border-sky-50 shadow rounded-md p-4 max-w-sm w-full mx-auto h-96">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-10 bg-gray-200 rounded"></div>
          <div class="space-y-3">
            <div class="h-60 bg-gray-200 rounded"></div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-10 bg-gray-200 rounded col-span-2"></div>
              <div class="h-10 bg-gray-200 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PostsSkeleton from '@/components/PostsSkeleton.vue';

const generatedArray = ref([...Array(6).keys()]);
</script>
