<template>
  <div class="pt-10">
    <div
      class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div class="mt-8 sm:mx-auto mx-6 sm:w-full sm:max-w-md">
        <div
          class="dark:bg-gray-700 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <form class="space-y-6" @submit.prevent="submit">
            <div>
              <BaseInput
                labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                placeHolder="abc@abc.com"
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                label="Email"
                type="email"
                v-model="email"
                :error="errors.email"
              />
            </div>

            <div>
              <BaseInput
                labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                placeHolder="Your strong password"
                class="mt-1 ppearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                label="Password"
                type="password"
                v-model="password"
                :error="errors.password"
              />
            </div>

            <div>
              <button
                type="submit"
                :disabled="isLoading"
                :class="{ 'cursor-not-allowed ': isLoading }"
                class="w-full primary-btn"
              >
                <LoadingIndicator
                  v-if="isLoading"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                />

                {{ isLoading ? 'Signing In' : 'Sign In' }}
              </button>
            </div>

            <div class="text-red-500 text-sm italic font-medium">
              {{ loginError }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { object, string, number, boolean } from 'yup';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/forms/BaseInput.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

const validationSchema = ref(
  object({
    email: string().required().email(),
    password: string().required().min(3),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const isLoading = ref(false);
const loginError = ref('');

const submit = ref(
  handleSubmit((values) => {
    login(values);
    console.log('submit', values);
  })
);

const store = useStore();
const router = useRouter();

async function login(credentials) {
  isLoading.value = true;
  store
    .dispatch('login', credentials)
    .then(() => {
      isLoading.value = false;
      window.location = '/';
    })
    .catch((err) => {
      isLoading.value = false;
      loginError.value = err.response.data.message;
      console.log(err.response.data.message);
    });
}

// const login = async (credentials) => {

//   await axios.get('/sanctum/csrf-cookie')
//   await axios.post('/login',credentials)

//   try{
//     let response = await axios.get('/api/user')

//     localStorage.setItem('isLogin',true)
//     localStorage.setItem('user', JSON.stringify(response.data)  )

//     window.location.replace("/");

//   } catch(e) {

//     localStorage.removeItem('isLogin');
//     localStorage.removeItem('user');

//   }

// }
</script>
