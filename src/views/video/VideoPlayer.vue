<template>
    <div id="video-container" ref="root">
        <video :id="id" class="video-js vjs-4-3"></video>
    </div>
</template>

<script setup>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
    config: {
        type: Object,
        required: false,
    },
    source: {
        type: [String, null],
        required: false,
    },
    autoPlay: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['videoEnded']);

const player = ref(null);
const root = ref(null);
const id = ref('player-id');
const src = ref(props.source);
const defaultConfig = ref({
    autoplay: true,
    controls: true,
    sources: [
        {
            src: src.value,
            type: 'video/mp4',
        },
    ],
});

onMounted(() => {
    initPlayer();
});

onBeforeUnmount(() => {
    destroy();
});

watch(
    () => props.source,
    (newSource, oldSource) => {
        src.value = newSource;
        defaultConfig.value.sources[0].src = newSource;

        if (newSource !== null) {
            initPlayer();
        } else {
            destroy();
            createDom();
        }
    }
);

function parseConfig() {
    if (props.config) {
        defaultConfig.value = props.config;
    }
}

function destroy() {
    if (isVideoJsInstance()) {
        player.value.dispose();
        player.value = null;
    }
}

function initPlayer() {
    if (canBeInit()) {
        player.value = videojs(id.value, defaultConfig.value);

        player.value.one('ended', function () {
            console.log('video ended');
            if (props.autoPlay) {
                console.log(
                    'auto play is enabled ask parent to give me new video source'
                );

                destroy();
                createDom();

                emit('videoEnded');
            }
        });
    }
}

function createDom() {
    let el = document.getElementById(id.value);
    if (typeof el != 'undefined' && el != null) {
        return;
    }

    let video = document.createElement('video');
    video.classList.add('video-js', 'vjs-4-3');
    video.setAttribute('id', id.value);

    root.value.appendChild(video);
}

function canBeInit() {
    return defaultConfig.value.sources[0].src !== null;
}

function isVideoJsInstance() {
    return player.value !== null;
}

parseConfig();
</script>

<style scoped></style>
