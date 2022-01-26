<template>
  <section class="max-w-7xl mx-auto mt-10">
    <AppTableLayout>
      <template v-slot:th>
        <h2 class="text-gray-600 mb-10">Paginator example</h2>
      </template>

      <AppTable>
        <template v-slot:th>
          <th scope="col" class="table-heading">
            
          </th>
        </template>

        <template v-slot:tb>
            <tr class="bg-white" v-for="post in posts" :key="post.id">
                <td class="table-data">
                    {{ post.id }}
                </td>
            </tr>
        </template>

        <template v-slot:footer>
          <Paginator
            v-if="pagination.current_page"
            :pagination="pagination"
            @switched-page="switchPage"
          />
          <!-- <Paginator :pagination="pagination" @switched-page="fetch" /> -->
        </template>
      </AppTable>
    </AppTableLayout>
  </section>
</template>

<script setup>
import AppTableLayout from '@/components/AppTableLayout.vue';
import AppTable from '@/components/AppTable.vue';
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
