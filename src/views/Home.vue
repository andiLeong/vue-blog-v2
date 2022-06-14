<template>
    <div class="pt-4">
        <div class="py-4 xl:py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 overflow-hidden">
            <div class="max-w-max lg:max-w-7xl mx-auto">
                <div class="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div class="text-base max-w-prose lg:max-w-none">
                        <p class="dark:text-white" v-if="userStore.isLoggedIn">welcome {{ userStore.user.name }}</p>
                        <p class="dark:text-white" v-if="userStore.isAdmin">welcome admin</p>

                        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Hi, I am andi liang,
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <div class="px-4 py-2 relative dark:bg-gray-600 rounded bg-zinc-100 md:p-6">
                        <div class="lg:grid lg:grid-cols-2 lg:gap-6">
                            <div class="prose prose-indigo prose-lg text-gray-500 dark:text-white lg:max-w-none">
                                <p>
                                    A 2 years full stack php <span class="text-red-500 font-semibold dark:text-red-400">laravel</span> +
                                    <span class="text-green-500 font-semibold">vue</span> web developer.
                                    Actually this blog was built on top of laravel + vue. Make use of laravel act as
                                    backend,
                                    utilities vue router to make SPA to improve user experience.
                                    For the style I love using utility css framework tailwind.
                                </p>

                                <h3 class="dark:text-white">Skills</h3>
                                <div>
                                    <div v-for="skill in skills" :key="skill" class="flex items-center">
                                        <div class="mr-2">
                                            <svg class="h-6 w-6 text-sky-400" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                 aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                        <div>{{ skill }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-white lg:mt-0">
                                <h3 class="dark:text-white">Advantage</h3>

                                <div class="space-y-2">
                                    <div v-for="advantage in advantages" :key="advantage"> {{advantage}}</div>
                                </div>

                                <h3  class="dark:text-white">Experience</h3>
                                <p>
                                    Maintain and develop several projects from previous company, that includes a small
                                    ecommerce site,
                                    a job posting site, A social insurance buying platform, a construction monitor
                                    platform
                                </p>

                                <h3  class="dark:text-white">Code Review</h3>
                                <p>
                                    had done some side code project where you can check and view my code style
                                    including:
                                </p>
                                <div class="space-y-0">
                                    <div v-for="review in codeReviews" :key="review.name">
                                        <a class="text-sky-400 dark:text-blue-400" :href="review.url">{{review.name}}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useUserStore} from '@/store/user'
import {ref} from "vue";

const userStore = useUserStore();

const skills = ref([
    'native php',
    'php framework --- laravel, codeigniter',
    'javascript framework --- vue js',
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
])

const codeReviews = ref([
    {name:'collection',url:'https://github.com/andiLeong/collection'},
    {name:'aliyun sms',url:'https://github.com/andiLeong/aliyunSms'},
    {name:'a simple e-commerce',url:'https://github.com/andiLeong/my-e-commence'},
    {name:'a datatable with vue',url:'/order'},
    {name:'vue paginator',url:'/pagination'}
])

const advantages = ref([
    'Has strong oop fundamental concept, aim to write clean , expressive and maintainable codes.',
    'Understand and use major design principles/pattern, like strategy pattern, tell don\'t ask, solid, decorator, adaptor etc..',
    'Having a habit refactor code after written aims to make it perfect, not a guy write code then go home.',
    'Having a moderate level of understanding to laravel, from bootstrap the app, IOC container, Eloquent, service provider, collection etc.. .',
    'Always write test first, or sometimes later to make sure the application is well tested before going live to reduce unnecessary bugs.',
    'Always write raw sql to see whats happening without reply on Eloquent too much.'
])
</script>
