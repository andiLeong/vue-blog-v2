<template>
    <div class="my-20">
        <div class="rounded flex justify-between items-center mx-7">
            <div v-for="(item, index) in items" :key="index">
                <video @click.prevent="openModal(item)" class="h-64 w-64">
                    <source :src="item" type="video/mp4" />
                </video>
            </div>
        </div>
        <VideoModal :source="currentSrc" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import VideoModal from '@/views/video/VideoModal.vue';
import { v4 as uuidv4 } from 'uuid';

const items = [
    'https://andiliang.sgp1.cdn.digitaloceanspaces.com/test%2FIMG_0513.MOV',
    'https://andiliang.sgp1.cdn.digitaloceanspaces.com/test%2FIMG_0513.MOV',
    'https://www.w3schools.com/html/mov_bbb.mp4',
];
const currentSrc = ref(null);

function openModal(source) {
    currentSrc.value = source + '?id=' + uuidv4();
}
</script>

<style scoped></style>
