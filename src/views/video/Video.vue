<template>
    <div class="h-full flex">
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Main content -->
            <div class="flex-1 flex items-stretch overflow-hidden">
                <main class="flex-1 overflow-y-auto">
                    <div class="pt-8 max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
                        <section class="mt-8 pb-16">
                            <ul
                                v-if="files.length > 0"
                                role="list"
                                class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                            >
                                <InfiniteScroll :items="files" @refetch="fetch">
                                    <template v-slot:item="{ item }">
                                        <li class="relative">
                                            <div
                                                class="flex justify-center items-center bg-gradient-to-r from-slate-200 to-slate-100 rounded-md"
                                            >
                                                <video
                                                    playsinline
                                                    class="cursor-pointer w-64 h-60"
                                                    @click.prevent="
                                                        openModal(item)
                                                    "
                                                >
                                                    <source
                                                        :src="
                                                            item.url +
                                                            '#t=0.001'
                                                        "
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>
                                            <p
                                                class="mt-2 block text-sm font-medium text-sky-500 truncate pointer-events-none dark:text-gray-200"
                                            >
                                                {{ item.age }}
                                            </p>
                                        </li>
                                    </template>
                                    <template v-slot:loading>
                                        <div
                                            v-show="
                                                noMoreFiles === false &&
                                                fetching === true
                                            "
                                        >
                                            <Spinner
                                                class="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600"
                                            />
                                        </div>
                                    </template>
                                </InfiniteScroll>
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
        </div>
        <VideoModal :source="selectedVideo" @next-video="prepareNextVideo" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Spinner from '@/components/Spinner.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import VideoModal from '@/views/video/VideoModal.vue';
import { v4 as uuidv4 } from 'uuid';

const files = ref([]);
const lastPage = ref(1);
const noMoreFiles = ref(false);
const fetching = ref(false);
const selectedVideo = ref(null);
const selectedVideoId = ref(null);

function openModal(video) {
    selectedVideo.value = appendUuid(video.url);
    selectedVideoId.value = video.id;
}

function fetch(page, resetFetch = false) {
    if (page > lastPage.value) {
        return;
    }
    if (page !== 1) {
        fetching.value = true;
    }

    axios
        .get(`/api/video/1?page=${page}`)
        .then(function (response) {
            if (response.data.next_page_url === null) {
                noMoreFiles.value = true;
            }

            if (resetFetch) {
                files.value = response.data.data;
                return;
            }

            files.value.push(...response.data.data);
            lastPage.value = response.data.last_page;
        })
        .catch(function (error) {
            alert('remote server response with: ' + error.response.status);
            console.log(error);
        });
}

function prepareNextVideo() {
    let index = files.value.findIndex(
        (files) => files.id === selectedVideoId.value
    );

    if (index !== -1 && index + 1 in files.value) {
        let item = files.value[index + 1];
        selectedVideo.value = appendUuid(item.url);
        selectedVideoId.value = item.id;
    } else {
        selectedVideo.value = null;
        selectedVideoId.value = null;
    }
}

function appendUuid(url) {
    return url + '?id=' + uuidv4();
}

fetch(1);
</script>

<style scoped></style>
