<template>
    <div class="mb-10 mt-20 max-w-xl lg:mx-auto mx-4 space-y-5">
        <input
            @input="search"
            type="text"
            v-model="query"
            class="form-input"
            placeholder="Starts Your Search"
        />
        <ul v-if="highlightedPosts" class="space-y-4">
            <li v-for="(result, index) in highlightedPosts" :key="index">
                <a
                    class="block"
                    v-html="result.title"
                    :href="`/posts/${result.slug}`"
                ></a>
            </li>
        </ul>
        <div v-if="loading" class="flex justify-center">
            <Spinner class="animate-spin h-6 w-6 text-sky-600" />
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import _ from 'lodash';
import { useRoute } from 'vue-router';
import usePosts from '@/composable/usePosts';
import Spinner from '@/components/Spinner.vue';

const route = useRoute();
const query = ref(route.query.q);
const { loading, posts, searchPosts } = usePosts();

const highlightedPosts = computed(() => {
    return posts.value.map((post) => {
        let key = query.value;
        if (post.title.includes(key)) {
            post.title = post.title.replace(
                key,
                `<span class="bg-sky-500 text-white ">$&</span>`
            );
        }
        return post;
    });
});

const search = _.debounce((e) => {
    posts.value = [];
    let key = query.value;
    if (!key) {
        return;
    }
    searchPosts(key);
}, 400);

search();
</script>
