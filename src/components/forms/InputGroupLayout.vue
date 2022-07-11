<template>

    <div :class="space">
        <label :for="label" class="form-label">{{ label }}</label>
        <p v-if="description" class="mt-2 text-sm text-gray-500 dark:text-white">
            {{ description }}
        </p>
        <slot/>
    </div>

</template>

<script setup>
defineProps({
    description: {
        required: false,
        type:String
    },
    label: {
        required: true,
        type:String
    },
    space: {
        required: false,
        default:'space-y-1',
        type:String
    }
})
</script>

<style scoped>

</style>