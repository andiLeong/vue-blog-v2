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
import {useUserStore} from "@/store/user"

defineProps(['active'])

function logout() {
    axios
        .post(`/logout`)
        .then((response) => {
            console.log(response);
            useUserStore().logout()
        })
        .catch((error) => {
            console.log(error);
        });
}

</script>

<style scoped>

</style>