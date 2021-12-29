<template>
  <form
    @submit.prevent="update"
    class="space-y-8 divide-y divide-gray-200 my-10 mb-10 max-w-7xl mx-auto px-6"
  >
    <div class="space-y-8 divide-y divide-gray-200">
      <div v-if="post">
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <BaseInput
              labelClass="block text-sm font-medium text-gray-700 dark:text-white"
              placeHolder="Wite a nice title"
              class="mt-1 shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
              label="Title"
              type="text"
              v-model="post.title"
            />
          </div>

          <div class="sm:col-span-4">
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 dark:text-white"
            >
              About
            </label>
            <div class="mt-1">
              <tiptap v-model="post.body" />
            </div>
          </div>
        </div>
      </div>

      <div v-else>loading....</div>
    </div>

    <div class="pt-5">
      <div class="mb-2">
        <p
          class="mt-1 text-sm text-red-500 italic"
          v-if="errors"
          v-for="(error, index) in errors"
          :key="index"
        >
          {{ error[0] }}
        </p>
      </div>
      <div class="flex justify-start">
        <button
          type="submit"
          :disabled="isLoading"
          :class="{ 'cursor-not-allowed ': isLoading }"
          class="primary-btn"
        >
          <svg
            v-if="isLoading"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {{ isLoading ? 'Updating In' : 'Update' }}
        </button>

        <Notification
          v-if="submitted"
          body="Your post had been edited"
          footer="You can view it now."
        />
      </div>
    </div>
  </form>
</template>

<script>
import BaseInput from '@/components/forms/BaseInput.vue';
import Form from '@/form/form.js';
import Notification from '@/components/Notification.vue';
import axios from 'axios';
import Tiptap from '@/components/Tiptap.vue';
import { useStore } from 'vuex';

export default {
  props: ['slug'],
  components: {
    BaseInput,
    Notification,
    Tiptap,
  },
  data() {
    return {
      post: '',
      errors: {},
      isLoading: false,
      submitted: false,
      isAdmin: false,
      store: useStore(),
    };
  },

  created() {
    this.fetch(this.slug);
  },

  methods: {
    fetch(slug) {
      axios
        .get(`/api/posts/${slug}`)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },

    update() {
      this.isLoading = true;

      //     await axios.get('/sanctum/csrf-cookie')
      //     await axios.post('/login',{'email':'andiliang9988@gmail.com','password':'password'})

      //       let response = await axios.get('/api/user')

      // console.log(response)

      // axios.get(`/api/user`)
      //   .then( (response) => {
      //     this.isLoading = false;
      //     this.submitted = true;
      //     console.log(response.data)
      //   })
      //   .catch( (error) => {
      //     this.isLoading = false;
      //     alert(error)
      //     this.errors = error
      //     console.log(error);
      //   })

      axios
        .patch(`/api/posts/${this.slug}`, this.post)
        .then((response) => {
          this.isLoading = false;
          this.submitted = true;
          console.log(response.data);
        })
        .catch((error) => {
          this.isLoading = false;
          let status = error.response.status;
          if (status == '401') {
            this.store.dispatch('logout');
            return router.push({ name: 'login' });
          }
          if (status == '403') {
            return alert(error.response.data.message);
          }
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
