<template>
    <button
        type="button"
        @click.prevent="change"
        class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        role="switch"
        aria-checked="false"
    >
        <span class="sr-only">Toggle Button</span>
        <span
            aria-hidden="true"
            class="pointer-events-none absolute h-full w-full rounded-md bg-white"
        ></span>
        <span
            aria-hidden="true"
            :class="toggle ? 'bg-sky-600' : 'bg-gray-200'"
            class="pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
        ></span>

        <span
            aria-hidden="true"
            :class="toggle ? 'translate-x-5' : 'translate-x-0'"
            class="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"
        ></span>
    </button>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['setToTrue', 'setToFalse', 'changed']);

const props = defineProps({
    state: {
        type: Boolean,
        default: false,
    },
    storage: {
        type: String,
        required: false,
    },
});

const toggle = ref(getIniToggleValue());

function change() {
    if (toggle.value) {
        emit('setToFalse');
    } else {
        emit('setToTrue');
    }

    toggle.value = !toggle.value;
    if (props.storage) {
        localStorage.setItem(props.storage, toggle.value);
    }
    emit('changed', toggle.value);
}

function getIniToggleValue() {
    return props.storage
        ? localStorage.getItem(props.storage) === 'true'
        : props.state;
}
</script>

<style scoped></style>
