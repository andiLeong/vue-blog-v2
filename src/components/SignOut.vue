<template>
    <template v-if="isMobile">
        <a
            @click.prevent="logout"
            href="#"
            class="dark:bg-gray-700 dark:text-white text-gray-500 block px-3 py-2"
        >
            Sign out
        </a>
    </template>

    <template v-else>
        <a
            @click.prevent="logout"
            href="#"
            :class="[
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700',
            ]"
        >
            Sign out
        </a>
    </template>
</template>

<script setup>
import { useUserStore } from '@/store/user';
import useHandleAjaxError from '@/composable/useHandleAjaxError';

defineProps({
    active: {
        required: false,
    },
    isMobile: {
        type: Boolean,
        default: false,
    },
});

function logout() {
    axios
        .post(`/logout`)
        .then((response) => {
            console.log(response);
            useUserStore().logout();
        })
        .catch((error) => {
            useHandleAjaxError(error);
            console.log(error);
        });
}
</script>

<style scoped></style>
