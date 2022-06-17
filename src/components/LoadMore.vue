<template>
    <div v-observe-visibility="{
        callback: toBottom,
        intersection: {
            threshold : '0.9'
        },
    }">
        <slot/>
    </div>
</template>

<script setup>
const emit = defineEmits(['load'])

function toBottom(inView) {
    if (inView) {
        console.log('bottom now')
        emit('load')
    }
}
</script>