<template>
    <form
        @submit.prevent="store"
        class="space-y-8 divide-y divide-gray-200 my-10 mb-10 max-w-7xl mx-auto px-6"
    >
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-4">
                <InputGroupLayout label="Title">
                    <input
                        v-model="form.title"
                        id="Title"
                        class="form-input"
                        type="text"
                        placeholder="Write a nice title"
                    />
                </InputGroupLayout>
            </div>

            <div class="sm:col-span-4">
                <CreatePostTags @updateTag="form.tags = $event" />
            </div>

            <div class="sm:col-span-4">
                {{ form.body }}
                <InputGroupLayout label="About" description="Describe the post">
                    <tiptap v-model="form.body" @typing="updateBody" />
                </InputGroupLayout>
            </div>
        </div>

        <div class="pt-5">
            <div class="mb-2">
                <ValidationErrors v-if="errors" :errors="errors" />
            </div>
            <div class="flex justify-start">
                <SubmitButton :loading="isLoading" />
            </div>
        </div>
    </form>
</template>

<script setup>
import Form from '@/form/form.js';
import Tiptap from '@/components/Tiptap.vue';
import { ref } from 'vue';
import CreatePostTags from '@/components/CreatePostTags.vue';
import InputGroupLayout from '@/components/forms/InputGroupLayout.vue';
import useHandleAjaxError from '@/composable/useHandleAjaxError';
import { useRouter } from 'vue-router';
import AxiosHttp from '@/model/AxiosHttp';
import _ from 'lodash';

const form = ref({
    title: '',
    tags: [],
    body: getBody(),
});
const errors = ref({});
const isLoading = ref(false);
const router = useRouter();

function store() {
    let http = new AxiosHttp();
    http.via('post')
        .to(`/api/posts`)
        .payload(form.value)
        .before(() => (isLoading.value = true))
        .onFailure((error) => {
            isLoading.value = false;
            errors.value = useHandleAjaxError(error);
        })
        .onSuccess(() => {
            localStorage.removeItem('content');
            router.push({ name: 'posts' });
        })
        .fire();
}

function getBody() {
    return localStorage.getItem('content');
}

const updateBody = _.throttle(function (value) {
    form.value.body = value;
    localStorage.setItem('content', value);
}, 300);
</script>
