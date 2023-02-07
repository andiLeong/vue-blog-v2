<template>
    <div id="video-container">
        <video :id="id" class="video-js vjs-4-3"></video>
    </div>
</template>

<script setup>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps(['config']);

const player = ref(null);
const id = 'player-id';
const defaultConfigs = {};

onMounted(() => {
    initPlayer();
});

onBeforeUnmount(() => {
    if (player.value) {
        player.value.dispose();
    }
});

function initPlayer() {
    // console.log(configs.value);
    player.value = videojs(id.value, props.config, () => {
        console.log('player ready');
    });
}

function recreateDom() {}
</script>

<style scoped></style>
