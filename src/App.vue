<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content}` : `Andi Liang's blog site about laravel | php | vue js |css | javascript` }}</template>
    </metainfo>

  <div :class="myTheme" class="flex flex-col items-stretch min-h-screen">
    <AppNavigation @change="myTheme = $event"></AppNavigation>

    <div class="flex-1 dark:bg-gray-800">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
    <AppPalettesModal />
</template>

<script setup>
import { ref } from 'vue';
import { useMeta } from 'vue-meta'
import {useThemeStore} from '@/store/theme'
import {useUserStore} from "@/store/user";
import AppPalettesModal from '@/components/AppPalettesModal.vue'
import SearchModal from "@/model/SearchModal";
import AppNavigation from "@/components/AppNavigation.vue";

const myTheme = ref();
useThemeStore().setLocalTheme(myTheme)
useUserStore().setUserFromStorage()

useMeta({
    title: '',
    description: 'I\'m a laravel + vue full stack developer,I write my blog about web development',
    htmlAttrs: { lang: 'en', amp: true }
})

</script>
