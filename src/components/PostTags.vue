<template>

    <div class="flex flex-wrap">
        <div
            v-if="index === 0"
            class="mb-2"
            v-for="(tag) in post.tags"
        >
            <span
                v-html="tag.name"
                class="dark:text-white dark:bg-transparent bg-transparent text-white post-tags"
            >
            </span>
        </div>

        <div
            v-else
            class="mb-2"
            v-for="(tag) in post.tags"
        >
            <span
                class="dark:text-white dark:bg-transparent post-tags mr-2"
                :class="{
                    'bg-red-100 text-red-800': filterTags(tag.slug,'laravel'),
                    'bg-green-100 text-green-800': filterTags(tag.slug,'vue-js'),
                    'bg-sky-100 text-sky-800': !tags.includes(tag.slug)
                }"
            >
                {{ tag.name }}
            </span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['post', 'index'])
const tags = ['laravel', 'vue-js'];

function filterTags(slug, value) {
    return tags.filter(tag => tag === slug)[0] === value;
}
</script>