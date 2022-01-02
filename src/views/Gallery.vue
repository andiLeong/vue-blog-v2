<template>
  <div class="h-full flex">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex">
              <h1
                class="flex-1 text-2xl font-bold text-sky-700 dark:text-white"
              >
                Leong Jun Sing
              </h1>
            </div>

            <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
              <ul
                v-if="files.length > 0"
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
                            item.pinned ? '' : 'group-hover:opacity-75',
                            'object-cover pointer-events-none dark:border dark:border-2 dark:border-white',
                          ]"
                        />
                        <button
                          type="button"
                          class="absolute inset-0 focus:outline-none"
                        >
                          <span class="sr-only"
                            >View details for {{ item.name }}</span
                          >
                        </button>
                      </div>
                      <p
                        class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none dark:text-gray-200"
                      >
                        {{ item.name }}
                      </p>
                      <p
                        class="block text-sm font-medium text-gray-500 pointer-events-none dark:text-gray-100"
                      >
                        {{ item.size }} MB
                      </p>
                    </li>
                  </template>
                  <template v-slot:loading>
                    <div v-show="noMoreFiles === false && fetching === true">
                      <Spinner
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600"
                      />
                    </div>
                  </template>
                </InfiniteScroll>
              </ul>

              <div v-else>
                <Spinner class="animate-spin -ml-1 h-5 w-5 text-sky-600" />
              </div>
            </section>

            <!-- Gallery -->
            <!-- <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
              <ul
                v-if="files.length > 0"
                role="list"
                class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
              >
                <li v-for="file in files" :key="file.id" class="relative">
                  <div
                    :class="[
                      file.pinned
                        ? 'ring-2 ring-offset-2 ring-sky-500'
                        : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-sky-500',
                      'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden',
                    ]"
                  >
                    <img
                      :src="file.url"
                      alt=""
                      :class="[
                        file.pinned ? '' : 'group-hover:opacity-75',
                        'object-cover pointer-events-none dark:border dark:border-2 dark:border-white',
                      ]"
                    />
                    <button
                      type="button"
                      class="absolute inset-0 focus:outline-none"
                    >
                      <span class="sr-only"
                        >View details for {{ file.name }}</span
                      >
                    </button>
                  </div>
                  <p
                    class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
                  >
                    {{ file.name }}
                  </p>
                  <p
                    class="block text-sm font-medium text-gray-500 pointer-events-none"
                  >
                    {{ file.size }} MB
                  </p>
                </li>
              </ul>

              <div v-else>
                <Spinner class="animate-spin -ml-1 h-5 w-5 text-sky-600" />
              </div>
            </section> -->
          </div>
        </main>

        <!-- Details sidebar -->
        <aside
          class="hidden w-96 bg-white dark:bg-gray-800 p-8 border-l dark:border-l-2 border-gray-200 border-t border-t-sky-500 border-t-2 overflow-y-auto lg:block"
        >
          <div class="pb-16 space-y-6">
            <div>
              <div
                class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
              >
                <img :src="currentFile.source" alt="" class="object-cover" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div>
                  <h2 class="text-lg font-medium text-gray-900 dark:text-white">
                    <span class="sr-only">Details for </span
                    >{{ currentFile.name }}
                  </h2>
                  <p
                    class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    {{ currentFile.size }}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-gray-200">
                Information
              </h3>
              <dl
                class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                <div
                  v-for="key in Object.keys(currentFile.information)"
                  :key="key"
                  class="py-3 flex justify-between text-sm font-medium"
                >
                  <dt class="text-gray-500 dark:text-gray-200">{{ key }}</dt>
                  <dd class="text-gray-900 dark:text-white">
                    {{ currentFile.information[key] }}
                  </dd>
                </div>
              </dl>
            </div>

            <div class="flex">
              <button
                type="button"
                class="flex-1 bg-sky-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Download
              </button>
              <button
                type="button"
                class="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Delete
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Spinner from '@/components/Spinner.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';

const currentFile = {
  name: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  information: {
    Created: 'June 8, 2020',
    'Last modified': 'June 8, 2020',
    Dimensions: '4032 x 3024',
  },
};

const files = ref([]);
const lastPage = ref(1);
const noMoreFiles = ref(false);
const fetching = ref(false);

function fetch(page) {
  if (page > lastPage.value) {
    return;
  }
  if (page !== 1) {
    fetching.value = true;
  }

  axios
    .get(`/api/gallery/1?page=${page}`)
    .then(function (response) {
      if (response.data.next_page_url === null) {
        noMoreFiles.value = true;
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
