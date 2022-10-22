<template>
    <button type="button" @click.prevent="destroy()" class="go-back-btn">
        delete
    </button>
</template>

<script setup>
import useHandleAjaxError from '@/composable/useHandleAjaxError';

const props = defineProps(['slug']);
const emit = defineEmits(['postDeleted']);

function destroy() {
    if (confirm('Are you sure you want to delete this post ?') == false) {
        return;
    }

    axios
        .delete(`/api/posts/${props.slug}`)
        .then(() => {
            emit('postDeleted');
        })
        .catch((error) => {
            alert(useHandleAjaxError(error));
        });
}
</script>
