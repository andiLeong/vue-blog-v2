<template>
    <div class="pt-4">
        <div
            class="py-4 xl:py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 overflow-hidden"
        >
            <div class="max-w-max lg:max-w-7xl mx-auto">
                <div class="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div class="text-base max-w-prose lg:max-w-none">
                        <p class="dark:text-white" v-if="userStore.isLoggedIn">
                            welcome {{ userStore.user.name }}
                        </p>
                        <p class="dark:text-white" v-if="userStore.isAdmin">
                            welcome admin
                        </p>

                        <span
                            id="me"
                            class="bg-gradient-to-r from-sky-400 to-purple-600 text-transparent bg-clip-text mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
                        >
                            Hi, I am andi liang,
                        </span>
                    </div>
                </div>

                <transition
                    enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="ease-in duration-200"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div v-show="show" class="relative">
                        <div
                            class="px-4 py-2 relative dark:bg-gray-600 rounded bg-zinc-100 md:p-6"
                        >
                            <div class="lg:grid lg:grid-cols-2 lg:gap-6">
                                <div
                                    class="prose prose-indigo prose-lg text-gray-500 dark:text-white lg:max-w-none"
                                >
                                    <p>
                                        A 2 years full stack php
                                        <span
                                            class="inline-block rotate-1 p-1 rounded bg-red-200 text-red-700 font-semibold dark:text-red-400"
                                        >
                                            laravel
                                        </span>
                                        +
                                        <span
                                            class="inline-block rotate-1 p-1 rounded bg-green-200 text-green-700 font-semibold"
                                            >vue
                                        </span>
                                        web developer. Actually this blog was
                                        built on top of laravel + vue. Make use
                                        of laravel act as backend, utilities vue
                                        router to make SPA to improve user
                                        experience. For the style I love using
                                        utility css framework tailwind.In free
                                        time I also study react & react native.
                                    </p>

                                    <h3 class="dark:text-white">Skills</h3>
                                    <div>
                                        <div
                                            v-for="skill in skills"
                                            :key="skill"
                                            class="flex items-center"
                                        >
                                            <div class="mr-2">
                                                <svg
                                                    class="h-6 w-6 text-sky-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>{{ skill }}</div>
                                        </div>
                                    </div>

                                    <h3 class="dark:text-white">Code Review</h3>
                                    <p class="sticky-nav">
                                        had done some side code project where
                                        you can check and view my code style
                                        including:
                                    </p>
                                    <div ref="stickyNav"></div>
                                    <div class="space-y-0">
                                        <div
                                            v-for="review in codeReviews"
                                            :key="review.name"
                                        >
                                            <a
                                                class="text-sky-400 dark:text-blue-400"
                                                :href="review.url"
                                                >{{ review.name }}</a
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-white lg:mt-0"
                                >
                                    <h3
                                        class="bg-gradient-to-r from-sky-400 to-purple-600 text-transparent bg-clip-text"
                                    >
                                        Advantage
                                    </h3>

                                    <div class="space-y-3">
                                        <div
                                            style="font-size: 1.1rem"
                                            :class="
                                                index === 0
                                                    ? 'bg-gradient-to-r from-sky-400 to-purple-600 text-transparent bg-clip-text font-semibold'
                                                    : ''
                                            "
                                            v-for="(
                                                advantage, index
                                            ) in advantages"
                                            :key="advantage"
                                        >
                                            {{ advantage }}
                                        </div>
                                    </div>

                                    <h3 class="dark:text-white">Experience</h3>
                                    <p>
                                        Maintain and develop several projects
                                        from previous company, that includes a
                                        small ecommerce site, a job posting
                                        site, A social insurance buying
                                        platform, a construction monitor
                                        platform
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user';
import { onMounted, ref } from 'vue';
import { useStickyNavStore } from '@/store/stickyNav';
import { useMeta } from 'vue-meta';
import TypeIt from 'typeit';

const userStore = useUserStore();
const useStickNavStore = useStickyNavStore();
const stickyNav = ref();
const show = ref(false);

const skills = ref([
    'native php',
    'php framework --- laravel, codeigniter',
    'javascript framework --- vue/react js',
    'database -- redis , mysql',
    'server -- nginx',
    'version control -- git',
    'able to use Vim in daily development',
    'Test Driven Development using phpunit',
    'A vue echo system , vue router, vuex , pinia ,vite',
    'alpine js',
    'tailwind css && bootstrap css',
    'other laravel community package : livewire , inertia',
    'deployment LNMP on digitalocean or other vps',
]);

const codeReviews = ref([
    {
        name: 'php mvc framework',
        url: 'https://github.com/andiLeong/framework',
    },
    { name: 'collection', url: 'https://github.com/andiLeong/collection' },
    { name: 'aliyun sms', url: 'https://github.com/andiLeong/aliyunSms' },
    {
        name: 'validation package',
        url: 'https://github.com/andiLeong/validation',
    },
    { name: 'vue component collection', url: '/components' },
    { name: 'react app', url: 'https://react-show-case.andiliang.com' },
]);

const advantages = ref([
    'Having habit to review laravel source code to understand how it works under the hood',
    'Has strong oop fundamental concept, aim to write clean , expressive and maintainable codes.',
    "Understand and use major design principles/pattern, like strategy pattern, tell don't ask, solid, decorator, adaptor etc..",
    'Having a habit refactor code after written aims to make it perfect, not a guy write code then go home.',
    'Having a moderate level of understanding to laravel, from bootstrapping, IOC container, Eloquent, collection etc.. .',
    'Write test, to make sure the application is well tested before going live to reduce unnecessary bugs.',
    'Always write raw sql to see whats happening without reply on Eloquent too much.',
]);

onMounted(() => {
    let observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                useStickNavStore.apply(true);
            } else {
                useStickNavStore.apply(false);
            }
        },
        { threshold: 0.25 }
    );
    observer.observe(stickyNav.value);

    new TypeIt('#me', {
        afterComplete: async () => {
            show.value = true;
        },
    }).go();
});

useMeta({
    title: 'Andi liang is a laravel + vue full stack developer | vue js | javascript | laravel | php | single page application. I write my blog about my development journey',
    description: 'A short introduction about me',
    htmlAttrs: { lang: 'en' },
});
</script>
