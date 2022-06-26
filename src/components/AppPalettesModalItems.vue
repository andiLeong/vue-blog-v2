<template>

    <ul v-if="posts" class="space-y-2" id="search-result-ul">
        <AppPalettesModelItem
            v-for="(post,index) in posts"
            :key="post.id"
            :post="post"
            :class="index === activeIndex ? 'text-gray-700 bg-gray-200': 'text-gray-600'"
        />
    </ul>
    <div v-if="loading" class="flex justify-center">
        <Spinner class="animate-spin h-6 w-6 text-sky-600"/>
    </div>

</template>

<script setup>
import Spinner from '@/components/Spinner.vue';
import AppPalettesModelItem from "@/components/AppPalettesModelItem.vue";

const props = defineProps(['posts','loading','activeIndex'])
</script>
