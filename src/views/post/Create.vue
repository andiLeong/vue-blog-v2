<template>
  <form
    @submit.prevent="store"
    @keydown="form.errors.clear($event.target.name)"
    class="space-y-8 divide-y divide-gray-200 my-10 mb-10 max-w-7xl mx-auto px-6"
  >
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <BaseInput
              labelClass="block text-sm font-medium text-gray-700 dark:text-white"
              placeHolder="Wite a nice title"
              class="mt-1 shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
              label="Title"
              type="text"
              v-model="form.title"
              :error="form.errors.get('title')"
            />
          </div>

          <div class="sm:col-span-4">
            {{ form.body }}
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 dark:text-white"
            >
              About
            </label>
            <!-- <div class="mt-1">
              <textarea v-model='form.body' id="about" name="about" rows="3" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border border-gray-300 rounded-md" />
            </div> -->
            <p class="mt-2 text-sm text-gray-500 dark:text-white">
              Describe the post
            </p>

            <tiptap v-model="form.body" />
          </div>
        </div>
      </div>
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
          <LoadingIndicator
            v-if="isLoading"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          />
          {{ isLoading ? 'Saving In' : 'Save' }}
        </button>

        <Notification
          v-if="submitted"
          timeout="1000"
          body="Your post had been submitted"
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
import LoadingIndicator from '@/components/LoadingIndicator.vue';

export default {
  components: {
    BaseInput,
    Notification,
    Tiptap,
    LoadingIndicator,
  },
  data() {
    return {
      form: new Form({
        title: '',
        body: '',
      }),
      errors: {},
      isLoading: false,
      submitted: false,
      useStore: useStore(),
    };
  },

  methods: {
    store() {
      this.isLoading = true;

      axios
        .post(`/api/posts`, this.form)
        .then((data) => {
          this.form.title = this.form.body = '';
          this.isLoading = false;
          this.submitted = true;
        })
        .catch((error) => {
          this.isLoading = false;
          let status = error.response.status;

          if (status == '401') {
            this.useStore.dispatch('logout');
            return router.push({ name: 'login' });
          }

          if (status == '403' || status == '401') {
            return alert(error.response.data.message);
          }
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });

      this.submitted = false;
    },
  },
};
</script>
