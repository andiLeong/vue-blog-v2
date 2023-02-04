<template>
    <div ref="root">
        <slot></slot>
    </div>
</template>

<script setup>
import { throttle } from 'lodash';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    classes: {
        type: Array,
        default: [],
    },
});

const root = ref(null);

onMounted(() => {
    registerEventListener();
});

function registerEventListener() {
    let originalOffsetTop = root.value.offsetTop;

    window.addEventListener(
        'scroll',
        throttle(function () {
            if (window.scrollY >= originalOffsetTop) {
                root.value.classList.add(...scrollClasses.value);
            } else {
                root.value.classList.remove(...scrollClasses.value);
            }
        }),
        300
    );
}

const scrollClasses = computed(() => {
    let defaultClass = ['fixed', 'top-0', 'mt-5'];
    return defaultClass.concat(props.classes);
});
</script>
