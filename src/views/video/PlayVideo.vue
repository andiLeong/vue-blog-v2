<template>
    <div class="my-20">
        <div class="rounded flex justify-between items-center mx-7">
            <div v-for="(item, index) in items" :key="index">
                <video @click.prevent="openModal(item)" class="h-64 w-64">
                    <source :src="item" type="video/mp4" />
                </video>
            </div>
        </div>

        <vue-final-modal v-model="show">
            <div
                id="js-video-modal"
                class="flex items-start justify-center min-h-screen p-4 text-center sm:p-0"
            >
                <div
                    v-click-away="onClickAway"
                    class="overflow-visible flex flex-col relative bg-white rounded-lg mx-5 md:mx-2 px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 md:max-w-lg w-full sm:p-6"
                >
                    <div class="absolute -top-2 -right-2">
                        <button
                            @click.prevent="close"
                            class="text-white bg-red-500 w-6 h-6 text-sm rounded-full border border-gray-300"
                        >
                            &times;
                        </button>
                    </div>
                    <div id="video-container" class="mt-5 sm:mt-6 flex-1">
                        <video
                            id="video-js-player-id"
                            class="video-js vjs-4-3"
                        ></video>
                    </div>
                </div>
            </div>
        </vue-final-modal>
    </div>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const player = ref(null);
const videoPlayer = ref(null);
const show = ref(false);
const items = [
    'https://andiliang.sgp1.cdn.digitaloceanspaces.com/test%2FIMG_0513.MOV',
    'https://andiliang.sgp1.cdn.digitaloceanspaces.com/test%2FIMG_0513.MOV',
    'https://www.w3schools.com/html/mov_bbb.mp4',
];
const currentSrc = ref(null);
const configs = computed(() => {
    return {
        autoplay: true,
        controls: true,
        sources: [
            {
                src: currentSrc.value,
                type: 'video/mp4',
            },
        ],
    };
});

onMounted(() => {
    // initPlayer();
});

onBeforeUnmount(() => {
    // if (player.value) {
    //     player.value.dispose();
    // }
});

function openModal(source) {
    show.value = true;
    currentSrc.value = source;
    initPlayer();
}

function onClickAway(e) {
    let id = e.target.id;
    if (id !== 'js-video-modal' || show.value === false) {
        return;
    }
    close();
}

function close() {
    // if (player.value) {
    //     player.value.dispose();
    // }
    show.value = false;
    player.value.dispose();
    // player.value.reset();
    // player.value = null;
    // :id="playerId" class="video-js vjs-4-3"

    let video = document.createElement('video');
    video.classList.add('video-js', 'vjs-4-3');
    video.setAttribute('id', 'video-js-player-id');

    const element = document.getElementById('video-container');
    element.appendChild(video);
}

function initPlayer() {
    player.value = videojs('video-js-player-id', configs.value, () => {
        console.log('player ready');
    });
}
</script>

<style scoped></style>
