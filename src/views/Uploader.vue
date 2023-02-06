<template>
    <div class="max-w-7xl mx-auto mt-10 px-4">
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
                'video/hevc': {
                    endpoint: 'files',
                },
            }"
        />
    </div>
</template>

<script setup>
import appUrl from '../../appconfig.js';
import Uploader from '@/components/uploader/components/Uploader.vue';
</script>
