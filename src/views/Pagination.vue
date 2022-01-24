<template>
  <section class="max-w-7xl mx-auto mt-10">
    <div class="flex flex-col">
      <h2 class="text-gray-600 mb-10">Paginator example</h2>

      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table
              class="min-w-full divide-y divide-gray-200"
              v-if="posts.length"
            >
              <thead class="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white" v-for="post in posts" :key="post.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ post.title }}
                  </td>
                </tr>
              </tbody>

              <Paginator
                v-if="pagination.current_page"
                :pagination="pagination"
                @switched-page="switchPage"
              />
              <!-- <Paginator :pagination="pagination" @switched-page="fetch" /> -->
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Paginator from '@/components/Paginator.vue';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const posts = ref([]);
const pagination = ref({});
const route = useRoute();
const router = useRouter();
const page = route.query.page || 1;

watch(
  () => route.query.page,
  (page, prevPage) => {
    fetch(page);
  }
);

console.log(route.query);

function fetch(page) {
  console.log('fetching data at page   :   ' + page);
  axios
    .get(`/api/posts?page=${page}`)
    .then(function (response) {
      posts.value = response.data.data;
      pagination.value = response.data;
      delete pagination.value.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function switchPage(page) {
  router.replace({
    name: 'pagination',
    query: {
      page,
    },
  });
}

fetch(page);
</script>
