<template>
  <div class="pt-10 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
    <div
      class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
    >
      <div
        v-if="posts.length"
        class="mt-4 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <InfiniteScroll :items="posts" @refetch="fetch">
          <template v-slot:item="{ item }">
            <!-- <div>
                <a href="#" class="inline-block">
                  <span class="dark:bg-white dark:text-gray-500 bg-indigo-100 text-indigo-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium">
                    category name
                  </span>
                </a>
              </div> -->
            <AppLink
              class="block mt-4"
              :to="{ name: 'posts.show', params: { slug: item.slug } }"
            >
              <p class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ item.title }}
              </p>
              <p class="mt-3 text-base text-gray-500 dark:text-white">
                {{ item.shortDescription }}
              </p>
            </AppLink>
            <!-- <a href="#" class="block mt-4">
                <p class="text-xl font-semibold text-gray-900">
                  {{ item.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ item.body }}
                </p>
              </a> -->
          </template>
          <template v-slot:loading>
            <div v-show="noMorePost === false && fetching === true">
              <Spinner class="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600" />
            </div>
          </template>
        </InfiniteScroll>

        <div
          v-show="noMorePost"
          class="sm:hidden font-semibold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-lime-200 text-center text-sm"
        >
          No more post
        </div>
      </div>

      <div
        v-else-if="noMorePost"
        class="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-lime-200 text-center text-md"
      >
        No post at the moment !
      </div>

      <div
        v-else
        class="mt-4 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <PostsSkeletons />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostsSkeletons from '@/components/PostsSkeletons.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import AppLink from '@/components/AppLink.vue';
import Spinner from '@/components/Spinner.vue';

const posts = ref([]);
const lastPage = ref(1);
const noMorePost = ref(false);
const fetching = ref(false);

function fetch(page) {
  if (page > lastPage.value) {
    return;
  }
  if (page !== 1) {
    fetching.value = true;
  }

  axios
    .get(`/api/posts?page=${page}`)
    .then(function (response) {
      if (response.data.next_page_url === null) {
        noMorePost.value = true;
      }

      posts.value.push(...response.data.data);
      lastPage.value = response.data.last_page;
    })
    .catch(function (error) {
      alert('remote server response with: ' + error.response.status);
      console.log(error);
    });
}

fetch(1);
</script>
