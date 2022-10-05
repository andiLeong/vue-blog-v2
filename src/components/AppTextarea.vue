<template>
    <textarea
        :value="body"
        @input="resize"
        ref="textarea"
    >
    </textarea>
</template>

<script setup>
import {nextTick, onMounted, ref} from "vue";

defineProps(['body'])
const emit = defineEmits(['update:body'])
const textarea = ref(null);

function resize(e) {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`

    emit('update:body', e.target.value)
}

const adjustHeight = async () => {
    await nextTick()
    let height = textarea.value.scrollHeight + 10;
    textarea.value.style.height = 'auto'
    textarea.value.style.height = `${height}px`
}

onMounted(() => {
    adjustHeight()
})

</script>