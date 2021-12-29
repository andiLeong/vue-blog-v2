<template>logging out</template>

<script setup>
// import {reactive , defineEmits , computed} from 'vue';
import { useRouter } from 'vue-router';
// import axios from 'axios'
const router = useRouter();

console.log('hi');

// const logout = async () => {

// console.log('hi');
// await axios.post('/logout')

localStorage.removeItem('isLogin');
localStorage.removeItem('user');

// router.push('/')
window.location.replace('/');

// }
// logout
</script>
