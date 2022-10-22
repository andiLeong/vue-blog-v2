<template>
    <span ref="counter" v-text="count"></span>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
const props = defineProps(['to']);
const count = ref(0);
const interval = ref(null);
const increment = ref(Math.ceil(props.to / 20));
const inView = ref(false);
const counter = ref(null);

watch(inView, (newValue) => {
    if (newValue) {
        interval.value = setInterval(() => start(), 40);
    }
});

onMounted(() => {
    let observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                inView.value = true;
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(counter.value);
});

function start() {
    if (increment.value + count.value >= props.to) {
        count.value = props.to;
        return clearInterval(interval.value);
    }
    count.value += increment.value;
}
</script>
