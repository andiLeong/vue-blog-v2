<template>
    <!--    <snack type="primary" v-if="submitted" text="Hey, your post had been updated !"/>-->

    <form
        @submit.prevent="update"
        class="space-y-8 divide-y divide-gray-200 my-10 mb-10 max-w-7xl mx-auto px-6"
    >
        <div class="space-y-8 divide-y divide-gray-200">
            <div v-if="post">
                <div
                    class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                >
                    <div class="sm:col-span-4">
                        <BaseInput
                            labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                            placeHolder="Wite a nice title"
                            class="mt-1 shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            label="Title"
                            type="text"
                            v-model="post.title"
                        />
                    </div>

                    <div class="sm:col-span-4">
                        <label
                            for="about"
                            class="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            About
                        </label>
                        {{ post.body }}
                        <div class="mt-1">
                            <tiptap
                                v-model="post.body"
                                @typing="post.body = $event"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>loading....</div>
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
import BaseInput from '@/components/forms/BaseInput.vue';
import Tiptap from '@/components/Tiptap.vue';
import { ref } from 'vue';
import useHandleAjaxError from '@/composable/useHandleAjaxError';
import { useFetchAPost } from '@/composable/useFetchAPost';
import { useRouter } from 'vue-router';

const props = defineProps(['slug']);

const post = ref('');
const errors = ref({});
const isLoading = ref(false);
const submitted = ref(false);
const router = useRouter();

function reassignTags() {
    let tags = post.value.tags;
    tags = tags.map((tag) => tag.name);
    post.value.tags = tags;
}

function update() {
    isLoading.value = true;
    reassignTags();

    axios
        .patch(`/api/posts/${props.slug}`, post.value)
        .then(({ data }) => {
            isLoading.value = false;
            submitted.value = true;
            router.push({ name: 'posts.show', params: { slug: data.slug } });
            console.log(data);
        })
        .catch((error) => {
            isLoading.value = false;
            errors.value = useHandleAjaxError(error);
        });
}

useFetchAPost(props.slug, post);
</script>
