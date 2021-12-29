<template>
  <div class="relative py-16 overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div
        v-if="post"
        class="relative h-full text-lg max-w-prose mx-auto"
        aria-hidden="true"
      >
        <SvgPattern
          v-for="pattern in patterns"
          :key="pattern.id"
          :class="pattern.class"
          width="404"
          height="384"
          viewBox="0 0 400 384"
          :fillUrl="pattern.url"
        >
          <pattern
            :id="pattern.id"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              :class="pattern.color"
              fill="currentColor"
              d="M11,18 C14.8659932,18 18,14.8659932 18,11 C18,7.13400675 14.8659932,4 11,4 C7.13400675,4 4,7.13400675 4,11 C4,14.8659932 7.13400675,18 11,18 Z M59,43 C62.8659932,43 66,39.8659932 66,36 C66,32.1340068 62.8659932,29 59,29 C55.1340068,29 52,32.1340068 52,36 C52,39.8659932 55.1340068,43 59,43 Z M16,36 C17.6568542,36 19,34.6568542 19,33 C19,31.3431458 17.6568542,30 16,30 C14.3431458,30 13,31.3431458 13,33 C13,34.6568542 14.3431458,36 16,36 Z M79,67 C80.6568542,67 82,65.6568542 82,64 C82,62.3431458 80.6568542,61 79,61 C77.3431458,61 76,62.3431458 76,64 C76,65.6568542 77.3431458,67 79,67 Z M34,90 C35.6568542,90 37,88.6568542 37,87 C37,85.3431458 35.6568542,84 34,84 C32.3431458,84 31,85.3431458 31,87 C31,88.6568542 32.3431458,90 34,90 Z M90,14 C91.6568542,14 93,12.6568542 93,11 C93,9.34314575 91.6568542,8 90,8 C88.3431458,8 87,9.34314575 87,11 C87,12.6568542 88.3431458,14 90,14 Z M12,86 C14.209139,86 16,84.209139 16,82 C16,79.790861 14.209139,78 12,78 C9.790861,78 8,79.790861 8,82 C8,84.209139 9.790861,86 12,86 Z M40,21 C42.209139,21 44,19.209139 44,17 C44,14.790861 42.209139,13 40,13 C37.790861,13 36,14.790861 36,17 C36,19.209139 37.790861,21 40,21 Z M63,10 C65.7614237,10 68,7.76142375 68,5 C68,2.23857625 65.7614237,0 63,0 C60.2385763,0 58,2.23857625 58,5 C58,7.76142375 60.2385763,10 63,10 Z M57,70 C59.209139,70 61,68.209139 61,66 C61,63.790861 59.209139,62 57,62 C54.790861,62 53,63.790861 53,66 C53,68.209139 54.790861,70 57,70 Z M86,92 C88.7614237,92 91,89.7614237 91,87 C91,84.2385763 88.7614237,82 86,82 C83.2385763,82 81,84.2385763 81,87 C81,89.7614237 83.2385763,92 86,92 Z M32,63 C34.7614237,63 37,60.7614237 37,58 C37,55.2385763 34.7614237,53 32,53 C29.2385763,53 27,55.2385763 27,58 C27,60.7614237 29.2385763,63 32,63 Z M89,50 C91.7614237,50 94,47.7614237 94,45 C94,42.2385763 91.7614237,40 89,40 C86.2385763,40 84,42.2385763 84,45 C84,47.7614237 86.2385763,50 89,50 Z M80,29 C81.1045695,29 82,28.1045695 82,27 C82,25.8954305 81.1045695,25 80,25 C78.8954305,25 78,25.8954305 78,27 C78,28.1045695 78.8954305,29 80,29 Z M60,91 C61.1045695,91 62,90.1045695 62,89 C62,87.8954305 61.1045695,87 60,87 C58.8954305,87 58,87.8954305 58,89 C58,90.1045695 58.8954305,91 60,91 Z M35,41 C36.1045695,41 37,40.1045695 37,39 C37,37.8954305 36.1045695,37 35,37 C33.8954305,37 33,37.8954305 33,39 C33,40.1045695 33.8954305,41 35,41 Z M12,60 C13.1045695,60 14,59.1045695 14,58 C14,56.8954305 13.1045695,56 12,56 C10.8954305,56 10,56.8954305 10,58 C10,59.1045695 10.8954305,60 12,60 Z"
              id="Combined-Shape"
            >
            </path>
          </pattern>
        </SvgPattern>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div v-if="post" class="text-lg max-w-prose mx-auto">
        <div class="flex justify-between">
          <div>
            <GoBack />
          </div>
          <div class="space-x-2" v-if="isAdmin">
            <button
              type="button"
              @click.prevent="destroy(post.slug)"
              class="go-back-btn"
            >
              delete
            </button>
            <PostUpdateButton :slug="post.slug" />
          </div>
        </div>

        <div v-if="deletingError">{{ deletingError }}</div>

        <h1>
          <span
            class="dark:text-white block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
            >Introducing</span
          >
          <span
            class="dark:text-white mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >{{ post.title }}</span
          >
        </h1>
        <p
          class="mt-8 text-xl text-gray-500 dark:text-white leading-8"
          v-html="post.body"
        ></p>
      </div>

      <div v-else class="text-lg max-w-prose mx-auto">
        <PostSkeleton />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onUpdated } from 'vue';
import axios from 'axios';
import SvgPattern from '@/components/SvgPattern.vue';
import GoBack from '@/components/GoBack.vue';
import PostSkeleton from '@/components/PostSkeleton.vue';
import PostUpdateButton from '@/views/post/PostUpdateButton.vue';
import { useRouter } from 'vue-router';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/materia.css';

const patterns = ref([
  {
    class: 'absolute top-12 left-full transform translate-x-32',
    id: '74b3fd99-0a6f-4271-bef2-e80eeafdf357',
    color: 'text-sky-100',
    url: 'url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)',
  },
  {
    class:
      'absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32',
    id: 'f210dbf6-a58d-4871-961e-36d5016a0f49',
    color: 'text-sky-200',
    url: 'url(#f210dbf6-a58d-4871-961e-36d5016a0f49)',
  },
  // {
  //   'class': 'absolute bottom-12 left-full transform translate-x-32',
  //   'id': 'd3eb07ae-5182-43e6-857d-35c643af9034',
  //   'color': 'text-blue-200',
  //   'url':'url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
  // },
]);

const isAdmin = ref(false);
const router = useRouter();
const post = ref('');
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});
const deleting = ref(false);
const deletingError = ref('');

function fetch(slug) {
  axios
    .get(`/api/posts/${slug}`)
    .then(function (response) {
      post.value = response.data;
    })
    .catch(function (error) {
      alert(error);
      console.log(error);
    });
}

function destroy(slug) {
  deleting.value = true;

  axios
    .delete(`/api/posts/${slug}`)
    .then(function (response) {
      console.log('redireting');
      router.push('/');
    })
    .catch(function (error) {
      deletingError.value = error.response.data.message;
      deleting.value = false;
      console.log(error.response.data.message);
    });
}

let user = JSON.parse(localStorage.getItem('user'));
if (user !== null && user.email == 'andiliang9988@gmail.com') {
  isAdmin.value = true;
}

fetch(props.slug);

onUpdated(() => {
  console.log('on updated is trigger');
  hljs.highlightAll();
});
</script>
