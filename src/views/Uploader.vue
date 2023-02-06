<template>
    <div class="max-w-7xl mx-auto mt-10 px-4">
        <div class="my-4 grid md:grid-cols-3 gap-2">
            <div class="">
                <BaseSelect
                    labelClass="form-label"
                    class="mt-1 form-select"
                    label="Model"
                    :options="modelOption"
                    v-model="model"
                />
            </div>
        </div>
        <Uploader
            :options="{
                baseURL: appUrl + '/api',
                maxConcurrentUploads: 2,
            }"
            :handlers="{
                'image/jpg': {
                    endpoint: 'files',
                },
                'image/jpeg': {
                    endpoint: 'files',
                },
                'image/png': {
                    endpoint: 'files',
                },
                'video/mp4': {
                    endpoint: 'files',
                },
                'video/quicktime': {
                    endpoint: 'files',
                },
                'video/mov': {
                    endpoint: 'files',
                },
            }"
        />
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import BaseSelect from '@/components/forms/BaseSelect.vue';
import appUrl from '../../appconfig.js';
import Uploader from '@/components/uploader/components/Uploader.vue';

const model = ref('gallery');
const modelOption = ref(['video', 'gallery']);

provide('model', {
    id: 1,
    name: model,
});
</script>
