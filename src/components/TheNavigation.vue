<template>
  <Disclosure
    as="nav"
    class="bg-white shadow dark:bg-gray-700"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div> -->
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
              <span v-if="chosenTheme === 'dark'" class="dark:inline">
                  <Moon  class="w-6 h-6"/>
              </span>
              <span v-else>
                  <Sun  class="w-6 h-6"/>
              </span>
            </a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative z-20" v-if="authenticated">
            <div class="">
              <MenuButton
                class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://avatars.githubusercontent.com/u/68339288?s=48&v=4"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem
                  v-slot="{ active }"
                  v-for="(dropdown, index) in dropdowns"
                  :key="index"
                >
                  <a
                    :href="dropdown.path"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >{{ dropdown.name }}</a
                  >
                </MenuItem>

                <MenuItem v-slot="{ active }">
                 <SignOut :active="active"/>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
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
import { ref } from 'vue';
import { useStore } from 'vuex';
import useCapitalise from "@/composable/useCapitalise";
import Sun from "@/components/svg/Sun.vue";
import Moon from "@/components/svg/Moon.vue";
import SignOut from "@/components/SignOut.vue";
import { useThemeStore } from '@/store/theme'
const themeStore = useThemeStore()

const emit = defineEmits(['change']);

const store = useStore();
const routes = ref([
  { name: 'home' },
  { name: 'login' },
  { name: 'posts' },
  // { name: 'post.create' },
  // { name: 'gallery' },
  // { name: 'uploader' },
]);

const dropdowns = ref([
  { path: '/uploader', name: 'Upload Gallery' },
  { path: '/posts/create', name: 'Create Post' },
]);

const chosenTheme = ref(themeStore.theme);

const authenticated = ref(store.state.loggedIn);
console.log(authenticated.value);

function change() {
    emit('change',
        themeStore.setTheme(chosenTheme)
    );
}
</script>
