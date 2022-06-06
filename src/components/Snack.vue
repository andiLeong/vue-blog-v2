<template>
    <div v-if="show" class="fixed w-full top-0 left-0 flex justify-center">
        <transition
            enter-active-class="transform ease-out duration-300 transition"
            enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div class="text-white px-8 py-2 rounded-lg text-sm mt-6" :class="getType">
                {{ text }}
            </div>
        </transition>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    type: {
        default: 'primary',
    },
    text: {
        required: true,
    },
})
const show = ref(true);

setTimeout(() => {
    if (show.value) {
        show.value = false;
    }
}, 2000)

const getType = computed(() => {

    if (props.type === 'success') {
        return 'bg-gradient-to-r from-teal-500 to-teal-300';
    }

    if (props.type === 'danger') {
        return 'bg-gradient-to-r from-rose-400 to-rose-300';
    }

    if (props.type === 'warning') {
        return 'bg-gradient-to-r from-amber-500 to-amber-300';
    }
    return 'bg-gradient-to-r from-sky-500 to-sky-300';
})

</script>
