<template>
  <Disclosure
    as="nav"
    class="bg-white shadow dark:bg-gray-700 "
    :class="{ 'fixed top-0 w-full z-20' : apply}"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <AppLink
              v-for="route in routes"
              :to="route"
              :key="route.name"
              class="dark:text-white text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              {{ useCapitalise(route.name) }}
            </AppLink>

            <a
              @click.prevent="change"
              class="cursor-pointer dark:text-white text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              <span v-if="themeStore.theme === 'dark'" class="dark:inline">
                  <Moon  class="w-6 h-6"/>
              </span>
              <span v-else>
                  <Sun  class="w-6 h-6"/>
              </span>
            </a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <!-- Search Palettes -->
            <button @click.prevent="openSearchModal" id="search-button" class="js-search-button rounded-full inline-flex items-center text-gray-400 p-2 bg-gray-200 hover:bg-gray-500 transition-all border border-transparent">
                <svg  class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
            </button>

            <!-- Profile dropdown -->
            <AppDropDown v-if="useUserStore().isLoggedIn">
                <template #trigger>
                    <button class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        <span class="sr-only">Open user menu</span>
                        <img class="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/68339288?s=48&v=4" alt="profile-picture"/>
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
                    <SignOut />
                </div>
            </AppDropDown>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <TheMobileNavigation :routes="routes" :dropdowns="dropdowns"/>
  </Disclosure>
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
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import TheMobileNavigation from '@/components/TheMobileNavigation.vue';
import {onMounted, ref, watch} from 'vue';
import useCapitalise from "@/composable/useCapitalise";
import Sun from "@/components/svg/Sun.vue";
import Moon from "@/components/svg/Moon.vue";
import SignOut from "@/components/SignOut.vue";
import { useThemeStore } from '@/store/theme'
import { useUserStore } from '@/store/user'
import {useStickyNavStore} from "@/store/stickyNav";
import AppDropDown from '@/components/AppDropDown.vue'
import SearchModal from "@/model/SearchModal";


const searchModal = new SearchModal()
const themeStore = useThemeStore()
const apply = ref(false);

const emit = defineEmits(['change']);

const routes = ref([
  { name: 'home' },
  { name: 'login' },
  { name: 'posts' },
  { name: 'components' },
]);

const dropdowns = ref([
    { description: 'Upload Gallery',name:{ name: 'uploader' },url:'/uploader'},
    { description: 'View Gallery',name:{ name: 'gallery'} ,url:'/gallery'},
    { description: 'Create Post', name:{name: 'post.create'} ,url:'/posts/create'},
]);

function change() {
  emit('change', themeStore.setTheme());
}

function openSearchModal() {
  console.log('opening from nav bar')
    searchModal.opens()
}

watch( () => useStickyNavStore().shouldApply, (newValue) => {
    apply.value = newValue
})
</script>
