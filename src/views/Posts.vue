<template>
    <!--    class="mt-4 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 "-->
    <div class="pt-10 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div class="relative mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div v-if="posts.length" class="blogs-container">
                <div
                    v-for="(post, index) in posts"
                    :key="post.id"
                    style="min-height: 8em"
                    class="space-y-4 py-3 mb-4 ml-1 mr-2 md:mx-0"
                >
                    <PostTags :post="post" :index="index" />
                    <AppLink
                        class="block mt-4 mb-3"
                        :to="{
                            name: 'posts.show',
                            params: { slug: post.slug },
                        }"
                    >
                        <p
                            class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                            {{ post.title }}
                        </p>
                        <p class="mt-3 text-base text-gray-500 dark:text-white">
                            {{ post.shortDescription }}
                        </p>
                    </AppLink>
                </div>
                <LoadMore @load="loadMore" :key="posts[posts.length - 1].id">
                    <template v-if="page !== lastPage && fetching">
                        <Spinner
                            class="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-600"
                        />
                    </template>
                </LoadMore>
            </div>

            <div
                v-else-if="noPosts"
                class="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-lime-200 text-center text-md"
            >
                No post at the moment !
            </div>

            <div
                v-else
                class="mt-4 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
            >
                <PostsSkeletons />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import PostsSkeletons from '@/components/PostsSkeletons.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import AppLink from '@/components/AppLink.vue';
import Spinner from '@/components/Spinner.vue';
import { useMeta } from 'vue-meta';
import LoadMore from '@/components/LoadMore.vue';
import PostTags from '@/components/PostTags.vue';
import AxiosHttp from '@/model/AxiosHttp';

const posts = ref([]);
const lastPage = ref(null);
const page = ref(1);
const noPosts = ref(false);
const fetching = ref(false);

useMeta({
    title: `Andi Liang's Posts Page`,
    description: `Posts about mysql , php , laravel , veu js , javascript , css and anything about web development`,
});

function fetch() {
    let http = new AxiosHttp();
    http.via('get')
        .to(`/api/posts?page=${page.value}`)
        .before(() => (fetching.value = true))
        .onFailure((error) => console.log(error))
        .onSuccess(({ data }) => {
            fetching.value = false;
            lastPage.value = data.last_page;
            posts.value.push(...data.data);
            if (data.data.length < 1) {
                noPosts.value = true;
            }
        })
        .fire();
}

function loadMore() {
    if (lastPage.value === null || page.value < lastPage.value) {
        page.value++;
    }
}

watch(page, () => {
    fetch();
});

fetch();
</script>
