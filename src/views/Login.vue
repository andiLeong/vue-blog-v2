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
                            <SubmitButton
                                :loading="isLoading"
                                saving="Logging In"
                                not-saving="Login"
                            />
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
import BaseInput from '@/components/forms/BaseInput.vue';
import { useUserStore } from '@/store/user';

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
    })
);

async function login(credentials) {
    isLoading.value = true;
    useUserStore()
        .login(credentials)
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
</script>
