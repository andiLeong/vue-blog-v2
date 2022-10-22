<template>
    <ValidationError
        class="mt-1 text-sm text-red-500 italic"
        v-if="errors"
        v-for="(error, index) in errors"
        :key="index"
    >
        {{ error[0] }}
    </ValidationError>
</template>

<script setup>
import ValidationError from '@/components/validation/ValidationError.vue';
defineProps(['errors']);
</script>
