<template>

    <div class="relative py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        <div class="h-8 bg-gradient-to-b dark:from-gray-800 from-gray-50 sticky top-0 "></div>
        <div v-if="post" class="text-lg  ">
            <div class="blog-button-group">
                <div>
                    <GoBack/>
                </div>
                <div class="blog-buttons" v-if="isAdmin">
                    <PostDeleteButton @postDeleted="router.push('/')" :slug="post.slug"/>
                    <PostUpdateButton :slug="post.slug"/>
                </div>
            </div>

            <h1>
                <span
                    class="dark:text-white mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {{ post.title }}
                </span>
            </h1>

            <p class="text-center text-xs mt-4 text-gryay-600 dark:text-gray-400">
                {{ published_at }}
            </p>

            <p class="mt-8 text-xl text-gray-500 dark:text-white leading-8" v-html="post.body">
            </p>
        </div>

        <div v-else class="text-lg max-w-prose mx-auto">
            <PostSkeleton/>
        </div>
    </div>
</template>

<script setup>
import {ref, defineProps, onUpdated, computed, watch} from 'vue';
import GoBack from '@/components/GoBack.vue';
import PostSkeleton from '@/components/PostSkeleton.vue';
import PostUpdateButton from '@/views/post/PostUpdateButton.vue';
import {useRouter} from 'vue-router';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/materia.css';
import moment from 'moment';
import PostDeleteButton from "@/views/post/PostDeleteButton.vue";
import {useFetchAPost} from "@/composable/useFetchAPost";
import {useUserStore} from '@/store/user'
import {useMeta} from 'vue-meta'

const isAdmin = ref(useUserStore().isAdmin);
const router = useRouter();
const props = defineProps({
    slug: {
        type: String,
        required: true,
    },
});

let {post} = useFetchAPost(props.slug);

const published_at = computed(() =>
    moment(post.value.created_at).format('YYYY-MM-DD HH:mm:ss')
);

const {meta} = useMeta({
    title: 'Blog Post Page',
    description: 'Blog Post Page Description',
})


watch(post, (newValue) => {
    meta.title = newValue.title
    meta.description = newValue.shortDescription
})

onUpdated(() => {
    console.log('on updated is trigger');
    hljs.highlightAll();
});
</script>
