<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `Andi Liang's blog site about laravel | php | vue js |css | javascript` }}</template>
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
import { ref } from 'vue';
import { useMeta } from 'vue-meta'
import {useThemeStore} from '@/store/theme'
import {useUserStore} from "@/store/user";

const myTheme = ref();
useThemeStore().setLocalTheme(myTheme)
useUserStore().setUserFromStorage()

useMeta({
    title: '',
    description: 'I\'m a laravel + vue full stack developer,I write my blog about web development',
    htmlAttrs: { lang: 'en', amp: true }
})

</script>
