<template>
    <ul class="">
        <li v-for="(route, index) in routes">
            <AppLink
                :to="route"
                :key="index"
                class="dark:bg-gray-700 dark:text-white text-gray-700 font-medium block px-3 py-2"
            >
                {{ useCapitalise(route.name) }}
            </AppLink>
        </li>
    </ul>
    <div class="space-y-4 my-4" v-if="auth">
        <div class="mx-4 flex items-center space-x-4">
            <img
                class="dark:border dark:border-white dark:border-2 rounded-full h-8 w-8"
                src="https://avatars.githubusercontent.com/u/68339288?s=48&v=4"
                alt=""
            />
            <p class="dark:text-gray-100 text-gray-700">{{ user.name }}</p>
        </div>

        <ul class="">
            <li v-for="(dropdown, index) in dropdowns" :key="index">
                <a
                    class="dark:bg-gray-700 dark:text-white text-gray-500 block px-3 py-2"
                    :href="dropdown.url"
                >
                    {{ dropdown.description }}
                </a>
            </li>
            <li>
                <SignOut :is-mobile="true" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user';
import { ref } from 'vue';
import useCapitalise from '@/composable/useCapitalise';
import SignOut from '@/components/SignOut.vue';

const props = defineProps(['routes', 'dropdowns']);

const userStore = useUserStore();
const auth = ref(userStore.isLoggedIn);
const user = ref(userStore.user);
</script>
