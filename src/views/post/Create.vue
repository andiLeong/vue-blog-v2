<template>
    <Snack v-if="submitted" type="primary" text="Hey, post was created!"/>

    <form
        @submit.prevent="store"
        @keydown="form.errors.clear($event.target.name)"
        class="space-y-8 divide-y divide-gray-200 my-10 mb-10 max-w-7xl mx-auto px-6"
    >
        <div class="space-y-8 divide-y divide-gray-200">
            <div>
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <BaseInput
                            labelClass="block text-sm font-medium text-gray-700 dark:text-white"
                            placeHolder="Wite a nice title"
                            class="mt-1 shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            label="Title"
                            type="text"
                            v-model="form.title"
                            :error="form.errors.get('title')"
                        />
                    </div>

                    <div class="sm:col-span-4">
                        {{ form.body }}
                        <label
                            for="about"
                            class="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            About
                        </label>

                        <p class="mt-2 text-sm text-gray-500 dark:text-white">
                            Describe the post
                        </p>
                        <tiptap v-model="form.body" @typing="updateBody"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-5">
            <div class="mb-2">
                <ValidationErrors v-if="errors" :errors="errors"/>
            </div>
            <div class="flex justify-start">
                <SubmitButton :loading="isLoading"/>
            </div>
        </div>

    </form>
</template>

<script setup>
import BaseInput from '@/components/forms/BaseInput.vue';
import Form from '@/form/form.js';
import Tiptap from '@/components/Tiptap.vue';
import {ref} from "vue";

import useHandleAjaxError from "@/composable/useHandleAjaxError"

const form = ref(new Form({
    title: '',
    body: getBody()
}))
const errors = ref({})
const isLoading = ref(false)
const submitted = ref(false)


function store() {
    isLoading.value = true;

    axios
        .post(`/api/posts`, form.value)
        .then(() => {
            form.value.reset()
            isLoading.value = false;
            submitted.value = true;
        })
        .catch((error) => {
            isLoading.value = false;
            errors.value = useHandleAjaxError(error)
        });

    submitted.value = false;
}

function getBody(){
    return localStorage.getItem('content');
}

function updateBody(value){
    form.value.body = value
    localStorage.setItem('content',value)
}

</script>
