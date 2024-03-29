<template>
    <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
            <!-- Current: "bg-sky-50 border-sky-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
            <AppLink
                v-for="(route, index) in routes"
                :key="index"
                :to="route"
                class="dark:hover:text-gray-700 dark:text-gray-100 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium"
            >
                {{ useCapitalise(route.name) }}
            </AppLink>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200" v-if="auth">
            <div class="flex items-center px-4">
                <div class="flex-shrink-0">
                    <img
                        class="h-10 w-10 rounded-full"
                        src="https://avatars.githubusercontent.com/u/68339288?s=48&v=4"
                        alt=""
                    />
                </div>
                <div class="ml-3">
                    <div
                        class="text-base font-medium text-gray-800 dark:text-white"
                    >
                        {{ user.name }}
                    </div>
                    <div
                        class="text-sm font-medium text-gray-500 dark:text-gray-50"
                    >
                        {{ user.email }}
                    </div>
                </div>
            </div>
            <div class="mt-3 space-y-1">
                <a
                    v-for="(dropdown, index) in dropdowns"
                    :key="index"
                    :href="dropdown.url"
                    class="dark:hover:text-gray-700 dark:text-gray-100 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >{{ dropdown.description }}
                </a>

                <DisclosureButton
                    as="a"
                    href="#"
                    class="dark:hover:text-gray-700 dark:text-gray-100 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >Sign out</DisclosureButton
                >
            </div>
        </div>
    </DisclosurePanel>
</template>

<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import { useUserStore } from '@/store/user';
import { ref } from 'vue';
import useCapitalise from '@/composable/useCapitalise';

const props = defineProps(['routes', 'dropdowns']);

const userStore = useUserStore();
const auth = ref(userStore.isLoggedIn);
const user = ref(userStore.user);
const isAdmin = ref(userStore.isAdmin);
</script>
