<template>

    <nav class=" shadow bg-white dark:bg-gray-700"
         :class="{ 'fixed top-0 w-full z-20' : apply}"
    >
        <!-- desktop nav -->
        <div class="hidden  max-w-6xl mx-auto sm:flex justify-between px-4 h-16">

            <div class="flex space-x-8">
                <AppLink
                    v-for="(route , index) in routes"
                    :to="route"
                    :key="index"
                    class="inline-flex items-center text-gray-500 hover:text-gray-700"
                >
                    {{ useCapitalise(route.name) }}
                </AppLink>

                <a @click.prevent="change" class="theme-switcher">
                    <span v-if="themeStore.theme === 'dark'" class="dark:inline">
                        <Moon class="w-6 h-6"/>
                    </span>
                    <span v-else>
                        <Sun class="w-6 h-6"/>
                    </span>
                </a>
            </div>

            <div class="flex items-center space-x-4">
                <div>
                    <SearchModalButton />
                </div>
                <div class="inline-flex items-center">
                    <!-- Profile dropdown -->
                    <AppDropDown v-if="useUserStore().isLoggedIn">
                        <template #trigger>
                            <button>
                                <img class="rounded-full h-8 w-8"
                                     src="https://avatars.githubusercontent.com/u/68339288?s=48&v=4" alt="">
                            </button>
                        </template>

                        <div class="py-1" role="none">
                            <a
                                v-for="(dropdown,index) in dropdowns"
                                :key="index"
                                :href="dropdown.url"
                                class="drop-down-item"
                            >{{ dropdown.description }}
                            </a>
                            <SignOut/>
                        </div>
                    </AppDropDown>
                </div>
            </div>

        </div>

        <!--  mobile nav-->
        <div class="sm:hidden flex justify-end mx-4 h-16">
            <div class="flex items-center">
                <button @click.prevent="open = true" v-if="!open" class="menu-button">
                    <MenuIcon class="block h-6 w-6" aria-hidden="true" />
                </button>
                <button @click.prevent="open = false" v-else class="menu-button">
                    <XIcon class="block h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    </nav>

    <div v-if="open" class="bg-white dark:bg-gray-700 sm:hidden space-y-3 mb-6">
        <AppMobileNavigation :routes="routes" :dropdowns="dropdowns" />
    </div>

</template>

<script setup>
import { ref, watch} from 'vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import useCapitalise from "@/composable/useCapitalise";
import Sun from "@/components/svg/Sun.vue";
import Moon from "@/components/svg/Moon.vue";
import SignOut from "@/components/SignOut.vue";
import { useThemeStore } from '@/store/theme'
import { useUserStore } from '@/store/user'
import {useStickyNavStore} from "@/store/stickyNav";
import AppDropDown from '@/components/AppDropDown.vue'
import SearchModalButton from "@/components/SearchModalButton.vue";
import AppMobileNavigation from "@/components/AppMobileNavigation.vue";

const themeStore = useThemeStore()
const apply = ref(false);
const open = ref(false);

const emit = defineEmits(['change']);

const routes = ref([
    {name: 'home'},
    {name: 'login'},
    {name: 'posts'},
    {name: 'components'},
]);

const dropdowns = ref([
    {description: 'Upload Gallery', name: {name: 'uploader'}, url: '/uploader'},
    {description: 'View Gallery', name: {name: 'gallery'}, url: '/gallery'},
    {description: 'Create Post', name: {name: 'post.create'}, url: '/posts/create'},
]);

function change() {
    emit('change', themeStore.setTheme());
}

watch(() => useStickyNavStore().shouldApply, (newValue) => {
    apply.value = newValue
})
</script>
