<template>
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
                    <VideoPlayer :source="src" />
                </div>
            </div>
        </div>
    </vue-final-modal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal';
import VideoPlayer from '@/views/video/VideoPlayer.vue';
import { ref, watch } from 'vue';

const props = defineProps({
    source: {
        default: null,
    },
});

const show = ref(false);
const src = ref(props.source);

watch(
    () => props.source,
    (newSource, oldSource) => {
        show.value = true;
        src.value = newSource;
    }
);

function onClickAway(e) {
    let id = e.target.id;
    if (id !== 'js-video-modal' || show.value === false) {
        return;
    }
    close();
}

function close() {
    show.value = false;
    src.value = null;
}
</script>

<style scoped></style>
