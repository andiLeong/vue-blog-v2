<template>
    <div class="max-w-4xl lg:max-w-6xl md:mx-auto mx-4 space-y-5">
        <h1 class="text-xl font-bold text-gray-500">{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps(['title'])
</script>