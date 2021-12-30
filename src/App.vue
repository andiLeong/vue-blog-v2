<template>
  <div :class="myTheme" class="flex flex-col items-stretch min-h-screen">
    <TheNavigation @change="action"></TheNavigation>

    <div class="flex-1 dark:bg-gray-800">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import { useStore } from 'vuex';
import { ref, computed, onMounted } from 'vue';

const store = useStore();
const myTheme = ref();

const user = localStorage.getItem('user');

isLogin(user);
// console.log('app component is created !');

// if (user) {
//   const userData = JSON.parse(user);
//   store.commit('SET_USER_DATA', userData);
// }

function isLogin(user) {
  // console.log('exprie time is   ' + JSON.parse(user).experieAt);
  //userstill login if expire time greate than now
  if (user !== null && Date.now() < JSON.parse(user).experieAt) {
    // console.log('persisting user to vue x');
    const userData = JSON.parse(user);
    store.commit('SET_USER_DATA', userData);
    return;
  } else {
    if (user !== null) {
      localStorage.removeItem('user');
      // console.log('user expired !! removing from storage');
    }
  }
}

function action(theme) {
  myTheme.value = theme;
}

const localTheme = localStorage.getItem('theme');
if (localTheme) {
  myTheme.value = localTheme;
  store.commit('SET_THEME', localTheme);
}
</script>
