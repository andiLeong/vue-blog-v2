<template>
    <li class="px-2 py-1 rounded-md transition">
        <a :href="`/posts/${post.slug}`" class="block">{{ post.title }}</a>
    </li>
</template>

<script setup>
defineProps(['post']);
</script>
