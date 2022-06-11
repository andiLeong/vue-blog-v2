<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `Andi Liang's Blog` }}</template>
    </metainfo>

  <div :class="myTheme" class="flex flex-col items-stretch min-h-screen">
    <TheNavigation @change="myTheme = $event"></TheNavigation>

    <div class="flex-1 dark:bg-gray-800">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useMeta } from 'vue-meta'
import {useThemeStore} from '@/store/theme'

const store = useStore();
const myTheme = ref();
useThemeStore().setLocalTheme(myTheme)

const user = localStorage.getItem('user');

if (user) {
  const userData = JSON.parse(user);
  store.commit('SET_USER_DATA', userData);
}

useMeta({
    title: '',
    htmlAttrs: { lang: 'en', amp: true }
})

</script>
