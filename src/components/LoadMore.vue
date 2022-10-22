<template>
    <div ref="more">
        <slot />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['load']);
const more = ref(null);

onMounted(() => {
    let observer = new IntersectionObserver((entries) => {
        // console.log(entries)
        if (entries[0].isIntersecting) {
            // console.log('bottom now')
            emit('load');
        }
    });
    observer.observe(more.value);
});
</script>
