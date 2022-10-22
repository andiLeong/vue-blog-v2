<template>
    <div class="relative dropdown inline-block text-left">
        <div @click.prevent="show = !show">
            <slot name="trigger"></slot>
        </div>
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div
                v-if="show"
                class="z-30 origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="direction"
            >
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
const props = defineProps({
    direction: {
        required: false,
        default: 'right',
    },
});
const show = ref(false);
const direction = computed(() => {
    if (props.direction === 'right') {
        return 'right-0';
    }
    return 'left-0';
});

watch(show, () => {
    if (show.value) {
        document.addEventListener('click', clickOutside);
    }
});

function clickOutside(e) {
    if (!e.target.closest('.dropdown')) {
        show.value = false;
        document.removeEventListener('click', clickOutside);
    }
}
</script>

<style scoped></style>
