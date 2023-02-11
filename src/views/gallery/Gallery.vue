<template>
    <div class="h-full flex">
        <!-- Content area -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Main content -->
            <div
                v-if="files.length > 0"
                class="flex-1 flex items-stretch overflow-hidden"
            >
                <main class="flex-1 overflow-y-auto">
                    <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex">
                            <h1
                                class="flex-1 text-2xl font-bold text-sky-700 dark:text-white"
                            >
                                Leong Jun Sing
                            </h1>
                        </div>

                        <div class="mt-4 grid grid-cols-3 gap-2">
                            <div class="">
                                <BaseSelect
                                    labelClass="form-label"
                                    class="mt-1 form-select"
                                    label="Order By"
                                    :options="orderByOption"
                                    v-model="orderBy"
                                    @update:modelValue="fetch(1, true)"
                                />
                            </div>
                        </div>

                        <section
                            class="mt-8 pb-16"
                            aria-labelledby="gallery-heading"
                        >
                            <ul
                                role="list"
                                class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                            >
                                <InfiniteScroll :items="files" @refetch="fetch">
                                    <template v-slot:item="{ item }">
                                        <li class="relative">
                                            <div
                                                :class="[
                                                    item.pinned
                                                        ? 'ring-2 ring-offset-2 ring-sky-500'
                                                        : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-sky-500',
                                                    'group block w-full aspect-w-10 aspect-h-12 rounded-lg bg-gray-100 overflow-hidden dark:rounded-md',
                                                ]"
                                            >
                                                <img
                                                    :src="item.url"
                                                    alt=""
                                                    :class="[
                                                        item.pinned
                                                            ? ''
                                                            : 'group-hover:opacity-75',
                                                        'object-cover pointer-events-none dark:border dark:border-2 dark:border-white',
                                                    ]"
                                                />
                                                <button
                                                    @mouseover.prevent="
                                                        updateFeatureGallery(
                                                            item
                                                        )
                                                    "
                                                    type="button"
                                                    class="absolute inset-0 focus:outline-none"
                                                >
                                                    <span class="sr-only"
                                                        >View details for
                                                        {{ item.name }}</span
                                                    >
                                                </button>
                                            </div>
                                            <p
                                                class="mt-2 block text-sm font-medium text-sky-500 truncate pointer-events-none dark:text-gray-200"
                                            >
                                                {{ item.age }}
                                            </p>
                                            <p
                                                class="block text-sm font-medium text-gray-500 pointer-events-none dark:text-gray-100"
                                            >
                                                {{ item.size }} MB
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

                <!-- Details sidebar -->
                <aside
                    class="hidden w-96 bg-white dark:bg-gray-800 p-8 border-l dark:border-l-2 border-gray-200 border-t-2 overflow-y-auto lg:block"
                >
                    <GalleryDetails :file="currentFile" />
                </aside>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Spinner from '@/components/Spinner.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import _ from 'lodash';
import BaseSelect from '@/components/forms/BaseSelect.vue';
import GalleryDetails from '@/views/gallery/GalleryDetails.vue';

const currentFile = ref(null);

const files = ref([]);
const lastPage = ref(1);
const noMoreFiles = ref(false);
const fetching = ref(false);
const orderByOption = ['latest', 'oldest'];
const orderBy = ref('latest');

const updateFeatureGallery = _.debounce(function (gallery) {
    if (window.innerWidth >= 988) {
        currentFile.value = gallery;
    }
}, 300);

function fetch(page, resetFetch = false) {
    if (page > lastPage.value) {
        return;
    }
    if (page !== 1) {
        fetching.value = true;
    }

    axios
        .get(`/api/gallery/1?page=${page}&${orderBy.value}=1`)
        .then(function (response) {
            if (response.data.next_page_url === null) {
                noMoreFiles.value = true;
            }

            if (page == 1) {
                currentFile.value = response.data.data[0];
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

fetch(1);
</script>
