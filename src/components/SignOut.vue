<template>

    <a
        @click.prevent="logout"
        href="#"
        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
    >
        Sign out
    </a>
</template>

<script setup>
import {useStore} from "vuex";

defineProps(['active'])
const store = useStore();

function logout() {
    axios
        .post(`/logout`)
        .then((response) => {
            console.log(response);
            store.dispatch('logout');
        })
        .catch((error) => {
            console.log(error);
        });
}

</script>

<style scoped>

</style>