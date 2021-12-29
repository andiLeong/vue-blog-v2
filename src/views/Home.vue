<template>
  <div class="home">
    <h1>Home</h1>

    <p v-if="auth">welcome {{ user.name }}</p>
    <p v-else>welcome guest</p>

    <p v-if="isAdmin">welcome admin</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const auth = ref(store.state.loggedIn);
const user = ref(store.state.user);
const isAdmin = ref(store.state.isAdmin);
</script>
